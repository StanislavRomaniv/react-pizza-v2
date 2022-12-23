import React from 'react';
import './styles.scss';

const Logo = () => {
    return (
        <div className="logo">
            <img src="/images/logo.png" alt="Logo" className="logo__img"/>
            <div className="logo__title">
                <h5 className="logo__title-top">REACT PIZZA</h5>
                <p className="logo__title-bottom">The best pizza in the world</p>
            </div>
        </div>
    );
}

export default Logo;