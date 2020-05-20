const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from YA FUCKIN BOI DIBAR!");
});
 
module.exports.app = app;
