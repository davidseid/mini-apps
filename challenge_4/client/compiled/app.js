"use strict";

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
// 2. Build the basic scoring components and render them to the DOM in an appropriate fashion
// 3. Build the UI components and render the basics to the DOM


//*** Initialize Frames Data Structure ***

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

var frames = [];
for (var i = 1; i < 10; i++) {
  frames.push(new Frame(i));
}
frames.push(new TenthFrame());

// *** Build Components Skeleton ***

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

// Scoreboard
var Scoreboard = function Scoreboard() {
  return React.createElement(
    "div",
    { "class": "scoreboard" },
    "Scoreboard",
    frames.slice(0, 9).map(function (frame) {
      return React.createElement(FrameComponent, { frameNum: frame.frameNum });
    }),
    React.createElement(TenthFrameComponent, { frameNum: frames[9].frameNum })
  );
};

// Frame
var FrameComponent = function FrameComponent(props) {
  return React.createElement(
    "div",
    { "class": "frame" },
    "Frame"
  );
};

// Tenth Frame
var TenthFrameComponent = function TenthFrameComponent() {
  return React.createElement(
    "div",
    { "class": "tenth-frame" },
    "Tenth Frame"
  );
};

// Frame Num
var FrameNum = function FrameNum() {
  return React.createElement(
    "div",
    { "class": "frame-num" },
    "Frame Number"
  );
};

// Bowl Score 
var BowlScore = function BowlScore() {
  return React.createElement(
    "div",
    { "class": "bowl-score" },
    "Bowl Score"
  );
};

// Frame Score
var FrameScore = function FrameScore() {
  return React.createElement(
    "div",
    { "class": "frame-score" },
    "Frame Score"
  );
};

// Cumulative Score
var CumulativeScore = function CumulativeScore() {
  return React.createElement(
    "div",
    { "class": "cumulative-score" },
    "Cumulative Score"
  );
};

// Final Score
var FinalScore = function FinalScore() {
  return React.createElement(
    "div",
    { "class": "final-score" },
    "Final Score"
  );
};

