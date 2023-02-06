import { FC } from 'react';

import './styles.scss';
import logo from '../../assets/images/logo.png';

const Logo: FC = () => {
    return (
        <div className="logo__wrapper">
            <div className="logo">
                <img src={logo} alt="Logo" className="logo__img" />
                <div className="logo__title">
                    <h5 className="logo__title-top">REACT PIZZA</h5>
                    <p className="logo__title-bottom">the best pizza in the world</p>
                </div>
            </div>
            <p className="logo__title-bottom-media">the best pizza in the world</p>
        </div>
    );
};

export default Logo;
