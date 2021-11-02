const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => res.send("Hello World!"));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});