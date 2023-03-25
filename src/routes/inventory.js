const express = require('express');
const router = express.Router();
const InventoryController = require('../controllers/inventoryController');

// Get all inventory items
router.post('/', InventoryController.getAllInventory);

// Add new inventory item
router.post('/add', InventoryController.addInventoryItem);

// Update inventory item (increment, decrement, or set quantity, edit name, etc.)
router.put('/update', InventoryController.updateInventoryItem);

// Delete inventory item
router.delete('/delete', InventoryController.deleteInventoryItem);

module.exports = router;
