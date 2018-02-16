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

          if (frame.frameNum === this.state.currentFrame - 1) {
            if (frame.condition === 'spare') {
              frame.frameScore += pins;
              frame.condition = 'closed';
            }
            if (frame.condition === 'strike') {
              frame.frameScore += pins;
            }
          }

          if (frame.frameNum === this.state.currentFrame - 2) {
            if (frame.condition === 'strike') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiRnJhbWUiLCJmcmFtZU51bSIsImJvd2wxIiwiYm93bDIiLCJmcmFtZVNjb3JlIiwiY3VtdWxhdGl2ZVNjb3JlIiwiY29uZGl0aW9uIiwiVGVudGhGcmFtZSIsImJvd2wzIiwiZnJhbWVzIiwiaSIsInB1c2giLCJvcHRpb25zIiwiaiIsIkludGVyZmFjZSIsInByb3BzIiwiY3VycmVudEZyYW1lIiwiY3VycmVudEJvd2wiLCJib3dsSGFuZGxlciIsIkN1cnJlbnRGcmFtZSIsIkN1cnJlbnRCb3dsIiwiS2V5cGFkIiwibWFwIiwib3B0aW9uIiwiT3B0aW9uIiwibnVtIiwiU2NvcmVib2FyZCIsInNsaWNlIiwiZnJhbWUiLCJGcmFtZUNvbXBvbmVudCIsIlRlbnRoRnJhbWVDb21wb25lbnQiLCJGcmFtZU51bSIsIkJvd2xTY29yZSIsInNjb3JlIiwiRnJhbWVTY29yZSIsIkN1bXVsYXRpdmVTY29yZSIsIkZpbmFsU2NvcmUiLCJBcHAiLCJzdGF0ZSIsInRvdGFsU2NvcmUiLCJ1bmRlZmluZWQiLCJjdXJyZW50T3B0aW9ucyIsImJvd2xzIiwicGlucyIsInNldFN0YXRlIiwibmV3RnJhbWVzIiwibGVuZ3RoIiwicmVtYWluaW5nUGlucyIsInJlbWFpbmluZ09wdGlvbnMiLCJrIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0U7O0FBRUY7QUFDQTtBQUNFO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDRjtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Y7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBT0E7O0lBRU1BLEssR0FDSixlQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLE9BQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FB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XG4vLyAqKiogVUkgQ29tcG9uZW50cyAqKipcbi8vIEN1cnJlbnQgQm93bCBDb21wb25lbnRcbi8vIFBpbiBRdWFudGl0eSBTZWxlY3Rpb24gQ29tcG9uZW50XG4gIC8vIE9wdGlvbnMgQ29tcG9uZW50cyAoMTApXG5cbi8vICoqKiBTY29yZUJvYXJkIENvbXBvbmVudHMgKioqXG4vLyBTY29yZWJvYXJkIENvbXBvbmVudFxuICAvLyBOb3JtYWwgRnJhbWUgQ29tcG9uZW50XG4gICAgLy8gRnJhbWUgTnVtIENvbXBvbmVudFxuICAgIC8vIEJvd2wgU2NvcmUgQ29tcG9uZW50cyAoMilcbiAgICAvLyBGcmFtZSBTY29yZSBDb21wb25lbnRcbiAgICAvLyBDdW1tdWxhdGl2ZSBTY29yZSBDb21wb25lbnRcbiAgLy8gMTB0aCBGcmFtZSBDb21wb25lbnQgXG4gICAgLy8gRnJhbWUgTnVtIENvbXBvbmVudFxuICAgIC8vIEJvd2wgU2NvcmUgQ29tcG9uZW50cyAoMylcbiAgICAvLyBGcmFtZSBTY29yZSBDb21wb25lbnRcbiAgICAvLyBDdW1tdWxhdGl2ZSBTY29yZSBDb21wb25lbnRcbiAgLy8gRmluYWwgU2NvcmUgQ29tcG9uZW50XG5cbi8vICoqKiBNb2RlbCBEYXRhIFN0cnVjdHVyZSBJZGVhcyAqKipcblxuLy8gVHJhY2sgRnJhbWVzXG4vLyBFYWNoIGZyYW1lIHNob3VsZCBoYXZlIHVwIHRvIHRocmVlIGJvd2xzXG4vLyBlYWNoIGZyYW1lIHNob3VsZCBoYXZlIGZyYW1lIHNjb3JlLCBjdW1tdWxhdGl2ZSBzY29yZSB1cCB0byB0aGF0IHBvaW50XG4vLyBlYWNoIGZyYW1lIHNob3VsZCBiZSBhYmxlIHRvIGxvb2sgYmFjayBhdCB0aGUgZnJhbWVzIGJlZm9yZSBpdCBcblxuLy8gTWFrZSBhbiBhcnJheSBjb250YWluaW5nIG5vcm1hbCBmcmFtZSBvYmplY3RzIGFuZCBhIDEwdGggZnJhbWUgb2JqZWN0IGF0IHRoZSBlbmRcbi8vIG5vcm1hbCBmcmFtZSBvYmplY3RzIGhhdmU6IGZyYW1lbnVtLCBib3dsMSBhbmQgYm93bDIgcHJvcGVydGllcywgZnJhbWVzY29yZSBwcm9wLCBhbmQgY3VtdWxhdGl2ZSBzY29yZSBwcm9wXG5cblxuXG5cblxuXG4vLyoqKiBJbml0aWFsaXplIEZyYW1lcyBEYXRhIFN0cnVjdHVyZSAqKipcblxuY2xhc3MgRnJhbWUge1xuICBjb25zdHJ1Y3RvcihmcmFtZU51bSkge1xuICAgIHRoaXMuZnJhbWVOdW0gPSBmcmFtZU51bTtcbiAgICB0aGlzLmJvd2wxID0gbnVsbDtcbiAgICB0aGlzLmJvd2wyID0gbnVsbDtcbiAgICB0aGlzLmZyYW1lU2NvcmUgPSBudWxsO1xuICAgIHRoaXMuY3VtdWxhdGl2ZVNjb3JlID0gbnVsbDtcbiAgICB0aGlzLmNvbmRpdGlvbiA9ICdvcGVuJztcbiAgfVxufVxuXG5jbGFzcyBUZW50aEZyYW1lIGV4dGVuZHMgRnJhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZnJhbWVOdW0gPSAxMDtcbiAgICB0aGlzLmJvd2wzID0gbnVsbDtcbiAgfVxufVxuXG52YXIgZnJhbWVzID0gW107XG5mb3IgKHZhciBpID0gMTsgaSA8IDEwOyBpKyspIHtcbiAgZnJhbWVzLnB1c2gobmV3IEZyYW1lKGkpKVxufVxuZnJhbWVzLnB1c2gobmV3IFRlbnRoRnJhbWUoKSk7XG5cbnZhciBvcHRpb25zID0gW107XG5mb3IgKHZhciBqID0gMDsgaiA8IDExOyBqKyspIHtcbiAgb3B0aW9ucy5wdXNoKGopO1xufVxuXG5cbi8vICoqKiBCdWlsZCBDb21wb25lbnRzIFNrZWxldG9uICoqKlxuXG4vLyBVSSBJbnRlcmZhY2UgQ29tcG9uZW50XG52YXIgSW50ZXJmYWNlID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImludGVyZmFjZVwiPlxuICAgICAgPEN1cnJlbnRGcmFtZSBjdXJyZW50RnJhbWU9e3Byb3BzLmN1cnJlbnRGcmFtZX0vPlxuICAgICAgPEN1cnJlbnRCb3dsIGN1cnJlbnRCb3dsPXtwcm9wcy5jdXJyZW50Qm93bH0vPlxuICAgICAgPEtleXBhZCBvcHRpb25zPXtwcm9wcy5vcHRpb25zfSBib3dsSGFuZGxlcj17cHJvcHMuYm93bEhhbmRsZXJ9Lz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBDdXJyZW50IEZyYW1lIENvbXBvbmVudFxudmFyIEN1cnJlbnRGcmFtZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LWZyYW1lXCI+XG4gICAgICBGcmFtZToge3Byb3BzLmN1cnJlbnRGcmFtZX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuLy8gQ3VycmVudCBCb3dsIENvbXBvbmVudFxudmFyIEN1cnJlbnRCb3dsID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtYm93bFwiPlxuICAgICAgQm93bDoge3Byb3BzLmN1cnJlbnRCb3dsfVxuICAgIDwvZGl2PlxuICApXG59XG4vLyBLZXlwYWQgQ29tcG9uZW50XG52YXIgS2V5cGFkID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImtleXBhZFwiPlxuICAgICAgUGlucyB0byBIaXQ6IFxuICAgICAge3Byb3BzLm9wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIDxPcHRpb24gbnVtPXtvcHRpb259IGJvd2xIYW5kbGVyPXtwcm9wcy5ib3dsSGFuZGxlcn0gLz5cbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApXG59XG4vLyBPcHRpb24gQ29tcG9uZW50XG52YXIgT3B0aW9uID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cIm9wdGlvblwiIG9uQ2xpY2s9eygpID0+IHtwcm9wcy5ib3dsSGFuZGxlcihwcm9wcy5udW0pfX0gPlxuICAgIDxidXR0b24+e3Byb3BzLm51bX08L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBTY29yZWJvYXJkXG52YXIgU2NvcmVib2FyZCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJzY29yZWJvYXJkXCI+XG4gICAgICB7cHJvcHMuZnJhbWVzLnNsaWNlKDAsIDkpLm1hcCgoZnJhbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIDxGcmFtZUNvbXBvbmVudCBmcmFtZU51bT17ZnJhbWUuZnJhbWVOdW19IGZyYW1lPXtmcmFtZX0vPlxuICAgICAgfSl9XG4gICAgICA8VGVudGhGcmFtZUNvbXBvbmVudCBmcmFtZU51bT17ZnJhbWVzWzldLmZyYW1lTnVtfSBmcmFtZT17ZnJhbWVzWzldfSAvPlxuICAgICAgPEZpbmFsU2NvcmUgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBGcmFtZVxudmFyIEZyYW1lQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImZyYW1lXCI+XG4gICAgICA8RnJhbWVOdW0gZnJhbWVOdW09e3Byb3BzLmZyYW1lTnVtfS8+XG4gICAgICA8Qm93bFNjb3JlIGJvd2xOdW09ezF9IHNjb3JlPXtwcm9wcy5mcmFtZS5ib3dsMX0gLz5cbiAgICAgIDxCb3dsU2NvcmUgYm93bE51bT17Mn0gc2NvcmU9e3Byb3BzLmZyYW1lLmJvd2wyfSAvPlxuICAgICAgPEZyYW1lU2NvcmUgZnJhbWVTY29yZT17cHJvcHMuZnJhbWUuYm93bDEgKyBwcm9wcy5mcmFtZS5ib3dsMiArIHByb3BzLmZyYW1lLmZyYW1lU2NvcmV9Lz5cbiAgICAgIDxDdW11bGF0aXZlU2NvcmUgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBUZW50aCBGcmFtZVxudmFyIFRlbnRoRnJhbWVDb21wb25lbnQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwidGVudGgtZnJhbWVcIj4gXG4gICAgICA8RnJhbWVOdW0gZnJhbWVOdW09e3Byb3BzLmZyYW1lTnVtfS8+XG4gICAgICA8Qm93bFNjb3JlIGJvd2xOdW09ezF9IHNjb3JlPXtwcm9wcy5mcmFtZS5ib3dsMX0gLz5cbiAgICAgIDxCb3dsU2NvcmUgYm93bE51bT17Mn0gc2NvcmU9e3Byb3BzLmZyYW1lLmJvd2wyfSAvPlxuICAgICAgPEJvd2xTY29yZSBib3dsTnVtPXszfSBzY29yZT17cHJvcHMuZnJhbWUuYm93bDN9IC8+XG4gICAgICA8RnJhbWVTY29yZSBmcmFtZVNjb3JlPXtwcm9wcy5mcmFtZS5ib3dsMSArIHByb3BzLmZyYW1lLmJvd2wyICsgcHJvcHMuZnJhbWUuYm93bDMgKyBwcm9wcy5mcmFtZS5mcmFtZVNjb3JlfS8+XG4gICAgICA8Q3VtdWxhdGl2ZVNjb3JlIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gRnJhbWUgTnVtXG52YXIgRnJhbWVOdW0gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiZnJhbWUtbnVtXCI+XG4gICAgICBGcmFtZSB7cHJvcHMuZnJhbWVOdW19XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gQm93bCBTY29yZSBcbnZhciBCb3dsU2NvcmUgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiYm93bC1zY29yZVwiPlxuICAgICAge3Byb3BzLnNjb3JlfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEZyYW1lIFNjb3JlXG52YXIgRnJhbWVTY29yZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmcmFtZS1zY29yZVwiPlxuICAgICAgRnJhbWU6IHtwcm9wcy5mcmFtZVNjb3JlfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEN1bXVsYXRpdmUgU2NvcmVcbnZhciBDdW11bGF0aXZlU2NvcmUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImN1bXVsYXRpdmUtc2NvcmVcIj5cbiAgICAgIEN1bXVsYXRpdmU6XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gRmluYWwgU2NvcmVcbnZhciBGaW5hbFNjb3JlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmaW5hbC1zY29yZVwiPlxuICAgICAgRmluYWwgU2NvcmVcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmcmFtZXM6IGZyYW1lcyxcbiAgICAgIGN1cnJlbnRGcmFtZTogMSxcbiAgICAgIGN1cnJlbnRCb3dsOiAxLFxuICAgICAgdG90YWxTY29yZTogdW5kZWZpbmVkLFxuICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgIGN1cnJlbnRPcHRpb25zOiBvcHRpb25zLFxuICAgICAgYm93bHM6IFtdXG4gICAgfVxuICB9XG5cbiAgYm93bEhhbmRsZXIocGlucykge1xuICAgIGlmICh0aGlzLnN0YXRlLnRvdGFsU2NvcmUgPT09IHVuZGVmaW5lZCkge1xuICAgIFxuXG4gICAgICAvL1RPIERPOlxuICAgICAgLy8gZWFjaCBmcmFtZSBoYXMgYSBzdGF0ZTogb3Blbiwgc3BhcmUsIHN0cmlrZSwgY2xvc2VkXG4gICAgICAvLyBpZiB0aGUgZnJhbWUgaXMgb3BlbiB3aGVuIGZyYW1lIG92ZXJcbiAgICAgICAgLy8gY2xvc2UgaXRcbiAgICAgIC8vIGlmIHRoZSBmcmFtZSBpcyBzcGFyZSB3aGVuIHRoZSBmcmFtZSBpcyBvdmVyXG4gICAgICAgIC8vIHdoZW4gdGhlIG5leHQgcm9sbCBpcyBjb21wbGV0ZWRcbiAgICAgICAgLy8gYWRkIGl0IHRvIHRoZSBmcmFtZXNjb3JlIGFuZCBjbG9zZSB0aGUgZnJhbWVcbiAgICAgIC8vIGlmIHRoZSBmcmFtZSBpcyBzdHJpa2Ugd2hlbiB0aGUgZnJhbWUgaXMgb3ZlclxuICAgICAgICAvLyB3aGVuIHRoZSBuZXh0IHR3byByb2xscyBhcmUgY29tcGxldGVkXG4gICAgICAgIC8vIGFkZCB0aGVtIHRvIHRoZSBmcmFtZXNjb3JlIGFuZCBjbG9zZSB0aGUgZnJhbWVcbiAgICAgIFxuICAgICAgLy8gbWFuYWdlIHRoZSBzdGF0ZXMgXG4gICAgICAvLyBsb29wIHRocm91Z2gsIGlmIHRoZXJlIGFyZSBhbnkgc3BhcmVzXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBuZXh0IHJvbGwgZXhpc3RzXG4gICAgICAgICAgLy8gaWYgc28gYWRkIGl0IHRvIHRoZSBzcGFyZSBmcmFtZSBhbmQgY2xvc2UgdGhlIGZyYW1lXG5cbiAgICAgIHZhciBib3dscyA9IHRoaXMuc3RhdGUuYm93bHM7XG4gICAgICBib3dscy5wdXNoKHBpbnMpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGJvd2xzOiBib3dsc1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGNoZWNrIHRoZSBwcmV2aW91cyBmcmFtZSBmb3IgYSBzcGFyZSBjb25kaXRpb25cbiAgICAgIC8vIGlmIHNwYXJlLCBhZGQgcGlucyB0byB0aGUgdGhhdCBmcmFtZSdzIHNjb3JlXG4gICAgICAvLyBjaGFuZ2UgdGhhdCBmcmFtZSdzIGNvbmRpdGlvbiB0byBjbG9zZWRcblxuXG5cblxuXG4gICAgICB2YXIgbmV3RnJhbWVzID0gdGhpcy5zdGF0ZS5mcmFtZXM7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0ZyYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZnJhbWUgPSBuZXdGcmFtZXNbaV07XG4gICAgICAgIGlmIChmcmFtZS5mcmFtZU51bSA9PT0gdGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bD09PSAxKSB7XG4gICAgICAgICAgICBpZiAocGlucyA9PT0gMTApIHtcbiAgICAgICAgICAgICAgZnJhbWUuY29uZGl0aW9uID0gJ3N0cmlrZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZyYW1lLmJvd2wxID0gcGlucztcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVudEJvd2wgPT09IDIpIHtcbiAgICAgICAgICAgIGlmIChmcmFtZS5ib3dsMSArIHBpbnMgPT09IDEwKSB7XG4gICAgICAgICAgICAgIGZyYW1lLmNvbmRpdGlvbiA9ICdzcGFyZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZyYW1lLmJvd2wyID0gcGlucztcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVudEJvd2wgPT09IDMpIHtcbiAgICAgICAgICAgIGZyYW1lLmJvd2wzID0gcGlucztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICBpZiAoZnJhbWUuZnJhbWVOdW0gPT09IHRoaXMuc3RhdGUuY3VycmVudEZyYW1lIC0gMSkge1xuICAgICAgICAgIGlmIChmcmFtZS5jb25kaXRpb24gPT09ICdzcGFyZScpIHtcbiAgICAgICAgICAgIGZyYW1lLmZyYW1lU2NvcmUgKz0gcGlucztcbiAgICAgICAgICAgIGZyYW1lLmNvbmRpdGlvbiA9ICdjbG9zZWQnXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmcmFtZS5jb25kaXRpb24gPT09ICdzdHJpa2UnKSB7XG4gICAgICAgICAgICBmcmFtZS5mcmFtZVNjb3JlICs9IHBpbnM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZyYW1lLmZyYW1lTnVtID09PSB0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZSAtIDIpIHtcbiAgICAgICAgICBpZiAoZnJhbWUuY29uZGl0aW9uID09PSAnc3RyaWtlJykge1xuICAgICAgICAgICAgZnJhbWUuZnJhbWVTY29yZSArPSBwaW5zO1xuICAgICAgICAgICAgZnJhbWUuY29uZGl0aW9uID0gJ2Nsb3NlZCdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgIH1cblxuXG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmcmFtZXM6IG5ld0ZyYW1lc1xuICAgICAgfSlcblxuXG4gICAgICAvLyBHYW1lIExvZ2ljXG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUgIT09IDEwKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAxKSB7XG4gICAgICAgICAgaWYgKHBpbnMgPT09IDEwKSB7XG5cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGN1cnJlbnRGcmFtZTogdGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUgKyAxLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGN1cnJlbnRCb3dsOiB0aGlzLnN0YXRlLmN1cnJlbnRCb3dsICsgMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMikge1xuICAgICAgICAgIGlmIChwaW5zID09PSAxMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGNvbmRpdGlvbjogJ3NwYXJlJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50Qm93bDogdGhpcy5zdGF0ZS5jdXJyZW50Qm93bCAtIDEsXG4gICAgICAgICAgICBjdXJyZW50RnJhbWU6IHRoaXMuc3RhdGUuY3VycmVudEZyYW1lICsgMVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUgPT09IDEwKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAzKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0b3RhbFNjb3JlOiAnZ2FtZSBvdmVyJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudEJvd2w6IHRoaXMuc3RhdGUuY3VycmVudEJvd2wgKyAxXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAyICYmIHBpbnMgPT09IDEwKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50Qm93bDogdGhpcy5zdGF0ZS5jdXJyZW50Qm93bCArIDFcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVudEJvd2wgPT09IDIgJiYgcGlucyAhPT0gMTApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRvdGFsU2NvcmU6ICdnYW1lIG92ZXInXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMSkge1xuICAgICAgICB2YXIgcmVtYWluaW5nUGlucyA9IDEwIC0gcGlucztcbiAgICAgICAgdmFyIHJlbWFpbmluZ09wdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPD0gcmVtYWluaW5nUGluczsgaysrKSB7XG4gICAgICAgICAgcmVtYWluaW5nT3B0aW9ucy5wdXNoKGspXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY3VycmVudE9wdGlvbnM6IHJlbWFpbmluZ09wdGlvbnNcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjdXJyZW50T3B0aW9uczogdGhpcy5zdGF0ZS5vcHRpb25zXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBpZiAocGlucyA9PT0gMTApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY3VycmVudE9wdGlvbnM6IHRoaXMuc3RhdGUub3B0aW9uc1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgQm93bGluZyBBcHBcbiAgICAgICAgPFNjb3JlYm9hcmQgZnJhbWVzPXt0aGlzLnN0YXRlLmZyYW1lc30gLz5cbiAgICAgICAgPEludGVyZmFjZSBvcHRpb25zPXt0aGlzLnN0YXRlLmN1cnJlbnRPcHRpb25zfSBjdXJyZW50RnJhbWU9e3RoaXMuc3RhdGUuY3VycmVudEZyYW1lfSBjdXJyZW50Qm93bD17dGhpcy5zdGF0ZS5jdXJyZW50Qm93bH0gYm93bEhhbmRsZXI9e3RoaXMuYm93bEhhbmRsZXIuYmluZCh0aGlzKX0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuIl19