const fs = require("fs");

const server = require("http").createServer();

server.on("request", (req, res) => {
  // fs.readFile("./big", (err, data) => {
  //   if (err) {
  //     console.log("error", err);
  //   }
  //   res.end(data);
  // });
  const src = fs.createReadStream("./big");
  src.pipe(res);
});

server.listen(3000);
