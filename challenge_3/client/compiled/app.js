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
    value: function placePiece(x, y) {
      console.log(x, y);
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
        board.map(function (row) {
          rowNum += 1;
          return React.createElement(Row, { placePiece: _this2.placePiece.bind(_this2), key: rowNum, row: rowNum });
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
      colNum = colNum % 7;
      return React.createElement(Square, { placePiece: props.placePiece, key: colNum, x: props.row, y: colNum });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiYm9hcmQiLCJyb3ciLCJzcXVhcmUiLCJqIiwicHVzaCIsImkiLCJyb3dOdW0iLCJjb2xOdW0iLCJBcHAiLCJCb2FyZCIsInByb3BzIiwic3RhdGUiLCJ0dXJuIiwicmVzdWx0IiwieCIsInkiLCJjb25zb2xlIiwibG9nIiwibWFwIiwicGxhY2VQaWVjZSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJvdyIsIlNxdWFyZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBSUE7OztBQUdBOztBQUVBO0FBQ0EsSUFBSUEsUUFBUSxFQUFaO0FBQ0EsSUFBSUMsTUFBTSxFQUFWO0FBQ0EsSUFBSUMsU0FBUyxFQUFiO0FBQ0EsS0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksQ0FBcEIsRUFBdUJBLEdBQXZCLEVBQTRCO0FBQzFCRixNQUFJRyxJQUFKLENBQVNGLE1BQVQ7QUFDRDtBQUNELEtBQUssSUFBSUcsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLENBQXBCLEVBQXVCQSxHQUF2QixFQUE0QjtBQUMxQkwsUUFBTUksSUFBTixDQUFXSCxHQUFYO0FBQ0Q7QUFDRCxJQUFJSyxTQUFTLENBQUMsQ0FBZDtBQUNBLElBQUlDLFNBQVMsQ0FBQyxDQUFkOztBQUdBO0FBQ0EsU0FBU0MsR0FBVCxHQUFlO0FBQ2IsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUVFLHdCQUFDLEtBQUQ7QUFGRixHQURGO0FBTUQ7O0FBSUQ7O0lBQ01DLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYWCxhQUFPQSxLQURJO0FBRVhZLFlBQU0sS0FGSztBQUdYQyxjQUFRO0FBSEcsS0FBYjtBQUZpQjtBQU9sQjs7OzsrQkFFVUMsQyxFQUFHQyxDLEVBQUc7QUFDZkMsY0FBUUMsR0FBUixDQUFZSCxDQUFaLEVBQWVDLENBQWY7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLE9BQWY7QUFBQTtBQUVHZixjQUFNa0IsR0FBTixDQUFVLFVBQUNqQixHQUFELEVBQVM7QUFDbEJLLG9CQUFVLENBQVY7QUFDQSxpQkFBTyxvQkFBQyxHQUFELElBQUssWUFBWSxPQUFLYSxVQUFMLENBQWdCQyxJQUFoQixRQUFqQixFQUE2QyxLQUFLZCxNQUFsRCxFQUEwRCxLQUFLQSxNQUEvRCxHQUFQO0FBQ0QsU0FIQTtBQUZILE9BREY7QUFTRDs7OztFQTNCaUJlLE1BQU1DLFM7O0FBK0IxQjs7O0FBQ0EsU0FBU0MsR0FBVCxDQUFhYixLQUFiLEVBQW9CO0FBQ2xCLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSxLQUFmO0FBQ0dULFFBQUlpQixHQUFKLENBQVEsVUFBQ2hCLE1BQUQsRUFBWTtBQUNuQks7QUFDQUEsZUFBU0EsU0FBUyxDQUFsQjtBQUNBLGFBQU8sb0JBQUMsTUFBRCxJQUFRLFlBQVlHLE1BQU1TLFVBQTFCLEVBQXNDLEtBQUtaLE1BQTNDLEVBQW1ELEdBQUdHLE1BQU1ULEdBQTVELEVBQWlFLEdBQUdNLE1BQXBFLEdBQVA7QUFDRCxLQUpBO0FBREgsR0FERjtBQVNEOztBQUVEO0FBQ0EsU0FBU2lCLE1BQVQsQ0FBZ0JkLEtBQWhCLEVBQXVCO0FBQ3JCLFNBQ0U7QUFBQTtBQUFBLE1BQUssU0FBUyxtQkFBTTtBQUFDQSxjQUFNUyxVQUFOLENBQWlCVCxNQUFNSSxDQUF2QixFQUEwQkosTUFBTUssQ0FBaEM7QUFBbUMsT0FBeEQsRUFBMEQsV0FBVSxRQUFwRTtBQUNHZixVQUFNVSxNQUFNSSxDQUFaLEVBQWVKLE1BQU1LLENBQXJCO0FBREgsR0FERjtBQUtEOztBQUdEVSxTQUFTQyxNQUFULENBQ0Usb0JBQUMsR0FBRCxPQURGLEVBRUVDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FGRiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBidWlsZCBVSSB3aXRoIHJlYWN0anMgYW5kIHByZWNvbXBpbGUgdmlld3Mgd2l0aCBiYWJlbFxuLy8gYWxsIGdhbWUgbG9naWMgc2hvdWxkIGxpdmUgaW4gdGhlIGNsaWVudCBjb2RlXG5cbi8vIGFsbCByZWFjdCBjb21wb25lbnRzIGNhbiBsaXZlIGluIHRoaXMgZmlsZVxuXG4vLyBkZXRlY3Qgd2luIG9yIHRpZSBhbmQgZGlzcGxheSBhcHByb3ByaWF0ZSBtZXNzYWdlXG4vLyBwYWdlIHJlZnJlc2ggcmVzdGFydHMgdGhlIGdhbWVcblxuLy8gV1JJVEUgRk9VUiBURVNUUyBmb3IgZW5kIG9mIGdhbWUgbG9naWNcbi8vIGNhbiBydW4gdGVzdHMgaW4gbm9kZSBvciBicm93c2VyXG5cbi8vIG1pbmltYWwgY3NzIHN0eWxpbmdcbi8vIGhhdmUgYmFiZWwgd2F0Y2ggZm9yIGNoYW5nZXMgaW4gYXBwXG4vLyB1c2Ugbm9kZW1vblxuXG5cblxuLy8gMS4gQWxsb3cgdGhlIHVzZXIgdG8gY2xpY2sgb24gYSBib3ggYW5kIGhhdmUgaXQgdHVybiByZWRcblxuXG4vLyoqKiogTVkgTU9ERUwgKioqKiAvL1xuXG4vLyBib2FyZCBpbml0aWFsaXphdGlvblxudmFyIGJvYXJkID0gW107XG52YXIgcm93ID0gW107XG52YXIgc3F1YXJlID0gW107XG5mb3IgKHZhciBqID0gMDsgaiA8IDc7IGorKykge1xuICByb3cucHVzaChzcXVhcmUpO1xufVxuZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgYm9hcmQucHVzaChyb3cpO1xufVxudmFyIHJvd051bSA9IC0xO1xudmFyIGNvbE51bSA9IC0xO1xuXG5cbi8vIG1ha2UgYW4gQXBwIENvbXBvbmVudFxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBDb25uZWN0IEZvdXJcbiAgICAgIDxCb2FyZCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cblxuLy8gbWFrZSBhIEJvYXJkIENvbXBvbmVudFxuY2xhc3MgQm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIGJvYXJkOiBib2FyZCwgXG4gICAgICB0dXJuOiAncmVkJyxcbiAgICAgIHJlc3VsdDogbnVsbFxuICAgIH07XG4gIH1cblxuICBwbGFjZVBpZWNlKHgsIHkpIHtcbiAgICBjb25zb2xlLmxvZyh4LCB5KVxuICAgIC8vIHNldCB0aGUgdmFsdWUgb2YgdGhlIHNxdWFyZSB0byB0aGUgdHVyblxuICAgIC8vIGlmIHRoZSB0dXJuIGlzIHJlZCwgY2hhbmdlIHRvIGJsYWNrXG4gICAgLy8gaWYgdGhlIHR1cm4gaXMgYmxhY2ssIGNoYW5nZSB0byByZWRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZFwiPlxuICAgICAgICBHYW1lIEJvYXJkXG4gICAgICAgIHtib2FyZC5tYXAoKHJvdykgPT4ge1xuICAgICAgICAgIHJvd051bSArPSAxO1xuICAgICAgICAgIHJldHVybiA8Um93IHBsYWNlUGllY2U9e3RoaXMucGxhY2VQaWVjZS5iaW5kKHRoaXMpfSBrZXk9e3Jvd051bX0gcm93PXtyb3dOdW19Lz5cbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuLy8gbWFrZSBhIFJvdyBDb21wb25lbnRcbmZ1bmN0aW9uIFJvdyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAge3Jvdy5tYXAoKHNxdWFyZSkgPT4ge1xuICAgICAgICBjb2xOdW0rKztcbiAgICAgICAgY29sTnVtID0gY29sTnVtICUgNztcbiAgICAgICAgcmV0dXJuIDxTcXVhcmUgcGxhY2VQaWVjZT17cHJvcHMucGxhY2VQaWVjZX0ga2V5PXtjb2xOdW19IHg9e3Byb3BzLnJvd30geT17Y29sTnVtfS8+XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBtYWtlIGEgc3F1YXJlIGNvbXBvbmVudFxuZnVuY3Rpb24gU3F1YXJlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7cHJvcHMucGxhY2VQaWVjZShwcm9wcy54LCBwcm9wcy55KX19IGNsYXNzTmFtZT0nc3F1YXJlJz5cbiAgICAgIHtib2FyZFtwcm9wcy54XVtwcm9wcy55XX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEFwcCAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pO1xuXG5cblxuXG5cblxuXG5cblxuIl19