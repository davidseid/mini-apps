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

// Give each row a class that corresponds to its row
// Give each square a class that corresponds to its row and column

//**** MY MODEL **** //

// board setup
var board = [];
var row = [];
var square = [];

for (var j = 0; j < 7; j++) {
  row.push(square);
}
console.log(row);

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
    'My App',
    React.createElement(Board, null)
  );
}

// make a Board Component

var Board = function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board(props) {
    _classCallCheck(this, Board);

    var _this = _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));

    _this.state = { board: board };
    return _this;
  }

  _createClass(Board, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'board' },
        'Game Board',
        board.map(function (row) {
          rowNum += 1;
          return React.createElement(Row, { key: rowNum, row: rowNum });
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
      return React.createElement(Square, { key: colNum, x: props.row, y: colNum });
    })
  );
}

// make a square component
function Square(props) {
  return React.createElement(
    'div',
    { className: 'square' },
    board[props.x][props.y]
  );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiYm9hcmQiLCJyb3ciLCJzcXVhcmUiLCJqIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJpIiwicm93TnVtIiwiY29sTnVtIiwiQXBwIiwiQm9hcmQiLCJwcm9wcyIsInN0YXRlIiwibWFwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSb3ciLCJTcXVhcmUiLCJ4IiwieSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSUEsUUFBUSxFQUFaO0FBQ0EsSUFBSUMsTUFBTSxFQUFWO0FBQ0EsSUFBSUMsU0FBUyxFQUFiOztBQUVBLEtBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLENBQXBCLEVBQXVCQSxHQUF2QixFQUE0QjtBQUMxQkYsTUFBSUcsSUFBSixDQUFTRixNQUFUO0FBQ0Q7QUFDREcsUUFBUUMsR0FBUixDQUFZTCxHQUFaOztBQUVBLEtBQUssSUFBSU0sSUFBSSxDQUFiLEVBQWdCQSxJQUFJLENBQXBCLEVBQXVCQSxHQUF2QixFQUE0QjtBQUMxQlAsUUFBTUksSUFBTixDQUFXSCxHQUFYO0FBQ0Q7O0FBRUQsSUFBSU8sU0FBUyxDQUFDLENBQWQ7QUFDQSxJQUFJQyxTQUFTLENBQUMsQ0FBZDs7QUFLQTtBQUNBLFNBQVNDLEdBQVQsR0FBZTtBQUNiLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFFRSx3QkFBQyxLQUFEO0FBRkYsR0FERjtBQU1EOztBQUVEOztJQUNNQyxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsRUFBRWIsT0FBT0EsS0FBVCxFQUFiO0FBRmlCO0FBR2xCOzs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLE9BQWY7QUFBQTtBQUVHQSxjQUFNYyxHQUFOLENBQVUsVUFBQ2IsR0FBRCxFQUFTO0FBQ2xCTyxvQkFBVSxDQUFWO0FBQ0EsaUJBQU8sb0JBQUMsR0FBRCxJQUFLLEtBQUtBLE1BQVYsRUFBa0IsS0FBS0EsTUFBdkIsR0FBUDtBQUNELFNBSEE7QUFGSCxPQURGO0FBU0Q7Ozs7RUFoQmlCTyxNQUFNQyxTOztBQW1CMUI7OztBQUNBLFNBQVNDLEdBQVQsQ0FBYUwsS0FBYixFQUFvQjtBQUNsQixTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsS0FBZjtBQUNHWCxRQUFJYSxHQUFKLENBQVEsVUFBQ1osTUFBRCxFQUFZO0FBQ25CTztBQUNBLGFBQU8sb0JBQUMsTUFBRCxJQUFRLEtBQUtBLE1BQWIsRUFBcUIsR0FBR0csTUFBTVgsR0FBOUIsRUFBbUMsR0FBR1EsTUFBdEMsR0FBUDtBQUNELEtBSEE7QUFESCxHQURGO0FBUUQ7O0FBRUQ7QUFDQSxTQUFTUyxNQUFULENBQWdCTixLQUFoQixFQUF1QjtBQUNyQixTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsUUFBZjtBQUNHWixVQUFNWSxNQUFNTyxDQUFaLEVBQWVQLE1BQU1RLENBQXJCO0FBREgsR0FERjtBQUtEOztBQUdEQyxTQUFTQyxNQUFULENBQ0Usb0JBQUMsR0FBRCxPQURGLEVBRUVDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FGRiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBidWlsZCBVSSB3aXRoIHJlYWN0anMgYW5kIHByZWNvbXBpbGUgdmlld3Mgd2l0aCBiYWJlbFxuLy8gYWxsIGdhbWUgbG9naWMgc2hvdWxkIGxpdmUgaW4gdGhlIGNsaWVudCBjb2RlXG5cbi8vIGFsbCByZWFjdCBjb21wb25lbnRzIGNhbiBsaXZlIGluIHRoaXMgZmlsZVxuXG4vLyBkZXRlY3Qgd2luIG9yIHRpZSBhbmQgZGlzcGxheSBhcHByb3ByaWF0ZSBtZXNzYWdlXG4vLyBwYWdlIHJlZnJlc2ggcmVzdGFydHMgdGhlIGdhbWVcblxuLy8gV1JJVEUgRk9VUiBURVNUUyBmb3IgZW5kIG9mIGdhbWUgbG9naWNcbi8vIGNhbiBydW4gdGVzdHMgaW4gbm9kZSBvciBicm93c2VyXG5cbi8vIG1pbmltYWwgY3NzIHN0eWxpbmdcbi8vIGhhdmUgYmFiZWwgd2F0Y2ggZm9yIGNoYW5nZXMgaW4gYXBwXG4vLyB1c2Ugbm9kZW1vblxuXG4vLyBHaXZlIGVhY2ggcm93IGEgY2xhc3MgdGhhdCBjb3JyZXNwb25kcyB0byBpdHMgcm93XG4vLyBHaXZlIGVhY2ggc3F1YXJlIGEgY2xhc3MgdGhhdCBjb3JyZXNwb25kcyB0byBpdHMgcm93IGFuZCBjb2x1bW5cblxuLy8qKioqIE1ZIE1PREVMICoqKiogLy9cblxuLy8gYm9hcmQgc2V0dXBcbnZhciBib2FyZCA9IFtdO1xudmFyIHJvdyA9IFtdO1xudmFyIHNxdWFyZSA9IFtdO1xuXG5mb3IgKHZhciBqID0gMDsgaiA8IDc7IGorKykge1xuICByb3cucHVzaChzcXVhcmUpO1xufVxuY29uc29sZS5sb2cocm93KTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgYm9hcmQucHVzaChyb3cpO1xufVxuXG52YXIgcm93TnVtID0gLTE7XG52YXIgY29sTnVtID0gLTE7XG5cblxuXG5cbi8vIG1ha2UgYW4gQXBwIENvbXBvbmVudFxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBNeSBBcHBcbiAgICAgIDxCb2FyZCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBtYWtlIGEgQm9hcmQgQ29tcG9uZW50XG5jbGFzcyBCb2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGJvYXJkOiBib2FyZCB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkXCI+XG4gICAgICAgIEdhbWUgQm9hcmRcbiAgICAgICAge2JvYXJkLm1hcCgocm93KSA9PiB7XG4gICAgICAgICAgcm93TnVtICs9IDE7XG4gICAgICAgICAgcmV0dXJuIDxSb3cga2V5PXtyb3dOdW19IHJvdz17cm93TnVtfS8+XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBtYWtlIGEgUm93IENvbXBvbmVudFxuZnVuY3Rpb24gUm93KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICB7cm93Lm1hcCgoc3F1YXJlKSA9PiB7XG4gICAgICAgIGNvbE51bSsrO1xuICAgICAgICByZXR1cm4gPFNxdWFyZSBrZXk9e2NvbE51bX0geD17cHJvcHMucm93fSB5PXtjb2xOdW19Lz5cbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIG1ha2UgYSBzcXVhcmUgY29tcG9uZW50XG5mdW5jdGlvbiBTcXVhcmUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nc3F1YXJlJz5cbiAgICAgIHtib2FyZFtwcm9wcy54XVtwcm9wcy55XX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEFwcCAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pO1xuXG5cblxuXG5cblxuXG5cblxuIl19