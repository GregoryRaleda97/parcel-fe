import React from 'react';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import './Register.css';
import RegisterImg from '../../assets/register.png'

function Register() {
    return (
        <div className='signup'>
            <div className='signup__info'>
                <h1>Create Account</h1>
                <form className='signup__form'>
                    <label htmlFor='fName'>First Name</label>
                    <input
                        id='fName'
                        type='text'
                    // value={fName}
                    // onChange={(e) => setFName(e.target.value)}
                    />
                    <label htmlFor='lName'>Last Name</label>
                    <input
                        id='lName'
                        type='text'
                    // value={lName}
                    // onChange={(e) => setLName(e.target.value)}
                    />
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
                        Register
                    </button>
                </form>
                <div className='signup__divider'>
                    <hr /> <span>Have Account?</span> <hr />
                </div>
                <Link to='/login'>
                    <button>Login</button>
                </Link>
            </div>
            <img
            src={RegisterImg}
            className="footer-img1"
            />
            {/* <Footer /> */}
        </div>
    )
}

export default Register
