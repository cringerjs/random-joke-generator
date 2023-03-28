import './style.css';
import { setupJoke } from './joke'

document.querySelector<HTMLElement>('#app')!.innerHTML = `
  <div class="container">
    <div class="joke">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellat ad quo earum enim eum tempora illum hic non veritatis?</p>
      <button id="jokeButton" type="button">Get a Dad Joke</button>
    </div>
  </div>
`

setupJoke(document.querySelector<HTMLButtonElement>('#jokeButton')!)