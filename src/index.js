import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Store from './Redux/Store'
import {
  counterIncrementAction,
  counterDecrementAction,
  counterRestartAction,
} from "./Redux/ActionCreator"



import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
const render = () =>
  root.render(
    // <React.StrictMode>
    <App
      counter={Store.getState()}
      onIncrement={() => Store.dispatch(counterIncrementAction())}
      onDecrement={() => Store.dispatch(counterDecrementAction())}
      onRestart={() => Store.dispatch(counterRestartAction())}
    />
    // </React.StrictMode>
  );

render();

Store.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
