import React from 'react';
import './Counter.styl';

interface CounterProps {
  quantity: number;
  theme?: 'primary' | 'secondary';
  size?: number;
  stroke?: boolean;
  pulse?: boolean;
}

const Counter: React.FC<CounterProps> = ({
  quantity,
  theme = 'primary',
  size = 16,
  stroke = false,
  pulse = false,
}) => {
  const displayValue = quantity > 99 ? '99+' : quantity.toString();
  const valueClassName = `counter__value ${displayValue.length > 1 ? 'two-chars' : 'one-char'}`;

  return (
    <div className={`counter counter--${theme} counter--size-${size} ${stroke ? 'counter--stroke' : ''}`}>
      {pulse && (size === 8 || size === 12) && (
        <div className={`live-indicator counter--${theme} counter--size-${size}`}>
          <div className={`dot counter--${theme}`}></div>
          <div className={`pulse one counter--${theme}`}></div>
          <div className={`pulse two counter--${theme}`}></div>
        </div>
      )}
      <span className={`counter__value ${valueClassName}`}>{displayValue}</span>
    </div>
  );
};

export default Counter;