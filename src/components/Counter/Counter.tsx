import React from 'react';
import './Counter.styl';

interface CounterProps {
  value: number;
  theme?: 'primary' | 'secondary';
}

const Counter: React.FC<CounterProps> = ({ value, theme = 'primary' }) => {
  return (
    <div className={`counter counter--${theme}`}>
      <span className="counter__value">{value}</span>
    </div>
  );
};

export default Counter;