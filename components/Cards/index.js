// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get("https://lambda-times-backend.herokuapp.com/articles").then(response=> {
    Object.keys(response.data.articles).forEach(topic => {
            response.data.articles[topic].forEach(articleInfo => createArticle(topic, articleInfo));
        });
    }).catch(console.log);
function createArticle(topic, articleInfo){
    const card = document.querySelector(".cards-container").appendChild(document.createElement("div"));
    card.classList.add("card");
    const headline = card.appendChild(document.createElement("div"));
    headline.classList.add("headline");
    headline.textContent = articleInfo.headline
    const author = card.appendChild(document.createElement("div"));
    author.classList.add("author");
    const imgContainer = author.appendChild(document.createElement("div"));
    imgContainer.classList.add("img-container");
    const img = imgContainer.appendChild(document.createElement("img"));
    img.src = articleInfo.authorPhoto
    author.appendChild(document.createElement("span")).textContent = `By ${articleInfo.authorName}`;
    //Strecth Stuff
    card.dataset.articleTopic = topic;
}
