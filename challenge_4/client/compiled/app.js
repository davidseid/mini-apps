"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

//TO DO:
// Put the data structure onto the app and pass down
// Pass down the currentFrame and the currentBowl from the state to the UI


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
for (var j = 1; j < 11; j++) {
  options.push(j);
}

// *** Build Components Skeleton ***

// UI Interface Component
var Interface = function Interface(props) {
  return React.createElement(
    "div",
    { "class": "interface" },
    React.createElement(CurrentFrame, { currentFrame: props.currentFrame }),
    React.createElement(CurrentBowl, { currentBowl: props.currentBowl }),
    React.createElement(Keypad, null)
  );
};

// Current Frame Component
var CurrentFrame = function CurrentFrame(props) {
  return React.createElement(
    "div",
    { "class": "current-frame" },
    "Frame Number: ",
    props.currentFrame
  );
};
// Current Bowl Component
var CurrentBowl = function CurrentBowl(props) {
  return React.createElement(
    "div",
    { "class": "current-bowl" },
    "Bowl Number: ",
    props.currentBowl
  );
};
// Keypad Component
var Keypad = function Keypad() {
  return React.createElement(
    "div",
    { "class": "keypad" },
    "Pins to Hit:",
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
    React.createElement(
      "button",
      null,
      props.num
    )
  );
};

