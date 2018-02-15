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
          this.setState({ turn: 'black' });
        } else if (this.state.turn === 'black') {
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
    { className: 'container' },
    React.createElement('div', { onClick: function onClick() {
        props.placePiece(props.x, props.y);
      }, className: 'square', style: { background: board[props.x][props.y] } })
  );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiY2hlY2tGb3JSb3dXaW4iLCJjb2xvciIsImJvYXJkIiwiaSIsImxlbmd0aCIsInJvdyIsImoiLCJzcXVhcmUiLCJjaGVja0ZvckNvbHVtbldpbiIsImNvbHVtbiIsImNoZWNrRm9yTWFqb3JEaWFnb25hbFdpbiIsIngiLCJ5IiwiZGlhZ0NvdW50IiwiY2hlY2tGb3JNaW5vckRpYWdvbmFsV2luIiwicHVzaCIsInNsaWNlIiwiQXBwIiwiQm9hcmQiLCJwcm9wcyIsInN0YXRlIiwidHVybiIsInJlc3VsdCIsInNsb3RzIiwicGllY2VzIiwicm93VG9DaGFuZ2UiLCJzZXRTdGF0ZSIsIm5ld0JvYXJkIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInJvd0luZGV4IiwicGxhY2VQaWVjZSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJvdyIsImNvbEluZGV4IiwiU3F1YXJlIiwiYmFja2dyb3VuZCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsSUFBSUEsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDckMsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlELE1BQU1FLE1BQTFCLEVBQWtDRCxHQUFsQyxFQUF1QztBQUNyQyxRQUFJRSxNQUFNSCxNQUFNQyxDQUFOLENBQVY7QUFDQSxTQUFLLElBQUlHLElBQUksQ0FBYixFQUFnQkEsSUFBSSxDQUFwQixFQUF1QkEsR0FBdkIsRUFBNEI7QUFDMUIsVUFBSUMsU0FBU0YsSUFBSUMsQ0FBSixDQUFiO0FBQ0EsVUFBSUMsV0FBV04sS0FBZixFQUFzQjtBQUNwQixZQUFJSSxJQUFJQyxJQUFFLENBQU4sS0FBWUQsSUFB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QUFBQTtBQUFBLE1BQUssV0FBVSxLQUFmO0FBQ0dBLFVBQU1kLEdBQU4sQ0FBVXlCLEdBQVYsQ0FBYyxVQUFDdkIsTUFBRCxFQUFTOEIsUUFBVCxFQUFzQjtBQUNuQyxhQUFPLG9CQUFDLE1BQUQsSUFBUSxZQUFZbEIsTUFBTWEsVUFBMUIsRUFBc0MsS0FBS0ssUUFBM0MsRUFBcUQsR0FBR2xCLE1BQU1ZLFFBQTlELEVBQXdFLEdBQUdNLFFBQTNFLEdBQVA7QUFDRCxLQUZBO0FBREgsR0FERjtBQU9EOztBQUVEO0FBQ0EsU0FBU0MsTUFBVCxDQUFnQm5CLEtBQWhCLEVBQXVCO0FBQ3JCLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSxXQUFmO0FBQ0MsaUNBQUssU0FBUyxtQkFBTTtBQUFDQSxjQUFNYSxVQUFOLENBQWlCYixNQUFNUixDQUF2QixFQUEwQlEsTUFBTVAsQ0FBaEM7QUFBbUMsT0FBeEQsRUFBMEQsV0FBVSxRQUFwRSxFQUE2RSxPQUFPLEVBQUMyQixZQUFZckMsTUFBTWlCLE1BQU1SLENBQVosRUFBZVEsTUFBTVAsQ0FBckIsQ0FBYixFQUFwRjtBQURELEdBREY7QUFNRDs7QUFHRDRCLFNBQVNDLE1BQVQsQ0FDRSxvQkFBQyxHQUFELE9BREYsRUFFRUMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUZGIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGJ1aWxkIFVJIHdpdGggcmVhY3RqcyBhbmQgcHJlY29tcGlsZSB2aWV3cyB3aXRoIGJhYmVsXG4vLyBhbGwgZ2FtZSBsb2dpYyBzaG91bGQgbGl2ZSBpbiB0aGUgY2xpZW50IGNvZGVcblxuLy8gYWxsIHJlYWN0IGNvbXBvbmVudHMgY2FuIGxpdmUgaW4gdGhpcyBmaWxlXG5cbi8vIGRldGVjdCB3aW4gb3IgdGllIGFuZCBkaXNwbGF5IGFwcHJvcHJpYXRlIG1lc3NhZ2Vcbi8vIHBhZ2UgcmVmcmVzaCByZXN0YXJ0cyB0aGUgZ2FtZVxuXG4vLyBXUklURSBGT1VSIFRFU1RTIGZvciBlbmQgb2YgZ2FtZSBsb2dpY1xuLy8gY2FuIHJ1biB0ZXN0cyBpbiBub2RlIG9yIGJyb3dzZXJcblxuLy8gbWluaW1hbCBjc3Mgc3R5bGluZ1xuLy8gaGF2ZSBiYWJlbCB3YXRjaCBmb3IgY2hhbmdlcyBpbiBhcHBcbi8vIHVzZSBub2RlbW9uXG5cblxuLy8gTUFLRSBNWSBHQU1FIExPR0lDXG5cbnZhciBjaGVja0ZvclJvd1dpbiA9IChjb2xvciwgYm9hcmQpID0+IHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgIHZhciByb3cgPSBib2FyZFtpXTtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgdmFyIHNxdWFyZSA9IHJvd1tqXTtcbiAgICAgIGlmIChzcXVhcmUgPT09IGNvbG9yKSB7XG4gICAgICAgIGlmIChyb3dbaisxXSAmJiByb3dbaisxXSA9PT0gY29sb3IpIHtcbiAgICAgICAgICBpZiAocm93W2orMl0gJiYgcm93W2orMl0gPT09IGNvbG9yKSB7XG4gICAgICAgICAgICBpZiAocm93W2orM10gJiYgcm93W2orM10gPT09IGNvbG9yKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbnZhciBjaGVja0ZvckNvbHVtbldpbiA9IChjb2xvciwgYm9hcmQsIGNvbHVtbikgPT4ge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGlmIChib2FyZFtpXVtjb2x1bW5dID09PSBjb2xvcikge1xuICAgICAgaWYgKGJvYXJkW2kgKyAxXVtjb2x1bW5dID09PSBjb2xvcikge1xuICAgICAgICBpZiAoYm9hcmRbaSArIDJdW2NvbHVtbl0gPT09IGNvbG9yKSB7XG4gICAgICAgICAgaWYgKGJvYXJkW2kgKyAzXVtjb2x1bW5dID09PSBjb2xvcikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG4vLyBjaGVjayBmb3IgZGlhZ29uYWwgd2luc1xudmFyIGNoZWNrRm9yTWFqb3JEaWFnb25hbFdpbiA9IChjb2xvciwgYm9hcmQsIHgsIHkpID0+IHtcbiAgdmFyIGRpYWdDb3VudCA9IDE7XG4gIGlmIChib2FyZFt4ICsgMV0gJiYgKGJvYXJkW3ggKyAxXVt5IC0gMV0gPT09IGNvbG9yKSkge1xuICAgIGRpYWdDb3VudCsrO1xuICAgIGlmIChib2FyZFt4ICsgMl0gJiYgYm9hcmRbeCArIDJdW3kgLSAyXSA9PT0gY29sb3IpIHtcbiAgICAgIGRpYWdDb3VudCsrO1xuICAgIH0gaWYgKGJvYXJkW3ggKyAzXSAmJiBib2FyZFt4ICsgM11beSAtIDNdID09PSBjb2xvcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKGJvYXJkW3ggLSAxXSAmJiBib2FyZFt4IC0gMV1beSArIDFdID09PSBjb2xvcikge1xuICAgIGRpYWdDb3VudCsrO1xuICAgIGlmIChib2FyZFt4IC0gMl0gJiYgYm9hcmRbeCAtIDJdW3kgKyAyXSA9PT0gY29sb3IpIHtcbiAgICAgIGRpYWdDb3VudCsrO1xuICAgICAgaWYgKGJvYXJkW3ggLSAzXSAmJiBib2FyZFt4IC0gM11beSArIDNdID09PSBjb2xvcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IFxuICB9XG4gIHJldHVybiBkaWFnQ291bnQgPj0gNCA/IHRydWUgOiBmYWxzZTtcbn1cblxudmFyIGNoZWNrRm9yTWlub3JEaWFnb25hbFdpbiA9IChjb2xvciwgYm9hcmQsIHgsIHkpID0+IHtcbiAgdmFyIGRpYWdDb3VudCA9IDE7XG4gIGlmIChib2FyZFt4IC0gMV0gJiYgYm9hcmRbeCAtIDFdW3kgLSAxXSA9PT0gY29sb3IpIHtcbiAgICBkaWFnQ291bnQrKztcbiAgICBpZiAoYm9hcmRbeCAtIDJdICYmIGJvYXJkW3ggLSAyXVt5IC0gMl0gPT09IGNvbG9yKSB7XG4gICAgICBkaWFnQ291bnQrKztcbiAgICB9IGlmIChib2FyZFt4IC0gM10gJiYgYm9hcmRbeCAtIDNdW3kgLSAzXSA9PT0gY29sb3IpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChib2FyZFt4ICsgMV0gJiYgYm9hcmRbeCArIDFdW3kgKyAxXSA9PT0gY29sb3IpIHtcbiAgICBkaWFnQ291bnQrKztcbiAgICBpZiAoYm9hcmRbeCArIDJdICYmIGJvYXJkW3ggKyAyXVt5ICsgMl0gPT09IGNvbG9yKSB7XG4gICAgICBkaWFnQ291bnQrKztcbiAgICAgIGlmIChib2FyZFt4ICsgM10gJiYgYm9hcmRbeCArIDNdW3kgKyAzXSA9PT0gY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBcbiAgfVxuICByZXR1cm4gZGlhZ0NvdW50ID49IDQgPyB0cnVlIDogZmFsc2U7XG59XG5cblxuXG5cblxuXG4vLyoqKiogTVkgTU9ERUwgKioqKiAvL1xuXG4vLyBib2FyZCBpbml0aWFsaXphdGlvblxudmFyIGJvYXJkID0gW107XG52YXIgcm93ID0gW107XG52YXIgc3F1YXJlID0gJyc7XG5mb3IgKHZhciBqID0gMDsgaiA8IDc7IGorKykge1xuICByb3cucHVzaChzcXVhcmUpO1xufVxuZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgYm9hcmQucHVzaChyb3cuc2xpY2UoKSk7XG59XG5cblxuXG5cbi8vIG1ha2UgYW4gQXBwIENvbXBvbmVudFxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBDb25uZWN0IEZvdXJcbiAgICAgIDxCb2FyZCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cblxuLy8gbWFrZSBhIEJvYXJkIENvbXBvbmVudFxuY2xhc3MgQm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIGJvYXJkOiBib2FyZCxcbiAgICAgIHR1cm46ICdyZWQnLFxuICAgICAgcmVzdWx0OiBudWxsLFxuICAgICAgc2xvdHM6IFs1LCA1LCA1LCA1LCA1LCA1LCA1XSxcbiAgICAgIHBpZWNlczogMFxuICAgIH07XG4gIH1cblxuICBwbGFjZVBpZWNlKHgsIHkpIHtcblxuICAgIHZhciByb3dUb0NoYW5nZSA9IHRoaXMuc3RhdGUuc2xvdHNbeV07XG4gICAgdmFyIHNsb3RzID0gdGhpcy5zdGF0ZS5zbG90cztcblxuICAgIGlmIChzbG90c1t5XSA+PSAwKSB7XG4gICAgICBzbG90c1t5XS0tO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtzbG90czogc2xvdHN9KTtcbiAgICAgIHZhciBwaWVjZXMgPSB0aGlzLnN0YXRlLnBpZWNlcztcbiAgICAgIHBpZWNlcysrO1xuICAgICAgaWYgKHBpZWNlcyA9PT0gNDIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVzdWx0OiAndGllJ30pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtwaWVjZXM6IHBpZWNlc30pO1xuXG4gICAgICB2YXIgbmV3Qm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkO1xuICAgICAgbmV3Qm9hcmRbcm93VG9DaGFuZ2VdW3ldID0gdGhpcy5zdGF0ZS50dXJuO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7Ym9hcmQ6IG5ld0JvYXJkfSk7XG5cblxuICAgICAgaWYgKGNoZWNrRm9yUm93V2luKHRoaXMuc3RhdGUudHVybiwgdGhpcy5zdGF0ZS5ib2FyZCkgfHwgY2hlY2tGb3JDb2x1bW5XaW4odGhpcy5zdGF0ZS50dXJuLCB0aGlzLnN0YXRlLmJvYXJkLCB5KSkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnR1cm4gKyAnIHdpbnMnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoZWNrRm9yTWFqb3JEaWFnb25hbFdpbih0aGlzLnN0YXRlLnR1cm4sIHRoaXMuc3RhdGUuYm9hcmQsIHJvd1RvQ2hhbmdlLCB5KSkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnR1cm4gKyAnIHdpbnMgYnkgbWFqIGRpYWdvbmFsJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGVja0Zvck1pbm9yRGlhZ29uYWxXaW4odGhpcy5zdGF0ZS50dXJuLCB0aGlzLnN0YXRlLmJvYXJkLCByb3dUb0NoYW5nZSwgeSkpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS50dXJuICsgJyB3aW5zIGJ5IG1pbiBkaWFnb25hbCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zdGF0ZS50dXJuID09PSAncmVkJykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt0dXJuOiAnYmxhY2snfSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS50dXJuID09PSAnYmxhY2snKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3R1cm46ICdyZWQnfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZFwiPlxuICAgICAgICBHYW1lIEJvYXJkXG4gICAgICAgIHtib2FyZC5tYXAoKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gPFJvdyBwbGFjZVBpZWNlPXt0aGlzLnBsYWNlUGllY2UuYmluZCh0aGlzKX0ga2V5PXtyb3dJbmRleH0gcm93PXtyb3d9IHJvd0luZGV4PXtyb3dJbmRleH0vPlxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG4vLyBtYWtlIGEgUm93IENvbXBvbmVudFxuZnVuY3Rpb24gUm93KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICB7cHJvcHMucm93Lm1hcCgoc3F1YXJlLCBjb2xJbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gPFNxdWFyZSBwbGFjZVBpZWNlPXtwcm9wcy5wbGFjZVBpZWNlfSBrZXk9e2NvbEluZGV4fSB4PXtwcm9wcy5yb3dJbmRleH0geT17Y29sSW5kZXh9Lz5cbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIG1ha2UgYSBzcXVhcmUgY29tcG9uZW50XG5mdW5jdGlvbiBTcXVhcmUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHtwcm9wcy5wbGFjZVBpZWNlKHByb3BzLngsIHByb3BzLnkpfX0gY2xhc3NOYW1lPSdzcXVhcmUnIHN0eWxlPXt7YmFja2dyb3VuZDogYm9hcmRbcHJvcHMueF1bcHJvcHMueV19fT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuUmVhY3RET00ucmVuZGVyKFxuICA8QXBwIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbik7XG5cblxuXG5cblxuXG5cblxuXG4iXX0=