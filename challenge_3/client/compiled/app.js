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


// 1. Instead of registering a click from a specific row, pass up the column 
// then check to see the row number that should be updated, and update that


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
      result: null,
      slots: [5, 5, 5, 5, 5, 5, 5]
    };
    return _this;
  }

  _createClass(Board, [{
    key: 'placePiece',
    value: function placePiece(x, y) {

      var rowToChange = this.state.slots[y];
      var slots = this.state.slots;

      if (slots[y] >= 0) {
        slots[y]--;

        this.setState({ slots: slots });

        board[rowToChange][y] = this.state.turn;
        this.setState({ board: board });
        if (this.state.turn === 'red') {
          this.setState({ turn: 'black' });
        } else if (this.state.turn === 'black') {
          this.setState({ turn: 'red' });
        }
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiYm9hcmQiLCJyb3ciLCJzcXVhcmUiLCJqIiwicHVzaCIsImkiLCJzbGljZSIsIkFwcCIsIkJvYXJkIiwicHJvcHMiLCJzdGF0ZSIsInR1cm4iLCJyZXN1bHQiLCJzbG90cyIsIngiLCJ5Iiwicm93VG9DaGFuZ2UiLCJzZXRTdGF0ZSIsIm1hcCIsInJvd0luZGV4IiwicGxhY2VQaWVjZSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJvdyIsImNvbEluZGV4IiwiU3F1YXJlIiwiYmFja2dyb3VuZCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBSUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQSxJQUFJQSxRQUFRLEVBQVo7QUFDQSxJQUFJQyxNQUFNLEVBQVY7QUFDQSxJQUFJQyxTQUFTLEVBQWI7QUFDQSxLQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxDQUFwQixFQUF1QkEsR0FBdkIsRUFBNEI7QUFDMUJGLE1BQUlHLElBQUosQ0FBU0YsTUFBVDtBQUNEO0FBQ0QsS0FBSyxJQUFJRyxJQUFJLENBQWIsRUFBZ0JBLElBQUksQ0FBcEIsRUFBdUJBLEdBQXZCLEVBQTRCO0FBQzFCTCxRQUFNSSxJQUFOLENBQVdILElBQUlLLEtBQUosRUFBWDtBQUNEOztBQUtEO0FBQ0EsU0FBU0MsR0FBVCxHQUFlO0FBQ2IsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUVFLHdCQUFDLEtBQUQ7QUFGRixHQURGO0FBTUQ7O0FBSUQ7O0lBQ01DLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYVixhQUFPQSxLQURJO0FBRVhXLFlBQU0sS0FGSztBQUdYQyxjQUFRLElBSEc7QUFJWEMsYUFBTyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBSkksS0FBYjtBQUZpQjtBQVFsQjs7OzsrQkFFVUMsQyxFQUFHQyxDLEVBQUc7O0FBRWYsVUFBSUMsY0FBYyxLQUFLTixLQUFMLENBQVdHLEtBQVgsQ0FBaUJFLENBQWpCLENBQWxCO0FBQ0EsVUFBSUYsUUFBUSxLQUFLSCxLQUFMLENBQVdHLEtBQXZCOztBQUVBLFVBQUlBLE1BQU1FLENBQU4sS0FBWSxDQUFoQixFQUFtQjtBQUNqQkYsY0FBTUUsQ0FBTjs7QUFFQSxhQUFLRSxRQUFMLENBQWMsRUFBQ0osT0FBT0EsS0FBUixFQUFkOztBQUdBYixjQUFNZ0IsV0FBTixFQUFtQkQsQ0FBbkIsSUFBd0IsS0FBS0wsS0FBTCxDQUFXQyxJQUFuQztBQUNBLGFBQUtNLFFBQUwsQ0FBYyxFQUFDakIsT0FBT0EsS0FBUixFQUFkO0FBQ0EsWUFBSSxLQUFLVSxLQUFMLENBQVdDLElBQVgsS0FBb0IsS0FBeEIsRUFBK0I7QUFDN0IsZUFBS00sUUFBTCxDQUFjLEVBQUNOLE1BQU0sT0FBUCxFQUFkO0FBQ0QsU0FGRCxNQUVPLElBQUksS0FBS0QsS0FBTCxDQUFXQyxJQUFYLEtBQW9CLE9BQXhCLEVBQWlDO0FBQ3RDLGVBQUtNLFFBQUwsQ0FBYyxFQUFDTixNQUFNLEtBQVAsRUFBZDtBQUNEO0FBQ0Y7QUFFRjs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLE9BQWY7QUFBQTtBQUVHWCxjQUFNa0IsR0FBTixDQUFVLFVBQUNqQixHQUFELEVBQU1rQixRQUFOLEVBQW1CO0FBQzVCLGlCQUFPLG9CQUFDLEdBQUQsSUFBSyxZQUFZLE9BQUtDLFVBQUwsQ0FBZ0JDLElBQWhCLFFBQWpCLEVBQTZDLEtBQUtGLFFBQWxELEVBQTRELEtBQUtsQixHQUFqRSxFQUFzRSxVQUFVa0IsUUFBaEYsR0FBUDtBQUNELFNBRkE7QUFGSCxPQURGO0FBUUQ7Ozs7RUExQ2lCRyxNQUFNQyxTOztBQThDMUI7OztBQUNBLFNBQVNDLEdBQVQsQ0FBYWYsS0FBYixFQUFvQjtBQUNsQixTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsS0FBZjtBQUNHQSxVQUFNUixHQUFOLENBQVVpQixHQUFWLENBQWMsVUFBQ2hCLE1BQUQsRUFBU3VCLFFBQVQsRUFBc0I7QUFDbkMsYUFBTyxvQkFBQyxNQUFELElBQVEsWUFBWWhCLE1BQU1XLFVBQTFCLEVBQXNDLEtBQUtLLFFBQTNDLEVBQXFELEdBQUdoQixNQUFNVSxRQUE5RCxFQUF3RSxHQUFHTSxRQUEzRSxHQUFQO0FBQ0QsS0FGQTtBQURILEdBREY7QUFPRDs7QUFFRDtBQUNBLFNBQVNDLE1BQVQsQ0FBZ0JqQixLQUFoQixFQUF1QjtBQUNyQixTQUNFLDZCQUFLLFNBQVMsbUJBQU07QUFBQ0EsWUFBTVcsVUFBTixDQUFpQlgsTUFBTUssQ0FBdkIsRUFBMEJMLE1BQU1NLENBQWhDO0FBQW1DLEtBQXhELEVBQTBELFdBQVUsUUFBcEUsRUFBNkUsT0FBTyxFQUFDWSxZQUFZM0IsTUFBTVMsTUFBTUssQ0FBWixFQUFlTCxNQUFNTSxDQUFyQixDQUFiLEVBQXBGLEdBREY7QUFJRDs7QUFHRGEsU0FBU0MsTUFBVCxDQUNFLG9CQUFDLEdBQUQsT0FERixFQUVFQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBRkYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYnVpbGQgVUkgd2l0aCByZWFjdGpzIGFuZCBwcmVjb21waWxlIHZpZXdzIHdpdGggYmFiZWxcbi8vIGFsbCBnYW1lIGxvZ2ljIHNob3VsZCBsaXZlIGluIHRoZSBjbGllbnQgY29kZVxuXG4vLyBhbGwgcmVhY3QgY29tcG9uZW50cyBjYW4gbGl2ZSBpbiB0aGlzIGZpbGVcblxuLy8gZGV0ZWN0IHdpbiBvciB0aWUgYW5kIGRpc3BsYXkgYXBwcm9wcmlhdGUgbWVzc2FnZVxuLy8gcGFnZSByZWZyZXNoIHJlc3RhcnRzIHRoZSBnYW1lXG5cbi8vIFdSSVRFIEZPVVIgVEVTVFMgZm9yIGVuZCBvZiBnYW1lIGxvZ2ljXG4vLyBjYW4gcnVuIHRlc3RzIGluIG5vZGUgb3IgYnJvd3NlclxuXG4vLyBtaW5pbWFsIGNzcyBzdHlsaW5nXG4vLyBoYXZlIGJhYmVsIHdhdGNoIGZvciBjaGFuZ2VzIGluIGFwcFxuLy8gdXNlIG5vZGVtb25cblxuXG5cbi8vIDEuIEluc3RlYWQgb2YgcmVnaXN0ZXJpbmcgYSBjbGljayBmcm9tIGEgc3BlY2lmaWMgcm93LCBwYXNzIHVwIHRoZSBjb2x1bW4gXG4vLyB0aGVuIGNoZWNrIHRvIHNlZSB0aGUgcm93IG51bWJlciB0aGF0IHNob3VsZCBiZSB1cGRhdGVkLCBhbmQgdXBkYXRlIHRoYXRcblxuXG4vLyoqKiogTVkgTU9ERUwgKioqKiAvL1xuXG4vLyBib2FyZCBpbml0aWFsaXphdGlvblxudmFyIGJvYXJkID0gW107XG52YXIgcm93ID0gW107XG52YXIgc3F1YXJlID0gJyc7XG5mb3IgKHZhciBqID0gMDsgaiA8IDc7IGorKykge1xuICByb3cucHVzaChzcXVhcmUpO1xufVxuZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgYm9hcmQucHVzaChyb3cuc2xpY2UoKSk7XG59XG5cblxuXG5cbi8vIG1ha2UgYW4gQXBwIENvbXBvbmVudFxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBDb25uZWN0IEZvdXJcbiAgICAgIDxCb2FyZCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cblxuLy8gbWFrZSBhIEJvYXJkIENvbXBvbmVudFxuY2xhc3MgQm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIGJvYXJkOiBib2FyZCxcbiAgICAgIHR1cm46ICdyZWQnLFxuICAgICAgcmVzdWx0OiBudWxsLFxuICAgICAgc2xvdHM6IFs1LCA1LCA1LCA1LCA1LCA1LCA1XVxuICAgIH07XG4gIH1cblxuICBwbGFjZVBpZWNlKHgsIHkpIHtcblxuICAgIHZhciByb3dUb0NoYW5nZSA9IHRoaXMuc3RhdGUuc2xvdHNbeV07XG4gICAgdmFyIHNsb3RzID0gdGhpcy5zdGF0ZS5zbG90cztcblxuICAgIGlmIChzbG90c1t5XSA+PSAwKSB7XG4gICAgICBzbG90c1t5XS0tO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtzbG90czogc2xvdHN9KVxuXG5cbiAgICAgIGJvYXJkW3Jvd1RvQ2hhbmdlXVt5XSA9IHRoaXMuc3RhdGUudHVybjtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2JvYXJkOiBib2FyZH0pO1xuICAgICAgaWYgKHRoaXMuc3RhdGUudHVybiA9PT0gJ3JlZCcpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dHVybjogJ2JsYWNrJ30pXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUudHVybiA9PT0gJ2JsYWNrJykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt0dXJuOiAncmVkJ30pXG4gICAgICB9XG4gICAgfVxuICAgIFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkXCI+XG4gICAgICAgIEdhbWUgQm9hcmRcbiAgICAgICAge2JvYXJkLm1hcCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiA8Um93IHBsYWNlUGllY2U9e3RoaXMucGxhY2VQaWVjZS5iaW5kKHRoaXMpfSBrZXk9e3Jvd0luZGV4fSByb3c9e3Jvd30gcm93SW5kZXg9e3Jvd0luZGV4fS8+XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cbi8vIG1ha2UgYSBSb3cgQ29tcG9uZW50XG5mdW5jdGlvbiBSb3cocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgIHtwcm9wcy5yb3cubWFwKChzcXVhcmUsIGNvbEluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiA8U3F1YXJlIHBsYWNlUGllY2U9e3Byb3BzLnBsYWNlUGllY2V9IGtleT17Y29sSW5kZXh9IHg9e3Byb3BzLnJvd0luZGV4fSB5PXtjb2xJbmRleH0vPlxuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gbWFrZSBhIHNxdWFyZSBjb21wb25lbnRcbmZ1bmN0aW9uIFNxdWFyZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgb25DbGljaz17KCkgPT4ge3Byb3BzLnBsYWNlUGllY2UocHJvcHMueCwgcHJvcHMueSl9fSBjbGFzc05hbWU9J3NxdWFyZScgc3R5bGU9e3tiYWNrZ3JvdW5kOiBib2FyZFtwcm9wcy54XVtwcm9wcy55XX19PlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuUmVhY3RET00ucmVuZGVyKFxuICA8QXBwIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbik7XG5cblxuXG5cblxuXG5cblxuXG4iXX0=