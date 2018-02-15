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

var checkForColumnWin = function checkForColumnWin(color, board, column) {
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
var square = 'white';
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
      slots: [5, 5, 5, 5, 5, 5, 5],
      pieces: 0
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
        var pieces = this.state.pieces;
        pieces++;
        if (pieces === 42) {
          this.setState({ result: 'tie' });
        }

        this.setState({ pieces: pieces });

        var newBoard = this.state.board;
        newBoard[rowToChange][y] = this.state.turn;
        this.setState({ board: newBoard });

        if (checkForRowWin(this.state.turn, this.state.board) || checkForColumnWin(this.state.turn, this.state.board, y)) {
          console.log(this.state.turn + ' wins');
        }

        if (checkForMajorDiagonalWin(this.state.turn, this.state.board, rowToChange, y)) {
          console.log(this.state.turn + ' wins by maj diagonal');
        }

        if (checkForMinorDiagonalWin(this.state.turn, this.state.board, rowToChange, y)) {
          console.log(this.state.turn + ' wins by min diagonal');
        }

        if (this.state.turn === 'red') {
          this.setState({ turn: 'yellow' });
        } else if (this.state.turn === 'yellow') {
          this.setState({ turn: 'red' });
        }
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
  return React.createElement(
    'div',
    { className: 'container', onClick: function onClick() {
        props.placePiece(props.x, props.y);
      }, style: { background: 'blue' } },
    React.createElement('div', { className: 'square', style: { background: board[props.x][props.y] } })
  );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiY2hlY2tGb3JSb3dXaW4iLCJjb2xvciIsImJvYXJkIiwiaSIsImxlbmd0aCIsInJvdyIsImoiLCJzcXVhcmUiLCJjaGVja0ZvckNvbHVtbldpbiIsImNvbHVtbiIsImNoZWNrRm9yTWFqb3JEaWFnb25hbFdpbiIsIngiLCJ5IiwiZGlhZ0NvdW50IiwiY2hlY2tGb3JNaW5vckRpYWdvbmFsV2luIiwicHVzaCIsInNsaWNlIiwiQXBwIiwiQm9hcmQiLCJwcm9wcyIsInN0YXRlIiwidHVybiIsInJlc3VsdCIsInNsb3RzIiwicGllY2VzIiwicm93VG9DaGFuZ2UiLCJzZXRTdGF0ZSIsIm5ld0JvYXJkIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInJvd0luZGV4IiwicGxhY2VQaWVjZSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJvdyIsImNvbEluZGV4IiwiU3F1YXJlIiwiYmFja2dyb3VuZCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsSUFBSUEsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDckMsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlELE1BQU1FLE1BQTFCLEVBQWtDRCxHQUFsQyxFQUF1QztBQUNyQyxRQUFJRSxNQUFNSCxNQUFNQyxDQUFOLENBQVY7QUFDQSxTQUFLLElBQUlHLElBQUksQ0FBYixFQUFnQkEsSUFBSSxDQUFwQixFQUF1QkEsR0FBdkIsRUFBNEI7QUFDMUIsVUFBSUMsU0FBU0YsSUFBSUMsQ0FBSixDQUFiO0FBQ0EsVUFBSUMsV0FBV04sS0FBZixFQUFzQjtBQUNwQixZQUFJSSxJQUFJQyxJQUFFLENBQU4sS0FBWUQsSUFB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QUFBQTtBQUFBLE1BQUssV0FBVSxLQUFmO0FBQ0dBLFVBQU1kLEdBQU4sQ0FBVXlCLEdBQVYsQ0FBYyxVQUFDdkIsTUFBRCxFQUFTOEIsUUFBVCxFQUFzQjtBQUNuQyxhQUFPLG9CQUFDLE1BQUQsSUFBUSxZQUFZbEIsTUFBTWEsVUFBMUIsRUFBc0MsS0FBS0ssUUFBM0MsRUFBcUQsR0FBR2xCLE1BQU1ZLFFBQTlELEVBQXdFLEdBQUdNLFFBQTNFLEdBQVA7QUFDRCxLQUZBO0FBREgsR0FERjtBQU9EOztBQUVEO0FBQ0EsU0FBU0MsTUFBVCxDQUFnQm5CLEtBQWhCLEVBQXVCO0FBQ3JCLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSxXQUFmLEVBQTJCLFNBQVMsbUJBQU07QUFBQ0EsY0FBTWEsVUFBTixDQUFpQmIsTUFBTVIsQ0FBdkIsRUFBMEJRLE1BQU1QLENBQWhDO0FBQW1DLE9BQTlFLEVBQWdGLE9BQU8sRUFBQzJCLFlBQVksTUFBYixFQUF2RjtBQUNDLGlDQUFLLFdBQVUsUUFBZixFQUF3QixPQUFPLEVBQUNBLFlBQVlyQyxNQUFNaUIsTUFBTVIsQ0FBWixFQUFlUSxNQUFNUCxDQUFyQixDQUFiLEVBQS9CO0FBREQsR0FERjtBQU1EOztBQUdENEIsU0FBU0MsTUFBVCxDQUNFLG9CQUFDLEdBQUQsT0FERixFQUVFQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBRkYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYnVpbGQgVUkgd2l0aCByZWFjdGpzIGFuZCBwcmVjb21waWxlIHZpZXdzIHdpdGggYmFiZWxcbi8vIGFsbCBnYW1lIGxvZ2ljIHNob3VsZCBsaXZlIGluIHRoZSBjbGllbnQgY29kZVxuXG4vLyBhbGwgcmVhY3QgY29tcG9uZW50cyBjYW4gbGl2ZSBpbiB0aGlzIGZpbGVcblxuLy8gZGV0ZWN0IHdpbiBvciB0aWUgYW5kIGRpc3BsYXkgYXBwcm9wcmlhdGUgbWVzc2FnZVxuLy8gcGFnZSByZWZyZXNoIHJlc3RhcnRzIHRoZSBnYW1lXG5cbi8vIFdSSVRFIEZPVVIgVEVTVFMgZm9yIGVuZCBvZiBnYW1lIGxvZ2ljXG4vLyBjYW4gcnVuIHRlc3RzIGluIG5vZGUgb3IgYnJvd3NlclxuXG4vLyBtaW5pbWFsIGNzcyBzdHlsaW5nXG4vLyBoYXZlIGJhYmVsIHdhdGNoIGZvciBjaGFuZ2VzIGluIGFwcFxuLy8gdXNlIG5vZGVtb25cblxuXG4vLyBNQUtFIE1ZIEdBTUUgTE9HSUNcblxudmFyIGNoZWNrRm9yUm93V2luID0gKGNvbG9yLCBib2FyZCkgPT4ge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHJvdyA9IGJvYXJkW2ldO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgICB2YXIgc3F1YXJlID0gcm93W2pdO1xuICAgICAgaWYgKHNxdWFyZSA9PT0gY29sb3IpIHtcbiAgICAgICAgaWYgKHJvd1tqKzFdICYmIHJvd1tqKzFdID09PSBjb2xvcikge1xuICAgICAgICAgIGlmIChyb3dbaisyXSAmJiByb3dbaisyXSA9PT0gY29sb3IpIHtcbiAgICAgICAgICAgIGlmIChyb3dbaiszXSAmJiByb3dbaiszXSA9PT0gY29sb3IpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxudmFyIGNoZWNrRm9yQ29sdW1uV2luID0gKGNvbG9yLCBib2FyZCwgY29sdW1uKSA9PiB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgaWYgKGJvYXJkW2ldW2NvbHVtbl0gPT09IGNvbG9yKSB7XG4gICAgICBpZiAoYm9hcmRbaSArIDFdW2NvbHVtbl0gPT09IGNvbG9yKSB7XG4gICAgICAgIGlmIChib2FyZFtpICsgMl1bY29sdW1uXSA9PT0gY29sb3IpIHtcbiAgICAgICAgICBpZiAoYm9hcmRbaSArIDNdW2NvbHVtbl0gPT09IGNvbG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8vIGNoZWNrIGZvciBkaWFnb25hbCB3aW5zXG52YXIgY2hlY2tGb3JNYWpvckRpYWdvbmFsV2luID0gKGNvbG9yLCBib2FyZCwgeCwgeSkgPT4ge1xuICB2YXIgZGlhZ0NvdW50ID0gMTtcbiAgaWYgKGJvYXJkW3ggKyAxXSAmJiAoYm9hcmRbeCArIDFdW3kgLSAxXSA9PT0gY29sb3IpKSB7XG4gICAgZGlhZ0NvdW50Kys7XG4gICAgaWYgKGJvYXJkW3ggKyAyXSAmJiBib2FyZFt4ICsgMl1beSAtIDJdID09PSBjb2xvcikge1xuICAgICAgZGlhZ0NvdW50Kys7XG4gICAgfSBpZiAoYm9hcmRbeCArIDNdICYmIGJvYXJkW3ggKyAzXVt5IC0gM10gPT09IGNvbG9yKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoYm9hcmRbeCAtIDFdICYmIGJvYXJkW3ggLSAxXVt5ICsgMV0gPT09IGNvbG9yKSB7XG4gICAgZGlhZ0NvdW50Kys7XG4gICAgaWYgKGJvYXJkW3ggLSAyXSAmJiBib2FyZFt4IC0gMl1beSArIDJdID09PSBjb2xvcikge1xuICAgICAgZGlhZ0NvdW50Kys7XG4gICAgICBpZiAoYm9hcmRbeCAtIDNdICYmIGJvYXJkW3ggLSAzXVt5ICsgM10gPT09IGNvbG9yKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gXG4gIH1cbiAgcmV0dXJuIGRpYWdDb3VudCA+PSA0ID8gdHJ1ZSA6IGZhbHNlO1xufVxuXG52YXIgY2hlY2tGb3JNaW5vckRpYWdvbmFsV2luID0gKGNvbG9yLCBib2FyZCwgeCwgeSkgPT4ge1xuICB2YXIgZGlhZ0NvdW50ID0gMTtcbiAgaWYgKGJvYXJkW3ggLSAxXSAmJiBib2FyZFt4IC0gMV1beSAtIDFdID09PSBjb2xvcikge1xuICAgIGRpYWdDb3VudCsrO1xuICAgIGlmIChib2FyZFt4IC0gMl0gJiYgYm9hcmRbeCAtIDJdW3kgLSAyXSA9PT0gY29sb3IpIHtcbiAgICAgIGRpYWdDb3VudCsrO1xuICAgIH0gaWYgKGJvYXJkW3ggLSAzXSAmJiBib2FyZFt4IC0gM11beSAtIDNdID09PSBjb2xvcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKGJvYXJkW3ggKyAxXSAmJiBib2FyZFt4ICsgMV1beSArIDFdID09PSBjb2xvcikge1xuICAgIGRpYWdDb3VudCsrO1xuICAgIGlmIChib2FyZFt4ICsgMl0gJiYgYm9hcmRbeCArIDJdW3kgKyAyXSA9PT0gY29sb3IpIHtcbiAgICAgIGRpYWdDb3VudCsrO1xuICAgICAgaWYgKGJvYXJkW3ggKyAzXSAmJiBib2FyZFt4ICsgM11beSArIDNdID09PSBjb2xvcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IFxuICB9XG4gIHJldHVybiBkaWFnQ291bnQgPj0gNCA/IHRydWUgOiBmYWxzZTtcbn1cblxuXG5cblxuXG5cbi8vKioqKiBNWSBNT0RFTCAqKioqIC8vXG5cbi8vIGJvYXJkIGluaXRpYWxpemF0aW9uXG52YXIgYm9hcmQgPSBbXTtcbnZhciByb3cgPSBbXTtcbnZhciBzcXVhcmUgPSAnd2hpdGUnO1xuZm9yICh2YXIgaiA9IDA7IGogPCA3OyBqKyspIHtcbiAgcm93LnB1c2goc3F1YXJlKTtcbn1cbmZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gIGJvYXJkLnB1c2gocm93LnNsaWNlKCkpO1xufVxuXG5cblxuXG4vLyBtYWtlIGFuIEFwcCBDb21wb25lbnRcbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgQ29ubmVjdCBGb3VyXG4gICAgICA8Qm9hcmQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG5cbi8vIG1ha2UgYSBCb2FyZCBDb21wb25lbnRcbmNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICBib2FyZDogYm9hcmQsXG4gICAgICB0dXJuOiAncmVkJyxcbiAgICAgIHJlc3VsdDogbnVsbCxcbiAgICAgIHNsb3RzOiBbNSwgNSwgNSwgNSwgNSwgNSwgNV0sXG4gICAgICBwaWVjZXM6IDBcbiAgICB9O1xuICB9XG5cbiAgcGxhY2VQaWVjZSh4LCB5KSB7XG5cbiAgICB2YXIgcm93VG9DaGFuZ2UgPSB0aGlzLnN0YXRlLnNsb3RzW3ldO1xuICAgIHZhciBzbG90cyA9IHRoaXMuc3RhdGUuc2xvdHM7XG5cbiAgICBpZiAoc2xvdHNbeV0gPj0gMCkge1xuICAgICAgc2xvdHNbeV0tLTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2xvdHM6IHNsb3RzfSk7XG4gICAgICB2YXIgcGllY2VzID0gdGhpcy5zdGF0ZS5waWVjZXM7XG4gICAgICBwaWVjZXMrKztcbiAgICAgIGlmIChwaWVjZXMgPT09IDQyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Jlc3VsdDogJ3RpZSd9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7cGllY2VzOiBwaWVjZXN9KTtcblxuICAgICAgdmFyIG5ld0JvYXJkID0gdGhpcy5zdGF0ZS5ib2FyZDtcbiAgICAgIG5ld0JvYXJkW3Jvd1RvQ2hhbmdlXVt5XSA9IHRoaXMuc3RhdGUudHVybjtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2JvYXJkOiBuZXdCb2FyZH0pO1xuXG5cbiAgICAgIGlmIChjaGVja0ZvclJvd1dpbih0aGlzLnN0YXRlLnR1cm4sIHRoaXMuc3RhdGUuYm9hcmQpIHx8IGNoZWNrRm9yQ29sdW1uV2luKHRoaXMuc3RhdGUudHVybiwgdGhpcy5zdGF0ZS5ib2FyZCwgeSkpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS50dXJuICsgJyB3aW5zJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGVja0Zvck1ham9yRGlhZ29uYWxXaW4odGhpcy5zdGF0ZS50dXJuLCB0aGlzLnN0YXRlLmJvYXJkLCByb3dUb0NoYW5nZSwgeSkpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS50dXJuICsgJyB3aW5zIGJ5IG1haiBkaWFnb25hbCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hlY2tGb3JNaW5vckRpYWdvbmFsV2luKHRoaXMuc3RhdGUudHVybiwgdGhpcy5zdGF0ZS5ib2FyZCwgcm93VG9DaGFuZ2UsIHkpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudHVybiArICcgd2lucyBieSBtaW4gZGlhZ29uYWwnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc3RhdGUudHVybiA9PT0gJ3JlZCcpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dHVybjogJ3llbGxvdyd9KVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnR1cm4gPT09ICd5ZWxsb3cnKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3R1cm46ICdyZWQnfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZFwiPlxuICAgICAgICBHYW1lIEJvYXJkXG4gICAgICAgIHtib2FyZC5tYXAoKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gPFJvdyBwbGFjZVBpZWNlPXt0aGlzLnBsYWNlUGllY2UuYmluZCh0aGlzKX0ga2V5PXtyb3dJbmRleH0gcm93PXtyb3d9IHJvd0luZGV4PXtyb3dJbmRleH0vPlxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG4vLyBtYWtlIGEgUm93IENvbXBvbmVudFxuZnVuY3Rpb24gUm93KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICB7cHJvcHMucm93Lm1hcCgoc3F1YXJlLCBjb2xJbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gPFNxdWFyZSBwbGFjZVBpZWNlPXtwcm9wcy5wbGFjZVBpZWNlfSBrZXk9e2NvbEluZGV4fSB4PXtwcm9wcy5yb3dJbmRleH0geT17Y29sSW5kZXh9Lz5cbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIG1ha2UgYSBzcXVhcmUgY29tcG9uZW50XG5mdW5jdGlvbiBTcXVhcmUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIG9uQ2xpY2s9eygpID0+IHtwcm9wcy5wbGFjZVBpZWNlKHByb3BzLngsIHByb3BzLnkpfX0gc3R5bGU9e3tiYWNrZ3JvdW5kOiAnYmx1ZSd9fT5cbiAgICAgPGRpdiBjbGFzc05hbWU9J3NxdWFyZScgc3R5bGU9e3tiYWNrZ3JvdW5kOiBib2FyZFtwcm9wcy54XVtwcm9wcy55XX19PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuKTtcblxuXG5cblxuXG5cblxuXG5cbiJdfQ==