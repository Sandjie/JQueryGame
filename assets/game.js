//Score keeping //show the # of games won and lost
var wins = 0;
var losses = 0;
var counter = 0;

//Generate Random # at start of game between 19-120
var minNumber = 19;
var maxNumber = 120;

var randomNumber = randomNumberFromRange(minNumber, maxNumber);

function randomNumberFromRange(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
};
console.log(randomNumber);


// //Crystals

 var crystal1 = 0;
 var crystal2 = 0;
 var crystal3 = 0;
 var crystal4 = 0; 


//  //Random Crystal Number generator
//  var crysMin = 1;
//  var crysMax = 12;
var getRandom =  function (min , max) {
    var random = Math.floor(Math.random() * (max - min)) + min;
    return random;
             
}

crystal1 = getRandom(1 , 12);
crystal2 = getRandom(1 , 12);
crystal3 = getRandom(1 , 12);
crystal4 = getRandom(1 , 12);
console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);

// //Player must match random number to win

$("#random-number").text(randomNumber);
// //if they go over, they lose
// //if they run out of turns, they lose
// var totalScore = 0;

// //game restarts when player wins or loses (Do not reload browser)

// });
// };
// })

