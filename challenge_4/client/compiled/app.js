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
    React.createElement(FrameScore, { frameScore: props.frame.bowl1 + props.frame.bowl2 }),
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
    React.createElement(FrameScore, { frameScore: props.frame.bowl1 + props.frame.bowl2 + props.frame.bowl3 }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiRnJhbWUiLCJmcmFtZU51bSIsImJvd2wxIiwiYm93bDIiLCJmcmFtZVNjb3JlIiwiY3VtdWxhdGl2ZVNjb3JlIiwiY29uZGl0aW9uIiwiVGVudGhGcmFtZSIsImJvd2wzIiwiZnJhbWVzIiwiaSIsInB1c2giLCJvcHRpb25zIiwiaiIsIkludGVyZmFjZSIsInByb3BzIiwiY3VycmVudEZyYW1lIiwiY3VycmVudEJvd2wiLCJib3dsSGFuZGxlciIsIkN1cnJlbnRGcmFtZSIsIkN1cnJlbnRCb3dsIiwiS2V5cGFkIiwibWFwIiwib3B0aW9uIiwiT3B0aW9uIiwibnVtIiwiU2NvcmVib2FyZCIsInNsaWNlIiwiZnJhbWUiLCJGcmFtZUNvbXBvbmVudCIsIlRlbnRoRnJhbWVDb21wb25lbnQiLCJGcmFtZU51bSIsIkJvd2xTY29yZSIsInNjb3JlIiwiRnJhbWVTY29yZSIsIkN1bXVsYXRpdmVTY29yZSIsIkZpbmFsU2NvcmUiLCJBcHAiLCJzdGF0ZSIsInRvdGFsU2NvcmUiLCJ1bmRlZmluZWQiLCJjdXJyZW50T3B0aW9ucyIsImJvd2xzIiwicGlucyIsInNldFN0YXRlIiwibmV3RnJhbWVzIiwibGVuZ3RoIiwicmVtYWluaW5nUGlucyIsInJlbWFpbmluZ09wdGlvbnMiLCJrIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0U7O0FBRUY7QUFDQTtBQUNFO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDRjtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Y7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBT0E7O0lBRU1BLEssR0FDSixlQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLE9BQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FB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O0FBR0UsNEJBQUMsU0FBRCxJQUFXLFNBQVMsS0FBSzZCLEtBQUwsQ0FBV0csY0FBL0IsRUFBK0MsY0FBYyxLQUFLSCxLQUFMLENBQVd0QixZQUF4RSxFQUFzRixhQUFhLEtBQUtzQixLQUFMLENBQVdyQixXQUE5RyxFQUEySCxhQUFhLEtBQUtDLFdBQUwsQ0FBaUJnQyxJQUFqQixDQUFzQixJQUF0QixDQUF4STtBQUhGLE9BREY7QUFPRDs7OztFQWpKZUMsTUFBTUMsUzs7QUFxSnhCQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKioqIENvbXBvbmVudHMgVG8gQnVpbGQgKioqXG5cbi8vICoqKiBVSSBDb21wb25lbnRzICoqKlxuLy8gQ3VycmVudCBCb3dsIENvbXBvbmVudFxuLy8gUGluIFF1YW50aXR5IFNlbGVjdGlvbiBDb21wb25lbnRcbiAgLy8gT3B0aW9ucyBDb21wb25lbnRzICgxMClcblxuLy8gKioqIFNjb3JlQm9hcmQgQ29tcG9uZW50cyAqKipcbi8vIFNjb3JlYm9hcmQgQ29tcG9uZW50XG4gIC8vIE5vcm1hbCBGcmFtZSBDb21wb25lbnRcbiAgICAvLyBGcmFtZSBOdW0gQ29tcG9uZW50XG4gICAgLy8gQm93bCBTY29yZSBDb21wb25lbnRzICgyKVxuICAgIC8vIEZyYW1lIFNjb3JlIENvbXBvbmVudFxuICAgIC8vIEN1bW11bGF0aXZlIFNjb3JlIENvbXBvbmVudFxuICAvLyAxMHRoIEZyYW1lIENvbXBvbmVudCBcbiAgICAvLyBGcmFtZSBOdW0gQ29tcG9uZW50XG4gICAgLy8gQm93bCBTY29yZSBDb21wb25lbnRzICgzKVxuICAgIC8vIEZyYW1lIFNjb3JlIENvbXBvbmVudFxuICAgIC8vIEN1bW11bGF0aXZlIFNjb3JlIENvbXBvbmVudFxuICAvLyBGaW5hbCBTY29yZSBDb21wb25lbnRcblxuLy8gKioqIE1vZGVsIERhdGEgU3RydWN0dXJlIElkZWFzICoqKlxuXG4vLyBUcmFjayBGcmFtZXNcbi8vIEVhY2ggZnJhbWUgc2hvdWxkIGhhdmUgdXAgdG8gdGhyZWUgYm93bHNcbi8vIGVhY2ggZnJhbWUgc2hvdWxkIGhhdmUgZnJhbWUgc2NvcmUsIGN1bW11bGF0aXZlIHNjb3JlIHVwIHRvIHRoYXQgcG9pbnRcbi8vIGVhY2ggZnJhbWUgc2hvdWxkIGJlIGFibGUgdG8gbG9vayBiYWNrIGF0IHRoZSBmcmFtZXMgYmVmb3JlIGl0IFxuXG4vLyBNYWtlIGFuIGFycmF5IGNvbnRhaW5pbmcgbm9ybWFsIGZyYW1lIG9iamVjdHMgYW5kIGEgMTB0aCBmcmFtZSBvYmplY3QgYXQgdGhlIGVuZFxuLy8gbm9ybWFsIGZyYW1lIG9iamVjdHMgaGF2ZTogZnJhbWVudW0sIGJvd2wxIGFuZCBib3dsMiBwcm9wZXJ0aWVzLCBmcmFtZXNjb3JlIHByb3AsIGFuZCBjdW11bGF0aXZlIHNjb3JlIHByb3BcblxuXG5cblxuXG5cbi8vKioqIEluaXRpYWxpemUgRnJhbWVzIERhdGEgU3RydWN0dXJlICoqKlxuXG5jbGFzcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKGZyYW1lTnVtKSB7XG4gICAgdGhpcy5mcmFtZU51bSA9IGZyYW1lTnVtO1xuICAgIHRoaXMuYm93bDEgPSBudWxsO1xuICAgIHRoaXMuYm93bDIgPSBudWxsO1xuICAgIHRoaXMuZnJhbWVTY29yZSA9IG51bGw7XG4gICAgdGhpcy5jdW11bGF0aXZlU2NvcmUgPSBudWxsO1xuICAgIHRoaXMuY29uZGl0aW9uID0gJ29wZW4nO1xuICB9XG59XG5cbmNsYXNzIFRlbnRoRnJhbWUgZXh0ZW5kcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5mcmFtZU51bSA9IDEwO1xuICAgIHRoaXMuYm93bDMgPSBudWxsO1xuICB9XG59XG5cbnZhciBmcmFtZXMgPSBbXTtcbmZvciAodmFyIGkgPSAxOyBpIDwgMTA7IGkrKykge1xuICBmcmFtZXMucHVzaChuZXcgRnJhbWUoaSkpXG59XG5mcmFtZXMucHVzaChuZXcgVGVudGhGcmFtZSgpKTtcblxudmFyIG9wdGlvbnMgPSBbXTtcbmZvciAodmFyIGogPSAwOyBqIDwgMTE7IGorKykge1xuICBvcHRpb25zLnB1c2goaik7XG59XG5cblxuLy8gKioqIEJ1aWxkIENvbXBvbmVudHMgU2tlbGV0b24gKioqXG5cbi8vIFVJIEludGVyZmFjZSBDb21wb25lbnRcbnZhciBJbnRlcmZhY2UgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiaW50ZXJmYWNlXCI+XG4gICAgICA8Q3VycmVudEZyYW1lIGN1cnJlbnRGcmFtZT17cHJvcHMuY3VycmVudEZyYW1lfS8+XG4gICAgICA8Q3VycmVudEJvd2wgY3VycmVudEJvd2w9e3Byb3BzLmN1cnJlbnRCb3dsfS8+XG4gICAgICA8S2V5cGFkIG9wdGlvbnM9e3Byb3BzLm9wdGlvbnN9IGJvd2xIYW5kbGVyPXtwcm9wcy5ib3dsSGFuZGxlcn0vPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEN1cnJlbnQgRnJhbWUgQ29tcG9uZW50XG52YXIgQ3VycmVudEZyYW1lID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtZnJhbWVcIj5cbiAgICAgIEZyYW1lOiB7cHJvcHMuY3VycmVudEZyYW1lfVxuICAgIDwvZGl2PlxuICApXG59XG4vLyBDdXJyZW50IEJvd2wgQ29tcG9uZW50XG52YXIgQ3VycmVudEJvd2wgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1ib3dsXCI+XG4gICAgICBCb3dsOiB7cHJvcHMuY3VycmVudEJvd2x9XG4gICAgPC9kaXY+XG4gIClcbn1cbi8vIEtleXBhZCBDb21wb25lbnRcbnZhciBLZXlwYWQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwia2V5cGFkXCI+XG4gICAgICBQaW5zIHRvIEhpdDogXG4gICAgICB7cHJvcHMub3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gPE9wdGlvbiBudW09e29wdGlvbn0gYm93bEhhbmRsZXI9e3Byb3BzLmJvd2xIYW5kbGVyfSAvPlxuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gIClcbn1cbi8vIE9wdGlvbiBDb21wb25lbnRcbnZhciBPcHRpb24gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwib3B0aW9uXCIgb25DbGljaz17KCkgPT4ge3Byb3BzLmJvd2xIYW5kbGVyKHByb3BzLm51bSl9fSA+XG4gICAgPGJ1dHRvbj57cHJvcHMubnVtfTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIFNjb3JlYm9hcmRcbnZhciBTY29yZWJvYXJkID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cInNjb3JlYm9hcmRcIj5cbiAgICAgIHtwcm9wcy5mcmFtZXMuc2xpY2UoMCwgOSkubWFwKChmcmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gPEZyYW1lQ29tcG9uZW50IGZyYW1lTnVtPXtmcmFtZS5mcmFtZU51bX0gZnJhbWU9e2ZyYW1lfS8+XG4gICAgICB9KX1cbiAgICAgIDxUZW50aEZyYW1lQ29tcG9uZW50IGZyYW1lTnVtPXtmcmFtZXNbOV0uZnJhbWVOdW19IGZyYW1lPXtmcmFtZXNbOV19IC8+XG4gICAgICA8RmluYWxTY29yZSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEZyYW1lXG52YXIgRnJhbWVDb21wb25lbnQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiZnJhbWVcIj5cbiAgICAgIDxGcmFtZU51bSBmcmFtZU51bT17cHJvcHMuZnJhbWVOdW19Lz5cbiAgICAgIDxCb3dsU2NvcmUgYm93bE51bT17MX0gc2NvcmU9e3Byb3BzLmZyYW1lLmJvd2wxfSAvPlxuICAgICAgPEJvd2xTY29yZSBib3dsTnVtPXsyfSBzY29yZT17cHJvcHMuZnJhbWUuYm93bDJ9IC8+XG4gICAgICA8RnJhbWVTY29yZSBmcmFtZVNjb3JlPXtwcm9wcy5mcmFtZS5ib3dsMSArIHByb3BzLmZyYW1lLmJvd2wyfS8+XG4gICAgICA8Q3VtdWxhdGl2ZVNjb3JlIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gVGVudGggRnJhbWVcbnZhciBUZW50aEZyYW1lQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cInRlbnRoLWZyYW1lXCI+IFxuICAgICAgPEZyYW1lTnVtIGZyYW1lTnVtPXtwcm9wcy5mcmFtZU51bX0vPlxuICAgICAgPEJvd2xTY29yZSBib3dsTnVtPXsxfSBzY29yZT17cHJvcHMuZnJhbWUuYm93bDF9IC8+XG4gICAgICA8Qm93bFNjb3JlIGJvd2xOdW09ezJ9IHNjb3JlPXtwcm9wcy5mcmFtZS5ib3dsMn0gLz5cbiAgICAgIDxCb3dsU2NvcmUgYm93bE51bT17M30gc2NvcmU9e3Byb3BzLmZyYW1lLmJvd2wzfSAvPlxuICAgICAgPEZyYW1lU2NvcmUgZnJhbWVTY29yZT17cHJvcHMuZnJhbWUuYm93bDEgKyBwcm9wcy5mcmFtZS5ib3dsMiArIHByb3BzLmZyYW1lLmJvd2wzfS8+XG4gICAgICA8Q3VtdWxhdGl2ZVNjb3JlIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gRnJhbWUgTnVtXG52YXIgRnJhbWVOdW0gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiZnJhbWUtbnVtXCI+XG4gICAgICBGcmFtZSB7cHJvcHMuZnJhbWVOdW19XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gQm93bCBTY29yZSBcbnZhciBCb3dsU2NvcmUgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiYm93bC1zY29yZVwiPlxuICAgICAge3Byb3BzLnNjb3JlfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEZyYW1lIFNjb3JlXG52YXIgRnJhbWVTY29yZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmcmFtZS1zY29yZVwiPlxuICAgICAgRnJhbWU6IHtwcm9wcy5mcmFtZVNjb3JlfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEN1bXVsYXRpdmUgU2NvcmVcbnZhciBDdW11bGF0aXZlU2NvcmUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImN1bXVsYXRpdmUtc2NvcmVcIj5cbiAgICAgIEN1bXVsYXRpdmU6XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gRmluYWwgU2NvcmVcbnZhciBGaW5hbFNjb3JlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmaW5hbC1zY29yZVwiPlxuICAgICAgRmluYWwgU2NvcmVcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmcmFtZXM6IGZyYW1lcyxcbiAgICAgIGN1cnJlbnRGcmFtZTogMSxcbiAgICAgIGN1cnJlbnRCb3dsOiAxLFxuICAgICAgdG90YWxTY29yZTogdW5kZWZpbmVkLFxuICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgIGN1cnJlbnRPcHRpb25zOiBvcHRpb25zLFxuICAgICAgYm93bHM6IFtdXG4gICAgfVxuICB9XG5cbiAgYm93bEhhbmRsZXIocGlucykge1xuICAgIGlmICh0aGlzLnN0YXRlLnRvdGFsU2NvcmUgPT09IHVuZGVmaW5lZCkge1xuICAgIFxuXG4gICAgICAvL1RPIERPOlxuICAgICAgLy8gZWFjaCBmcmFtZSBoYXMgYSBzdGF0ZTogb3Blbiwgc3BhcmUsIHN0cmlrZSwgY2xvc2VkXG4gICAgICAvLyBpZiB0aGUgZnJhbWUgaXMgb3BlbiB3aGVuIGZyYW1lIG92ZXJcbiAgICAgICAgLy8gY2xvc2UgaXRcbiAgICAgIC8vIGlmIHRoZSBmcmFtZSBpcyBzcGFyZSB3aGVuIHRoZSBmcmFtZSBpcyBvdmVyXG4gICAgICAgIC8vIHdoZW4gdGhlIG5leHQgcm9sbCBpcyBjb21wbGV0ZWRcbiAgICAgICAgLy8gYWRkIGl0IHRvIHRoZSBmcmFtZXNjb3JlIGFuZCBjbG9zZSB0aGUgZnJhbWVcbiAgICAgIC8vIGlmIHRoZSBmcmFtZSBpcyBzdHJpa2Ugd2hlbiB0aGUgZnJhbWUgaXMgb3ZlclxuICAgICAgICAvLyB3aGVuIHRoZSBuZXh0IHR3byByb2xscyBhcmUgY29tcGxldGVkXG4gICAgICAgIC8vIGFkZCB0aGVtIHRvIHRoZSBmcmFtZXNjb3JlIGFuZCBjbG9zZSB0aGUgZnJhbWVcbiAgICAgIFxuICAgICAgLy8gbWFuYWdlIHRoZSBzdGF0ZXMgXG4gICAgICAvLyBsb29wIHRocm91Z2gsIGlmIHRoZXJlIGFyZSBhbnkgc3BhcmVzXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBuZXh0IHJvbGwgZXhpc3RzXG4gICAgICAgICAgLy8gaWYgc28gYWRkIGl0IHRvIHRoZSBzcGFyZSBmcmFtZSBhbmQgY2xvc2UgdGhlIGZyYW1lXG5cblxuXG5cbiAgICAgIHZhciBib3dscyA9IHRoaXMuc3RhdGUuYm93bHM7XG4gICAgICBib3dscy5wdXNoKHBpbnMpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGJvd2xzOiBib3dsc1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBuZXdGcmFtZXMgPSB0aGlzLnN0YXRlLmZyYW1lcztcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3RnJhbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBmcmFtZSA9IG5ld0ZyYW1lc1tpXTtcbiAgICAgICAgaWYgKGZyYW1lLmZyYW1lTnVtID09PSB0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZSkge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsPT09IDEpIHtcbiAgICAgICAgICAgIGlmIChwaW5zID09PSAxMCkge1xuICAgICAgICAgICAgICBmcmFtZS5jb25kaXRpb24gPSAnc3RyaWtlJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnJhbWUuYm93bDEgPSBwaW5zO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMikge1xuICAgICAgICAgICAgaWYgKGZyYW1lLmJvd2wxICsgcGlucyA9PT0gMTApIHtcbiAgICAgICAgICAgICAgZnJhbWUuY29uZGl0aW9uID0gJ3NwYXJlJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnJhbWUuYm93bDIgPSBwaW5zO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMykge1xuICAgICAgICAgICAgZnJhbWUuYm93bDMgPSBwaW5zO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmcmFtZXM6IG5ld0ZyYW1lc1xuICAgICAgfSlcblxuXG4gICAgICAvLyBHYW1lIExvZ2ljXG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUgIT09IDEwKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAxKSB7XG4gICAgICAgICAgaWYgKHBpbnMgPT09IDEwKSB7XG5cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGN1cnJlbnRGcmFtZTogdGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUgKyAxLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGN1cnJlbnRCb3dsOiB0aGlzLnN0YXRlLmN1cnJlbnRCb3dsICsgMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMikge1xuICAgICAgICAgIGlmIChwaW5zID09PSAxMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGNvbmRpdGlvbjogJ3NwYXJlJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50Qm93bDogdGhpcy5zdGF0ZS5jdXJyZW50Qm93bCAtIDEsXG4gICAgICAgICAgICBjdXJyZW50RnJhbWU6IHRoaXMuc3RhdGUuY3VycmVudEZyYW1lICsgMVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUgPT09IDEwKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAzKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0b3RhbFNjb3JlOiAnZ2FtZSBvdmVyJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudEJvd2w6IHRoaXMuc3RhdGUuY3VycmVudEJvd2wgKyAxXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAyICYmIHBpbnMgPT09IDEwKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50Qm93bDogdGhpcy5zdGF0ZS5jdXJyZW50Qm93bCArIDFcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVudEJvd2wgPT09IDIgJiYgcGlucyAhPT0gMTApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRvdGFsU2NvcmU6ICdnYW1lIG92ZXInXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMSkge1xuICAgICAgICB2YXIgcmVtYWluaW5nUGlucyA9IDEwIC0gcGlucztcbiAgICAgICAgdmFyIHJlbWFpbmluZ09wdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPD0gcmVtYWluaW5nUGluczsgaysrKSB7XG4gICAgICAgICAgcmVtYWluaW5nT3B0aW9ucy5wdXNoKGspXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY3VycmVudE9wdGlvbnM6IHJlbWFpbmluZ09wdGlvbnNcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjdXJyZW50T3B0aW9uczogdGhpcy5zdGF0ZS5vcHRpb25zXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBpZiAocGlucyA9PT0gMTApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY3VycmVudE9wdGlvbnM6IHRoaXMuc3RhdGUub3B0aW9uc1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgQm93bGluZyBBcHBcbiAgICAgICAgPFNjb3JlYm9hcmQgZnJhbWVzPXt0aGlzLnN0YXRlLmZyYW1lc30gLz5cbiAgICAgICAgPEludGVyZmFjZSBvcHRpb25zPXt0aGlzLnN0YXRlLmN1cnJlbnRPcHRpb25zfSBjdXJyZW50RnJhbWU9e3RoaXMuc3RhdGUuY3VycmVudEZyYW1lfSBjdXJyZW50Qm93bD17dGhpcy5zdGF0ZS5jdXJyZW50Qm93bH0gYm93bEhhbmRsZXI9e3RoaXMuYm93bEhhbmRsZXIuYmluZCh0aGlzKX0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuIl19