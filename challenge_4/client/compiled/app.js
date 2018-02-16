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
// update frame score whenever a round is changed, update the framescore

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
      currentOptions: options
    };
    return _this2;
  }

  _createClass(App, [{
    key: "bowlHandler",
    value: function bowlHandler(pins) {
      if (this.state.totalScore === undefined) {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiRnJhbWUiLCJmcmFtZU51bSIsImJvd2wxIiwiYm93bDIiLCJmcmFtZVNjb3JlIiwiY3VtdWxhdGl2ZVNjb3JlIiwiVGVudGhGcmFtZSIsImJvd2wzIiwiZnJhbWVzIiwiaSIsInB1c2giLCJvcHRpb25zIiwiaiIsIkludGVyZmFjZSIsInByb3BzIiwiY3VycmVudEZyYW1lIiwiY3VycmVudEJvd2wiLCJib3dsSGFuZGxlciIsIkN1cnJlbnRGcmFtZSIsIkN1cnJlbnRCb3dsIiwiS2V5cGFkIiwibWFwIiwib3B0aW9uIiwiT3B0aW9uIiwibnVtIiwiU2NvcmVib2FyZCIsInNsaWNlIiwiZnJhbWUiLCJGcmFtZUNvbXBvbmVudCIsIlRlbnRoRnJhbWVDb21wb25lbnQiLCJGcmFtZU51bSIsIkJvd2xTY29yZSIsInNjb3JlIiwiRnJhbWVTY29yZSIsIkN1bXVsYXRpdmVTY29yZSIsIkZpbmFsU2NvcmUiLCJBcHAiLCJzdGF0ZSIsInRvdGFsU2NvcmUiLCJ1bmRlZmluZWQiLCJjdXJyZW50T3B0aW9ucyIsInBpbnMiLCJuZXdGcmFtZXMiLCJsZW5ndGgiLCJzZXRTdGF0ZSIsInJlbWFpbmluZ1BpbnMiLCJyZW1haW5pbmdPcHRpb25zIiwiayIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNFOztBQUVGO0FBQ0E7QUFDRTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Y7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNGOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7SUFFTUEsSyxHQUNKLGVBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsT0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxPQUFLQyxL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QUFwQyxFQUF5QztBQUN2Q0QsNkJBQWlCcEMsSUFBakIsQ0FBc0JxQyxDQUF0QjtBQUNEO0FBQ0QsZUFBS0gsUUFBTCxDQUFjO0FBQ1pKLDRCQUFnQk07QUFESixXQUFkO0FBR0QsU0FURCxNQVNPLElBQUksS0FBS1QsS0FBTCxDQUFXckIsV0FBWCxLQUEyQixDQUEvQixFQUFrQztBQUN2QyxlQUFLNEIsUUFBTCxDQUFjO0FBQ1pKLDRCQUFnQixLQUFLSCxLQUFMLENBQVcxQjtBQURmLFdBQWQ7QUFHRDtBQUNELFlBQUk4QixTQUFTLEVBQWIsRUFBaUI7QUFDZixlQUFLRyxRQUFMLENBQWM7QUFDWkosNEJBQWdCLEtBQUtILEtBQUwsQ0FBVzFCO0FBRGYsV0FBZDtBQUdEO0FBQ0Y7QUFFRjs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUVFLDRCQUFDLFVBQUQsSUFBWSxRQUFRLEtBQUswQixLQUFMLENBQVc3QixNQUEvQixHQUZGO0FBR0UsNEJBQUMsU0FBRCxJQUFXLFNBQVMsS0FBSzZCLEtBQUwsQ0FBV0csY0FBL0IsRUFBK0MsY0FBYyxLQUFLSCxLQUFMLENBQVd0QixZQUF4RSxFQUFzRixhQUFhLEtBQUtzQixLQUFMLENBQVdyQixXQUE5RyxFQUEySCxhQUFhLEtBQUtDLFdBQUwsQ0FBaUIrQixJQUFqQixDQUFzQixJQUF0QixDQUF4STtBQUhGLE9BREY7QUFPRDs7OztFQXhHZUMsTUFBTUMsUzs7QUE0R3hCQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKioqIENvbXBvbmVudHMgVG8gQnVpbGQgKioqXG5cbi8vICoqKiBVSSBDb21wb25lbnRzICoqKlxuLy8gQ3VycmVudCBCb3dsIENvbXBvbmVudFxuLy8gUGluIFF1YW50aXR5IFNlbGVjdGlvbiBDb21wb25lbnRcbiAgLy8gT3B0aW9ucyBDb21wb25lbnRzICgxMClcblxuLy8gKioqIFNjb3JlQm9hcmQgQ29tcG9uZW50cyAqKipcbi8vIFNjb3JlYm9hcmQgQ29tcG9uZW50XG4gIC8vIE5vcm1hbCBGcmFtZSBDb21wb25lbnRcbiAgICAvLyBGcmFtZSBOdW0gQ29tcG9uZW50XG4gICAgLy8gQm93bCBTY29yZSBDb21wb25lbnRzICgyKVxuICAgIC8vIEZyYW1lIFNjb3JlIENvbXBvbmVudFxuICAgIC8vIEN1bW11bGF0aXZlIFNjb3JlIENvbXBvbmVudFxuICAvLyAxMHRoIEZyYW1lIENvbXBvbmVudCBcbiAgICAvLyBGcmFtZSBOdW0gQ29tcG9uZW50XG4gICAgLy8gQm93bCBTY29yZSBDb21wb25lbnRzICgzKVxuICAgIC8vIEZyYW1lIFNjb3JlIENvbXBvbmVudFxuICAgIC8vIEN1bW11bGF0aXZlIFNjb3JlIENvbXBvbmVudFxuICAvLyBGaW5hbCBTY29yZSBDb21wb25lbnRcblxuLy8gKioqIE1vZGVsIERhdGEgU3RydWN0dXJlIElkZWFzICoqKlxuXG4vLyBUcmFjayBGcmFtZXNcbi8vIEVhY2ggZnJhbWUgc2hvdWxkIGhhdmUgdXAgdG8gdGhyZWUgYm93bHNcbi8vIGVhY2ggZnJhbWUgc2hvdWxkIGhhdmUgZnJhbWUgc2NvcmUsIGN1bW11bGF0aXZlIHNjb3JlIHVwIHRvIHRoYXQgcG9pbnRcbi8vIGVhY2ggZnJhbWUgc2hvdWxkIGJlIGFibGUgdG8gbG9vayBiYWNrIGF0IHRoZSBmcmFtZXMgYmVmb3JlIGl0IFxuXG4vLyBNYWtlIGFuIGFycmF5IGNvbnRhaW5pbmcgbm9ybWFsIGZyYW1lIG9iamVjdHMgYW5kIGEgMTB0aCBmcmFtZSBvYmplY3QgYXQgdGhlIGVuZFxuLy8gbm9ybWFsIGZyYW1lIG9iamVjdHMgaGF2ZTogZnJhbWVudW0sIGJvd2wxIGFuZCBib3dsMiBwcm9wZXJ0aWVzLCBmcmFtZXNjb3JlIHByb3AsIGFuZCBjdW11bGF0aXZlIHNjb3JlIHByb3BcblxuLy9UTyBETzpcbi8vIHVwZGF0ZSBmcmFtZSBzY29yZSB3aGVuZXZlciBhIHJvdW5kIGlzIGNoYW5nZWQsIHVwZGF0ZSB0aGUgZnJhbWVzY29yZVxuXG4vLyoqKiBJbml0aWFsaXplIEZyYW1lcyBEYXRhIFN0cnVjdHVyZSAqKipcblxuY2xhc3MgRnJhbWUge1xuICBjb25zdHJ1Y3RvcihmcmFtZU51bSkge1xuICAgIHRoaXMuZnJhbWVOdW0gPSBmcmFtZU51bTtcbiAgICB0aGlzLmJvd2wxID0gbnVsbDtcbiAgICB0aGlzLmJvd2wyID0gbnVsbDtcbiAgICB0aGlzLmZyYW1lU2NvcmUgPSBudWxsO1xuICAgIHRoaXMuY3VtdWxhdGl2ZVNjb3JlID0gbnVsbDtcbiAgfVxufVxuXG5jbGFzcyBUZW50aEZyYW1lIGV4dGVuZHMgRnJhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZnJhbWVOdW0gPSAxMDtcbiAgICB0aGlzLmJvd2wzID0gbnVsbDtcbiAgfVxufVxuXG52YXIgZnJhbWVzID0gW107XG5mb3IgKHZhciBpID0gMTsgaSA8IDEwOyBpKyspIHtcbiAgZnJhbWVzLnB1c2gobmV3IEZyYW1lKGkpKVxufVxuZnJhbWVzLnB1c2gobmV3IFRlbnRoRnJhbWUoKSk7XG5cbnZhciBvcHRpb25zID0gW107XG5mb3IgKHZhciBqID0gMDsgaiA8IDExOyBqKyspIHtcbiAgb3B0aW9ucy5wdXNoKGopO1xufVxuXG5cbi8vICoqKiBCdWlsZCBDb21wb25lbnRzIFNrZWxldG9uICoqKlxuXG4vLyBVSSBJbnRlcmZhY2UgQ29tcG9uZW50XG52YXIgSW50ZXJmYWNlID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImludGVyZmFjZVwiPlxuICAgICAgPEN1cnJlbnRGcmFtZSBjdXJyZW50RnJhbWU9e3Byb3BzLmN1cnJlbnRGcmFtZX0vPlxuICAgICAgPEN1cnJlbnRCb3dsIGN1cnJlbnRCb3dsPXtwcm9wcy5jdXJyZW50Qm93bH0vPlxuICAgICAgPEtleXBhZCBvcHRpb25zPXtwcm9wcy5vcHRpb25zfSBib3dsSGFuZGxlcj17cHJvcHMuYm93bEhhbmRsZXJ9Lz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBDdXJyZW50IEZyYW1lIENvbXBvbmVudFxudmFyIEN1cnJlbnRGcmFtZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LWZyYW1lXCI+XG4gICAgICBGcmFtZToge3Byb3BzLmN1cnJlbnRGcmFtZX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuLy8gQ3VycmVudCBCb3dsIENvbXBvbmVudFxudmFyIEN1cnJlbnRCb3dsID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtYm93bFwiPlxuICAgICAgQm93bDoge3Byb3BzLmN1cnJlbnRCb3dsfVxuICAgIDwvZGl2PlxuICApXG59XG4vLyBLZXlwYWQgQ29tcG9uZW50XG52YXIgS2V5cGFkID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImtleXBhZFwiPlxuICAgICAgUGlucyB0byBIaXQ6IFxuICAgICAge3Byb3BzLm9wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIDxPcHRpb24gbnVtPXtvcHRpb259IGJvd2xIYW5kbGVyPXtwcm9wcy5ib3dsSGFuZGxlcn0gLz5cbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApXG59XG4vLyBPcHRpb24gQ29tcG9uZW50XG52YXIgT3B0aW9uID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cIm9wdGlvblwiIG9uQ2xpY2s9eygpID0+IHtwcm9wcy5ib3dsSGFuZGxlcihwcm9wcy5udW0pfX0gPlxuICAgIDxidXR0b24+e3Byb3BzLm51bX08L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBTY29yZWJvYXJkXG52YXIgU2NvcmVib2FyZCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJzY29yZWJvYXJkXCI+XG4gICAgICB7cHJvcHMuZnJhbWVzLnNsaWNlKDAsIDkpLm1hcCgoZnJhbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIDxGcmFtZUNvbXBvbmVudCBmcmFtZU51bT17ZnJhbWUuZnJhbWVOdW19IGZyYW1lPXtmcmFtZX0vPlxuICAgICAgfSl9XG4gICAgICA8VGVudGhGcmFtZUNvbXBvbmVudCBmcmFtZU51bT17ZnJhbWVzWzldLmZyYW1lTnVtfSBmcmFtZT17ZnJhbWVzWzldfSAvPlxuICAgICAgPEZpbmFsU2NvcmUgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBGcmFtZVxudmFyIEZyYW1lQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImZyYW1lXCI+XG4gICAgICA8RnJhbWVOdW0gZnJhbWVOdW09e3Byb3BzLmZyYW1lTnVtfS8+XG4gICAgICA8Qm93bFNjb3JlIGJvd2xOdW09ezF9IHNjb3JlPXtwcm9wcy5mcmFtZS5ib3dsMX0gLz5cbiAgICAgIDxCb3dsU2NvcmUgYm93bE51bT17Mn0gc2NvcmU9e3Byb3BzLmZyYW1lLmJvd2wyfSAvPlxuICAgICAgPEZyYW1lU2NvcmUgZnJhbWVTY29yZT17cHJvcHMuZnJhbWUuYm93bDEgKyBwcm9wcy5mcmFtZS5ib3dsMn0vPlxuICAgICAgPEN1bXVsYXRpdmVTY29yZSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIFRlbnRoIEZyYW1lXG52YXIgVGVudGhGcmFtZUNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJ0ZW50aC1mcmFtZVwiPiBcbiAgICAgIDxGcmFtZU51bSBmcmFtZU51bT17cHJvcHMuZnJhbWVOdW19Lz5cbiAgICAgIDxCb3dsU2NvcmUgYm93bE51bT17MX0gc2NvcmU9e3Byb3BzLmZyYW1lLmJvd2wxfSAvPlxuICAgICAgPEJvd2xTY29yZSBib3dsTnVtPXsyfSBzY29yZT17cHJvcHMuZnJhbWUuYm93bDJ9IC8+XG4gICAgICA8Qm93bFNjb3JlIGJvd2xOdW09ezN9IHNjb3JlPXtwcm9wcy5mcmFtZS5ib3dsM30gLz5cbiAgICAgIDxGcmFtZVNjb3JlIGZyYW1lU2NvcmU9e3Byb3BzLmZyYW1lLmJvd2wxICsgcHJvcHMuZnJhbWUuYm93bDIgKyBwcm9wcy5mcmFtZS5ib3dsM30vPlxuICAgICAgPEN1bXVsYXRpdmVTY29yZSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEZyYW1lIE51bVxudmFyIEZyYW1lTnVtID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImZyYW1lLW51bVwiPlxuICAgICAgRnJhbWUge3Byb3BzLmZyYW1lTnVtfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEJvd2wgU2NvcmUgXG52YXIgQm93bFNjb3JlID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImJvd2wtc2NvcmVcIj5cbiAgICAgIHtwcm9wcy5zY29yZX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBGcmFtZSBTY29yZVxudmFyIEZyYW1lU2NvcmUgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiZnJhbWUtc2NvcmVcIj5cbiAgICAgIEZyYW1lOiB7cHJvcHMuZnJhbWVTY29yZX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBDdW11bGF0aXZlIFNjb3JlXG52YXIgQ3VtdWxhdGl2ZVNjb3JlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJjdW11bGF0aXZlLXNjb3JlXCI+XG4gICAgICBDdW11bGF0aXZlOlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEZpbmFsIFNjb3JlXG52YXIgRmluYWxTY29yZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiZmluYWwtc2NvcmVcIj5cbiAgICAgIEZpbmFsIFNjb3JlXG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZnJhbWVzOiBmcmFtZXMsXG4gICAgICBjdXJyZW50RnJhbWU6IDEsXG4gICAgICBjdXJyZW50Qm93bDogMSxcbiAgICAgIHRvdGFsU2NvcmU6IHVuZGVmaW5lZCxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICBjdXJyZW50T3B0aW9uczogb3B0aW9uc1xuICAgIH1cbiAgfVxuXG4gIGJvd2xIYW5kbGVyKHBpbnMpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS50b3RhbFNjb3JlID09PSB1bmRlZmluZWQpIHtcblxuICAgICAgdmFyIG5ld0ZyYW1lcyA9IHRoaXMuc3RhdGUuZnJhbWVzO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdGcmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGZyYW1lID0gbmV3RnJhbWVzW2ldO1xuICAgICAgICBpZiAoZnJhbWUuZnJhbWVOdW0gPT09IHRoaXMuc3RhdGUuY3VycmVudEZyYW1lKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudEJvd2w9PT0gMSkge1xuICAgICAgICAgICAgZnJhbWUuYm93bDEgPSBwaW5zO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMikge1xuICAgICAgICAgICAgZnJhbWUuYm93bDIgPSBwaW5zO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMykge1xuICAgICAgICAgICAgZnJhbWUuYm93bDMgPSBwaW5zO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZnJhbWVzOiBuZXdGcmFtZXNcbiAgICAgIH0pXG5cblxuICAgICAgLy8gR2FtZSBMb2dpY1xuICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudEZyYW1lICE9PSAxMCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMSkge1xuICAgICAgICAgIGlmIChwaW5zID09PSAxMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGN1cnJlbnRGcmFtZTogdGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUgKyAxXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgY3VycmVudEJvd2w6IHRoaXMuc3RhdGUuY3VycmVudEJvd2wgKyAxXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAyKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50Qm93bDogdGhpcy5zdGF0ZS5jdXJyZW50Qm93bCAtIDEsXG4gICAgICAgICAgICBjdXJyZW50RnJhbWU6IHRoaXMuc3RhdGUuY3VycmVudEZyYW1lICsgMVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUgPT09IDEwKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAzKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0b3RhbFNjb3JlOiAnZ2FtZSBvdmVyJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudEJvd2w6IHRoaXMuc3RhdGUuY3VycmVudEJvd2wgKyAxXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAyICYmIHBpbnMgPT09IDEwKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50Qm93bDogdGhpcy5zdGF0ZS5jdXJyZW50Qm93bCArIDFcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVudEJvd2wgPT09IDIgJiYgcGlucyAhPT0gMTApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRvdGFsU2NvcmU6ICdnYW1lIG92ZXInXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMSkge1xuICAgICAgICB2YXIgcmVtYWluaW5nUGlucyA9IDEwIC0gcGlucztcbiAgICAgICAgdmFyIHJlbWFpbmluZ09wdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPD0gcmVtYWluaW5nUGluczsgaysrKSB7XG4gICAgICAgICAgcmVtYWluaW5nT3B0aW9ucy5wdXNoKGspXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY3VycmVudE9wdGlvbnM6IHJlbWFpbmluZ09wdGlvbnNcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjdXJyZW50T3B0aW9uczogdGhpcy5zdGF0ZS5vcHRpb25zXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBpZiAocGlucyA9PT0gMTApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY3VycmVudE9wdGlvbnM6IHRoaXMuc3RhdGUub3B0aW9uc1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgQm93bGluZyBBcHBcbiAgICAgICAgPFNjb3JlYm9hcmQgZnJhbWVzPXt0aGlzLnN0YXRlLmZyYW1lc30gLz5cbiAgICAgICAgPEludGVyZmFjZSBvcHRpb25zPXt0aGlzLnN0YXRlLmN1cnJlbnRPcHRpb25zfSBjdXJyZW50RnJhbWU9e3RoaXMuc3RhdGUuY3VycmVudEZyYW1lfSBjdXJyZW50Qm93bD17dGhpcy5zdGF0ZS5jdXJyZW50Qm93bH0gYm93bEhhbmRsZXI9e3RoaXMuYm93bEhhbmRsZXIuYmluZCh0aGlzKX0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuIl19