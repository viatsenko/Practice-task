import React, {useEffect, useState} from 'react';
import styles from './Auth.module.css';
import {userAuthActions} from "../store/userAuthSlice";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const Auth = () => {
    const dispatchAction = useDispatch();
    const showErrorLogIn = useSelector(state => state.auth.showError);
    const history = useHistory();

    const logInHandler = (event) => {
        event.preventDefault();
        if (inputEmail.includes('@') && inputPassword.trim().length > 0){
            dispatchAction(userAuthActions.logIn());
            dispatchAction(userAuthActions.showError(false));
            history.push('/bikes');
        }
        else {
            dispatchAction(userAuthActions.showError(true));
        }
    }
    useEffect(() => { //отображение ошибки, если в header нажать на кнопку bicycle station незалогинившийсь.
        if (showErrorLogIn) {
            setTimeout(()=>{
                dispatchAction(userAuthActions.showError(false))
            }, 2000);
        }
    }, [showErrorLogIn]);
const cancelHandler = () => {
    setInputEmail('');
    setInputPassword('');
}
    //input email and password
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [isInputPasswordValid, setIsInputPasswordValid] = useState(false);

const inputPasswordHandler = (event) => {
    if (event.target.value.trim().length > 0){
        setIsInputPasswordValid(true)
    }
    setInputPassword(event.target.value)
}
const inputEmailHandler = (event) => {
    setInputEmail(event.target.value)
}
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                {showErrorLogIn &&
                    <div className={styles.error}>
                        <p>Error!</p>
                        <p>You need to register before going to the bike station page.</p>
                    </div>}
                <form className={styles.form} onSubmit={logInHandler}>
                    <div className={styles.control}>
                        <label htmlFor="email">Email</label>
                        <input value={inputEmail} type="email" id="email" placeholder={'enter your email...'} onChange={inputEmailHandler}/>
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="password">Password</label>
                        <input value={inputPassword} type="password" id="password" placeholder={'enter your password...'} onChange={inputPasswordHandler}/>
                    </div>
                    <div className={styles.btn}>
                        <button className={styles['btn-login']} type={"submit"} disabled={!isInputPasswordValid}>login</button>
                        <button className={styles['btn-cancel']} type={"button"} onClick={cancelHandler}>cancel</button>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default Auth;