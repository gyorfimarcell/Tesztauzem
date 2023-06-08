fetch("/api/akcio").then(valasz => valasz.json().then(adatok => {
    document.getElementById("akcios-teszta").innerHTML = adatok["akciosTeszta"];
    document.getElementById("akcios-ar").innerHTML = adatok["akciosAr"];
}));

function bekuld() {
    fetch("/api/jatek", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            uzenet: document.getElementById("jatek-valasz").value
        })
    }).then(valasz => {
        if (valasz.status == 200) {
            document.getElementById("jatek-valasz").value = "";
            alert("Köszönjük, hogy részt vesz a játékunkban!");
        }
    });
}