const express = require("express");
const morgan = require("morgan");
const beerList = require("./views/beerList");
const beerDetails = require("./views/beerDetails");
const beer = require("./beer");
const app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  const posts = beer.list();
  res.send(beerList(posts));
});

app.get("/posts/:id", (req, res) => {
  const post = beer.find(req.params.id);
  res.send(beerDetails(post));
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});