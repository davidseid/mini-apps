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
// Forgot about remaining pins!!!


//*** Initialize Frames Data Structure ***

var Frame = function Frame(frameNum) {
  _classCallCheck(this, Frame);

  this.frameNum = frameNum;
  this.bowl1 = null;
  this.bowl2 = null;
  this.frameScore = null;
  this.cumulativeScore = null;
};

var TenthFrame = function (_Frame) {
  _inherits(TenthFrame, _Frame);

  function TenthFrame() {
    _classCallCheck(this, TenthFrame);

    var _this = _possibleConstructorReturn(this, (TenthFrame.__proto__ || Object.getPrototypeOf(TenthFrame)).call(this));

    _this.frameNum = 10;
    _this.bowl3 = null;
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
    "Frame: ",
    props.currentFrame
  );
};
// Current Bowl Component
var CurrentBowl = function CurrentBowl(props) {
  return React.createElement(
    "div",
    { "class": "current-bowl" },
    "Bowl: ",
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
    props.frames.slice(0, 9).map(function (frame) {
      return React.createElement(FrameComponent, { frameNum: frame.frameNum, frame: frame });
    }),
    React.createElement(TenthFrameComponent, { frameNum: frames[9].frameNum, frame: frames[9] }),
    React.createElement(FinalScore, null)
  );
};

// Frame
var FrameComponent = function FrameComponent(props) {
  return React.createElement(
    "div",
    { "class": "frame" },
    React.createElement(FrameNum, { frameNum: props.frameNum }),
    React.createElement(BowlScore, { bowlNum: 1, score: props.frame.bowl1 }),
    React.createElement(BowlScore, { bowlNum: 2, score: props.frame.bowl2 }),
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
    React.createElement(BowlScore, { bowlNum: 1, score: props.frame.bowl1 }),
    React.createElement(BowlScore, { bowlNum: 2, score: props.frame.bowl2 }),
    React.createElement(BowlScore, { bowlNum: 3, score: props.frame.bowl3 }),
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
    props.score
  );
};

// Frame Score
var FrameScore = function FrameScore() {
  return React.createElement(
    "div",
    { "class": "frame-score" },
    "Frame:"
  );
};

