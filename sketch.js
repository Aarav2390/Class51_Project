//main variables
var gift1,gift2,gift3,gift4,gift5;
var gift1Img,gift2Img,gift3Img,gift4Img,gift5Img
var player,bg,canvas;
//other
var form,game;
//sounds
var backgroundSound,giftCollected,boostEnabledSound

var score = 0

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
    database = firebase.database()
    game = new Game
}
