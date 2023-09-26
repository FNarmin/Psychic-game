

var  game=  {
chanse: 9,
 wins: 0,
 louses: 0,
 notFound: [],
 choosen_letter: "",
 control_letters: function() {

 },
 comp_choise: function(){
   this.choosen_letter = String.fromCharCode(Math.round(Math.random()*(122-97)+97));
 },
 refresh: function(){
    var wins = document.querySelector("#wins");
    var louse = document.querySelector("#Louses");
    var guesses = document.querySelector("#guesses");
    var notFound_letter = document.querySelector("#false");
    wins.innerHTML = this.wins;
    louse.innerHTML =  this.louses;
    guesses.innerHTML =this.chanse;
    notFound_letter.innerHTML = this.notFound; 
 },
 reStart: function() {
    this.chanse = 9;
    this.notFound = [];
 },
 check: function(letter){
    if (letter.toLowerCase() == this.choosen_letter) {
        if (!this.notFound.includes(letter.toLowerCase())) {
        wins++;
        this.refresh();
        this.reStart();
    }} else {
        if (this.chanse==0) {
            this.louses ++;
            this.reStart();
        } else { 
             if (!this.notFound.includes(letter.toLowerCase())) {
            this.chanse--;
            this.notFound.push(letter);
            this.refresh();
        }} 
    }
 }
}
game.reStart();
game.refresh();
game.comp_choise();
window.addEventListener("keyup", function(e) {
    game.check(e.key);
})