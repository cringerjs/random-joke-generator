export function setupJoke(element: HTMLButtonElement) {
  const jokeText = document.querySelector<HTMLElement>('.container p');
  document.addEventListener('DOMContentLoaded', getJoke);
  // async function getJoke() {
  //   const jokeData = await fetch('https://icanhazdadjoke.com/', { 
  //     headers: {
  //       'Accept': 'application/json'
  //     }
  //   });
  //   const jokeObj = await jokeData.json();
  //   jokeText.innerHTML = jokeObj.joke;
  // }

  function getJoke() {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'codenexdev/1.0.0'
      }
    }).then(data => data.json())
      .then(obj => jokeText.innerHTML = obj.joke);
  }
  element.addEventListener('click', () => getJoke())
}
  