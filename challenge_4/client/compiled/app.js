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

      // if not 10th frame
      // if bowl is 1
      // increment bowl
      // if bowl is 2
      // decrement bowl and increment frame

      // if 10th frame
      // if bowl is 1 || 2 
      // increment bowl
      // if bowl is 3
      // end game

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

        // if (this.state.currentBowl === 1 || this.state.currentBowl === 2) {
        //   this.setState({
        //     currentBowl: this.state.currentBowl + 1
        //   })
        // } else if (this.state.currentBowl === 3) {
        //   this.setState({
        //     totalScore: 'game over'
        //   })
        // }
      }

      // if (this.state.currentBowl === 1 && pins !== 10) {
      //   this.setState({
      //     currentBowl: 2
      //   })
      // } else if (this.state.currentBowl === 1 && pins === 10) {

      //   if (this.state.currentFrame !== 10) {
      //     this.setState({
      //       currentFrame: (this.state.currentFrame + 1)
      //     })
      //   } else if (this.state.currentBowl !== 3) {
      //     this.setState({
      //       currentBowl: (this.state.currentBowl + 1)
      //     })
      //   } else if (this.state.currentBowl === 3) {
      //     this.setState({
      //       totalScore: 'game over'
      //     })
      //   }

      // } else {

      //   if (this.state.currentBowl === 2) {

      //     if (this.state.currentFrame !== 10) {
      //       this.setState({
      //         currentBowl: 1,
      //         currentFrame: (this.state.currentFrame + 1)
      //       })
      //     } else {
      //       this.setState({
      //         totalScore: 'game over'
      //       })
      //     }
      //   }
      // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiRnJhbWUiLCJmcmFtZU51bSIsImJvd2wxIiwiYm93bDIiLCJmcmFtZVNjb3JlIiwiY3VtdWxhdGl2ZVNjb3JlIiwiVGVudGhGcmFtZSIsImJvd2wzIiwiZnJhbWVzIiwiaSIsInB1c2giLCJvcHRpb25zIiwiaiIsIkludGVyZmFjZSIsInByb3BzIiwiY3VycmVudEZyYW1lIiwiY3VycmVudEJvd2wiLCJib3dsSGFuZGxlciIsIkN1cnJlbnRGcmFtZSIsIkN1cnJlbnRCb3dsIiwiS2V5cGFkIiwibWFwIiwib3B0aW9uIiwiT3B0aW9uIiwibnVtIiwiU2NvcmVib2FyZCIsInNsaWNlIiwiZnJhbWUiLCJGcmFtZUNvbXBvbmVudCIsIlRlbnRoRnJhbWVDb21wb25lbnQiLCJGcmFtZU51bSIsIkJvd2xTY29yZSIsImJvd2xOdW0iLCJGcmFtZVNjb3JlIiwiQ3VtdWxhdGl2ZVNjb3JlIiwiRmluYWxTY29yZSIsIkFwcCIsInN0YXRlIiwidG90YWxTY29yZSIsInVuZGVmaW5lZCIsInBpbnMiLCJzZXRTdGF0ZSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNFOztBQUVGO0FBQ0E7QUFDRTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Y7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNGOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUlBOztJQUVNQSxLLEdBQ0osZUFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixPQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLE9BQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsT0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxPQUFLQyxVQUFMLEdBQWtCLENB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LFlBQXBDLEVBQWtELGFBQWEsS0FBS3NCLEtBQUwsQ0FBV3JCLFdBQTFFLEVBQXVGLGFBQWEsS0FBS0MsV0FBTCxDQUFpQnlCLElBQWpCLENBQXNCLElBQXRCLENBQXBHO0FBSEYsT0FERjtBQU9EOzs7O0VBcEllQyxNQUFNQyxTOztBQXdJeEJDLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqKiogQ29tcG9uZW50cyBUbyBCdWlsZCAqKipcblxuLy8gKioqIFVJIENvbXBvbmVudHMgKioqXG4vLyBDdXJyZW50IEJvd2wgQ29tcG9uZW50XG4vLyBQaW4gUXVhbnRpdHkgU2VsZWN0aW9uIENvbXBvbmVudFxuICAvLyBPcHRpb25zIENvbXBvbmVudHMgKDEwKVxuXG4vLyAqKiogU2NvcmVCb2FyZCBDb21wb25lbnRzICoqKlxuLy8gU2NvcmVib2FyZCBDb21wb25lbnRcbiAgLy8gTm9ybWFsIEZyYW1lIENvbXBvbmVudFxuICAgIC8vIEZyYW1lIE51bSBDb21wb25lbnRcbiAgICAvLyBCb3dsIFNjb3JlIENvbXBvbmVudHMgKDIpXG4gICAgLy8gRnJhbWUgU2NvcmUgQ29tcG9uZW50XG4gICAgLy8gQ3VtbXVsYXRpdmUgU2NvcmUgQ29tcG9uZW50XG4gIC8vIDEwdGggRnJhbWUgQ29tcG9uZW50IFxuICAgIC8vIEZyYW1lIE51bSBDb21wb25lbnRcbiAgICAvLyBCb3dsIFNjb3JlIENvbXBvbmVudHMgKDMpXG4gICAgLy8gRnJhbWUgU2NvcmUgQ29tcG9uZW50XG4gICAgLy8gQ3VtbXVsYXRpdmUgU2NvcmUgQ29tcG9uZW50XG4gIC8vIEZpbmFsIFNjb3JlIENvbXBvbmVudFxuXG4vLyAqKiogTW9kZWwgRGF0YSBTdHJ1Y3R1cmUgSWRlYXMgKioqXG5cbi8vIFRyYWNrIEZyYW1lc1xuLy8gRWFjaCBmcmFtZSBzaG91bGQgaGF2ZSB1cCB0byB0aHJlZSBib3dsc1xuLy8gZWFjaCBmcmFtZSBzaG91bGQgaGF2ZSBmcmFtZSBzY29yZSwgY3VtbXVsYXRpdmUgc2NvcmUgdXAgdG8gdGhhdCBwb2ludFxuLy8gZWFjaCBmcmFtZSBzaG91bGQgYmUgYWJsZSB0byBsb29rIGJhY2sgYXQgdGhlIGZyYW1lcyBiZWZvcmUgaXQgXG5cbi8vIE1ha2UgYW4gYXJyYXkgY29udGFpbmluZyBub3JtYWwgZnJhbWUgb2JqZWN0cyBhbmQgYSAxMHRoIGZyYW1lIG9iamVjdCBhdCB0aGUgZW5kXG4vLyBub3JtYWwgZnJhbWUgb2JqZWN0cyBoYXZlOiBmcmFtZW51bSwgYm93bDEgYW5kIGJvd2wyIHByb3BlcnRpZXMsIGZyYW1lc2NvcmUgcHJvcCwgYW5kIGN1bXVsYXRpdmUgc2NvcmUgcHJvcFxuXG4vL1RPIERPOlxuLy8gQm93bEhhbmRsZXJcbi8vIE9uIHJlY2VpdmluZyBhIGNsaWNrXG4vLyB1cGRhdGUgdGhlIGJvd2xcblxuXG5cbi8vKioqIEluaXRpYWxpemUgRnJhbWVzIERhdGEgU3RydWN0dXJlICoqKlxuXG5jbGFzcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKGZyYW1lTnVtKSB7XG4gICAgdGhpcy5mcmFtZU51bSA9IGZyYW1lTnVtO1xuICAgIHRoaXMuYm93bDEgPSAwO1xuICAgIHRoaXMuYm93bDIgPSAwO1xuICAgIHRoaXMuZnJhbWVTY29yZSA9IDA7XG4gICAgdGhpcy5jdW11bGF0aXZlU2NvcmUgPSAwO1xuICB9XG59XG5cbmNsYXNzIFRlbnRoRnJhbWUgZXh0ZW5kcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5mcmFtZU51bSA9IDEwO1xuICAgIHRoaXMuYm93bDMgPSAwO1xuICB9XG59XG5cbnZhciBmcmFtZXMgPSBbXTtcbmZvciAodmFyIGkgPSAxOyBpIDwgMTA7IGkrKykge1xuICBmcmFtZXMucHVzaChuZXcgRnJhbWUoaSkpXG59XG5mcmFtZXMucHVzaChuZXcgVGVudGhGcmFtZSgpKTtcblxudmFyIG9wdGlvbnMgPSBbXTtcbmZvciAodmFyIGogPSAxOyBqIDwgMTE7IGorKykge1xuICBvcHRpb25zLnB1c2goaik7XG59XG5cblxuLy8gKioqIEJ1aWxkIENvbXBvbmVudHMgU2tlbGV0b24gKioqXG5cbi8vIFVJIEludGVyZmFjZSBDb21wb25lbnRcbnZhciBJbnRlcmZhY2UgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiaW50ZXJmYWNlXCI+XG4gICAgICA8Q3VycmVudEZyYW1lIGN1cnJlbnRGcmFtZT17cHJvcHMuY3VycmVudEZyYW1lfS8+XG4gICAgICA8Q3VycmVudEJvd2wgY3VycmVudEJvd2w9e3Byb3BzLmN1cnJlbnRCb3dsfS8+XG4gICAgICA8S2V5cGFkIGJvd2xIYW5kbGVyPXtwcm9wcy5ib3dsSGFuZGxlcn0vPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEN1cnJlbnQgRnJhbWUgQ29tcG9uZW50XG52YXIgQ3VycmVudEZyYW1lID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtZnJhbWVcIj5cbiAgICAgIEZyYW1lIE51bWJlcjoge3Byb3BzLmN1cnJlbnRGcmFtZX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuLy8gQ3VycmVudCBCb3dsIENvbXBvbmVudFxudmFyIEN1cnJlbnRCb3dsID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtYm93bFwiPlxuICAgICAgQm93bCBOdW1iZXI6IHtwcm9wcy5jdXJyZW50Qm93bH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuLy8gS2V5cGFkIENvbXBvbmVudFxudmFyIEtleXBhZCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJrZXlwYWRcIj5cbiAgICAgIFBpbnMgdG8gSGl0OiBcbiAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiA8T3B0aW9uIG51bT17b3B0aW9ufSBib3dsSGFuZGxlcj17cHJvcHMuYm93bEhhbmRsZXJ9IC8+XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuLy8gT3B0aW9uIENvbXBvbmVudFxudmFyIE9wdGlvbiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJvcHRpb25cIiBvbkNsaWNrPXsoKSA9PiB7cHJvcHMuYm93bEhhbmRsZXIocHJvcHMubnVtKX19ID5cbiAgICA8YnV0dG9uPntwcm9wcy5udW19PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gU2NvcmVib2FyZFxudmFyIFNjb3JlYm9hcmQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwic2NvcmVib2FyZFwiPlxuICAgICAgU2NvcmVib2FyZFxuICAgICAge3Byb3BzLmZyYW1lcy5zbGljZSgwLCA5KS5tYXAoKGZyYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiA8RnJhbWVDb21wb25lbnQgZnJhbWVOdW09e2ZyYW1lLmZyYW1lTnVtfS8+XG4gICAgICB9KX1cbiAgICAgIDxUZW50aEZyYW1lQ29tcG9uZW50IGZyYW1lTnVtPXtmcmFtZXNbOV0uZnJhbWVOdW19IC8+XG4gICAgICA8RmluYWxTY29yZSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEZyYW1lXG52YXIgRnJhbWVDb21wb25lbnQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiZnJhbWVcIj5cbiAgICAgIDxGcmFtZU51bSBmcmFtZU51bT17cHJvcHMuZnJhbWVOdW19Lz5cbiAgICAgIDxCb3dsU2NvcmUgYm93bE51bT17MX0gLz5cbiAgICAgIDxCb3dsU2NvcmUgYm93bE51bT17Mn0gLz5cbiAgICAgIDxGcmFtZVNjb3JlIC8+XG4gICAgICA8Q3VtdWxhdGl2ZVNjb3JlIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gVGVudGggRnJhbWVcbnZhciBUZW50aEZyYW1lQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cInRlbnRoLWZyYW1lXCI+IFxuICAgICAgPEZyYW1lTnVtIGZyYW1lTnVtPXtwcm9wcy5mcmFtZU51bX0vPlxuICAgICAgPEJvd2xTY29yZSBib3dsTnVtPXsxfSAvPlxuICAgICAgPEJvd2xTY29yZSBib3dsTnVtPXsyfSAvPlxuICAgICAgPEJvd2xTY29yZSBib3dsTnVtPXszfSAvPlxuICAgICAgPEZyYW1lU2NvcmUgLz5cbiAgICAgIDxDdW11bGF0aXZlU2NvcmUgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBGcmFtZSBOdW1cbnZhciBGcmFtZU51bSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmcmFtZS1udW1cIj5cbiAgICAgIEZyYW1lIHtwcm9wcy5mcmFtZU51bX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBCb3dsIFNjb3JlIFxudmFyIEJvd2xTY29yZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJib3dsLXNjb3JlXCI+XG4gICAgICBCb3dsIHtwcm9wcy5ib3dsTnVtfTpcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBGcmFtZSBTY29yZVxudmFyIEZyYW1lU2NvcmUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImZyYW1lLXNjb3JlXCI+XG4gICAgICBGcmFtZSBTY29yZTogXG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gQ3VtdWxhdGl2ZSBTY29yZVxudmFyIEN1bXVsYXRpdmVTY29yZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiY3VtdWxhdGl2ZS1zY29yZVwiPlxuICAgICAgQ3VtdWxhdGl2ZSBTY29yZTpcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBGaW5hbCBTY29yZVxudmFyIEZpbmFsU2NvcmUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImZpbmFsLXNjb3JlXCI+XG4gICAgICBGaW5hbCBTY29yZVxuICAgIDwvZGl2PlxuICApXG59XG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZyYW1lczogZnJhbWVzLFxuICAgICAgY3VycmVudEZyYW1lOiAxLFxuICAgICAgY3VycmVudEJvd2w6IDEsXG4gICAgICB0b3RhbFNjb3JlOiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICBib3dsSGFuZGxlcihwaW5zKSB7XG4gICBcblxuICAgLy8gaWYgbm90IDEwdGggZnJhbWVcbiAgICAgLy8gaWYgYm93bCBpcyAxXG4gICAgICAgLy8gaW5jcmVtZW50IGJvd2xcbiAgICAgLy8gaWYgYm93bCBpcyAyXG4gICAgICAgLy8gZGVjcmVtZW50IGJvd2wgYW5kIGluY3JlbWVudCBmcmFtZVxuXG4gICAvLyBpZiAxMHRoIGZyYW1lXG4gICAgIC8vIGlmIGJvd2wgaXMgMSB8fCAyIFxuICAgICAgIC8vIGluY3JlbWVudCBib3dsXG4gICAgIC8vIGlmIGJvd2wgaXMgM1xuICAgICAgIC8vIGVuZCBnYW1lXG5cbiAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUgIT09IDEwKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMSkge1xuICAgICAgICBpZiAocGlucyA9PT0gMTApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRGcmFtZTogdGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUgKyAxXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRCb3dsOiB0aGlzLnN0YXRlLmN1cnJlbnRCb3dsICsgMVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjdXJyZW50Qm93bDogdGhpcy5zdGF0ZS5jdXJyZW50Qm93bCAtIDEsXG4gICAgICAgICAgY3VycmVudEZyYW1lOiB0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZSArIDFcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVudEZyYW1lID09PSAxMCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudEJvd2wgPT09IDMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdG90YWxTY29yZTogJ2dhbWUgb3ZlcidcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjdXJyZW50Qm93bDogdGhpcy5zdGF0ZS5jdXJyZW50Qm93bCArIDFcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMiAmJiBwaW5zID09PSAxMCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjdXJyZW50Qm93bDogdGhpcy5zdGF0ZS5jdXJyZW50Qm93bCArIDFcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMiAmJiBwaW5zICE9PSAxMCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB0b3RhbFNjb3JlOiAnZ2FtZSBvdmVyJ1xuICAgICAgICB9KVxuICAgICAgfVxuXG5cblxuICAgICAgLy8gaWYgKHRoaXMuc3RhdGUuY3VycmVudEJvd2wgPT09IDEgfHwgdGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMikge1xuICAgICAgLy8gICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIC8vICAgICBjdXJyZW50Qm93bDogdGhpcy5zdGF0ZS5jdXJyZW50Qm93bCArIDFcbiAgICAgIC8vICAgfSlcbiAgICAgIC8vIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMykge1xuICAgICAgLy8gICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIC8vICAgICB0b3RhbFNjb3JlOiAnZ2FtZSBvdmVyJ1xuICAgICAgLy8gICB9KVxuICAgICAgLy8gfVxuICAgIH1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAvLyBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMSAmJiBwaW5zICE9PSAxMCkge1xuICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgIGN1cnJlbnRCb3dsOiAyXG4gICAgLy8gICB9KVxuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMSAmJiBwaW5zID09PSAxMCkge1xuICAgICAgXG4gICAgLy8gICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUgIT09IDEwKSB7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgIGN1cnJlbnRGcmFtZTogKHRoaXMuc3RhdGUuY3VycmVudEZyYW1lICsgMSlcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCAhPT0gMykge1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICBjdXJyZW50Qm93bDogKHRoaXMuc3RhdGUuY3VycmVudEJvd2wgKyAxKVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRCb3dsID09PSAzKSB7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgIHRvdGFsU2NvcmU6ICdnYW1lIG92ZXInXG4gICAgLy8gICAgIH0pXG4gICAgLy8gICB9XG5cbiAgICAvLyB9IGVsc2Uge1xuXG4gICAgLy8gICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Qm93bCA9PT0gMikge1xuXG4gICAgLy8gICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZSAhPT0gMTApIHtcbiAgICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgIGN1cnJlbnRCb3dsOiAxLFxuICAgIC8vICAgICAgICAgY3VycmVudEZyYW1lOiAodGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUgKyAxKVxuICAgIC8vICAgICAgIH0pXG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgICB0b3RhbFNjb3JlOiAnZ2FtZSBvdmVyJ1xuICAgIC8vICAgICAgIH0pXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIEJvd2xpbmcgQXBwXG4gICAgICAgIDxTY29yZWJvYXJkIGZyYW1lcz17dGhpcy5zdGF0ZS5mcmFtZXN9IC8+XG4gICAgICAgIDxJbnRlcmZhY2UgY3VycmVudEZyYW1lPXt0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZX0gY3VycmVudEJvd2w9e3RoaXMuc3RhdGUuY3VycmVudEJvd2x9IGJvd2xIYW5kbGVyPXt0aGlzLmJvd2xIYW5kbGVyLmJpbmQodGhpcyl9Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG5cbiJdfQ==