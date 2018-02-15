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
// Set up click listener on buttons
// on the click, bubble up to a function on the app which
// handles bowls


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
    React.createElement(Keypad, { bowlHandler: props.bowlHandler })
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
var Keypad = function Keypad(props) {
  return React.createElement(
    "div",
    { "class": "keypad" },
    "Pins to Hit:",
    options.map(function (option) {
      return React.createElement(Option, { num: option, bowlHandler: props.bowlHandler });
    })
  );
};
// Option Component
var Option = function Option(props) {
  return React.createElement(
    "div",
    { "class": "option", onClick: function onClick() {
        props.bowlHandler(props.num);
      } },
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
    key: "bowlHandler",
    value: function bowlHandler(pins) {
      console.log('hi');
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "Bowling App",
        React.createElement(Scoreboard, { frames: this.state.frames }),
        React.createElement(Interface, { currentFrame: this.state.currentFrame, currentBowl: this.state.currentBowl, bowlHandler: this.bowlHandler.bind(this) })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiRnJhbWUiLCJmcmFtZU51bSIsImJvd2wxIiwiYm93bDIiLCJmcmFtZVNjb3JlIiwiY3VtdWxhdGl2ZVNjb3JlIiwiVGVudGhGcmFtZSIsImJvd2wzIiwiZnJhbWVzIiwiaSIsInB1c2giLCJvcHRpb25zIiwiaiIsIkludGVyZmFjZSIsInByb3BzIiwiY3VycmVudEZyYW1lIiwiY3VycmVudEJvd2wiLCJib3dsSGFuZGxlciIsIkN1cnJlbnRGcmFtZSIsIkN1cnJlbnRCb3dsIiwiS2V5cGFkIiwibWFwIiwib3B0aW9uIiwiT3B0aW9uIiwibnVtIiwiU2NvcmVib2FyZCIsInNsaWNlIiwiZnJhbWUiLCJGcmFtZUNvbXBvbmVudCIsIlRlbnRoRnJhbWVDb21wb25lbnQiLCJGcmFtZU51bSIsIkJvd2xTY29yZSIsImJvd2xOdW0iLCJGcmFtZVNjb3JlIiwiQ3VtdWxhdGl2ZVNjb3JlIiwiRmluYWxTY29yZSIsIkFwcCIsInN0YXRlIiwidG90YWxTY29yZSIsInVuZGVmaW5lZCIsInBpbnMiLCJjb25zb2xlIiwibG9nIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0U7O0FBRUY7QUFDQTtBQUNFO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDRjtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Y7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBSUE7O0lBRU1BLEssR0FDSixlQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLE9BQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsT0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxPQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLE9BQUtDLFVBQUwsR0FB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QVg7QUFBQTtBQUFBLEdBREY7QUFLRCxDQU5EOztBQVFBO0FBQ0EsSUFBSUMsYUFBYSxTQUFiQSxVQUFhLEdBQU07QUFDckIsU0FDRTtBQUFBO0FBQUEsTUFBSyxTQUFNLGFBQVg7QUFBQTtBQUFBLEdBREY7QUFLRCxDQU5EOztJQVNNQyxHOzs7QUFDSixlQUFZdEIsS0FBWixFQUFtQjtBQUFBOztBQUFBLDJHQUNYQSxLQURXOztBQUVqQixXQUFLdUIsS0FBTCxHQUFhO0FBQ1g3QixjQUFRQSxNQURHO0FBRVhPLG9CQUFjLENBRkg7QUFHWEMsbUJBQWEsQ0FIRjtBQUlYc0Isa0JBQVlDO0FBSkQsS0FBYjtBQUZpQjtBQVFsQjs7OztnQ0FFV0MsSSxFQUFNO0FBQ2hCQyxjQUFRQyxHQUFSLENBQVksSUFBWjtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUFBO0FBRUUsNEJBQUMsVUFBRCxJQUFZLFFBQVEsS0FBS0wsS0FBTCxDQUFXN0IsTUFBL0IsR0FGRjtBQUdFLDRCQUFDLFNBQUQsSUFBVyxjQUFjLEtBQUs2QixLQUFMLENBQVd0QixZQUFwQyxFQUFrRCxhQUFhLEtBQUtzQixLQUFMLENBQVdyQixXQUExRSxFQUF1RixhQUFhLEtBQUtDLFdBQUwsQ0FBaUIwQixJQUFqQixDQUFzQixJQUF0QixDQUFwRztBQUhGLE9BREY7QUFPRDs7OztFQXZCZUMsTUFBTUMsUzs7QUEyQnhCQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKioqIENvbXBvbmVudHMgVG8gQnVpbGQgKioqXG5cbi8vICoqKiBVSSBDb21wb25lbnRzICoqKlxuLy8gQ3VycmVudCBCb3dsIENvbXBvbmVudFxuLy8gUGluIFF1YW50aXR5IFNlbGVjdGlvbiBDb21wb25lbnRcbiAgLy8gT3B0aW9ucyBDb21wb25lbnRzICgxMClcblxuLy8gKioqIFNjb3JlQm9hcmQgQ29tcG9uZW50cyAqKipcbi8vIFNjb3JlYm9hcmQgQ29tcG9uZW50XG4gIC8vIE5vcm1hbCBGcmFtZSBDb21wb25lbnRcbiAgICAvLyBGcmFtZSBOdW0gQ29tcG9uZW50XG4gICAgLy8gQm93bCBTY29yZSBDb21wb25lbnRzICgyKVxuICAgIC8vIEZyYW1lIFNjb3JlIENvbXBvbmVudFxuICAgIC8vIEN1bW11bGF0aXZlIFNjb3JlIENvbXBvbmVudFxuICAvLyAxMHRoIEZyYW1lIENvbXBvbmVudCBcbiAgICAvLyBGcmFtZSBOdW0gQ29tcG9uZW50XG4gICAgLy8gQm93bCBTY29yZSBDb21wb25lbnRzICgzKVxuICAgIC8vIEZyYW1lIFNjb3JlIENvbXBvbmVudFxuICAgIC8vIEN1bW11bGF0aXZlIFNjb3JlIENvbXBvbmVudFxuICAvLyBGaW5hbCBTY29yZSBDb21wb25lbnRcblxuLy8gKioqIE1vZGVsIERhdGEgU3RydWN0dXJlIElkZWFzICoqKlxuXG4vLyBUcmFjayBGcmFtZXNcbi8vIEVhY2ggZnJhbWUgc2hvdWxkIGhhdmUgdXAgdG8gdGhyZWUgYm93bHNcbi8vIGVhY2ggZnJhbWUgc2hvdWxkIGhhdmUgZnJhbWUgc2NvcmUsIGN1bW11bGF0aXZlIHNjb3JlIHVwIHRvIHRoYXQgcG9pbnRcbi8vIGVhY2ggZnJhbWUgc2hvdWxkIGJlIGFibGUgdG8gbG9vayBiYWNrIGF0IHRoZSBmcmFtZXMgYmVmb3JlIGl0IFxuXG4vLyBNYWtlIGFuIGFycmF5IGNvbnRhaW5pbmcgbm9ybWFsIGZyYW1lIG9iamVjdHMgYW5kIGEgMTB0aCBmcmFtZSBvYmplY3QgYXQgdGhlIGVuZFxuLy8gbm9ybWFsIGZyYW1lIG9iamVjdHMgaGF2ZTogZnJhbWVudW0sIGJvd2wxIGFuZCBib3dsMiBwcm9wZXJ0aWVzLCBmcmFtZXNjb3JlIHByb3AsIGFuZCBjdW11bGF0aXZlIHNjb3JlIHByb3BcblxuLy9UTyBETzpcbi8vIFNldCB1cCBjbGljayBsaXN0ZW5lciBvbiBidXR0b25zXG4vLyBvbiB0aGUgY2xpY2ssIGJ1YmJsZSB1cCB0byBhIGZ1bmN0aW9uIG9uIHRoZSBhcHAgd2hpY2hcbi8vIGhhbmRsZXMgYm93bHNcblxuXG5cbi8vKioqIEluaXRpYWxpemUgRnJhbWVzIERhdGEgU3RydWN0dXJlICoqKlxuXG5jbGFzcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKGZyYW1lTnVtKSB7XG4gICAgdGhpcy5mcmFtZU51bSA9IGZyYW1lTnVtO1xuICAgIHRoaXMuYm93bDEgPSAwO1xuICAgIHRoaXMuYm93bDIgPSAwO1xuICAgIHRoaXMuZnJhbWVTY29yZSA9IDA7XG4gICAgdGhpcy5jdW11bGF0aXZlU2NvcmUgPSAwO1xuICB9XG59XG5cbmNsYXNzIFRlbnRoRnJhbWUgZXh0ZW5kcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5mcmFtZU51bSA9IDEwO1xuICAgIHRoaXMuYm93bDMgPSAwO1xuICB9XG59XG5cbnZhciBmcmFtZXMgPSBbXTtcbmZvciAodmFyIGkgPSAxOyBpIDwgMTA7IGkrKykge1xuICBmcmFtZXMucHVzaChuZXcgRnJhbWUoaSkpXG59XG5mcmFtZXMucHVzaChuZXcgVGVudGhGcmFtZSgpKTtcblxudmFyIG9wdGlvbnMgPSBbXTtcbmZvciAodmFyIGogPSAxOyBqIDwgMTE7IGorKykge1xuICBvcHRpb25zLnB1c2goaik7XG59XG5cblxuLy8gKioqIEJ1aWxkIENvbXBvbmVudHMgU2tlbGV0b24gKioqXG5cbi8vIFVJIEludGVyZmFjZSBDb21wb25lbnRcbnZhciBJbnRlcmZhY2UgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiaW50ZXJmYWNlXCI+XG4gICAgICA8Q3VycmVudEZyYW1lIGN1cnJlbnRGcmFtZT17cHJvcHMuY3VycmVudEZyYW1lfS8+XG4gICAgICA8Q3VycmVudEJvd2wgY3VycmVudEJvd2w9e3Byb3BzLmN1cnJlbnRCb3dsfS8+XG4gICAgICA8S2V5cGFkIGJvd2xIYW5kbGVyPXtwcm9wcy5ib3dsSGFuZGxlcn0vPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEN1cnJlbnQgRnJhbWUgQ29tcG9uZW50XG52YXIgQ3VycmVudEZyYW1lID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtZnJhbWVcIj5cbiAgICAgIEZyYW1lIE51bWJlcjoge3Byb3BzLmN1cnJlbnRGcmFtZX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuLy8gQ3VycmVudCBCb3dsIENvbXBvbmVudFxudmFyIEN1cnJlbnRCb3dsID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtYm93bFwiPlxuICAgICAgQm93bCBOdW1iZXI6IHtwcm9wcy5jdXJyZW50Qm93bH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuLy8gS2V5cGFkIENvbXBvbmVudFxudmFyIEtleXBhZCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJrZXlwYWRcIj5cbiAgICAgIFBpbnMgdG8gSGl0OiBcbiAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiA8T3B0aW9uIG51bT17b3B0aW9ufSBib3dsSGFuZGxlcj17cHJvcHMuYm93bEhhbmRsZXJ9IC8+XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuLy8gT3B0aW9uIENvbXBvbmVudFxudmFyIE9wdGlvbiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJvcHRpb25cIiBvbkNsaWNrPXsoKSA9PiB7cHJvcHMuYm93bEhhbmRsZXIocHJvcHMubnVtKX19ID5cbiAgICA8YnV0dG9uPntwcm9wcy5udW19PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gU2NvcmVib2FyZFxudmFyIFNjb3JlYm9hcmQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwic2NvcmVib2FyZFwiPlxuICAgICAgU2NvcmVib2FyZFxuICAgICAge3Byb3BzLmZyYW1lcy5zbGljZSgwLCA5KS5tYXAoKGZyYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiA8RnJhbWVDb21wb25lbnQgZnJhbWVOdW09e2ZyYW1lLmZyYW1lTnVtfS8+XG4gICAgICB9KX1cbiAgICAgIDxUZW50aEZyYW1lQ29tcG9uZW50IGZyYW1lTnVtPXtmcmFtZXNbOV0uZnJhbWVOdW19IC8+XG4gICAgICA8RmluYWxTY29yZSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEZyYW1lXG52YXIgRnJhbWVDb21wb25lbnQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiZnJhbWVcIj5cbiAgICAgIDxGcmFtZU51bSBmcmFtZU51bT17cHJvcHMuZnJhbWVOdW19Lz5cbiAgICAgIDxCb3dsU2NvcmUgYm93bE51bT17MX0gLz5cbiAgICAgIDxCb3dsU2NvcmUgYm93bE51bT17Mn0gLz5cbiAgICAgIDxGcmFtZVNjb3JlIC8+XG4gICAgICA8Q3VtdWxhdGl2ZVNjb3JlIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gVGVudGggRnJhbWVcbnZhciBUZW50aEZyYW1lQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cInRlbnRoLWZyYW1lXCI+IFxuICAgICAgPEZyYW1lTnVtIGZyYW1lTnVtPXtwcm9wcy5mcmFtZU51bX0vPlxuICAgICAgPEJvd2xTY29yZSBib3dsTnVtPXsxfSAvPlxuICAgICAgPEJvd2xTY29yZSBib3dsTnVtPXsyfSAvPlxuICAgICAgPEJvd2xTY29yZSBib3dsTnVtPXszfSAvPlxuICAgICAgPEZyYW1lU2NvcmUgLz5cbiAgICAgIDxDdW11bGF0aXZlU2NvcmUgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBGcmFtZSBOdW1cbnZhciBGcmFtZU51bSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmcmFtZS1udW1cIj5cbiAgICAgIEZyYW1lIHtwcm9wcy5mcmFtZU51bX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBCb3dsIFNjb3JlIFxudmFyIEJvd2xTY29yZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJib3dsLXNjb3JlXCI+XG4gICAgICBCb3dsIHtwcm9wcy5ib3dsTnVtfTpcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBGcmFtZSBTY29yZVxudmFyIEZyYW1lU2NvcmUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImZyYW1lLXNjb3JlXCI+XG4gICAgICBGcmFtZSBTY29yZTogXG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gQ3VtdWxhdGl2ZSBTY29yZVxudmFyIEN1bXVsYXRpdmVTY29yZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiY3VtdWxhdGl2ZS1zY29yZVwiPlxuICAgICAgQ3VtdWxhdGl2ZSBTY29yZTpcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBGaW5hbCBTY29yZVxudmFyIEZpbmFsU2NvcmUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImZpbmFsLXNjb3JlXCI+XG4gICAgICBGaW5hbCBTY29yZVxuICAgIDwvZGl2PlxuICApXG59XG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZyYW1lczogZnJhbWVzLFxuICAgICAgY3VycmVudEZyYW1lOiAxLFxuICAgICAgY3VycmVudEJvd2w6IDEsXG4gICAgICB0b3RhbFNjb3JlOiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICBib3dsSGFuZGxlcihwaW5zKSB7XG4gICAgY29uc29sZS5sb2coJ2hpJyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIEJvd2xpbmcgQXBwXG4gICAgICAgIDxTY29yZWJvYXJkIGZyYW1lcz17dGhpcy5zdGF0ZS5mcmFtZXN9IC8+XG4gICAgICAgIDxJbnRlcmZhY2UgY3VycmVudEZyYW1lPXt0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZX0gY3VycmVudEJvd2w9e3RoaXMuc3RhdGUuY3VycmVudEJvd2x9IGJvd2xIYW5kbGVyPXt0aGlzLmJvd2xIYW5kbGVyLmJpbmQodGhpcyl9Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG5cbiJdfQ==