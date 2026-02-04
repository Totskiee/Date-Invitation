const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public')); // serve front-end files

// Endpoint to receive Yes click
app.post('/yes-click', (req, res) => {
    const user = req.body.user || 'Anonymous';
    console.log(`✅ ${user} clicked YES!`); // prints notification in console
    res.send({ status: 'ok' }); // response back to front-end
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
