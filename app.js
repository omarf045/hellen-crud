const { json } = require("express");
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express(json));

app.use("/", require("./router"));

server = app.listen(process.env.PORT || PORT, () => {
  console.log("SERVER escuchando en PORT");
});

server.keepAliveTimeout = 61 * 1000;
