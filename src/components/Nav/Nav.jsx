import React from 'react';
import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar.jsx';

export default function Navs(props) {
    return (
        <div className={styles.container}>
            <SearchBar onSearch={(characterID) => props.onSearch(characterID)} />
        </div>
    )
}