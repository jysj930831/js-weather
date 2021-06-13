const quotes = [
  {
    quote: "저기압일땐 고기앞으로",
    author: "고기학사",
  },
  {
    quote: "늦었다고 생각할때가 진짜 늦은거다",
    author: "만년지각생",
  },
  {
    quote: "티끌 모아 티끌",
    author: "너와나의 통장",
  },
];

const quote = document.querySelector(".quotes span:first-child");
const author = document.querySelector(".quotes span:last-child");

const currentQutoe = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = currentQutoe.quote;
author.innerText = currentQutoe.author;
