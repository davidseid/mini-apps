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
// 1. Create the model data structure 
  // Create a frame class
  // Create a 10th frame class
  // Create an array of 9 intances of frames and 1 instance of 10th frame
// 2. Build the basic scoring components and render them to the DOM in an appropriate fashion
// 3. Build the UI components and render the basics to the DOM


//*** Initialize Frame Data Structure ***

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





var App = () => {
  return (
    <div>
      This is my App
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('app'));


