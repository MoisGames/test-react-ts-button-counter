import React, { useState } from 'react';
import Counter from '../Counter/Counter';
import './Button.styl';

interface ButtonProps {
  onClick?: () => void;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, isLoading = false }) => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1); 
    if (onClick) onClick();
  };

  return (
    <div className="button">
      <button className="button__element" onClick={handleButtonClick} disabled={isLoading}>
        {isLoading ? (
          <img src="/path/to/loader.svg" alt="Loading..." />
        ) : (
          'Click me'
        )}
      </button>
      <Counter value={count} theme='primary' />
    </div>
  );
};

export default Button;