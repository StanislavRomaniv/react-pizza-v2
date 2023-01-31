import { useSelector, useDispatch } from 'react-redux';

import { setFilterCategory } from '../../redux/slices/filterSlice';

import './styles.scss';

const filterList = ["All", "Meat", "Vegeterian", "Grilled", "Spicy", "Closed"];

const ItemFilter = () => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.filter.category);

    return (
        <div className="itemFilter">
            {
                filterList.map((item, i) => (
                    <button key={item} className={`itemFilter__btn ${category === i ? "active" : ""}`} onClick={() => dispatch(setFilterCategory(i))}>{item}</button>
                ))
            }
        </div>
    );
}

export default ItemFilter;