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
// Pass down the currentFrame and the currentBowl from the state to the UI


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
var Interface = function Interface() {
  return React.createElement(
    "div",
    { "class": "interface" },
    "Interface",
    React.createElement(CurrentFrame, null),
    React.createElement(CurrentBowl, null),
    React.createElement(Keypad, null)
  );
};

// Current Frame Component
var CurrentFrame = function CurrentFrame() {
  return React.createElement(
    "div",
    { "class": "current-frame" },
    "Frame Number:"
  );
};
// Current Bowl Component
var CurrentBowl = function CurrentBowl() {
  return React.createElement(
    "div",
    { "class": "current-bowl" },
    "Bowl Number:"
  );
};
// Keypad Component
var Keypad = function Keypad() {
  return React.createElement(
    "div",
    { "class": "keypad" },
    "Pins to Hit:",
    options.map(function (option) {
      return React.createElement(Option, { num: option });
    })
  );
};
// Option Component
var Option = function Option(props) {
  return React.createElement(
    "div",
    { "class": "option" },
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
    frames.slice(0, 9).map(function (frame) {
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
    React.createElement(BowlScore, null),
    React.createElement(BowlScore, null),
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
    React.createElement(BowlScore, null),
    React.createElement(BowlScore, null),
    React.createElement(BowlScore, null),
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
var BowlScore = function BowlScore() {
  return React.createElement(
    "div",
    { "class": "bowl-score" },
    "Bowl Score:"
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
      currentFrame: 1,
      currentBowl: 1,
      frameScores: [],
      cumulativeScores: [],
      totalScore: undefined
    };
    return _this2;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "Bowling App",
        React.createElement(Scoreboard, null),
        React.createElement(Interface, null)
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiRnJhbWUiLCJmcmFtZU51bSIsImJvd2wxIiwiYm93bDIiLCJmcmFtZVNjb3JlIiwiY3VtdWxhdGl2ZVNjb3JlIiwiVGVudGhGcmFtZSIsImJvd2wzIiwiZnJhbWVzIiwiaSIsInB1c2giLCJvcHRpb25zIiwiaiIsIkludGVyZmFjZSIsIkN1cnJlbnRGcmFtZSIsIkN1cnJlbnRCb3dsIiwiS2V5cGFkIiwibWFwIiwib3B0aW9uIiwiT3B0aW9uIiwicHJvcHMiLCJudW0iLCJTY29yZWJvYXJkIiwic2xpY2UiLCJmcmFtZSIsIkZyYW1lQ29tcG9uZW50IiwiVGVudGhGcmFtZUNvbXBvbmVudCIsIkZyYW1lTnVtIiwiQm93bFNjb3JlIiwiRnJhbWVTY29yZSIsIkN1bXVsYXRpdmVTY29yZSIsIkZpbmFsU2NvcmUiLCJBcHAiLCJzdGF0ZSIsImN1cnJlbnRGcmFtZSIsImN1cnJlbnRCb3dsIiwiZnJhbWVTY29yZXMiLCJjdW11bGF0aXZlU2NvcmVzIiwidG90YWxTY29yZSIsInVuZGVmaW5lZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0U7O0FBRUY7QUFDQTtBQUNFO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDRjtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Y7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7SUFFTUEsSyxHQUNKLGVBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsT0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxPQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLE9BQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsT0FBS0MsVUFBTCxHQUFrQixDQUFsQjtBQUNBLE9BQUtDLGVBQUwsR0FBdUIs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SEYsT0FERjtBQU9EOzs7O0VBcEJlQyxNQUFNQyxTOztBQXdCeEJDLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqKiogQ29tcG9uZW50cyBUbyBCdWlsZCAqKipcblxuLy8gKioqIFVJIENvbXBvbmVudHMgKioqXG4vLyBDdXJyZW50IEJvd2wgQ29tcG9uZW50XG4vLyBQaW4gUXVhbnRpdHkgU2VsZWN0aW9uIENvbXBvbmVudFxuICAvLyBPcHRpb25zIENvbXBvbmVudHMgKDEwKVxuXG4vLyAqKiogU2NvcmVCb2FyZCBDb21wb25lbnRzICoqKlxuLy8gU2NvcmVib2FyZCBDb21wb25lbnRcbiAgLy8gTm9ybWFsIEZyYW1lIENvbXBvbmVudFxuICAgIC8vIEZyYW1lIE51bSBDb21wb25lbnRcbiAgICAvLyBCb3dsIFNjb3JlIENvbXBvbmVudHMgKDIpXG4gICAgLy8gRnJhbWUgU2NvcmUgQ29tcG9uZW50XG4gICAgLy8gQ3VtbXVsYXRpdmUgU2NvcmUgQ29tcG9uZW50XG4gIC8vIDEwdGggRnJhbWUgQ29tcG9uZW50IFxuICAgIC8vIEZyYW1lIE51bSBDb21wb25lbnRcbiAgICAvLyBCb3dsIFNjb3JlIENvbXBvbmVudHMgKDMpXG4gICAgLy8gRnJhbWUgU2NvcmUgQ29tcG9uZW50XG4gICAgLy8gQ3VtbXVsYXRpdmUgU2NvcmUgQ29tcG9uZW50XG4gIC8vIEZpbmFsIFNjb3JlIENvbXBvbmVudFxuXG4vLyAqKiogTW9kZWwgRGF0YSBTdHJ1Y3R1cmUgSWRlYXMgKioqXG5cbi8vIFRyYWNrIEZyYW1lc1xuLy8gRWFjaCBmcmFtZSBzaG91bGQgaGF2ZSB1cCB0byB0aHJlZSBib3dsc1xuLy8gZWFjaCBmcmFtZSBzaG91bGQgaGF2ZSBmcmFtZSBzY29yZSwgY3VtbXVsYXRpdmUgc2NvcmUgdXAgdG8gdGhhdCBwb2ludFxuLy8gZWFjaCBmcmFtZSBzaG91bGQgYmUgYWJsZSB0byBsb29rIGJhY2sgYXQgdGhlIGZyYW1lcyBiZWZvcmUgaXQgXG5cbi8vIE1ha2UgYW4gYXJyYXkgY29udGFpbmluZyBub3JtYWwgZnJhbWUgb2JqZWN0cyBhbmQgYSAxMHRoIGZyYW1lIG9iamVjdCBhdCB0aGUgZW5kXG4vLyBub3JtYWwgZnJhbWUgb2JqZWN0cyBoYXZlOiBmcmFtZW51bSwgYm93bDEgYW5kIGJvd2wyIHByb3BlcnRpZXMsIGZyYW1lc2NvcmUgcHJvcCwgYW5kIGN1bXVsYXRpdmUgc2NvcmUgcHJvcFxuXG4vL1RPIERPOlxuLy8gUGFzcyBkb3duIHRoZSBjdXJyZW50RnJhbWUgYW5kIHRoZSBjdXJyZW50Qm93bCBmcm9tIHRoZSBzdGF0ZSB0byB0aGUgVUlcblxuXG4vLyoqKiBJbml0aWFsaXplIEZyYW1lcyBEYXRhIFN0cnVjdHVyZSAqKipcblxuY2xhc3MgRnJhbWUge1xuICBjb25zdHJ1Y3RvcihmcmFtZU51bSkge1xuICAgIHRoaXMuZnJhbWVOdW0gPSBmcmFtZU51bTtcbiAgICB0aGlzLmJvd2wxID0gMDtcbiAgICB0aGlzLmJvd2wyID0gMDtcbiAgICB0aGlzLmZyYW1lU2NvcmUgPSAwO1xuICAgIHRoaXMuY3VtdWxhdGl2ZVNjb3JlID0gMDtcbiAgfVxufVxuXG5jbGFzcyBUZW50aEZyYW1lIGV4dGVuZHMgRnJhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZnJhbWVOdW0gPSAxMDtcbiAgICB0aGlzLmJvd2wzID0gMDtcbiAgfVxufVxuXG52YXIgZnJhbWVzID0gW107XG5mb3IgKHZhciBpID0gMTsgaSA8IDEwOyBpKyspIHtcbiAgZnJhbWVzLnB1c2gobmV3IEZyYW1lKGkpKVxufVxuZnJhbWVzLnB1c2gobmV3IFRlbnRoRnJhbWUoKSk7XG5cbnZhciBvcHRpb25zID0gW107XG5mb3IgKHZhciBqID0gMTsgaiA8IDExOyBqKyspIHtcbiAgb3B0aW9ucy5wdXNoKGopO1xufVxuXG5cbi8vICoqKiBCdWlsZCBDb21wb25lbnRzIFNrZWxldG9uICoqKlxuXG4vLyBVSSBJbnRlcmZhY2UgQ29tcG9uZW50XG52YXIgSW50ZXJmYWNlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJpbnRlcmZhY2VcIj5cbiAgICAgIEludGVyZmFjZVxuICAgICAgPEN1cnJlbnRGcmFtZSAvPlxuICAgICAgPEN1cnJlbnRCb3dsIC8+XG4gICAgICA8S2V5cGFkIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gQ3VycmVudCBGcmFtZSBDb21wb25lbnRcbnZhciBDdXJyZW50RnJhbWUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtZnJhbWVcIj5cbiAgICAgIEZyYW1lIE51bWJlcjogXG4gICAgPC9kaXY+XG4gIClcbn1cbi8vIEN1cnJlbnQgQm93bCBDb21wb25lbnRcbnZhciBDdXJyZW50Qm93bCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1ib3dsXCI+XG4gICAgICBCb3dsIE51bWJlcjogXG4gICAgPC9kaXY+XG4gIClcbn1cbi8vIEtleXBhZCBDb21wb25lbnRcbnZhciBLZXlwYWQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImtleXBhZFwiPlxuICAgICAgUGlucyB0byBIaXQ6IFxuICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIDxPcHRpb24gbnVtPXtvcHRpb259IC8+XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuLy8gT3B0aW9uIENvbXBvbmVudFxudmFyIE9wdGlvbiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJvcHRpb25cIj5cbiAgICA8YnV0dG9uPntwcm9wcy5udW19PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gU2NvcmVib2FyZFxudmFyIFNjb3JlYm9hcmQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwic2NvcmVib2FyZFwiPlxuICAgICAgU2NvcmVib2FyZFxuICAgICAge2ZyYW1lcy5zbGljZSgwLCA5KS5tYXAoKGZyYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiA8RnJhbWVDb21wb25lbnQgZnJhbWVOdW09e2ZyYW1lLmZyYW1lTnVtfS8+XG4gICAgICB9KX1cbiAgICAgIDxUZW50aEZyYW1lQ29tcG9uZW50IGZyYW1lTnVtPXtmcmFtZXNbOV0uZnJhbWVOdW19IC8+XG4gICAgICA8RmluYWxTY29yZSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEZyYW1lXG52YXIgRnJhbWVDb21wb25lbnQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiZnJhbWVcIj5cbiAgICAgIDxGcmFtZU51bSBmcmFtZU51bT17cHJvcHMuZnJhbWVOdW19Lz5cbiAgICAgIDxCb3dsU2NvcmUgLz5cbiAgICAgIDxCb3dsU2NvcmUgLz5cbiAgICAgIDxGcmFtZVNjb3JlIC8+XG4gICAgICA8Q3VtdWxhdGl2ZVNjb3JlIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gVGVudGggRnJhbWVcbnZhciBUZW50aEZyYW1lQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cInRlbnRoLWZyYW1lXCI+IFxuICAgICAgPEZyYW1lTnVtIGZyYW1lTnVtPXtwcm9wcy5mcmFtZU51bX0vPlxuICAgICAgPEJvd2xTY29yZSAvPlxuICAgICAgPEJvd2xTY29yZSAvPlxuICAgICAgPEJvd2xTY29yZSAvPlxuICAgICAgPEZyYW1lU2NvcmUgLz5cbiAgICAgIDxDdW11bGF0aXZlU2NvcmUgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBGcmFtZSBOdW1cbnZhciBGcmFtZU51bSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmcmFtZS1udW1cIj5cbiAgICAgIEZyYW1lIHtwcm9wcy5mcmFtZU51bX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBCb3dsIFNjb3JlIFxudmFyIEJvd2xTY29yZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiYm93bC1zY29yZVwiPlxuICAgICAgQm93bCBTY29yZTogXG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gRnJhbWUgU2NvcmVcbnZhciBGcmFtZVNjb3JlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmcmFtZS1zY29yZVwiPlxuICAgICAgRnJhbWUgU2NvcmU6IFxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEN1bXVsYXRpdmUgU2NvcmVcbnZhciBDdW11bGF0aXZlU2NvcmUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImN1bXVsYXRpdmUtc2NvcmVcIj5cbiAgICAgIEN1bXVsYXRpdmUgU2NvcmU6XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gRmluYWwgU2NvcmVcbnZhciBGaW5hbFNjb3JlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmaW5hbC1zY29yZVwiPlxuICAgICAgRmluYWwgU2NvcmVcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50RnJhbWU6IDEsXG4gICAgICBjdXJyZW50Qm93bDogMSxcbiAgICAgIGZyYW1lU2NvcmVzOiBbXSxcbiAgICAgIGN1bXVsYXRpdmVTY29yZXM6IFtdLFxuICAgICAgdG90YWxTY29yZTogdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBCb3dsaW5nIEFwcFxuICAgICAgICA8U2NvcmVib2FyZCAvPlxuICAgICAgICA8SW50ZXJmYWNlIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuXG4iXX0=