'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var checkForRowWin = function checkForRowWin(color, board) {
  for (var i = 0; i < board.length; i++) {
    var row = board[i];
    for (var j = 0; j < 3; j++) {
      var square = row[j];
      if (square === color) {
        if (row[j + 1] && row[j + 1] === color) {
          if (row[j + 2] && row[j + 2] === color) {
            if (row[j + 3] && row[j + 3] === color) {
              return true;
            }
          }
        }
      }
    }
  }
  return false;
};

// check for vertical win 
var checkForColumnWin = function checkForColumnWin(color, board, column) {
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
  return false;
};

// check for diagonal wins
var checkForMajorDiagonalWin = function checkForMajorDiagonalWin(color, board, x, y) {
  var diagCount = 1;
  if (board[x + 1] && board[x + 1][y - 1] === color) {
    diagCount++;
    if (board[x + 2] && board[x + 2][y - 2] === color) {
      diagCount++;
    }if (board[x + 3] && board[x + 3][y - 3] === color) {
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
};

var checkForMinorDiagonalWin = function checkForMinorDiagonalWin(color, board, x, y) {
  var diagCount = 1;
  if (board[x - 1] && board[x - 1][y - 1] === color) {
    diagCount++;
    if (board[x - 2] && board[x - 2][y - 2] === color) {
      diagCount++;
    }if (board[x - 3] && board[x - 3][y - 3] === color) {
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
};

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
  return React.createElement(
    'div',
    null,
    'Connect Four',
    React.createElement(Board, null)
  );
}

// make a Board Component

var Board = function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board(props) {
    _classCallCheck(this, Board);

    var _this = _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));

    _this.state = {
      board: board,
      turn: 'red',
      result: null,
      slots: [5, 5, 5, 5, 5, 5, 5]
    };
    return _this;
  }

  _createClass(Board, [{
    key: 'placePiece',
    value: function placePiece(x, y) {

      var rowToChange = this.state.slots[y];
      var slots = this.state.slots;

      if (slots[y] >= 0) {
        slots[y]--;

        this.setState({ slots: slots });

        var newBoard = this.state.board;
        newBoard[rowToChange][y] = this.state.turn;
        this.setState({ board: newBoard });
        if (this.state.turn === 'red') {
          this.setState({ turn: 'black' });
        } else if (this.state.turn === 'black') {
          this.setState({ turn: 'red' });
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
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'board' },
        'Game Board',
        board.map(function (row, rowIndex) {
          return React.createElement(Row, { placePiece: _this2.placePiece.bind(_this2), key: rowIndex, row: row, rowIndex: rowIndex });
        })
      );
    }
  }]);

  return Board;
}(React.Component);

// make a Row Component


function Row(props) {
  return React.createElement(
    'div',
    { className: 'row' },
    props.row.map(function (square, colIndex) {
      return React.createElement(Square, { placePiece: props.placePiece, key: colIndex, x: props.rowIndex, y: colIndex });
    })
  );
}

// make a square component
function Square(props) {
  return React.createElement('div', { onClick: function onClick() {
      props.placePiece(props.x, props.y);
    }, className: 'square', style: { background: board[props.x][props.y] } });
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiY2hlY2tGb3JSb3dXaW4iLCJjb2xvciIsImJvYXJkIiwiaSIsImxlbmd0aCIsInJvdyIsImoiLCJzcXVhcmUiLCJjaGVja0ZvckNvbHVtbldpbiIsImNvbHVtbiIsImNoZWNrRm9yTWFqb3JEaWFnb25hbFdpbiIsIngiLCJ5IiwiZGlhZ0NvdW50IiwiY2hlY2tGb3JNaW5vckRpYWdvbmFsV2luIiwicHVzaCIsInNsaWNlIiwiQXBwIiwiQm9hcmQiLCJwcm9wcyIsInN0YXRlIiwidHVybiIsInJlc3VsdCIsInNsb3RzIiwicm93VG9DaGFuZ2UiLCJzZXRTdGF0ZSIsIm5ld0JvYXJkIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInJvd0luZGV4IiwicGxhY2VQaWVjZSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJvdyIsImNvbEluZGV4IiwiU3F1YXJlIiwiYmFja2dyb3VuZCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQSxJQUFJQSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUNyQyxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsTUFBTUUsTUFBMUIsRUFBa0NELEdBQWxDLEVBQXVDO0FBQ3JDLFFBQUlFLE1BQU1ILE1BQU1DLENBQU4sQ0FBVjtBQUNBLFNBQUssSUFBSUcsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLENBQXBCLEVBQXVCQSxHQUF2QixFQUE0QjtBQUMxQixVQUFJQyxTQUFTRixJQUFJQyxDQUFKLENBQWI7QUFDQSxVQUFJQyxXQUFXTixLQUFmLEVBQXNCO0FBQ3BCLFlBQUlJLElBQUlDLElBQUUsQ0FBTixLQUFZRCxJQUFJQyxJ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QVV5QixRQUFoRixHQUFQO0FBQ0QsU0FGQTtBQUZILE9BREY7QUFRRDs7OztFQTlEaUJHLE1BQU1DLFM7O0FBa0UxQjs7O0FBQ0EsU0FBU0MsR0FBVCxDQUFhaEIsS0FBYixFQUFvQjtBQUNsQixTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsS0FBZjtBQUNHQSxVQUFNZCxHQUFOLENBQVV3QixHQUFWLENBQWMsVUFBQ3RCLE1BQUQsRUFBUzZCLFFBQVQsRUFBc0I7QUFDbkMsYUFBTyxvQkFBQyxNQUFELElBQVEsWUFBWWpCLE1BQU1ZLFVBQTFCLEVBQXNDLEtBQUtLLFFBQTNDLEVBQXFELEdBQUdqQixNQUFNVyxRQUE5RCxFQUF3RSxHQUFHTSxRQUEzRSxHQUFQO0FBQ0QsS0FGQTtBQURILEdBREY7QUFPRDs7QUFFRDtBQUNBLFNBQVNDLE1BQVQsQ0FBZ0JsQixLQUFoQixFQUF1QjtBQUNyQixTQUNFLDZCQUFLLFNBQVMsbUJBQU07QUFBQ0EsWUFBTVksVUFBTixDQUFpQlosTUFBTVIsQ0FBdkIsRUFBMEJRLE1BQU1QLENBQWhDO0FBQW1DLEtBQXhELEVBQTBELFdBQVUsUUFBcEUsRUFBNkUsT0FBTyxFQUFDMEIsWUFBWXBDLE1BQU1pQixNQUFNUixDQUFaLEVBQWVRLE1BQU1QLENBQXJCLENBQWIsRUFBcEYsR0FERjtBQUlEOztBQUdEMkIsU0FBU0MsTUFBVCxDQUNFLG9CQUFDLEdBQUQsT0FERixFQUVFQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBRkYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYnVpbGQgVUkgd2l0aCByZWFjdGpzIGFuZCBwcmVjb21waWxlIHZpZXdzIHdpdGggYmFiZWxcbi8vIGFsbCBnYW1lIGxvZ2ljIHNob3VsZCBsaXZlIGluIHRoZSBjbGllbnQgY29kZVxuXG4vLyBhbGwgcmVhY3QgY29tcG9uZW50cyBjYW4gbGl2ZSBpbiB0aGlzIGZpbGVcblxuLy8gZGV0ZWN0IHdpbiBvciB0aWUgYW5kIGRpc3BsYXkgYXBwcm9wcmlhdGUgbWVzc2FnZVxuLy8gcGFnZSByZWZyZXNoIHJlc3RhcnRzIHRoZSBnYW1lXG5cbi8vIFdSSVRFIEZPVVIgVEVTVFMgZm9yIGVuZCBvZiBnYW1lIGxvZ2ljXG4vLyBjYW4gcnVuIHRlc3RzIGluIG5vZGUgb3IgYnJvd3NlclxuXG4vLyBtaW5pbWFsIGNzcyBzdHlsaW5nXG4vLyBoYXZlIGJhYmVsIHdhdGNoIGZvciBjaGFuZ2VzIGluIGFwcFxuLy8gdXNlIG5vZGVtb25cblxuXG4vLyBNQUtFIE1ZIEdBTUUgTE9HSUNcblxuLy8gY2hlY2sgZm9yIHJvdyB3aW5cbnZhciBjaGVja0ZvclJvd1dpbiA9IChjb2xvciwgYm9hcmQpID0+IHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgIHZhciByb3cgPSBib2FyZFtpXTtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgdmFyIHNxdWFyZSA9IHJvd1tqXTtcbiAgICAgIGlmIChzcXVhcmUgPT09IGNvbG9yKSB7XG4gICAgICAgIGlmIChyb3dbaisxXSAmJiByb3dbaisxXSA9PT0gY29sb3IpIHtcbiAgICAgICAgICBpZiAocm93W2orMl0gJiYgcm93W2orMl0gPT09IGNvbG9yKSB7XG4gICAgICAgICAgICBpZiAocm93W2orM10gJiYgcm93W2orM10gPT09IGNvbG9yKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIGNoZWNrIGZvciB2ZXJ0aWNhbCB3aW4gXG52YXIgY2hlY2tGb3JDb2x1bW5XaW4gPSAoY29sb3IsIGJvYXJkLCBjb2x1bW4pID0+IHtcbiAgLy9sb29wIHRocm91Z2ggdGhlIGZpcnN0IHRocmVlIHJvd3NcbiAgLy8gaWYgdGhlIGNvbHVtbiBpcyBjb2xvclxuICAgIC8vIGlmIHRoZSBjb2x1bSBpbiB0aGUgbmV4dCByb3cgaXMgY29sb3JcbiAgICAgIC8vIGlmIHRoZSBjb2x1bW4gaW4gdGhlIG5leHQgcm93IGlzIGNvbG9yXG4gICAgICAgIC8vIGlmIHRoZSBjb2x1bW4gaW4gdGhlIG5leHQgcm93IGlzIGNvbG9yXG4gICAgICAgICAgLy8gcmV0dXJuIHRydWVcbiAgLy8gcmV0dXJuIGZhbHNlXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgaWYgKGJvYXJkW2ldW2NvbHVtbl0gPT09IGNvbG9yKSB7XG4gICAgICBpZiAoYm9hcmRbaSArIDFdW2NvbHVtbl0gPT09IGNvbG9yKSB7XG4gICAgICAgIGlmIChib2FyZFtpICsgMl1bY29sdW1uXSA9PT0gY29sb3IpIHtcbiAgICAgICAgICBpZiAoYm9hcmRbaSArIDNdW2NvbHVtbl0gPT09IGNvbG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8vIGNoZWNrIGZvciBkaWFnb25hbCB3aW5zXG52YXIgY2hlY2tGb3JNYWpvckRpYWdvbmFsV2luID0gKGNvbG9yLCBib2FyZCwgeCwgeSkgPT4ge1xuICB2YXIgZGlhZ0NvdW50ID0gMTtcbiAgaWYgKGJvYXJkW3ggKyAxXSAmJiBib2FyZFt4ICsgMV1beSAtIDFdID09PSBjb2xvcikge1xuICAgIGRpYWdDb3VudCsrO1xuICAgIGlmIChib2FyZFt4ICsgMl0gJiYgYm9hcmRbeCArIDJdW3kgLSAyXSA9PT0gY29sb3IpIHtcbiAgICAgIGRpYWdDb3VudCsrO1xuICAgIH0gaWYgKGJvYXJkW3ggKyAzXSAmJiBib2FyZFt4ICsgM11beSAtIDNdID09PSBjb2xvcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKGJvYXJkW3ggLSAxXSAmJiBib2FyZFt4IC0gMV1beSArIDFdID09PSBjb2xvcikge1xuICAgIGRpYWdDb3VudCsrO1xuICAgIGlmIChib2FyZFt4IC0gMl0gJiYgYm9hcmRbeCAtIDJdW3kgKyAyXSA9PT0gY29sb3IpIHtcbiAgICAgIGRpYWdDb3VudCsrO1xuICAgICAgaWYgKGJvYXJkW3ggLSAzXSAmJiBib2FyZFt4IC0gM11beSArIDNdID09PSBjb2xvcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IFxuICB9XG4gIHJldHVybiBkaWFnQ291bnQgPj0gNCA/IHRydWUgOiBmYWxzZTtcbn1cblxudmFyIGNoZWNrRm9yTWlub3JEaWFnb25hbFdpbiA9IChjb2xvciwgYm9hcmQsIHgsIHkpID0+IHtcbiAgdmFyIGRpYWdDb3VudCA9IDE7XG4gIGlmIChib2FyZFt4IC0gMV0gJiYgYm9hcmRbeCAtIDFdW3kgLSAxXSA9PT0gY29sb3IpIHtcbiAgICBkaWFnQ291bnQrKztcbiAgICBpZiAoYm9hcmRbeCAtIDJdICYmIGJvYXJkW3ggLSAyXVt5IC0gMl0gPT09IGNvbG9yKSB7XG4gICAgICBkaWFnQ291bnQrKztcbiAgICB9IGlmIChib2FyZFt4IC0gM10gJiYgYm9hcmRbeCAtIDNdW3kgLSAzXSA9PT0gY29sb3IpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChib2FyZFt4ICsgMV0gJiYgYm9hcmRbeCArIDFdW3kgKyAxXSA9PT0gY29sb3IpIHtcbiAgICBkaWFnQ291bnQrKztcbiAgICBpZiAoYm9hcmRbeCArIDJdICYmIGJvYXJkW3ggKyAyXVt5ICsgMl0gPT09IGNvbG9yKSB7XG4gICAgICBkaWFnQ291bnQrKztcbiAgICAgIGlmIChib2FyZFt4ICsgM10gJiYgYm9hcmRbeCArIDNdW3kgKyAzXSA9PT0gY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBcbiAgfVxuICByZXR1cm4gZGlhZ0NvdW50ID49IDQgPyB0cnVlIDogZmFsc2U7XG59XG5cblxuXG5cblxuXG4vLyoqKiogTVkgTU9ERUwgKioqKiAvL1xuXG4vLyBib2FyZCBpbml0aWFsaXphdGlvblxudmFyIGJvYXJkID0gW107XG52YXIgcm93ID0gW107XG52YXIgc3F1YXJlID0gJyc7XG5mb3IgKHZhciBqID0gMDsgaiA8IDc7IGorKykge1xuICByb3cucHVzaChzcXVhcmUpO1xufVxuZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgYm9hcmQucHVzaChyb3cuc2xpY2UoKSk7XG59XG5cblxuXG5cbi8vIG1ha2UgYW4gQXBwIENvbXBvbmVudFxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBDb25uZWN0IEZvdXJcbiAgICAgIDxCb2FyZCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cblxuLy8gbWFrZSBhIEJvYXJkIENvbXBvbmVudFxuY2xhc3MgQm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIGJvYXJkOiBib2FyZCxcbiAgICAgIHR1cm46ICdyZWQnLFxuICAgICAgcmVzdWx0OiBudWxsLFxuICAgICAgc2xvdHM6IFs1LCA1LCA1LCA1LCA1LCA1LCA1XVxuICAgIH07XG4gIH1cblxuICBwbGFjZVBpZWNlKHgsIHkpIHtcblxuICAgIHZhciByb3dUb0NoYW5nZSA9IHRoaXMuc3RhdGUuc2xvdHNbeV07XG4gICAgdmFyIHNsb3RzID0gdGhpcy5zdGF0ZS5zbG90cztcblxuICAgIGlmIChzbG90c1t5XSA+PSAwKSB7XG4gICAgICBzbG90c1t5XS0tO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtzbG90czogc2xvdHN9KVxuXG4gICAgICB2YXIgbmV3Qm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkO1xuICAgICAgbmV3Qm9hcmRbcm93VG9DaGFuZ2VdW3ldID0gdGhpcy5zdGF0ZS50dXJuO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7Ym9hcmQ6IG5ld0JvYXJkfSk7XG4gICAgICBpZiAodGhpcy5zdGF0ZS50dXJuID09PSAncmVkJykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt0dXJuOiAnYmxhY2snfSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS50dXJuID09PSAnYmxhY2snKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3R1cm46ICdyZWQnfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2hlY2tGb3JSb3dXaW4oJ2JsYWNrJywgdGhpcy5zdGF0ZS5ib2FyZCkgfHwgY2hlY2tGb3JDb2x1bW5XaW4oJ2JsYWNrJywgdGhpcy5zdGF0ZS5ib2FyZCwgeSkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdibGFjayB3aW5zJyk7XG4gICAgfVxuICAgIGlmIChjaGVja0ZvclJvd1dpbigncmVkJywgdGhpcy5zdGF0ZS5ib2FyZCkgfHwgY2hlY2tGb3JDb2x1bW5XaW4oJ3JlZCcsIHRoaXMuc3RhdGUuYm9hcmQsIHkpKSB7XG4gICAgICBjb25zb2xlLmxvZygncmVkIHdpbnMnKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tGb3JNYWpvckRpYWdvbmFsV2luKCdyZWQnLCB0aGlzLnN0YXRlLmJvYXJkLCByb3dUb0NoYW5nZSwgeSkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdyZWQgd2lucyBieSBkaWFnb25hbCcpO1xuICAgIH1cbiAgICBpZiAoY2hlY2tGb3JNYWpvckRpYWdvbmFsV2luKCdibGFjaycsIHRoaXMuc3RhdGUuYm9hcmQsIHJvd1RvQ2hhbmdlLCB5KSkge1xuICAgICAgY29uc29sZS5sb2coJ2JsYWNrIHdpbnMgYnkgZGlhZ29uYWwnKTtcbiAgICB9XG4gICAgaWYgKGNoZWNrRm9yTWlub3JEaWFnb25hbFdpbigncmVkJywgdGhpcy5zdGF0ZS5ib2FyZCwgcm93VG9DaGFuZ2UsIHkpKSB7XG4gICAgICBjb25zb2xlLmxvZygncmVkIHdpbnMgYnkgZGlhZ29uYWwnKTtcbiAgICB9XG4gICAgaWYgKGNoZWNrRm9yTWlub3JEaWFnb25hbFdpbignYmxhY2snLCB0aGlzLnN0YXRlLmJvYXJkLCByb3dUb0NoYW5nZSwgeSkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdibGFjayB3aW5zIGJ5IGRpYWdvbmFsJyk7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkXCI+XG4gICAgICAgIEdhbWUgQm9hcmRcbiAgICAgICAge2JvYXJkLm1hcCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiA8Um93IHBsYWNlUGllY2U9e3RoaXMucGxhY2VQaWVjZS5iaW5kKHRoaXMpfSBrZXk9e3Jvd0luZGV4fSByb3c9e3Jvd30gcm93SW5kZXg9e3Jvd0luZGV4fS8+XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cbi8vIG1ha2UgYSBSb3cgQ29tcG9uZW50XG5mdW5jdGlvbiBSb3cocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgIHtwcm9wcy5yb3cubWFwKChzcXVhcmUsIGNvbEluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiA8U3F1YXJlIHBsYWNlUGllY2U9e3Byb3BzLnBsYWNlUGllY2V9IGtleT17Y29sSW5kZXh9IHg9e3Byb3BzLnJvd0luZGV4fSB5PXtjb2xJbmRleH0vPlxuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gbWFrZSBhIHNxdWFyZSBjb21wb25lbnRcbmZ1bmN0aW9uIFNxdWFyZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgb25DbGljaz17KCkgPT4ge3Byb3BzLnBsYWNlUGllY2UocHJvcHMueCwgcHJvcHMueSl9fSBjbGFzc05hbWU9J3NxdWFyZScgc3R5bGU9e3tiYWNrZ3JvdW5kOiBib2FyZFtwcm9wcy54XVtwcm9wcy55XX19PlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuUmVhY3RET00ucmVuZGVyKFxuICA8QXBwIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbik7XG5cblxuXG5cblxuXG5cblxuXG4iXX0=