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


//*** Initialize Frames Data Structure ***

var Frame = function Frame(frameNum) {
  _classCallCheck(this, Frame);

  this.frameNum = frameNum;
  this.bowl1 = null;
  this.bowl2 = null;
  this.frameScore = null;
  this.cumulativeScore = null;
  this.condition = 'open';
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
for (var j = 0; j < 11; j++) {
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
    React.createElement(FrameScore, { frameScore: props.frame.bowl1 + props.frame.bowl2 + props.frame.frameScore }),
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
    React.createElement(FrameScore, { frameScore: props.frame.bowl1 + props.frame.bowl2 + props.frame.bowl3 + props.frame.frameScore }),
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
var FrameScore = function FrameScore(props) {
  return React.createElement(
    "div",
    { "class": "frame-score" },
    "Frame: ",
    props.frameScore
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
      currentOptions: options,
      bowls: []
    };
    return _this2;
  }

  _createClass(App, [{
    key: "bowlHandler",
    value: function bowlHandler(pins) {
      if (this.state.totalScore === undefined) {

        //TO DO:
        // each frame has a state: open, spare, strike, closed
        // if the frame is open when frame over
        // close it
        // if the frame is spare when the frame is over
        // when the next roll is completed
        // add it to the framescore and close the frame
        // if the frame is strike when the frame is over
        // when the next two rolls are completed
        // add them to the framescore and close the frame

        // manage the states 
        // loop through, if there are any spares
        // check if the next roll exists
        // if so add it to the spare frame and close the frame

        var bowls = this.state.bowls;
        bowls.push(pins);
        this.setState({
          bowls: bowls
        });

        // check the previous frame for a spare condition
        // if spare, add pins to the that frame's score
        // change that frame's condition to closed


        var newFrames = this.state.frames;
        for (var i = 0; i < newFrames.length; i++) {
          var frame = newFrames[i];
          if (frame.frameNum === this.state.currentFrame) {
            if (this.state.currentBowl === 1) {
              if (pins === 10) {
                frame.condition = 'strike';
              }
              frame.bowl1 = pins;
            } else if (this.state.currentBowl === 2) {
              if (frame.bowl1 + pins === 10) {
                frame.condition = 'spare';
              }
              frame.bowl2 = pins;
            } else if (this.state.currentBowl === 3) {
              frame.bowl3 = pins;
            }
          }

          // spare logic

          if (frame.frameNum === this.state.currentFrame - 1) {
            if (frame.condition === 'spare') {
              frame.frameScore += pins;
              frame.condition = 'closed';
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
            if (pins === 10) {
              this.setState({
                condition: 'spare'
              });
            }
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
          var remainingPins = 10 - pins;
          var remainingOptions = [];
          for (var k = 0; k <= remainingPins; k++) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiRnJhbWUiLCJmcmFtZU51bSIsImJvd2wxIiwiYm93bDIiLCJmcmFtZVNjb3JlIiwiY3VtdWxhdGl2ZVNjb3JlIiwiY29uZGl0aW9uIiwiVGVudGhGcmFtZSIsImJvd2wzIiwiZnJhbWVzIiwiaSIsInB1c2giLCJvcHRpb25zIiwiaiIsIkludGVyZmFjZSIsInByb3BzIiwiY3VycmVudEZyYW1lIiwiY3VycmVudEJvd2wiLCJib3dsSGFuZGxlciIsIkN1cnJlbnRGcmFtZSIsIkN1cnJlbnRCb3dsIiwiS2V5cGFkIiwibWFwIiwib3B0aW9uIiwiT3B0aW9uIiwibnVtIiwiU2NvcmVib2FyZCIsInNsaWNlIiwiZnJhbWUiLCJGcmFtZUNvbXBvbmVudCIsIlRlbnRoRnJhbWVDb21wb25lbnQiLCJGcmFtZU51bSIsIkJvd2xTY29yZSIsInNjb3JlIiwiRnJhbWVTY29yZSIsIkN1bXVsYXRpdmVTY29yZSIsIkZpbmFsU2NvcmUiLCJBcHAiLCJzdGF0ZSIsInRvdGFsU2NvcmUiLCJ1bmRlZmluZWQiLCJjdXJyZW50T3B0aW9ucyIsImJvd2xzIiwicGlucyIsInNldFN0YXRlIiwibmV3RnJhbWVzIiwibGVuZ3RoIiwicmVtYWluaW5nUGlucyIsInJlbWFpbmluZ09wdGlvbnMiLCJrIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0U7O0FBRUY7QUFDQTtBQUNFO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDRjtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Y7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBT0E7O0lBRU1BLEssR0FDSixlQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLE9BQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FB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QixDQUEvQixFQUFrQztBQUN2QyxlQUFLMkIsUUFBTCxDQUFjO0FBQ1pILDRCQUFnQixLQUFLSCxLQUFMLENBQVcxQjtBQURmLFdBQWQ7QUFHRDtBQUNELFlBQUkrQixTQUFTLEVBQWIsRUFBaUI7QUFDZixlQUFLQyxRQUFMLENBQWM7QUFDWkgsNEJBQWdCLEtBQUtILEtBQUwsQ0FBVzFCO0FBRGYsV0FBZDtBQUdEO0FBQ0Y7QUFFRjs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUVFLDRCQUFDLFVBQUQsSUFBWSxRQUFRLEtBQUswQixLQUFMLENBQVc3QixNQUEvQixHQUZGO0FBR0UsNEJBQUMsU0FBRCxJQUFXLFNBQVMsS0FBSzZCLEtBQUwsQ0FBV0csY0FBL0IsRUFBK0MsY0FBYyxLQUFLSCxLQUFMLENBQVd0QixZQUF4RSxFQUFzRixhQUFhLEtBQUtzQixLQUFMLENBQVdyQixXQUE5RyxFQUEySCxhQUFhLEtBQUtDLFdBQUwsQ0FBaUJnQyxJQUFqQixDQUFzQixJQUF0QixDQUF4STtBQUhGLE9BREY7QUFPRDs7OztFQW5LZUMsTUFBTUMsUzs7QUF1S3hCQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKioqIENvbXBvbmVudHMgVG8gQnVpbGQgKioqXG5cbi8vICoqKiBVSSBDb21wb25lbnRzICoqKlxuLy8gQ3VycmVudCBCb3dsIENvbXBvbmVudFxuLy8gUGluIFF1YW50aXR5IFNlbGVjdGlvbiBDb21wb25lbnRcbiAgLy8gT3B0aW9ucyBDb21wb25lbnRzICgxMClcblxuLy8gKioqIFNjb3JlQm9hcmQgQ29tcG9uZW50cyAqKipcbi8vIFNjb3JlYm9hcmQgQ29tcG9uZW50XG4gIC8vIE5vcm1hbCBGcmFtZSBDb21wb25lbnRcbiAgICAvLyBGcmFtZSBOdW0gQ29tcG9uZW50XG4gICAgLy8gQm93bCBTY29yZSBDb21wb25lbnRzICgyKVxuICAgIC8vIEZyYW1lIFNjb3JlIENvbXBvbmVudFxuICAgIC8vIEN1bW11bGF0aXZlIFNjb3JlIENvbXBvbmVudFxuICAvLyAxMHRoIEZyYW1lIENvbXBvbmVudCBcbiAgICAvLyBGcmFtZSBOdW0gQ29tcG9uZW50XG4gICAgLy8gQm93bCBTY29yZSBDb21wb25lbnRzICgzKVxuICAgIC8vIEZyYW1lIFNjb3JlIENvbXBvbmVudFxuICAgIC8vIEN1bW11bGF0aXZlIFNjb3JlIENvbXBvbmVudFxuICAvLyBGaW5hbCBTY29yZSBDb21wb25lbnRcblxuLy8gKioqIE1vZGVsIERhdGEgU3RydWN0dXJlIElkZWFzICoqKlxuXG4vLyBUcmFjayBGcmFtZXNcbi8vIEVhY2ggZnJhbWUgc2hvdWxkIGhhdmUgdXAgdG8gdGhyZWUgYm93bHNcbi8vIGVhY2ggZnJhbWUgc2hvdWxkIGhhdmUgZnJhbWUgc2NvcmUsIGN1bW11bGF0aXZlIHNjb3JlIHVwIHRvIHRoYXQgcG9pbnRcbi8vIGVhY2ggZnJhbWUgc2hvdWxkIGJlIGFibGUgdG8gbG9vayBiYWNrIGF0IHRoZSBmcmFtZXMgYmVmb3JlIGl0IFxuXG4vLyBNYWtlIGFuIGFycmF5IGNvbnRhaW5pbmcgbm9ybWFsIGZyYW1lIG9iamVjdHMgYW5kIGEgMTB0aCBmcmFtZSBvYmplY3QgYXQgdGhlIGVuZFxuLy8gbm9ybWFsIGZyYW1lIG9iamVjdHMgaGF2ZTogZnJhbWVudW0sIGJvd2wxIGFuZCBib3dsMiBwcm9wZXJ0aWVzLCBmcmFtZXNjb3JlIHByb3AsIGFuZCBjdW11bGF0aXZlIHNjb3JlIHByb3BcblxuXG5cblxuXG5cbi8vKioqIEluaXRpYWxpemUgRnJhbWVzIERhdGEgU3RydWN0dXJlICoqKlxuXG5jbGFzcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKGZyYW1lTnVtKSB7XG4gICAgdGhpcy5mcmFtZU51bSA9IGZyYW1lTnVtO1xuICAgIHRoaXMuYm93bDEgPSBudWxsO1xuICAgIHRoaXMuYm93bDIgPSBudWxsO1xuICAgIHRoaXMuZnJhbWVTY29yZSA9IG51bGw7XG4gICAgdGhpcy5jdW11bGF0aXZlU2NvcmUgPSBudWxsO1xuICAgIHRoaXMuY29uZGl0aW9uID0gJ29wZW4nO1xuICB9XG59XG5cbmNsYXNzIFRlbnRoRnJhbWUgZXh0ZW5kcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5mcmFtZU51bSA9IDEwO1xuICAgIHRoaXMuYm93bDMgPSBudWxsO1xuICB9XG59XG5cbnZhciBmcmFtZXMgPSBbXTtcbmZvciAodmFyIGkgPSAxOyBpIDwgMTA7IGkrKykge1xuICBmcmFtZXMucHVzaChuZXcgRnJhbWUoaSkpXG59XG5mcmFtZXMucHVzaChuZXcgVGVudGhGcmFtZSgpKTtcblxudmFyIG9wdGlvbnMgPSBbXTtcbmZvciAodmFyIGogPSAwOyBqIDwgMTE7IGorKykge1xuICBvcHRpb25zLnB1c2goaik7XG59XG5cblxuLy8gKioqIEJ1aWxkIENvbXBvbmVudHMgU2tlbGV0b24gKioqXG5cbi8vIFVJIEludGVyZmFjZSBDb21wb25lbnRcbnZhciBJbnRlcmZhY2UgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiaW50ZXJmYWNlXCI+XG4gICAgICA8Q3VycmVudEZyYW1lIGN1cnJlbnRGcmFtZT17cHJvcHMuY3VycmVudEZyYW1lfS8+XG4gICAgICA8Q3VycmVudEJvd2wgY3VycmVudEJvd2w9e3Byb3BzLmN1cnJlbnRCb3dsfS8+XG4gICAgICA8S2V5cGFkIG9wdGlvbnM9e3Byb3BzLm9wdGlvbnN9IGJvd2xIYW5kbGVyPXtwcm9wcy5ib3dsSGFuZGxlcn0vPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEN1cnJlbnQgRnJhbWUgQ29tcG9uZW50XG52YXIgQ3VycmVudEZyYW1lID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtZnJhbWVcIj5cbiAgICAgIEZyYW1lOiB7cHJvcHMuY3VycmVudEZyYW1lfVxuICAgIDwvZGl2PlxuICApXG59XG4vLyBDdXJyZW50IEJvd2wgQ29tcG9uZW50XG52YXIgQ3VycmVudEJvd2wgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1ib3dsXCI+XG4gICAgICBCb3dsOiB7cHJvcHMuY3VycmVudEJvd2x9XG4gICAgPC9kaXY+XG4gIClcbn1cbi8vIEtleXBhZCBDb21wb25lbnRcbnZhciBLZXlwYWQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwia2V5cGFkXCI+XG4gICAgICBQaW5zIHRvIEhpdDogXG4gICAgICB7cHJvcHMub3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gPE9wdGlvbiBudW09e29wdGlvbn0gYm93bEhhbmRsZXI9e3Byb3BzLmJvd2xIYW5kbGVyfSAvPlxuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gIClcbn1cbi8vIE9wdGlvbiBDb21wb25lbnRcbnZhciBPcHRpb24gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwib3B0aW9uXCIgb25DbGljaz17KCkgPT4ge3Byb3BzLmJvd2xIYW5kbGVyKHByb3BzLm51bSl9fSA+XG4gICAgPGJ1dHRvbj57cHJvcHMubnVtfTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIFNjb3JlYm9hcmRcbnZhciBTY29yZWJvYXJkID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cInNjb3JlYm9hcmRcIj5cbiAgICAgIHtwcm9wcy5mcmFtZXMuc2xpY2UoMCwgOSkubWFwKChmcmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gPEZyYW1lQ29tcG9uZW50IGZyYW1lTnVtPXtmcmFtZS5mcmFtZU51bX0gZnJhbWU9e2ZyYW1lfS8+XG4gICAgICB9KX1cbiAgICAgIDxUZW50aEZyYW1lQ29tcG9uZW50IGZyYW1lTnVtPXtmcmFtZXNbOV0uZnJhbWVOdW19IGZyYW1lPXtmcmFtZXNbOV19IC8+XG4gICAgICA8RmluYWxTY29yZSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEZyYW1lXG52YXIgRnJhbWVDb21wb25lbnQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiZnJhbWVcIj5cbiAgICAgIDxGcmFtZU51bSBmcmFtZU51bT17cHJvcHMuZnJhbWVOdW19Lz5cbiAgICAgIDxCb3dsU2NvcmUgYm93bE51bT17MX0gc2NvcmU9e3Byb3BzLmZyYW1lLmJvd2wxfSAvPlxuICAgICAgPEJvd2xTY29yZSBib3dsTnVtPXsyfSBzY29yZT17cHJvcHMuZnJhbWUuYm93bDJ9IC8+XG4gICAgICA8RnJhbWVTY29yZSBmcmFtZVNjb3JlPXtwcm9wcy5mcmFtZS5ib3dsMSArIHByb3BzLmZyYW1lLmJvd2wyICsgcHJvcHMuZnJhbWUuZnJhbWVTY29yZX0vPlxuICAgICAgPEN1bXVsYXRpdmVTY29yZSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIFRlbnRoIEZyYW1lXG52YXIgVGVudGhGcmFtZUNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJ0ZW50aC1mcmFtZVwiPiBcbiAgICAgIDxGcmFtZU51bSBmcmFtZU51bT17cHJvcHMuZnJhbWVOdW19Lz5cbiAgICAgIDxCb3dsU2NvcmUgYm93bE51bT17MX0gc2NvcmU9e3Byb3BzLmZyYW1lLmJvd2wxfSAvPlxuICAgICAgPEJvd2xTY29yZSBib3dsTnVtPXsyfSBzY29yZT17cHJvcHMuZnJhbWUuYm93bDJ9IC8+XG4gICAgICA8Qm93bFNjb3JlIGJvd2xOdW09ezN9IHNjb3JlPXtwcm9wcy5mcmFtZS5ib3dsM30gLz5cbiAgICAgIDxGcmFtZVNjb3JlIGZyYW1lU2NvcmU9e3Byb3BzLmZyYW1lLmJvd2wxICsgcHJvcHMuZnJhbWUuYm93bDIgKyBwcm9wcy5mcmFtZS5ib3dsMyArIHByb3BzLmZyYW1lLmZyYW1lU2NvcmV9Lz5cbiAgICAgIDxDdW11bGF0aXZlU2NvcmUgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBGcmFtZSBOdW1cbnZhciBGcmFtZU51bSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmcmFtZS1udW1cIj5cbiAgICAgIEZyYW1lIHtwcm9wcy5mcmFtZU51bX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBCb3dsIFNjb3JlIFxudmFyIEJvd2xTY29yZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJib3dsLXNjb3JlXCI+XG4gICAgICB7cHJvcHMuc2NvcmV9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gRnJhbWUgU2NvcmVcbnZhciBGcmFtZVNjb3JlID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImZyYW1lLXNjb3JlXCI+XG4gICAgICBGcmFtZToge3Byb3BzLmZyYW1lU2NvcmV9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gQ3VtdWxhdGl2ZSBTY29yZVxudmFyIEN1bXVsYXRpdmVTY29yZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiY3VtdWxhdGl2ZS1zY29yZVwiPlxuICAgICAgQ3VtdWxhdGl2ZTpcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBGaW5hbCBTY29yZVxudmFyIEZpbmFsU2NvcmUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImZpbmFsLXNjb3JlXCI+XG4gICAgICBGaW5hbCBTY29yZVxuICAgIDwvZGl2PlxuICApXG59XG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZyYW1lczogZnJhbWVzLFxuICAgICAgY3VycmVudEZyYW1lOiAxLFxuICAgICAgY3VycmVudEJvd2w6IDEsXG4gICAgICB0b3RhbFNjb3JlOiB1bmRlZmluZWQsXG4gICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgY3VycmVudE9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICBib3dsczogW11cbiAgICB9XG4gIH1cblxuICBib3dsSGFuZGxlcihwaW5zKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUudG90YWxTY29yZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgXG5cbiAgICAgIC8vVE8gRE86XG4gICAgICAvLyBlYWNoIGZyYW1lIGhhcyBhIHN0YXRlOiBvcGVuLCBzcGFyZSwgc3RyaWtlLCBjbG9zZWRcbiAgICAgIC8vIGlmIHRoZSBmcmFtZSBpcyBvcGVuIHdoZW4gZnJhbWUgb3ZlclxuICAgICAgICAvLyBjbG9zZSBpdFxuICAgICAgLy8gaWYgdGhlIGZyYW1lIGlzIHNwYXJlIHdoZW4gdGhlIGZyYW1lIGlzIG92ZXJcbiAgICAgICAgLy8gd2hlbiB0aGUgbmV4dCByb2xsIGlzIGNvbXBsZXRlZFxuICAgICAgICAvLyBhZGQgaXQgdG8gdGhlIGZyYW1lc2NvcmUgYW5kIGNsb3NlIHRoZSBmcmFtZVxuICAgICAgLy8gaWYgdGhlIGZyYW1lIGlzIHN0cmlrZSB3aGVuIHRoZSBmcmFtZSBpcyBvdmVyXG4gICAgICAgIC8vIHdoZW4gdGhlIG5leHQgdHdvIHJvbGxzIGFyZSBjb21wbGV0ZWRcbiAgICAgICAgLy8gYWRkIHRoZW0gdG8gdGhlIGZyYW1lc2NvcmUgYW5kIGNsb3NlIHRoZSBmcmFtZVxuICAgICAgXG4gICAgICAvLyBtYW5hZ2UgdGhlIHN0YXRlcyBcbiAgICAgIC8vIGxvb3AgdGhyb3VnaCwgaWYgdGhlcmUgYXJlIGFueSBzcGFyZXNcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIG5leHQgcm9sbCBleGlzdHNcbiAgICAgICAgICAvLyBpZiBzbyBhZGQgaXQgdG8gdGhlIHNwYXJlIGZyYW1lIGFuZCBjbG9zZSB0aGUgZnJhbWVcblxuICAgICAgdmFyIGJvd2xzID0gdGhpcy5zdGF0ZS5ib3dscztcbiAgICAgIGJvd2xzLnB1c2gocGlucyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYm93bHM6IGJvd2xzXG4gICAgICB9KTtcblxuICAgICAgLy8gY2hlY2sgdGhlIHByZXZpb3VzIGZyYW1lIGZvciBhIHNwYXJlIGNvbmRpdGlvblxuICAgICAgLy8gaWYgc3BhcmUsIGFkZCBwaW5zIHRvIHRoZSB0aGF0IGZyYW1lJ3Mgc2NvcmVcbiAgICAgIC8vIGNoYW5nZSB0aGF0IGZyYW1lJ3MgY29uZGl0aW9uIHRvIGNsb3NlZFxuXG5cblxuXG5cbiAgICAgIHZhciBuZXdGcmFtZXMgPSB0aGlzLnN0YXRlLmZyYW1lcztcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3RnJhbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBmcmFtZSA9IG5ld0ZyYW1lc1tpXTtcbiAgICAgICAgaWYgKGZyYW1lLmZyYW1lTnVtID09PSB0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZSkge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsPT09IDEpIHtcbiAgICAgICAgICAgIGlmIChwaW5zID09PSAxMCkge1xuICAgICAgICAgICAgICBmcmFtZS5jb25kaXRpb24gPSAnc3RyaWtlJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnJhbWUuYm93bDEgPSBwaW5zO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMikge1xuICAgICAgICAgICAgaWYgKGZyYW1lLmJvd2wxICsgcGlucyA9PT0gMTApIHtcbiAgICAgICAgICAgICAgZnJhbWUuY29uZGl0aW9uID0gJ3NwYXJlJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnJhbWUuYm93bDIgPSBwaW5zO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMykge1xuICAgICAgICAgICAgZnJhbWUuYm93bDMgPSBwaW5zO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICAvLyBzcGFyZSBsb2dpY1xuXG4gICAgICAgIGlmIChmcmFtZS5mcmFtZU51bSA9PT0gdGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUgLSAxKSB7XG4gICAgICAgICAgaWYgKGZyYW1lLmNvbmRpdGlvbiA9PT0gJ3NwYXJlJykge1xuICAgICAgICAgICAgZnJhbWUuZnJhbWVTY29yZSArPSBwaW5zO1xuICAgICAgICAgICAgZnJhbWUuY29uZGl0aW9uID0gJ2Nsb3NlZCdcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG5cblxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZnJhbWVzOiBuZXdGcmFtZXNcbiAgICAgIH0pXG5cblxuICAgICAgLy8gR2FtZSBMb2dpY1xuICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudEZyYW1lICE9PSAxMCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMSkge1xuICAgICAgICAgIGlmIChwaW5zID09PSAxMCkge1xuXG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBjdXJyZW50RnJhbWU6IHRoaXMuc3RhdGUuY3VycmVudEZyYW1lICsgMSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBjdXJyZW50Qm93bDogdGhpcy5zdGF0ZS5jdXJyZW50Qm93bCArIDFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVudEJvd2wgPT09IDIpIHtcbiAgICAgICAgICBpZiAocGlucyA9PT0gMTApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBjb25kaXRpb246ICdzcGFyZSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudEJvd2w6IHRoaXMuc3RhdGUuY3VycmVudEJvd2wgLSAxLFxuICAgICAgICAgICAgY3VycmVudEZyYW1lOiB0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZSArIDFcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVudEZyYW1lID09PSAxMCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMykge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdG90YWxTY29yZTogJ2dhbWUgb3ZlcidcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVudEJvd2wgPT09IDEpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRCb3dsOiB0aGlzLnN0YXRlLmN1cnJlbnRCb3dsICsgMVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMiAmJiBwaW5zID09PSAxMCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudEJvd2w6IHRoaXMuc3RhdGUuY3VycmVudEJvd2wgKyAxXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAyICYmIHBpbnMgIT09IDEwKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0b3RhbFNjb3JlOiAnZ2FtZSBvdmVyJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudEJvd2wgPT09IDEpIHtcbiAgICAgICAgdmFyIHJlbWFpbmluZ1BpbnMgPSAxMCAtIHBpbnM7XG4gICAgICAgIHZhciByZW1haW5pbmdPcHRpb25zID0gW107XG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDw9IHJlbWFpbmluZ1BpbnM7IGsrKykge1xuICAgICAgICAgIHJlbWFpbmluZ09wdGlvbnMucHVzaChrKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGN1cnJlbnRPcHRpb25zOiByZW1haW5pbmdPcHRpb25zXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVudEJvd2wgPT09IDIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY3VycmVudE9wdGlvbnM6IHRoaXMuc3RhdGUub3B0aW9uc1xuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgaWYgKHBpbnMgPT09IDEwKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGN1cnJlbnRPcHRpb25zOiB0aGlzLnN0YXRlLm9wdGlvbnNcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIEJvd2xpbmcgQXBwXG4gICAgICAgIDxTY29yZWJvYXJkIGZyYW1lcz17dGhpcy5zdGF0ZS5mcmFtZXN9IC8+XG4gICAgICAgIDxJbnRlcmZhY2Ugb3B0aW9ucz17dGhpcy5zdGF0ZS5jdXJyZW50T3B0aW9uc30gY3VycmVudEZyYW1lPXt0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZX0gY3VycmVudEJvd2w9e3RoaXMuc3RhdGUuY3VycmVudEJvd2x9IGJvd2xIYW5kbGVyPXt0aGlzLmJvd2xIYW5kbGVyLmJpbmQodGhpcyl9Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG5cbiJdfQ==