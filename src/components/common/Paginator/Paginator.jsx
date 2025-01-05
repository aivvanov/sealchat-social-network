import React from "react";
import styles from './Paginator.module.css';

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const startPage = Math.max(currentPage - 2, 1);
    const endPage = Math.min(currentPage + 2, pagesCount);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={styles.pagination}>
                {startPage > 1 && <>
                    <span onClick={() => onPageChanged(1)} className={styles.pagination_elem}>{"1"}</span>
                    {startPage > 2 && <span className={styles.pagination_dots}>...</span>}
                </>}

                {pages.slice(startPage - 1, endPage).map(page => {
                    return <span key={page} onClick={() => onPageChanged(page)} className={currentPage === page
                        ? styles.current_pagination_elem
                        : styles.pagination_elem
                    }>{page}</span>
                })}

                {endPage < pagesCount && <>
                    {endPage < pagesCount - 1 && <span className={styles.pagination_dots}>...</span>}
                    <span onClick={() => onPageChanged(pagesCount)} className={styles.pagination_elem}>{pagesCount}</span>
                </>}
            </div>
        </div>
    );
}

export default Paginator;