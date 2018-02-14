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

// 1: automatically render 6 rows 
// 2: automatically render 7 squares in each row
// have the rendering based on actual model

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
    'My Board',
    React.createElement(Row, null)
  );
}

// make a Row Component
function Row() {
  return React.createElement(
    'div',
    { className: 'row' },
    row.map(function (square) {
      return React.createElement(Square, null);
    })
  );
}

// make a square component
function Square() {
  return React.createElement('div', { className: 'square' });
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiYm9hcmQiLCJyb3ciLCJzcXVhcmUiLCJqIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJpIiwiQXBwIiwiQm9hcmQiLCJSb3ciLCJtYXAiLCJTcXVhcmUiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUlBLFFBQVEsRUFBWjtBQUNBLElBQUlDLE1BQU0sRUFBVjtBQUNBLElBQUlDLFNBQVMsRUFBYjs7QUFFQSxLQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxDQUFwQixFQUF1QkEsR0FBdkIsRUFBNEI7QUFDMUJGLE1BQUlHLElBQUosQ0FBU0YsTUFBVDtBQUNEO0FBQ0RHLFFBQVFDLEdBQVIsQ0FBWUwsR0FBWjs7QUFFQSxLQUFLLElBQUlNLElBQUksQ0FBYixFQUFnQkEsSUFBSSxDQUFwQixFQUF1QkEsR0FBdkIsRUFBNEI7QUFDMUJQLFFBQU1JLElBQU4sQ0FBV0gsR0FBWDtBQUNEOztBQUtEO0FBQ0EsU0FBU08sR0FBVCxHQUFlO0FBQ2IsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUVFLHdCQUFDLEtBQUQ7QUFGRixHQURGO0FBTUQ7O0FBRUQ7QUFDQSxTQUFTQyxLQUFULEdBQWlCO0FBQ2YsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLE9BQWY7QUFBQTtBQUVFLHdCQUFDLEdBQUQ7QUFGRixHQURGO0FBTUQ7O0FBRUQ7QUFDQSxTQUFTQyxHQUFULEdBQWU7QUFDYixTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsS0FBZjtBQUNHVCxRQUFJVSxHQUFKLENBQVEsVUFBQ1QsTUFBRCxFQUFZO0FBQ25CLGFBQU8sb0JBQUMsTUFBRCxPQUFQO0FBQ0QsS0FGQTtBQURILEdBREY7QUFPRDs7QUFFRDtBQUNBLFNBQVNVLE1BQVQsR0FBa0I7QUFDaEIsU0FDRSw2QkFBSyxXQUFVLFFBQWYsR0FERjtBQUlEOztBQUdEQyxTQUFTQyxNQUFULENBQ0Usb0JBQUMsR0FBRCxPQURGLEVBRUVDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FGRiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBidWlsZCBVSSB3aXRoIHJlYWN0anMgYW5kIHByZWNvbXBpbGUgdmlld3Mgd2l0aCBiYWJlbFxuLy8gYWxsIGdhbWUgbG9naWMgc2hvdWxkIGxpdmUgaW4gdGhlIGNsaWVudCBjb2RlXG5cbi8vIGFsbCByZWFjdCBjb21wb25lbnRzIGNhbiBsaXZlIGluIHRoaXMgZmlsZVxuXG4vLyBkZXRlY3Qgd2luIG9yIHRpZSBhbmQgZGlzcGxheSBhcHByb3ByaWF0ZSBtZXNzYWdlXG4vLyBwYWdlIHJlZnJlc2ggcmVzdGFydHMgdGhlIGdhbWVcblxuLy8gV1JJVEUgRk9VUiBURVNUUyBmb3IgZW5kIG9mIGdhbWUgbG9naWNcbi8vIGNhbiBydW4gdGVzdHMgaW4gbm9kZSBvciBicm93c2VyXG5cbi8vIG1pbmltYWwgY3NzIHN0eWxpbmdcbi8vIGhhdmUgYmFiZWwgd2F0Y2ggZm9yIGNoYW5nZXMgaW4gYXBwXG4vLyB1c2Ugbm9kZW1vblxuXG4vLyAxOiBhdXRvbWF0aWNhbGx5IHJlbmRlciA2IHJvd3MgXG4vLyAyOiBhdXRvbWF0aWNhbGx5IHJlbmRlciA3IHNxdWFyZXMgaW4gZWFjaCByb3dcbi8vIGhhdmUgdGhlIHJlbmRlcmluZyBiYXNlZCBvbiBhY3R1YWwgbW9kZWxcblxuLy8qKioqIE1ZIE1PREVMICoqKiogLy9cblxuLy8gYm9hcmQgc2V0dXBcbnZhciBib2FyZCA9IFtdO1xudmFyIHJvdyA9IFtdO1xudmFyIHNxdWFyZSA9IFtdO1xuXG5mb3IgKHZhciBqID0gMDsgaiA8IDc7IGorKykge1xuICByb3cucHVzaChzcXVhcmUpO1xufVxuY29uc29sZS5sb2cocm93KTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgYm9hcmQucHVzaChyb3cpO1xufVxuXG5cblxuXG4vLyBtYWtlIGFuIEFwcCBDb21wb25lbnRcbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgTXkgQXBwXG4gICAgICA8Qm9hcmQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gbWFrZSBhIEJvYXJkIENvbXBvbmVudFxuZnVuY3Rpb24gQm9hcmQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZFwiPlxuICAgICAgTXkgQm9hcmRcbiAgICAgIDxSb3cgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gbWFrZSBhIFJvdyBDb21wb25lbnRcbmZ1bmN0aW9uIFJvdygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgIHtyb3cubWFwKChzcXVhcmUpID0+IHtcbiAgICAgICAgcmV0dXJuIDxTcXVhcmUgLz5cbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIG1ha2UgYSBzcXVhcmUgY29tcG9uZW50XG5mdW5jdGlvbiBTcXVhcmUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3NxdWFyZSc+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuKTtcblxuXG5cblxuXG5cblxuXG5cbiJdfQ==