const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
let count = 0;

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.get('/count', (req, res) => {
  res.send({ counter: count });
});

app.post('/count', (req, res) => {
  count++;
  res.send({ counter: count });
});

app.use(express.static('client/build'));
app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
