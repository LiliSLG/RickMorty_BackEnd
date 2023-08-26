var http = require("http");

const PORT = 3001;

module.exports =
  http.createServer(function (req, res) {
      // console.log(req.url);
    //   console.log(`Server raised in port ${PORT}`);
    // res.setHeader('Access-Control-Allow-Origin', '*');

    //   if (req.url === "
    //   ") {

        
    //     return;
    //   }
 
    })
    .listen(PORT, "localhost");
