const handler = require('./handler.js');



const router = (req, res) => {
  const url = req.url;
  if(url==="/" || url==="/login"){
    handler.handleHome(req,res);
  }else if(url === '/news'){
    handler.handleNews(req,res);
  }else if(url === '/clientApi'){
    handler.handleclientApi(req,res);
  }
  else{
    handler.serveFiles(req, res);
  }
};

module.exports = router;