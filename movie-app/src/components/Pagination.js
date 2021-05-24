import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import "../scss/Pagination.scss"

const PaginationComponent = ({ totalPages, setPage }) => {
    const handlePageChange = i => {
        setPage(cSt => cSt = i)
        window.scroll(0, 0)
    }

    return (
        <div className="pagination">
            <Pagination count={totalPages} variant="outlined" shape="rounded" color={'primary'} onChange={(e, i) => handlePageChange(i)} />
        </div >
    );
}

export default PaginationComponent