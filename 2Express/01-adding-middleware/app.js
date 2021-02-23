//  adding middlewares
/*
We are using expressjs, though we could also use other npm packages like
vanilla nodejs/adonisjs/koa/sailsjs.

request goes from top to bottom in app.js and hence nodejs funnels your req 
through the middlewares present ... 

ExpressJS relies heavily on middleware functions.
you can add them by calling use()

Middleware functions: Its basically a function that would receive 
res/req objects like route handlers and in addition would have a 
third argument as a function which is called once your code 
is executed...
The app.use() is specific to using middlewares and 
app.get()/post()... are all route handlers. 
Route handlers shouldn't be necessarily considered as middlewares. 

Middleware func. handles a request and should call 
next() to forward a req. to next function in line or 
send a respons. 

*/

const http = require("http");

const express = require("express"); // express module can be looked up in node_modules

const app = express(); // using express function

app.use((req, res, next) => {
  console.log("In the middleware!");
  next(); // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hello from Express!</h1>");
});

const server = http.createServer(app);

server.listen(3000);
