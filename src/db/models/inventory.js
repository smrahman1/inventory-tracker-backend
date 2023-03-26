const database = require('../database_connection');

class Inventory {
  static async getAllInventory(username) {
    const user = await database('users')
      .where({ username })
      .first()
      .then((row) => row);

    if (user) {
      return database('inventory').then((row) => row);
    }
    return [];
  }

  static async updateInventoryItem(id, field, value) {
    return database('inventory')
      .where({ id })
      .first()
      .update({ [field]: value });
  }

  static async addInventoryItem(item, quantity, size, unitPrice) {
    return database('inventory')
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
    return database('inventory').then((row) => row);
  }
}

module.exports = Inventory;
