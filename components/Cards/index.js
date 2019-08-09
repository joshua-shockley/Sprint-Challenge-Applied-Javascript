// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card"> theCard
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


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
        const newCard = cardArticles(response.data.articles.bootstrap[0])
        console.log(newCard);
        // main.appendChild(newCard)
    })
    .catch((err) => {
        console.log(err)
    })
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
        const newCard = cardArticles(response.data.articles.bootstrap[1])
        console.log(newCard);
        // main.appendChild(newCard)
    })
    .catch((err) => {
        console.log(err)
    })
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
        const newCard = cardArticles(response.data.articles.bootstrap[2])
        console.log(newCard);
        // main.appendChild(newCard)
    })
    .catch((err) => {
        console.log(err)
    })

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
        const newCard = cardArticles(response.data.articles.javascript[0])
        console.log(newCard);
        // main.appendChild(newCard)
    })
    .catch((err) => {
        console.log(err)
    })

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
        const newCard = cardArticles(response.data.articles.javascript[1])
        console.log(newCard);
        // main.appendChild(newCard)
    })
    .catch((err) => {
        console.log(err)
    })

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
        const newCard = cardArticles(response.data.articles.javascript[2])
        console.log(newCard);
        // main.appendChild(newCard)
    })
    .catch((err) => {
        console.log(err)
    })

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
        const newCard = cardArticles(response.data.articles.javascript[3])
        console.log(newCard);
        // main.appendChild(newCard)
    })
    .catch((err) => {
        console.log(err)
    })

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
        const newCard = cardArticles(response.data.articles.jquery[0])
        console.log(newCard);
        // main.appendChild(newCard)
    })
    .catch((err) => {
        console.log(err)
    })

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
        const newCard = cardArticles(response.data.articles.jquery[1])
        console.log(newCard);
        // main.appendChild(newCard)
    })
    .catch((err) => {
        console.log(err)
    })

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
        const newCard = cardArticles(response.data.articles.jquery[2])
        console.log(newCard);
        // main.appendChild(newCard)
    })
    .catch((err) => {
        console.log(err)
    })

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
        const newCard = cardArticles(response.data.articles.node[0])
        console.log(newCard);
        // main.appendChild(newCard)
    })
    .catch((err) => {
        console.log(err)
    })

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
        const newCard = cardArticles(response.data.articles.node[1])
        console.log(newCard);
        // main.appendChild(newCard)
    })
    .catch((err) => {
        console.log(err)
    })

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
        const newCard = cardArticles(response.data.articles.technology[0])
        console.log(newCard);
        // main.appendChild(newCard)
    })
    .catch((err) => {
        console.log(err)
    })

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
        const newCard = cardArticles(response.data.articles.technology[1])
        console.log(newCard);
        // main.appendChild(newCard)
    })
    .catch((err) => {
        console.log(err)
    })

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
        const newCard = cardArticles(response.data.articles.technology[2])
        console.log(newCard);
        // main.appendChild(newCard)
    })
    .catch((err) => {
        console.log(err)
    })



const main = document.querySelector('.cards-container');

function cardArticles(stuff) {
    const theCard = document.createElement('div');
    theCard.classList.add('card');
    main.appendChild(theCard)

    const theHeadline = document.createElement('div');
    theHeadline.classList.add('headline');
    theCard.appendChild(theHeadline)
    theHeadline.textContent = `${stuff.headline}`;

    const theAuthor = document.createElement('div');
    theAuthor.classList.add('author');
    theCard.appendChild(theAuthor)

    const thePicHolder = document.createElement('div');
    thePicHolder.classList.add('img-container');
    theAuthor.appendChild(thePicHolder)

    const thePic = document.createElement('img');
    thePic.setAttribute('src', `${stuff.authorPhoto }`);
    thePicHolder.appendChild(thePic)

    const theName = document.createElement('span');
    theName.textContent = `by ${stuff.authorName}`;
    theAuthor.appendChild(theName);







    return theCard
}