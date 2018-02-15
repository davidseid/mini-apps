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



// 1. Instead of registering a click from a specific row, pass up the column 
// then check to see the row number that should be updated, and update that


//**** MY MODEL **** //

// board initialization
var board = [];
var row = [];
var square = '';
for (var j = 0; j < 7; j++) {
  row.push(square);
}
for (var i = 0; i < 6; i++) {
  board.push(row.slice());
}




// make an App Component
function App() {
  return (
    <div>
      Connect Four
      <Board />
    </div>
  );
}



// make a Board Component
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      board: board,
      turn: 'red',
      result: null,
      slots: [5, 5, 5, 5, 5, 5, 5]
    };
  }

  placePiece(x, y) {

    var rowToChange = this.state.slots[y];
    var slots = this.state.slots;

    if (slots[y] >= 0) {
      slots[y]--;

      this.setState({slots: slots})


      board[rowToChange][y] = this.state.turn;
      this.setState({board: board});
      if (this.state.turn === 'red') {
        this.setState({turn: 'black'})
      } else if (this.state.turn === 'black') {
        this.setState({turn: 'red'})
      }
    }
    
  }

  render() {
    return (
      <div className="board">
        Game Board
        {board.map((row, rowIndex) => {
          return <Row placePiece={this.placePiece.bind(this)} key={rowIndex} row={row} rowIndex={rowIndex}/>
        })}
      </div>
    );
  }
}


// make a Row Component
function Row(props) {
  return (
    <div className='row'>
      {props.row.map((square, colIndex) => {
        return <Square placePiece={props.placePiece} key={colIndex} x={props.rowIndex} y={colIndex}/>
      })}
    </div>
  )
}

// make a square component
function Square(props) {
  return (
    <div onClick={() => {props.placePiece(props.x, props.y)}} className='square' style={{background: board[props.x][props.y]}}>
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);









