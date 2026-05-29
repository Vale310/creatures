
function showHome() {
    var creatures = document.querySelectorAll(".creature");

    for (var i = 0; i < creatures.length; i++) {
        if (creatures[i].dataset.home == "land") {
            creatures[i].style.backgroundColor = "green";
        } else if (creatures[i].dataset.home == "water") {
            creatures[i].style.backgroundColor = "blue";
        } else if (creatures[i].dataset.home == "air") {
            creatures[i].style.backgroundColor = "yellow";
        }
    }
}

function showType() {
    var creatures = document.querySelectorAll(".creature");

    for (var i = 0; i < creatures.length; i++) {
        if (creatures[i].dataset.type == "animal") {
            creatures[i].style.border = "2px solid red";
        } else if (creatures[i].dataset.type == "insect") {
            creatures[i].style.border = "2px dashed orange";
        }
    }
}

function clearAll() {
    var creatures = document.querySelectorAll(".creature");

    for (var i = 0; i < creatures.length; i++) {
        creatures[i].style.backgroundColor = "white";
        creatures[i].style.border = "2px solid black";
    }
}
