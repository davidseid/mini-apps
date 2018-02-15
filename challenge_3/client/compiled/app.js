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

      if (checkForRowWin('black', this.state.board)) {
        console.log('black wins');
      }
      if (checkForRowWin('red', this.state.board)) {
        console.log('red wins');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiY2hlY2tGb3JSb3dXaW4iLCJjb2xvciIsImJvYXJkIiwiaSIsImxlbmd0aCIsInJvdyIsImoiLCJzcXVhcmUiLCJwdXNoIiwic2xpY2UiLCJBcHAiLCJCb2FyZCIsInByb3BzIiwic3RhdGUiLCJ0dXJuIiwicmVzdWx0Iiwic2xvdHMiLCJ4IiwieSIsInJvd1RvQ2hhbmdlIiwic2V0U3RhdGUiLCJuZXdCb2FyZCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJyb3dJbmRleCIsInBsYWNlUGllY2UiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSb3ciLCJjb2xJbmRleCIsIlNxdWFyZSIsImJhY2tncm91bmQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EsSUFBSUEsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDckMsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlELE1BQU1FLE1BQTFCLEVBQWtDRCxHQUFsQyxFQUF1QztBQUNyQyxRQUFJRSxNQUFNSCxNQUFNQyxDQUFOLENBQVY7QUFDQSxTQUFLLElBQUlHLElBQUksQ0FBYixFQUFnQkEsSUFBSSxDQUFwQixFQUF1QkEsR0FBdkIsRUFBNEI7QUFDMUIsVUFBSUMsU0FBU0YsSUFBSUMsQ0FBSixDQUFiO0FBQ0EsVUFBSUMsV0FBV04sS0FBZixFQUFzQjtBQUNwQixZQUFJSSxJQUFJQyxJQUFFLENBQU4sS0FBWUQsSUFBSUMsSUFBRSxDQUFOLE1BQWFMLEtBQTdCLEVBQW9DO0FBQ2xDLGNBQUlJLElBQUlDLElBQUUsQ0FBTixLQUFZRCxJQUFJQyxJQUFFLENBQU4sTUFBYUwsS0FBN0IsRUFBb0M7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QUFxRDFCOzs7QUFDQSxTQUFTQyxHQUFULENBQWFsQixLQUFiLEVBQW9CO0FBQ2xCLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSxLQUFmO0FBQ0dBLFVBQU1QLEdBQU4sQ0FBVW1CLEdBQVYsQ0FBYyxVQUFDakIsTUFBRCxFQUFTd0IsUUFBVCxFQUFzQjtBQUNuQyxhQUFPLG9CQUFDLE1BQUQsSUFBUSxZQUFZbkIsTUFBTWMsVUFBMUIsRUFBc0MsS0FBS0ssUUFBM0MsRUFBcUQsR0FBR25CLE1BQU1hLFFBQTlELEVBQXdFLEdBQUdNLFFBQTNFLEdBQVA7QUFDRCxLQUZBO0FBREgsR0FERjtBQU9EOztBQUVEO0FBQ0EsU0FBU0MsTUFBVCxDQUFnQnBCLEtBQWhCLEVBQXVCO0FBQ3JCLFNBQ0UsNkJBQUssU0FBUyxtQkFBTTtBQUFDQSxZQUFNYyxVQUFOLENBQWlCZCxNQUFNSyxDQUF2QixFQUEwQkwsTUFBTU0sQ0FBaEM7QUFBbUMsS0FBeEQsRUFBMEQsV0FBVSxRQUFwRSxFQUE2RSxPQUFPLEVBQUNlLFlBQVkvQixNQUFNVSxNQUFNSyxDQUFaLEVBQWVMLE1BQU1NLENBQXJCLENBQWIsRUFBcEYsR0FERjtBQUlEOztBQUdEZ0IsU0FBU0MsTUFBVCxDQUNFLG9CQUFDLEdBQUQsT0FERixFQUVFQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBRkYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYnVpbGQgVUkgd2l0aCByZWFjdGpzIGFuZCBwcmVjb21waWxlIHZpZXdzIHdpdGggYmFiZWxcbi8vIGFsbCBnYW1lIGxvZ2ljIHNob3VsZCBsaXZlIGluIHRoZSBjbGllbnQgY29kZVxuXG4vLyBhbGwgcmVhY3QgY29tcG9uZW50cyBjYW4gbGl2ZSBpbiB0aGlzIGZpbGVcblxuLy8gZGV0ZWN0IHdpbiBvciB0aWUgYW5kIGRpc3BsYXkgYXBwcm9wcmlhdGUgbWVzc2FnZVxuLy8gcGFnZSByZWZyZXNoIHJlc3RhcnRzIHRoZSBnYW1lXG5cbi8vIFdSSVRFIEZPVVIgVEVTVFMgZm9yIGVuZCBvZiBnYW1lIGxvZ2ljXG4vLyBjYW4gcnVuIHRlc3RzIGluIG5vZGUgb3IgYnJvd3NlclxuXG4vLyBtaW5pbWFsIGNzcyBzdHlsaW5nXG4vLyBoYXZlIGJhYmVsIHdhdGNoIGZvciBjaGFuZ2VzIGluIGFwcFxuLy8gdXNlIG5vZGVtb25cblxuXG4vLyBNQUtFIE1ZIEdBTUUgTE9HSUNcblxuLy8gY2hlY2sgZm9yIHJvdyB3aW5cbnZhciBjaGVja0ZvclJvd1dpbiA9IChjb2xvciwgYm9hcmQpID0+IHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgIHZhciByb3cgPSBib2FyZFtpXTtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgdmFyIHNxdWFyZSA9IHJvd1tqXTtcbiAgICAgIGlmIChzcXVhcmUgPT09IGNvbG9yKSB7XG4gICAgICAgIGlmIChyb3dbaisxXSAmJiByb3dbaisxXSA9PT0gY29sb3IpIHtcbiAgICAgICAgICBpZiAocm93W2orMl0gJiYgcm93W2orMl0gPT09IGNvbG9yKSB7XG4gICAgICAgICAgICBpZiAocm93W2orM10gJiYgcm93W2orM10gPT09IGNvbG9yKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cblxuXG5cblxuXG5cblxuLy8qKioqIE1ZIE1PREVMICoqKiogLy9cblxuLy8gYm9hcmQgaW5pdGlhbGl6YXRpb25cbnZhciBib2FyZCA9IFtdO1xudmFyIHJvdyA9IFtdO1xudmFyIHNxdWFyZSA9ICcnO1xuZm9yICh2YXIgaiA9IDA7IGogPCA3OyBqKyspIHtcbiAgcm93LnB1c2goc3F1YXJlKTtcbn1cbmZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gIGJvYXJkLnB1c2gocm93LnNsaWNlKCkpO1xufVxuXG5cblxuXG4vLyBtYWtlIGFuIEFwcCBDb21wb25lbnRcbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgQ29ubmVjdCBGb3VyXG4gICAgICA8Qm9hcmQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG5cbi8vIG1ha2UgYSBCb2FyZCBDb21wb25lbnRcbmNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICBib2FyZDogYm9hcmQsXG4gICAgICB0dXJuOiAncmVkJyxcbiAgICAgIHJlc3VsdDogbnVsbCxcbiAgICAgIHNsb3RzOiBbNSwgNSwgNSwgNSwgNSwgNSwgNV1cbiAgICB9O1xuICB9XG5cbiAgcGxhY2VQaWVjZSh4LCB5KSB7XG5cbiAgICB2YXIgcm93VG9DaGFuZ2UgPSB0aGlzLnN0YXRlLnNsb3RzW3ldO1xuICAgIHZhciBzbG90cyA9IHRoaXMuc3RhdGUuc2xvdHM7XG5cbiAgICBpZiAoc2xvdHNbeV0gPj0gMCkge1xuICAgICAgc2xvdHNbeV0tLTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2xvdHM6IHNsb3RzfSlcblxuICAgICAgdmFyIG5ld0JvYXJkID0gdGhpcy5zdGF0ZS5ib2FyZDtcbiAgICAgIG5ld0JvYXJkW3Jvd1RvQ2hhbmdlXVt5XSA9IHRoaXMuc3RhdGUudHVybjtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2JvYXJkOiBuZXdCb2FyZH0pO1xuICAgICAgaWYgKHRoaXMuc3RhdGUudHVybiA9PT0gJ3JlZCcpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dHVybjogJ2JsYWNrJ30pXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUudHVybiA9PT0gJ2JsYWNrJykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt0dXJuOiAncmVkJ30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrRm9yUm93V2luKCdibGFjaycsIHRoaXMuc3RhdGUuYm9hcmQpKSB7XG4gICAgICBjb25zb2xlLmxvZygnYmxhY2sgd2lucycpO1xuICAgIH1cbiAgICBpZiAoY2hlY2tGb3JSb3dXaW4oJ3JlZCcsIHRoaXMuc3RhdGUuYm9hcmQpKSB7XG4gICAgICBjb25zb2xlLmxvZygncmVkIHdpbnMnKTtcbiAgICB9XG4gICAgXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIj5cbiAgICAgICAgR2FtZSBCb2FyZFxuICAgICAgICB7Ym9hcmQubWFwKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxSb3cgcGxhY2VQaWVjZT17dGhpcy5wbGFjZVBpZWNlLmJpbmQodGhpcyl9IGtleT17cm93SW5kZXh9IHJvdz17cm93fSByb3dJbmRleD17cm93SW5kZXh9Lz5cbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuLy8gbWFrZSBhIFJvdyBDb21wb25lbnRcbmZ1bmN0aW9uIFJvdyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAge3Byb3BzLnJvdy5tYXAoKHNxdWFyZSwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIDxTcXVhcmUgcGxhY2VQaWVjZT17cHJvcHMucGxhY2VQaWVjZX0ga2V5PXtjb2xJbmRleH0geD17cHJvcHMucm93SW5kZXh9IHk9e2NvbEluZGV4fS8+XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBtYWtlIGEgc3F1YXJlIGNvbXBvbmVudFxuZnVuY3Rpb24gU3F1YXJlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7cHJvcHMucGxhY2VQaWVjZShwcm9wcy54LCBwcm9wcy55KX19IGNsYXNzTmFtZT0nc3F1YXJlJyBzdHlsZT17e2JhY2tncm91bmQ6IGJvYXJkW3Byb3BzLnhdW3Byb3BzLnldfX0+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuKTtcblxuXG5cblxuXG5cblxuXG5cbiJdfQ==