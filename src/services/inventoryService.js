const Inventory = require('../db/models/inventory');

class InventoryService {
  static async getAllInventory(username) {
    return await Inventory.getAllInventory(username);
  }

  static async updateInventoryItem(id, field, value) {
    return await Inventory.updateInventoryItem(id, field, value);
  }
  static async addInventoryItem(item, quantity, size, unitPrice) {
    return await Inventory.addInventoryItem(item, quantity, size, unitPrice);
  }
  static async deleteInventoryItem(ids) {
    return await Inventory.deleteInventoryItem(ids);
  }
}

module.exports = InventoryService;
