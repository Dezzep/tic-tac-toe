

//Create a module for GameBoard
const gameBoard = (() => {
  const boardLayout = ['top0', 'top1', 'top2',
                       'mid0', 'mid1', 'mid2',
                       'bot0', 'bot1', 'bot2']
  const tiles = document.querySelectorAll(
  boardLayout.map(id => `#${id}`).join(', ')
);
  
  
  
  return{
    tiles
  };

})();

const gameFlow = (() => {
  const tileArray = gameBoard.tiles;
  let player1Turn = true;
  
  for (let i = 0; i < tileArray.length; i++) {
    (function(index) {
      tileArray[index].addEventListener("click", function() {
        
        selectX = player1.playerMove();
        selectO = player2.playerMove();
       
        
        let that = this;
        console.log(that.innerText);
       

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

 
})();
//create a module for displayController

//create a factory for players
let count = 0;
const Player = (value) => {
  
  const playerMove = () =>{ 
    return(value);
  }
  return{playerMove}
  }



  const player1 = Player('X');
  const player2 = Player('O');