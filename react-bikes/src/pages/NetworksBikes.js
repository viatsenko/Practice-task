import React, {useState} from 'react';
import styles from '../components/NetworksBikes.module.css';
import {bikesActions} from "../store/bikesSlice";
import {useDispatch, useSelector} from "react-redux";
import NetworksBikesItem from "../components/NetworksBikesItem";


const NetworksBikes = () => {

    const bikesNetworks = useSelector(state => state.bikes.networks);
    const networkPage = useSelector(state => state.bikes.networkPage);
    const dispatchActions = useDispatch();

    //HTTP Requests Bikers stations
    async function fetchCityBikesStations(id){
            const response = await fetch(`http://api.citybik.es/v2/networks/${id}`);
            const data = await response.json();
            dispatchActions(bikesActions.cityBikesStations(data.network.stations));
    }
    //HTTP Requests Header information
    const [selectedId, setSelectedId] = useState(null);
    async function handleClick(id, name) {
        await fetchCityBikesStations(id);
        dispatchActions(bikesActions.selectNetwork({name, id}));
        setSelectedId(id);
    }

    if (bikesNetworks.length === 0){
        return <p>сетей не найдено</p>;
    }

    return (
        <ul className={styles.ul}>
             {networkPage.map(function (value){
                return <li  onClick={() => handleClick(value.id, value.name)} key={value.id} className={value.id === selectedId ? styles.selectItem : ''}>
                    <NetworksBikesItem city = {value.location.city} company = {value.company} name = {value.name}/>
                </li>
            })}
        </ul>
    );
};

export default NetworksBikes;
