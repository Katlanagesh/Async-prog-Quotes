

let Card = document.getElementById("container");
let Quote = document.getElementById("quote");
let author = document.getElementById("author");
let whatsappbtn = document.getElementById("whatsapp-button");
let newQuotebtn = document.getElementById("new-quote");

let response = [];

async function getQuotes() {
    let random = Math.ceil(Math.random() * 1644)

    let data= await fetch("https://type.fit/api/quotes")
    response = await data.json();
    (response[random].text.length > 150) , Quote.innerText = response[random].text;
        (!response[random].author) , author.innerText = response[random].author;
}
getQuotes();

