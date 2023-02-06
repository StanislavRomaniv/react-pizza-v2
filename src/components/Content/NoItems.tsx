import { FC } from 'react';

const NoItems: FC = () => {
    return (
        <div className="noItems__wrapper">
            <div className="noItems">
                <h3 className="noItems__header">No items</h3>
                <svg className="noItems__icon" id="Layer_1" version="1.1" viewBox="0 0 80 55" xmlns="http://www.w3.org/2000/svg">
                    <title />
                    <g id="Layer_2">
                        <g id="Layer_3">
                            <path d="M64.3,26.3l-2.2,2l7.4,8.3H39.7C22.3,36.6,8.2,22.5,8.2,5.1h-3c0,19.1,15.5,34.5,34.6,34.6h29.7L62,47.9l2.2,2l10.6-11.9    L64.3,26.3z" />
                        </g>
                    </g>
                </svg>
            </div>
            <p className="noItems__text">We don`t have such pizza in our store. Please, check the search input</p>
        </div>
    );
};

export default NoItems;
