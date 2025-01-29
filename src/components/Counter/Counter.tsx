import React from 'react';
import './Counter.styl';

interface CounterProps {
  value: number;
  theme?: 'primary' | 'secondary';
  size?: 8 | 12 | 16 | 20 | 24;
}

const Counter: React.FC<CounterProps> = ({ value, theme = 'primary', size = 16 }) => {
  const valueStr = value.toString();
  const charCount = valueStr.length;

  let valueClassName = '';
  if (charCount === 1) {
    valueClassName = 'one-char';
  } else if (charCount === 2) {
    valueClassName = 'two-chars';
  } else if (charCount >= 3) {
    valueClassName = 'three-chars';
  }

  return (
    <div className={`counter counter--${theme} counter--size-${size}`}>
      <span className={`counter__value ${valueClassName}`}>{value}</span>
    </div>
  );
};

export default Counter;