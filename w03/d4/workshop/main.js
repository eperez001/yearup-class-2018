//This comes from data.js
var gifs = window.data.data;

console.log(gifs);

function randomGifs(){
  let gifsElement = document.getElementById('gifs');
  // if (gifsElement.style.display="none"){
    gifsElement.style.display="block";
// }
  let randomNumber = Math.floor(Math.random() * gifs.length);
gifsElement.src = gifs[randomNumber].images.original.url;
}

let button = document.querySelector('button');
button.addEventListener('click', randomGifs);

playGifs();
