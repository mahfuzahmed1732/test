const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send("my first nodejs project deploy on Vercel my erf ssd jjfd wwrgc wettg e4ttg sf ftt oyfd frvj jycdegg gteeevg edgyvhkv ");
});

app.get('/contact', (req, res) => {
  res.status(200).send("my contact page ....is ght ryhgs ");
});

// Export app instead of listen
module.exports = app;
