const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
