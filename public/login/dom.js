var view = document.getElementsByClassName('container');

const fetch =  (url, method, cb) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=> {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          cb(xhr.responseText);
      }
    };
  }
    xhr.open(method, url, true);
    xhr.send();
  };

  var container = document.querySelector('.container')
  container.innerHTML = '';


  window.onload = documentLoadedHandler;

  const url = "/clientApi";

  function documentLoadedHandler () {
    fetch( url,"GET", (res) => {
      var results = JSON.parse(res);
      if(results.articles.length>0){
        var containerdiv = document.createElement('div');
        // Reset article list
        // Build article list
        results.articles.forEach(function (article) {
          buildArticleElement(article, (err, result)=>{
             if(err){
               console.log(err.message);
             } 
             else{
              container.appendChild(result);
             }
          });

         
          });
        }

    })
}



function buildArticleElement(article,cb){

  if(!article){
    cb(new TypeError("Aticle is null"))
  } 
  else if (typeof(article) !==  "object"){
    cb(new TypeError ("Article is not an Object"))
  }else {
    cb(null,buildArticle(article) )
  }
  return 0;
  }


  function buildArticle(article){
    var articleElement = document.createElement('div');
    var articleTitle = document.createElement('p');
    var articleImage = document.createElement('img');
    var articleDescription = document.createElement('p');
    var articleLink = document.createElement('a');
    articleTitle.textContent = article.title;
    articleDescription.textContent = article.description;
    articleImage.src = article.urlToImage;
    articleLink.href = article.url;
    articleLink.appendChild(articleImage);
    articleElement.appendChild(articleLink);
    articleElement.appendChild(articleTitle);
    articleElement.appendChild(articleDescription);
    return articleElement;
  }

  


