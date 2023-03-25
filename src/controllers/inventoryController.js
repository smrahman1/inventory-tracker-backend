const InventoryService = require('../services/inventoryService');
const createError = require('http-errors');
const passport = require('../middleware/passport');

class InventoryController {
  static async getAllInventory(req, res, next) {
    try {
      const inventory = await InventoryService.getAllInventory(
        req.body.username
      );
      res.status(200).json(inventory);
    } catch (e) {
      next(createError(500, e.message));
    }
  }

  static async addInventoryItem(req, res, next) {
    try {
      const { title, quantity, size, unitPrice } = req.body;
      const response = await InventoryService.addInventoryItem(
        title,
        quantity,
        size,
        unitPrice
      );
      res.status(200).json(response);
    } catch (e) {
      next(createError(500, e.message));
    }
  }

  static async updateInventoryItem(req, res, next) {
    try {
      const response = await InventoryService.updateInventoryItem(
        req.body.id,
        req.body.field,
        req.body.value
      );
      res.status(200).json(response);
    } catch (e) {
      next(createError(500, e.message));
    }
  }

  static async deleteInventoryItem(req, res, next) {
    try {
      const response = await InventoryService.deleteInventoryItem(req.body.ids);
      res.status(200).json(response);
    } catch (e) {
      next(createError(500, e.message));
    }
  }
}

module.exports = InventoryController;
