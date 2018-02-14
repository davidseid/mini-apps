// build UI with reactjs and precompile views with babel
// all game logic should live in the client code

// all react components can live in this file

// detect win or tie and display appropriate message
// page refresh restarts the game

// WRITE FOUR TESTS for end of game logic
// can run tests in node or browser

// minimal css styling
// have babel watch for changes in app
// use nodemon



// make an App Component
function App() {
  return (
    <div>
      My App
      <Board />
    </div>
  );
}

// make a Board Component
function Board() {
  return (
    <div>
      My Board
      <Row />
    </div>
  );
}

// make a Row Component

function Row() {
  return (
    <div>
      Row
      <Square />
    </div>
  )
}

// make a square component
function Square() {
  return (
    <div>
      Square
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);









