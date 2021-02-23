const express = require("express");
const bodyParser = require("body-parser");

const app = express();

/*
you could use - app.use(express.json()), as well to parse json data 
*/
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

/* so our app.use() includes get/post/del/put req., we specifically switch to 
get/post/... so that our middleware is triggered only when we get specific req...
*/

app.post("/product", (req, res, next) => {
  /*
  req.body() contains key-val pairs of the data submitted in the request body.
  NOTE: request body is the data sent by the client to you api
  */

  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
