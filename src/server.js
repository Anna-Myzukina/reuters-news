const http = require('http');
const request = require('request');
const router = require('./router');
const fs = require('fs');



const server = http.createServer(router);
const port = process.env.PORT || 4000;

setInterval(()=>{
  request('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=a1c4e271af4349d8ac62aa6aceeee93e',function(error, response, body){
    if(error){
      console.log(error.message)
    }
    else{
  let data = response.body;  
  fs.writeFile('./news.json', data, (err) => {
    if (err) 
    console.log(err);
    else{
    return console.log('File written')
    }
  }); 
    }
  });
},30000);

const myRequest = (url, cb) => {
  http.get(url, (response) => {
    response.setEncoding('utf8');

    let body = '';
    response.on('data', (data) => {
     body = data;
    });

    response.on('end', () => {
      cb(null, response, body);
    });

  }).on('error', (err) => {
    cb(err);
  });
};



// myRequest("https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=a1c4e271af4349d8ac62aa6aceeee93e",function(err,res,body){

//   if(err){
//       console.log(err.message)
//     }
//     else{
//     let data = JSON.stringify(res);  
//     fs.writeFile('./news.json', data, (error) => {
//       if (error) 
//       console.log(error);
//       else{
//       return console.log('File written')
//       }
//     }); 
//     }

// })





server.listen(port, result =>{
  console.log(`Server running successfully on port: ${port}`);
});