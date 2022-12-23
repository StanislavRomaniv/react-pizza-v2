import React from 'react';
import { Link } from 'react-router-dom'; 
import CartIcon from './CartIcon';
import Logo from './Logo';

const Header = (props) => {
    return (
        <div className="header">
            <Logo />
            <Link to="cart" style={{ textDecoration: 'none' }}>
                <CartIcon />
            </Link>
        </div>
    );
}

export default Header;