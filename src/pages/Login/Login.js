import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import LoginImg from '../../assets/login.jpg';

function Login() {
    return (
        <div className='login'>
            <div className='login__info'>
                <h1>Sign In</h1>
                <form className='login__form'>
                    <label htmlFor='email'>Email Address</label>
                    <input
                        id='email'
                        type='email'
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        id='password'
                        type='password'
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit' >
                        Login
                    </button>
                </form>
                <div className='login__divider'>
                    <hr /> <span>Don't Have Account?</span> <hr />
                </div>
                <Link to='/login'>
                    <button>Register</button>
                </Link>
            </div>
            <img
            src={LoginImg}
            className="footer-img"
            />
            {/* <Footer /> */}
        </div>
    )
}

export default Login
