const express = require('express');
const app = express();
const routes = require('./routes'); // Asegúrate que este es el archivo correcto

app.use(express.json());
app.use('/api-express', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en: http://localhost:${PORT}/api-express`);
});