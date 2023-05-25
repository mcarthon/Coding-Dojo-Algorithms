function d6() {
    return Math.ceil(Math.random() * 6);
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function fortuneTeller(lifesAnswers) {
    return lifesAnswers[Math.floor(Math.random() * lifesAnswers.length)];
}

console.log("The fortune teller says: " + fortuneTeller(lifesAnswers));

function fortuneDisplay() {
    document.querySelector("h3").innerText = `The answer you've been searching for is:\n ${fortuneTeller(lifesAnswers)}`;
}
