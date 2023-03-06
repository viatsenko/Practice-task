import React, {useState} from "react";

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[login, setLogin] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (email =='123@mail' && password == '123'){
            setLogin(true)
        }else {
            setTimeout(()=>
                    setError('')
                ,2000);
            setError('Неверный login или password')
            setEmail('');
            setPassword('');
        }
    }
    function clearInputsAndCancel() {
        setEmail('');
        setPassword('');
        setLogin(false)
    }

    if (login){
        return(
            <div>
                <div className='textSuccess'>Success!</div>
                <br/>
                <button onClick={clearInputsAndCancel}>Cancel</button>
            </div>
        )
    }
    return(
        <div className='auth-form-container'>
            <h2>Login</h2>
            <form className='login-form' onSubmit = {handleSubmit}>
                <label htmlFor='email'>email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder='your email...' id='email' name='email'/>

                <label htmlFor='password'>password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='your password...' id='password' name='password'/>

                <button type='submit'>Login</button>
            </form>
           <div className='error'>
               {error}
           </div>
        </div>
    )

}