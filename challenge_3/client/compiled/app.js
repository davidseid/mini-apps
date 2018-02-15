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
      result: null
    };
    return _this;
  }

  _createClass(Board, [{
    key: 'placePiece',
    value: function placePiece(x, y) {
      console.log(x, y);
      console.log(board);
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
    { onClick: function onClick() {
        props.placePiece(props.x, props.y);
      }, className: 'square' },
    board[props.x][props.y]
  );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiYm9hcmQiLCJyb3ciLCJzcXVhcmUiLCJqIiwicHVzaCIsImkiLCJzbGljZSIsIkFwcCIsIkJvYXJkIiwicHJvcHMiLCJzdGF0ZSIsInR1cm4iLCJyZXN1bHQiLCJ4IiwieSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIm1hcCIsInJvd0luZGV4IiwicGxhY2VQaWVjZSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJvdyIsImNvbEluZGV4IiwiU3F1YXJlIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFJQTs7O0FBR0E7O0FBRUE7QUFDQSxJQUFJQSxRQUFRLEVBQVo7QUFDQSxJQUFJQyxNQUFNLEVBQVY7QUFDQSxJQUFJQyxTQUFTLEVBQWI7QUFDQSxLQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxDQUFwQixFQUF1QkEsR0FBdkIsRUFBNEI7QUFDMUJGLE1BQUlHLElBQUosQ0FBU0YsTUFBVDtBQUNEO0FBQ0QsS0FBSyxJQUFJRyxJQUFJLENBQWIsRUFBZ0JBLElBQUksQ0FBcEIsRUFBdUJBLEdBQXZCLEVBQTRCO0FBQzFCTCxRQUFNSSxJQUFOLENBQVdILElBQUlLLEtBQUosRUFBWDtBQUNEOztBQUtEO0FBQ0EsU0FBU0MsR0FBVCxHQUFlO0FBQ2IsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUVFLHdCQUFDLEtBQUQ7QUFGRixHQURGO0FBTUQ7O0FBSUQ7O0lBQ01DLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYVixhQUFPQSxLQURJO0FBRVhXLFlBQU0sS0FGSztBQUdYQyxjQUFRO0FBSEcsS0FBYjtBQUZpQjtBQU9sQjs7OzsrQkFFVUMsQyxFQUFHQyxDLEVBQUc7QUFDZkMsY0FBUUMsR0FBUixDQUFZSCxDQUFaLEVBQWVDLENBQWY7QUFDQUMsY0FBUUMsR0FBUixDQUFZaEIsS0FBWjtBQUNBQSxZQUFNYSxDQUFOLEVBQVNDLENBQVQsSUFBYyxLQUFLSixLQUFMLENBQVdDLElBQXpCO0FBQ0EsV0FBS00sUUFBTCxDQUFjLEVBQUNqQixPQUFPQSxLQUFSLEVBQWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLE9BQWY7QUFBQTtBQUVHQSxjQUFNa0IsR0FBTixDQUFVLFVBQUNqQixHQUFELEVBQU1rQixRQUFOLEVBQW1CO0FBQzVCLGlCQUFPLG9CQUFDLEdBQUQsSUFBSyxZQUFZLE9BQUtDLFVBQUwsQ0FBZ0JDLElBQWhCLFFBQWpCLEVBQTZDLEtBQUtGLFFBQWxELEVBQTRELEtBQUtsQixHQUFqRSxFQUFzRSxVQUFVa0IsUUFBaEYsR0FBUDtBQUNELFNBRkE7QUFGSCxPQURGO0FBUUQ7Ozs7RUFoQ2lCRyxNQUFNQyxTOztBQW9DMUI7OztBQUNBLFNBQVNDLEdBQVQsQ0FBYWYsS0FBYixFQUFvQjtBQUNsQixTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsS0FBZjtBQUNHQSxVQUFNUixHQUFOLENBQVVpQixHQUFWLENBQWMsVUFBQ2hCLE1BQUQsRUFBU3VCLFFBQVQsRUFBc0I7QUFDbkMsYUFBTyxvQkFBQyxNQUFELElBQVEsWUFBWWhCLE1BQU1XLFVBQTFCLEVBQXNDLEtBQUtLLFFBQTNDLEVBQXFELEdBQUdoQixNQUFNVSxRQUE5RCxFQUF3RSxHQUFHTSxRQUEzRSxHQUFQO0FBQ0QsS0FGQTtBQURILEdBREY7QUFPRDs7QUFFRDtBQUNBLFNBQVNDLE1BQVQsQ0FBZ0JqQixLQUFoQixFQUF1QjtBQUNyQixTQUNFO0FBQUE7QUFBQSxNQUFLLFNBQVMsbUJBQU07QUFBQ0EsY0FBTVcsVUFBTixDQUFpQlgsTUFBTUksQ0FBdkIsRUFBMEJKLE1BQU1LLENBQWhDO0FBQW1DLE9BQXhELEVBQTBELFdBQVUsUUFBcEU7QUFDR2QsVUFBTVMsTUFBTUksQ0FBWixFQUFlSixNQUFNSyxDQUFyQjtBQURILEdBREY7QUFLRDs7QUFHRGEsU0FBU0MsTUFBVCxDQUNFLG9CQUFDLEdBQUQsT0FERixFQUVFQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBRkYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYnVpbGQgVUkgd2l0aCByZWFjdGpzIGFuZCBwcmVjb21waWxlIHZpZXdzIHdpdGggYmFiZWxcbi8vIGFsbCBnYW1lIGxvZ2ljIHNob3VsZCBsaXZlIGluIHRoZSBjbGllbnQgY29kZVxuXG4vLyBhbGwgcmVhY3QgY29tcG9uZW50cyBjYW4gbGl2ZSBpbiB0aGlzIGZpbGVcblxuLy8gZGV0ZWN0IHdpbiBvciB0aWUgYW5kIGRpc3BsYXkgYXBwcm9wcmlhdGUgbWVzc2FnZVxuLy8gcGFnZSByZWZyZXNoIHJlc3RhcnRzIHRoZSBnYW1lXG5cbi8vIFdSSVRFIEZPVVIgVEVTVFMgZm9yIGVuZCBvZiBnYW1lIGxvZ2ljXG4vLyBjYW4gcnVuIHRlc3RzIGluIG5vZGUgb3IgYnJvd3NlclxuXG4vLyBtaW5pbWFsIGNzcyBzdHlsaW5nXG4vLyBoYXZlIGJhYmVsIHdhdGNoIGZvciBjaGFuZ2VzIGluIGFwcFxuLy8gdXNlIG5vZGVtb25cblxuXG5cbi8vIDEuIEFsbG93IHRoZSB1c2VyIHRvIGNsaWNrIG9uIGEgYm94IGFuZCBoYXZlIGl0IHR1cm4gcmVkXG5cblxuLy8qKioqIE1ZIE1PREVMICoqKiogLy9cblxuLy8gYm9hcmQgaW5pdGlhbGl6YXRpb25cbnZhciBib2FyZCA9IFtdO1xudmFyIHJvdyA9IFtdO1xudmFyIHNxdWFyZSA9ICcnO1xuZm9yICh2YXIgaiA9IDA7IGogPCA3OyBqKyspIHtcbiAgcm93LnB1c2goc3F1YXJlKTtcbn1cbmZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gIGJvYXJkLnB1c2gocm93LnNsaWNlKCkpO1xufVxuXG5cblxuXG4vLyBtYWtlIGFuIEFwcCBDb21wb25lbnRcbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgQ29ubmVjdCBGb3VyXG4gICAgICA8Qm9hcmQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG5cbi8vIG1ha2UgYSBCb2FyZCBDb21wb25lbnRcbmNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICBib2FyZDogYm9hcmQsXG4gICAgICB0dXJuOiAncmVkJyxcbiAgICAgIHJlc3VsdDogbnVsbFxuICAgIH07XG4gIH1cblxuICBwbGFjZVBpZWNlKHgsIHkpIHtcbiAgICBjb25zb2xlLmxvZyh4LCB5KVxuICAgIGNvbnNvbGUubG9nKGJvYXJkKVxuICAgIGJvYXJkW3hdW3ldID0gdGhpcy5zdGF0ZS50dXJuO1xuICAgIHRoaXMuc2V0U3RhdGUoe2JvYXJkOiBib2FyZH0pO1xuICAgIC8vIGJvYXJkID0gdGhpcy5zdGF0ZS5ib2FyZDtcbiAgICAvLyBib2FyZFt4XVt5XSA9IHRoaXMuc3RhdGUudHVybjtcbiAgICAvLyB0aGlzLnNldFN0YXRlKHtib2FyZDogYm9hcmR9KTtcbiAgICAvLyBzZXQgdGhlIHZhbHVlIG9mIHRoZSBzcXVhcmUgdG8gdGhlIHR1cm5cbiAgICAvLyBpZiB0aGUgdHVybiBpcyByZWQsIGNoYW5nZSB0byBibGFja1xuICAgIC8vIGlmIHRoZSB0dXJuIGlzIGJsYWNrLCBjaGFuZ2UgdG8gcmVkXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIj5cbiAgICAgICAgR2FtZSBCb2FyZFxuICAgICAgICB7Ym9hcmQubWFwKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxSb3cgcGxhY2VQaWVjZT17dGhpcy5wbGFjZVBpZWNlLmJpbmQodGhpcyl9IGtleT17cm93SW5kZXh9IHJvdz17cm93fSByb3dJbmRleD17cm93SW5kZXh9Lz5cbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuLy8gbWFrZSBhIFJvdyBDb21wb25lbnRcbmZ1bmN0aW9uIFJvdyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAge3Byb3BzLnJvdy5tYXAoKHNxdWFyZSwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIDxTcXVhcmUgcGxhY2VQaWVjZT17cHJvcHMucGxhY2VQaWVjZX0ga2V5PXtjb2xJbmRleH0geD17cHJvcHMucm93SW5kZXh9IHk9e2NvbEluZGV4fS8+XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBtYWtlIGEgc3F1YXJlIGNvbXBvbmVudFxuZnVuY3Rpb24gU3F1YXJlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7cHJvcHMucGxhY2VQaWVjZShwcm9wcy54LCBwcm9wcy55KX19IGNsYXNzTmFtZT0nc3F1YXJlJz5cbiAgICAgIHtib2FyZFtwcm9wcy54XVtwcm9wcy55XX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEFwcCAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pO1xuXG5cblxuXG5cblxuXG5cblxuIl19