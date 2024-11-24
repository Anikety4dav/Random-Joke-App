const URL = "https://official-joke-api.appspot.com/random_joke";

const jokeSetup = document.getElementById("joke-setup");
const jokePunchLine = document.getElementById("joke-punchline");
const jokeBtn = document.getElementById("joke-btn");

const getJokes = async () => {
    let response = await fetch(URL);
    // console.log(response);
    let data = await response.json();
    // console.log(data.setup);
    jokeSetup.innerText = data.setup;
    // console.log(data.punchline);
    jokePunchLine.innerText = data.punchline;
};

jokeBtn.addEventListener("click", getJokes);


