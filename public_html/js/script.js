var score = 0;
var userChoice;

var values = {
    "0": "Rock",
    "1": "Paper",
    "2": "Scissors"
};

order = [0, 1, 2, 0];

var allItems = {
    items: document.getElementsByName('myEle'),
    init: function () {
        for (var pos = 0; pos < this.items.length; pos++) {
            this.items[pos].id = pos;
            this.items[pos].addEventListener("click", function () {
                assignClick(this.id);
            });
        }
    }
};

function randIntInRange(min, max) {
    return Math.floor(Math.random() * ((max - min) + 1));
}
;

var computer = {
    init: function () {
        this.computerChoice = randIntInRange(0, 2);
        this.computerText = "The computer chose : " + values[this.computerChoice];
    },
    computerChoice: 0,
    computerText: ''
};

var chooseWinner = function (c, u) {
    var text = "";
    if (c === u) {
        text = "Its a DRAW! Try Again?";
    }
  else if(order[computerChoice + 1] === order[userChoice]) {
        score++;
        text = "Congratulations!! You won! ";
    } 
    else {
        score--;
        text = "You lost!";
    }
    return text;
};

function assignClick(position) {
    for (var i = 0; i < 3; i++)
    {
        var ele = document.getElementById("a" + i);
        ele.style.display = "none";
        ele = document.getElementById("b" + i);
        ele.style.display = "none";
    }
    userChoice = position;
    computer.init();
    var res = document.getElementById("result");
    res.innerHTML = "<p>" + computer.computerText + "<br>";
    res.innerHTML += chooseWinner(computer.computerChoice, userChoice);
    res.innerHTML += "<br>" + "SCORE: " + score + "</p>";
    var x = document.getElementById("b" + userChoice);
    x.style.display = "block";
    x = document.getElementById("a" + computer.computerChoice);
    x.style.display = "block";
}
;
allItems.init();