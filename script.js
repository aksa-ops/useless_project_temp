let usedAnswers = [];

function giveWrongAnswer() {

    let openings = [
        "Interesting question.",
        "That's a very serious question.",
        "I have investigated this thoroughly.",
        "After thinking for approximately 0.3 seconds,",
        "My highly questionable analysis says",
        "I asked my brain about this.",
        "According to absolutely nobody,",
        "After consulting the imaginary experts,",
        "This is classified information, but",
        "I definitely know the answer.",
        "My professional opinion is",
        "This question has changed everything.",
        "I wasn't prepared for this question.",
        "My calculations are complete.",
        "I have reached a conclusion."
    ];

    let middle = [
        "the answer is probably biriyani.",
        "Tuesday seems to be involved somehow.",
        "a penguin may have the answer.",
        "my calculator has resigned.",
        "the moon knows more than I do.",
        "this is clearly a government secret.",
        "you should probably ask a potato.",
        "the answer depends on how much sleep you had.",
        "I have decided that mathematics is optional.",
        "someone somewhere is probably eating dosa.",
        "the answer is hiding under the bed.",
        "science has temporarily stopped working.",
        "your question has offended my imaginary professor.",
        "the internet told me to say something else.",
        "my brain has entered airplane mode."
    ];

    let endings = [
        "You're welcome.",
        "Please don't ask me to explain.",
        "I am extremely confident about this.",
        "Further research is unnecessary.",
        "This information cannot be verified.",
        "I have no evidence to support this.",
        "Trust me. I'm a chatbot.",
        "That is all I know.",
        "Please accept this answer.",
        "I regret nothing.",
        "We should probably move on.",
        "This seemed correct five seconds ago.",
        "Don't quote me on that.",
        "I hope this helped absolutely nobody.",
        "My work here is done."
    ];

    let finalAnswer;

    do {
        let opening =
            openings[Math.floor(Math.random() * openings.length)];

        let middlePart =
            middle[Math.floor(Math.random() * middle.length)];

        let ending =
            endings[Math.floor(Math.random() * endings.length)];

        finalAnswer =
            opening + " " + middlePart + " " + ending;

    } while (usedAnswers.includes(finalAnswer));

    usedAnswers.push(finalAnswer);

    document.getElementById("answer").innerText = finalAnswer;
}