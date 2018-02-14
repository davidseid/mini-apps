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

for (var i = 0; i < 6; i++) {
  board.push(row);
}

console.table(board);

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
    'Row',
    React.createElement(Square, null)
  );
}

// make a square component
function Square() {
  return React.createElement('div', { className: 'square' });
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiYm9hcmQiLCJyb3ciLCJzcXVhcmUiLCJqIiwicHVzaCIsImkiLCJjb25zb2xlIiwidGFibGUiLCJBcHAiLCJCb2FyZCIsIlJvdyIsIlNxdWFyZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSUEsUUFBUSxFQUFaO0FBQ0EsSUFBSUMsTUFBTSxFQUFWO0FBQ0EsSUFBSUMsU0FBUyxFQUFiOztBQUVBLEtBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLENBQXBCLEVBQXVCQSxHQUF2QixFQUE0QjtBQUMxQkYsTUFBSUcsSUFBSixDQUFTRixNQUFUO0FBQ0Q7O0FBRUQsS0FBSyxJQUFJRyxJQUFJLENBQWIsRUFBZ0JBLElBQUksQ0FBcEIsRUFBdUJBLEdBQXZCLEVBQTRCO0FBQzFCTCxRQUFNSSxJQUFOLENBQVdILEdBQVg7QUFDRDs7QUFFREssUUFBUUMsS0FBUixDQUFjUCxLQUFkOztBQUlBO0FBQ0EsU0FBU1EsR0FBVCxHQUFlO0FBQ2IsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUVFLHdCQUFDLEtBQUQ7QUFGRixHQURGO0FBTUQ7O0FBRUQ7QUFDQSxTQUFTQyxLQUFULEdBQWlCO0FBQ2YsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLE9BQWY7QUFBQTtBQUVFLHdCQUFDLEdBQUQ7QUFGRixHQURGO0FBTUQ7O0FBRUQ7QUFDQSxTQUFTQyxHQUFULEdBQWU7QUFDYixTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsS0FBZjtBQUFBO0FBRUUsd0JBQUMsTUFBRDtBQUZGLEdBREY7QUFNRDs7QUFFRDtBQUNBLFNBQVNDLE1BQVQsR0FBa0I7QUFDaEIsU0FDRSw2QkFBSyxXQUFVLFFBQWYsR0FERjtBQUlEOztBQUdEQyxTQUFTQyxNQUFULENBQ0Usb0JBQUMsR0FBRCxPQURGLEVBRUVDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FGRiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBidWlsZCBVSSB3aXRoIHJlYWN0anMgYW5kIHByZWNvbXBpbGUgdmlld3Mgd2l0aCBiYWJlbFxuLy8gYWxsIGdhbWUgbG9naWMgc2hvdWxkIGxpdmUgaW4gdGhlIGNsaWVudCBjb2RlXG5cbi8vIGFsbCByZWFjdCBjb21wb25lbnRzIGNhbiBsaXZlIGluIHRoaXMgZmlsZVxuXG4vLyBkZXRlY3Qgd2luIG9yIHRpZSBhbmQgZGlzcGxheSBhcHByb3ByaWF0ZSBtZXNzYWdlXG4vLyBwYWdlIHJlZnJlc2ggcmVzdGFydHMgdGhlIGdhbWVcblxuLy8gV1JJVEUgRk9VUiBURVNUUyBmb3IgZW5kIG9mIGdhbWUgbG9naWNcbi8vIGNhbiBydW4gdGVzdHMgaW4gbm9kZSBvciBicm93c2VyXG5cbi8vIG1pbmltYWwgY3NzIHN0eWxpbmdcbi8vIGhhdmUgYmFiZWwgd2F0Y2ggZm9yIGNoYW5nZXMgaW4gYXBwXG4vLyB1c2Ugbm9kZW1vblxuXG4vLyAxOiBhdXRvbWF0aWNhbGx5IHJlbmRlciA2IHJvd3MgXG4vLyAyOiBhdXRvbWF0aWNhbGx5IHJlbmRlciA3IHNxdWFyZXMgaW4gZWFjaCByb3dcbi8vIGhhdmUgdGhlIHJlbmRlcmluZyBiYXNlZCBvbiBhY3R1YWwgbW9kZWxcblxuLy8qKioqIE1ZIE1PREVMICoqKiogLy9cblxuLy8gYm9hcmQgc2V0dXBcbnZhciBib2FyZCA9IFtdO1xudmFyIHJvdyA9IFtdO1xudmFyIHNxdWFyZSA9IFtdO1xuXG5mb3IgKHZhciBqID0gMDsgaiA8IDc7IGorKykge1xuICByb3cucHVzaChzcXVhcmUpO1xufVxuXG5mb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xuICBib2FyZC5wdXNoKHJvdyk7XG59XG5cbmNvbnNvbGUudGFibGUoYm9hcmQpO1xuXG5cblxuLy8gbWFrZSBhbiBBcHAgQ29tcG9uZW50XG5mdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIE15IEFwcFxuICAgICAgPEJvYXJkIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vIG1ha2UgYSBCb2FyZCBDb21wb25lbnRcbmZ1bmN0aW9uIEJvYXJkKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIj5cbiAgICAgIE15IEJvYXJkXG4gICAgICA8Um93IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vIG1ha2UgYSBSb3cgQ29tcG9uZW50XG5mdW5jdGlvbiBSb3coKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICBSb3dcbiAgICAgIDxTcXVhcmUgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBtYWtlIGEgc3F1YXJlIGNvbXBvbmVudFxuZnVuY3Rpb24gU3F1YXJlKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdzcXVhcmUnPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuUmVhY3RET00ucmVuZGVyKFxuICA8QXBwIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbik7XG5cblxuXG5cblxuXG5cblxuXG4iXX0=