import React, {useEffect, useState} from 'react';
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";
import styles from './components/Form.module.css';
import {Route} from "react-router-dom";
import Header from "./pages/Header";
import About from "./pages/About";
import ShowInfo from "./components/ShowInfo";
import {getData, mainAction} from "./store/store";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

const App = () => {

    const visibleForm = useSelector(state => state.isVisible);
    const weather = useSelector(state => state.weatherData);
    const error = useSelector(state => state.hasError);
    const city = useSelector(state => state.city);
    return (
        <React.Fragment>
        <Header/>
            <Route path={'/home'}>
                <div className={styles.wrapper}>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col-sm-5'}>
                                <Info/>
                            </div>
                        </div>
                        <div className={'col-sm-7'}>
                        <Form/>
                        {error && !weather && city === '' && <p className={styles.error}>Введите название города</p>}
                        {visibleForm && <Weather/>}
                        </div>
                    </div>
                </div>
            </Route>

            <Route path={'/about'}>
                <About/>
            </Route>
            <Route path={'/info'}>
                {visibleForm && <ShowInfo/>}
            </Route>
        </React.Fragment>
   );
};

export default App;