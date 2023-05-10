const endpoint = "https://animechan.vercel.app/api/quotes";

fetch(endpoint)
.then((response) => response.json())
.then((quotes) => console.log(quotes));
