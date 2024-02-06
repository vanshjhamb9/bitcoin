// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors'); 
const app = express();
const PORT = 4000;

// Use cors middleware
app.use(cors());

app.get('/api/bitcoinData', async (req, res) => {
    try {
        const { page = 1 } = req.query;
        const perPage = 10;

        const response = await axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=24h%2C7d`
        );

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
