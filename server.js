const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.end('Hello');
});

app.listen(8081, () => {
  console.log('started');
});
