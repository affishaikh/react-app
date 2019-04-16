const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
let count = 2;

app.use(express.static('client/build'));

app.get('/count', (req, res) => {
  res.send(JSON.stringify({ counter: count }));
});

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
