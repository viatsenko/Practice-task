import React, {useState} from 'react';
import styles from '../components/bikeStations/NetworksBikes.module.css';
import {bikesActions} from "../store/bikesSlice";
import {useDispatch, useSelector} from "react-redux";
import NetworksBikesItem from "../components/bikeStations/NetworksBikesItem";
import {Store} from "../store/types";



const NetworksBikes = () => {

    const bikesNetworks = useSelector((state: Store) => state.bikes.networks);
    const networkPage = useSelector((state: Store) => state.bikes.networkPage);
    const dispatchActions = useDispatch();

    //HTTP Requests Bikers stations
    async function fetchCityBikesStations(id: string){
            const response = await fetch(`http://api.citybik.es/v2/networks/${id}`);
            const data = await response.json();
            dispatchActions(bikesActions.setCityBikesStations(data.network.stations));
    }
    //HTTP Requests Header information
    const [selectedId, setSelectedId] = useState<string | null>(null);
    async function handleClick(id: string, name: string) {
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
                    <NetworksBikesItem city = {value.location.city} company = {value.company[0]} name = {value.name}/>
                </li>
            })}
        </ul>
    );
};

export default NetworksBikes;
