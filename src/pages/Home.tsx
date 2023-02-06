import { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

import { contentSelector, fetchContent } from '../redux/slices/contentSlice';
import { filterSelector, setFilters } from '../redux/slices/filterSlice';
import { sortList } from '../components/Filter/Sort';

import Card from '../components/Content/Card';
import Filter from '../components/Filter/Filter';
import Skeleton from '../components/Content/Skeleton';
import NoItems from '../components/Content/NoItems';
import FaultComponent from '../components/FaultComponent/FaultComponent';
import Pagination from '../components/Pagination/Pagination';
import '../components/Content/styles.scss';

type ItemType = {
    id: string;
    src: string;
    name: string;
    types: string[];
    sizes: number[];
    price: number;
};

const Home: FC = () => {
    const isMounted = useRef(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { items, status } = useSelector(contentSelector);
    const { category, sortType, currentPage, searchText } = useSelector(filterSelector);

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search, { ignoreQueryPrefix: true });
            const sortObj = sortList.find((el) => el.sort === params.sortType);

            dispatch(setFilters({ ...params, sortObj }));
        }
    }, [dispatch]);

    useEffect(() => {
        if (isMounted.current) {
            const filterString = qs.stringify(
                {
                    currentPage,
                    sortType: sortType.sort,
                    category,
                },
                { encode: false },
            );

            navigate(`?${filterString}`);
        }

        isMounted.current = true;
    }, [sortType, category, currentPage, isMounted, navigate]);

    useEffect(() => {
        window.scrollTo(0, 0);

        // @ts-ignore
        dispatch(fetchContent({ sortType, category, searchText, currentPage }));
    }, [sortType, category, searchText, currentPage, dispatch]);

    return (
        <>
            <Filter />
            <div className="contentHeader">
                <h2 className="contentHeader__text">All pizza</h2>
            </div>
            <div className={`gallery ${(searchText && !items.length) || status === 'failed' ? 'nogrid' : ''}`}>
                {status === 'loading' ? (
                    [...new Array(8)].map((_, i) => <Skeleton key={i} />)
                ) : status !== 'failed' ? (
                    searchText && !items.length ? (
                        <NoItems />
                    ) : (
                        items.map((item: ItemType) => item.name.toLowerCase().includes(searchText.toLowerCase()) && <Card props={item} key={item.name} component={'card'} />)
                    )
                ) : (
                    <FaultComponent />
                )}
            </div>
            {(searchText && !items.length) || status === 'failed' ? '' : <Pagination currentPage={currentPage} />}
        </>
    );
};

export default Home;
