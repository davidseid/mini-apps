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

class Frame {
  constructor(frameNum) {
    this.frameNum = frameNum;
    this.bowl1 = null;
    this.bowl2 = null;
    this.frameScore = null;
    this.cumulativeScore = null;
    this.condition = 'open';
  }
}

class TenthFrame extends Frame {
  constructor() {
    super();
    this.frameNum = 10;
    this.bowl3 = null;
  }
}

var frames = [];
for (var i = 1; i < 10; i++) {
  frames.push(new Frame(i))
}
frames.push(new TenthFrame());

var options = [];
for (var j = 0; j < 11; j++) {
  options.push(j);
}


// *** Build Components Skeleton ***

// UI Interface Component
var Interface = (props) => {
  return (
    <div class="interface">
      <CurrentFrame currentFrame={props.currentFrame}/>
      <CurrentBowl currentBowl={props.currentBowl}/>
      <Keypad options={props.options} bowlHandler={props.bowlHandler}/>
    </div>
  )
}

// Current Frame Component
var CurrentFrame = (props) => {
  return (
    <div class="current-frame">
      Frame: {props.currentFrame}
    </div>
  )
}
// Current Bowl Component
var CurrentBowl = (props) => {
  return (
    <div class="current-bowl">
      Bowl: {props.currentBowl}
    </div>
  )
}
// Keypad Component
var Keypad = (props) => {
  return (
    <div class="keypad">
      Pins to Hit: 
      {props.options.map((option) => {
        return <Option num={option} bowlHandler={props.bowlHandler} />
      })}
    </div>
  )
}
// Option Component
var Option = (props) => {
  return (
    <div class="option" onClick={() => {props.bowlHandler(props.num)}} >
    <button>{props.num}</button>
    </div>
  )
}

// Scoreboard
var Scoreboard = (props) => {
  return (
    <div class="scoreboard">
      {props.frames.slice(0, 9).map((frame) => {
        return <FrameComponent frameNum={frame.frameNum} frame={frame}/>
      })}
      <TenthFrameComponent frameNum={frames[9].frameNum} frame={frames[9]} />
      <FinalScore />
    </div>
  )
}

// Frame
var FrameComponent = (props) => {
  return (
    <div class="frame">
      <FrameNum frameNum={props.frameNum}/>
      <BowlScore bowlNum={1} score={props.frame.bowl1} />
      <BowlScore bowlNum={2} score={props.frame.bowl2} />
      <FrameScore frameScore={props.frame.frameScore}/>
      <CumulativeScore />
    </div>
  )
}

// Tenth Frame
var TenthFrameComponent = (props) => {
  return (
    <div class="tenth-frame"> 
      <FrameNum frameNum={props.frameNum}/>
      <BowlScore bowlNum={1} score={props.frame.bowl1} />
      <BowlScore bowlNum={2} score={props.frame.bowl2} />
      <BowlScore bowlNum={3} score={props.frame.bowl3} />
      <FrameScore frameScore={props.frame.frameScore}/>
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
      {props.score}
    </div>
  )
}

// Frame Score
var FrameScore = (props) => {
  return (
    <div class="frame-score">
      Frame: {props.frameScore}
    </div>
  )
}

// Cumulative Score
var CumulativeScore = () => {
  return (
    <div class="cumulative-score">
      Cumulative:
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
      totalScore: undefined,
      options: options,
      currentOptions: options,
      bowls: []
    }
  }

  bowlHandler(pins) {
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
          if (this.state.currentBowl=== 1) {
            if (pins === 10) {
              frame.condition = 'strike'
            }
            frame.bowl1 = pins;
          } else if (this.state.currentBowl === 2) {
            if (frame.bowl1 + pins === 10) {
              frame.condition = 'spare'
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
            frame.condition = 'closed'
          }
          if (frame.condition === 'strike') {
            frame.frameScore += pins;
          }
        }


        if (frame.frameNum === this.state.currentFrame - 2) {
          if (frame.condition === 'strike') {
            frame.frameScore += pins;
            frame.condition = 'closed'
          }
        }
          
      }



      this.setState({
        frames: newFrames
      })


      // Game Logic
      if (this.state.currentFrame !== 10) {
        if (this.state.currentBowl === 1) {
          if (pins === 10) {


            this.setState({
              currentFrame: this.state.currentFrame + 1,
            })
          } else {
            this.setState({
              currentBowl: this.state.currentBowl + 1
            })
          }
        } else if (this.state.currentBowl === 2) {
          if (pins === 10) {
            this.setState({
              condition: 'spare'
            })
          }
          this.setState({
            currentBowl: this.state.currentBowl - 1,
            currentFrame: this.state.currentFrame + 1
          })
        }
      } else if (this.state.currentFrame === 10) {
        if (this.state.currentBowl === 3) {
          this.setState({
            totalScore: 'game over'
          })
        } else if (this.state.currentBowl === 1) {
          this.setState({
            currentBowl: this.state.currentBowl + 1
          })
        } else if (this.state.currentBowl === 2 && pins === 10) {
          this.setState({
            currentBowl: this.state.currentBowl + 1
          })
        } else if (this.state.currentBowl === 2 && pins !== 10) {
          this.setState({
            totalScore: 'game over'
          })
        }
      }

      if (this.state.currentBowl === 1) {
        var remainingPins = 10 - pins;
        var remainingOptions = [];
        for (var k = 0; k <= remainingPins; k++) {
          remainingOptions.push(k)
        }
        this.setState({
          currentOptions: remainingOptions
        })
      } else if (this.state.currentBowl === 2) {
        this.setState({
          currentOptions: this.state.options
        })
      }
      if (pins === 10) {
        this.setState({
          currentOptions: this.state.options
        })
      }
    }
    
  }

  render() {
    return (
      <div>
        Bowling App
        <Scoreboard frames={this.state.frames} />
        <Interface options={this.state.currentOptions} currentFrame={this.state.currentFrame} currentBowl={this.state.currentBowl} bowlHandler={this.bowlHandler.bind(this)}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));


