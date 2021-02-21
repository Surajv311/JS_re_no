const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const { static } = require("express");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Here express.static is added because when it pulls the html document, we know that
// the css file is imported/linked in the html file. We need to pull the css file as well
// otherwise only the html file would be rendered via app.js. So to render
// all the other static files with our sent file(in res for our req.), we use static.
/*
[OR]
You are not limited to serving dummy text files. 
you can sendFile() to your users, if req. directly made for a file (eg. .css)
you can enable static serving of such files via express.static()
*/

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
