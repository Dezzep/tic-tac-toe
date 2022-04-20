

//Create a module for GameBoard
const gameBoard = (() => {
  const boardLayout = ['top0', 'top1', 'top2',
                       'mid0', 'mid1', 'mid2',
                       'bot0', 'bot1', 'bot2']
  const tiles = document.querySelectorAll(
  boardLayout.map(id => `#${id}`).join(', ')
);
  
  console.log(tiles);
  
  return{
    boardLayout
  };

})();

const moduleTest = (() => {
 
 
})();
console.log(gameBoard.boardLayout)
//create a module for displayController

//create a factory for players

const createPlayer = () => {
  let movesPlayed = 0;
  return() => {
    console.log(movesPlayed);
    movesPlayed++;
  }

}


