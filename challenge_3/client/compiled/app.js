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
      return React.createElement(Row, { row: rowNum });
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
      return React.createElement(Square, { x: props.row, y: colNum });
    })
  );
}

// make a square component
function Square(props) {
  return React.createElement('div', { className: 'square' });
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiYm9hcmQiLCJyb3ciLCJzcXVhcmUiLCJqIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJpIiwicm93TnVtIiwiY29sTnVtIiwiQXBwIiwiQm9hcmQiLCJtYXAiLCJSb3ciLCJwcm9wcyIsIlNxdWFyZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUlBLFFBQVEsRUFBWjtBQUNBLElBQUlDLE1BQU0sRUFBVjtBQUNBLElBQUlDLFNBQVMsRUFBYjs7QUFFQSxLQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxDQUFwQixFQUF1QkEsR0FBdkIsRUFBNEI7QUFDMUJGLE1BQUlHLElBQUosQ0FBU0YsTUFBVDtBQUNEO0FBQ0RHLFFBQVFDLEdBQVIsQ0FBWUwsR0FBWjs7QUFFQSxLQUFLLElBQUlNLElBQUksQ0FBYixFQUFnQkEsSUFBSSxDQUFwQixFQUF1QkEsR0FBdkIsRUFBNEI7QUFDMUJQLFFBQU1JLElBQU4sQ0FBV0gsR0FBWDtBQUNEOztBQUVELElBQUlPLFNBQVMsQ0FBQyxDQUFkO0FBQ0EsSUFBSUMsU0FBUyxDQUFDLENBQWQ7O0FBR0E7QUFDQSxTQUFTQyxHQUFULEdBQWU7QUFDYixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBRUUsd0JBQUMsS0FBRDtBQUZGLEdBREY7QUFNRDs7QUFFRDtBQUNBLFNBQVNDLEtBQVQsR0FBaUI7QUFDZixTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsT0FBZjtBQUFBO0FBRUdYLFVBQU1ZLEdBQU4sQ0FBVSxVQUFDWCxHQUFELEVBQVM7QUFDbEJPLGdCQUFVLENBQVY7QUFDQSxhQUFPLG9CQUFDLEdBQUQsSUFBSyxLQUFLQSxNQUFWLEdBQVA7QUFDRCxLQUhBO0FBRkgsR0FERjtBQVNEOztBQUVEO0FBQ0EsU0FBU0ssR0FBVCxDQUFhQyxLQUFiLEVBQW9CO0FBQ2xCLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSxLQUFmO0FBQ0diLFFBQUlXLEdBQUosQ0FBUSxVQUFDVixNQUFELEVBQVk7QUFDbkJPO0FBQ0EsYUFBTyxvQkFBQyxNQUFELElBQVEsR0FBR0ssTUFBTWIsR0FBakIsRUFBc0IsR0FBR1EsTUFBekIsR0FBUDtBQUNELEtBSEE7QUFESCxHQURGO0FBUUQ7O0FBRUQ7QUFDQSxTQUFTTSxNQUFULENBQWdCRCxLQUFoQixFQUF1QjtBQUNyQixTQUNFLDZCQUFLLFdBQVUsUUFBZixHQURGO0FBSUQ7O0FBR0RFLFNBQVNDLE1BQVQsQ0FDRSxvQkFBQyxHQUFELE9BREYsRUFFRUMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUZGIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGJ1aWxkIFVJIHdpdGggcmVhY3RqcyBhbmQgcHJlY29tcGlsZSB2aWV3cyB3aXRoIGJhYmVsXG4vLyBhbGwgZ2FtZSBsb2dpYyBzaG91bGQgbGl2ZSBpbiB0aGUgY2xpZW50IGNvZGVcblxuLy8gYWxsIHJlYWN0IGNvbXBvbmVudHMgY2FuIGxpdmUgaW4gdGhpcyBmaWxlXG5cbi8vIGRldGVjdCB3aW4gb3IgdGllIGFuZCBkaXNwbGF5IGFwcHJvcHJpYXRlIG1lc3NhZ2Vcbi8vIHBhZ2UgcmVmcmVzaCByZXN0YXJ0cyB0aGUgZ2FtZVxuXG4vLyBXUklURSBGT1VSIFRFU1RTIGZvciBlbmQgb2YgZ2FtZSBsb2dpY1xuLy8gY2FuIHJ1biB0ZXN0cyBpbiBub2RlIG9yIGJyb3dzZXJcblxuLy8gbWluaW1hbCBjc3Mgc3R5bGluZ1xuLy8gaGF2ZSBiYWJlbCB3YXRjaCBmb3IgY2hhbmdlcyBpbiBhcHBcbi8vIHVzZSBub2RlbW9uXG5cbi8vIEdpdmUgZWFjaCByb3cgYSBjbGFzcyB0aGF0IGNvcnJlc3BvbmRzIHRvIGl0cyByb3dcbi8vIEdpdmUgZWFjaCBzcXVhcmUgYSBjbGFzcyB0aGF0IGNvcnJlc3BvbmRzIHRvIGl0cyByb3cgYW5kIGNvbHVtblxuXG4vLyoqKiogTVkgTU9ERUwgKioqKiAvL1xuXG4vLyBib2FyZCBzZXR1cFxudmFyIGJvYXJkID0gW107XG52YXIgcm93ID0gW107XG52YXIgc3F1YXJlID0gW107XG5cbmZvciAodmFyIGogPSAwOyBqIDwgNzsgaisrKSB7XG4gIHJvdy5wdXNoKHNxdWFyZSk7XG59XG5jb25zb2xlLmxvZyhyb3cpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xuICBib2FyZC5wdXNoKHJvdyk7XG59XG5cbnZhciByb3dOdW0gPSAtMTtcbnZhciBjb2xOdW0gPSAtMTtcblxuXG4vLyBtYWtlIGFuIEFwcCBDb21wb25lbnRcbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgTXkgQXBwXG4gICAgICA8Qm9hcmQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gbWFrZSBhIEJvYXJkIENvbXBvbmVudFxuZnVuY3Rpb24gQm9hcmQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZFwiPlxuICAgICAgR2FtZSBCb2FyZFxuICAgICAge2JvYXJkLm1hcCgocm93KSA9PiB7XG4gICAgICAgIHJvd051bSArPSAxO1xuICAgICAgICByZXR1cm4gPFJvdyByb3c9e3Jvd051bX0vPlxuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vIG1ha2UgYSBSb3cgQ29tcG9uZW50XG5mdW5jdGlvbiBSb3cocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgIHtyb3cubWFwKChzcXVhcmUpID0+IHtcbiAgICAgICAgY29sTnVtKys7XG4gICAgICAgIHJldHVybiA8U3F1YXJlIHg9e3Byb3BzLnJvd30geT17Y29sTnVtfS8+XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBtYWtlIGEgc3F1YXJlIGNvbXBvbmVudFxuZnVuY3Rpb24gU3F1YXJlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3NxdWFyZSc+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuKTtcblxuXG5cblxuXG5cblxuXG5cbiJdfQ==