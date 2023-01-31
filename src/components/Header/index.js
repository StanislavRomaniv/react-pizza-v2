import React from 'react';
import { Link } from 'react-router-dom';

import CartIcon from './CartIcon';
import Logo from './Logo';
import Search from './Search';

const Header = () => {
    return (
        <div className="header">
            <Link to="/" style={{ textDecoration: 'none', color: "#000" }}>
                <Logo />
            </Link>
            <Search />
            <Link to="cart" style={{ textDecoration: 'none' }}>
                <CartIcon />
            </Link>
        </div>
    );
}

export default Header;