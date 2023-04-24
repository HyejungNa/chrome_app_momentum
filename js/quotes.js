const quotes = [
 {
  quote : "Life is 10% what happens to you and 90% how you react to it",
  author : "Charles R. Swindoll"
 },
 {
  quote : "If you fell down yesterday, stand up today.",
  author : "H. G. Wells"
 },
 {
  quote : "It always seems impossible until it's done.",
  author : "Nelson Mandela"
 },
 {
  quote : "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
  author : "Thomas A. Edison"
 },
 {
  quote : "If you're going through hell, keep going.",
  author : "Winston Churchill"
 },
 {
  quote : "It does not matter how slowly you go as long as you do not stop.",
  author : "Confucius"
 },
 {
  quote : "Learn as if you will live forever, live like you will die tomorrow.",
  author : "Mahatma Gandhi"
 },
 {
  quote : "When you change your thoughts, remember to also change your world.",
  author : "Norman Vincent Peale"
 },
 {
  quote : "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  author : "Winston Churchill"
 },
 {
  quote : "The way to get started is to quit talking and begin doing.",
  author : "Walt Disney"
 },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

