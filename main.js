const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";

async function getQuote(){
    try {
        btnEl.innerText = "Loading...";
        btnEl.disabled = true;
    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContenet = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerText = quoteContenet;
    authorEl.innerText = "~" + quoteAuthor;
    btnEl.innerText = "GET A QUOTE";
        btnEl.disabled = false;
    } catch (error) {
        quoteEl.innerText = "An error happend, try again later";
        authorEl.innerText = "try again or check internet connection";
        btnEl.innerText = "GET A QUOTE"
        btnEl.disabled = true;
    }
    
}
getQuote();

btnEl.addEventListener("click", getQuote);