import React from 'react';
import './Nav.css';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Cart from '../../assets/cart.svg';
import { SearchOutlined } from '@material-ui/icons';
import Header from '../../components/Header/Header';
import Text from '../../components/HeaderBottom/HeaderBottom';

function Nav() {

    return (
        <div className='nav'>
            <div>
                <Header />
                <div className="navigation">
                    <div className='nav_header'>
                        <NavLink to='/'>
                            <img
                                className='nav_logoImg'
                                src={Logo}
                                alt=''
                            />
                        </NavLink>
                        <div className="sidebar_search">
                            <div className="sidebar_searchContainer">
                                <select className="select" onchange="location = this.value;">
                                    <option>Semua Kategori</option>
                                    <option href="regis">Syrups</option>
                                    <option href="/">Packaging Juice</option>
                                    <option href="/">Soft Drinks</option>
                                    <option href="/">Chocolates</option>
                                    <option href="/">Snacks</option>
                                    <option href="/">Biscuits</option>
                                    <option href="/">Blumart</option>
                                </select>
                                <SearchOutlined />
                                <input placeholder="Kamu Lagi Cari Apa?" type="text" />
                            </div>
                        </div>
                        <NavLink to='/'>
                            <img
                                className='cart'
                                src={Cart}
                                alt=''
                            />
                        </NavLink>
                        <div className="header_button">
                            <Link to='/login'>
                                <button className="button1">Masuk</button>
                            </Link>

                            <Link to='/regis'>
                                <button className="button1">Daftar</button>
                            </Link>
                        </div>
                    </div>
                    <Text />
                </div>
            </div>
        </div>
    )
}

export default Nav;
