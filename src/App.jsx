import React, { useState, useEffect } from 'react';
import "./App.css";

function App() {
  const [turn, setTurn] = useState("X");


  useEffect(() => {
    // music.play();
  }, []);
  
  const changeTurn = () => {
    return turn === "X" ? "O" : "X";
  };
  
  return (
    <div className="App">
      <div className="heading">
        <h1>MYTICTACTOE.com</h1>
      </div>
      <div className="gameContainer">
        <div className="container">
          <div className="box bt-0 bl-0"><span className="boxtext"></span></div>
          <div className="box bt-0"><span className="boxtext"></span></div>
          <div className="box br-0 bt-0"><span className="boxtext"></span></div>
          <div className="box bl-0"><span className="boxtext"></span></div>
          <div className="box"><span className="boxtext"></span></div>
          <div className="box br-0"><span className="boxtext"></span></div>
          <div className="box bl-0 bb-0"><span className="boxtext"></span></div>
          <div className="box bb-0"><span className="boxtext"></span></div>
          <div className="box br-0 bb-0"><span className="boxtext"></span></div>
        </div>
        <div className="gameinfo">
          <h1>Welcome to TIC TAC TOE</h1>
          <div>
            <span className="info">Turn for X</span>
            <button id="reset">Reset</button>
          </div>
          <div className="imgbox">
            <img src="./excited.gif" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
