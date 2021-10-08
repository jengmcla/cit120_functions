// Create a function that has damage and attack type as parameters.
//     The damage value is dealt to the dragon.
//     If the attack type is fire, it deals 1 less damage.
//     If the attack type is ice, it deals 1 additional damage.
//     Make sure the total damage dealt to dragon is visible for the user
// Attach this function to 3 separate buttons.
//     One button is fire and deals 3 damage.
//     One button is ice and deals 1 damage
// One button is poison and deals 4 damage.
//     When the Dragon's damage is 10 or more, the user wins and should be notified.
// USE FUNCTION, no unique stuff

var ele = document.body.querySelector(".box");
var damage = 0;
var attackType = "";
var dragonDamage = 0;

document.body.querySelector(".fireAttack").addEventListener("click", function () {
    damage = 3;
    attackType = "fire";
    attack(damage, attackType);
});

document.body.querySelector(".iceAttack").addEventListener("click", function () {
    damage = 1;
    attackType = "ice";
    attack(damage, attackType);
});

document.body.querySelector(".poisonAttack").addEventListener("click", function () {
    damage = 4;
    attackType = "poison";
    attack(damage, attackType);
});

function attack (damageParam, attackTypeParam) {
    if (attackTypeParam == "fire") {
        dragonDamage += damageParam - 1;
        ele.innerHTML = "Dragon damage: " + dragonDamage;
    } else if (attackTypeParam == "ice") {
        dragonDamage += damageParam + 1;
        ele.innerHTML = "Dragon damage: " + dragonDamage;
    } else if (attackTypeParam == "poison") {
        dragonDamage += damageParam;
        ele.innerHTML = "Dragon damage: " + dragonDamage;
    }

    if (dragonDamage >= 10) {
        document.getElementById("dragonPic").src = "images/fatalisDead.png";
        var youWin = document.createElement("p");
        youWin.innerHTML = "You win!";
        ele.appendChild(youWin);
    }

    if (dragonDamage >= 14) {
        document.getElementById("dragonPic").src = "images/fatalisDead.png";
        var dead = document.createElement("p");
        dead.innerHTML = "Bro it's already dead...stop.";
        ele.appendChild(dead);
    }
}

// var ele = document.body.querySelector(".box");
// var list = ["cat", "axolotl", "dog", "bird"];
// // var list = [{name: "dog", color: "blue"}, {name: "Cat", color: "red"}];
//
// function renderList () {
//     ele.innerHTML = ""; // clears when we add stuff
//     for(var i = 0; i < list.length; i++) {
//         makeElement(i); // if doing the name/color, list[i].name, list[i].color
//     }
// }
//
// function makeElement (idx, color) //or name, color if doing name/color {
//     var listEle = document.createElement("div");
//     listEle.innerHTML = list[idx];
//     // ele.style.color = color;
//     // listEle.innerHTML = name;
//     ele.appendChild(listEle);
// }
//
// renderList(); // calls function renderList
// makeElement(1); // calls item generated by its #
// // makeElement(list[0].name, list[0].color);
//
// document.body.querySelector(".button").addEventListener("click", function () {
//     var question = prompt("What item do you want to add?");
//     // var questionColor = prompt("What color?");
//     list.push(question); // adds answer to question to array list
//     // list.push({name: question, color: questionColor});
//     renderList();
// });