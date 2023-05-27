import React, {useEffect, useState} from 'react';
import NetworksBikes from "./NetworksBikes";
import {bikesActions} from '../store/bikesSlice';
import {useDispatch, useSelector} from "react-redux";
import StationsBikes from "../components/StationsBikes";
import PaginationNetworks from "../components/pagination/PaginationNetworks";
import styles from '../components/Bikes.module.css';
import PaginationStations from "../components/pagination/PaginationStations";

const Bikes = () => {
    const dispatchActions = useDispatch();
    const bikesNetworks = useSelector(state => state.bikes.networks);
    const bikesStations = useSelector(state => state.bikes.stations);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    //HTTP Requests Bikers networks
    async function fetchCityBikesNetworks(){
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('http://api.citybik.es/v2/networks');
            if (!response.ok){
                throw new Error('Что-то пошло не так...');
            }
            const data = await response.json();
            dispatchActions(bikesActions.setCityBikesNetworks(data.networks));
        }
        catch (error){
            setError(error.message);
        }
        setIsLoading(false)
    }
    useEffect(() => {
        fetchCityBikesNetworks();
    }, []);

    //Pagination Networks
    const [currentPage, setCurrentPage] = useState(1);
    const networksPerPage = 6;
    const paginateNetworks = (pageNumber) => {
          setCurrentPage(pageNumber);
    }
    useEffect(() => {
        const lastNetworksIndex = currentPage * networksPerPage;
        const firstNetworksIndex = lastNetworksIndex - networksPerPage;
        dispatchActions(bikesActions.setCurrentNetworksPage(bikesNetworks.slice(firstNetworksIndex, lastNetworksIndex))) //текущая страница
    }, [bikesNetworks, currentPage]);

    const nextPageNetworks = () => {
       let maxPage = Math.ceil(bikesNetworks.length / networksPerPage);
        if (currentPage < maxPage){
            setCurrentPage(prevState => prevState + 1)
        }
    };
    const prevPageNetworks = () => {
        if (currentPage > 1) {
            setCurrentPage(prevState => prevState - 1)
        }
    }
    const firstPageNetworks = () => {
        setCurrentPage(1)
    }
    const lastPageNetworks = () => {
        let maxPage = Math.ceil(bikesNetworks.length / networksPerPage);
        setCurrentPage(maxPage)
    }

    //Pagination Stations
    const [currentPageStations, setCurrentPageStations] = useState(1);
    const stationsPerPage = 5;
    const paginateStations = (pageNumber) => {
        setCurrentPageStations(pageNumber)
    }

    useEffect(() => {
        const lastPageStationsIndex = currentPageStations * stationsPerPage;
        const firstPageStationsIndex = lastPageStationsIndex - stationsPerPage;
        dispatchActions(bikesActions.setCurrentStationsPage(bikesStations.slice(firstPageStationsIndex, lastPageStationsIndex)))
    }, [bikesStations, currentPageStations]);

    useEffect(() => {
        setCurrentPageStations(1);
    }, [bikesStations]);

    const nextPageStations = () => {
        const maxPage = Math.ceil(bikesStations.length / stationsPerPage);
        if(currentPageStations < maxPage){
            setCurrentPageStations(prevState => prevState + 1)
        }
    }
    const prevPageStations = () => {
        if (currentPageStations > 1){
            setCurrentPageStations(prevState => prevState - 1)
        }
    }
    const firstPageStations = () => {
        setCurrentPageStations(1)
    }
    const lastPageStations = () => {
        const maxPage = Math.ceil(bikesStations.length / stationsPerPage);
        setCurrentPageStations(maxPage);
    }

    //check page load errors
    let content;
    if (error){
        content = <p>{error}</p>;
    }
    else if (isLoading){
        content = <p>Идёт загрузка...</p>;
    } else {
        content = <NetworksBikes/>;
    }
    return (
        <div className={styles.container}>
            <div className={styles.bikesContainer}>
                {content}
                <StationsBikes/>
            </div>
            <div className={styles.pagination}>
                <PaginationNetworks
                    currentPage = {currentPage}
                    networksPerPage = {networksPerPage}
                    totalNetworks = {bikesNetworks.length}
                    paginate = {paginateNetworks}
                    pervPage = {prevPageNetworks}
                    nextPage = {nextPageNetworks}
                    firstPage = {firstPageNetworks}
                    lastPage = {lastPageNetworks}
                />
                <PaginationStations
                    currentPage = {currentPageStations}
                    stationsPerPage = {stationsPerPage}
                    totalStations = {bikesStations.length}
                    paginate = {paginateStations}
                    pervPage = {prevPageStations}
                    nextPage = {nextPageStations}
                    firstPage = {firstPageStations}
                    lastPage = {lastPageStations}
                />
            </div>

        </div>
    );
};

export default Bikes;
