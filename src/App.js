import React from "react";

const jokeWrapper = document.querySelector(".joke");
const button = document.querySelector(".joke-btn");

async function getJoke() {
  let config = {
    headers: {
      Accept: "application/JSON",
    },
  };
  const resp = await fetch("https://icanhazdadjoke.com", config);
  const data = await resp.json();
  jokeWrapper.innerHTML = data.joke;
}
getJoke();


const App = () => (
  <div className='wrapper'>
    <div className="jokeitem">
    <h3>Get random Joke</h3>
    <div className="joke">Jokes...</div>
    <button onClick={getJoke} className="joke-btn">
      Get another joke
    </button>
  </div>
  </div>
  
);

export default App;
