import React, { useState } from 'react';
import Counter from '../Counter/Counter';
import './Button.styl';

interface ButtonProps {
  type: 'primary' | 'secondary';
  size?: '56' | '36' | '28';
  counter?: boolean;
  disabled?: boolean;
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  type = 'primary', 
  size, 
  counter = true, 
  disabled = false, 
  text, 
  onClick 
}) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    if (disabled) return;

    if (onClick) {

      onClick();
    } else {

      setLoading(true);
      setTimeout(() => {
        setCount(count + 1);
        setLoading(false);
      }, 50000);
    }
  };

  return (
    <button
      className={`button button--${type} ${size ? `button--size-${size}` : ''} ${
        disabled ? 'button--disabled' : ''
      }`}
      onClick={handleButtonClick}
      disabled={disabled}
    >
      {loading ? (
        <div className="button__shimmer">
          <div className={`button__loader button__loader--${type} ${size ? `button__loader--size-${size}` : ''}`} />
        </div>
      ) : (
        <div className="button__content-group">
          <label className="button__label">{text}</label>
          {counter && (
            <div className="button__counter-block">
              <Counter
                quantity={count}
                theme={type}
                size={24}
                stroke={false}
                pulse={true}
              />
            </div>
          )}
        </div>
      )}
    </button>
  );
};

export default Button;