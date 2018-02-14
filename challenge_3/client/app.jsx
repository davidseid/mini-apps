// build UI with reactjs and precompile views with babel
// all game logic should live in the client code

// all react components can live in this file

// detect win or tie and display appropriate message
// page refresh restarts the game

// WRITE FOUR TESTS for end of game logic
// can run tests in node or browser

// minimal css styling
// have babel watch for changes in app
// use nodemon

// 1: automatically render 6 rows 
// 2: automatically render 7 squares in each row
// have the rendering based on actual model

//**** MY MODEL **** //

// board setup
var board = [];
var row = [];
var square = [];

for (var j = 0; j < 7; j++) {
  row.push(square);
}

for (var i = 0; i < 6; i++) {
  board.push(row);
}

console.table(board);



// make an App Component
function App() {
  return (
    <div>
      My App
      <Board />
    </div>
  );
}

// make a Board Component
function Board() {
  return (
    <div className="board">
      My Board
      <Row />
    </div>
  );
}

// make a Row Component
function Row() {
  return (
    <div className='row'>
      Row
      <Square />
    </div>
  )
}

// make a square component
function Square() {
  return (
    <div className='square'>
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);









