import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';

const NavLinkMe = ({ to, children, ...props }) => {
    return (
      <NavLink
        {...props}
        to={to}
        className={({ isActive }) =>
          (isActive ? (styles.active) : (styles.disable))}>
        {children}
      </NavLink>
    )
  }

export default function Navs(props) {
    return (
        <div className={styles.container}>

            <NavLinkMe to="/about">
                <button className={styles.buttonBack}>About</button>
            </NavLinkMe>
            <NavLinkMe to="/">
                <button className={styles.buttonBack}>Home</button>
            </NavLinkMe>

            <SearchBar onSearch={(characterID) => props.onSearch(characterID)} />
        </div>
    )
}