// Cumulative Score
var CumulativeScore = function CumulativeScore() {
  return React.createElement(
    "div",
    { "class": "cumulative-score" },
    "Cumulative:"
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
      if (this.state.totalScore === undefined) {

        // if it is the second bowl
        // if the pins is <= 10 - pins from the first bowl... proceed

        //       if (this.state.currentBowl === 2) {
        //   // find the result of the prevous bowl
        //   // get the frame from frames at index currentFrame -1
        //   var thisFrame = this.state.frames[this.state.currentFrame - 1];
        //   var firstBowl = thisFrame.bowl1;

        //   if (pins <= (10 - firstBowl)) {
        //     // put all my logic here
        //   }
        // }


        // insted of changing this in my game logic, just remove the buttons!
        // on state, keep my all options there
        // on state, keep my current options as a subset
        // only render my current options
        // in my game logic, if my bowl is 1, change current options to 10 - pins
        // if my bowl is 2, change current options to options 


        var newFrames = this.state.frames;
        for (var i = 0; i < newFrames.length; i++) {
          var frame = newFrames[i];
          if (frame.frameNum === this.state.currentFrame) {
            if (this.state.currentBowl === 1) {
              frame.bowl1 = pins;
            } else if (this.state.currentBowl === 2) {
              frame.bowl2 = pins;
            } else if (this.state.currentBowl === 3) {
              frame.bowl3 = pins;
            }
          }
        }

        this.setState({
          frames: newFrames
        });
      }

      // Game Logic
      if (this.state.currentFrame !== 10) {
        if (this.state.currentBowl === 1) {
          if (pins === 10) {
            this.setState({
              currentFrame: this.state.currentFrame + 1
            });
          } else {
            this.setState({
              currentBowl: this.state.currentBowl + 1
            });
          }
        } else if (this.state.currentBowl === 2) {
          this.setState({
            currentBowl: this.state.currentBowl - 1,
            currentFrame: this.state.currentFrame + 1
          });
        }
      } else if (this.state.currentFrame === 10) {
        if (this.state.currentBowl === 3) {
          this.setState({
            totalScore: 'game over'
          });
        } else if (this.state.currentBowl === 1) {
          this.setState({
            currentBowl: this.state.currentBowl + 1
          });
        } else if (this.state.currentBowl === 2 && pins === 10) {
          this.setState({
            currentBowl: this.state.currentBowl + 1
          });
        } else if (this.state.currentBowl === 2 && pins !== 10) {
          this.setState({
            totalScore: 'game over'
          });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiRnJhbWUiLCJmcmFtZU51bSIsImJvd2wxIiwiYm93bDIiLCJmcmFtZVNjb3JlIiwiY3VtdWxhdGl2ZVNjb3JlIiwiVGVudGhGcmFtZSIsImJvd2wzIiwiZnJhbWVzIiwiaSIsInB1c2giLCJvcHRpb25zIiwiaiIsIkludGVyZmFjZSIsInByb3BzIiwiY3VycmVudEZyYW1lIiwiY3VycmVudEJvd2wiLCJib3dsSGFuZGxlciIsIkN1cnJlbnRGcmFtZSIsIkN1cnJlbnRCb3dsIiwiS2V5cGFkIiwibWFwIiwib3B0aW9uIiwiT3B0aW9uIiwibnVtIiwiU2NvcmVib2FyZCIsInNsaWNlIiwiZnJhbWUiLCJGcmFtZUNvbXBvbmVudCIsIlRlbnRoRnJhbWVDb21wb25lbnQiLCJGcmFtZU51bSIsIkJvd2xTY29yZSIsInNjb3JlIiwiRnJhbWVTY29yZSIsIkN1bXVsYXRpdmVTY29yZSIsIkZpbmFsU2NvcmUiLCJBcHAiLCJzdGF0ZSIsInRvdGFsU2NvcmUiLCJ1bmRlZmluZWQiLCJwaW5zIiwibmV3RnJhbWVzIiwibGVuZ3RoIiwic2V0U3RhdGUiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDRTs7QUFFRjtBQUNBO0FBQ0U7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNGO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDRjs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztJQUVNQSxLLEdBQ0osZUFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixPQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLE9BQUtDLEtBQUwsR0FBYSxJQUFiO0FBQ0EsT0FBS0MsS0FBTCxHQUFhLElBQWI7QUFDQSxPQUFLQyxVQUFM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Q29tcG9uZW50cyBUbyBCdWlsZCAqKipcblxuLy8gKioqIFVJIENvbXBvbmVudHMgKioqXG4vLyBDdXJyZW50IEJvd2wgQ29tcG9uZW50XG4vLyBQaW4gUXVhbnRpdHkgU2VsZWN0aW9uIENvbXBvbmVudFxuICAvLyBPcHRpb25zIENvbXBvbmVudHMgKDEwKVxuXG4vLyAqKiogU2NvcmVCb2FyZCBDb21wb25lbnRzICoqKlxuLy8gU2NvcmVib2FyZCBDb21wb25lbnRcbiAgLy8gTm9ybWFsIEZyYW1lIENvbXBvbmVudFxuICAgIC8vIEZyYW1lIE51bSBDb21wb25lbnRcbiAgICAvLyBCb3dsIFNjb3JlIENvbXBvbmVudHMgKDIpXG4gICAgLy8gRnJhbWUgU2NvcmUgQ29tcG9uZW50XG4gICAgLy8gQ3VtbXVsYXRpdmUgU2NvcmUgQ29tcG9uZW50XG4gIC8vIDEwdGggRnJhbWUgQ29tcG9uZW50IFxuICAgIC8vIEZyYW1lIE51bSBDb21wb25lbnRcbiAgICAvLyBCb3dsIFNjb3JlIENvbXBvbmVudHMgKDMpXG4gICAgLy8gRnJhbWUgU2NvcmUgQ29tcG9uZW50XG4gICAgLy8gQ3VtbXVsYXRpdmUgU2NvcmUgQ29tcG9uZW50XG4gIC8vIEZpbmFsIFNjb3JlIENvbXBvbmVudFxuXG4vLyAqKiogTW9kZWwgRGF0YSBTdHJ1Y3R1cmUgSWRlYXMgKioqXG5cbi8vIFRyYWNrIEZyYW1lc1xuLy8gRWFjaCBmcmFtZSBzaG91bGQgaGF2ZSB1cCB0byB0aHJlZSBib3dsc1xuLy8gZWFjaCBmcmFtZSBzaG91bGQgaGF2ZSBmcmFtZSBzY29yZSwgY3VtbXVsYXRpdmUgc2NvcmUgdXAgdG8gdGhhdCBwb2ludFxuLy8gZWFjaCBmcmFtZSBzaG91bGQgYmUgYWJsZSB0byBsb29rIGJhY2sgYXQgdGhlIGZyYW1lcyBiZWZvcmUgaXQgXG5cbi8vIE1ha2UgYW4gYXJyYXkgY29udGFpbmluZyBub3JtYWwgZnJhbWUgb2JqZWN0cyBhbmQgYSAxMHRoIGZyYW1lIG9iamVjdCBhdCB0aGUgZW5kXG4vLyBub3JtYWwgZnJhbWUgb2JqZWN0cyBoYXZlOiBmcmFtZW51bSwgYm93bDEgYW5kIGJvd2wyIHByb3BlcnRpZXMsIGZyYW1lc2NvcmUgcHJvcCwgYW5kIGN1bXVsYXRpdmUgc2NvcmUgcHJvcFxuXG4vL1RPIERPOlxuLy8gRm9yZ290IGFib3V0IHJlbWFpbmluZyBwaW5zISEhXG5cblxuLy8qKiogSW5pdGlhbGl6ZSBGcmFtZXMgRGF0YSBTdHJ1Y3R1cmUgKioqXG5cbmNsYXNzIEZyYW1lIHtcbiAgY29uc3RydWN0b3IoZnJhbWVOdW0pIHtcbiAgICB0aGlzLmZyYW1lTnVtID0gZnJhbWVOdW07XG4gICAgdGhpcy5ib3dsMSA9IG51bGw7XG4gICAgdGhpcy5ib3dsMiA9IG51bGw7XG4gICAgdGhpcy5mcmFtZVNjb3JlID0gbnVsbDtcbiAgICB0aGlzLmN1bXVsYXRpdmVTY29yZSA9IG51bGw7XG4gIH1cbn1cblxuY2xhc3MgVGVudGhGcmFtZSBleHRlbmRzIEZyYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmZyYW1lTnVtID0gMTA7XG4gICAgdGhpcy5ib3dsMyA9IG51bGw7XG4gIH1cbn1cblxudmFyIGZyYW1lcyA9IFtdO1xuZm9yICh2YXIgaSA9IDE7IGkgPCAxMDsgaSsrKSB7XG4gIGZyYW1lcy5wdXNoKG5ldyBGcmFtZShpKSlcbn1cbmZyYW1lcy5wdXNoKG5ldyBUZW50aEZyYW1lKCkpO1xuXG52YXIgb3B0aW9ucyA9IFtdO1xuZm9yICh2YXIgaiA9IDE7IGogPCAxMTsgaisrKSB7XG4gIG9wdGlvbnMucHVzaChqKTtcbn1cblxuXG4vLyAqKiogQnVpbGQgQ29tcG9uZW50cyBTa2VsZXRvbiAqKipcblxuLy8gVUkgSW50ZXJmYWNlIENvbXBvbmVudFxudmFyIEludGVyZmFjZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJpbnRlcmZhY2VcIj5cbiAgICAgIDxDdXJyZW50RnJhbWUgY3VycmVudEZyYW1lPXtwcm9wcy5jdXJyZW50RnJhbWV9Lz5cbiAgICAgIDxDdXJyZW50Qm93bCBjdXJyZW50Qm93bD17cHJvcHMuY3VycmVudEJvd2x9Lz5cbiAgICAgIDxLZXlwYWQgYm93bEhhbmRsZXI9e3Byb3BzLmJvd2xIYW5kbGVyfS8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gQ3VycmVudCBGcmFtZSBDb21wb25lbnRcbnZhciBDdXJyZW50RnJhbWUgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1mcmFtZVwiPlxuICAgICAgRnJhbWU6IHtwcm9wcy5jdXJyZW50RnJhbWV9XG4gICAgPC9kaXY+XG4gIClcbn1cbi8vIEN1cnJlbnQgQm93bCBDb21wb25lbnRcbnZhciBDdXJyZW50Qm93bCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LWJvd2xcIj5cbiAgICAgIEJvd2w6IHtwcm9wcy5jdXJyZW50Qm93bH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuLy8gS2V5cGFkIENvbXBvbmVudFxudmFyIEtleXBhZCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJrZXlwYWRcIj5cbiAgICAgIFBpbnMgdG8gSGl0OiBcbiAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiA8T3B0aW9uIG51bT17b3B0aW9ufSBib3dsSGFuZGxlcj17cHJvcHMuYm93bEhhbmRsZXJ9IC8+XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuLy8gT3B0aW9uIENvbXBvbmVudFxudmFyIE9wdGlvbiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJvcHRpb25cIiBvbkNsaWNrPXsoKSA9PiB7cHJvcHMuYm93bEhhbmRsZXIocHJvcHMubnVtKX19ID5cbiAgICA8YnV0dG9uPntwcm9wcy5udW19PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gU2NvcmVib2FyZFxudmFyIFNjb3JlYm9hcmQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwic2NvcmVib2FyZFwiPlxuICAgICAge3Byb3BzLmZyYW1lcy5zbGljZSgwLCA5KS5tYXAoKGZyYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiA8RnJhbWVDb21wb25lbnQgZnJhbWVOdW09e2ZyYW1lLmZyYW1lTnVtfSBmcmFtZT17ZnJhbWV9Lz5cbiAgICAgIH0pfVxuICAgICAgPFRlbnRoRnJhbWVDb21wb25lbnQgZnJhbWVOdW09e2ZyYW1lc1s5XS5mcmFtZU51bX0gZnJhbWU9e2ZyYW1lc1s5XX0gLz5cbiAgICAgIDxGaW5hbFNjb3JlIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gRnJhbWVcbnZhciBGcmFtZUNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmcmFtZVwiPlxuICAgICAgPEZyYW1lTnVtIGZyYW1lTnVtPXtwcm9wcy5mcmFtZU51bX0vPlxuICAgICAgPEJvd2xTY29yZSBib3dsTnVtPXsxfSBzY29yZT17cHJvcHMuZnJhbWUuYm93bDF9IC8+XG4gICAgICA8Qm93bFNjb3JlIGJvd2xOdW09ezJ9IHNjb3JlPXtwcm9wcy5mcmFtZS5ib3dsMn0gLz5cbiAgICAgIDxGcmFtZVNjb3JlIC8+XG4gICAgICA8Q3VtdWxhdGl2ZVNjb3JlIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gVGVudGggRnJhbWVcbnZhciBUZW50aEZyYW1lQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cInRlbnRoLWZyYW1lXCI+IFxuICAgICAgPEZyYW1lTnVtIGZyYW1lTnVtPXtwcm9wcy5mcmFtZU51bX0vPlxuICAgICAgPEJvd2xTY29yZSBib3dsTnVtPXsxfSBzY29yZT17cHJvcHMuZnJhbWUuYm93bDF9IC8+XG4gICAgICA8Qm93bFNjb3JlIGJvd2xOdW09ezJ9IHNjb3JlPXtwcm9wcy5mcmFtZS5ib3dsMn0gLz5cbiAgICAgIDxCb3dsU2NvcmUgYm93bE51bT17M30gc2NvcmU9e3Byb3BzLmZyYW1lLmJvd2wzfSAvPlxuICAgICAgPEZyYW1lU2NvcmUgLz5cbiAgICAgIDxDdW11bGF0aXZlU2NvcmUgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBGcmFtZSBOdW1cbnZhciBGcmFtZU51bSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmcmFtZS1udW1cIj5cbiAgICAgIEZyYW1lIHtwcm9wcy5mcmFtZU51bX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBCb3dsIFNjb3JlIFxudmFyIEJvd2xTY29yZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJib3dsLXNjb3JlXCI+XG4gICAgICB7cHJvcHMuc2NvcmV9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gRnJhbWUgU2NvcmVcbnZhciBGcmFtZVNjb3JlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmcmFtZS1zY29yZVwiPlxuICAgICAgRnJhbWU6IFxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEN1bXVsYXRpdmUgU2NvcmVcbnZhciBDdW11bGF0aXZlU2NvcmUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImN1bXVsYXRpdmUtc2NvcmVcIj5cbiAgICAgIEN1bXVsYXRpdmU6XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gRmluYWwgU2NvcmVcbnZhciBGaW5hbFNjb3JlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmaW5hbC1zY29yZVwiPlxuICAgICAgRmluYWwgU2NvcmVcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmcmFtZXM6IGZyYW1lcyxcbiAgICAgIGN1cnJlbnRGcmFtZTogMSxcbiAgICAgIGN1cnJlbnRCb3dsOiAxLFxuICAgICAgdG90YWxTY29yZTogdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgYm93bEhhbmRsZXIocGlucykge1xuICAgIGlmICh0aGlzLnN0YXRlLnRvdGFsU2NvcmUgPT09IHVuZGVmaW5lZCkge1xuXG5cbiAgICAgIC8vIGlmIGl0IGlzIHRoZSBzZWNvbmQgYm93bFxuICAgICAgICAvLyBpZiB0aGUgcGlucyBpcyA8PSAxMCAtIHBpbnMgZnJvbSB0aGUgZmlyc3QgYm93bC4uLiBwcm9jZWVkXG5cbiAgICAgIC8vICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAyKSB7XG4gICAgICAvLyAgIC8vIGZpbmQgdGhlIHJlc3VsdCBvZiB0aGUgcHJldm91cyBib3dsXG4gICAgICAvLyAgIC8vIGdldCB0aGUgZnJhbWUgZnJvbSBmcmFtZXMgYXQgaW5kZXggY3VycmVudEZyYW1lIC0xXG4gICAgICAvLyAgIHZhciB0aGlzRnJhbWUgPSB0aGlzLnN0YXRlLmZyYW1lc1t0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZSAtIDFdO1xuICAgICAgLy8gICB2YXIgZmlyc3RCb3dsID0gdGhpc0ZyYW1lLmJvd2wxO1xuXG4gICAgICAvLyAgIGlmIChwaW5zIDw9ICgxMCAtIGZpcnN0Qm93bCkpIHtcbiAgICAgIC8vICAgICAvLyBwdXQgYWxsIG15IGxvZ2ljIGhlcmVcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuXG5cbiAgICAgIC8vIGluc3RlZCBvZiBjaGFuZ2luZyB0aGlzIGluIG15IGdhbWUgbG9naWMsIGp1c3QgcmVtb3ZlIHRoZSBidXR0b25zIVxuICAgICAgLy8gb24gc3RhdGUsIGtlZXAgbXkgYWxsIG9wdGlvbnMgdGhlcmVcbiAgICAgIC8vIG9uIHN0YXRlLCBrZWVwIG15IGN1cnJlbnQgb3B0aW9ucyBhcyBhIHN1YnNldFxuICAgICAgLy8gb25seSByZW5kZXIgbXkgY3VycmVudCBvcHRpb25zXG4gICAgICAvLyBpbiBteSBnYW1lIGxvZ2ljLCBpZiBteSBib3dsIGlzIDEsIGNoYW5nZSBjdXJyZW50IG9wdGlvbnMgdG8gMTAgLSBwaW5zXG4gICAgICAvLyBpZiBteSBib3dsIGlzIDIsIGNoYW5nZSBjdXJyZW50IG9wdGlvbnMgdG8gb3B0aW9ucyBcblxuXG5cbiAgICAgIHZhciBuZXdGcmFtZXMgPSB0aGlzLnN0YXRlLmZyYW1lcztcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3RnJhbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBmcmFtZSA9IG5ld0ZyYW1lc1tpXTtcbiAgICAgICAgaWYgKGZyYW1lLmZyYW1lTnVtID09PSB0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZSkge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsPT09IDEpIHtcbiAgICAgICAgICAgIGZyYW1lLmJvd2wxID0gcGlucztcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVudEJvd2wgPT09IDIpIHtcbiAgICAgICAgICAgIGZyYW1lLmJvd2wyID0gcGlucztcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVudEJvd2wgPT09IDMpIHtcbiAgICAgICAgICAgIGZyYW1lLmJvd2wzID0gcGlucztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZyYW1lczogbmV3RnJhbWVzXG4gICAgICB9KVxuICAgIH1cblxuXG4gICAgLy8gR2FtZSBMb2dpY1xuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZSAhPT0gMTApIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAxKSB7XG4gICAgICAgIGlmIChwaW5zID09PSAxMCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudEZyYW1lOiB0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZSArIDFcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudEJvd2w6IHRoaXMuc3RhdGUuY3VycmVudEJvd2wgKyAxXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGN1cnJlbnRCb3dsOiB0aGlzLnN0YXRlLmN1cnJlbnRCb3dsIC0gMSxcbiAgICAgICAgICBjdXJyZW50RnJhbWU6IHRoaXMuc3RhdGUuY3VycmVudEZyYW1lICsgMVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUgPT09IDEwKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB0b3RhbFNjb3JlOiAnZ2FtZSBvdmVyJ1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAxKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGN1cnJlbnRCb3dsOiB0aGlzLnN0YXRlLmN1cnJlbnRCb3dsICsgMVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAyICYmIHBpbnMgPT09IDEwKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGN1cnJlbnRCb3dsOiB0aGlzLnN0YXRlLmN1cnJlbnRCb3dsICsgMVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAyICYmIHBpbnMgIT09IDEwKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHRvdGFsU2NvcmU6ICdnYW1lIG92ZXInXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBCb3dsaW5nIEFwcFxuICAgICAgICA8U2NvcmVib2FyZCBmcmFtZXM9e3RoaXMuc3RhdGUuZnJhbWVzfSAvPlxuICAgICAgICA8SW50ZXJmYWNlIGN1cnJlbnRGcmFtZT17dGhpcy5zdGF0ZS5jdXJyZW50RnJhbWV9IGN1cnJlbnRCb3dsPXt0aGlzLnN0YXRlLmN1cnJlbnRCb3dsfSBib3dsSGFuZGxlcj17dGhpcy5ib3dsSGFuZGxlci5iaW5kKHRoaXMpfS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuXG4iXX0=