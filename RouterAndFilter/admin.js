const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res) => {
    res.send(`
        <form action="/admin/add-product" method="POST">
            <input type="text" name="name" placeholder="Product Name">
            <input type="text" name="size" placeholder="Product Size">
            <button type="submit">Add Product</button>
        </form>
    `);
});

router.post('/add-product', (req, res) => {
    const name = req.body.name;
    const size = req.body.size;
    console.log('Product Name:', name);
    console.log('Product Size:', size);
    res.redirect('/');
});

module.exports = router;
