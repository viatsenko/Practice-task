import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from './StationsBike.module.css';
import {likesActions} from "../store/likesSlice";
import StationsBikeItem from "./StationsBikeItem";

const StationsBikes = () => {
    const bikesStations = useSelector(state => state.bikes.stations);
    const likesState = useSelector(state => state.favourite);
    const stationPage = useSelector(state => state.bikes.stationPage);
    const networkName = useSelector(state => state.bikes.networkName);
    const networkId = useSelector(state => state.bikes.networkId);
    const dispatchAction = useDispatch();

    function likeHandler(id, name){
        if (likesState[id] !== undefined){
            dispatchAction(likesActions.removeLike(id))
        }
        else {
            dispatchAction(likesActions.addLike({id, name, networkId}));
        }
    }

    if (networkName !== '' && bikesStations.length === 0) {
        return <div className={styles.notFoundStations}>Stations not found</div>;
    }

    return (
        <ul className={styles.ul}>
            {stationPage.map(function (value) {
                let favourite = likesState[value.id] !== undefined;
                return <li key={value.id} onClick={() => likeHandler(value.id, value.name)}>
                  <StationsBikeItem name = {value.name} free_bikes = {value.free_bikes} favourite = {favourite}/>
                </li>
            })}
        </ul>
    );
};

export default StationsBikes;
