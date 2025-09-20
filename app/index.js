const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send("my first nodejs project deploy on Vercel");
});

// Export app instead of listen
module.exports = app;
