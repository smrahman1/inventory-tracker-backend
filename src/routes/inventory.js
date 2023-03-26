const express = require('express');
const passport = require('passport');

const router = express.Router();
const InventoryController = require('../controllers/inventoryController');

// Get all inventory items
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  InventoryController.getAllInventory
);

// Add new inventory item
router.post(
  '/add',
  passport.authenticate('jwt', { session: false }),
  InventoryController.addInventoryItem
);

// Update inventory item (increment, decrement, or set quantity, edit name, etc.)
router.put(
  '/update',
  passport.authenticate('jwt', { session: false }),
  InventoryController.updateInventoryItem
);

// Delete inventory item
router.delete(
  '/delete',
  passport.authenticate('jwt', { session: false }),
  InventoryController.deleteInventoryItem
);

module.exports = router;
