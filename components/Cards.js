// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

// Linking data from outside source to here
axios
    .get('https://lambda-times-api.herokuapp.com/articles')
    // If successful at grabbing data, do this:
    .then(res => {
        // Declared article variable to Object.values of res.data.articles
        const article = Object.values(res.data.articles)
        // Looping through article with the argument of articles
        article.forEach(articles => {
            articles.forEach(allArticles => {
                const articleCard = cardMaker(allArticles)
                cardsContainer.append(articleCard);
            })
        })
    })
    // If error, do this:
    .catch(err => {
        console.log(err);
    })


// Declared variable 'cardsContainer' to link to class named 'cards-container'
const cardsContainer = document.querySelector('.cards-container')


// Function that creates every card this specific way
function cardMaker(data) {

    // Creating New Elements for HTML
    const cardBox = document.createElement('div');
    const headerTitle = document.createElement('div');
    const authorBox = document.createElement('div');
    const imgBox = document.createElement('div');
    const imgURL = document.createElement('img');
    const authorNameText = document.createElement('span');

    // Creating Class Names for New HTML Elements
    cardBox.classList.add('card');
    headerTitle.classList.add('headline');
    authorBox.classList.add('author');
    imgBox.classList.add('img-container');

    // Linking source to 'data' outside function
    headerTitle.textContent = data.headline;
    imgURL.src = data.authorPhoto;
    authorNameText.textContent = `BY: ${data.authorName}`;

    // Creating Parent / Child relationships for New HTML Elements
    cardBox.appendChild(headerTitle);
    cardBox.appendChild(authorBox);
    authorBox.appendChild(imgBox)
    imgBox.appendChild(imgURL);
    authorBox.appendChild(authorNameText);

    // Creating an event listener for cardBox
    cardBox.addEventListener('click', () => {
        console.log(data.headline)
    })

    // Returns main container of cards creating parent/child relationship with cardBox
    return cardBox;
    
}
