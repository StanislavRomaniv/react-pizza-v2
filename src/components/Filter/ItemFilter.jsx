import { useState } from 'react';
import './styles.scss';

const ItemFilter = (props) => {
    const filterList = ["All", "Meat", "Vegeterian", "Grilled", "Spicy", "Closed"]
    const [active, setActive] = useState("All");

    const clickHandler = (item) => {
        setActive(item);
    };

    return (
        <div className="itemFilter">
            {
                filterList.map(item => (
                    <button key={item} className={`itemFilter__btn ${active === item ? "active" : ""}`} onClick={() => clickHandler(item)}>{item}</button>
                ))
            }
        </div>
    );
}

export default ItemFilter;