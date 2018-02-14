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
var square = [];
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
    value: function placePiece() {
      console.log('clicked!');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'board' },
        'Game Board',
        board.map(function (row) {
          rowNum += 1;
          return React.createElement(Row, { placePiece: _this2.placePiece, key: rowNum, row: rowNum });
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
    row.map(function (square) {
      colNum++;
      return React.createElement(Square, { placePiece: props.placePiece, key: colNum, x: props.row, y: colNum });
    })
  );
}

// make a square component
function Square(props) {
  return React.createElement(
    'div',
    { onClick: props.placePiece, className: 'square' },
    board[props.x][props.y]
  );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiYm9hcmQiLCJyb3ciLCJzcXVhcmUiLCJqIiwicHVzaCIsImkiLCJyb3dOdW0iLCJjb2xOdW0iLCJBcHAiLCJCb2FyZCIsInByb3BzIiwic3RhdGUiLCJ0dXJuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsIm1hcCIsInBsYWNlUGllY2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJvdyIsIlNxdWFyZSIsIngiLCJ5IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFJQTs7O0FBTUE7O0FBRUE7QUFDQSxJQUFJQSxRQUFRLEVBQVo7QUFDQSxJQUFJQyxNQUFNLEVBQVY7QUFDQSxJQUFJQyxTQUFTLEVBQWI7QUFDQSxLQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxDQUFwQixFQUF1QkEsR0FBdkIsRUFBNEI7QUFDMUJGLE1BQUlHLElBQUosQ0FBU0YsTUFBVDtBQUNEO0FBQ0QsS0FBSyxJQUFJRyxJQUFJLENBQWIsRUFBZ0JBLElBQUksQ0FBcEIsRUFBdUJBLEdBQXZCLEVBQTRCO0FBQzFCTCxRQUFNSSxJQUFOLENBQVdILEdBQVg7QUFDRDtBQUNELElBQUlLLFNBQVMsQ0FBQyxDQUFkO0FBQ0EsSUFBSUMsU0FBUyxDQUFDLENBQWQ7O0FBR0E7QUFDQSxTQUFTQyxHQUFULEdBQWU7QUFDYixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBRUUsd0JBQUMsS0FBRDtBQUZGLEdBREY7QUFNRDs7QUFJRDs7SUFDTUMsSzs7O0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hYLGFBQU9BLEtBREk7QUFFWFksWUFBTSxLQUZLO0FBR1hDLGNBQVE7QUFIRyxLQUFiO0FBRmlCO0FBT2xCOzs7O2lDQUVZO0FBQ1hDLGNBQVFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxPQUFmO0FBQUE7QUFFR2YsY0FBTWdCLEdBQU4sQ0FBVSxVQUFDZixHQUFELEVBQVM7QUFDbEJLLG9CQUFVLENBQVY7QUFDQSxpQkFBTyxvQkFBQyxHQUFELElBQUssWUFBWSxPQUFLVyxVQUF0QixFQUFrQyxLQUFLWCxNQUF2QyxFQUErQyxLQUFLQSxNQUFwRCxHQUFQO0FBQ0QsU0FIQTtBQUZILE9BREY7QUFTRDs7OztFQXhCaUJZLE1BQU1DLFM7O0FBNEIxQjs7O0FBQ0EsU0FBU0MsR0FBVCxDQUFhVixLQUFiLEVBQW9CO0FBQ2xCLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSxLQUFmO0FBQ0dULFFBQUllLEdBQUosQ0FBUSxVQUFDZCxNQUFELEVBQVk7QUFDbkJLO0FBQ0EsYUFBTyxvQkFBQyxNQUFELElBQVEsWUFBWUcsTUFBTU8sVUFBMUIsRUFBc0MsS0FBS1YsTUFBM0MsRUFBbUQsR0FBR0csTUFBTVQsR0FBNUQsRUFBaUUsR0FBR00sTUFBcEUsR0FBUDtBQUNELEtBSEE7QUFESCxHQURGO0FBUUQ7O0FBRUQ7QUFDQSxTQUFTYyxNQUFULENBQWdCWCxLQUFoQixFQUF1QjtBQUNyQixTQUNFO0FBQUE7QUFBQSxNQUFLLFNBQVNBLE1BQU1PLFVBQXBCLEVBQWdDLFdBQVUsUUFBMUM7QUFDR2pCLFVBQU1VLE1BQU1ZLENBQVosRUFBZVosTUFBTWEsQ0FBckI7QUFESCxHQURGO0FBS0Q7O0FBR0RDLFNBQVNDLE1BQVQsQ0FDRSxvQkFBQyxHQUFELE9BREYsRUFFRUMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUZGIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGJ1aWxkIFVJIHdpdGggcmVhY3RqcyBhbmQgcHJlY29tcGlsZSB2aWV3cyB3aXRoIGJhYmVsXG4vLyBhbGwgZ2FtZSBsb2dpYyBzaG91bGQgbGl2ZSBpbiB0aGUgY2xpZW50IGNvZGVcblxuLy8gYWxsIHJlYWN0IGNvbXBvbmVudHMgY2FuIGxpdmUgaW4gdGhpcyBmaWxlXG5cbi8vIGRldGVjdCB3aW4gb3IgdGllIGFuZCBkaXNwbGF5IGFwcHJvcHJpYXRlIG1lc3NhZ2Vcbi8vIHBhZ2UgcmVmcmVzaCByZXN0YXJ0cyB0aGUgZ2FtZVxuXG4vLyBXUklURSBGT1VSIFRFU1RTIGZvciBlbmQgb2YgZ2FtZSBsb2dpY1xuLy8gY2FuIHJ1biB0ZXN0cyBpbiBub2RlIG9yIGJyb3dzZXJcblxuLy8gbWluaW1hbCBjc3Mgc3R5bGluZ1xuLy8gaGF2ZSBiYWJlbCB3YXRjaCBmb3IgY2hhbmdlcyBpbiBhcHBcbi8vIHVzZSBub2RlbW9uXG5cblxuXG4vLyAxLiBBbGxvdyB0aGUgdXNlciB0byBjbGljayBvbiBhIGJveCBhbmQgaGF2ZSBpdCB0dXJuIHJlZFxuXG5cblxuXG5cbi8vKioqKiBNWSBNT0RFTCAqKioqIC8vXG5cbi8vIGJvYXJkIGluaXRpYWxpemF0aW9uXG52YXIgYm9hcmQgPSBbXTtcbnZhciByb3cgPSBbXTtcbnZhciBzcXVhcmUgPSBbXTtcbmZvciAodmFyIGogPSAwOyBqIDwgNzsgaisrKSB7XG4gIHJvdy5wdXNoKHNxdWFyZSk7XG59XG5mb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xuICBib2FyZC5wdXNoKHJvdyk7XG59XG52YXIgcm93TnVtID0gLTE7XG52YXIgY29sTnVtID0gLTE7XG5cblxuLy8gbWFrZSBhbiBBcHAgQ29tcG9uZW50XG5mdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIENvbm5lY3QgRm91clxuICAgICAgPEJvYXJkIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblxuXG4vLyBtYWtlIGEgQm9hcmQgQ29tcG9uZW50XG5jbGFzcyBCb2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IFxuICAgICAgYm9hcmQ6IGJvYXJkLCBcbiAgICAgIHR1cm46ICdyZWQnLFxuICAgICAgcmVzdWx0OiBudWxsXG4gICAgfTtcbiAgfVxuXG4gIHBsYWNlUGllY2UoKSB7XG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQhJyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIj5cbiAgICAgICAgR2FtZSBCb2FyZFxuICAgICAgICB7Ym9hcmQubWFwKChyb3cpID0+IHtcbiAgICAgICAgICByb3dOdW0gKz0gMTtcbiAgICAgICAgICByZXR1cm4gPFJvdyBwbGFjZVBpZWNlPXt0aGlzLnBsYWNlUGllY2V9IGtleT17cm93TnVtfSByb3c9e3Jvd051bX0vPlxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG4vLyBtYWtlIGEgUm93IENvbXBvbmVudFxuZnVuY3Rpb24gUm93KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICB7cm93Lm1hcCgoc3F1YXJlKSA9PiB7XG4gICAgICAgIGNvbE51bSsrO1xuICAgICAgICByZXR1cm4gPFNxdWFyZSBwbGFjZVBpZWNlPXtwcm9wcy5wbGFjZVBpZWNlfSBrZXk9e2NvbE51bX0geD17cHJvcHMucm93fSB5PXtjb2xOdW19Lz5cbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIG1ha2UgYSBzcXVhcmUgY29tcG9uZW50XG5mdW5jdGlvbiBTcXVhcmUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IG9uQ2xpY2s9e3Byb3BzLnBsYWNlUGllY2V9IGNsYXNzTmFtZT0nc3F1YXJlJz5cbiAgICAgIHtib2FyZFtwcm9wcy54XVtwcm9wcy55XX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEFwcCAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pO1xuXG5cblxuXG5cblxuXG5cblxuIl19