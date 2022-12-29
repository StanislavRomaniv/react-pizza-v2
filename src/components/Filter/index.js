import React from 'react';

import ItemFilter from './ItemFilter';
import Sort from './Sort';

import './styles.scss';

const Filter = () => {
    return (
        <div className="filter">
            <ItemFilter />
            <Sort />
        </div>
    );
}

export default Filter;