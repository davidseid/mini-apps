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
// BowlHandler
// On receiving a click
// update the bowl


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
      console.log(pins);
      // update the bowl
      if (this.state.currentBowl === 1 && pins !== 10) {
        this.setState({
          currentBowl: 2
        });
      } else if (this.state.currentBowl === 1 && pins === 10) {
        this.setState({
          currentFrame: this.state.currentFrame + 1
        });
      } else {

        if (this.state.currentBowl === 2) {

          if (this.state.currentFrame !== 10) {
            this.setState({
              currentBowl: 1,
              currentFrame: this.state.currentFrame + 1
            });
          } else {
            this.setState({
              totalScore: 'game over'
            });
          }
        }
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiRnJhbWUiLCJmcmFtZU51bSIsImJvd2wxIiwiYm93bDIiLCJmcmFtZVNjb3JlIiwiY3VtdWxhdGl2ZVNjb3JlIiwiVGVudGhGcmFtZSIsImJvd2wzIiwiZnJhbWVzIiwiaSIsInB1c2giLCJvcHRpb25zIiwiaiIsIkludGVyZmFjZSIsInByb3BzIiwiY3VycmVudEZyYW1lIiwiY3VycmVudEJvd2wiLCJib3dsSGFuZGxlciIsIkN1cnJlbnRGcmFtZSIsIkN1cnJlbnRCb3dsIiwiS2V5cGFkIiwibWFwIiwib3B0aW9uIiwiT3B0aW9uIiwibnVtIiwiU2NvcmVib2FyZCIsInNsaWNlIiwiZnJhbWUiLCJGcmFtZUNvbXBvbmVudCIsIlRlbnRoRnJhbWVDb21wb25lbnQiLCJGcmFtZU51bSIsIkJvd2xTY29yZSIsImJvd2xOdW0iLCJGcmFtZVNjb3JlIiwiQ3VtdWxhdGl2ZVNjb3JlIiwiRmluYWxTY29yZSIsIkFwcCIsInN0YXRlIiwidG90YWxTY29yZSIsInVuZGVmaW5lZCIsInBpbnMiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDRTs7QUFFRjtBQUNBO0FBQ0U7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNGO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDRjs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQTs7SUFFTUEsSyxHQUNKLGVBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsT0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxPQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLE9BQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsT0FB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QSxhQUFkO0FBR0Q7QUFDRjtBQUNGO0FBQ0Y7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFFRSw0QkFBQyxVQUFELElBQVksUUFBUSxLQUFLRCxLQUFMLENBQVc3QixNQUEvQixHQUZGO0FBR0UsNEJBQUMsU0FBRCxJQUFXLGNBQWMsS0FBSzZCLEtBQUwsQ0FBV3RCLFlBQXBDLEVBQWtELGFBQWEsS0FBS3NCLEtBQUwsQ0FBV3JCLFdBQTFFLEVBQXVGLGFBQWEsS0FBS0MsV0FBTCxDQUFpQjJCLElBQWpCLENBQXNCLElBQXRCLENBQXBHO0FBSEYsT0FERjtBQU9EOzs7O0VBaERlQyxNQUFNQyxTOztBQW9EeEJDLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqKiogQ29tcG9uZW50cyBUbyBCdWlsZCAqKipcblxuLy8gKioqIFVJIENvbXBvbmVudHMgKioqXG4vLyBDdXJyZW50IEJvd2wgQ29tcG9uZW50XG4vLyBQaW4gUXVhbnRpdHkgU2VsZWN0aW9uIENvbXBvbmVudFxuICAvLyBPcHRpb25zIENvbXBvbmVudHMgKDEwKVxuXG4vLyAqKiogU2NvcmVCb2FyZCBDb21wb25lbnRzICoqKlxuLy8gU2NvcmVib2FyZCBDb21wb25lbnRcbiAgLy8gTm9ybWFsIEZyYW1lIENvbXBvbmVudFxuICAgIC8vIEZyYW1lIE51bSBDb21wb25lbnRcbiAgICAvLyBCb3dsIFNjb3JlIENvbXBvbmVudHMgKDIpXG4gICAgLy8gRnJhbWUgU2NvcmUgQ29tcG9uZW50XG4gICAgLy8gQ3VtbXVsYXRpdmUgU2NvcmUgQ29tcG9uZW50XG4gIC8vIDEwdGggRnJhbWUgQ29tcG9uZW50IFxuICAgIC8vIEZyYW1lIE51bSBDb21wb25lbnRcbiAgICAvLyBCb3dsIFNjb3JlIENvbXBvbmVudHMgKDMpXG4gICAgLy8gRnJhbWUgU2NvcmUgQ29tcG9uZW50XG4gICAgLy8gQ3VtbXVsYXRpdmUgU2NvcmUgQ29tcG9uZW50XG4gIC8vIEZpbmFsIFNjb3JlIENvbXBvbmVudFxuXG4vLyAqKiogTW9kZWwgRGF0YSBTdHJ1Y3R1cmUgSWRlYXMgKioqXG5cbi8vIFRyYWNrIEZyYW1lc1xuLy8gRWFjaCBmcmFtZSBzaG91bGQgaGF2ZSB1cCB0byB0aHJlZSBib3dsc1xuLy8gZWFjaCBmcmFtZSBzaG91bGQgaGF2ZSBmcmFtZSBzY29yZSwgY3VtbXVsYXRpdmUgc2NvcmUgdXAgdG8gdGhhdCBwb2ludFxuLy8gZWFjaCBmcmFtZSBzaG91bGQgYmUgYWJsZSB0byBsb29rIGJhY2sgYXQgdGhlIGZyYW1lcyBiZWZvcmUgaXQgXG5cbi8vIE1ha2UgYW4gYXJyYXkgY29udGFpbmluZyBub3JtYWwgZnJhbWUgb2JqZWN0cyBhbmQgYSAxMHRoIGZyYW1lIG9iamVjdCBhdCB0aGUgZW5kXG4vLyBub3JtYWwgZnJhbWUgb2JqZWN0cyBoYXZlOiBmcmFtZW51bSwgYm93bDEgYW5kIGJvd2wyIHByb3BlcnRpZXMsIGZyYW1lc2NvcmUgcHJvcCwgYW5kIGN1bXVsYXRpdmUgc2NvcmUgcHJvcFxuXG4vL1RPIERPOlxuLy8gQm93bEhhbmRsZXJcbi8vIE9uIHJlY2VpdmluZyBhIGNsaWNrXG4vLyB1cGRhdGUgdGhlIGJvd2xcblxuXG5cbi8vKioqIEluaXRpYWxpemUgRnJhbWVzIERhdGEgU3RydWN0dXJlICoqKlxuXG5jbGFzcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKGZyYW1lTnVtKSB7XG4gICAgdGhpcy5mcmFtZU51bSA9IGZyYW1lTnVtO1xuICAgIHRoaXMuYm93bDEgPSAwO1xuICAgIHRoaXMuYm93bDIgPSAwO1xuICAgIHRoaXMuZnJhbWVTY29yZSA9IDA7XG4gICAgdGhpcy5jdW11bGF0aXZlU2NvcmUgPSAwO1xuICB9XG59XG5cbmNsYXNzIFRlbnRoRnJhbWUgZXh0ZW5kcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5mcmFtZU51bSA9IDEwO1xuICAgIHRoaXMuYm93bDMgPSAwO1xuICB9XG59XG5cbnZhciBmcmFtZXMgPSBbXTtcbmZvciAodmFyIGkgPSAxOyBpIDwgMTA7IGkrKykge1xuICBmcmFtZXMucHVzaChuZXcgRnJhbWUoaSkpXG59XG5mcmFtZXMucHVzaChuZXcgVGVudGhGcmFtZSgpKTtcblxudmFyIG9wdGlvbnMgPSBbXTtcbmZvciAodmFyIGogPSAxOyBqIDwgMTE7IGorKykge1xuICBvcHRpb25zLnB1c2goaik7XG59XG5cblxuLy8gKioqIEJ1aWxkIENvbXBvbmVudHMgU2tlbGV0b24gKioqXG5cbi8vIFVJIEludGVyZmFjZSBDb21wb25lbnRcbnZhciBJbnRlcmZhY2UgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiaW50ZXJmYWNlXCI+XG4gICAgICA8Q3VycmVudEZyYW1lIGN1cnJlbnRGcmFtZT17cHJvcHMuY3VycmVudEZyYW1lfS8+XG4gICAgICA8Q3VycmVudEJvd2wgY3VycmVudEJvd2w9e3Byb3BzLmN1cnJlbnRCb3dsfS8+XG4gICAgICA8S2V5cGFkIGJvd2xIYW5kbGVyPXtwcm9wcy5ib3dsSGFuZGxlcn0vPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEN1cnJlbnQgRnJhbWUgQ29tcG9uZW50XG52YXIgQ3VycmVudEZyYW1lID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtZnJhbWVcIj5cbiAgICAgIEZyYW1lIE51bWJlcjoge3Byb3BzLmN1cnJlbnRGcmFtZX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuLy8gQ3VycmVudCBCb3dsIENvbXBvbmVudFxudmFyIEN1cnJlbnRCb3dsID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtYm93bFwiPlxuICAgICAgQm93bCBOdW1iZXI6IHtwcm9wcy5jdXJyZW50Qm93bH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuLy8gS2V5cGFkIENvbXBvbmVudFxudmFyIEtleXBhZCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJrZXlwYWRcIj5cbiAgICAgIFBpbnMgdG8gSGl0OiBcbiAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiA8T3B0aW9uIG51bT17b3B0aW9ufSBib3dsSGFuZGxlcj17cHJvcHMuYm93bEhhbmRsZXJ9IC8+XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuLy8gT3B0aW9uIENvbXBvbmVudFxudmFyIE9wdGlvbiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJvcHRpb25cIiBvbkNsaWNrPXsoKSA9PiB7cHJvcHMuYm93bEhhbmRsZXIocHJvcHMubnVtKX19ID5cbiAgICA8YnV0dG9uPntwcm9wcy5udW19PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gU2NvcmVib2FyZFxudmFyIFNjb3JlYm9hcmQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwic2NvcmVib2FyZFwiPlxuICAgICAgU2NvcmVib2FyZFxuICAgICAge3Byb3BzLmZyYW1lcy5zbGljZSgwLCA5KS5tYXAoKGZyYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiA8RnJhbWVDb21wb25lbnQgZnJhbWVOdW09e2ZyYW1lLmZyYW1lTnVtfS8+XG4gICAgICB9KX1cbiAgICAgIDxUZW50aEZyYW1lQ29tcG9uZW50IGZyYW1lTnVtPXtmcmFtZXNbOV0uZnJhbWVOdW19IC8+XG4gICAgICA8RmluYWxTY29yZSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEZyYW1lXG52YXIgRnJhbWVDb21wb25lbnQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiZnJhbWVcIj5cbiAgICAgIDxGcmFtZU51bSBmcmFtZU51bT17cHJvcHMuZnJhbWVOdW19Lz5cbiAgICAgIDxCb3dsU2NvcmUgYm93bE51bT17MX0gLz5cbiAgICAgIDxCb3dsU2NvcmUgYm93bE51bT17Mn0gLz5cbiAgICAgIDxGcmFtZVNjb3JlIC8+XG4gICAgICA8Q3VtdWxhdGl2ZVNjb3JlIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gVGVudGggRnJhbWVcbnZhciBUZW50aEZyYW1lQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cInRlbnRoLWZyYW1lXCI+IFxuICAgICAgPEZyYW1lTnVtIGZyYW1lTnVtPXtwcm9wcy5mcmFtZU51bX0vPlxuICAgICAgPEJvd2xTY29yZSBib3dsTnVtPXsxfSAvPlxuICAgICAgPEJvd2xTY29yZSBib3dsTnVtPXsyfSAvPlxuICAgICAgPEJvd2xTY29yZSBib3dsTnVtPXszfSAvPlxuICAgICAgPEZyYW1lU2NvcmUgLz5cbiAgICAgIDxDdW11bGF0aXZlU2NvcmUgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBGcmFtZSBOdW1cbnZhciBGcmFtZU51bSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmcmFtZS1udW1cIj5cbiAgICAgIEZyYW1lIHtwcm9wcy5mcmFtZU51bX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBCb3dsIFNjb3JlIFxudmFyIEJvd2xTY29yZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJib3dsLXNjb3JlXCI+XG4gICAgICBCb3dsIHtwcm9wcy5ib3dsTnVtfTpcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBGcmFtZSBTY29yZVxudmFyIEZyYW1lU2NvcmUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImZyYW1lLXNjb3JlXCI+XG4gICAgICBGcmFtZSBTY29yZTogXG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gQ3VtdWxhdGl2ZSBTY29yZVxudmFyIEN1bXVsYXRpdmVTY29yZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiY3VtdWxhdGl2ZS1zY29yZVwiPlxuICAgICAgQ3VtdWxhdGl2ZSBTY29yZTpcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBGaW5hbCBTY29yZVxudmFyIEZpbmFsU2NvcmUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImZpbmFsLXNjb3JlXCI+XG4gICAgICBGaW5hbCBTY29yZVxuICAgIDwvZGl2PlxuICApXG59XG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZyYW1lczogZnJhbWVzLFxuICAgICAgY3VycmVudEZyYW1lOiAxLFxuICAgICAgY3VycmVudEJvd2w6IDEsXG4gICAgICB0b3RhbFNjb3JlOiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICBib3dsSGFuZGxlcihwaW5zKSB7XG4gICAgY29uc29sZS5sb2cocGlucylcbiAgICAvLyB1cGRhdGUgdGhlIGJvd2xcbiAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMSAmJiBwaW5zICE9PSAxMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnRCb3dsOiAyXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMSAmJiBwaW5zID09PSAxMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnRGcmFtZTogKHRoaXMuc3RhdGUuY3VycmVudEZyYW1lICsgMSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcblxuICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudEJvd2wgPT09IDIpIHtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUgIT09IDEwKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50Qm93bDogMSxcbiAgICAgICAgICAgIGN1cnJlbnRGcmFtZTogKHRoaXMuc3RhdGUuY3VycmVudEZyYW1lICsgMSlcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdG90YWxTY29yZTogJ2dhbWUgb3ZlcidcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBCb3dsaW5nIEFwcFxuICAgICAgICA8U2NvcmVib2FyZCBmcmFtZXM9e3RoaXMuc3RhdGUuZnJhbWVzfSAvPlxuICAgICAgICA8SW50ZXJmYWNlIGN1cnJlbnRGcmFtZT17dGhpcy5zdGF0ZS5jdXJyZW50RnJhbWV9IGN1cnJlbnRCb3dsPXt0aGlzLnN0YXRlLmN1cnJlbnRCb3dsfSBib3dsSGFuZGxlcj17dGhpcy5ib3dsSGFuZGxlci5iaW5kKHRoaXMpfS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuXG4iXX0=