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
    React.createElement(TenthFrameComponent, { frameNum: frames[9].frameNum }),
    React.createElement(FinalScore, null)
  );
};

// Frame
var FrameComponent = function FrameComponent(props) {
  return React.createElement(
    "div",
    { "class": "frame" },
    "Frame",
    React.createElement(FrameNum, { frameNum: props.frameNum }),
    React.createElement(BowlScore, null),
    React.createElement(BowlScore, null),
    React.createElement(FrameScore, null),
    React.createElement(CumulativeScore, null)
  );
};

// Tenth Frame
var TenthFrameComponent = function TenthFrameComponent(props) {
  return React.createElement(
    "div",
    { "class": "tenth-frame" },
    "Tenth Frame",
    React.createElement(FrameNum, { frameNum: props.frameNum }),
    React.createElement(BowlScore, null),
    React.createElement(BowlScore, null),
    React.createElement(BowlScore, null),
    React.createElement(FrameScore, null),
    React.createElement(CumulativeScore, null)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiRnJhbWUiLCJmcmFtZU51bSIsImJvd2wxIiwiYm93bDIiLCJmcmFtZVNjb3JlIiwiY3VtdWxhdGl2ZVNjb3JlIiwiVGVudGhGcmFtZSIsImJvd2wzIiwiZnJhbWVzIiwiaSIsInB1c2giLCJTY29yZWJvYXJkIiwic2xpY2UiLCJtYXAiLCJmcmFtZSIsIkZyYW1lQ29tcG9uZW50IiwicHJvcHMiLCJUZW50aEZyYW1lQ29tcG9uZW50IiwiRnJhbWVOdW0iLCJCb3dsU2NvcmUiLCJGcmFtZVNjb3JlIiwiQ3VtdWxhdGl2ZVNjb3JlIiwiRmluYWxTY29yZSIsIkFwcCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDRTs7QUFFRjtBQUNBO0FBQ0U7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNGO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDRjs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0lBRU1BLEssR0FDSixlQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLE9BQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsT0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxPQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLE9BQUtDLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxPQUFLQyxlQUFMLEdBQXVCLENBQXZCO0FBQ0QsQzs7SUFHR0MsVTs7O0FBQ0osd0JBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLTCxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsVUFBS00sS0FBTCxHQUFhLENBQWI7QUFIWTtBQUliOzs7RUFMc0JQLEs7O0FBUXpCLElBQUlRLFNBQVMsRUFBYjtBQUNBLEtBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEVBQXBCLEVBQXdCQSxHQUF4QixFQUE2QjtBQUMzQkQsU0FBT0UsSUFBUCxDQUFZLElBQUlWLEtBQUosQ0FBVVMsQ0FBVixDQUFaO0FBQ0Q7QUFDREQsT0FBT0UsSUFBUCxDQUFZLElBQUlKLFVBQUosRUFBWjs7QUFHQTs7QUFFQTtBQUNBO0FBQ0U7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNGO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDRjs7QUFFRjtBQUNBLElBQUlLLGFBQWEsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCLFNBQ0U7QUFBQTtBQUFBLE1BQUssU0FBTSxZQUFYO0FBQUE7QUFFR0gsV0FBT0ksS0FBUCxDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUJDLEdBQW5CLENBQXVCLFVBQUNDLEtBQUQsRUFBVztBQUNqQyxhQUFPLG9CQUFDLGNBQUQsSUFBZ0IsVUFBVUEsTUFBTWIsUUFBaEMsR0FBUDtBQUNELEtBRkEsQ0FGSDtBQUtFLHdCQUFDLG1CQUFELElBQXFCLFVBQVVPLE9BQU8sQ0FBUCxFQUFVUCxRQUF6QyxHQUxGO0FBTUUsd0JBQUMsVUFBRDtBQU5GLEdBREY7QUFVRCxDQVhEOztBQWFBO0FBQ0EsSUFBSWMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFDOUIsU0FDRTtBQUFBO0FBQUEsTUFBSyxTQUFNLE9BQVg7QUFBQTtBQUVFLHdCQUFDLFFBQUQsSUFBVSxVQUFVQSxNQUFNZixRQUExQixHQUZGO0FBR0Usd0JBQUMsU0FBRCxPQUhGO0FBSUUsd0JBQUMsU0FBRCxPQUpGO0FBS0Usd0JBQUMsVUFBRCxPQUxGO0FBTUUsd0JBQUMsZUFBRDtBQU5GLEdBREY7QUFVRCxDQVhEOztBQWFBO0FBQ0EsSUFBSWdCLHNCQUFzQixTQUF0QkEsbUJBQXNCLENBQUNELEtBQUQsRUFBVztBQUNuQyxTQUNFO0FBQUE7QUFBQSxNQUFLLFNBQU0sYUFBWDtBQUFBO0FBRUUsd0JBQUMsUUFBRCxJQUFVLFVBQVVBLE1BQU1mLFFBQTFCLEdBRkY7QUFHRSx3QkFBQyxTQUFELE9BSEY7QUFJRSx3QkFBQyxTQUFELE9BSkY7QUFLRSx3QkFBQyxTQUFELE9BTEY7QUFNRSx3QkFBQyxVQUFELE9BTkY7QUFPRSx3QkFBQyxlQUFEO0FBUEYsR0FERjtBQVdELENBWkQ7O0FBY0E7QUFDQSxJQUFJaUIsV0FBVyxTQUFYQSxRQUFXLEdBQU07QUFDbkIsU0FDRTtBQUFBO0FBQUEsTUFBSyxTQUFNLFdBQVg7QUFBQTtBQUFBLEdBREY7QUFLRCxDQU5EOztBQVFBO0FBQ0EsSUFBSUMsWUFBWSxTQUFaQSxTQUFZLEdBQU07QUFDcEIsU0FDRTtBQUFBO0FBQUEsTUFBSyxTQUFNLFlBQVg7QUFBQTtBQUFBLEdBREY7QUFLRCxDQU5EOztBQVFBO0FBQ0EsSUFBSUMsYUFBYSxTQUFiQSxVQUFhLEdBQU07QUFDckIsU0FDRTtBQUFBO0FBQUEsTUFBSyxTQUFNLGFBQVg7QUFBQTtBQUFBLEdBREY7QUFLRCxDQU5EOztBQVFBO0FBQ0EsSUFBSUMsa0JBQWtCLFNBQWxCQSxlQUFrQixHQUFNO0FBQzFCLFNBQ0U7QUFBQTtBQUFBLE1BQUssU0FBTSxrQkFBWDtBQUFBO0FBQUEsR0FERjtBQUtELENBTkQ7O0FBUUE7QUFDQSxJQUFJQyxhQUFhLFNBQWJBLFVBQWEsR0FBTTtBQUNyQixTQUNFO0FBQUE7QUFBQSxNQUFLLFNBQU0sYUFBWDtBQUFBO0FBQUEsR0FERjtBQUtELENBTkQ7O0FBU0EsSUFBSUMsTUFBTSxTQUFOQSxHQUFNLEdBQU07QUFDZCxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBRUUsd0JBQUMsVUFBRDtBQUZGLEdBREY7QUFNRCxDQVBEOztBQVVBQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKioqIENvbXBvbmVudHMgVG8gQnVpbGQgKioqXG5cbi8vICoqKiBVSSBDb21wb25lbnRzICoqKlxuLy8gQ3VycmVudCBCb3dsIENvbXBvbmVudFxuLy8gUGluIFF1YW50aXR5IFNlbGVjdGlvbiBDb21wb25lbnRcbiAgLy8gT3B0aW9ucyBDb21wb25lbnRzICgxMClcblxuLy8gKioqIFNjb3JlQm9hcmQgQ29tcG9uZW50cyAqKipcbi8vIFNjb3JlYm9hcmQgQ29tcG9uZW50XG4gIC8vIE5vcm1hbCBGcmFtZSBDb21wb25lbnRcbiAgICAvLyBGcmFtZSBOdW0gQ29tcG9uZW50XG4gICAgLy8gQm93bCBTY29yZSBDb21wb25lbnRzICgyKVxuICAgIC8vIEZyYW1lIFNjb3JlIENvbXBvbmVudFxuICAgIC8vIEN1bW11bGF0aXZlIFNjb3JlIENvbXBvbmVudFxuICAvLyAxMHRoIEZyYW1lIENvbXBvbmVudCBcbiAgICAvLyBGcmFtZSBOdW0gQ29tcG9uZW50XG4gICAgLy8gQm93bCBTY29yZSBDb21wb25lbnRzICgzKVxuICAgIC8vIEZyYW1lIFNjb3JlIENvbXBvbmVudFxuICAgIC8vIEN1bW11bGF0aXZlIFNjb3JlIENvbXBvbmVudFxuICAvLyBGaW5hbCBTY29yZSBDb21wb25lbnRcblxuLy8gKioqIE1vZGVsIERhdGEgU3RydWN0dXJlIElkZWFzICoqKlxuXG4vLyBUcmFjayBGcmFtZXNcbi8vIEVhY2ggZnJhbWUgc2hvdWxkIGhhdmUgdXAgdG8gdGhyZWUgYm93bHNcbi8vIGVhY2ggZnJhbWUgc2hvdWxkIGhhdmUgZnJhbWUgc2NvcmUsIGN1bW11bGF0aXZlIHNjb3JlIHVwIHRvIHRoYXQgcG9pbnRcbi8vIGVhY2ggZnJhbWUgc2hvdWxkIGJlIGFibGUgdG8gbG9vayBiYWNrIGF0IHRoZSBmcmFtZXMgYmVmb3JlIGl0IFxuXG4vLyBNYWtlIGFuIGFycmF5IGNvbnRhaW5pbmcgbm9ybWFsIGZyYW1lIG9iamVjdHMgYW5kIGEgMTB0aCBmcmFtZSBvYmplY3QgYXQgdGhlIGVuZFxuLy8gbm9ybWFsIGZyYW1lIG9iamVjdHMgaGF2ZTogZnJhbWVudW0sIGJvd2wxIGFuZCBib3dsMiBwcm9wZXJ0aWVzLCBmcmFtZXNjb3JlIHByb3AsIGFuZCBjdW11bGF0aXZlIHNjb3JlIHByb3BcblxuLy8gVE9ET1xuLy8gMi4gQnVpbGQgdGhlIGJhc2ljIHNjb3JpbmcgY29tcG9uZW50cyBhbmQgcmVuZGVyIHRoZW0gdG8gdGhlIERPTSBpbiBhbiBhcHByb3ByaWF0ZSBmYXNoaW9uXG4vLyAzLiBCdWlsZCB0aGUgVUkgY29tcG9uZW50cyBhbmQgcmVuZGVyIHRoZSBiYXNpY3MgdG8gdGhlIERPTVxuXG5cbi8vKioqIEluaXRpYWxpemUgRnJhbWVzIERhdGEgU3RydWN0dXJlICoqKlxuXG5jbGFzcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKGZyYW1lTnVtKSB7XG4gICAgdGhpcy5mcmFtZU51bSA9IGZyYW1lTnVtO1xuICAgIHRoaXMuYm93bDEgPSAwO1xuICAgIHRoaXMuYm93bDIgPSAwO1xuICAgIHRoaXMuZnJhbWVTY29yZSA9IDA7XG4gICAgdGhpcy5jdW11bGF0aXZlU2NvcmUgPSAwO1xuICB9XG59XG5cbmNsYXNzIFRlbnRoRnJhbWUgZXh0ZW5kcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5mcmFtZU51bSA9IDEwO1xuICAgIHRoaXMuYm93bDMgPSAwO1xuICB9XG59XG5cbnZhciBmcmFtZXMgPSBbXTtcbmZvciAodmFyIGkgPSAxOyBpIDwgMTA7IGkrKykge1xuICBmcmFtZXMucHVzaChuZXcgRnJhbWUoaSkpXG59XG5mcmFtZXMucHVzaChuZXcgVGVudGhGcmFtZSgpKTtcblxuXG4vLyAqKiogQnVpbGQgQ29tcG9uZW50cyBTa2VsZXRvbiAqKipcblxuLy8gKioqIFNjb3JlQm9hcmQgQ29tcG9uZW50cyAqKipcbi8vIFNjb3JlYm9hcmQgQ29tcG9uZW50XG4gIC8vIE5vcm1hbCBGcmFtZSBDb21wb25lbnRcbiAgICAvLyBGcmFtZSBOdW0gQ29tcG9uZW50XG4gICAgLy8gQm93bCBTY29yZSBDb21wb25lbnRzICgyKVxuICAgIC8vIEZyYW1lIFNjb3JlIENvbXBvbmVudFxuICAgIC8vIEN1bW11bGF0aXZlIFNjb3JlIENvbXBvbmVudFxuICAvLyAxMHRoIEZyYW1lIENvbXBvbmVudCBcbiAgICAvLyBGcmFtZSBOdW0gQ29tcG9uZW50XG4gICAgLy8gQm93bCBTY29yZSBDb21wb25lbnRzICgzKVxuICAgIC8vIEZyYW1lIFNjb3JlIENvbXBvbmVudFxuICAgIC8vIEN1bW11bGF0aXZlIFNjb3JlIENvbXBvbmVudFxuICAvLyBGaW5hbCBTY29yZSBDb21wb25lbnRcblxuLy8gU2NvcmVib2FyZFxudmFyIFNjb3JlYm9hcmQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cInNjb3JlYm9hcmRcIj5cbiAgICAgIFNjb3JlYm9hcmRcbiAgICAgIHtmcmFtZXMuc2xpY2UoMCwgOSkubWFwKChmcmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gPEZyYW1lQ29tcG9uZW50IGZyYW1lTnVtPXtmcmFtZS5mcmFtZU51bX0vPlxuICAgICAgfSl9XG4gICAgICA8VGVudGhGcmFtZUNvbXBvbmVudCBmcmFtZU51bT17ZnJhbWVzWzldLmZyYW1lTnVtfSAvPlxuICAgICAgPEZpbmFsU2NvcmUgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBGcmFtZVxudmFyIEZyYW1lQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImZyYW1lXCI+XG4gICAgICBGcmFtZVxuICAgICAgPEZyYW1lTnVtIGZyYW1lTnVtPXtwcm9wcy5mcmFtZU51bX0vPlxuICAgICAgPEJvd2xTY29yZSAvPlxuICAgICAgPEJvd2xTY29yZSAvPlxuICAgICAgPEZyYW1lU2NvcmUgLz5cbiAgICAgIDxDdW11bGF0aXZlU2NvcmUgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBUZW50aCBGcmFtZVxudmFyIFRlbnRoRnJhbWVDb21wb25lbnQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwidGVudGgtZnJhbWVcIj5cbiAgICAgIFRlbnRoIEZyYW1lXG4gICAgICA8RnJhbWVOdW0gZnJhbWVOdW09e3Byb3BzLmZyYW1lTnVtfS8+XG4gICAgICA8Qm93bFNjb3JlIC8+XG4gICAgICA8Qm93bFNjb3JlIC8+XG4gICAgICA8Qm93bFNjb3JlIC8+XG4gICAgICA8RnJhbWVTY29yZSAvPlxuICAgICAgPEN1bXVsYXRpdmVTY29yZSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEZyYW1lIE51bVxudmFyIEZyYW1lTnVtID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmcmFtZS1udW1cIj5cbiAgICAgIEZyYW1lIE51bWJlclxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEJvd2wgU2NvcmUgXG52YXIgQm93bFNjb3JlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJib3dsLXNjb3JlXCI+XG4gICAgICBCb3dsIFNjb3JlXG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gRnJhbWUgU2NvcmVcbnZhciBGcmFtZVNjb3JlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmcmFtZS1zY29yZVwiPlxuICAgICAgRnJhbWUgU2NvcmVcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBDdW11bGF0aXZlIFNjb3JlXG52YXIgQ3VtdWxhdGl2ZVNjb3JlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJjdW11bGF0aXZlLXNjb3JlXCI+XG4gICAgICBDdW11bGF0aXZlIFNjb3JlXG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gRmluYWwgU2NvcmVcbnZhciBGaW5hbFNjb3JlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmaW5hbC1zY29yZVwiPlxuICAgICAgRmluYWwgU2NvcmVcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbnZhciBBcHAgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIFRoaXMgaXMgbXkgQXBwXG4gICAgICA8U2NvcmVib2FyZCAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuIl19