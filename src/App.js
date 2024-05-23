
import './App.css';
import React, { useState } from "react";

export default function App({ counter, onIncrement, onDecrement, onRestart }) {
  return (
    <div className="container">
      <h1 id="num">{counter}</h1>
      <div className="btns">
        <button className="dec" onClick={onDecrement}>
          <i className="fas fa-minus"></i>
        </button>
        <button className="reset" onClick={onRestart}>
          <i className="fas fa-redo"></i>
        </button>
        <button className="inc" onClick={onIncrement}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
}
