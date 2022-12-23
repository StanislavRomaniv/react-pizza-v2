import React from 'react';
import { pizza } from '../../data/pizza';
import Card from './Card';

const Gallery = (props) => {
    return (
        <div className="gallery">
            {
                pizza.map(item => (
                    <Card props={item} key={item.name}/>
                ))
            }
        </div>
    );
}

export default Gallery;