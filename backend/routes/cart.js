const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');

// Get all cart items
router.get('/', async (req, res) => {
  try {
    const carts = await CartItem.find().populate('productId');
    res.json(carts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add to cart
router.post('/', async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    let cartItem = await CartItem.findOne({ productId });
    if (cartItem) {
      cartItem.quantity += quantity || 1;
    } else {
      cartItem = new CartItem({ productId, quantity: quantity || 1 });
    }
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update cart item quantity
router.put('/:id', async (req, res) => {
  try {
    const cartItem = await CartItem.findByIdAndUpdate(
      req.params.id,
      { quantity: req.body.quantity },
      { new: true }
    );
    if (!cartItem) return res.status(404).json({ message: 'Item not found' });
    res.json(cartItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Remove from cart
router.delete('/:id', async (req, res) => {
  try {
    const cartItem = await CartItem.findByIdAndDelete(req.params.id);
    if (!cartItem) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item removed from cart' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
