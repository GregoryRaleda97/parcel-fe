import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import HP from '../../assets/hp.png';
import Headset from '../../assets/headset.svg';
import User from '../../assets/user.png';

function Header() {
    return (
        <div className="header">
            <div className="header_links">
                <img
                    className='header_Img'
                    src={HP}
                />
                <NavLink to='/'>Download Aplikasi</NavLink>
                <img
                    className='header_Img'
                    src={Headset}
                />
                <NavLink to='/'>Bantuan 24/7</NavLink>
                <img
                    className='header_Img'
                    src={User}
                />
                <NavLink to='/'>Hello, Guest!</NavLink>
            </div>
            <div className="header_right">
                <NavLink to='/'>Jual di Blu.com</NavLink>
                <NavLink to='/'>Rewards</NavLink>
                <NavLink to='/'>Cek daftar pesanan</NavLink>
            </div>
        </div>
    )
}

export default Header;
