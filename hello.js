const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  switch (req.url) {
    case "/about":
      fs.readFile("about.html", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.end(data);
        }
      });
      break;
    case "/":
      fs.readFile("index.html", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.end(data);
        }
      });
      break;
    case "/contact":
      fs.readFile("contact.html", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.end(data);
        }
      });
      break;
    default:
      fs.readFile("404.html", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.end(data);
        }
      });

      break;
  }
});

server.listen(8080, "localhost", () => {
  console.log("server is running");
});
