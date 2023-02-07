import { FC, useCallback, memo } from 'react';
import { useDispatch } from 'react-redux';

import { setFilterCategory, setCurrentPage } from '../../redux/slices/filterSlice';

import './styles.scss';

interface ItemFilterPropsType {
    category: number;
}

const filterList: string[] = ['All', 'Meat', 'Vegeterian', 'Grilled', 'Spicy', 'Closed'];

const ItemFilter: FC<ItemFilterPropsType> = memo(({ category }) => {
    const dispatch = useDispatch();

    const clickHandler = useCallback((i: number) => {
        dispatch(setFilterCategory(i));
        dispatch(setCurrentPage(1));
    }, []);

    return (
        <div className="itemFilter">
            {filterList.map((item, i) => (
                <button key={item} className={`itemFilter__btn ${category === i ? 'active' : ''}`} onClick={() => clickHandler(i)}>
                    {item}
                </button>
            ))}
        </div>
    );
});

export default ItemFilter;
