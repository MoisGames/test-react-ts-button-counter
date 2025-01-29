import React from 'react';
import './Counter.styl';

interface CounterProps {
  quantity: number | string;
  theme?: 'primary' | 'secondary';
  size?: 8 | 12 | 16 | 20 | 24;
  stroke?: boolean;
}

const Counter: React.FC<CounterProps> = ({ quantity, theme = 'primary', size = 16, stroke = false }) => {
  let displayValue: string;

  if (typeof quantity === 'number') {
    if (quantity > 99) {
      displayValue = '99+';
    } else {
      displayValue = quantity.toString();
    }
  } else if (typeof quantity === 'string') {
    displayValue = quantity.length > 3 ? quantity.substring(0, 3) : quantity;
  } else {
    displayValue = '';
  }

  const charCount = displayValue.length;

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
      <span className={`counter__value ${valueClassName}`}>{displayValue}</span>
    </div>
  );
};

export default Counter;