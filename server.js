const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('<h1>My name is Uzumaki Naruto</h1>');
});

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
