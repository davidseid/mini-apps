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

// Give each row a class that corresponds to its row
// Give each square a class that corresponds to its row and column

//**** MY MODEL **** //

// board setup
var board = [];
var row = [];
var square = [];

for (var j = 0; j < 7; j++) {
  row.push(square);
}
console.log(row);

for (var i = 0; i < 6; i++) {
  board.push(row);
}

var rowNum = -1;
var colNum = -1;


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
      Game Board
      {board.map((row) => {
        rowNum += 1;
        return <Row row={rowNum}/>
      })}
    </div>
  );
}

// make a Row Component
function Row(props) {
  return (
    <div className='row'>
      {row.map((square) => {
        colNum++;
        return <Square x={props.row} y={colNum}/>
      })}
    </div>
  )
}

// make a square component
function Square(props) {
  return (
    <div className='square'>
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);