var App = function App() {
  return React.createElement(
    "div",
    null,
    "This is my App",
    React.createElement(Scoreboard, null)
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiRnJhbWUiLCJmcmFtZU51bSIsImJvd2wxIiwiYm93bDIiLCJmcmFtZVNjb3JlIiwiY3VtdWxhdGl2ZVNjb3JlIiwiVGVudGhGcmFtZSIsImJvd2wzIiwiZnJhbWVzIiwiaSIsInB1c2giLCJTY29yZWJvYXJkIiwic2xpY2UiLCJtYXAiLCJmcmFtZSIsIkZyYW1lQ29tcG9uZW50IiwicHJvcHMiLCJUZW50aEZyYW1lQ29tcG9uZW50IiwiRnJhbWVOdW0iLCJCb3dsU2NvcmUiLCJGcmFtZVNjb3JlIiwiQ3VtdWxhdGl2ZVNjb3JlIiwiRmluYWxTY29yZSIsIkFwcCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDRTs7QUFFRjtBQUNBO0FBQ0U7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNGO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDRjs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0lBRU1BLEssR0FDSixlQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLE9BQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsT0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxPQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLE9BQUtDLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxPQUFLQyxlQUFMLEdBQXVCLENBQXZCO0FBQ0QsQzs7SUFHR0MsVTs7O0FBQ0osd0JBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLTCxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsVUFBS00sS0FBTCxHQUFhLENBQWI7QUFIWTtBQUliOzs7RUFMc0JQLEs7O0FBUXpCLElBQUlRLFNBQVMsRUFBYjtBQUNBLEtBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEVBQXBCLEVBQXdCQSxHQUF4QixFQUE2QjtBQUMzQkQsU0FBT0UsSUFBUCxDQUFZLElBQUlWLEtBQUosQ0FBVVMsQ0FBVixDQUFaO0FBQ0Q7QUFDREQsT0FBT0UsSUFBUCxDQUFZLElBQUlKLFVBQUosRUFBWjs7QUFHQTs7QUFFQTtBQUNBO0FBQ0U7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNGO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDRjs7QUFFRjtBQUNBLElBQUlLLGFBQWEsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCLFNBQ0U7QUFBQTtBQUFBLE1BQUssU0FBTSxZQUFYO0FBQUE7QUFFR0gsV0FBT0ksS0FBUCxDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUJDLEdBQW5CLENBQXVCLFVBQUNDLEtBQUQsRUFBVztBQUNqQyxhQUFPLG9CQUFDLGNBQUQsSUFBZ0IsVUFBVUEsTUFBTWIsUUFBaEMsR0FBUDtBQUNELEtBRkEsQ0FGSDtBQUtFLHdCQUFDLG1CQUFELElBQXFCLFVBQVVPLE9BQU8sQ0FBUCxFQUFVUCxRQUF6QztBQUxGLEdBREY7QUFTRCxDQVZEOztBQVlBO0FBQ0EsSUFBSWMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFDOUIsU0FDRTtBQUFBO0FBQUEsTUFBSyxTQUFNLE9BQVg7QUFBQTtBQUFBLEdBREY7QUFLRCxDQU5EOztBQVFBO0FBQ0EsSUFBSUMsc0JBQXNCLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUM5QixTQUNFO0FBQUE7QUFBQSxNQUFLLFNBQU0sYUFBWDtBQUFBO0FBQUEsR0FERjtBQUtELENBTkQ7O0FBUUE7QUFDQSxJQUFJQyxXQUFXLFNBQVhBLFFBQVcsR0FBTTtBQUNuQixTQUNFO0FBQUE7QUFBQSxNQUFLLFNBQU0sV0FBWDtBQUFBO0FBQUEsR0FERjtBQUtELENBTkQ7O0FBUUE7QUFDQSxJQUFJQyxZQUFZLFNBQVpBLFNBQVksR0FBTTtBQUNwQixTQUNFO0FBQUE7QUFBQSxNQUFLLFNBQU0sWUFBWDtBQUFBO0FBQUEsR0FERjtBQUtELENBTkQ7O0FBUUE7QUFDQSxJQUFJQyxhQUFhLFNBQWJBLFVBQWEsR0FBTTtBQUNyQixTQUNFO0FBQUE7QUFBQSxNQUFLLFNBQU0sYUFBWDtBQUFBO0FBQUEsR0FERjtBQUtELENBTkQ7O0FBUUE7QUFDQSxJQUFJQyxrQkFBa0IsU0FBbEJBLGVBQWtCLEdBQU07QUFDMUIsU0FDRTtBQUFBO0FBQUEsTUFBSyxTQUFNLGtCQUFYO0FBQUE7QUFBQSxHQURGO0FBS0QsQ0FORDs7QUFRQTtBQUNBLElBQUlDLGFBQWEsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCLFNBQ0U7QUFBQTtBQUFBLE1BQUssU0FBTSxhQUFYO0FBQUE7QUFBQSxHQURGO0FBS0QsQ0FORDs7QUFTQSxJQUFJQyxNQUFNLFNBQU5BLEdBQU0sR0FBTTtBQUNkLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFFRSx3QkFBQyxVQUFEO0FBRkYsR0FERjtBQU1ELENBUEQ7O0FBVUFDLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqKiogQ29tcG9uZW50cyBUbyBCdWlsZCAqKipcblxuLy8gKioqIFVJIENvbXBvbmVudHMgKioqXG4vLyBDdXJyZW50IEJvd2wgQ29tcG9uZW50XG4vLyBQaW4gUXVhbnRpdHkgU2VsZWN0aW9uIENvbXBvbmVudFxuICAvLyBPcHRpb25zIENvbXBvbmVudHMgKDEwKVxuXG4vLyAqKiogU2NvcmVCb2FyZCBDb21wb25lbnRzICoqKlxuLy8gU2NvcmVib2FyZCBDb21wb25lbnRcbiAgLy8gTm9ybWFsIEZyYW1lIENvbXBvbmVudFxuICAgIC8vIEZyYW1lIE51bSBDb21wb25lbnRcbiAgICAvLyBCb3dsIFNjb3JlIENvbXBvbmVudHMgKDIpXG4gICAgLy8gRnJhbWUgU2NvcmUgQ29tcG9uZW50XG4gICAgLy8gQ3VtbXVsYXRpdmUgU2NvcmUgQ29tcG9uZW50XG4gIC8vIDEwdGggRnJhbWUgQ29tcG9uZW50IFxuICAgIC8vIEZyYW1lIE51bSBDb21wb25lbnRcbiAgICAvLyBCb3dsIFNjb3JlIENvbXBvbmVudHMgKDMpXG4gICAgLy8gRnJhbWUgU2NvcmUgQ29tcG9uZW50XG4gICAgLy8gQ3VtbXVsYXRpdmUgU2NvcmUgQ29tcG9uZW50XG4gIC8vIEZpbmFsIFNjb3JlIENvbXBvbmVudFxuXG4vLyAqKiogTW9kZWwgRGF0YSBTdHJ1Y3R1cmUgSWRlYXMgKioqXG5cbi8vIFRyYWNrIEZyYW1lc1xuLy8gRWFjaCBmcmFtZSBzaG91bGQgaGF2ZSB1cCB0byB0aHJlZSBib3dsc1xuLy8gZWFjaCBmcmFtZSBzaG91bGQgaGF2ZSBmcmFtZSBzY29yZSwgY3VtbXVsYXRpdmUgc2NvcmUgdXAgdG8gdGhhdCBwb2ludFxuLy8gZWFjaCBmcmFtZSBzaG91bGQgYmUgYWJsZSB0byBsb29rIGJhY2sgYXQgdGhlIGZyYW1lcyBiZWZvcmUgaXQgXG5cbi8vIE1ha2UgYW4gYXJyYXkgY29udGFpbmluZyBub3JtYWwgZnJhbWUgb2JqZWN0cyBhbmQgYSAxMHRoIGZyYW1lIG9iamVjdCBhdCB0aGUgZW5kXG4vLyBub3JtYWwgZnJhbWUgb2JqZWN0cyBoYXZlOiBmcmFtZW51bSwgYm93bDEgYW5kIGJvd2wyIHByb3BlcnRpZXMsIGZyYW1lc2NvcmUgcHJvcCwgYW5kIGN1bXVsYXRpdmUgc2NvcmUgcHJvcFxuXG4vLyBUT0RPXG4vLyAyLiBCdWlsZCB0aGUgYmFzaWMgc2NvcmluZyBjb21wb25lbnRzIGFuZCByZW5kZXIgdGhlbSB0byB0aGUgRE9NIGluIGFuIGFwcHJvcHJpYXRlIGZhc2hpb25cbi8vIDMuIEJ1aWxkIHRoZSBVSSBjb21wb25lbnRzIGFuZCByZW5kZXIgdGhlIGJhc2ljcyB0byB0aGUgRE9NXG5cblxuLy8qKiogSW5pdGlhbGl6ZSBGcmFtZXMgRGF0YSBTdHJ1Y3R1cmUgKioqXG5cbmNsYXNzIEZyYW1lIHtcbiAgY29uc3RydWN0b3IoZnJhbWVOdW0pIHtcbiAgICB0aGlzLmZyYW1lTnVtID0gZnJhbWVOdW07XG4gICAgdGhpcy5ib3dsMSA9IDA7XG4gICAgdGhpcy5ib3dsMiA9IDA7XG4gICAgdGhpcy5mcmFtZVNjb3JlID0gMDtcbiAgICB0aGlzLmN1bXVsYXRpdmVTY29yZSA9IDA7XG4gIH1cbn1cblxuY2xhc3MgVGVudGhGcmFtZSBleHRlbmRzIEZyYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmZyYW1lTnVtID0gMTA7XG4gICAgdGhpcy5ib3dsMyA9IDA7XG4gIH1cbn1cblxudmFyIGZyYW1lcyA9IFtdO1xuZm9yICh2YXIgaSA9IDE7IGkgPCAxMDsgaSsrKSB7XG4gIGZyYW1lcy5wdXNoKG5ldyBGcmFtZShpKSlcbn1cbmZyYW1lcy5wdXNoKG5ldyBUZW50aEZyYW1lKCkpO1xuXG5cbi8vICoqKiBCdWlsZCBDb21wb25lbnRzIFNrZWxldG9uICoqKlxuXG4vLyAqKiogU2NvcmVCb2FyZCBDb21wb25lbnRzICoqKlxuLy8gU2NvcmVib2FyZCBDb21wb25lbnRcbiAgLy8gTm9ybWFsIEZyYW1lIENvbXBvbmVudFxuICAgIC8vIEZyYW1lIE51bSBDb21wb25lbnRcbiAgICAvLyBCb3dsIFNjb3JlIENvbXBvbmVudHMgKDIpXG4gICAgLy8gRnJhbWUgU2NvcmUgQ29tcG9uZW50XG4gICAgLy8gQ3VtbXVsYXRpdmUgU2NvcmUgQ29tcG9uZW50XG4gIC8vIDEwdGggRnJhbWUgQ29tcG9uZW50IFxuICAgIC8vIEZyYW1lIE51bSBDb21wb25lbnRcbiAgICAvLyBCb3dsIFNjb3JlIENvbXBvbmVudHMgKDMpXG4gICAgLy8gRnJhbWUgU2NvcmUgQ29tcG9uZW50XG4gICAgLy8gQ3VtbXVsYXRpdmUgU2NvcmUgQ29tcG9uZW50XG4gIC8vIEZpbmFsIFNjb3JlIENvbXBvbmVudFxuXG4vLyBTY29yZWJvYXJkXG52YXIgU2NvcmVib2FyZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwic2NvcmVib2FyZFwiPlxuICAgICAgU2NvcmVib2FyZFxuICAgICAge2ZyYW1lcy5zbGljZSgwLCA5KS5tYXAoKGZyYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiA8RnJhbWVDb21wb25lbnQgZnJhbWVOdW09e2ZyYW1lLmZyYW1lTnVtfS8+XG4gICAgICB9KX1cbiAgICAgIDxUZW50aEZyYW1lQ29tcG9uZW50IGZyYW1lTnVtPXtmcmFtZXNbOV0uZnJhbWVOdW19IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gRnJhbWVcbnZhciBGcmFtZUNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmcmFtZVwiPlxuICAgICAgRnJhbWVcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBUZW50aCBGcmFtZVxudmFyIFRlbnRoRnJhbWVDb21wb25lbnQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cInRlbnRoLWZyYW1lXCI+XG4gICAgICBUZW50aCBGcmFtZVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEZyYW1lIE51bVxudmFyIEZyYW1lTnVtID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmcmFtZS1udW1cIj5cbiAgICAgIEZyYW1lIE51bWJlclxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEJvd2wgU2NvcmUgXG52YXIgQm93bFNjb3JlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJib3dsLXNjb3JlXCI+XG4gICAgICBCb3dsIFNjb3JlXG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gRnJhbWUgU2NvcmVcbnZhciBGcmFtZVNjb3JlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmcmFtZS1zY29yZVwiPlxuICAgICAgRnJhbWUgU2NvcmVcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBDdW11bGF0aXZlIFNjb3JlXG52YXIgQ3VtdWxhdGl2ZVNjb3JlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJjdW11bGF0aXZlLXNjb3JlXCI+XG4gICAgICBDdW11bGF0aXZlIFNjb3JlXG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gRmluYWwgU2NvcmVcbnZhciBGaW5hbFNjb3JlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmaW5hbC1zY29yZVwiPlxuICAgICAgRmluYWwgU2NvcmVcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbnZhciBBcHAgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIFRoaXMgaXMgbXkgQXBwXG4gICAgICA8U2NvcmVib2FyZCAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuIl19