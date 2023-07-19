const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/add-product', (req, res) => {
    res.send(`
        <form action="/add-product" method="POST">
            <input type="text" name="name" placeholder="Product Name">
            <input type="text" name="size" placeholder="Product Size">
            <button type="submit">Add Product</button>
        </form>
    `);
});

app.post('/add-product', (req, res) => {
    const name = req.body.name;
    const size = req.body.size;
    console.log('Product Name:', name);
    console.log('Product Size:', size);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
