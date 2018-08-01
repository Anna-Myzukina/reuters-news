var fs = require("fs");
var path = require("path");

function handleHome(req, res) {
  fs.readFile(path.join(__dirname , "..", "public/login/index.html"), function(err, file) {
    if (err) {
      res.writeHead(500, { "content-type": "text/plain" });
      console.log(err);
      res.end();
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(file);
    }
  });
}

function handleNews(req, res) {
  fs.readFile(path.join(__dirname , "..","public/news/index.html"), function(err, file) {
    if (err) {
      res.writeHead(500, { "content-type": "text/plain" });
      console.log(err);
      res.end();
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(file);
    }
  });
}

function serveFiles(req, res) {
  var url = req.url;
  const extension = url.split(".")[1];
  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    ico: "image/x-icon",
    jpg: "image/jpg"
  };
  fs.readFile(path.join(__dirname, "..", url), function(err, file) {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(200, { "content-type": extensionType[extension] });
      res.end(file);
    }
  });
}

function handleclientApi(req, res) {
  var mainJson = require("../news.json");
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(mainJson));

}




module.exports = {handleHome, handleNews, serveFiles, handleclientApi };