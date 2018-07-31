var view = document.getElementsByClassName('container');

const fetch = function (url, cb) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange => () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          cb(null, JSON.parse(xhr.responseText));
        } else {
          consolr.log('error');
        }
      }
    };
    xhr.open('GET', url, true);
    xhr.send();
  };

  window.onload = documentLoadedHandler;

  const url = "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=a1c4e271af4349d8ac62aa6aceeee93e";

  function documentLoadedHandler () {
    fetch(url, (err, res) => {
      if (err) {
        document.querySelector('.container').innerHTML = '';
        document.querySelector('.container').appendChild(noResults('reuters'));
        return;
      }
      if (res) {
        // Reset article list
        document.querySelector('.container').innerHTML = '';
        // Build article list
        res.forEach(function (article) {
          appendToDom(buildArticleElement(article, true), true);
          if (res.articles[0]){
            // var title = obj.articles[0].title;
            // var title1 = document.createElement('h3');
            //     title1.innerHTML = title;
            var image = res.articles[0].urlToImage;
            var image = document.createElement("img");
            image.src = image1;
            view.appendChild(image);
            var hr = create('hr');
            view.appendChild(hr);
            for (var i = 0 ; i < 10 ; i++){
                var name = res.articles[0].title[i];
                var li = create("LI");
                var newLink = create("a");
                newLink.setAttribute('href', '#');
                newLink.innerHTML = name;
                view.appendChild(li);
                li.appendChild(newLink);

            }
        });
      })
      

    }
}
