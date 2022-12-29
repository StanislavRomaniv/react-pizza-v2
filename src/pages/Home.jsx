import { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SearchContext } from '../App';
import { setItems } from '../redux/slices/contentSlice';

import Card from '../components/Content/Card';
import Filter from '../components/Filter';
import Skeleton from '../components/Content/Skeleton';
import NoItems from '../components/Content/NoItems';
import Pagination from '../components/Pagination';
import '../components/Content/styles.scss';

const limit = 4;

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const {searchText} = useContext(SearchContext);

    const dispatch = useDispatch();
    const items = useSelector(state => state.content.items);
    const { category, sortType, currentPage } = useSelector(state => state.filter);

    useEffect(() => {
        setIsLoading(true);

        // itemsCount <= limit && setPageNumber(0);
        // category > 0 && itemsCount < limit && setPageNumber(1);
        // pageNumber > Math.ceil(itemsCount / limit) && setPageNumber(1);

        fetch(`https://63a5e35df8f3f6d4ab02601e.mockapi.io/items?page=${currentPage}&limit=${limit}${searchText ? `&name=${searchText}` : ""}&sortBy=${sortType.sort.replace("-", "")}&order=${sortType.sort.includes("-") ? "desc" : "asc"}${category ? `&category=${category}` : ""}`)
        .then(response => response.json())
        .then(data => {
            dispatch(setItems(data.items));
            setIsLoading(false);
        });

        window.scrollTo(0, 0);
    }, [sortType, category, searchText, currentPage, dispatch]);
    
    return (
        <>
            <Filter />
            <div className="contentHeader">
                <h2 className="contentHeader__text">All pizza</h2>
            </div>
            <div className={`gallery ${searchText && !items.length ? "nogrid" : ""}`}>
                {
                    isLoading 
                    ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
                    : (searchText && !items.length 
                        ? <NoItems /> 
                        : items.map(item => (
                            item.name.toLowerCase().includes(searchText.toLowerCase())
                                && 
                            <Card props={item} key={item.name}/>)
                        ))
                }
            </div>
            <Pagination currentPage={currentPage} />
        </>
    );
}

export default Home;