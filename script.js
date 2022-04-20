

//Create a module for GameBoard
const gameBoard = (() => {
  const boardLayout = ['top0', 'top1', 'top2',
                       'mid0', 'mid1', 'mid2',
                       'bot0', 'bot1', 'bot2']
  const tiles = document.querySelectorAll(
  boardLayout.map(id => `#${id}`).join(', ')
);
  return{tiles};
})();
//plays the game.
const gameFlow = (() => {
  const tileArray = gameBoard.tiles;
  let player1Turn = true;
  for (let i = 0; i < tileArray.length; i++) {
    (function(index) {
        tileArray[index].addEventListener("click", function() {
        selectX = player1.playerMove();
        selectO = player2.playerMove();
        let that = this; //id's of tiles
          if (player1Turn === true && that.innerText === ''){
          this.innerText = `${selectX}`;
          player1Turn = false;
        }
          else if(that.innerText === ''){
          this.innerText = `${selectO}`;
          player1Turn = true;
          }
      })  
    })(i);
  } 
  const restartGame = (() => {
    const resetButton = document.querySelector("#reset");
    resetButton.addEventListener("click", function(){
      for(i of tileArray){
        i.innerText = '';
        player1Turn = true; // X always starts
      }
    });
  })();
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