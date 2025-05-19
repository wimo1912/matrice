// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let count = 0;

app.get('/', (req, res) => {
  count++;
  res.send(`<h1>👋 Visites : ${count}</h1>`);
});

app.listen(port, () => {
  console.log(`✅ Serveur en écoute sur http://localhost:${port}`);
});
