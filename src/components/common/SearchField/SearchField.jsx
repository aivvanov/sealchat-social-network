import React from 'react';
import styles from './SearchField.module.css';

const SearchField = (props) => {
    return (
        <div className={styles.users_search}>
            <input
                className={styles.input_field}
                onChange={(e) => props.onSearchUsersChange(e)}
                ref={props.newMessageElement}
                value={props.currentSearchText}
                placeholder="Enter username here..."
            />
            <button
                className={styles.search_button}
                onClick={() => props.onSearchUsersClick()} >Search</button>
        </div>
    )
}

export default SearchField;