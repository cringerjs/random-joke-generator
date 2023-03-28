const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');

button.addEventListener('click', getJoke);

function getJoke() {
  const jokeData = fetch('https://icanhazdadjoke.com/', { 
    headers: {
      'Accept': 'application/json'
    }
  });
  console.log(jokeData);
}