import { useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';

import { setCurrentPage } from '../../redux/slices/filterSlice';

import styles from './Pagination.module.scss';

const Pagination = ({currentPage}) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.root}>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event) => dispatch(setCurrentPage(event.selected + 1))}
                pageRangeDisplayed={4}
                pageCount={3}
                previousLabel="<"
                forcePage={currentPage - 1}
            />
        </div>
    );
}

export default Pagination;