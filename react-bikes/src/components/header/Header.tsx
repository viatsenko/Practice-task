import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.css'
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {userAuthActions} from "../../store/userAuthSlice";
import {Store} from "../../store/types";


const Header = () => {
    const isUserLoggedIn = useSelector((state: Store) => state.auth.isUserLoggedIn);
    const networkName = useSelector((state: Store) => state.bikes.networkName);
    const stationsLength = useSelector((state: Store) => state.bikes.stations);
    const networkId = useSelector((state: Store) => state.bikes.networkId);

    const likes = useSelector((state: Store) => state.favourite);
    const dispatchAction = useDispatch();

    const handleClickError = (event: React.SyntheticEvent<EventTarget>) => {
        if (!isUserLoggedIn) {
            event.preventDefault();
            dispatchAction(userAuthActions.showError(true));
        }
    }
    const cancelHandler = () => {
        dispatchAction(userAuthActions.signOut());
    }
    function countLike() {
        return Object.values(likes).filter(function (value) {
            return value.networkId === networkId;
        }).length;
    }

    return (
        <header className={styles.header}>
            <h1>City Bikes</h1>
            {isUserLoggedIn && networkName && <div className={styles.pContainer}>
                <p className={styles.pElem}>Network name: <span className={styles.spanStyles}>{networkName}</span></p>
                <p className={styles.pElem}>Stations amount: <span className={styles.spanStylesAmount}>{stationsLength.length}</span> </p>
                <p className={styles.pElem}>Likes: <span className={styles.spanStylesLikes}>{countLike()}</span></p>
            </div>}
            <nav className={styles.nav}>
                <li><NavLink to={'/bikes'} onClick={handleClickError} activeClassName={styles.active}>Bicycle station</NavLink></li>
                <li><NavLink to={'/login'} onClick={cancelHandler} activeClassName={styles.active}>Exit</NavLink></li>
            </nav>
        </header>
    );
}
export default Header;
