const handler = require('./handler.js');



const router = (req, res) => {
  const url = req.url;
  if(url==="/" || url==="/login"){
    handler.handleHome(req,res);
  }else if(url === '/news'){
    handler.handleNews(req,res);
  }else if(url === '/clientApi'){
    handler.handleclientApi(req,res);
  }else if(url.indexOf('public')!= -1 && url.indexOf('.')!=-1){
    handler.serveFiles(req, res);

  }
  else{
        handler.handleNotFound(req, res);

  }
};

module.exports = router;