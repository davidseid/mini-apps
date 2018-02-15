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
      board[x][y] = this.state.turn;
      this.setState({ board: board });
      if (this.state.turn === 'red') {
        this.setState({ turn: 'black' });
      } else if (this.state.turn === 'black') {
        this.setState({ turn: 'red' });
      }
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
  return React.createElement('div', { onClick: function onClick() {
      props.placePiece(props.x, props.y);
    }, className: 'square', style: { background: board[props.x][props.y] } });
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiYm9hcmQiLCJyb3ciLCJzcXVhcmUiLCJqIiwicHVzaCIsImkiLCJzbGljZSIsIkFwcCIsIkJvYXJkIiwicHJvcHMiLCJzdGF0ZSIsInR1cm4iLCJyZXN1bHQiLCJ4IiwieSIsInNldFN0YXRlIiwibWFwIiwicm93SW5kZXgiLCJwbGFjZVBpZWNlIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUm93IiwiY29sSW5kZXgiLCJTcXVhcmUiLCJiYWNrZ3JvdW5kIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFJQTs7O0FBR0E7O0FBRUE7QUFDQSxJQUFJQSxRQUFRLEVBQVo7QUFDQSxJQUFJQyxNQUFNLEVBQVY7QUFDQSxJQUFJQyxTQUFTLEVBQWI7QUFDQSxLQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxDQUFwQixFQUF1QkEsR0FBdkIsRUFBNEI7QUFDMUJGLE1BQUlHLElBQUosQ0FBU0YsTUFBVDtBQUNEO0FBQ0QsS0FBSyxJQUFJRyxJQUFJLENBQWIsRUFBZ0JBLElBQUksQ0FBcEIsRUFBdUJBLEdBQXZCLEVBQTRCO0FBQzFCTCxRQUFNSSxJQUFOLENBQVdILElBQUlLLEtBQUosRUFBWDtBQUNEOztBQUtEO0FBQ0EsU0FBU0MsR0FBVCxHQUFlO0FBQ2IsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUVFLHdCQUFDLEtBQUQ7QUFGRixHQURGO0FBTUQ7O0FBSUQ7O0lBQ01DLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYVixhQUFPQSxLQURJO0FBRVhXLFlBQU0sS0FGSztBQUdYQyxjQUFRO0FBSEcsS0FBYjtBQUZpQjtBQU9sQjs7OzsrQkFFVUMsQyxFQUFHQyxDLEVBQUc7QUFDZmQsWUFBTWEsQ0FBTixFQUFTQyxDQUFULElBQWMsS0FBS0osS0FBTCxDQUFXQyxJQUF6QjtBQUNBLFdBQUtJLFFBQUwsQ0FBYyxFQUFDZixPQUFPQSxLQUFSLEVBQWQ7QUFDQSxVQUFJLEtBQUtVLEtBQUwsQ0FBV0MsSUFBWCxLQUFvQixLQUF4QixFQUErQjtBQUM3QixhQUFLSSxRQUFMLENBQWMsRUFBQ0osTUFBTSxPQUFQLEVBQWQ7QUFDRCxPQUZELE1BRU8sSUFBSSxLQUFLRCxLQUFMLENBQVdDLElBQVgsS0FBb0IsT0FBeEIsRUFBaUM7QUFDdEMsYUFBS0ksUUFBTCxDQUFjLEVBQUNKLE1BQU0sS0FBUCxFQUFkO0FBQ0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLE9BQWY7QUFBQTtBQUVHWCxjQUFNZ0IsR0FBTixDQUFVLFVBQUNmLEdBQUQsRUFBTWdCLFFBQU4sRUFBbUI7QUFDNUIsaUJBQU8sb0JBQUMsR0FBRCxJQUFLLFlBQVksT0FBS0MsVUFBTCxDQUFnQkMsSUFBaEIsUUFBakIsRUFBNkMsS0FBS0YsUUFBbEQsRUFBNEQsS0FBS2hCLEdBQWpFLEVBQXNFLFVBQVVnQixRQUFoRixHQUFQO0FBQ0QsU0FGQTtBQUZILE9BREY7QUFRRDs7OztFQW5DaUJHLE1BQU1DLFM7O0FBdUMxQjs7O0FBQ0EsU0FBU0MsR0FBVCxDQUFhYixLQUFiLEVBQW9CO0FBQ2xCLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSxLQUFmO0FBQ0dBLFVBQU1SLEdBQU4sQ0FBVWUsR0FBVixDQUFjLFVBQUNkLE1BQUQsRUFBU3FCLFFBQVQsRUFBc0I7QUFDbkMsYUFBTyxvQkFBQyxNQUFELElBQVEsWUFBWWQsTUFBTVMsVUFBMUIsRUFBc0MsS0FBS0ssUUFBM0MsRUFBcUQsR0FBR2QsTUFBTVEsUUFBOUQsRUFBd0UsR0FBR00sUUFBM0UsR0FBUDtBQUNELEtBRkE7QUFESCxHQURGO0FBT0Q7O0FBRUQ7QUFDQSxTQUFTQyxNQUFULENBQWdCZixLQUFoQixFQUF1QjtBQUNyQixTQUNFLDZCQUFLLFNBQVMsbUJBQU07QUFBQ0EsWUFBTVMsVUFBTixDQUFpQlQsTUFBTUksQ0FBdkIsRUFBMEJKLE1BQU1LLENBQWhDO0FBQW1DLEtBQXhELEVBQTBELFdBQVUsUUFBcEUsRUFBNkUsT0FBTyxFQUFDVyxZQUFZekIsTUFBTVMsTUFBTUksQ0FBWixFQUFlSixNQUFNSyxDQUFyQixDQUFiLEVBQXBGLEdBREY7QUFJRDs7QUFHRFksU0FBU0MsTUFBVCxDQUNFLG9CQUFDLEdBQUQsT0FERixFQUVFQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBRkYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYnVpbGQgVUkgd2l0aCByZWFjdGpzIGFuZCBwcmVjb21waWxlIHZpZXdzIHdpdGggYmFiZWxcbi8vIGFsbCBnYW1lIGxvZ2ljIHNob3VsZCBsaXZlIGluIHRoZSBjbGllbnQgY29kZVxuXG4vLyBhbGwgcmVhY3QgY29tcG9uZW50cyBjYW4gbGl2ZSBpbiB0aGlzIGZpbGVcblxuLy8gZGV0ZWN0IHdpbiBvciB0aWUgYW5kIGRpc3BsYXkgYXBwcm9wcmlhdGUgbWVzc2FnZVxuLy8gcGFnZSByZWZyZXNoIHJlc3RhcnRzIHRoZSBnYW1lXG5cbi8vIFdSSVRFIEZPVVIgVEVTVFMgZm9yIGVuZCBvZiBnYW1lIGxvZ2ljXG4vLyBjYW4gcnVuIHRlc3RzIGluIG5vZGUgb3IgYnJvd3NlclxuXG4vLyBtaW5pbWFsIGNzcyBzdHlsaW5nXG4vLyBoYXZlIGJhYmVsIHdhdGNoIGZvciBjaGFuZ2VzIGluIGFwcFxuLy8gdXNlIG5vZGVtb25cblxuXG5cbi8vIDEuIEFsbG93IHRoZSB1c2VyIHRvIGNsaWNrIG9uIGEgYm94IGFuZCBoYXZlIGl0IHR1cm4gcmVkXG5cblxuLy8qKioqIE1ZIE1PREVMICoqKiogLy9cblxuLy8gYm9hcmQgaW5pdGlhbGl6YXRpb25cbnZhciBib2FyZCA9IFtdO1xudmFyIHJvdyA9IFtdO1xudmFyIHNxdWFyZSA9ICcnO1xuZm9yICh2YXIgaiA9IDA7IGogPCA3OyBqKyspIHtcbiAgcm93LnB1c2goc3F1YXJlKTtcbn1cbmZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gIGJvYXJkLnB1c2gocm93LnNsaWNlKCkpO1xufVxuXG5cblxuXG4vLyBtYWtlIGFuIEFwcCBDb21wb25lbnRcbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgQ29ubmVjdCBGb3VyXG4gICAgICA8Qm9hcmQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG5cbi8vIG1ha2UgYSBCb2FyZCBDb21wb25lbnRcbmNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICBib2FyZDogYm9hcmQsXG4gICAgICB0dXJuOiAncmVkJyxcbiAgICAgIHJlc3VsdDogbnVsbFxuICAgIH07XG4gIH1cblxuICBwbGFjZVBpZWNlKHgsIHkpIHtcbiAgICBib2FyZFt4XVt5XSA9IHRoaXMuc3RhdGUudHVybjtcbiAgICB0aGlzLnNldFN0YXRlKHtib2FyZDogYm9hcmR9KTtcbiAgICBpZiAodGhpcy5zdGF0ZS50dXJuID09PSAncmVkJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dHVybjogJ2JsYWNrJ30pXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnR1cm4gPT09ICdibGFjaycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3R1cm46ICdyZWQnfSlcbiAgICB9XG4gICAgLy8gYm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkO1xuICAgIC8vIGJvYXJkW3hdW3ldID0gdGhpcy5zdGF0ZS50dXJuO1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoe2JvYXJkOiBib2FyZH0pO1xuICAgIC8vIHNldCB0aGUgdmFsdWUgb2YgdGhlIHNxdWFyZSB0byB0aGUgdHVyblxuICAgIC8vIGlmIHRoZSB0dXJuIGlzIHJlZCwgY2hhbmdlIHRvIGJsYWNrXG4gICAgLy8gaWYgdGhlIHR1cm4gaXMgYmxhY2ssIGNoYW5nZSB0byByZWRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZFwiPlxuICAgICAgICBHYW1lIEJvYXJkXG4gICAgICAgIHtib2FyZC5tYXAoKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gPFJvdyBwbGFjZVBpZWNlPXt0aGlzLnBsYWNlUGllY2UuYmluZCh0aGlzKX0ga2V5PXtyb3dJbmRleH0gcm93PXtyb3d9IHJvd0luZGV4PXtyb3dJbmRleH0vPlxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG4vLyBtYWtlIGEgUm93IENvbXBvbmVudFxuZnVuY3Rpb24gUm93KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICB7cHJvcHMucm93Lm1hcCgoc3F1YXJlLCBjb2xJbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gPFNxdWFyZSBwbGFjZVBpZWNlPXtwcm9wcy5wbGFjZVBpZWNlfSBrZXk9e2NvbEluZGV4fSB4PXtwcm9wcy5yb3dJbmRleH0geT17Y29sSW5kZXh9Lz5cbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIG1ha2UgYSBzcXVhcmUgY29tcG9uZW50XG5mdW5jdGlvbiBTcXVhcmUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHtwcm9wcy5wbGFjZVBpZWNlKHByb3BzLngsIHByb3BzLnkpfX0gY2xhc3NOYW1lPSdzcXVhcmUnIHN0eWxlPXt7YmFja2dyb3VuZDogYm9hcmRbcHJvcHMueF1bcHJvcHMueV19fT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEFwcCAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pO1xuXG5cblxuXG5cblxuXG5cblxuIl19