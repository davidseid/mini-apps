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
    React.createElement(Keypad, { options: props.options, bowlHandler: props.bowlHandler })
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
    props.options.map(function (option) {
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
      totalScore: undefined,
      options: options,
      currentOptions: options
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

        if (this.state.currentBowl === 1) {
          // 10 - pins = remaining options
          var remainingPins = 10 - pins;
          var remainingOptions = [];
          for (var k = 1; k <= remainingPins; k++) {
            remainingOptions.push(k);
          }
          this.setState({
            currentOptions: remainingOptions
          });
        } else if (this.state.currentBowl === 2) {
          this.setState({
            currentOptions: this.state.options
          });
        }
        if (pins === 10) {
          this.setState({
            currentOptions: this.state.options
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
        React.createElement(Interface, { options: this.state.currentOptions, currentFrame: this.state.currentFrame, currentBowl: this.state.currentBowl, bowlHandler: this.bowlHandler.bind(this) })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiRnJhbWUiLCJmcmFtZU51bSIsImJvd2wxIiwiYm93bDIiLCJmcmFtZVNjb3JlIiwiY3VtdWxhdGl2ZVNjb3JlIiwiVGVudGhGcmFtZSIsImJvd2wzIiwiZnJhbWVzIiwiaSIsInB1c2giLCJvcHRpb25zIiwiaiIsIkludGVyZmFjZSIsInByb3BzIiwiY3VycmVudEZyYW1lIiwiY3VycmVudEJvd2wiLCJib3dsSGFuZGxlciIsIkN1cnJlbnRGcmFtZSIsIkN1cnJlbnRCb3dsIiwiS2V5cGFkIiwibWFwIiwib3B0aW9uIiwiT3B0aW9uIiwibnVtIiwiU2NvcmVib2FyZCIsInNsaWNlIiwiZnJhbWUiLCJGcmFtZUNvbXBvbmVudCIsIlRlbnRoRnJhbWVDb21wb25lbnQiLCJGcmFtZU51bSIsIkJvd2xTY29yZSIsInNjb3JlIiwiRnJhbWVTY29yZSIsIkN1bXVsYXRpdmVTY29yZSIsIkZpbmFsU2NvcmUiLCJBcHAiLCJzdGF0ZSIsInRvdGFsU2NvcmUiLCJ1bmRlZmluZWQiLCJjdXJyZW50T3B0aW9ucyIsInBpbnMiLCJuZXdGcmFtZXMiLCJsZW5ndGgiLCJzZXRTdGF0ZSIsInJlbWFpbmluZ1BpbnMiLCJyZW1haW5pbmdPcHRpb25zIiwiayIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNFOztBQUVGO0FBQ0E7QUFDRTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Y7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNGOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0lBRU1BLEssR0FDSixlQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLE9BQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsT0FBS0Ms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SixXQUFkO0FBR0QsU0FWRCxNQVVPLElBQUksS0FBS1QsS0FBTCxDQUFXckIsV0FBWCxLQUEyQixDQUEvQixFQUFrQztBQUN2QyxlQUFLNEIsUUFBTCxDQUFjO0FBQ1pKLDRCQUFnQixLQUFLSCxLQUFMLENBQVcxQjtBQURmLFdBQWQ7QUFHRDtBQUNELFlBQUk4QixTQUFTLEVBQWIsRUFBaUI7QUFDZixlQUFLRyxRQUFMLENBQWM7QUFDWkosNEJBQWdCLEtBQUtILEtBQUwsQ0FBVzFCO0FBRGYsV0FBZDtBQUdEO0FBQ0Y7QUFJRjs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUVFLDRCQUFDLFVBQUQsSUFBWSxRQUFRLEtBQUswQixLQUFMLENBQVc3QixNQUEvQixHQUZGO0FBR0UsNEJBQUMsU0FBRCxJQUFXLFNBQVMsS0FBSzZCLEtBQUwsQ0FBV0csY0FBL0IsRUFBK0MsY0FBYyxLQUFLSCxLQUFMLENBQVd0QixZQUF4RSxFQUFzRixhQUFhLEtBQUtzQixLQUFMLENBQVdyQixXQUE5RyxFQUEySCxhQUFhLEtBQUtDLFdBQUwsQ0FBaUIrQixJQUFqQixDQUFzQixJQUF0QixDQUF4STtBQUhGLE9BREY7QUFPRDs7OztFQXBJZUMsTUFBTUMsUzs7QUF3SXhCQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKioqIENvbXBvbmVudHMgVG8gQnVpbGQgKioqXG5cbi8vICoqKiBVSSBDb21wb25lbnRzICoqKlxuLy8gQ3VycmVudCBCb3dsIENvbXBvbmVudFxuLy8gUGluIFF1YW50aXR5IFNlbGVjdGlvbiBDb21wb25lbnRcbiAgLy8gT3B0aW9ucyBDb21wb25lbnRzICgxMClcblxuLy8gKioqIFNjb3JlQm9hcmQgQ29tcG9uZW50cyAqKipcbi8vIFNjb3JlYm9hcmQgQ29tcG9uZW50XG4gIC8vIE5vcm1hbCBGcmFtZSBDb21wb25lbnRcbiAgICAvLyBGcmFtZSBOdW0gQ29tcG9uZW50XG4gICAgLy8gQm93bCBTY29yZSBDb21wb25lbnRzICgyKVxuICAgIC8vIEZyYW1lIFNjb3JlIENvbXBvbmVudFxuICAgIC8vIEN1bW11bGF0aXZlIFNjb3JlIENvbXBvbmVudFxuICAvLyAxMHRoIEZyYW1lIENvbXBvbmVudCBcbiAgICAvLyBGcmFtZSBOdW0gQ29tcG9uZW50XG4gICAgLy8gQm93bCBTY29yZSBDb21wb25lbnRzICgzKVxuICAgIC8vIEZyYW1lIFNjb3JlIENvbXBvbmVudFxuICAgIC8vIEN1bW11bGF0aXZlIFNjb3JlIENvbXBvbmVudFxuICAvLyBGaW5hbCBTY29yZSBDb21wb25lbnRcblxuLy8gKioqIE1vZGVsIERhdGEgU3RydWN0dXJlIElkZWFzICoqKlxuXG4vLyBUcmFjayBGcmFtZXNcbi8vIEVhY2ggZnJhbWUgc2hvdWxkIGhhdmUgdXAgdG8gdGhyZWUgYm93bHNcbi8vIGVhY2ggZnJhbWUgc2hvdWxkIGhhdmUgZnJhbWUgc2NvcmUsIGN1bW11bGF0aXZlIHNjb3JlIHVwIHRvIHRoYXQgcG9pbnRcbi8vIGVhY2ggZnJhbWUgc2hvdWxkIGJlIGFibGUgdG8gbG9vayBiYWNrIGF0IHRoZSBmcmFtZXMgYmVmb3JlIGl0IFxuXG4vLyBNYWtlIGFuIGFycmF5IGNvbnRhaW5pbmcgbm9ybWFsIGZyYW1lIG9iamVjdHMgYW5kIGEgMTB0aCBmcmFtZSBvYmplY3QgYXQgdGhlIGVuZFxuLy8gbm9ybWFsIGZyYW1lIG9iamVjdHMgaGF2ZTogZnJhbWVudW0sIGJvd2wxIGFuZCBib3dsMiBwcm9wZXJ0aWVzLCBmcmFtZXNjb3JlIHByb3AsIGFuZCBjdW11bGF0aXZlIHNjb3JlIHByb3BcblxuLy9UTyBETzpcbi8vIEZvcmdvdCBhYm91dCByZW1haW5pbmcgcGlucyEhIVxuXG5cbi8vKioqIEluaXRpYWxpemUgRnJhbWVzIERhdGEgU3RydWN0dXJlICoqKlxuXG5jbGFzcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKGZyYW1lTnVtKSB7XG4gICAgdGhpcy5mcmFtZU51bSA9IGZyYW1lTnVtO1xuICAgIHRoaXMuYm93bDEgPSBudWxsO1xuICAgIHRoaXMuYm93bDIgPSBudWxsO1xuICAgIHRoaXMuZnJhbWVTY29yZSA9IG51bGw7XG4gICAgdGhpcy5jdW11bGF0aXZlU2NvcmUgPSBudWxsO1xuICB9XG59XG5cbmNsYXNzIFRlbnRoRnJhbWUgZXh0ZW5kcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5mcmFtZU51bSA9IDEwO1xuICAgIHRoaXMuYm93bDMgPSBudWxsO1xuICB9XG59XG5cbnZhciBmcmFtZXMgPSBbXTtcbmZvciAodmFyIGkgPSAxOyBpIDwgMTA7IGkrKykge1xuICBmcmFtZXMucHVzaChuZXcgRnJhbWUoaSkpXG59XG5mcmFtZXMucHVzaChuZXcgVGVudGhGcmFtZSgpKTtcblxudmFyIG9wdGlvbnMgPSBbXTtcbmZvciAodmFyIGogPSAxOyBqIDwgMTE7IGorKykge1xuICBvcHRpb25zLnB1c2goaik7XG59XG5cblxuLy8gKioqIEJ1aWxkIENvbXBvbmVudHMgU2tlbGV0b24gKioqXG5cbi8vIFVJIEludGVyZmFjZSBDb21wb25lbnRcbnZhciBJbnRlcmZhY2UgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiaW50ZXJmYWNlXCI+XG4gICAgICA8Q3VycmVudEZyYW1lIGN1cnJlbnRGcmFtZT17cHJvcHMuY3VycmVudEZyYW1lfS8+XG4gICAgICA8Q3VycmVudEJvd2wgY3VycmVudEJvd2w9e3Byb3BzLmN1cnJlbnRCb3dsfS8+XG4gICAgICA8S2V5cGFkIG9wdGlvbnM9e3Byb3BzLm9wdGlvbnN9IGJvd2xIYW5kbGVyPXtwcm9wcy5ib3dsSGFuZGxlcn0vPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEN1cnJlbnQgRnJhbWUgQ29tcG9uZW50XG52YXIgQ3VycmVudEZyYW1lID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtZnJhbWVcIj5cbiAgICAgIEZyYW1lOiB7cHJvcHMuY3VycmVudEZyYW1lfVxuICAgIDwvZGl2PlxuICApXG59XG4vLyBDdXJyZW50IEJvd2wgQ29tcG9uZW50XG52YXIgQ3VycmVudEJvd2wgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1ib3dsXCI+XG4gICAgICBCb3dsOiB7cHJvcHMuY3VycmVudEJvd2x9XG4gICAgPC9kaXY+XG4gIClcbn1cbi8vIEtleXBhZCBDb21wb25lbnRcbnZhciBLZXlwYWQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwia2V5cGFkXCI+XG4gICAgICBQaW5zIHRvIEhpdDogXG4gICAgICB7cHJvcHMub3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gPE9wdGlvbiBudW09e29wdGlvbn0gYm93bEhhbmRsZXI9e3Byb3BzLmJvd2xIYW5kbGVyfSAvPlxuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gIClcbn1cbi8vIE9wdGlvbiBDb21wb25lbnRcbnZhciBPcHRpb24gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwib3B0aW9uXCIgb25DbGljaz17KCkgPT4ge3Byb3BzLmJvd2xIYW5kbGVyKHByb3BzLm51bSl9fSA+XG4gICAgPGJ1dHRvbj57cHJvcHMubnVtfTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIFNjb3JlYm9hcmRcbnZhciBTY29yZWJvYXJkID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cInNjb3JlYm9hcmRcIj5cbiAgICAgIHtwcm9wcy5mcmFtZXMuc2xpY2UoMCwgOSkubWFwKChmcmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gPEZyYW1lQ29tcG9uZW50IGZyYW1lTnVtPXtmcmFtZS5mcmFtZU51bX0gZnJhbWU9e2ZyYW1lfS8+XG4gICAgICB9KX1cbiAgICAgIDxUZW50aEZyYW1lQ29tcG9uZW50IGZyYW1lTnVtPXtmcmFtZXNbOV0uZnJhbWVOdW19IGZyYW1lPXtmcmFtZXNbOV19IC8+XG4gICAgICA8RmluYWxTY29yZSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEZyYW1lXG52YXIgRnJhbWVDb21wb25lbnQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiZnJhbWVcIj5cbiAgICAgIDxGcmFtZU51bSBmcmFtZU51bT17cHJvcHMuZnJhbWVOdW19Lz5cbiAgICAgIDxCb3dsU2NvcmUgYm93bE51bT17MX0gc2NvcmU9e3Byb3BzLmZyYW1lLmJvd2wxfSAvPlxuICAgICAgPEJvd2xTY29yZSBib3dsTnVtPXsyfSBzY29yZT17cHJvcHMuZnJhbWUuYm93bDJ9IC8+XG4gICAgICA8RnJhbWVTY29yZSAvPlxuICAgICAgPEN1bXVsYXRpdmVTY29yZSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIFRlbnRoIEZyYW1lXG52YXIgVGVudGhGcmFtZUNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJ0ZW50aC1mcmFtZVwiPiBcbiAgICAgIDxGcmFtZU51bSBmcmFtZU51bT17cHJvcHMuZnJhbWVOdW19Lz5cbiAgICAgIDxCb3dsU2NvcmUgYm93bE51bT17MX0gc2NvcmU9e3Byb3BzLmZyYW1lLmJvd2wxfSAvPlxuICAgICAgPEJvd2xTY29yZSBib3dsTnVtPXsyfSBzY29yZT17cHJvcHMuZnJhbWUuYm93bDJ9IC8+XG4gICAgICA8Qm93bFNjb3JlIGJvd2xOdW09ezN9IHNjb3JlPXtwcm9wcy5mcmFtZS5ib3dsM30gLz5cbiAgICAgIDxGcmFtZVNjb3JlIC8+XG4gICAgICA8Q3VtdWxhdGl2ZVNjb3JlIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gRnJhbWUgTnVtXG52YXIgRnJhbWVOdW0gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiZnJhbWUtbnVtXCI+XG4gICAgICBGcmFtZSB7cHJvcHMuZnJhbWVOdW19XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gQm93bCBTY29yZSBcbnZhciBCb3dsU2NvcmUgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiYm93bC1zY29yZVwiPlxuICAgICAge3Byb3BzLnNjb3JlfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEZyYW1lIFNjb3JlXG52YXIgRnJhbWVTY29yZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiZnJhbWUtc2NvcmVcIj5cbiAgICAgIEZyYW1lOiBcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBDdW11bGF0aXZlIFNjb3JlXG52YXIgQ3VtdWxhdGl2ZVNjb3JlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJjdW11bGF0aXZlLXNjb3JlXCI+XG4gICAgICBDdW11bGF0aXZlOlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEZpbmFsIFNjb3JlXG52YXIgRmluYWxTY29yZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiZmluYWwtc2NvcmVcIj5cbiAgICAgIEZpbmFsIFNjb3JlXG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZnJhbWVzOiBmcmFtZXMsXG4gICAgICBjdXJyZW50RnJhbWU6IDEsXG4gICAgICBjdXJyZW50Qm93bDogMSxcbiAgICAgIHRvdGFsU2NvcmU6IHVuZGVmaW5lZCxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICBjdXJyZW50T3B0aW9uczogb3B0aW9uc1xuICAgIH1cbiAgfVxuXG4gIGJvd2xIYW5kbGVyKHBpbnMpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS50b3RhbFNjb3JlID09PSB1bmRlZmluZWQpIHtcblxuXG4gICAgICAvLyBpZiBpdCBpcyB0aGUgc2Vjb25kIGJvd2xcbiAgICAgICAgLy8gaWYgdGhlIHBpbnMgaXMgPD0gMTAgLSBwaW5zIGZyb20gdGhlIGZpcnN0IGJvd2wuLi4gcHJvY2VlZFxuXG4gICAgICAvLyAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMikge1xuICAgICAgLy8gICAvLyBmaW5kIHRoZSByZXN1bHQgb2YgdGhlIHByZXZvdXMgYm93bFxuICAgICAgLy8gICAvLyBnZXQgdGhlIGZyYW1lIGZyb20gZnJhbWVzIGF0IGluZGV4IGN1cnJlbnRGcmFtZSAtMVxuICAgICAgLy8gICB2YXIgdGhpc0ZyYW1lID0gdGhpcy5zdGF0ZS5mcmFtZXNbdGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUgLSAxXTtcbiAgICAgIC8vICAgdmFyIGZpcnN0Qm93bCA9IHRoaXNGcmFtZS5ib3dsMTtcblxuICAgICAgLy8gICBpZiAocGlucyA8PSAoMTAgLSBmaXJzdEJvd2wpKSB7XG4gICAgICAvLyAgICAgLy8gcHV0IGFsbCBteSBsb2dpYyBoZXJlXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cblxuXG4gICAgICAvLyBpbnN0ZWQgb2YgY2hhbmdpbmcgdGhpcyBpbiBteSBnYW1lIGxvZ2ljLCBqdXN0IHJlbW92ZSB0aGUgYnV0dG9ucyFcbiAgICAgIC8vIG9uIHN0YXRlLCBrZWVwIG15IGFsbCBvcHRpb25zIHRoZXJlXG4gICAgICAvLyBvbiBzdGF0ZSwga2VlcCBteSBjdXJyZW50IG9wdGlvbnMgYXMgYSBzdWJzZXRcbiAgICAgIC8vIG9ubHkgcmVuZGVyIG15IGN1cnJlbnQgb3B0aW9uc1xuICAgICAgLy8gaW4gbXkgZ2FtZSBsb2dpYywgaWYgbXkgYm93bCBpcyAxLCBjaGFuZ2UgY3VycmVudCBvcHRpb25zIHRvIDEwIC0gcGluc1xuICAgICAgLy8gaWYgbXkgYm93bCBpcyAyLCBjaGFuZ2UgY3VycmVudCBvcHRpb25zIHRvIG9wdGlvbnMgXG5cblxuXG4gICAgICB2YXIgbmV3RnJhbWVzID0gdGhpcy5zdGF0ZS5mcmFtZXM7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0ZyYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZnJhbWUgPSBuZXdGcmFtZXNbaV07XG4gICAgICAgIGlmIChmcmFtZS5mcmFtZU51bSA9PT0gdGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bD09PSAxKSB7XG4gICAgICAgICAgICBmcmFtZS5ib3dsMSA9IHBpbnM7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAyKSB7XG4gICAgICAgICAgICBmcmFtZS5ib3dsMiA9IHBpbnM7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAzKSB7XG4gICAgICAgICAgICBmcmFtZS5ib3dsMyA9IHBpbnM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmcmFtZXM6IG5ld0ZyYW1lc1xuICAgICAgfSlcblxuXG4gICAgICAvLyBHYW1lIExvZ2ljXG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUgIT09IDEwKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAxKSB7XG4gICAgICAgICAgaWYgKHBpbnMgPT09IDEwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgY3VycmVudEZyYW1lOiB0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZSArIDFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBjdXJyZW50Qm93bDogdGhpcy5zdGF0ZS5jdXJyZW50Qm93bCArIDFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVudEJvd2wgPT09IDIpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRCb3dsOiB0aGlzLnN0YXRlLmN1cnJlbnRCb3dsIC0gMSxcbiAgICAgICAgICAgIGN1cnJlbnRGcmFtZTogdGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUgKyAxXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZSA9PT0gMTApIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudEJvd2wgPT09IDMpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRvdGFsU2NvcmU6ICdnYW1lIG92ZXInXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50Qm93bDogdGhpcy5zdGF0ZS5jdXJyZW50Qm93bCArIDFcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVudEJvd2wgPT09IDIgJiYgcGlucyA9PT0gMTApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRCb3dsOiB0aGlzLnN0YXRlLmN1cnJlbnRCb3dsICsgMVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMiAmJiBwaW5zICE9PSAxMCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdG90YWxTY29yZTogJ2dhbWUgb3ZlcidcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAxKSB7XG4gICAgICAgIC8vIDEwIC0gcGlucyA9IHJlbWFpbmluZyBvcHRpb25zXG4gICAgICAgIHZhciByZW1haW5pbmdQaW5zID0gMTAgLSBwaW5zO1xuICAgICAgICB2YXIgcmVtYWluaW5nT3B0aW9ucyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBrID0gMTsgayA8PSByZW1haW5pbmdQaW5zOyBrKyspIHtcbiAgICAgICAgICByZW1haW5pbmdPcHRpb25zLnB1c2goaylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjdXJyZW50T3B0aW9uczogcmVtYWluaW5nT3B0aW9uc1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGN1cnJlbnRPcHRpb25zOiB0aGlzLnN0YXRlLm9wdGlvbnNcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGlmIChwaW5zID09PSAxMCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjdXJyZW50T3B0aW9uczogdGhpcy5zdGF0ZS5vcHRpb25zXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG5cbiAgICBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgQm93bGluZyBBcHBcbiAgICAgICAgPFNjb3JlYm9hcmQgZnJhbWVzPXt0aGlzLnN0YXRlLmZyYW1lc30gLz5cbiAgICAgICAgPEludGVyZmFjZSBvcHRpb25zPXt0aGlzLnN0YXRlLmN1cnJlbnRPcHRpb25zfSBjdXJyZW50RnJhbWU9e3RoaXMuc3RhdGUuY3VycmVudEZyYW1lfSBjdXJyZW50Qm93bD17dGhpcy5zdGF0ZS5jdXJyZW50Qm93bH0gYm93bEhhbmRsZXI9e3RoaXMuYm93bEhhbmRsZXIuYmluZCh0aGlzKX0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuIl19