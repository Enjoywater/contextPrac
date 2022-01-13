import React, { createContext, useState } from 'react';

type PropsType = {
  children: JSX.Element;
};

const defaultCount = {
  count: 0,
  increaseCount: (): void => {},
  decreaseCount: (): void => {},
};

const CountContext = createContext(defaultCount);

function CountProvider({ children }: PropsType): JSX.Element {
  const [count, setCount] = useState<number>(0);

  const increaseCount = (): void => {
    setCount(count + 1);
  };

  const decreaseCount = (): void => {
    setCount(count - 1);
  };

  return (
    <CountContext.Provider value={{ count, increaseCount, decreaseCount }}>
      {children}
    </CountContext.Provider>
  );
}

export { CountContext, CountProvider };
