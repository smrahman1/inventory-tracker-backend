const Inventory = require('../db/models/inventory');

class InventoryService {
  static async getAllInventory(username) {
    return Inventory.getAllInventory(username);
  }

  static async updateInventoryItem(id, field, value) {
    return Inventory.updateInventoryItem(id, field, value);
  }

  static async addInventoryItem(item, quantity, size, unitPrice) {
    return Inventory.addInventoryItem(item, quantity, size, unitPrice);
  }

  static async deleteInventoryItem(ids) {
    return Inventory.deleteInventoryItem(ids);
  }
}

module.exports = InventoryService;
