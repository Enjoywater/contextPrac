import React, { createContext, useReducer } from 'react';

type PropsType = {
  children: JSX.Element;
};

type DefaultCountType = {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
};

type InitialStateType = {
  count: number;
};

type ActionType = {
  type: 'INCREASE_COUNT' | 'DECREASE_COUNT';
  payload: number;
};

const initialState: InitialStateType = {
  count: 0,
};

const defaultCount: DefaultCountType = {
  count: 0,
  increaseCount: () => {},
  decreaseCount: () => {},
};

const CountContext = createContext(defaultCount);

const reducer = (state: InitialStateType, action: ActionType) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {
        count: action.payload,
      };
    case 'DECREASE_COUNT':
      return {
        count: action.payload,
      };

    default:
      return state;
  }
};

function CountProvider({ children }: PropsType): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const increaseCount = (): void => {
    dispatch({ type: 'INCREASE_COUNT', payload: state.count + 1 });
  };

  const decreaseCount = (): void => {
    dispatch({ type: 'DECREASE_COUNT', payload: state.count - 1 });
  };

  return (
    <CountContext.Provider
      value={{ count: state.count, increaseCount, decreaseCount }}
    >
      {children}
    </CountContext.Provider>
  );
}

export { CountContext, CountProvider };
