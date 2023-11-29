window.onload = function () {
    initPascal(13); //célszerű, hogy csak akkor fussanak le a függvények,
    //ha betöltött az oldal, különben hiba esetén kihal az egész, mint a dínók
};

var initPascal = function (n) {
    for (var sor = 0; sor < n; sor++) {
        var Divsor = document.createElement("div");
        //új div létrehozása az új sornak

        Divsor.classList.add("sor");
        //új div osztálylistájához add hozzá a "sor"-t

        document.getElementById("pascal").appendChild(Divsor);
        //új div-et add hozzá a "pascal" gyermekeihez

        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            var DivElem = document.createElement("div");
            //új div létrehozása az új elemnek

            DivElem.classList.add("elem");
            //új elem div osztálylistájához add hozzá az "elem"-et

            //DivElem.innerHTML = `${sor}:${oszlop}`;
            //teszteléshet .innerHTML = `${sor}:${oszlop}`

            DivElem.innerHTML = pascalSorCsicska(sor,oszlop);
            //legyen az innerHTML a megfelelő szám

            Divsor.appendChild(DivElem);
            //új elem div-et vedd fel a sor elemei közé
        }
    }
}


var faktorialis = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}

var pascalSorCsicska = function (n,k) {
    let sanyi = faktorialis(n) / (faktorialis(k) * faktorialis(n - k));
    return sanyi;
}

