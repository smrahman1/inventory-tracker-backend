const bcrypt = require('bcrypt');
const database = require('../database_connection');

class Inventory {
  static async getAllInventory(username) {
    const user = await database('users')
      .where({ username })
      .first()
      .then((row) => row);

    if (user) {
      return await database('inventory').then((row) => row);
    }
  }

  static async updateInventoryItem(id, field, value) {
    return await database('inventory')
      .where({ id })
      .first()
      .update({ [field]: value });
  }

  static async addInventoryItem(item, quantity, size, unitPrice) {
    return await database('inventory')
      .insert({
        title: item,
        quantity: +quantity,
        size: +size,
        unit_price: +unitPrice,
      })
      .catch((err) => console.log(err));
  }

  static async deleteInventoryItem(ids) {
    await database('inventory')
      .whereIn('id', ids)
      .del()
      .catch((err) => console.log(err));
    return await database('inventory').then((row) => row);
  }
}

module.exports = Inventory;
