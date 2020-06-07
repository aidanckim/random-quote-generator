/****************
ARRAYS OF OBJECTS
*****************/

const quotes = [
  {
    quote: 'You Miss 100% Of The Shots You Don\'t Take.',
    source: 'Wayne Gretzky',
    citation: 'The Hockey News',
    year: 1983,
    tags: 'Hockey Hall of Famer'
  },
  {
    quote:
      'I think it is possible for ordinary people to choose to be extraordinary.',
    source: 'Elon Musk',
    citation: 'Twitter',
    year: 2017,
    tags: 'Entrepreneur'
  },
  {
    quote:
      'The cynics may be the loudest voices - but I promise you, they will accomplish the least.',
    source: 'Barack Obama',
    citation: 'Business Insider',
    year: 2013,
    tags: 'Former President of the United States of America'
  },
  {
    quote:
      'When you undervalue what you do, the world will undervalue who you are.',
    source: 'Oprah Winfrey',
    tags: 'Philanthropist'
  },
  {
    quote:
      'Your time is limited, so don’t waste it living someone else’s life.',
    source: 'Steve Jobs',
    tags: 'Business magnate'
  }
]

/***************
GET RANDOM QUOTE
****************/

function getRandomQuote () {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

/**********
PRINT QUOTE
***********/

function printQuote () {
  const randomQuote = getRandomQuote()
  let html = `<p class='quote'>${randomQuote.quote}</p>
              <p class='source'>${randomQuote.source}`
  if (randomQuote.citation) {
    html += `<span class='citation'>${randomQuote.citation}</span>`
  }
  if (randomQuote.year) {
    html += `<span class='year'>${randomQuote.year}</span>`
  }
  // additional property
  if (randomQuote.tags) {
    html += `<span class='year'>${randomQuote.tags}</span>`
  }
  html += '</p>'
  document.getElementById('quote-box').innerHTML = html
  // selecting body and assigning random color
  document.body.style.backgroundColor = getRandomColor()
  return html
}

/***********
RANDOM COLOR
************/

function getRandomColor () {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

/***********
AUTO REFRESH
************/

setInterval(printQuote, 10000)

/***********
EVENT LISTENER
************/

document
  .getElementById('load-quote')
  .addEventListener('click', printQuote, false)
