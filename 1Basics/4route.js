// routing
const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.write("<body>home route </body>");
    res.end();
  } else {
    res.write("<body>different route </body>");
    res.end();
  }
});

server.listen(3000);

// similarly we can redirect the user
/*
// for url home route , form... in <> POST ... 
if(url==='/message' and method ==='POST'){
fs.writeFileSync('message.txt', 'test message');
res.statusCode =302;
res.setHeader('/Location','/');
return res.end();
}
*/
