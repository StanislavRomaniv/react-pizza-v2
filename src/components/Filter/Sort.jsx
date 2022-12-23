import { useState } from 'react';
import SortList from './SortList';
import './styles.scss';

const Sort = (props) => {
    const [visible, setVisible] = useState(false);
    const [type, setType] = useState("popularity");
    const [active, setActive] = useState("popularity");

    return (
        <>
            <div className="sort">
                <div className={`sort__text ${visible ? "sort__text-arrow" : ""}`}>Sort by:<div><span className="sort__btn" onClick={() => setVisible((prev) => prev ? false : true)}>{" " + type}</span></div></div>
                <div className="sort__wrapper">
                    {
                        visible ? <SortList setType={setType} setVisible={setVisible} setActive={setActive} active={active} /> : ""
                    }
                </div>
            </div>
            { 
                visible ? 
                (
                    <div 
                        className="sort__mask"
                        onClick={() => setVisible((prev) => prev ? false : true)}></div>
                ) : ""
            }
        </>
    );
}

export default Sort;