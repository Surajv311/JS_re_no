const express = require("express");
const bodyParser = require("body-parser");

const app = express();

/*
you could use - app.use(express.json()), as well to parse json data 

NOTE:
We know: const app = express(); 
now we are using body-parser~express: app.use()....
*/
app.use(bodyParser.urlencoded({ extended: false }));

// its a GET req.
app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
    // redirecting to /product route
  );
});

/* so our app.use() includes all the get/post/del/put req., we specifically switch to 
get/post/... so that our middleware is triggered only when we get specific req...
*/

app.post("/product", (req, res, next) => {
  /*
  req.body() contains key-val pairs of the data submitted in the request body.
  NOTE: request body is the data sent by the client to your api
  */

  console.log(req.body);
  //  so it would console log your client data and redirect to "/" home route
  res.redirect("/");
});

// it's advised that "/" must be defined in the bottom.
app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});

// listening server...
app.listen(3000);
