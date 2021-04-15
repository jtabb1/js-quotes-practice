const populateURL = 'http://localhost:3000/quotes?_embed=likes'
const quoteContainer = document.querySelector('#quote-list')
const form = document.querySelector("#new-quote-form")

main();

function main(){
    fetchQuotes();
    // newQuoteListener()
}

function fetchQuotes(){
    fetch(populateURL)
    .then(resp => resp.json())
    .then( quotes => {
        quotes.forEach(quote => {
            displayQuote(quote)
        })
    });
}

function displayQuote(quote){
            
    const newli = document.createElement('li');
    newli.className = "quote-card";
    newli.id = quote.id;
    
    const newBlockquote = document.createElement('blockquote');
    newBlockquote.className = 'blockquote';
    
    const newP = document.createElement('p');
    newP.className = 'mb-0';
    newP.innerText = quote.quote;

    const newFooter = document.createElement('footer');
    newFooter.className = 'blockquote-footer';
    newFooter.innerText = quote.author;

    const newBreak = document.createElement('br');

    const newLikeButton = document.createElement('button');
    newLikeButton.className = 'btn-success';
    newLikeButton.id = quote.id;
    if (quote.likes){
        newLikeButton.dataset.likes = parseInt(quote.likes.length);
        newLikeButton.innerHTML = `Likes: <span>${newLikeButton.dataset.likes}</span>`;
    } else {
        newLikeButton.dataset.likes = 0;
        newLikeButton.innerHTML = `Likes: <span>${newLikeButton.dataset.likes}</span>`;
    }
    // newLikeButton.addEventListener('click', likeQuote);

    const newDeleteButton = document.createElement('button');
    newDeleteButton.className = 'btn-danger';
    newDeleteButton.id = quote.id;
    newDeleteButton.innerText = "Delete";
    // newDeleteButton.addEventListener('click', deleteQuote);

    const newEditButton = document.createElement('button');
    newEditButton.className = 'btn-edit';
    newEditButton.id = quote.id;
    newEditButton.innerText = "Edit";
    // newEditButton.addEventListener('click', editQuote);

    newBlockquote.append(newP, newFooter, newBreak, newLikeButton, newDeleteButton, newEditButton);
    newli.append(newBlockquote);
    quoteContainer.append(newli); // => will move outside this function
}

