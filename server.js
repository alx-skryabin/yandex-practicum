const express = require('express');

const app = express();
app.use(express.json({extended: true}))
const PORT = process.env.PORT || 4000;


app.use(express.static(__dirname + '/dist'));


app.use('/*', (req, res) => {
  res.sendFile(`${__dirname}/dist/pages/404/404.html`);
})


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
