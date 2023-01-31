import { useSelector, useDispatch } from "react-redux";
import { setSortType } from "../../redux/slices/filterSlice";

const SortList = ({ setVisible, sortList }) => {
    const sortType = useSelector(state => state.filter.sortType);
    const dispatch = useDispatch();

    const clickHandler = (item) => {
        dispatch(setSortType(item));
        setVisible(false);
    };  

    return (
        <div className="sort__list-wrapper">
            <ul className="sort__list">
                {sortList.map((item, i) => (
                    <li key={i} className={`sort__list-item ${sortType.name === item.name ? "sort__active" : ""}`} onClick={() => clickHandler(item)}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default SortList;