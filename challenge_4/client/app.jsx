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

// TODO
// 3. Build the UI components and render the basics to the DOM


//*** Initialize Frames Data Structure ***

class Frame {
  constructor(frameNum) {
    this.frameNum = frameNum;
    this.bowl1 = 0;
    this.bowl2 = 0;
    this.frameScore = 0;
    this.cumulativeScore = 0;
  }
}

class TenthFrame extends Frame {
  constructor() {
    super();
    this.frameNum = 10;
    this.bowl3 = 0;
  }
}

var frames = [];
for (var i = 1; i < 10; i++) {
  frames.push(new Frame(i))
}
frames.push(new TenthFrame());

var options = [];
for (var j = 1; j < 10; j++) {
  options.push(j);
}


// *** Build Components Skeleton ***

// UI Interface Component
var Interface = () => {
  return (
    <div class="interface">
      Interface
      <CurrentFrame />
      <CurrentBowl />
      <Keypad />
    </div>
  )
}

// Current Frame Component
var CurrentFrame = () => {
  return (
    <div class="current-frame">
      CurrentFrame
    </div>
  )
}
// Current Bowl Component
var CurrentBowl = () => {
  return (
    <div class="current-bowl">
      CurrentBowl
    </div>
  )
}
// Keypad Component
var Keypad = () => {
  return (
    <div class="keypad">
      Keypad
      {options.map((option) => {
        return <Option num={option} />
      })}
    </div>
  )
}
// Option Component
var Option = (props) => {
  return (
    <div class="option">
      Option
    </div>
  )
}

// Scoreboard
var Scoreboard = () => {
  return (
    <div class="scoreboard">
      Scoreboard
      {frames.slice(0, 9).map((frame) => {
        return <FrameComponent frameNum={frame.frameNum}/>
      })}
      <TenthFrameComponent frameNum={frames[9].frameNum} />
      <FinalScore />
    </div>
  )
}

// Frame
var FrameComponent = (props) => {
  return (
    <div class="frame">
      Frame
      <FrameNum frameNum={props.frameNum}/>
      <BowlScore />
      <BowlScore />
      <FrameScore />
      <CumulativeScore />
    </div>
  )
}

// Tenth Frame
var TenthFrameComponent = (props) => {
  return (
    <div class="tenth-frame">
      Tenth Frame
      <FrameNum frameNum={props.frameNum}/>
      <BowlScore />
      <BowlScore />
      <BowlScore />
      <FrameScore />
      <CumulativeScore />
    </div>
  )
}

// Frame Num
var FrameNum = () => {
  return (
    <div class="frame-num">
      Frame Number
    </div>
  )
}

// Bowl Score 
var BowlScore = () => {
  return (
    <div class="bowl-score">
      Bowl Score
    </div>
  )
}

// Frame Score
var FrameScore = () => {
  return (
    <div class="frame-score">
      Frame Score
    </div>
  )
}

// Cumulative Score
var CumulativeScore = () => {
  return (
    <div class="cumulative-score">
      Cumulative Score
    </div>
  )
}

// Final Score
var FinalScore = () => {
  return (
    <div class="final-score">
      Final Score
    </div>
  )
}


var App = () => {
  return (
    <div>
      This is my App
      <Scoreboard />
      <Interface />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('app'));


