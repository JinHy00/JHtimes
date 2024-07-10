const API_KEY = `808d56a477c5434cb58b497bc9884b68`;
let newsList = [];
const getNews = async () => {
  const url = new URL(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  );
  console.log("111", url);
  const response = await fetch(url);
  const date = await response.json();
  newsList = date.articles;
  render();
  console.log("222", response);
  console.log("333", newsList);
};
const render = () => {
  const newsHTML = newsList
    .map(
      (news) => `<div class="row news">
          <div class="col-lg-4">
            <img class="news-img-size" src=${news.urlToImage} />
          </div>
          <div class="col-lg-8">
            <h2>${news.title}</h2>
            <p>${news.description}</p>
            <div>${news.source.name}*${news.publishedAt}</div>
          </div>
        </div>`
    )
    .join("");
  console.log(newsHTML);
  document.getElementById("news-board").innerHTML = newsHTML;
};

getNews();
