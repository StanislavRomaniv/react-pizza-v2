import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import CartIcon from './CartIcon';
import Logo from './Logo';
import Search from './Search';

const Header: FC = () => {
    const location = useLocation();

    return (
        <div className="header">
            <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
                <Logo />
            </Link>
            <Search />
            {location.pathname === '/cart' ? (
                <div style={{ width: 160 }}></div>
            ) : (
                <Link to="cart" style={{ textDecoration: 'none' }}>
                    <CartIcon />
                </Link>
            )}
        </div>
    );
};

export default Header;
