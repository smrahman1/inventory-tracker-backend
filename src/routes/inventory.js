const express = require('express');
const router = express.Router();
const InventoryController = require('../controllers/inventoryController');

// Get all inventory items
router.get('/', InventoryController.getAllInventoryItems);

// Add new inventory item
router.post('/add', InventoryController.addInventoryItem);

// Update inventory item (increment, decrement, or set quantity, edit name, etc.)
router.put('/update/:id', InventoryController.updateInventoryItem);

// Delete inventory item
router.delete('/delete/:id', InventoryController.deleteInventoryItem);

module.exports = router;
