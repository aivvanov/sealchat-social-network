import React from "react";
import styles from './Paginator.module.css';
import cn from 'classnames';

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged }) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const startPage = Math.max(currentPage - 2, 1);
    const endPage = Math.min(currentPage + 2, pagesCount);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={cn(styles.pagination)}>
                {startPage > 1 && <>
                    <span onClick={() => onPageChanged(1)} className={cn(styles.pagination_elem)}>{"1"}</span>
                    {startPage > 2 && <span className={cn(styles.pagination_dots)}>...</span>}
                </>}

                {pages.slice(startPage - 1, endPage).map(page => {
                    return <span key={page} onClick={() => onPageChanged(page)} className={cn({
                        [styles.current_pagination_elem]: currentPage === page
                    }, {
                        [styles.pagination_elem]: currentPage !== page
                    })}>{page}</span>
                })}

                {endPage < pagesCount && <>
                    {endPage < pagesCount - 1 && <span className={cn(styles.pagination_dots)}>...</span>}
                    <span onClick={() => onPageChanged(pagesCount)} className={cn(styles.pagination_elem)}>{pagesCount}</span>
                </>}
            </div>
        </div>
    );
}

export default Paginator;