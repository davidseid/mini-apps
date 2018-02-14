'use strict';

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
function Board() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiYm9hcmQiLCJyb3ciLCJzcXVhcmUiLCJqIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJpIiwicm93TnVtIiwiY29sTnVtIiwiQXBwIiwiQm9hcmQiLCJtYXAiLCJSb3ciLCJwcm9wcyIsIlNxdWFyZSIsIngiLCJ5IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSUEsUUFBUSxFQUFaO0FBQ0EsSUFBSUMsTUFBTSxFQUFWO0FBQ0EsSUFBSUMsU0FBUyxFQUFiOztBQUVBLEtBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLENBQXBCLEVBQXVCQSxHQUF2QixFQUE0QjtBQUMxQkYsTUFBSUcsSUFBSixDQUFTRixNQUFUO0FBQ0Q7QUFDREcsUUFBUUMsR0FBUixDQUFZTCxHQUFaOztBQUVBLEtBQUssSUFBSU0sSUFBSSxDQUFiLEVBQWdCQSxJQUFJLENBQXBCLEVBQXVCQSxHQUF2QixFQUE0QjtBQUMxQlAsUUFBTUksSUFBTixDQUFXSCxHQUFYO0FBQ0Q7O0FBRUQsSUFBSU8sU0FBUyxDQUFDLENBQWQ7QUFDQSxJQUFJQyxTQUFTLENBQUMsQ0FBZDs7QUFLQTtBQUNBLFNBQVNDLEdBQVQsR0FBZTtBQUNiLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFFRSx3QkFBQyxLQUFEO0FBRkYsR0FERjtBQU1EOztBQUVEO0FBQ0EsU0FBU0MsS0FBVCxHQUFpQjtBQUNmLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSxPQUFmO0FBQUE7QUFFR1gsVUFBTVksR0FBTixDQUFVLFVBQUNYLEdBQUQsRUFBUztBQUNsQk8sZ0JBQVUsQ0FBVjtBQUNBLGFBQU8sb0JBQUMsR0FBRCxJQUFLLEtBQUtBLE1BQVYsRUFBa0IsS0FBS0EsTUFBdkIsR0FBUDtBQUNELEtBSEE7QUFGSCxHQURGO0FBU0Q7O0FBRUQ7QUFDQSxTQUFTSyxHQUFULENBQWFDLEtBQWIsRUFBb0I7QUFDbEIsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLEtBQWY7QUFDR2IsUUFBSVcsR0FBSixDQUFRLFVBQUNWLE1BQUQsRUFBWTtBQUNuQk87QUFDQSxhQUFPLG9CQUFDLE1BQUQsSUFBUSxLQUFLQSxNQUFiLEVBQXFCLEdBQUdLLE1BQU1iLEdBQTlCLEVBQW1DLEdBQUdRLE1BQXRDLEdBQVA7QUFDRCxLQUhBO0FBREgsR0FERjtBQVFEOztBQUVEO0FBQ0EsU0FBU00sTUFBVCxDQUFnQkQsS0FBaEIsRUFBdUI7QUFDckIsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLFFBQWY7QUFDR2QsVUFBTWMsTUFBTUUsQ0FBWixFQUFlRixNQUFNRyxDQUFyQjtBQURILEdBREY7QUFLRDs7QUFHREMsU0FBU0MsTUFBVCxDQUNFLG9CQUFDLEdBQUQsT0FERixFQUVFQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBRkYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYnVpbGQgVUkgd2l0aCByZWFjdGpzIGFuZCBwcmVjb21waWxlIHZpZXdzIHdpdGggYmFiZWxcbi8vIGFsbCBnYW1lIGxvZ2ljIHNob3VsZCBsaXZlIGluIHRoZSBjbGllbnQgY29kZVxuXG4vLyBhbGwgcmVhY3QgY29tcG9uZW50cyBjYW4gbGl2ZSBpbiB0aGlzIGZpbGVcblxuLy8gZGV0ZWN0IHdpbiBvciB0aWUgYW5kIGRpc3BsYXkgYXBwcm9wcmlhdGUgbWVzc2FnZVxuLy8gcGFnZSByZWZyZXNoIHJlc3RhcnRzIHRoZSBnYW1lXG5cbi8vIFdSSVRFIEZPVVIgVEVTVFMgZm9yIGVuZCBvZiBnYW1lIGxvZ2ljXG4vLyBjYW4gcnVuIHRlc3RzIGluIG5vZGUgb3IgYnJvd3NlclxuXG4vLyBtaW5pbWFsIGNzcyBzdHlsaW5nXG4vLyBoYXZlIGJhYmVsIHdhdGNoIGZvciBjaGFuZ2VzIGluIGFwcFxuLy8gdXNlIG5vZGVtb25cblxuLy8gR2l2ZSBlYWNoIHJvdyBhIGNsYXNzIHRoYXQgY29ycmVzcG9uZHMgdG8gaXRzIHJvd1xuLy8gR2l2ZSBlYWNoIHNxdWFyZSBhIGNsYXNzIHRoYXQgY29ycmVzcG9uZHMgdG8gaXRzIHJvdyBhbmQgY29sdW1uXG5cbi8vKioqKiBNWSBNT0RFTCAqKioqIC8vXG5cbi8vIGJvYXJkIHNldHVwXG52YXIgYm9hcmQgPSBbXTtcbnZhciByb3cgPSBbXTtcbnZhciBzcXVhcmUgPSBbXTtcblxuZm9yICh2YXIgaiA9IDA7IGogPCA3OyBqKyspIHtcbiAgcm93LnB1c2goc3F1YXJlKTtcbn1cbmNvbnNvbGUubG9nKHJvdyk7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gIGJvYXJkLnB1c2gocm93KTtcbn1cblxudmFyIHJvd051bSA9IC0xO1xudmFyIGNvbE51bSA9IC0xO1xuXG5cblxuXG4vLyBtYWtlIGFuIEFwcCBDb21wb25lbnRcbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgTXkgQXBwXG4gICAgICA8Qm9hcmQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gbWFrZSBhIEJvYXJkIENvbXBvbmVudFxuZnVuY3Rpb24gQm9hcmQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZFwiPlxuICAgICAgR2FtZSBCb2FyZFxuICAgICAge2JvYXJkLm1hcCgocm93KSA9PiB7XG4gICAgICAgIHJvd051bSArPSAxO1xuICAgICAgICByZXR1cm4gPFJvdyBrZXk9e3Jvd051bX0gcm93PXtyb3dOdW19Lz5cbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBtYWtlIGEgUm93IENvbXBvbmVudFxuZnVuY3Rpb24gUm93KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICB7cm93Lm1hcCgoc3F1YXJlKSA9PiB7XG4gICAgICAgIGNvbE51bSsrO1xuICAgICAgICByZXR1cm4gPFNxdWFyZSBrZXk9e2NvbE51bX0geD17cHJvcHMucm93fSB5PXtjb2xOdW19Lz5cbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIG1ha2UgYSBzcXVhcmUgY29tcG9uZW50XG5mdW5jdGlvbiBTcXVhcmUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nc3F1YXJlJz5cbiAgICAgIHtib2FyZFtwcm9wcy54XVtwcm9wcy55XX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEFwcCAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pO1xuXG5cblxuXG5cblxuXG5cblxuIl19