import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__links'>
                <Link to='/'>Blu.com © 2021 | Belanja Parcel Online, Aman & Terpercaya</Link>
                <div className="footer_icon">
                    <FacebookIcon style={{ fill: "#4267B2" }} />
                    <TwitterIcon style={{ fill: "#00acee" }} />
                    <InstagramIcon style={{ fill: "#4c68d7" }} />
                </div>
            </div>
        </div>
    )
}

export default Footer