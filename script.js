function setCircle(boxId) {
    NULL = checkNull(boxId);
    if (NULL) {
        x = document.getElementById(boxId);
        Turn = changeTurn();
        if (Turn === 'CROSS') {
            x.innerHTML = '<span class="circle"></span>'
        }
        else {
            x.innerHTML = '<div class="cross"><span class="stick stick-1"></span><span class="stick stick-2"></span></div>'
        }
        setTimeout(() => {
            checkWin(Turn)
        }, 200);
        
    }
    else {
        return;
    }
}

function changeTurn() {
    t = document.getElementById('turn');
    if (t.innerHTML === 'CIRCLE') {
        t.innerHTML = "CROSS"
    }
    else if (t.innerHTML === "CROSS") {
        t.innerHTML = "CIRCLE"
    }
    return t.innerHTML
}

function checkNull(boxId) {
    Ele = document.getElementById(boxId);
    if (Ele.innerHTML === '') {
        return true;
    }
    else {
        return false;
    }
}

function checkWin(Turn) {
    let boxes = [];
    for (i = 1; i < 10; i++) {
        boxes[i] = document.getElementById("box-" + i);
    }

    if (boxes[1].innerHTML === boxes[2].innerHTML && boxes[1].innerHTML === boxes[3].innerHTML && boxes[1].innerHTML != '') {
        if (Turn === "CROSS") {
            displayWinner("CIRCLE");
        }
        else {
            displayWinner("CROSS");
        }
    }
    else if (boxes[4].innerHTML === boxes[5].innerHTML && boxes[4].innerHTML === boxes[6].innerHTML && boxes[4].innerHTML != '') {
        if (Turn === "CROSS") {
            displayWinner("CIRCLE");
        }
        else {
            displayWinner("CROSS");
        }
    }
    else if (boxes[7].innerHTML === boxes[8].innerHTML && boxes[7].innerHTML === boxes[9].innerHTML && boxes[7].innerHTML != '') {
        if (Turn === "CROSS") {
            displayWinner("CIRCLE");
        }
        else {
            displayWinner("CROSS");
        }
    }
    else if (boxes[1].innerHTML === boxes[4].innerHTML && boxes[1].innerHTML === boxes[7].innerHTML && boxes[1].innerHTML != '') {
        if (Turn === "CROSS") {
            displayWinner("CIRCLE");
        }
        else {
            displayWinner("CROSS");
        }
    }
    else if (boxes[2].innerHTML === boxes[5].innerHTML && boxes[2].innerHTML === boxes[8].innerHTML && boxes[2].innerHTML != '') {
        if (Turn === "CROSS") {
            displayWinner("CIRCLE");
        }
        else {
            displayWinner("CROSS");
        }
    }
    if (boxes[3].innerHTML === boxes[6].innerHTML && boxes[3].innerHTML === boxes[9].innerHTML && boxes[3].innerHTML != '') {
        if (Turn === "CROSS") {
            displayWinner("CIRCLE");
        }
        else {
            displayWinner("CROSS");
        }
    }
    else if (boxes[1].innerHTML === boxes[5].innerHTML && boxes[1].innerHTML === boxes[9].innerHTML && boxes[1].innerHTML != '') {
        if (Turn === "CROSS") {
            displayWinner("CIRCLE");
        }
        else {
            displayWinner("CROSS");
        }
    }
    else if (boxes[3].innerHTML === boxes[5].innerHTML && boxes[3].innerHTML === boxes[7].innerHTML && boxes[3].innerHTML != '') {
        if (Turn === "CROSS") {
            displayWinner("CIRCLE");
        }
        else {
            displayWinner("CROSS");
        }
    }
}

function displayWinner(winner){
    Container = document.getElementById('container');
    if (winner === "CIRCLE"){
        Container.innerHTML = '<div class="winner"><h2 class="wHead">WINNER</h2><div><span class="circle"></span></div><button class="btn" onClick="okPressed()">OK</button></div>'
    }
    else{
        Container.innerHTML = '<div class="winner"><h2 class="wHead">WINNER</h2><div class="Wcross"><span class="stick stick-1"></span><span class="stick stick-2"></span></div><button class="btn" onClick="okPressed()">OK</button></div>'
    }
};

function okPressed(){
    Container = document.getElementById('container');
    Container.innerHTML = `\n        <span class="box" id="box-1" onclick="setCircle('box-1')"></span>\n        <span class="box" id="box-2" onclick="setCircle('box-2')"></span>\n        <span class="box" id="box-3" onclick="setCircle('box-3')"></span>\n        <span class="box" id="box-4" onclick="setCircle('box-4')"></span>\n        <span class="box" id="box-5" onclick="setCircle('box-5')"></span>\n        <span class="box" id="box-6" onclick="setCircle('box-6')"></span>\n        <span class="box" id="box-7" onclick="setCircle('box-7')"></span>\n        <span class="box" id="box-8" onclick="setCircle('box-8')"></span>\n        <span class="box" id="box-9" onclick="setCircle('box-9')"></span>\n    `
}