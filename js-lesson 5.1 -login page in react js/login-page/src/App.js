import logo from './logo.svg';
import './App.css';
import {Login} from "./login";
import React, {useState} from "react";

function App() {
    const [email, setEmail] = useState('');
return (
    <div className='App'>
        <Login/>
    </div>
)

}

export default App;
