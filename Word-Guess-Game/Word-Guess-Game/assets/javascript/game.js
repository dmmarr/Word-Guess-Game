


var name =["SnowWhite","Cinderella","Aurora","Ariel","Belle","Jasmine","Pocahontas","Mulan","Tiana","Rapunzel","Merida","Anna","Elsa","Moana","Tinkerbell"]
var soultionArr = []
var nameArr = name.split(",");

console.log(nameArr)
for( var i= 0; i<nameArr.length; i++){
    console.log(nameArr[i].toUpperCase())
}
var wronglett = []
//var underArr = ["_","_"]
var game={
    wins: 0,
    loses: 0,
    words: ["SnowWhite","Cinderella","Aurora","Ariel","Belle","Jasmine","Pocahontas","Mulan","Tiana","Rapunzel","Merida","Anna","Elsa","Moana","Tinkerbell"], 
    userGuess: "",
    currentGuesses: [],

    randomword:function()
    {
        var random =Math.floor(Math.random() * this.words.length);
        return this.words[random]

    }


}

var word= game.randomword();
var wordArr=word.split("")
document.onkeyup=function(event)
{
    console.log(event.key)
   if(wordArr.indexOf(event.key) !== -1)
   {
       //write this to html 
   }

}
document.getElementById().innerHTML() = random

var updateHtml = function (){
    document.getElementById("userGuess").innerHTML() = inputArr.join('')
}
function displayPrincess(){
    document.getElementById("userGuess").innerHtml =' ';
    var  CorrectWord = 0;
    if(correctWord===guessWord){
        won = true;
        
    }
}