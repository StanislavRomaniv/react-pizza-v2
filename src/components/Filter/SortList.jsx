const SortList = ({setType, setVisible, setActive, active}) => {
    const listItems = ["popularity", "by price", "by alphabet"];

    const clickHandler = (event, item) => {
        setActive(item);
        setType(event.target.textContent);
        setVisible(false);
    };  

    return (
        <div className="sort__list-wrapper">
            <ul className="sort__list">
                {listItems.map(item => (
                    <li key={item} className={`sort__list-item ${active === item ? "sort__active" : ""}`} onClick={(event) => clickHandler(event, item)}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default SortList;