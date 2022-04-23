//create a factory for players
const Player = (value) => {
  const playerMove = () =>{ 
    return(value);
  }
  return{playerMove}
  }
//Create a module for GameBoard
const gameBoard = (() => {
  let player1IsHuman = true; 
  let player2IsHuman = true;
  const hideThis = document.getElementsByClassName('game-playing');
  const beforeGame = document.getElementsByClassName('before-game');
  const _boardLayout = ['top0', 'top1', 'top2',
                       'mid0', 'mid1', 'mid2',
                       'bot0', 'bot1', 'bot2']
  const tiles = document.querySelectorAll(
  _boardLayout.map(id => `#${id}`).join(', ')
  );
  const hideElements = () => {
    for (let i=0; i < hideThis.length; i++){ //hides the tic tac toe display
      hideThis[i].style.display = 'none';
    }
  };
  const showElements = () => {  // shows tic tac toe display
    for (let i=0; i < hideThis.length; i++){
      hideThis[i].style.display = '';
    }
  };
  const gameIsStarting = () => {  //hides character selection
    for (let i=0; i < beforeGame.length; i++){
      beforeGame[i].style.display = 'none';
      gameFlow.resetButton.style.display = '';
    } 
  };
  const gameHasEnded = () => {
    for (let i=0; i < beforeGame.length; i ++){
      beforeGame[i].style.display = '';
    }
  };
  const whoIsPlaying = () => {
    const human1 = document.getElementById("human1");
    const human2 = document.getElementById("human2");
    const robot2 = document.getElementById("robot2");
    const button = document.getElementById("play-button");
    const color = "#4FE474";
    let possibleSelections = [human1,  human2, robot2];
    possibleSelections[0].style.background = color;
    possibleSelections[1].style.background = color;
    for(i of possibleSelections){
      i.addEventListener("click", function(){   //listens for event of pressing robot pic or person pic
         if (this.id === "robot2"){
          gameBoard.player2IsHuman = false;
          this.style.background = color;
          possibleSelections[1].style.background = 'none';
        }
        else if (this.id === "human2"){
          gameBoard.player2IsHuman = true;
          this.style.background = color;
          possibleSelections[2].style.background = 'none';
        }
     });
    }
    button.addEventListener('click', function(){ //takes robot or human as variable and starts the game
      showElements();
      gameIsStarting();
    });
    return{player1IsHuman, player2IsHuman}}
  return{tiles, hideElements, showElements, gameIsStarting, whoIsPlaying, gameHasEnded, 
         player1IsHuman, player2IsHuman};
})();
//plays the game.
const gameFlow = (() => {
  const player1 = Player('X'); // X and O can be any char
  const player2 = Player('O');
  const _selectX = player1.playerMove();
  const _selectO = player2.playerMove();
  const _tileArray = gameBoard.tiles;
  const resetButton = document.querySelector("#reset");
  const _robot = () => {
    let arrayOfEmpties = [];
    for(i = 0; i < _tileArray.length; i++){
      if(gameOver === true){
        return(0);
      }  
      else if(_tileArray[i].innerText === ""){
        arrayOfEmpties.push(i);
    }
  }
    let robotsMove = arrayOfEmpties[Math.floor(Math.random() * arrayOfEmpties.length)]
    
    return (_tileArray[robotsMove]);
  }
  let _noInput = false;
  let _winArrayX = []; // an array for moves of X
  let _winArrayO = []; //an array for moves of O
  let _player1Turn = true;
  const gameStatus = () => {        
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
  };
  function robotPlayO(){
    let choice =  _robot(); // bot plays a move, input gets disabled for users.
    _noInput = true;
    setTimeout(function(){
    choice.innerText = `${_selectO}`;
    _winArrayO.push(choice.id);
    _player1Turn = true;
    gameStatus();
    _noInput = false;
  }, 700)};
  function robotPlayX(){ // added if I want to have bots play against themselves in the future.
    let choice = _robot();
    choice.innerText = `${select0}`;
    _winArrayX.push(choice.id);
    _player1Turn = false;
    gameStatus();
  }
  for (let i = 0; i < _tileArray.length; i++) {
    (function(index) {
        _tileArray[index].addEventListener("click", function() {
       
        let that = this; //id's of tiles
          if (_player1Turn === true && that.innerText === '' && _noInput === false){
          this.innerText = `${_selectX}`;
          _winArrayX.push(that.id);
          _player1Turn = false;
          _robot();
          gameStatus();
          if (gameBoard.player2IsHuman === false && _robot() != undefined && gameOver === false && _noInput === false){
            robotPlayO();
           }
          }
          else if(that.innerText === '' && _noInput === false && gameBoard.player2IsHuman === true){
          this.innerText = `${_selectO}`;
          _winArrayO.push(that.id);
          _player1Turn = true;
          gameStatus();
          }
      })  
    })(i);
  } 
  let gameOver = false;
  const restartGame = (() => {
    function resetValues(){
      for(i of _tileArray){
        i.innerText = '';
        _player1Turn = true; // X always starts
        _winArrayX = [];
        _winArrayO = [];
        _noInput = false;
        gameOver = false;
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
    const newPlayers = document.getElementById("new-players");
    gameOver = true;
    resetButton.style.display = 'none';
    gameOverMessage.style.display = 'flex';
    if (winner === 'tie'){
      _noInput = true;
      winnerDisplay.innerText = "It's a tie!"
    }
   else{
    _noInput = true;
    winnerDisplay.innerText = `${winner} wins!`;
  }
  playAgain.addEventListener('click', function(){ // when play again is clicked, resets board and hides own display
    resetButton.style.display = '';
    restartGame.resetValues();
    gameOverMessage.style.display = 'none';
  });
  newPlayers.addEventListener('click', function(){
    restartGame.resetValues();
    gameOverMessage.style.display = 'none';
    gameBoard.gameHasEnded();
    gameBoard.hideElements();
  });
}
return{resetButton, gameOver}})();
  gameBoard.hideElements();
  gameBoard.whoIsPlaying();
 
  