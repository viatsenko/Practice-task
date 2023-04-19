import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getData, mainAction} from "../store/store";

const Form = () => {
    const dispatchAction = useDispatch();
    const handleChange = (event) => {
        dispatchAction(mainAction.setCity(event.target.value))
   }
  const city = useSelector(state => state.city);
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatchAction(getData(city))
    }
    return (
       <form onSubmit={handleSubmit}>
           <input type={'text'} value={city} placeholder={'enter the city...'} onChange={handleChange}/>
           <button type={'submit'} disabled={city === ''}>Смотреть погоду</button>
       </form>
    );
};

export default Form;