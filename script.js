function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

var x = 1;
var velocity;
var movingLeft = false;

function movingElement() {
  elmt = document.getElementById("dh");
    if (x <= 1) {
        velocity = 0.1;
    } else if (x >= 50) {
        velocity = -0.1;
    }
    x += velocity;
    elmt.style.marginLeft = x + "vw";
  }
    
window.setInterval(movingElement, 10);

function mathChecker() {
    answer = document.getElementById("math");
    if (answer.value == 23) {
        alert('Congratulations! You got the right answer! You must be Asian.');
    } else {
        alert("Sorry, that's the wrong answer. You must not be Asian.");
    }
}
