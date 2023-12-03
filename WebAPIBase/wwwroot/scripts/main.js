
var hotList = [];
var questionsInHotlist = 3;
var displayedQuestion;
var numberOfQuestions;
var nextQuestion = 1;


document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < questionsInHotlist; i++) {
        hotList[i] = {
            question: {},
            goodAnswers: 0
        }
    }

    //kezdő kérdéslista letöltése
    for (var i = 0; i < questionsInHotlist; i++) {
        kérdésBetöltés(nextQuestion, i);
        nextQuestion++;
    }

    //kérdések száma
    fetch("questions/count")
        .then(result => result.text())
        .then(n => { numberOfQuestions = parseInt(n) })

});

function kérdésBetöltés(questionNumber, destination) {
    fetch(`/questions/${questionNumber}`)
        .then(result => {
            if (!result.ok) {
                console.error(`Hibás letöltés: ${result.status}`);
                return null;
            }
            else {
                return result.json();
            }
        })
        .then(q => {
            hotList[destination] = q;
            hotList[destination].goodAnswers = 0;
            console.log(`A ${questionNumber}. kérdés letöltésre került a hotList ${destination}. helyére`);
            if (displayedQuestion === undefined && destination === 0) {
                displayedQuestion = 0;
                kérdésMegjelenítés();
            }
        })
}    


function kérdésMegjelenítés() {
    let kérdés = hotList[displayedQuestion].question;
    document.getElementById("válasz1").innerText = kérdés.answer1;
    document.getElementById("válasz2").innerText = kérdés.answer2;
    document.getElementById("válasz3").innerText = kérdés.answer3;
    document.getElementById("kérdés_szöveg").innerText = kérdés.question1;


    if (kérdés.image) {
        document.getElementById("kép").src = kérdés.image;
        document.getElementById("kép").style.display = "block";
    }
    else {
        document.getElementById("kép").style.display = "none";
    }
}


