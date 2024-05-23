import { counterIncrement, counterDecrement,counterRestart } from "./ActionType";

export const counterIncrementAction = () => {
  return {
    type: counterIncrement,
  };
};

export const counterDecrementAction = () => {
  return {
    type: counterDecrement,
  };
};


export const counterRestartAction = () => {
    return {
      type: counterRestart,
    };
  };
  