import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.css'
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {userAuthActions} from "../store/userAuthSlice";

const Header = () => {
    const isUserLoggedIn = useSelector(state => state.auth.isUserLoggedIn);
    const networkName = useSelector(state => state.bikes.networkName);
    const stationsLength = useSelector(state => state.bikes.stations);
    const dispatchAction = useDispatch();

    const handleClickError = (event) => {
        if (!isUserLoggedIn) {
            event.preventDefault();
            dispatchAction(userAuthActions.showError(true));
        }
    }
    const cancelHandler = () => {
        dispatchAction(userAuthActions.signOut());
    }

    return (
        <header className={styles.header}>
            <h1>City Bikes</h1>
            {isUserLoggedIn && <div>
                <p className={styles.pElem}>Name network: <span className={styles.spanStyles}>{networkName}</span></p>
                <p className={styles.pElem}>Amount stations: <span className={styles.spanStylesAmount}>{stationsLength.length}</span> </p>
            </div>}
            <nav className={styles.nav}>
                <li><NavLink to={'/bikes'} onClick={handleClickError} activeClassName={styles.active}>Bicycle station</NavLink></li>
                <li><NavLink to={'/login'} onClick={cancelHandler} activeClassName={styles.active}>Exit</NavLink></li>
            </nav>
        </header>
    );
}
export default Header;