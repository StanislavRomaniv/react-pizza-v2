import { useState } from 'react';

const typeList = ["slim", "traditional"];
const sizeList = [26, 30, 40];

const Card = ({props}) => {
    const {src, name, types, sizes, price} = props;
    const [isActiveType, setIsActiveType] = useState(0);
    const [isActiveSize, setIsActiveSize] = useState(0);
    const [count, setCount] = useState(0);

    return (
        <div className="card__wrapper">
            <div className="card">
            <img src={`${src}`} alt={name} className="card__img" />
            <h4 className="card__name">{name}</h4>
            <div className="card__block"> 
                <div className="card__block-items">
                    {
                        typeList.map((type, i) => 
                            types.includes(type) ? 
                                <button 
                                    key={type} 
                                    className={`card__button ${i === isActiveType ? "card__button-active" : ""}`} 
                                    onClick={() => setIsActiveType(i)}
                                >
                                    {type}
                                </button> 
                            : <button key={type} className="card__button card__button-disabled">{type}</button>
                        )
                    }
                </div>
                <div className="card__block-items">
                    {
                        sizeList.map((size, i) => 
                            sizes.includes(size) + 1 ? 
                                <button 
                                    key={size} 
                                    className={`card__button card__button-size ${i === isActiveSize ? "card__button-active" : ""}`}
                                    onClick={() => setIsActiveSize(i)}
                                >
                                    {size} cm.
                                </button> 
                            : <button key={size} className="card__button card__button-size card__button-disabled">{size} cm.</button>
                        )
                    }
                </div>
            </div>
            <div className="card__buy">
                <span className="card__buy-text">from {price} UAH</span>
                <div className="card__button-add" onClick={() => setCount(count + 1)}>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="#EB5A1E"
                        />
                    </svg>
                    <span className="card__button-add-text">Add</span>
                    {count ? <span className="card__button-add-count">{count}</span> : ""}
                </div>
            </div>
        </div>
        </div>
    );
}

export default Card;