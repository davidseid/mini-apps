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
    null,
    'My Board',
    React.createElement(Row, null)
  );
}

// make a Row Component

function Row() {
  return React.createElement(
    'div',
    null,
    'Row',
    React.createElement(Square, null)
  );
}

// make a square component
function Square() {
  return React.createElement(
    'div',
    null,
    'Square'
  );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwiQm9hcmQiLCJSb3ciLCJTcXVhcmUiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFJQTtBQUNBLFNBQVNBLEdBQVQsR0FBZTtBQUNiLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFFRSx3QkFBQyxLQUFEO0FBRkYsR0FERjtBQU1EOztBQUVEO0FBQ0EsU0FBU0MsS0FBVCxHQUFpQjtBQUNmLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFFRSx3QkFBQyxHQUFEO0FBRkYsR0FERjtBQU1EOztBQUVEOztBQUVBLFNBQVNDLEdBQVQsR0FBZTtBQUNiLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFFRSx3QkFBQyxNQUFEO0FBRkYsR0FERjtBQU1EOztBQUVEO0FBQ0EsU0FBU0MsTUFBVCxHQUFrQjtBQUNoQixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FERjtBQUtEOztBQUdEQyxTQUFTQyxNQUFULENBQ0Usb0JBQUMsR0FBRCxPQURGLEVBRUVDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FGRiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBidWlsZCBVSSB3aXRoIHJlYWN0anMgYW5kIHByZWNvbXBpbGUgdmlld3Mgd2l0aCBiYWJlbFxuLy8gYWxsIGdhbWUgbG9naWMgc2hvdWxkIGxpdmUgaW4gdGhlIGNsaWVudCBjb2RlXG5cbi8vIGFsbCByZWFjdCBjb21wb25lbnRzIGNhbiBsaXZlIGluIHRoaXMgZmlsZVxuXG4vLyBkZXRlY3Qgd2luIG9yIHRpZSBhbmQgZGlzcGxheSBhcHByb3ByaWF0ZSBtZXNzYWdlXG4vLyBwYWdlIHJlZnJlc2ggcmVzdGFydHMgdGhlIGdhbWVcblxuLy8gV1JJVEUgRk9VUiBURVNUUyBmb3IgZW5kIG9mIGdhbWUgbG9naWNcbi8vIGNhbiBydW4gdGVzdHMgaW4gbm9kZSBvciBicm93c2VyXG5cbi8vIG1pbmltYWwgY3NzIHN0eWxpbmdcbi8vIGhhdmUgYmFiZWwgd2F0Y2ggZm9yIGNoYW5nZXMgaW4gYXBwXG4vLyB1c2Ugbm9kZW1vblxuXG5cblxuLy8gbWFrZSBhbiBBcHAgQ29tcG9uZW50XG5mdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIE15IEFwcFxuICAgICAgPEJvYXJkIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vIG1ha2UgYSBCb2FyZCBDb21wb25lbnRcbmZ1bmN0aW9uIEJvYXJkKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBNeSBCb2FyZFxuICAgICAgPFJvdyAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBtYWtlIGEgUm93IENvbXBvbmVudFxuXG5mdW5jdGlvbiBSb3coKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIFJvd1xuICAgICAgPFNxdWFyZSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIG1ha2UgYSBzcXVhcmUgY29tcG9uZW50XG5mdW5jdGlvbiBTcXVhcmUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIFNxdWFyZVxuICAgIDwvZGl2PlxuICApXG59XG5cblxuUmVhY3RET00ucmVuZGVyKFxuICA8QXBwIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbik7XG5cblxuXG5cblxuXG5cblxuXG4iXX0=