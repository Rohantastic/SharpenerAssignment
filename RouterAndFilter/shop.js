const express = require('express');
const router = express.Router();

router.get('/product/:id', (req, res) => {
    const productId = req.params.id;
    
    res.send(`Product ID: ${productId}`);
});

router.get('/category/:name', (req, res) => {
    const categoryName = req.params.name;
    
    res.send(`Category Name: ${categoryName}`);
});

module.exports = router;
