 var guessnumberInput = document.getElementById("guessNum");
 var result = document.getElementById("result");
 var randomNum = Math.floor(Math.random()*10) ;
 var score= document.getElementById("score");
  var totalscore = 10; 

 function check(){
    var guess = Number(guessnumberInput.value);
    if(randomNum == guess){
        totalscore = totalscore+1;
        result.textContent="Right !";
    }else{
        totalscore = totalscore-1;
        score.textContent="score:"+totalscore;
        result.textContent="Wrong !";
    }
 }