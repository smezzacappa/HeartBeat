let black = document.getElementById("black_button");
let red = document.getElementById("red_button");
let blue = document.getElementById("blue_button");
let display = document.getElementById("replaced");
let carContainer = document.getElementById("carContainer");
let carColor = document.getElementById("car");

function displayAdBlack(color) {
  display.innerHTML = document.getElementById(color).innerHTML;
  carColor.style.color = "black";
  return false;
}
function displayAdRed(color) {
  display.innerHTML = document.getElementById(color).innerHTML;
  document.getElementById("car").style.color = "red";
}
function displayAdBlue(color) {
  display.innerHTML = document.getElementById(color).innerHTML;
  document.getElementById("car").style.color = "blue";
}
let icon = document.getElementById("car");

function init() {
  document.getElementById("car").style.color = "black";
}

function hideAd(prop) {
  display.innerHTML = document.getElementById(prop).innerHTML;
  console.log(display);
}

let phrases = document.getElementById("phrase");
let link = document.querySelector("a");

function onB() {
  document.getElementById("overlay").style.display = "block";
  carColor.style.color = "black";
  phrases.innerHTML = "You want to leave the site <br> to see the black car?";
  link.getAttribute("href");
  link.setAttribute(
    "href",
    "https://duckduckgo.com/?q=black+car&t=brave&iar=images&iax=images&ia=images"
  );
}
function onR() {
  document.getElementById("overlay").style.display = "block";
  carColor.style.color = "red";
  phrases.innerHTML = "You want to leave the site <br> to see the red car?";
  link.getAttribute("href");
  link.setAttribute(
    "href",
    "https://duckduckgo.com/?q=Red+car&t=brave&iar=images&iax=images&ia=images"
  );

  console.log(link.innerHTML);
}
function onBl() {
  document.getElementById("overlay").style.display = "block";
  carColor.style.color = "blue";
  phrases.innerHTML = "You want to leave the site <br> to see the blue car?";
  link.getAttribute("href");
  link.setAttribute(
    "href",
    "https://duckduckgo.com/?q=blue+car&t=brave&iar=images&iax=images&ia=images"
  );
}
function off() {
  document.getElementById("overlay").style.display = "none";
}
