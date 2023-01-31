import { useSelector, useDispatch } from 'react-redux';

import { setFilterCategory, setCurrentPage, filterSelector } from '../../redux/slices/filterSlice';

import './styles.scss';

const filterList = ['All', 'Meat', 'Vegeterian', 'Grilled', 'Spicy', 'Closed'];

const ItemFilter = () => {
    const dispatch = useDispatch();
    const { category } = useSelector(filterSelector);

    const clickHandler = (i) => {
        dispatch(setFilterCategory(i));
        dispatch(setCurrentPage(1));
    };

    return (
        <div className="itemFilter">
            {filterList.map((item, i) => (
                <button key={item} className={`itemFilter__btn ${category === i ? 'active' : ''}`} onClick={() => clickHandler(i)}>
                    {item}
                </button>
            ))}
        </div>
    );
};

export default ItemFilter;
