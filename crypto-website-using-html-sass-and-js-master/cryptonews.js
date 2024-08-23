const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk');
xhr.setRequestHeader('x-rapidapi-key', 'c904d0e6cdmshe1d6500a84a211bp16f9e9jsn01e64cd7610d');
xhr.setRequestHeader('x-rapidapi-host', 'cryptocurrency-news2.p.rapidapi.com');

xhr.send(data);


const axios = require('axios');

const exchangeRates = {
    BTC: { USD: 30000, NGN: 12000000 },
    ETH: { USD: 2000, NGN: 800000 },
    // Add more currencies and their rates
};

exports.buyCrypto = async (req, res) => {
    const { currency, amount, fiatCurrency } = req.body;
    try {
        const rate = exchangeRates[currency][fiatCurrency];
        const cryptoAmount = amount / rate;
        res.status(200).json({ currency, cryptoAmount, fiatCurrency, amount });
    } catch (error) {
        res.status(500).json({ error: 'Error buying cryptocurrency' });
    }
};

exports.sellCrypto = async (req, res) => {
    const { currency, cryptoAmount, fiatCurrency } = req.body;
    try {
        const rate = exchangeRates[currency][fiatCurrency];
        const amount = cryptoAmount * rate;
        res.status(200).json({ currency, cryptoAmount, fiatCurrency, amount });
    } catch (error) {
        res.status(500).json({ error: 'Error selling cryptocurrency' });
    }
};

exports.swapCrypto = async (req, res) => {
    const { fromCurrency, toCurrency, fromAmount } = req.body;
    try {
        const fromRateUSD = exchangeRates[fromCurrency].USD;
        const toRateUSD = exchangeRates[toCurrency].USD;
        const fromAmountInUSD = fromAmount * fromRateUSD;
        const toAmount = fromAmountInUSD / toRateUSD;
        res.status(200).json({ fromCurrency, toCurrency, fromAmount, toAmount });
    } catch (error) {
        res.status(500).json({ error: 'Error swapping cryptocurrency' });
    }
};

const express = require('express');
const app = express();
const cryptoRoutes = require('./routes/cryptoRoutes');

app.use(express.json());
app.use('/api/crypto', cryptoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(Server running on port ${PORT});
});

crypto-exchange/
|-- node_modules/
|-- src/
|   |-- controllers/
|   |   |-- cryptoController.js
|   |-- routes/
|   |   |-- cryptoRoutes.js
|   |-- app.js
|-- package.json
|-- README.md
