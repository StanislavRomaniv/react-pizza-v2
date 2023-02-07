import { FC, useState, memo } from 'react';
import { SortType } from '../../redux/slices/filterSlice';

import SortList from './SortList';
import './styles.scss';

interface SortPropsType {
    sortType: SortType;
}

export const sortList = [
    { name: 'popularity (DESC)', sort: '-rating' },
    { name: 'popularity (ASC)', sort: 'rating' },
    { name: 'by price (DESC)', sort: '-price' },
    { name: 'by price (ASC)', sort: 'price' },
    { name: 'by alphabet (DESC)', sort: '-name' },
    { name: 'by alphabet (ASC)', sort: 'name' },
];

const Sort: FC<SortPropsType> = memo(({ sortType }) => {
    const [visible, setVisible] = useState(false);

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
});

export default Sort;
