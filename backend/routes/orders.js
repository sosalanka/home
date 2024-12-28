// routes/orders.js
const express = require('express');
const router = express.Router();
const { Order } = require('../models/Order');
const auth = require('../middleware/auth');

// Create order
router.post('/', auth, async (req, res) => {
    try {
        const order = new Order({
            ...req.body,
            user: req.user._id
        });
        await order.save();
        res.status(201).json(order);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get user orders
router.get('/my-orders', auth, async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id })
            .populate('products.product');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
