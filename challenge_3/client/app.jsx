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

// check for vertical win 
var checkForColumnWin = (color, board, column) => {
  //loop through the first three rows
  // if the column is color
    // if the colum in the next row is color
      // if the column in the next row is color
        // if the column in the next row is color
          // return true
  // return false
  for (var i = 0; i < 3; i++) {
    if (board[i][column] === color) {
      if (board[i + 1][column] === color) {
        if (board[i + 2][column] === color) {
          if (board[i + 3][column] === color) {
            return true;
          }
        }
      }
    }
  }
  return false
}

// check for diagonal wins
var checkForMajorDiagonalWin = (color, board, x, y) => {
  var diagCount = 1;
  if (board[x + 1] && board[x + 1][y - 1] === color) {
    diagCount++;
    if (board[x + 2] && board[x + 2][y - 2] === color) {
      diagCount++;
    } if (board[x + 3] && board[x + 3][y - 3] === color) {
      return true;
    }
  }

  if (board[x - 1] && board[x - 1][y + 1] === color) {
    diagCount++;
    if (board[x - 2] && board[x - 2][y + 2] === color) {
      diagCount++;
      if (board[x - 3] && board[x - 3][y + 3] === color) {
        return true;
      }
    } 
  }
  return diagCount >= 4 ? true : false;
}

var checkForMinorDiagonalWin = (color, board, x, y) => {
  var diagCount = 1;
  if (board[x - 1] && board[x - 1][y - 1] === color) {
    diagCount++;
    if (board[x - 2] && board[x - 2][y - 2] === color) {
      diagCount++;
    } if (board[x - 3] && board[x - 3][y - 3] === color) {
      return true;
    }
  }

  if (board[x + 1] && board[x + 1][y + 1] === color) {
    diagCount++;
    if (board[x + 2] && board[x + 2][y + 2] === color) {
      diagCount++;
      if (board[x + 3] && board[x + 3][y + 3] === color) {
        return true;
      }
    } 
  }
  return diagCount >= 4 ? true : false;
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

    if (checkForRowWin('black', this.state.board) || checkForColumnWin('black', this.state.board, y)) {
      console.log('black wins');
    }
    if (checkForRowWin('red', this.state.board) || checkForColumnWin('red', this.state.board, y)) {
      console.log('red wins');
    }

    if (checkForMajorDiagonalWin('red', this.state.board, rowToChange, y)) {
      console.log('red wins by diagonal');
    }
    if (checkForMajorDiagonalWin('black', this.state.board, rowToChange, y)) {
      console.log('black wins by diagonal');
    }
    if (checkForMinorDiagonalWin('red', this.state.board, rowToChange, y)) {
      console.log('red wins by diagonal');
    }
    if (checkForMinorDiagonalWin('black', this.state.board, rowToChange, y)) {
      console.log('black wins by diagonal');
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









