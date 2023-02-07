import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { addItemToCart } from '../../redux/slices/cartSlice';
import { CartPropsType } from '../Cart/Cart';

interface Prop {
    id: string;
    src: string;
    name: string;
    types: string[];
    sizes: number[];
    price: number;
}

type CardPropsType = {
    props: Prop;
    component: string;
};

const Card: FC<CardPropsType> = ({ props, component }) => {
    const dispatch = useDispatch();

    const { id, src, name, types, sizes, price } = props;
    const [isActiveType, setIsActiveType] = useState<string>();
    const [isActiveSize, setIsActiveSize] = useState<number>();
    const item = useSelector((state: RootState) => state.cart.items.find((obj: CartPropsType) => obj.id.match(/\d+/g)![0] === id && obj.type === isActiveType && obj.size === String(isActiveSize)));

    const count = item ? item.count : 0;

    const addItemClick = () => {
        dispatch(addItemToCart({ id: `${id}-${isActiveType}-${isActiveSize}`, src, name, type: isActiveType, size: String(isActiveSize), price } as CartPropsType));
    };

    useEffect(() => {
        setIsActiveType(types[0]);
        setIsActiveSize(sizes[0]);
    }, [types, sizes]);

    return (
        <div className="card__wrapper">
            <div className={component === 'page' ? 'flex' : 'card'}>
                {component !== 'page' ? (
                    <Link to={`page/${id}-${isActiveType}-${isActiveSize}`}>
                        <img src={`${src}`} alt={name} className={component === 'page' ? 'flex__img' : 'card__img'} />
                    </Link>
                ) : (
                    <img src={`${src}`} alt={name} className={component === 'page' ? 'flex__img' : 'card__img'} />
                )}
                <div className={component === 'page' ? 'flex__block' : ''}>
                    {component !== 'page' ? (
                        <Link to={`page/${id}-${isActiveType}-${isActiveSize}`}>
                            <h4 className="card__name">{name}</h4>
                        </Link>
                    ) : (
                        <h4 className="card__name">{name}</h4>
                    )}
                    <div className="card__block">
                        <div className="card__block-items">
                            {types.map((type, i) => (
                                <button key={type} className={`card__button ${isActiveType ? type === isActiveType && 'card__button-active' : i === 0 && 'card__button-active'}`} onClick={() => setIsActiveType(type)}>
                                    {type}
                                </button>
                            ))}
                        </div>
                        <div className="card__block-items">
                            {sizes.map((size, i) => (
                                <button key={size} className={`card__button card__button-size ${isActiveSize ? size === isActiveSize && 'card__button-active' : i === 0 && 'card__button-active'}`} onClick={() => setIsActiveSize(size)}>
                                    {size} cm.
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="card__buy">
                        <span className="card__buy-text">from {price} UAH</span>
                        <div className="card__button-add" onClick={addItemClick}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="#EB5A1E"
                                />
                            </svg>
                            <span className="card__button-add-text">Add</span>
                            {count ? <span className="card__button-add-count">{count}</span> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
