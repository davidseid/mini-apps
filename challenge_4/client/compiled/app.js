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
    React.createElement(FrameScore, { frameScore: props.frame.frameScore }),
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
    React.createElement(FrameScore, { frameScore: props.frame.frameScore }),
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
              frame.frameScore = frame.bowl1 + frame.bowl2;
            } else if (this.state.currentBowl === 3) {
              frame.bowl3 = pins;
              frame.frameScore = frame.frameScore + frame.bowl3;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiRnJhbWUiLCJmcmFtZU51bSIsImJvd2wxIiwiYm93bDIiLCJmcmFtZVNjb3JlIiwiY3VtdWxhdGl2ZVNjb3JlIiwiY29uZGl0aW9uIiwiVGVudGhGcmFtZSIsImJvd2wzIiwiZnJhbWVzIiwiaSIsInB1c2giLCJvcHRpb25zIiwiaiIsIkludGVyZmFjZSIsInByb3BzIiwiY3VycmVudEZyYW1lIiwiY3VycmVudEJvd2wiLCJib3dsSGFuZGxlciIsIkN1cnJlbnRGcmFtZSIsIkN1cnJlbnRCb3dsIiwiS2V5cGFkIiwibWFwIiwib3B0aW9uIiwiT3B0aW9uIiwibnVtIiwiU2NvcmVib2FyZCIsInNsaWNlIiwiZnJhbWUiLCJGcmFtZUNvbXBvbmVudCIsIlRlbnRoRnJhbWVDb21wb25lbnQiLCJGcmFtZU51bSIsIkJvd2xTY29yZSIsInNjb3JlIiwiRnJhbWVTY29yZSIsIkN1bXVsYXRpdmVTY29yZSIsIkZpbmFsU2NvcmUiLCJBcHAiLCJzdGF0ZSIsInRvdGFsU2NvcmUiLCJ1bmRlZmluZWQiLCJjdXJyZW50T3B0aW9ucyIsImJvd2xzIiwicGlucyIsInNldFN0YXRlIiwibmV3RnJhbWVzIiwibGVuZ3RoIiwicmVtYWluaW5nUGlucyIsInJlbWFpbmluZ09wdGlvbnMiLCJrIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0U7O0FBRUY7QUFDQTtBQUNFO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDRjtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Y7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBT0E7O0lBRU1BLEssR0FDSixlQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLE9BQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FB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Z0IsS0FBS0osSUFBekI7QUFDQSxjQUFJSyxtQkFBbUIsRUFBdkI7QUFDQSxlQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsS0FBS0YsYUFBckIsRUFBb0NFLEdBQXBDLEVBQXlDO0FBQ3ZDRCw2QkFBaUJyQyxJQUFqQixDQUFzQnNDLENBQXRCO0FBQ0Q7QUFDRCxlQUFLTCxRQUFMLENBQWM7QUFDWkgsNEJBQWdCTztBQURKLFdBQWQ7QUFHRCxTQVRELE1BU08sSUFBSSxLQUFLVixLQUFMLENBQVdyQixXQUFYLEtBQTJCLENBQS9CLEVBQWtDO0FBQ3ZDLGVBQUsyQixRQUFMLENBQWM7QUFDWkgsNEJBQWdCLEtBQUtILEtBQUwsQ0FBVzFCO0FBRGYsV0FBZDtBQUdEO0FBQ0QsWUFBSStCLFNBQVMsRUFBYixFQUFpQjtBQUNmLGVBQUtDLFFBQUwsQ0FBYztBQUNaSCw0QkFBZ0IsS0FBS0gsS0FBTCxDQUFXMUI7QUFEZixXQUFkO0FBR0Q7QUFDRjtBQUVGOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUFBO0FBRUUsNEJBQUMsVUFBRCxJQUFZLFFBQVEsS0FBSzBCLEtBQUwsQ0FBVzdCLE1BQS9CLEdBRkY7QUFHRSw0QkFBQyxTQUFELElBQVcsU0FBUyxLQUFLNkIsS0FBTCxDQUFXRyxjQUEvQixFQUErQyxjQUFjLEtBQUtILEtBQUwsQ0FBV3RCLFlBQXhFLEVBQXNGLGFBQWEsS0FBS3NCLEtBQUwsQ0FBV3JCLFdBQTlHLEVBQTJILGFBQWEsS0FBS0MsV0FBTCxDQUFpQmdDLElBQWpCLENBQXNCLElBQXRCLENBQXhJO0FBSEYsT0FERjtBQU9EOzs7O0VBektlQyxNQUFNQyxTOztBQTZLeEJDLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqKiogQ29tcG9uZW50cyBUbyBCdWlsZCAqKipcblxuLy8gKioqIFVJIENvbXBvbmVudHMgKioqXG4vLyBDdXJyZW50IEJvd2wgQ29tcG9uZW50XG4vLyBQaW4gUXVhbnRpdHkgU2VsZWN0aW9uIENvbXBvbmVudFxuICAvLyBPcHRpb25zIENvbXBvbmVudHMgKDEwKVxuXG4vLyAqKiogU2NvcmVCb2FyZCBDb21wb25lbnRzICoqKlxuLy8gU2NvcmVib2FyZCBDb21wb25lbnRcbiAgLy8gTm9ybWFsIEZyYW1lIENvbXBvbmVudFxuICAgIC8vIEZyYW1lIE51bSBDb21wb25lbnRcbiAgICAvLyBCb3dsIFNjb3JlIENvbXBvbmVudHMgKDIpXG4gICAgLy8gRnJhbWUgU2NvcmUgQ29tcG9uZW50XG4gICAgLy8gQ3VtbXVsYXRpdmUgU2NvcmUgQ29tcG9uZW50XG4gIC8vIDEwdGggRnJhbWUgQ29tcG9uZW50IFxuICAgIC8vIEZyYW1lIE51bSBDb21wb25lbnRcbiAgICAvLyBCb3dsIFNjb3JlIENvbXBvbmVudHMgKDMpXG4gICAgLy8gRnJhbWUgU2NvcmUgQ29tcG9uZW50XG4gICAgLy8gQ3VtbXVsYXRpdmUgU2NvcmUgQ29tcG9uZW50XG4gIC8vIEZpbmFsIFNjb3JlIENvbXBvbmVudFxuXG4vLyAqKiogTW9kZWwgRGF0YSBTdHJ1Y3R1cmUgSWRlYXMgKioqXG5cbi8vIFRyYWNrIEZyYW1lc1xuLy8gRWFjaCBmcmFtZSBzaG91bGQgaGF2ZSB1cCB0byB0aHJlZSBib3dsc1xuLy8gZWFjaCBmcmFtZSBzaG91bGQgaGF2ZSBmcmFtZSBzY29yZSwgY3VtbXVsYXRpdmUgc2NvcmUgdXAgdG8gdGhhdCBwb2ludFxuLy8gZWFjaCBmcmFtZSBzaG91bGQgYmUgYWJsZSB0byBsb29rIGJhY2sgYXQgdGhlIGZyYW1lcyBiZWZvcmUgaXQgXG5cbi8vIE1ha2UgYW4gYXJyYXkgY29udGFpbmluZyBub3JtYWwgZnJhbWUgb2JqZWN0cyBhbmQgYSAxMHRoIGZyYW1lIG9iamVjdCBhdCB0aGUgZW5kXG4vLyBub3JtYWwgZnJhbWUgb2JqZWN0cyBoYXZlOiBmcmFtZW51bSwgYm93bDEgYW5kIGJvd2wyIHByb3BlcnRpZXMsIGZyYW1lc2NvcmUgcHJvcCwgYW5kIGN1bXVsYXRpdmUgc2NvcmUgcHJvcFxuXG5cblxuXG5cblxuLy8qKiogSW5pdGlhbGl6ZSBGcmFtZXMgRGF0YSBTdHJ1Y3R1cmUgKioqXG5cbmNsYXNzIEZyYW1lIHtcbiAgY29uc3RydWN0b3IoZnJhbWVOdW0pIHtcbiAgICB0aGlzLmZyYW1lTnVtID0gZnJhbWVOdW07XG4gICAgdGhpcy5ib3dsMSA9IG51bGw7XG4gICAgdGhpcy5ib3dsMiA9IG51bGw7XG4gICAgdGhpcy5mcmFtZVNjb3JlID0gbnVsbDtcbiAgICB0aGlzLmN1bXVsYXRpdmVTY29yZSA9IG51bGw7XG4gICAgdGhpcy5jb25kaXRpb24gPSAnb3Blbic7XG4gIH1cbn1cblxuY2xhc3MgVGVudGhGcmFtZSBleHRlbmRzIEZyYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmZyYW1lTnVtID0gMTA7XG4gICAgdGhpcy5ib3dsMyA9IG51bGw7XG4gIH1cbn1cblxudmFyIGZyYW1lcyA9IFtdO1xuZm9yICh2YXIgaSA9IDE7IGkgPCAxMDsgaSsrKSB7XG4gIGZyYW1lcy5wdXNoKG5ldyBGcmFtZShpKSlcbn1cbmZyYW1lcy5wdXNoKG5ldyBUZW50aEZyYW1lKCkpO1xuXG52YXIgb3B0aW9ucyA9IFtdO1xuZm9yICh2YXIgaiA9IDA7IGogPCAxMTsgaisrKSB7XG4gIG9wdGlvbnMucHVzaChqKTtcbn1cblxuXG4vLyAqKiogQnVpbGQgQ29tcG9uZW50cyBTa2VsZXRvbiAqKipcblxuLy8gVUkgSW50ZXJmYWNlIENvbXBvbmVudFxudmFyIEludGVyZmFjZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJpbnRlcmZhY2VcIj5cbiAgICAgIDxDdXJyZW50RnJhbWUgY3VycmVudEZyYW1lPXtwcm9wcy5jdXJyZW50RnJhbWV9Lz5cbiAgICAgIDxDdXJyZW50Qm93bCBjdXJyZW50Qm93bD17cHJvcHMuY3VycmVudEJvd2x9Lz5cbiAgICAgIDxLZXlwYWQgb3B0aW9ucz17cHJvcHMub3B0aW9uc30gYm93bEhhbmRsZXI9e3Byb3BzLmJvd2xIYW5kbGVyfS8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gQ3VycmVudCBGcmFtZSBDb21wb25lbnRcbnZhciBDdXJyZW50RnJhbWUgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1mcmFtZVwiPlxuICAgICAgRnJhbWU6IHtwcm9wcy5jdXJyZW50RnJhbWV9XG4gICAgPC9kaXY+XG4gIClcbn1cbi8vIEN1cnJlbnQgQm93bCBDb21wb25lbnRcbnZhciBDdXJyZW50Qm93bCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LWJvd2xcIj5cbiAgICAgIEJvd2w6IHtwcm9wcy5jdXJyZW50Qm93bH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuLy8gS2V5cGFkIENvbXBvbmVudFxudmFyIEtleXBhZCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJrZXlwYWRcIj5cbiAgICAgIFBpbnMgdG8gSGl0OiBcbiAgICAgIHtwcm9wcy5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiA8T3B0aW9uIG51bT17b3B0aW9ufSBib3dsSGFuZGxlcj17cHJvcHMuYm93bEhhbmRsZXJ9IC8+XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuLy8gT3B0aW9uIENvbXBvbmVudFxudmFyIE9wdGlvbiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJvcHRpb25cIiBvbkNsaWNrPXsoKSA9PiB7cHJvcHMuYm93bEhhbmRsZXIocHJvcHMubnVtKX19ID5cbiAgICA8YnV0dG9uPntwcm9wcy5udW19PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gU2NvcmVib2FyZFxudmFyIFNjb3JlYm9hcmQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwic2NvcmVib2FyZFwiPlxuICAgICAge3Byb3BzLmZyYW1lcy5zbGljZSgwLCA5KS5tYXAoKGZyYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiA8RnJhbWVDb21wb25lbnQgZnJhbWVOdW09e2ZyYW1lLmZyYW1lTnVtfSBmcmFtZT17ZnJhbWV9Lz5cbiAgICAgIH0pfVxuICAgICAgPFRlbnRoRnJhbWVDb21wb25lbnQgZnJhbWVOdW09e2ZyYW1lc1s5XS5mcmFtZU51bX0gZnJhbWU9e2ZyYW1lc1s5XX0gLz5cbiAgICAgIDxGaW5hbFNjb3JlIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gRnJhbWVcbnZhciBGcmFtZUNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmcmFtZVwiPlxuICAgICAgPEZyYW1lTnVtIGZyYW1lTnVtPXtwcm9wcy5mcmFtZU51bX0vPlxuICAgICAgPEJvd2xTY29yZSBib3dsTnVtPXsxfSBzY29yZT17cHJvcHMuZnJhbWUuYm93bDF9IC8+XG4gICAgICA8Qm93bFNjb3JlIGJvd2xOdW09ezJ9IHNjb3JlPXtwcm9wcy5mcmFtZS5ib3dsMn0gLz5cbiAgICAgIDxGcmFtZVNjb3JlIGZyYW1lU2NvcmU9e3Byb3BzLmZyYW1lLmZyYW1lU2NvcmV9Lz5cbiAgICAgIDxDdW11bGF0aXZlU2NvcmUgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBUZW50aCBGcmFtZVxudmFyIFRlbnRoRnJhbWVDb21wb25lbnQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwidGVudGgtZnJhbWVcIj4gXG4gICAgICA8RnJhbWVOdW0gZnJhbWVOdW09e3Byb3BzLmZyYW1lTnVtfS8+XG4gICAgICA8Qm93bFNjb3JlIGJvd2xOdW09ezF9IHNjb3JlPXtwcm9wcy5mcmFtZS5ib3dsMX0gLz5cbiAgICAgIDxCb3dsU2NvcmUgYm93bE51bT17Mn0gc2NvcmU9e3Byb3BzLmZyYW1lLmJvd2wyfSAvPlxuICAgICAgPEJvd2xTY29yZSBib3dsTnVtPXszfSBzY29yZT17cHJvcHMuZnJhbWUuYm93bDN9IC8+XG4gICAgICA8RnJhbWVTY29yZSBmcmFtZVNjb3JlPXtwcm9wcy5mcmFtZS5mcmFtZVNjb3JlfS8+XG4gICAgICA8Q3VtdWxhdGl2ZVNjb3JlIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gRnJhbWUgTnVtXG52YXIgRnJhbWVOdW0gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiZnJhbWUtbnVtXCI+XG4gICAgICBGcmFtZSB7cHJvcHMuZnJhbWVOdW19XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gQm93bCBTY29yZSBcbnZhciBCb3dsU2NvcmUgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiYm93bC1zY29yZVwiPlxuICAgICAge3Byb3BzLnNjb3JlfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEZyYW1lIFNjb3JlXG52YXIgRnJhbWVTY29yZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmcmFtZS1zY29yZVwiPlxuICAgICAgRnJhbWU6IHtwcm9wcy5mcmFtZVNjb3JlfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEN1bXVsYXRpdmUgU2NvcmVcbnZhciBDdW11bGF0aXZlU2NvcmUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImN1bXVsYXRpdmUtc2NvcmVcIj5cbiAgICAgIEN1bXVsYXRpdmU6XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gRmluYWwgU2NvcmVcbnZhciBGaW5hbFNjb3JlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmaW5hbC1zY29yZVwiPlxuICAgICAgRmluYWwgU2NvcmVcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmcmFtZXM6IGZyYW1lcyxcbiAgICAgIGN1cnJlbnRGcmFtZTogMSxcbiAgICAgIGN1cnJlbnRCb3dsOiAxLFxuICAgICAgdG90YWxTY29yZTogdW5kZWZpbmVkLFxuICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgIGN1cnJlbnRPcHRpb25zOiBvcHRpb25zLFxuICAgICAgYm93bHM6IFtdXG4gICAgfVxuICB9XG5cbiAgYm93bEhhbmRsZXIocGlucykge1xuICAgIGlmICh0aGlzLnN0YXRlLnRvdGFsU2NvcmUgPT09IHVuZGVmaW5lZCkge1xuICAgIFxuXG4gICAgICAvL1RPIERPOlxuICAgICAgLy8gZWFjaCBmcmFtZSBoYXMgYSBzdGF0ZTogb3Blbiwgc3BhcmUsIHN0cmlrZSwgY2xvc2VkXG4gICAgICAvLyBpZiB0aGUgZnJhbWUgaXMgb3BlbiB3aGVuIGZyYW1lIG92ZXJcbiAgICAgICAgLy8gY2xvc2UgaXRcbiAgICAgIC8vIGlmIHRoZSBmcmFtZSBpcyBzcGFyZSB3aGVuIHRoZSBmcmFtZSBpcyBvdmVyXG4gICAgICAgIC8vIHdoZW4gdGhlIG5leHQgcm9sbCBpcyBjb21wbGV0ZWRcbiAgICAgICAgLy8gYWRkIGl0IHRvIHRoZSBmcmFtZXNjb3JlIGFuZCBjbG9zZSB0aGUgZnJhbWVcbiAgICAgIC8vIGlmIHRoZSBmcmFtZSBpcyBzdHJpa2Ugd2hlbiB0aGUgZnJhbWUgaXMgb3ZlclxuICAgICAgICAvLyB3aGVuIHRoZSBuZXh0IHR3byByb2xscyBhcmUgY29tcGxldGVkXG4gICAgICAgIC8vIGFkZCB0aGVtIHRvIHRoZSBmcmFtZXNjb3JlIGFuZCBjbG9zZSB0aGUgZnJhbWVcbiAgICAgIFxuICAgICAgLy8gbWFuYWdlIHRoZSBzdGF0ZXMgXG4gICAgICAvLyBsb29wIHRocm91Z2gsIGlmIHRoZXJlIGFyZSBhbnkgc3BhcmVzXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBuZXh0IHJvbGwgZXhpc3RzXG4gICAgICAgICAgLy8gaWYgc28gYWRkIGl0IHRvIHRoZSBzcGFyZSBmcmFtZSBhbmQgY2xvc2UgdGhlIGZyYW1lXG5cbiAgICAgIHZhciBib3dscyA9IHRoaXMuc3RhdGUuYm93bHM7XG4gICAgICBib3dscy5wdXNoKHBpbnMpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGJvd2xzOiBib3dsc1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGNoZWNrIHRoZSBwcmV2aW91cyBmcmFtZSBmb3IgYSBzcGFyZSBjb25kaXRpb25cbiAgICAgIC8vIGlmIHNwYXJlLCBhZGQgcGlucyB0byB0aGUgdGhhdCBmcmFtZSdzIHNjb3JlXG4gICAgICAvLyBjaGFuZ2UgdGhhdCBmcmFtZSdzIGNvbmRpdGlvbiB0byBjbG9zZWRcblxuXG4gICAgICB2YXIgbmV3RnJhbWVzID0gdGhpcy5zdGF0ZS5mcmFtZXM7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0ZyYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZnJhbWUgPSBuZXdGcmFtZXNbaV07XG4gICAgICAgIGlmIChmcmFtZS5mcmFtZU51bSA9PT0gdGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bD09PSAxKSB7XG4gICAgICAgICAgICBpZiAocGlucyA9PT0gMTApIHtcbiAgICAgICAgICAgICAgZnJhbWUuY29uZGl0aW9uID0gJ3N0cmlrZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZyYW1lLmJvd2wxID0gcGlucztcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVudEJvd2wgPT09IDIpIHtcbiAgICAgICAgICAgIGlmIChmcmFtZS5ib3dsMSArIHBpbnMgPT09IDEwKSB7XG4gICAgICAgICAgICAgIGZyYW1lLmNvbmRpdGlvbiA9ICdzcGFyZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZyYW1lLmJvd2wyID0gcGlucztcbiAgICAgICAgICAgIGZyYW1lLmZyYW1lU2NvcmUgPSBmcmFtZS5ib3dsMSArIGZyYW1lLmJvd2wyO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMykge1xuICAgICAgICAgICAgZnJhbWUuYm93bDMgPSBwaW5zO1xuICAgICAgICAgICAgZnJhbWUuZnJhbWVTY29yZSA9IGZyYW1lLmZyYW1lU2NvcmUgKyBmcmFtZS5ib3dsMztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICBpZiAoZnJhbWUuZnJhbWVOdW0gPT09IHRoaXMuc3RhdGUuY3VycmVudEZyYW1lIC0gMSkge1xuICAgICAgICAgIGlmIChmcmFtZS5jb25kaXRpb24gPT09ICdzcGFyZScpIHtcbiAgICAgICAgICAgIGZyYW1lLmZyYW1lU2NvcmUgKz0gcGlucztcbiAgICAgICAgICAgIGZyYW1lLmNvbmRpdGlvbiA9ICdjbG9zZWQnXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmcmFtZS5jb25kaXRpb24gPT09ICdzdHJpa2UnKSB7XG4gICAgICAgICAgICBmcmFtZS5mcmFtZVNjb3JlICs9IHBpbnM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoZnJhbWUuZnJhbWVOdW0gPT09IHRoaXMuc3RhdGUuY3VycmVudEZyYW1lIC0gMikge1xuICAgICAgICAgIGlmIChmcmFtZS5jb25kaXRpb24gPT09ICdzdHJpa2UnKSB7XG4gICAgICAgICAgICBmcmFtZS5mcmFtZVNjb3JlICs9IHBpbnM7XG4gICAgICAgICAgICBmcmFtZS5jb25kaXRpb24gPSAnY2xvc2VkJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgfVxuXG5cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZyYW1lczogbmV3RnJhbWVzXG4gICAgICB9KVxuXG5cbiAgICAgIC8vIEdhbWUgTG9naWNcbiAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZSAhPT0gMTApIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudEJvd2wgPT09IDEpIHtcbiAgICAgICAgICBpZiAocGlucyA9PT0gMTApIHtcblxuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgY3VycmVudEZyYW1lOiB0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZSArIDEsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgY3VycmVudEJvd2w6IHRoaXMuc3RhdGUuY3VycmVudEJvd2wgKyAxXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAyKSB7XG4gICAgICAgICAgaWYgKHBpbnMgPT09IDEwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiAnc3BhcmUnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRCb3dsOiB0aGlzLnN0YXRlLmN1cnJlbnRCb3dsIC0gMSxcbiAgICAgICAgICAgIGN1cnJlbnRGcmFtZTogdGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUgKyAxXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZSA9PT0gMTApIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudEJvd2wgPT09IDMpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRvdGFsU2NvcmU6ICdnYW1lIG92ZXInXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50Qm93bDogdGhpcy5zdGF0ZS5jdXJyZW50Qm93bCArIDFcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVudEJvd2wgPT09IDIgJiYgcGlucyA9PT0gMTApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRCb3dsOiB0aGlzLnN0YXRlLmN1cnJlbnRCb3dsICsgMVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMiAmJiBwaW5zICE9PSAxMCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdG90YWxTY29yZTogJ2dhbWUgb3ZlcidcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAxKSB7XG4gICAgICAgIHZhciByZW1haW5pbmdQaW5zID0gMTAgLSBwaW5zO1xuICAgICAgICB2YXIgcmVtYWluaW5nT3B0aW9ucyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8PSByZW1haW5pbmdQaW5zOyBrKyspIHtcbiAgICAgICAgICByZW1haW5pbmdPcHRpb25zLnB1c2goaylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjdXJyZW50T3B0aW9uczogcmVtYWluaW5nT3B0aW9uc1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGN1cnJlbnRPcHRpb25zOiB0aGlzLnN0YXRlLm9wdGlvbnNcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGlmIChwaW5zID09PSAxMCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjdXJyZW50T3B0aW9uczogdGhpcy5zdGF0ZS5vcHRpb25zXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBCb3dsaW5nIEFwcFxuICAgICAgICA8U2NvcmVib2FyZCBmcmFtZXM9e3RoaXMuc3RhdGUuZnJhbWVzfSAvPlxuICAgICAgICA8SW50ZXJmYWNlIG9wdGlvbnM9e3RoaXMuc3RhdGUuY3VycmVudE9wdGlvbnN9IGN1cnJlbnRGcmFtZT17dGhpcy5zdGF0ZS5jdXJyZW50RnJhbWV9IGN1cnJlbnRCb3dsPXt0aGlzLnN0YXRlLmN1cnJlbnRCb3dsfSBib3dsSGFuZGxlcj17dGhpcy5ib3dsSGFuZGxlci5iaW5kKHRoaXMpfS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuXG4iXX0=