'use strict';

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// *** Components To Build ***

// *** UI Components ***
// Current Bowl Component
// Pin Quantity Selection Component
// Options Components (10)

// *** ScoreBoard Components ***
// Scoreboard Component
// Normal Frame Component
// Frame Num Component
// Bowl Score Components (2)
// Frame Score Component
// Cummulative Score Component
// 10th Frame Component 
// Frame Num Component
// Bowl Score Components (3)
// Frame Score Component
// Cummulative Score Component
// Final Score Component

// *** Model Data Structure Ideas ***

// Track Frames
// Each frame should have up to three bowls
// each frame should have frame score, cummulative score up to that point
// each frame should be able to look back at the frames before it 

// Make an array containing normal frame objects and a 10th frame object at the end
// normal frame objects have: framenum, bowl1 and bowl2 properties, framescore prop, and cumulative score prop

// TODO
// 1. Create the model data structure 
// Create a frame class
// Create a 10th frame class
// Create an array of 9 intances of frames and 1 instance of 10th frame
// 2. Build the basic scoring components and render them to the DOM in an appropriate fashion
// 3. Build the UI components and render the basics to the DOM


//*** Initialize Frame Data Structure ***

var Frame = function Frame(frameNum) {
  _classCallCheck(this, Frame);

  this.frameNum = frameNum;
  this.bowl1 = 0;
  this.bowl2 = 0;
  this.frameScore = 0;
  this.cumulativeScore = 0;
};

var TenthFrame = function (_Frame) {
  _inherits(TenthFrame, _Frame);

  function TenthFrame() {
    _classCallCheck(this, TenthFrame);

    var _this = _possibleConstructorReturn(this, (TenthFrame.__proto__ || Object.getPrototypeOf(TenthFrame)).call(this));

    _this.frameNum = 10;
    _this.bowl3 = 0;
    return _this;
  }

  return TenthFrame;
}(Frame);

var App = function App() {
  return React.createElement(
    'div',
    null,
    'This is my App'
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiRnJhbWUiLCJmcmFtZU51bSIsImJvd2wxIiwiYm93bDIiLCJmcmFtZVNjb3JlIiwiY3VtdWxhdGl2ZVNjb3JlIiwiVGVudGhGcmFtZSIsImJvd2wzIiwiQXBwIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNFOztBQUVGO0FBQ0E7QUFDRTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Y7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNGOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNFO0FBQ0E7QUFDQTtBQUNGO0FBQ0E7OztBQUdBOztJQUVNQSxLLEdBQ0osZUFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixPQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLE9BQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsT0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxPQUFLQyxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsT0FBS0MsZUFBTCxHQUF1QixDQUF2QjtBQUNELEM7O0lBR0dDLFU7OztBQUNKLHdCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0wsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFVBQUtNLEtBQUwsR0FBYSxDQUFiO0FBSFk7QUFJYjs7O0VBTHNCUCxLOztBQVl6QixJQUFJUSxNQUFNLFNBQU5BLEdBQU0sR0FBTTtBQUNkLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQURGO0FBS0QsQ0FORDs7QUFTQUMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICoqKiBDb21wb25lbnRzIFRvIEJ1aWxkICoqKlxuXG4vLyAqKiogVUkgQ29tcG9uZW50cyAqKipcbi8vIEN1cnJlbnQgQm93bCBDb21wb25lbnRcbi8vIFBpbiBRdWFudGl0eSBTZWxlY3Rpb24gQ29tcG9uZW50XG4gIC8vIE9wdGlvbnMgQ29tcG9uZW50cyAoMTApXG5cbi8vICoqKiBTY29yZUJvYXJkIENvbXBvbmVudHMgKioqXG4vLyBTY29yZWJvYXJkIENvbXBvbmVudFxuICAvLyBOb3JtYWwgRnJhbWUgQ29tcG9uZW50XG4gICAgLy8gRnJhbWUgTnVtIENvbXBvbmVudFxuICAgIC8vIEJvd2wgU2NvcmUgQ29tcG9uZW50cyAoMilcbiAgICAvLyBGcmFtZSBTY29yZSBDb21wb25lbnRcbiAgICAvLyBDdW1tdWxhdGl2ZSBTY29yZSBDb21wb25lbnRcbiAgLy8gMTB0aCBGcmFtZSBDb21wb25lbnQgXG4gICAgLy8gRnJhbWUgTnVtIENvbXBvbmVudFxuICAgIC8vIEJvd2wgU2NvcmUgQ29tcG9uZW50cyAoMylcbiAgICAvLyBGcmFtZSBTY29yZSBDb21wb25lbnRcbiAgICAvLyBDdW1tdWxhdGl2ZSBTY29yZSBDb21wb25lbnRcbiAgLy8gRmluYWwgU2NvcmUgQ29tcG9uZW50XG5cbi8vICoqKiBNb2RlbCBEYXRhIFN0cnVjdHVyZSBJZGVhcyAqKipcblxuLy8gVHJhY2sgRnJhbWVzXG4vLyBFYWNoIGZyYW1lIHNob3VsZCBoYXZlIHVwIHRvIHRocmVlIGJvd2xzXG4vLyBlYWNoIGZyYW1lIHNob3VsZCBoYXZlIGZyYW1lIHNjb3JlLCBjdW1tdWxhdGl2ZSBzY29yZSB1cCB0byB0aGF0IHBvaW50XG4vLyBlYWNoIGZyYW1lIHNob3VsZCBiZSBhYmxlIHRvIGxvb2sgYmFjayBhdCB0aGUgZnJhbWVzIGJlZm9yZSBpdCBcblxuLy8gTWFrZSBhbiBhcnJheSBjb250YWluaW5nIG5vcm1hbCBmcmFtZSBvYmplY3RzIGFuZCBhIDEwdGggZnJhbWUgb2JqZWN0IGF0IHRoZSBlbmRcbi8vIG5vcm1hbCBmcmFtZSBvYmplY3RzIGhhdmU6IGZyYW1lbnVtLCBib3dsMSBhbmQgYm93bDIgcHJvcGVydGllcywgZnJhbWVzY29yZSBwcm9wLCBhbmQgY3VtdWxhdGl2ZSBzY29yZSBwcm9wXG5cbi8vIFRPRE9cbi8vIDEuIENyZWF0ZSB0aGUgbW9kZWwgZGF0YSBzdHJ1Y3R1cmUgXG4gIC8vIENyZWF0ZSBhIGZyYW1lIGNsYXNzXG4gIC8vIENyZWF0ZSBhIDEwdGggZnJhbWUgY2xhc3NcbiAgLy8gQ3JlYXRlIGFuIGFycmF5IG9mIDkgaW50YW5jZXMgb2YgZnJhbWVzIGFuZCAxIGluc3RhbmNlIG9mIDEwdGggZnJhbWVcbi8vIDIuIEJ1aWxkIHRoZSBiYXNpYyBzY29yaW5nIGNvbXBvbmVudHMgYW5kIHJlbmRlciB0aGVtIHRvIHRoZSBET00gaW4gYW4gYXBwcm9wcmlhdGUgZmFzaGlvblxuLy8gMy4gQnVpbGQgdGhlIFVJIGNvbXBvbmVudHMgYW5kIHJlbmRlciB0aGUgYmFzaWNzIHRvIHRoZSBET01cblxuXG4vLyoqKiBJbml0aWFsaXplIEZyYW1lIERhdGEgU3RydWN0dXJlICoqKlxuXG5jbGFzcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKGZyYW1lTnVtKSB7XG4gICAgdGhpcy5mcmFtZU51bSA9IGZyYW1lTnVtO1xuICAgIHRoaXMuYm93bDEgPSAwO1xuICAgIHRoaXMuYm93bDIgPSAwO1xuICAgIHRoaXMuZnJhbWVTY29yZSA9IDA7XG4gICAgdGhpcy5jdW11bGF0aXZlU2NvcmUgPSAwO1xuICB9XG59XG5cbmNsYXNzIFRlbnRoRnJhbWUgZXh0ZW5kcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5mcmFtZU51bSA9IDEwO1xuICAgIHRoaXMuYm93bDMgPSAwO1xuICB9XG59XG5cblxuXG5cblxudmFyIEFwcCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgVGhpcyBpcyBteSBBcHBcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG5cbiJdfQ==