changeQuote = ()=>{
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        // text, author
    let randomQuote = Math.floor(Math.random()*1062);
    document.getElementById('quote').innerHTML= data[randomQuote].text;
    document.getElementById('author').innerHTML= data[randomQuote].author;
    });
}
evokeQuoteAndImg = () => {
    changeQuote();
}

changeImg =()=>{
    location.reload();
}

