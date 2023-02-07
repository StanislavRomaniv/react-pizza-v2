import { FC, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { cartSelector } from '../../redux/slices/cartSlice';

import CartIcon from './CartIcon';
import Logo from './Logo';
import Search from './Search';

const Header: FC = () => {
    const location = useLocation();
    const { items } = useSelector(cartSelector);
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            const data = JSON.stringify(items);
            console.log(data);
            localStorage.setItem('cart', data);
        }

        isMounted.current = true;
    }, [items]);

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
