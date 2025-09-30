const axios = require('axios');

class IndexController {
    getIndex(req, res) {
        res.send('Hello, World!');
    }

    async getColombiaInfo(req, res) {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/alpha/col');
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: 'Error consultando la API externa' });
        }
    }
}

module.exports = IndexController;