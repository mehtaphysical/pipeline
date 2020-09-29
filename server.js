const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.end('Hello');
});

app.listen(8080, () => {
  console.log('started');
});
