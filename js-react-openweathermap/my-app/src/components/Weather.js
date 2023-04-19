import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Weather = () => {

    const weather = useSelector(state => state.weatherData);
    if (weather === null) {
        return null;
    }
    return (
        <Fragment>
            <table className={'table table-success'}>
                    <tbody>
                    <tr className={'text-success'}>
                        <td>Местоположение:</td>
                        <td>Температура:</td>
                        <td>Давление:</td>
                    </tr>
                    <tr className={'text-secondary'}>
                        <td>{weather.city}, {weather.country}</td>
                        <td>{Math.round(weather.temp - 273)}°C</td>
                        <td>{weather.pressure}, мбар</td>
                    </tr>
                    </tbody>
                </table>
            <div>
                <Link to = {'/info'}><button>Подробнее</button></Link>
            </div>
        </Fragment>
    );
};

export default Weather;