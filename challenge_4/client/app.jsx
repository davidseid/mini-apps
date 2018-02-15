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
// Put the data structure onto the app and pass down
// Pass down the currentFrame and the currentBowl from the state to the UI


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
for (var j = 1; j < 11; j++) {
  options.push(j);
}


// *** Build Components Skeleton ***

// UI Interface Component
var Interface = (props) => {
  return (
    <div class="interface">
      <CurrentFrame currentFrame={props.currentFrame}/>
      <CurrentBowl currentBowl={props.currentBowl}/>
      <Keypad />
    </div>
  )
}

// Current Frame Component
var CurrentFrame = (props) => {
  return (
    <div class="current-frame">
      Frame Number: {props.currentFrame}
    </div>
  )
}
// Current Bowl Component
var CurrentBowl = (props) => {
  return (
    <div class="current-bowl">
      Bowl Number: {props.currentBowl}
    </div>
  )
}
// Keypad Component
var Keypad = () => {
  return (
    <div class="keypad">
      Pins to Hit: 
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
    <button>{props.num}</button>
    </div>
  )
}

// Scoreboard
var Scoreboard = (props) => {
  return (
    <div class="scoreboard">
      Scoreboard
      {props.frames.slice(0, 9).map((frame) => {
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
      <FrameNum frameNum={props.frameNum}/>
      <BowlScore bowlNum={1} />
      <BowlScore bowlNum={2} />
      <FrameScore />
      <CumulativeScore />
    </div>
  )
}

// Tenth Frame
var TenthFrameComponent = (props) => {
  return (
    <div class="tenth-frame"> 
      <FrameNum frameNum={props.frameNum}/>
      <BowlScore bowlNum={1} />
      <BowlScore bowlNum={2} />
      <BowlScore bowlNum={3} />
      <FrameScore />
      <CumulativeScore />
    </div>
  )
}

// Frame Num
var FrameNum = (props) => {
  return (
    <div class="frame-num">
      Frame {props.frameNum}
    </div>
  )
}

// Bowl Score 
var BowlScore = (props) => {
  return (
    <div class="bowl-score">
      Bowl {props.bowlNum}:
    </div>
  )
}

// Frame Score
var FrameScore = () => {
  return (
    <div class="frame-score">
      Frame Score: 
    </div>
  )
}

// Cumulative Score
var CumulativeScore = () => {
  return (
    <div class="cumulative-score">
      Cumulative Score:
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


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frames: frames,
      currentFrame: 1,
      currentBowl: 1,
      totalScore: undefined
    }
  }

  render() {
    return (
      <div>
        Bowling App
        <Scoreboard frames={this.state.frames} />
        <Interface currentFrame={this.state.currentFrame} currentBowl={this.state.currentBowl}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));


