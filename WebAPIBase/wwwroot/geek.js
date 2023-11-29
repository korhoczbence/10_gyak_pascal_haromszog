window.onload = function() { 
    letoltes();
}

var viccek;
function letoltes() {
    fetch("jokes.json")
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    viccek = d;

    //for ciklusos rész
    for (var i = 0; i < 20; i++) {
        var ujDiv = document.createElement("div");
        ujDiv.classList.add("jokeDiv");
        document.getElementById("jokeshaha").appendChild(Divsor);

        var viccecske = new Object();
        viccecske.text = viccek.text;
        viccecske.question = viccek.question;
        viccecske.answer = viccek.answer;
        viccecske.author = viccek.author;
        viccecske.created = viccek.created;
        viccecske.tags = viccek.tags;
        viccecske.rating = viccek.rating;

        //DIV feltöltése anyaggal:
        var cim = document.createElement("h3");
        cim.classList.add("cim");
        cim.appendChild(ujDiv);
        cim.innerHTML = i.toString() + "kérdés";

        var kerdes = document.createElement("p");
        kerdes.classList.add("kerdes");
        kerdes.appendChild(ujDiv);
        kerdes.innerHTML = viccecske.question;

        var valasz = document.createElement("p");
        valasz.classList.add("valasz");
        valasz.appendChild(ujDiv);
        valasz.innerHTML = viccecske.answer;

        var szerzo = document.createElement("p");
        szerzo.classList.add("szerzo");
        szerzo.appendChild(ujDiv);
        szerzo.innerHTML = viccecske.author;
    }
}