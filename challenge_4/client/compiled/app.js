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

var options = [];
for (var j = 1; j < 10; j++) {
  options.push(j);
}

// *** Build Components Skeleton ***

// UI Interface Component
var Interface = function Interface() {
  return React.createElement(
    "div",
    { "class": "interface" },
    "Interface",
    React.createElement(CurrentFrame, null),
    React.createElement(CurrentBowl, null),
    React.createElement(Keypad, null)
  );
};

// Current Frame Component
var CurrentFrame = function CurrentFrame() {
  return React.createElement(
    "div",
    { "class": "current-frame" },
    "CurrentFrame"
  );
};
// Current Bowl Component
var CurrentBowl = function CurrentBowl() {
  return React.createElement(
    "div",
    { "class": "current-bowl" },
    "CurrentBowl"
  );
};
// Keypad Component
var Keypad = function Keypad() {
  return React.createElement(
    "div",
    { "class": "keypad" },
    "Keypad",
    options.map(function (option) {
      return React.createElement(Option, { num: option });
    })
  );
};
// Option Component
var Option = function Option(props) {
  return React.createElement(
    "div",
    { "class": "option" },
    "Option"
  );
};

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
    React.createElement(Scoreboard, null),
    React.createElement(Interface, null)
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiRnJhbWUiLCJmcmFtZU51bSIsImJvd2wxIiwiYm93bDIiLCJmcmFtZVNjb3JlIiwiY3VtdWxhdGl2ZVNjb3JlIiwiVGVudGhGcmFtZSIsImJvd2wzIiwiZnJhbWVzIiwiaSIsInB1c2giLCJvcHRpb25zIiwiaiIsIkludGVyZmFjZSIsIkN1cnJlbnRGcmFtZSIsIkN1cnJlbnRCb3dsIiwiS2V5cGFkIiwibWFwIiwib3B0aW9uIiwiT3B0aW9uIiwicHJvcHMiLCJTY29yZWJvYXJkIiwic2xpY2UiLCJmcmFtZSIsIkZyYW1lQ29tcG9uZW50IiwiVGVudGhGcmFtZUNvbXBvbmVudCIsIkZyYW1lTnVtIiwiQm93bFNjb3JlIiwiRnJhbWVTY29yZSIsIkN1bXVsYXRpdmVTY29yZSIsIkZpbmFsU2NvcmUiLCJBcHAiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0U7O0FBRUY7QUFDQTtBQUNFO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDRjtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Y7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7SUFFTUEsSyxHQUNKLGVBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsT0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxPQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLE9BQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsT0FBS0MsVUFBTCxHQUFrQixDQUFsQjtBQUNBLE9BQUtDLGVBQUwsR0FBdUIsQ0FBdkI7QUFDRCxDOztJQUdHQyxVOzs7QUFDSix3QkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtMLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxVQUFLTSxLQUFMLEdBQWEsQ0FBYjtBQUhZO0FBSWI7OztFQUxzQlAsSzs7QUFRekIsSUFBSVEsU0FBUyxFQUFiO0FBQ0EsS0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksRUFBcEIsRUFBd0JBLEdBQXhCLEVBQTZCO0FBQzNCRCxTQUFPRSxJQUFQLENBQVksSUFBSVYsS0FBSixDQUFVUyxDQUFWLENBQVo7QUFDRDtBQUNERCxPQUFPRSxJQUFQLENBQVksSUFBSUosVUFBSixFQUFaOztBQUVBLElBQUlLLFVBQVUsRUFBZDtBQUNBLEtBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEVBQXBCLEVBQXdCQSxHQUF4QixFQUE2QjtBQUMzQkQsVUFBUUQsSUFBUixDQUFhRSxDQUFiO0FBQ0Q7O0FBR0Q7O0FBRUE7QUFDQSxJQUFJQyxZQUFZLFNBQVpBLFNBQVksR0FBTTtBQUNwQixTQUNFO0FBQUE7QUFBQSxNQUFLLFNBQU0sV0FBWDtBQUFBO0FBRUUsd0JBQUMsWUFBRCxPQUZGO0FBR0Usd0JBQUMsV0FBRCxPQUhGO0FBSUUsd0JBQUMsTUFBRDtBQUpGLEdBREY7QUFRRCxDQVREOztBQVdBO0FBQ0EsSUFBSUMsZUFBZSxTQUFmQSxZQUFlLEdBQU07QUFDdkIsU0FDRTtBQUFBO0FBQUEsTUFBSyxTQUFNLGVBQVg7QUFBQTtBQUFBLEdBREY7QUFLRCxDQU5EO0FBT0E7QUFDQSxJQUFJQyxjQUFjLFNBQWRBLFdBQWMsR0FBTTtBQUN0QixTQUNFO0FBQUE7QUFBQSxNQUFLLFNBQU0sY0FBWDtBQUFBO0FBQUEsR0FERjtBQUtELENBTkQ7QUFPQTtBQUNBLElBQUlDLFNBQVMsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCLFNBQ0U7QUFBQTtBQUFBLE1BQUssU0FBTSxRQUFYO0FBQUE7QUFFR0wsWUFBUU0sR0FBUixDQUFZLFVBQUNDLE1BQUQsRUFBWTtBQUN2QixhQUFPLG9CQUFDLE1BQUQsSUFBUSxLQUFLQSxNQUFiLEdBQVA7QUFDRCxLQUZBO0FBRkgsR0FERjtBQVFELENBVEQ7QUFVQTtBQUNBLElBQUlDLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFDdEIsU0FDRTtBQUFBO0FBQUEsTUFBSyxTQUFNLFFBQVg7QUFBQTtBQUFBLEdBREY7QUFLRCxDQU5EOztBQVFBO0FBQ0EsSUFBSUMsYUFBYSxTQUFiQSxVQUFhLEdBQU07QUFDckIsU0FDRTtBQUFBO0FBQUEsTUFBSyxTQUFNLFlBQVg7QUFBQTtBQUVHYixXQUFPYyxLQUFQLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQkwsR0FBbkIsQ0FBdUIsVUFBQ00sS0FBRCxFQUFXO0FBQ2pDLGFBQU8sb0JBQUMsY0FBRCxJQUFnQixVQUFVQSxNQUFNdEIsUUFBaEMsR0FBUDtBQUNELEtBRkEsQ0FGSDtBQUtFLHdCQUFDLG1CQUFELElBQXFCLFVBQVVPLE9BQU8sQ0FBUCxFQUFVUCxRQUF6QyxHQUxGO0FBTUUsd0JBQUMsVUFBRDtBQU5GLEdBREY7QUFVRCxDQVhEOztBQWFBO0FBQ0EsSUFBSXVCLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0osS0FBRCxFQUFXO0FBQzlCLFNBQ0U7QUFBQTtBQUFBLE1BQUssU0FBTSxPQUFYO0FBQUE7QUFFRSx3QkFBQyxRQUFELElBQVUsVUFBVUEsTUFBTW5CLFFBQTFCLEdBRkY7QUFHRSx3QkFBQyxTQUFELE9BSEY7QUFJRSx3QkFBQyxTQUFELE9BSkY7QUFLRSx3QkFBQyxVQUFELE9BTEY7QUFNRSx3QkFBQyxlQUFEO0FBTkYsR0FERjtBQVVELENBWEQ7O0FBYUE7QUFDQSxJQUFJd0Isc0JBQXNCLFNBQXRCQSxtQkFBc0IsQ0FBQ0wsS0FBRCxFQUFXO0FBQ25DLFNBQ0U7QUFBQTtBQUFBLE1BQUssU0FBTSxhQUFYO0FBQUE7QUFFRSx3QkFBQyxRQUFELElBQVUsVUFBVUEsTUFBTW5CLFFBQTFCLEdBRkY7QUFHRSx3QkFBQyxTQUFELE9BSEY7QUFJRSx3QkFBQyxTQUFELE9BSkY7QUFLRSx3QkFBQyxTQUFELE9BTEY7QUFNRSx3QkFBQyxVQUFELE9BTkY7QUFPRSx3QkFBQyxlQUFEO0FBUEYsR0FERjtBQVdELENBWkQ7O0FBY0E7QUFDQSxJQUFJeUIsV0FBVyxTQUFYQSxRQUFXLEdBQU07QUFDbkIsU0FDRTtBQUFBO0FBQUEsTUFBSyxTQUFNLFdBQVg7QUFBQTtBQUFBLEdBREY7QUFLRCxDQU5EOztBQVFBO0FBQ0EsSUFBSUMsWUFBWSxTQUFaQSxTQUFZLEdBQU07QUFDcEIsU0FDRTtBQUFBO0FBQUEsTUFBSyxTQUFNLFlBQVg7QUFBQTtBQUFBLEdBREY7QUFLRCxDQU5EOztBQVFBO0FBQ0EsSUFBSUMsYUFBYSxTQUFiQSxVQUFhLEdBQU07QUFDckIsU0FDRTtBQUFBO0FBQUEsTUFBSyxTQUFNLGFBQVg7QUFBQTtBQUFBLEdBREY7QUFLRCxDQU5EOztBQVFBO0FBQ0EsSUFBSUMsa0JBQWtCLFNBQWxCQSxlQUFrQixHQUFNO0FBQzFCLFNBQ0U7QUFBQTtBQUFBLE1BQUssU0FBTSxrQkFBWDtBQUFBO0FBQUEsR0FERjtBQUtELENBTkQ7O0FBUUE7QUFDQSxJQUFJQyxhQUFhLFNBQWJBLFVBQWEsR0FBTTtBQUNyQixTQUNFO0FBQUE7QUFBQSxNQUFLLFNBQU0sYUFBWDtBQUFBO0FBQUEsR0FERjtBQUtELENBTkQ7O0FBU0EsSUFBSUMsTUFBTSxTQUFOQSxHQUFNLEdBQU07QUFDZCxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBRUUsd0JBQUMsVUFBRCxPQUZGO0FBR0Usd0JBQUMsU0FBRDtBQUhGLEdBREY7QUFPRCxDQVJEOztBQVdBQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKioqIENvbXBvbmVudHMgVG8gQnVpbGQgKioqXG5cbi8vICoqKiBVSSBDb21wb25lbnRzICoqKlxuLy8gQ3VycmVudCBCb3dsIENvbXBvbmVudFxuLy8gUGluIFF1YW50aXR5IFNlbGVjdGlvbiBDb21wb25lbnRcbiAgLy8gT3B0aW9ucyBDb21wb25lbnRzICgxMClcblxuLy8gKioqIFNjb3JlQm9hcmQgQ29tcG9uZW50cyAqKipcbi8vIFNjb3JlYm9hcmQgQ29tcG9uZW50XG4gIC8vIE5vcm1hbCBGcmFtZSBDb21wb25lbnRcbiAgICAvLyBGcmFtZSBOdW0gQ29tcG9uZW50XG4gICAgLy8gQm93bCBTY29yZSBDb21wb25lbnRzICgyKVxuICAgIC8vIEZyYW1lIFNjb3JlIENvbXBvbmVudFxuICAgIC8vIEN1bW11bGF0aXZlIFNjb3JlIENvbXBvbmVudFxuICAvLyAxMHRoIEZyYW1lIENvbXBvbmVudCBcbiAgICAvLyBGcmFtZSBOdW0gQ29tcG9uZW50XG4gICAgLy8gQm93bCBTY29yZSBDb21wb25lbnRzICgzKVxuICAgIC8vIEZyYW1lIFNjb3JlIENvbXBvbmVudFxuICAgIC8vIEN1bW11bGF0aXZlIFNjb3JlIENvbXBvbmVudFxuICAvLyBGaW5hbCBTY29yZSBDb21wb25lbnRcblxuLy8gKioqIE1vZGVsIERhdGEgU3RydWN0dXJlIElkZWFzICoqKlxuXG4vLyBUcmFjayBGcmFtZXNcbi8vIEVhY2ggZnJhbWUgc2hvdWxkIGhhdmUgdXAgdG8gdGhyZWUgYm93bHNcbi8vIGVhY2ggZnJhbWUgc2hvdWxkIGhhdmUgZnJhbWUgc2NvcmUsIGN1bW11bGF0aXZlIHNjb3JlIHVwIHRvIHRoYXQgcG9pbnRcbi8vIGVhY2ggZnJhbWUgc2hvdWxkIGJlIGFibGUgdG8gbG9vayBiYWNrIGF0IHRoZSBmcmFtZXMgYmVmb3JlIGl0IFxuXG4vLyBNYWtlIGFuIGFycmF5IGNvbnRhaW5pbmcgbm9ybWFsIGZyYW1lIG9iamVjdHMgYW5kIGEgMTB0aCBmcmFtZSBvYmplY3QgYXQgdGhlIGVuZFxuLy8gbm9ybWFsIGZyYW1lIG9iamVjdHMgaGF2ZTogZnJhbWVudW0sIGJvd2wxIGFuZCBib3dsMiBwcm9wZXJ0aWVzLCBmcmFtZXNjb3JlIHByb3AsIGFuZCBjdW11bGF0aXZlIHNjb3JlIHByb3BcblxuLy8gVE9ET1xuLy8gMy4gQnVpbGQgdGhlIFVJIGNvbXBvbmVudHMgYW5kIHJlbmRlciB0aGUgYmFzaWNzIHRvIHRoZSBET01cblxuXG4vLyoqKiBJbml0aWFsaXplIEZyYW1lcyBEYXRhIFN0cnVjdHVyZSAqKipcblxuY2xhc3MgRnJhbWUge1xuICBjb25zdHJ1Y3RvcihmcmFtZU51bSkge1xuICAgIHRoaXMuZnJhbWVOdW0gPSBmcmFtZU51bTtcbiAgICB0aGlzLmJvd2wxID0gMDtcbiAgICB0aGlzLmJvd2wyID0gMDtcbiAgICB0aGlzLmZyYW1lU2NvcmUgPSAwO1xuICAgIHRoaXMuY3VtdWxhdGl2ZVNjb3JlID0gMDtcbiAgfVxufVxuXG5jbGFzcyBUZW50aEZyYW1lIGV4dGVuZHMgRnJhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZnJhbWVOdW0gPSAxMDtcbiAgICB0aGlzLmJvd2wzID0gMDtcbiAgfVxufVxuXG52YXIgZnJhbWVzID0gW107XG5mb3IgKHZhciBpID0gMTsgaSA8IDEwOyBpKyspIHtcbiAgZnJhbWVzLnB1c2gobmV3IEZyYW1lKGkpKVxufVxuZnJhbWVzLnB1c2gobmV3IFRlbnRoRnJhbWUoKSk7XG5cbnZhciBvcHRpb25zID0gW107XG5mb3IgKHZhciBqID0gMTsgaiA8IDEwOyBqKyspIHtcbiAgb3B0aW9ucy5wdXNoKGopO1xufVxuXG5cbi8vICoqKiBCdWlsZCBDb21wb25lbnRzIFNrZWxldG9uICoqKlxuXG4vLyBVSSBJbnRlcmZhY2UgQ29tcG9uZW50XG52YXIgSW50ZXJmYWNlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJpbnRlcmZhY2VcIj5cbiAgICAgIEludGVyZmFjZVxuICAgICAgPEN1cnJlbnRGcmFtZSAvPlxuICAgICAgPEN1cnJlbnRCb3dsIC8+XG4gICAgICA8S2V5cGFkIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gQ3VycmVudCBGcmFtZSBDb21wb25lbnRcbnZhciBDdXJyZW50RnJhbWUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtZnJhbWVcIj5cbiAgICAgIEN1cnJlbnRGcmFtZVxuICAgIDwvZGl2PlxuICApXG59XG4vLyBDdXJyZW50IEJvd2wgQ29tcG9uZW50XG52YXIgQ3VycmVudEJvd2wgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtYm93bFwiPlxuICAgICAgQ3VycmVudEJvd2xcbiAgICA8L2Rpdj5cbiAgKVxufVxuLy8gS2V5cGFkIENvbXBvbmVudFxudmFyIEtleXBhZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwia2V5cGFkXCI+XG4gICAgICBLZXlwYWRcbiAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiA8T3B0aW9uIG51bT17b3B0aW9ufSAvPlxuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gIClcbn1cbi8vIE9wdGlvbiBDb21wb25lbnRcbnZhciBPcHRpb24gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwib3B0aW9uXCI+XG4gICAgICBPcHRpb25cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBTY29yZWJvYXJkXG52YXIgU2NvcmVib2FyZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwic2NvcmVib2FyZFwiPlxuICAgICAgU2NvcmVib2FyZFxuICAgICAge2ZyYW1lcy5zbGljZSgwLCA5KS5tYXAoKGZyYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiA8RnJhbWVDb21wb25lbnQgZnJhbWVOdW09e2ZyYW1lLmZyYW1lTnVtfS8+XG4gICAgICB9KX1cbiAgICAgIDxUZW50aEZyYW1lQ29tcG9uZW50IGZyYW1lTnVtPXtmcmFtZXNbOV0uZnJhbWVOdW19IC8+XG4gICAgICA8RmluYWxTY29yZSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEZyYW1lXG52YXIgRnJhbWVDb21wb25lbnQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiZnJhbWVcIj5cbiAgICAgIEZyYW1lXG4gICAgICA8RnJhbWVOdW0gZnJhbWVOdW09e3Byb3BzLmZyYW1lTnVtfS8+XG4gICAgICA8Qm93bFNjb3JlIC8+XG4gICAgICA8Qm93bFNjb3JlIC8+XG4gICAgICA8RnJhbWVTY29yZSAvPlxuICAgICAgPEN1bXVsYXRpdmVTY29yZSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIFRlbnRoIEZyYW1lXG52YXIgVGVudGhGcmFtZUNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJ0ZW50aC1mcmFtZVwiPlxuICAgICAgVGVudGggRnJhbWVcbiAgICAgIDxGcmFtZU51bSBmcmFtZU51bT17cHJvcHMuZnJhbWVOdW19Lz5cbiAgICAgIDxCb3dsU2NvcmUgLz5cbiAgICAgIDxCb3dsU2NvcmUgLz5cbiAgICAgIDxCb3dsU2NvcmUgLz5cbiAgICAgIDxGcmFtZVNjb3JlIC8+XG4gICAgICA8Q3VtdWxhdGl2ZVNjb3JlIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gRnJhbWUgTnVtXG52YXIgRnJhbWVOdW0gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImZyYW1lLW51bVwiPlxuICAgICAgRnJhbWUgTnVtYmVyXG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gQm93bCBTY29yZSBcbnZhciBCb3dsU2NvcmUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImJvd2wtc2NvcmVcIj5cbiAgICAgIEJvd2wgU2NvcmVcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBGcmFtZSBTY29yZVxudmFyIEZyYW1lU2NvcmUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImZyYW1lLXNjb3JlXCI+XG4gICAgICBGcmFtZSBTY29yZVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEN1bXVsYXRpdmUgU2NvcmVcbnZhciBDdW11bGF0aXZlU2NvcmUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImN1bXVsYXRpdmUtc2NvcmVcIj5cbiAgICAgIEN1bXVsYXRpdmUgU2NvcmVcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBGaW5hbCBTY29yZVxudmFyIEZpbmFsU2NvcmUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImZpbmFsLXNjb3JlXCI+XG4gICAgICBGaW5hbCBTY29yZVxuICAgIDwvZGl2PlxuICApXG59XG5cblxudmFyIEFwcCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgVGhpcyBpcyBteSBBcHBcbiAgICAgIDxTY29yZWJvYXJkIC8+XG4gICAgICA8SW50ZXJmYWNlIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuXG4iXX0=