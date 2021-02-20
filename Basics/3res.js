const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  console.log(req.url, req.method, req.headers);
  //   to send some header
  res.setHeader("Content-Type", "text/html");
  // write works like chunks... we send our html ...
  res.write("<html>");
  res.write("<head> <title> Working test123 </title> </head>");
  res.write("<body>testing </body>");
  res.write("</html>");
});

server.listen(3000);
