

let Card = document.getElementById("container");
let Quote = document.getElementById("quote");
let author = document.getElementById("author");
let whatsappbtn = document.getElementById("whatsapp-button");
let newQuotebtn = document.getElementById("new-quote");

let response = [];


async function getQuotes() {
    let random = Math.ceil(Math.random() * 16)

    let data= await fetch("https://type.fit/api/quotes")
    response = await data.json();
// console.log(response)

     Quote.innerText = response[random].text;
     author.innerText = response[random].author;
}
function shareonWhatsapp() {
    let whatsappUrl = `whatsapp://send?text=${Quote.innerText} - ${author.innerText}`
    window.open(whatsappUrl);

}
getQuotes();

