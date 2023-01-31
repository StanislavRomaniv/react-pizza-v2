import { useState } from 'react';
import { useSelector } from 'react-redux';
import { filterSelector } from '../../redux/slices/filterSlice';

import SortList from './SortList';
import './styles.scss';

export const sortList = [
    { name: 'popularity (DESC)', sort: '-rating' },
    { name: 'popularity (ASC)', sort: 'rating' },
    { name: 'by price (DESC)', sort: '-price' },
    { name: 'by price (ASC)', sort: 'price' },
    { name: 'by alphabet (DESC)', sort: '-name' },
    { name: 'by alphabet (ASC)', sort: 'name' },
];

const Sort = () => {
    const [visible, setVisible] = useState(false);
    const { sortType } = useSelector(filterSelector);

    return (
        <>
            <div className="sort">
                <div className={`sort__text ${visible ? 'sort__text-arrow' : ''}`} onClick={() => setVisible((prev) => (prev ? false : true))}>
                    <b>Sort by:</b>
                    <div>
                        <span className="sort__btn">{' ' + sortType.name}</span>
                    </div>
                </div>
                <div className="sort__wrapper">{visible ? <SortList setVisible={setVisible} sortList={sortList} /> : ''}</div>
            </div>
            {visible ? <div className="sort__mask" onClick={() => setVisible((prev) => (prev ? false : true))}></div> : ''}
        </>
    );
};

export default Sort;
