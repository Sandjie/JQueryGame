//Score keeping //show the # of games won and lost
var wins = 0;
var losses =0;
var counter = 0;

//Generate Random # at start of game between 19-120
var minNumber = 19;
var maxNumber = 120;

var randomNumber = randomNumberFromRange(minNumber, maxNumber);

function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

console.log(randomNumber);

$(document).ready(function(){
// When the player clicks a crystal it will add a number to the players score (random # between 1-12)
$("#crystal1").on("click", function(){
     if( $("#result").text().length==0)
      if ($(totalScore).text().length>0 )
    $("#crystal1").append(this.value);

("#crystal1").attr("randNumber", num)
parseInt($("#crystal1").attr("randnum"))
//Player must match random number to win
//if they go over, they lose
//if they run out of turns, they lose
var totalScore = 0;




//Crystals
 var crystal1 = "";
 var crystal2 = "";
 var crystal3 = "";
 var crystal4 = ""; 

 //Random Crystal Number generator
 var crysMin = 1;
 var crysMax = 12;

var randomCrystalNumber = randomCrystalNumFromRange(crysMin, crysMax);
function randomCrystalNumFromRange(min,max)
{
     return {
      crystal1: {
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "images/crystals1.jpg"
      },

      crystal2: {
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "images/crystals2.jpg"
      },
      
      crystal3: {
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "images/crystals3.jpg"
      },
      crystal4: {
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "images/crystals4.jpg"
        
      }

};

//game restarts when player wins or loses (Do not reload browser)


}
});
});
