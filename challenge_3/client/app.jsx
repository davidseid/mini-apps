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


// MAKE MY GAME LOGIC

// check for row win
var checkForRowWin = (color, board) => {
  for (var i = 0; i < board.length; i++) {
    var row = board[i];
    for (var j = 0; j < 3; j++) {
      var square = row[j];
      if (square === color) {
        if (row[j+1] && row[j+1] === color) {
          if (row[j+2] && row[j+2] === color) {
            if (row[j+3] && row[j+3] === color) {
              return true;
            }
          }
        }
      }
    }
  }
  return false;
}








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

      var newBoard = this.state.board;
      newBoard[rowToChange][y] = this.state.turn;
      this.setState({board: newBoard});
      if (this.state.turn === 'red') {
        this.setState({turn: 'black'})
      } else if (this.state.turn === 'black') {
        this.setState({turn: 'red'})
      }
    }

    if (checkForRowWin('black', this.state.board)) {
      console.log('black wins');
    }
    if (checkForRowWin('red', this.state.board)) {
      console.log('red wins');
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









