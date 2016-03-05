$(document).ready(function() {
   "use strict";

//object definitions


//Pieces definitions: caps are white, lowercase are black

var K = "&#9812;";
var Q = "&#9813;";
var R = "&#9814;";
var B = "&#9815;";
var N = "&#9816;";
var P = "&#9817;";
var k = "&#9818;";
var q = "&#9819;";
var r = '&#9820;';
var b = "&#9821;";
var n = "&#9822;";
var p = "&#9823;";

var rankLetters = ["a","b","c","d","e","f","g","h"];

// // Board Arrays of moves

var startArray = [
   [r, n, b, q, k, b, n, r],
   [p, p, p, p, p, p, p, p],
   ["","","","","","","",""],
   ["","","","","","","",""],
   ["","","","","","","",""],
   ["","","","","","","",""],
   [P, P, P ,P ,P ,P ,P ,P],
   [R, N, B, Q, K, B, N, R]
];

var firstMoveWhite = [
   [r, n, b, q, k, b, n, r],
   [p, p, p, p, p, p, p, p],
   ["","","","","","","",""],
   ["","","","","","","",""],
   ["","","", P,"","","",""], //[4][3] end
   ["","","","","","","",""],
   [P, P, P,"", P, P, P, P], // [6][3] start
   [R, N, B, Q, K, B, N, R]
];

var firstMoveBlack = [
   [r, n, b, q, k, b, "", r], // [0][6] start
   [p, p, p, p, p, p, p, p],
   ["","","","","", n,"",""], // [2][5] end
   ["","","","","","","",""],
   ["","","", P,"","","",""],
   ["","","","","","","",""],
   [P, P, P, "", P, P, P, P],
   [R, N, B, Q, K, B, N, R]
];

var secondMoveWhite = [
   [r, n, b, q, k, b, "", r],
   [p, p, p, p, p, p, p, p],
   ["","","","","", n,"",""],
   ["","","","","","","",""],
   ["","", P, P,"","","",""],// [4][2] end
   ["","","","","","","",""],
   [P, P, "", "", P, P, P, P],// [6][2] start
   [R, N, B, Q, K, B, N, R]
];

var secondMoveBlack = [
   [r, n, b, q, k, b, "", r],
   [p, p, p, p, "", p, p, p],// [1][4] start
   ["","","","", p, n,"",""],// [2][4] end
   ["","","","","","","",""],
   ["","", P, P,"","","",""],
   ["","","","","","","",""],
   [P, P, "", "", P, P, P, P],
   [R, N, B, Q, K, B, N, R]
];

var thirdMoveWhite = [
   [r, n, b, q, k, b, "", r],
   [p, p, p, p, "", p, p, p],
   ["","","","", p, n,"",""],
   ["","","","","","","",""],
   ["","", P, P,"","","",""],
   ["","","","","","", P,""],//[5][6] end
   [P, P, "", "", P, P,"", P],//[6][6] start
   [R, N, B, Q, K, B, N, R]
];

var thirdMoveBlack = [
   [r, n, b, q, k, b, "", r],
   [p, p, p, "", "", p, p, p],//[1][3] start
   ["","","","", p, n,"",""],
   ["","","", p,"","","",""],//[3][3] end
   ["","", P, P,"","","",""],
   ["","","","","", "", P,""],
   [P, P, "", "", P, P,"", P],
   [R, N, B, Q, K, B, N, R]
];

var fourthMoveWhite = [
   [r, n, b, q, k, b, "", r],
   [p, p, p, "","", p, p, p],
   ["","","","", p, n,"",""],
   ["","","", p,"","","",""],
   ["","", P, P,"","","",""],
   ["","","","","","", P,""],
   [P, P, "","", P, P, B, P], //[6][6]
   [R, N, B, Q, K,"", N, R] //[7][5]
];

var fourthMoveBlack = [
   [r, n, b, q, k,"", "", r], // [0][6]
   [p, p, p, "", b, p, p, p], // [1][4]
   ["","","","", p, n,"",""],
   ["","","", p,"","","",""],
   ["","", P, P,"","","",""],
   ["","","","","","", P,""],
   [P, P, "","", P, P, B, P],
   [R, N, B, Q, K,"", N, R]
];

var fifthMoveWhite = [
   [r, n, b, q, k,"", "", r],
   [p, p, p, "", b, p, p, p],
   ["","","","", p, n,"",""],
   ["","","", p,"","","",""],
   ["","", P, P,"","","",""],
   ["","","","","", N, P,""], // [5][5]
   [P, P, "","", P, P, B, P],
   [R, N, B, Q, K,"","", R] // [7][6]
];

var moveArrays = [startArray, firstMoveWhite, firstMoveBlack, secondMoveWhite, secondMoveBlack, thirdMoveWhite, thirdMoveBlack, fourthMoveWhite, fourthMoveBlack, fifthMoveWhite];

var clickCounter = 0;

// populates the board before the first click

popBoard();

// funtion to populate the board on click

function popBoard (){
   for(var num = 0; num <=7; num++){
      $("#"+rankLetters[num]+"1").html("<p class = 'white-piece'>"+moveArrays[clickCounter][7][num]+"</p>");//populates first rank
      $("#"+rankLetters[num]+"2").html("<p class = 'white-piece'>"+moveArrays[clickCounter][6][num]+"</p>");//populates second rank
      $("#"+rankLetters[num]+"3").html("<p class = 'white-piece'>"+moveArrays[clickCounter][5][num]+"</p>");//populates 3rd rank
      $("#"+rankLetters[num]+"4").html("<p class = 'white-piece'>"+moveArrays[clickCounter][4][num]+"</p>");//populates 4th rank
      $("#"+rankLetters[num]+"5").html("<p class = 'piece'>"+moveArrays[clickCounter][3][num]+"</p>");//populates 5th rank
      $("#"+rankLetters[num]+"6").html("<p class = 'piece'>"+moveArrays[clickCounter][2][num]+"</p>");//populates 7th rank
      $("#"+rankLetters[num]+"7").html("<p class = 'piece'>"+moveArrays[clickCounter][1][num]+"</p>");//populates 7th rank
      $("#"+rankLetters[num]+"8").html("<p class = 'piece'>"+moveArrays[clickCounter][0][num]+"</p>");//populates 8th rank
   };
};

// click events for the buttons

      //advances the game one move
if(clickCounter < 11){ //add another statement for lower limit clicks
$("#forward").on("click", function(){
   clickCounter++;
   popBoard();
});
};

      //goes to end of game
$("#fast-forward").on("click", function(){
   clickCounter = moveArrays.length-1;
   popBoard();
})

      //reverses game one move
// add if statement with upper and lower limits to this
$("#back").on("click", function(){
   clickCounter--;
   popBoard();
});

      //resets gameboard
$("#rewind").on("click", function(){
   clickCounter = 0;
   popBoard();
});



}); //End of Line
