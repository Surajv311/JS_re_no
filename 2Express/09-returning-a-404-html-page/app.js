const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // earlier we used: res.send("<h1> 404 error </h1>")...
  // now we are sending file from the dir.
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
