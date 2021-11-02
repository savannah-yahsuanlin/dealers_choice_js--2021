const express = require("express");
const morgan = require("morgan");
const beerList = require("./views/beerList")
const beer = require("./beer");
const app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  const posts = beer.list();
  res.send(beerList(posts));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});