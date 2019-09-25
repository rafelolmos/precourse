function canvi() {
    document.getElementsByClassName("prova")[1].style.backgroundColor = "red";
}

function canvi2() {
    document.getElementsByClassName("prova")[1].style.backgroundColor = "blue";
}


function canvi3() {
    var llarg = document.getElementsByClassName("prova").length;
    for (var i = 0; i < llarg; i++) {
        document.getElementsByClassName("prova")[i].style.backgroundColor = "red";
        document.getElementsByClassName("prova")[i++].style.backgroundColor = "blue";
        
    }
    confirm()
}


