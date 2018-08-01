const http = require('http');
const request = require('request');
const router = require('./router');
const fs = require('fs');



const server = http.createServer(router);
const port = process.env.PORT || 4000;

// setInterval(()=>{
  request('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=a1c4e271af4349d8ac62aa6aceeee93e',function(error, response, body){
    if(error){
      console.log(error.message)
    }
    else{
  let data = JSON.stringify(response);  
  fs.writeFile('./news.json', data, (err) => {
    if (err) console.log(err)
    console.log({res})
    return console.log('File written')
  }); 
    }
  });
// },60000);



fs.writeFile('./news.json', "hello world"); 


server.listen(port, result =>{
  console.log(`Server running successfully on port: ${port}`);
});