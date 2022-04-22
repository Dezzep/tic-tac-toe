
//Create a module for GameBoard
const gameBoard = (() => {
  const hideThis = document.getElementsByClassName('game-playing');
  const beforeGame = document.getElementsByClassName('before-game');
  const _boardLayout = ['top0', 'top1', 'top2',
                       'mid0', 'mid1', 'mid2',
                       'bot0', 'bot1', 'bot2']
  const tiles = document.querySelectorAll(
  _boardLayout.map(id => `#${id}`).join(', ')
  

);
  const hideElements = () => {
    
    for (let i=0; i < hideThis.length; i++){
    
      hideThis[i].style.display = 'none';
    }
  }
  const showElements = () => {
    for (let i=0; i < hideThis.length; i++){
    
      hideThis[i].style.display = '';
    }
  }
  const gameIsStarting = () => {
    for (let i=0; i < beforeGame.length; i++){
    
      beforeGame[i].style.display = 'none';
    }
  }
  const whoIsPlaying = () => {
    const human1 = document.getElementById("human1");
    const robot1 = document.getElementById("robot1");
    const human2 = document.getElementById("human2");
    const robot2 = document.getElementById("robot2");
    const button = document.getElementById("play-button");
    const color = "#4FE474";
    let player1IsHuman = true;
    let player2IsHuman = true;
    let possibleSelections = [human1, robot1, human2, robot2];

    for(i of possibleSelections){
      i.addEventListener("click", function(){   //listens for event of pressing robot pic or person pic
        if (this.id ==="robot1"){
          player1IsHuman = false;
          this.style.background= color;
          possibleSelections[0].style.background= 'none';
        }
        else if (this.id === "robot2"){
          player2IsHuman = false;
          this.style.background = color;
          possibleSelections[2].style.background = 'none';
        }
        else if (this.id === "human1"){
          player1IsHuman = true;
          this.style.background = color;
          possibleSelections[1].style.background = 'none';
        }
        else if (this.id === "human2"){
          player2IsHuman = true;
          this.style.background = color;
          possibleSelections[3].style.background = 'none';
          
        }
      });
    }
    button.addEventListener('click', function(){ //takes robot or human as variable and starts the game
      showElements();
      gameIsStarting();
    });
  }

  return{tiles, hideElements, showElements, gameIsStarting, whoIsPlaying};
})();
//plays the game.
const gameFlow = (() => {
  const _tileArray = gameBoard.tiles;
  const resetButton = document.querySelector("#reset");
  let _noInput = false;
  let _winArrayX = []; // an array for moves of X
  let _winArrayO = []; //an array for moves of O
  let _player1Turn = true;
  for (let i = 0; i < _tileArray.length; i++) {
    (function(index) {
        _tileArray[index].addEventListener("click", function() {
        _selectX = player1.playerMove();
        _selectO = player2.playerMove();
        let that = this; //id's of tiles
          if (_player1Turn === true && that.innerText === '' && _noInput === false){
          this.innerText = `${_selectX}`;
          _winArrayX.push(that.id);
          console.log(_winArrayX);
          _player1Turn = false;
          }
          else if(that.innerText === '' && _noInput === false){
          this.innerText = `${_selectO}`;
          _winArrayO.push(that.id);
          _player1Turn = true;
          //create an array of where the O's are
          }
          const gameStatus = (() => {        //put this in loop to check every time something is pressed
            //The rules for winning/ties
            if(_winArrayX.includes('top0') &&_winArrayX.includes('top1') && _winArrayX.includes('top2')){
              _gameOver('X')
            }
            else if(_winArrayX.includes('mid0') &&_winArrayX.includes('mid1') && _winArrayX.includes('mid2')){
              _gameOver('X')
            }
            else if(_winArrayX.includes('bot0') &&_winArrayX.includes('bot1') && _winArrayX.includes('bot2')){
              _gameOver('X')
            }
            else if(_winArrayX.includes('top0') &&_winArrayX.includes('mid0') && _winArrayX.includes('bot0')){
              _gameOver('X')
            }
            else if(_winArrayX.includes('top1') &&_winArrayX.includes('mid1') && _winArrayX.includes('bot1')){
              _gameOver('X')
            }
            else if(_winArrayX.includes('top2') &&_winArrayX.includes('mid2') && _winArrayX.includes('bot2')){
              _gameOver('X')
            }
            else if(_winArrayX.includes('top0') &&_winArrayX.includes('mid1') && _winArrayX.includes('bot2')){
              _gameOver('X')
            }
            else if(_winArrayX.includes('top2') &&_winArrayX.includes('mid1') && _winArrayX.includes('bot0')){
              _gameOver('X')
            }
            
            else if(_winArrayO.includes('top0') &&_winArrayO.includes('top1') && _winArrayO.includes('top2')){
              _gameOver('O')
            }
            else if(_winArrayO.includes('mid0') &&_winArrayO.includes('mid1') && _winArrayO.includes('mid2')){
              _gameOver('O')
            }
            else if(_winArrayO.includes('bot0') &&_winArrayO.includes('bot1') && _winArrayO.includes('bot2')){
              _gameOver('O')
            }
            else if(_winArrayO.includes('top0') &&_winArrayO.includes('mid0') && _winArrayO.includes('bot0')){
              _gameOver('O')
            }
            else if(_winArrayO.includes('top1') &&_winArrayO.includes('mid1') && _winArrayO.includes('bot1')){
              _gameOver('O')
            }
            else if(_winArrayO.includes('top2') &&_winArrayO.includes('mid2') && _winArrayO.includes('bot2')){
              _gameOver('O')
            }
            else if(_winArrayO.includes('top0') &&_winArrayO.includes('mid1') && _winArrayO.includes('bot2')){
              _gameOver('O')
            }
            else if(_winArrayO.includes('top2') &&_winArrayO.includes('mid1') && _winArrayO.includes('bot0')){
              _gameOver('O')
            }
            
            else if (_winArrayO.length + _winArrayX.length === 9){
              _gameOver('tie');
            }
            
          })();
      })  
    })(i);
  } 
  const restartGame = (() => {
    function resetValues(){
      for(i of _tileArray){
        i.innerText = '';
        _player1Turn = true; // X always starts
        _winArrayX = [];
        _winArrayO = [];
        _noInput = false;
      }
    }
    resetButton.addEventListener("click", function(){
      resetValues();
   });
  return {resetValues};
  })();
  const _gameOver = (winner) => { // the games ended because of a win or tie, disables game interaction
    const gameOverMessage = document.getElementById("game-over-prompt");
    const winnerDisplay = document.getElementById("game-prompt");
    const playAgain = document.getElementById("play-again");
    resetButton.style.display = 'none';
    gameOverMessage.style.display = 'flex';
    if (winner === 'tie'){
      _noInput = true;
      winnerDisplay.innerText = "It's a tie!"
    }
   else{
    _noInput = true;
    console.log(`${winner} wins!`)
    
    winnerDisplay.innerText = `${winner} wins!`;
    
    
  }
  playAgain.addEventListener('click', function(){
    resetButton.style.display = '';
    restartGame.resetValues();
    gameOverMessage.style.display = 'none'
  });
}
})();
//create a factory for players
const Player = (value) => {
  const playerMove = () =>{ 
    return(value);
  }
  // add function here for player name.
  return{playerMove}
  }

  const player1 = Player('X'); // X and O can be any char
  const player2 = Player('O');
  gameBoard.hideElements();
  gameBoard.whoIsPlaying();
 
