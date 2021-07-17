const quotes=[
  {
    quote:"Learning without thought is labor lost; thought without learning is perilous.",
    author:"Confucius",
  },
  {
    quote:"Isn't it a pleasure to study, and to practice what you have learned?",
    author:"Confucius",
  },
  {
    quote:"The merit of an action lies in finishing it to the end.",
    author:"Genghis Khan",
  },
  {
    quote:"Victory belongs to the most persevering.",
    author:"Napoleon Bonaparte",
  },
  {quote:"Strive for excellence, not perfection.",
    author:"H. Jackson Brown Jr.",
  },
  {quote:"Everyone has his day and some days last longer than others.",
    author:"Sir Winston Churchill",
  },
  {
    quote:"Life is something that everyone should try at least once.",
    author:"Henry J. Tillman",
  },
  {
    quote:"Love the moment, and the energy of that moment will spread beyond all boundaries.",
    author:"Corita Kent",
  },
  {
    quote:"Eighty percent of success is showing up.",
    author:"Woody Allen",
  },
  {
    quote:"Your happiness is defined by what makes your spirit sing.",
    author:"Nancy Sullivan",
  }


]
const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");
const todaysQuote=(quotes[Math.floor(Math.random()*quotes.length)]);

quote.innerText=todaysQuote.quote;
author.innerText=`-${todaysQuote.author}-`;