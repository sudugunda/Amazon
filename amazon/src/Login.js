import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
// import { auth } from './firebase.js';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        //firebase login shit....
    }

    const register = e => {
        e.preventDefault();

        // auth
        //     .createUserWithEmailAndPassword(email, password)
        //     .then( auth => {
        //         console.log(auth);
        //     })
        //     .catch( error => alert(error.message))

    }
    
    return (
        <div className="login">
            <Link to='/'>
                <img 
                className="login__logo"
                src='https://blog.logomyway.com/wp-content/uploads/2017/02/amazon-logo-1.jpg'/>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={ e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={ e => setPassword(e.target.value)}/>

                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>

                    <p>
                        By signing-in you agree to AMAZON FAKE CLONE
                        Conditions of use & Sale. Please
                        see our Privacy Notice, our Cookies Notice
                        and our interest-Based Ads
                        Notice.
                    </p>

                    <button type='submit' className='login__registerButton' onClick={register}>Create your Amazon Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
