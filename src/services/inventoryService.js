const Inventory = require('../db/models/inventory');
const { GoogleAuth } = require('google-auth-library');
const { CLOUD_FUNCTION_URL, CREDENTIALS_PATH } = require('../utils/constants');

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

  static async fetchInventoryItem() {
    const auth = new GoogleAuth({ keyFilename: CREDENTIALS_PATH });
    const client = await auth.getIdTokenClient(CLOUD_FUNCTION_URL);
    const result = await client.request({ url: CLOUD_FUNCTION_URL });
    return result.data;
  }
}

module.exports = InventoryService;
