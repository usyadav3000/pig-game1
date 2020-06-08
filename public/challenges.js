var scores,roundScore,activePlayer,gamePlaying;
   init();

var lastDice;

document.querySelector('.btn-roll').addEventListener('click',function(){
  if(gamePlaying){
    var dice1=Math.floor(Math.random()*6)+1;
    var dice2=Math.floor(Math.random()*6)+1;

  document.getElementById('dice-1').style.display='block';
  document.getElementById('dice-2').style.display='block';
  document.getElementById('dice-1').src='dice-' + dice1 + '.jpeg';
  document.getElementById('dice-2').src='dice-' + dice2 + '.jpeg';

  if(dice1 !== 1 && dice2 !==1){
    //add score
    roundScore+=dice1+dice2;
    document.querySelector('#current-' + activePlayer).textContent=roundScore;
}else{
    //next player
    nextPlayer();

}
  /*
  if(dice === 6 && lastDice === 6){
      //players looses the score
      scores[activePlayer]= 0;
      document.querySelector('#score-' +activePlayer).textContent='0';
      nextPlayer();

  }else if(dice !== 1){
      //add score
      roundScore+=dice;
      document.querySelector('#current-' + activePlayer).textContent=roundScore;
  }else{
      //next player
      nextPlayer();

  }
  lastDice=dice;
  */
  }
 
});

    document.querySelector('.btn-hold').addEventListener('click',function(){
      if(gamePlaying){
              //add current score to global score
       scores[activePlayer]+=roundScore;

       //update the UI
       document.querySelector('#score-' +activePlayer).textContent=scores[activePlayer];
       var input=document.querySelector('.final-score').value;
       var winningScore;

       //undefine, 0,null or "" are coerced false
       // anything else are coerced true
       if(input){
         winningScore=input;
       }else{
         winningScore=100;
       }
 
       //check if player won the game
       if(scores[activePlayer]>=winningScore){
         document.querySelector('#name-' + activePlayer).textContent='Winner!'
         document.getElementById('dice-1').style.display='none';
         document.getElementById('dice-2').style.display='none';
 
         document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
         document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
         gamePlaying=false;
 
       }else{
          //nextPlayer
       nextPlayer();
 
       }
    
      }
          });

    document.querySelector('.btn-new').addEventListener('click',init);

    function nextPlayer(){
      activePlayer===0 ? activePlayer=1 : activePlayer=0;
      roundScore=0;
      document.getElementById('current-0').textContent='0';
      document.getElementById('current-1').textContent='0';

      //document.querySelector('.player-0-panel').classList.remove('active');
      //document.querySelector('.player-1-panel').classList.add('active');
      // oR
      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');

      document.getElementById('dice-1').style.display='none';
      document.getElementById('dice-2').style.display='none';
    }

    function init(){
      scores=[0,0];
      roundScore=0;
      activePlayer=0;
      gamePlaying=true;

      document.getElementById('dice-1').style.display='none';
      document.getElementById('dice-2').style.display='none';

      document.getElementById('score-0').textContent='0';
      document.getElementById('score-1').textContent='0';
      document.getElementById('current-0').textContent='0';
      document.getElementById('current-1').textContent='0';
      document.querySelector('#name-0').textContent='Player 1';
      document.querySelector('#name-1').textContent='Player 2';
      document.querySelector('.player-0-panel').classList.remove('winner');
      document.querySelector('.player-1-panel').classList.remove('winner');
      document.querySelector('.player-0-panel').classList.remove('active');
      document.querySelector('.player-1-panel').classList.remove('active');
      document.querySelector('.player-0-panel').classList.add('active');

    }