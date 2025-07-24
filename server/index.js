const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('<h1>API du serveur de gestion scolaire</h1>');
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});