
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

  return{tiles, hideElements, showElements, gameIsStarting};
})();
//plays the game.
const gameFlow = (() => {
  const _tileArray = gameBoard.tiles;
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

          
          
          //create and array of where the X's are
          //if array location = all of tops,bots,mids -- win
          //all of 0, 1 or 2 -- win
          //top0 mid1 bot2 || top2 mid1 bot0 -- win
          
        }
          else if(that.innerText === '' && _noInput === false){
          this.innerText = `${_selectO}`;
          _winArrayO.push(that.id);
          _player1Turn = true;
          //create an array of where the O's are
          }
          const gameStatus = (() => {        //put this in loop to check every time something is pressed
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
    const resetButton = document.querySelector("#reset");
    resetButton.addEventListener("click", function(){
      for(i of _tileArray){
        i.innerText = '';
        _player1Turn = true; // X always starts
        _winArrayX = [];
        _winArrayO = [];
        _noInput = false;
      }
    });
  })();
  const _gameOver = (winner) => { // the games ended because of a win or tie, disables and prompts
    if (winner === 'tie'){
      console.log("It's a tie!");
      _noInput = true;
    }
   else{
    _noInput = true;
    console.log(`${winner} wins!`)
  }}
})();
//create a factory for players
const Player = (value) => {
  const playerMove = () =>{ 
    return(value);
  }
  return{playerMove}
  }

  const player1 = Player('X'); // X and O can be any char
  const player2 = Player('O');
  gameBoard.hideElements();
  gameBoard.showElements();
  gameBoard.gameIsStarting();