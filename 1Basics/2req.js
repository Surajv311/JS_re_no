//  to import files in node

const http = require("http"); // to import global module , for local file -> "./..."

// // method 1
// function fun(req,res){
// }
// http.createServer(func);

// // method 2
// http.createServer(function(req,res)=>{
//     //  function takes two parameters
// })

// method 3
const server = http.createServer((req, res) => {
  //  function takes two parameters
  console.log(req);
  console.log(req.url, req.method, req.headers); // from webpage... different reqs.
});
//  we store it in const as server is created only once
// process.exit() // to exit loop
server.listen(3000);

/* 
Note: 
createServer() event never finishes by default
*/