// Scoreboard
var Scoreboard = function Scoreboard(props) {
  return React.createElement(
    "div",
    { "class": "scoreboard" },
    "Scoreboard",
    props.frames.slice(0, 9).map(function (frame) {
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
    React.createElement(FrameNum, { frameNum: props.frameNum }),
    React.createElement(BowlScore, { bowlNum: 1 }),
    React.createElement(BowlScore, { bowlNum: 2 }),
    React.createElement(FrameScore, null),
    React.createElement(CumulativeScore, null)
  );
};

// Tenth Frame
var TenthFrameComponent = function TenthFrameComponent(props) {
  return React.createElement(
    "div",
    { "class": "tenth-frame" },
    React.createElement(FrameNum, { frameNum: props.frameNum }),
    React.createElement(BowlScore, { bowlNum: 1 }),
    React.createElement(BowlScore, { bowlNum: 2 }),
    React.createElement(BowlScore, { bowlNum: 3 }),
    React.createElement(FrameScore, null),
    React.createElement(CumulativeScore, null)
  );
};

// Frame Num
var FrameNum = function FrameNum(props) {
  return React.createElement(
    "div",
    { "class": "frame-num" },
    "Frame ",
    props.frameNum
  );
};

// Bowl Score 
var BowlScore = function BowlScore(props) {
  return React.createElement(
    "div",
    { "class": "bowl-score" },
    "Bowl ",
    props.bowlNum,
    ":"
  );
};

// Frame Score
var FrameScore = function FrameScore() {
  return React.createElement(
    "div",
    { "class": "frame-score" },
    "Frame Score:"
  );
};

// Cumulative Score
var CumulativeScore = function CumulativeScore() {
  return React.createElement(
    "div",
    { "class": "cumulative-score" },
    "Cumulative Score:"
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

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this2.state = {
      frames: frames,
      currentFrame: 1,
      currentBowl: 1,
      totalScore: undefined
    };
    return _this2;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "Bowling App",
        React.createElement(Scoreboard, { frames: this.state.frames }),
        React.createElement(Interface, { currentFrame: this.state.currentFrame, currentBowl: this.state.currentBowl })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiRnJhbWUiLCJmcmFtZU51bSIsImJvd2wxIiwiYm93bDIiLCJmcmFtZVNjb3JlIiwiY3VtdWxhdGl2ZVNjb3JlIiwiVGVudGhGcmFtZSIsImJvd2wzIiwiZnJhbWVzIiwiaSIsInB1c2giLCJvcHRpb25zIiwiaiIsIkludGVyZmFjZSIsInByb3BzIiwiY3VycmVudEZyYW1lIiwiY3VycmVudEJvd2wiLCJDdXJyZW50RnJhbWUiLCJDdXJyZW50Qm93bCIsIktleXBhZCIsIm1hcCIsIm9wdGlvbiIsIk9wdGlvbiIsIm51bSIsIlNjb3JlYm9hcmQiLCJzbGljZSIsImZyYW1lIiwiRnJhbWVDb21wb25lbnQiLCJUZW50aEZyYW1lQ29tcG9uZW50IiwiRnJhbWVOdW0iLCJCb3dsU2NvcmUiLCJib3dsTnVtIiwiRnJhbWVTY29yZSIsIkN1bXVsYXRpdmVTY29yZSIsIkZpbmFsU2NvcmUiLCJBcHAiLCJzdGF0ZSIsInRvdGFsU2NvcmUiLCJ1bmRlZmluZWQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNFOztBQUVGO0FBQ0E7QUFDRTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Y7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNGOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7SUFFTUEsSyxHQUNKLGVBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsT0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxPQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLE9BQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsT0FBS0MsVUFBTCxHQUFrQixDQUFsQjtBQUNBLE9BQUtDLGVBQUwsR0FBdUIsQ0FBdkI7QUFDRCxDOztJQUdH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R0FDWEEsS0FEVzs7QUFFakIsV0FBS3NCLEtBQUwsR0FBYTtBQUNYNUIsY0FBUUEsTUFERztBQUVYTyxvQkFBYyxDQUZIO0FBR1hDLG1CQUFhLENBSEY7QUFJWHFCLGtCQUFZQztBQUpELEtBQWI7QUFGaUI7QUFRbEI7Ozs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUFBO0FBRUUsNEJBQUMsVUFBRCxJQUFZLFFBQVEsS0FBS0YsS0FBTCxDQUFXNUIsTUFBL0IsR0FGRjtBQUdFLDRCQUFDLFNBQUQsSUFBVyxjQUFjLEtBQUs0QixLQUFMLENBQVdyQixZQUFwQyxFQUFrRCxhQUFhLEtBQUtxQixLQUFMLENBQVdwQixXQUExRTtBQUhGLE9BREY7QUFPRDs7OztFQW5CZXVCLE1BQU1DLFM7O0FBdUJ4QkMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICoqKiBDb21wb25lbnRzIFRvIEJ1aWxkICoqKlxuXG4vLyAqKiogVUkgQ29tcG9uZW50cyAqKipcbi8vIEN1cnJlbnQgQm93bCBDb21wb25lbnRcbi8vIFBpbiBRdWFudGl0eSBTZWxlY3Rpb24gQ29tcG9uZW50XG4gIC8vIE9wdGlvbnMgQ29tcG9uZW50cyAoMTApXG5cbi8vICoqKiBTY29yZUJvYXJkIENvbXBvbmVudHMgKioqXG4vLyBTY29yZWJvYXJkIENvbXBvbmVudFxuICAvLyBOb3JtYWwgRnJhbWUgQ29tcG9uZW50XG4gICAgLy8gRnJhbWUgTnVtIENvbXBvbmVudFxuICAgIC8vIEJvd2wgU2NvcmUgQ29tcG9uZW50cyAoMilcbiAgICAvLyBGcmFtZSBTY29yZSBDb21wb25lbnRcbiAgICAvLyBDdW1tdWxhdGl2ZSBTY29yZSBDb21wb25lbnRcbiAgLy8gMTB0aCBGcmFtZSBDb21wb25lbnQgXG4gICAgLy8gRnJhbWUgTnVtIENvbXBvbmVudFxuICAgIC8vIEJvd2wgU2NvcmUgQ29tcG9uZW50cyAoMylcbiAgICAvLyBGcmFtZSBTY29yZSBDb21wb25lbnRcbiAgICAvLyBDdW1tdWxhdGl2ZSBTY29yZSBDb21wb25lbnRcbiAgLy8gRmluYWwgU2NvcmUgQ29tcG9uZW50XG5cbi8vICoqKiBNb2RlbCBEYXRhIFN0cnVjdHVyZSBJZGVhcyAqKipcblxuLy8gVHJhY2sgRnJhbWVzXG4vLyBFYWNoIGZyYW1lIHNob3VsZCBoYXZlIHVwIHRvIHRocmVlIGJvd2xzXG4vLyBlYWNoIGZyYW1lIHNob3VsZCBoYXZlIGZyYW1lIHNjb3JlLCBjdW1tdWxhdGl2ZSBzY29yZSB1cCB0byB0aGF0IHBvaW50XG4vLyBlYWNoIGZyYW1lIHNob3VsZCBiZSBhYmxlIHRvIGxvb2sgYmFjayBhdCB0aGUgZnJhbWVzIGJlZm9yZSBpdCBcblxuLy8gTWFrZSBhbiBhcnJheSBjb250YWluaW5nIG5vcm1hbCBmcmFtZSBvYmplY3RzIGFuZCBhIDEwdGggZnJhbWUgb2JqZWN0IGF0IHRoZSBlbmRcbi8vIG5vcm1hbCBmcmFtZSBvYmplY3RzIGhhdmU6IGZyYW1lbnVtLCBib3dsMSBhbmQgYm93bDIgcHJvcGVydGllcywgZnJhbWVzY29yZSBwcm9wLCBhbmQgY3VtdWxhdGl2ZSBzY29yZSBwcm9wXG5cbi8vVE8gRE86XG4vLyBQdXQgdGhlIGRhdGEgc3RydWN0dXJlIG9udG8gdGhlIGFwcCBhbmQgcGFzcyBkb3duXG4vLyBQYXNzIGRvd24gdGhlIGN1cnJlbnRGcmFtZSBhbmQgdGhlIGN1cnJlbnRCb3dsIGZyb20gdGhlIHN0YXRlIHRvIHRoZSBVSVxuXG5cbi8vKioqIEluaXRpYWxpemUgRnJhbWVzIERhdGEgU3RydWN0dXJlICoqKlxuXG5jbGFzcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKGZyYW1lTnVtKSB7XG4gICAgdGhpcy5mcmFtZU51bSA9IGZyYW1lTnVtO1xuICAgIHRoaXMuYm93bDEgPSAwO1xuICAgIHRoaXMuYm93bDIgPSAwO1xuICAgIHRoaXMuZnJhbWVTY29yZSA9IDA7XG4gICAgdGhpcy5jdW11bGF0aXZlU2NvcmUgPSAwO1xuICB9XG59XG5cbmNsYXNzIFRlbnRoRnJhbWUgZXh0ZW5kcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5mcmFtZU51bSA9IDEwO1xuICAgIHRoaXMuYm93bDMgPSAwO1xuICB9XG59XG5cbnZhciBmcmFtZXMgPSBbXTtcbmZvciAodmFyIGkgPSAxOyBpIDwgMTA7IGkrKykge1xuICBmcmFtZXMucHVzaChuZXcgRnJhbWUoaSkpXG59XG5mcmFtZXMucHVzaChuZXcgVGVudGhGcmFtZSgpKTtcblxudmFyIG9wdGlvbnMgPSBbXTtcbmZvciAodmFyIGogPSAxOyBqIDwgMTE7IGorKykge1xuICBvcHRpb25zLnB1c2goaik7XG59XG5cblxuLy8gKioqIEJ1aWxkIENvbXBvbmVudHMgU2tlbGV0b24gKioqXG5cbi8vIFVJIEludGVyZmFjZSBDb21wb25lbnRcbnZhciBJbnRlcmZhY2UgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiaW50ZXJmYWNlXCI+XG4gICAgICA8Q3VycmVudEZyYW1lIGN1cnJlbnRGcmFtZT17cHJvcHMuY3VycmVudEZyYW1lfS8+XG4gICAgICA8Q3VycmVudEJvd2wgY3VycmVudEJvd2w9e3Byb3BzLmN1cnJlbnRCb3dsfS8+XG4gICAgICA8S2V5cGFkIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gQ3VycmVudCBGcmFtZSBDb21wb25lbnRcbnZhciBDdXJyZW50RnJhbWUgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1mcmFtZVwiPlxuICAgICAgRnJhbWUgTnVtYmVyOiB7cHJvcHMuY3VycmVudEZyYW1lfVxuICAgIDwvZGl2PlxuICApXG59XG4vLyBDdXJyZW50IEJvd2wgQ29tcG9uZW50XG52YXIgQ3VycmVudEJvd2wgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1ib3dsXCI+XG4gICAgICBCb3dsIE51bWJlcjoge3Byb3BzLmN1cnJlbnRCb3dsfVxuICAgIDwvZGl2PlxuICApXG59XG4vLyBLZXlwYWQgQ29tcG9uZW50XG52YXIgS2V5cGFkID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJrZXlwYWRcIj5cbiAgICAgIFBpbnMgdG8gSGl0OiBcbiAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiA8T3B0aW9uIG51bT17b3B0aW9ufSAvPlxuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gIClcbn1cbi8vIE9wdGlvbiBDb21wb25lbnRcbnZhciBPcHRpb24gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwib3B0aW9uXCI+XG4gICAgPGJ1dHRvbj57cHJvcHMubnVtfTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIFNjb3JlYm9hcmRcbnZhciBTY29yZWJvYXJkID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cInNjb3JlYm9hcmRcIj5cbiAgICAgIFNjb3JlYm9hcmRcbiAgICAgIHtwcm9wcy5mcmFtZXMuc2xpY2UoMCwgOSkubWFwKChmcmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gPEZyYW1lQ29tcG9uZW50IGZyYW1lTnVtPXtmcmFtZS5mcmFtZU51bX0vPlxuICAgICAgfSl9XG4gICAgICA8VGVudGhGcmFtZUNvbXBvbmVudCBmcmFtZU51bT17ZnJhbWVzWzldLmZyYW1lTnVtfSAvPlxuICAgICAgPEZpbmFsU2NvcmUgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBGcmFtZVxudmFyIEZyYW1lQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImZyYW1lXCI+XG4gICAgICA8RnJhbWVOdW0gZnJhbWVOdW09e3Byb3BzLmZyYW1lTnVtfS8+XG4gICAgICA8Qm93bFNjb3JlIGJvd2xOdW09ezF9IC8+XG4gICAgICA8Qm93bFNjb3JlIGJvd2xOdW09ezJ9IC8+XG4gICAgICA8RnJhbWVTY29yZSAvPlxuICAgICAgPEN1bXVsYXRpdmVTY29yZSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIFRlbnRoIEZyYW1lXG52YXIgVGVudGhGcmFtZUNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJ0ZW50aC1mcmFtZVwiPiBcbiAgICAgIDxGcmFtZU51bSBmcmFtZU51bT17cHJvcHMuZnJhbWVOdW19Lz5cbiAgICAgIDxCb3dsU2NvcmUgYm93bE51bT17MX0gLz5cbiAgICAgIDxCb3dsU2NvcmUgYm93bE51bT17Mn0gLz5cbiAgICAgIDxCb3dsU2NvcmUgYm93bE51bT17M30gLz5cbiAgICAgIDxGcmFtZVNjb3JlIC8+XG4gICAgICA8Q3VtdWxhdGl2ZVNjb3JlIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gRnJhbWUgTnVtXG52YXIgRnJhbWVOdW0gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiZnJhbWUtbnVtXCI+XG4gICAgICBGcmFtZSB7cHJvcHMuZnJhbWVOdW19XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gQm93bCBTY29yZSBcbnZhciBCb3dsU2NvcmUgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiYm93bC1zY29yZVwiPlxuICAgICAgQm93bCB7cHJvcHMuYm93bE51bX06XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gRnJhbWUgU2NvcmVcbnZhciBGcmFtZVNjb3JlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmcmFtZS1zY29yZVwiPlxuICAgICAgRnJhbWUgU2NvcmU6IFxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEN1bXVsYXRpdmUgU2NvcmVcbnZhciBDdW11bGF0aXZlU2NvcmUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImN1bXVsYXRpdmUtc2NvcmVcIj5cbiAgICAgIEN1bXVsYXRpdmUgU2NvcmU6XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gRmluYWwgU2NvcmVcbnZhciBGaW5hbFNjb3JlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmaW5hbC1zY29yZVwiPlxuICAgICAgRmluYWwgU2NvcmVcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmcmFtZXM6IGZyYW1lcyxcbiAgICAgIGN1cnJlbnRGcmFtZTogMSxcbiAgICAgIGN1cnJlbnRCb3dsOiAxLFxuICAgICAgdG90YWxTY29yZTogdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBCb3dsaW5nIEFwcFxuICAgICAgICA8U2NvcmVib2FyZCBmcmFtZXM9e3RoaXMuc3RhdGUuZnJhbWVzfSAvPlxuICAgICAgICA8SW50ZXJmYWNlIGN1cnJlbnRGcmFtZT17dGhpcy5zdGF0ZS5jdXJyZW50RnJhbWV9IGN1cnJlbnRCb3dsPXt0aGlzLnN0YXRlLmN1cnJlbnRCb3dsfS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuXG4iXX0=