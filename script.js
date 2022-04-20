console.log("Hello World!")


//Create a module for GameBoard
const gameBoard = (() => {

  const boardLayout = ['top0', 'top1', 'top2',
                      'middle0', 'middle1', 'middle2',
                      'bottom0', 'bottom1', 'bottom2']

  return{
    boardLayout
  };

})();
console.log(gameBoard.boardLayout)
//create a module for displayController

//create a factory for players

