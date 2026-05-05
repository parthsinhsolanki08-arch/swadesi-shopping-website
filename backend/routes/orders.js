const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const { verifyToken, verifyAdmin } = require('../middleware/auth');

// Create a new order (allow guest or logged in user)
router.post('/', async (req, res) => {
  const { items, totalAmount, userId } = req.body;
  
  if (!items || items.length === 0) {
    return res.status(400).json({ message: 'No items in order' });
  }

  try {
    const orderData = { items, totalAmount };

    if (userId) orderData.user = userId; // Link to user if passing ID
    
    const order = new Order(orderData);
    
    await order.save();
    res.status(201).json({ message: 'Order is successfully placed', order });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Admin Route: Get all orders
router.get('/all', verifyAdmin, async (req, res) => {
  try {
    const orders = await Order.find().populate('user', 'name email').sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// New route to update order status (admin only)
router.put('/:id/status', verifyAdmin, async (req, res) => {
  const { status } = req.body;
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    order.status = status || 'Accepted';
    await order.save();
    res.json({ message: 'Order status updated', order });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

