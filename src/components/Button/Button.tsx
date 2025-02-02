import React, { useState } from 'react';
import Counter from '../Counter/Counter';
import './Button.styl';

interface ButtonProps {
    type: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ type = 'primary' }) => {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleButtonClick = () => {
        setLoading(true);
        setCount(count + 1);
    };

    return (
        <button className={`button button--${type}`} onClick={handleButtonClick}>
            <div className={`button__content-group`} style={{ display: loading ? 'none' : 'flex' }}>
                <label className="button__label">Click me</label>
                <div className={`button__loader button__loader--${type} ${loading ? 'visible' : 'hidden'}`} />
                <Counter quantity={560} theme='primary' size={24} stroke={false} pulse={true} />
            </div>
        </button>
    );
}

export default Button;