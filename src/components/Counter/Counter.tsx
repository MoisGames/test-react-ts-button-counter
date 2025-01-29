// src/components/Counter/Counter.tsx

import React from 'react';
import './Counter.styl';

interface CounterProps {
  value: number;
  theme?: 'primary' | 'secondary';
  size?: 8 | 12 | 16 | 20 | 24;
  stroke?: boolean;
}

const Counter: React.FC<CounterProps> = ({ value, theme = 'primary', size = 16, stroke = false }) => {
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
    <div className={`counter counter--${theme} counter--size-${size} ${stroke ? 'counter--stroke' : ''}`}>
      <span className={`counter__value ${valueClassName}`}>{value}</span>
    </div>
  );
};

export default Counter;