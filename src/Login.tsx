import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function signIn(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        // Disable refresh
        event.preventDefault();
    };

    function register(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        // Disable refresh
        event.preventDefault();
    };

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png'
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={event => setEmail(event.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={event => setPassword(event.target.value)} />

                    <button className="login__signInButton" onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By Signing in, you agree to the Amazon condition of User and Sale.
                </p>

                <button className='login__registerButton' onClick={register}>Create your Amazon account</button>
            </div>
        </div>
    );
}

export default Login
