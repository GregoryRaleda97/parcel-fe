import React from 'react';
import './Nav.css';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/logo.jpg';
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
                                <select className="select">
                                    <option>Semua Kategori</option>
                                    <option href="/">Syrups</option>
                                    <option href="/">Packaging Juice</option>
                                    <option href="/">Soft Drinks</option>
                                    <option href="/">Chocolates</option>
                                    <option href="/">Snacks</option>
                                    <option href="/">Biscuits</option>
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
                            <Link to='/'>
                                <button className="button1">Masuk</button>
                            </Link>

                            <Link to='/register'>
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
