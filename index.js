const jokes = require("give-me-a-joke");
const colors = require("colors");
const cowsay = require("cowsay");

jokes.getRandomDadJoke((joke) => {
    console.log(joke.rainbow);
});

console.log(cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U "
}));

