import React from 'react';
import loader from '../../../assets/ripple_loader.svg';
import styles from './Loader.module.css';

const Loader = (props) => {
    return (
        < div className={styles.loader_container} >
            <img src={loader} alt="loader" />
        </div >
    )
}

export default Loader;