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


// 1. Allow the user to click on a box and have it turn red


//**** MY MODEL **** //

// board initialization
var board = [];
var row = [];
var square = '';
for (var j = 0; j < 7; j++) {
  row.push(square);
}
for (var i = 0; i < 6; i++) {
  board.push(row);
}
var rowNum = -1;
var colNum = -1;

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
      result: null
    };
    return _this;
  }

  _createClass(Board, [{
    key: 'placePiece',
    value: function placePiece(x, y) {
      console.log(x, y);
      board[x][y] = this.state.turn;
      this.setState({ board: board });
      // board = this.state.board;
      // board[x][y] = this.state.turn;
      // this.setState({board: board});
      // set the value of the square to the turn
      // if the turn is red, change to black
      // if the turn is black, change to red
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
          // rowNum += 1;
          return React.createElement(Row, { placePiece: _this2.placePiece.bind(_this2), key: rowIndex, row: rowIndex });
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
    row.map(function (square, colIndex) {
      // colNum++;
      // colNum = colNum % 7;
      return React.createElement(Square, { placePiece: props.placePiece, key: colIndex, x: props.row, y: colIndex });
    })
  );
}

// make a square component
function Square(props) {
  return React.createElement(
    'div',
    { onClick: function onClick() {
        props.placePiece(props.x, props.y);
      }, className: 'square' },
    board[props.x][props.y]
  );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiYm9hcmQiLCJyb3ciLCJzcXVhcmUiLCJqIiwicHVzaCIsImkiLCJyb3dOdW0iLCJjb2xOdW0iLCJBcHAiLCJCb2FyZCIsInByb3BzIiwic3RhdGUiLCJ0dXJuIiwicmVzdWx0IiwieCIsInkiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJtYXAiLCJyb3dJbmRleCIsInBsYWNlUGllY2UiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSb3ciLCJjb2xJbmRleCIsIlNxdWFyZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBSUE7OztBQUdBOztBQUVBO0FBQ0EsSUFBSUEsUUFBUSxFQUFaO0FBQ0EsSUFBSUMsTUFBTSxFQUFWO0FBQ0EsSUFBSUMsU0FBUyxFQUFiO0FBQ0EsS0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksQ0FBcEIsRUFBdUJBLEdBQXZCLEVBQTRCO0FBQzFCRixNQUFJRyxJQUFKLENBQVNGLE1BQVQ7QUFDRDtBQUNELEtBQUssSUFBSUcsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLENBQXBCLEVBQXVCQSxHQUF2QixFQUE0QjtBQUMxQkwsUUFBTUksSUFBTixDQUFXSCxHQUFYO0FBQ0Q7QUFDRCxJQUFJSyxTQUFTLENBQUMsQ0FBZDtBQUNBLElBQUlDLFNBQVMsQ0FBQyxDQUFkOztBQUdBO0FBQ0EsU0FBU0MsR0FBVCxHQUFlO0FBQ2IsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUVFLHdCQUFDLEtBQUQ7QUFGRixHQURGO0FBTUQ7O0FBSUQ7O0lBQ01DLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYWCxhQUFPQSxLQURJO0FBRVhZLFlBQU0sS0FGSztBQUdYQyxjQUFRO0FBSEcsS0FBYjtBQUZpQjtBQU9sQjs7OzsrQkFFVUMsQyxFQUFHQyxDLEVBQUc7QUFDZkMsY0FBUUMsR0FBUixDQUFZSCxDQUFaLEVBQWVDLENBQWY7QUFDQWYsWUFBTWMsQ0FBTixFQUFTQyxDQUFULElBQWMsS0FBS0osS0FBTCxDQUFXQyxJQUF6QjtBQUNBLFdBQUtNLFFBQUwsQ0FBYyxFQUFDbEIsT0FBT0EsS0FBUixFQUFkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxPQUFmO0FBQUE7QUFFR0EsY0FBTW1CLEdBQU4sQ0FBVSxVQUFDbEIsR0FBRCxFQUFNbUIsUUFBTixFQUFtQjtBQUM1QjtBQUNBLGlCQUFPLG9CQUFDLEdBQUQsSUFBSyxZQUFZLE9BQUtDLFVBQUwsQ0FBZ0JDLElBQWhCLFFBQWpCLEVBQTZDLEtBQUtGLFFBQWxELEVBQTRELEtBQUtBLFFBQWpFLEdBQVA7QUFDRCxTQUhBO0FBRkgsT0FERjtBQVNEOzs7O0VBaENpQkcsTUFBTUMsUzs7QUFvQzFCOzs7QUFDQSxTQUFTQyxHQUFULENBQWFmLEtBQWIsRUFBb0I7QUFDbEIsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLEtBQWY7QUFDR1QsUUFBSWtCLEdBQUosQ0FBUSxVQUFDakIsTUFBRCxFQUFTd0IsUUFBVCxFQUFzQjtBQUM3QjtBQUNBO0FBQ0EsYUFBTyxvQkFBQyxNQUFELElBQVEsWUFBWWhCLE1BQU1XLFVBQTFCLEVBQXNDLEtBQUtLLFFBQTNDLEVBQXFELEdBQUdoQixNQUFNVCxHQUE5RCxFQUFtRSxHQUFHeUIsUUFBdEUsR0FBUDtBQUNELEtBSkE7QUFESCxHQURGO0FBU0Q7O0FBRUQ7QUFDQSxTQUFTQyxNQUFULENBQWdCakIsS0FBaEIsRUFBdUI7QUFDckIsU0FDRTtBQUFBO0FBQUEsTUFBSyxTQUFTLG1CQUFNO0FBQUNBLGNBQU1XLFVBQU4sQ0FBaUJYLE1BQU1JLENBQXZCLEVBQTBCSixNQUFNSyxDQUFoQztBQUFtQyxPQUF4RCxFQUEwRCxXQUFVLFFBQXBFO0FBQ0dmLFVBQU1VLE1BQU1JLENBQVosRUFBZUosTUFBTUssQ0FBckI7QUFESCxHQURGO0FBS0Q7O0FBR0RhLFNBQVNDLE1BQVQsQ0FDRSxvQkFBQyxHQUFELE9BREYsRUFFRUMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUZGIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGJ1aWxkIFVJIHdpdGggcmVhY3RqcyBhbmQgcHJlY29tcGlsZSB2aWV3cyB3aXRoIGJhYmVsXG4vLyBhbGwgZ2FtZSBsb2dpYyBzaG91bGQgbGl2ZSBpbiB0aGUgY2xpZW50IGNvZGVcblxuLy8gYWxsIHJlYWN0IGNvbXBvbmVudHMgY2FuIGxpdmUgaW4gdGhpcyBmaWxlXG5cbi8vIGRldGVjdCB3aW4gb3IgdGllIGFuZCBkaXNwbGF5IGFwcHJvcHJpYXRlIG1lc3NhZ2Vcbi8vIHBhZ2UgcmVmcmVzaCByZXN0YXJ0cyB0aGUgZ2FtZVxuXG4vLyBXUklURSBGT1VSIFRFU1RTIGZvciBlbmQgb2YgZ2FtZSBsb2dpY1xuLy8gY2FuIHJ1biB0ZXN0cyBpbiBub2RlIG9yIGJyb3dzZXJcblxuLy8gbWluaW1hbCBjc3Mgc3R5bGluZ1xuLy8gaGF2ZSBiYWJlbCB3YXRjaCBmb3IgY2hhbmdlcyBpbiBhcHBcbi8vIHVzZSBub2RlbW9uXG5cblxuXG4vLyAxLiBBbGxvdyB0aGUgdXNlciB0byBjbGljayBvbiBhIGJveCBhbmQgaGF2ZSBpdCB0dXJuIHJlZFxuXG5cbi8vKioqKiBNWSBNT0RFTCAqKioqIC8vXG5cbi8vIGJvYXJkIGluaXRpYWxpemF0aW9uXG52YXIgYm9hcmQgPSBbXTtcbnZhciByb3cgPSBbXTtcbnZhciBzcXVhcmUgPSAnJztcbmZvciAodmFyIGogPSAwOyBqIDwgNzsgaisrKSB7XG4gIHJvdy5wdXNoKHNxdWFyZSk7XG59XG5mb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xuICBib2FyZC5wdXNoKHJvdyk7XG59XG52YXIgcm93TnVtID0gLTE7XG52YXIgY29sTnVtID0gLTE7XG5cblxuLy8gbWFrZSBhbiBBcHAgQ29tcG9uZW50XG5mdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIENvbm5lY3QgRm91clxuICAgICAgPEJvYXJkIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblxuXG4vLyBtYWtlIGEgQm9hcmQgQ29tcG9uZW50XG5jbGFzcyBCb2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IFxuICAgICAgYm9hcmQ6IGJvYXJkLCBcbiAgICAgIHR1cm46ICdyZWQnLFxuICAgICAgcmVzdWx0OiBudWxsXG4gICAgfTtcbiAgfVxuXG4gIHBsYWNlUGllY2UoeCwgeSkge1xuICAgIGNvbnNvbGUubG9nKHgsIHkpXG4gICAgYm9hcmRbeF1beV0gPSB0aGlzLnN0YXRlLnR1cm47XG4gICAgdGhpcy5zZXRTdGF0ZSh7Ym9hcmQ6IGJvYXJkfSk7XG4gICAgLy8gYm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkO1xuICAgIC8vIGJvYXJkW3hdW3ldID0gdGhpcy5zdGF0ZS50dXJuO1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoe2JvYXJkOiBib2FyZH0pO1xuICAgIC8vIHNldCB0aGUgdmFsdWUgb2YgdGhlIHNxdWFyZSB0byB0aGUgdHVyblxuICAgIC8vIGlmIHRoZSB0dXJuIGlzIHJlZCwgY2hhbmdlIHRvIGJsYWNrXG4gICAgLy8gaWYgdGhlIHR1cm4gaXMgYmxhY2ssIGNoYW5nZSB0byByZWRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZFwiPlxuICAgICAgICBHYW1lIEJvYXJkXG4gICAgICAgIHtib2FyZC5tYXAoKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgICAvLyByb3dOdW0gKz0gMTtcbiAgICAgICAgICByZXR1cm4gPFJvdyBwbGFjZVBpZWNlPXt0aGlzLnBsYWNlUGllY2UuYmluZCh0aGlzKX0ga2V5PXtyb3dJbmRleH0gcm93PXtyb3dJbmRleH0vPlxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG4vLyBtYWtlIGEgUm93IENvbXBvbmVudFxuZnVuY3Rpb24gUm93KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICB7cm93Lm1hcCgoc3F1YXJlLCBjb2xJbmRleCkgPT4ge1xuICAgICAgICAvLyBjb2xOdW0rKztcbiAgICAgICAgLy8gY29sTnVtID0gY29sTnVtICUgNztcbiAgICAgICAgcmV0dXJuIDxTcXVhcmUgcGxhY2VQaWVjZT17cHJvcHMucGxhY2VQaWVjZX0ga2V5PXtjb2xJbmRleH0geD17cHJvcHMucm93fSB5PXtjb2xJbmRleH0vPlxuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gbWFrZSBhIHNxdWFyZSBjb21wb25lbnRcbmZ1bmN0aW9uIFNxdWFyZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgb25DbGljaz17KCkgPT4ge3Byb3BzLnBsYWNlUGllY2UocHJvcHMueCwgcHJvcHMueSl9fSBjbGFzc05hbWU9J3NxdWFyZSc+XG4gICAgICB7Ym9hcmRbcHJvcHMueF1bcHJvcHMueV19XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuKTtcblxuXG5cblxuXG5cblxuXG5cbiJdfQ==