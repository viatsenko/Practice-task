import React from 'react';
import styles from './ShowInfo.module.css'
import {useSelector} from "react-redux";
const ShowInfo = () => {

    const weather = useSelector(state => state.weatherData);

    return (
        <div className={styles.wrapper}>
        <table className={'table table-success table-bordered'}>
            <tbody>
            <tr className={'text-success'}>
                <td>Местоположение:</td>
                <td>Описание погоды: </td>
                <td>Температура:</td>
                <td>Давление:</td>
                <td>Влажность</td>
                <td>Температура максимальная</td>
                <td>Температура минимальная</td>
                <td>Градус ветра</td>
                <td>Скорость ветра</td>
            </tr>
            <tr className={'text-secondary'}>
                <td>{weather.city}, {weather.country}</td>
                <td>{weather.description}</td>
                <td>{Math.round(weather.temp - 273)}°C</td>
                <td>{weather.pressure * 0.75}, мм_рт.ст.</td>
                <td>{weather.humidity}%</td>
                <td>{Math.round(weather.temp_max - 273)}°C</td>
                <td>{Math.round(weather.temp_min - 273)}°C</td>
                <td>{weather.windDeg}°</td>
                <td>{weather.windSpeed} м/с</td>
            </tr>
            </tbody>
        </table>
        </div>
    );
};
export default ShowInfo;