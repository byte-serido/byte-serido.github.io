import React from 'react';
import './styles.css';
import Logo from '../../assets/Logo.jpg'

function Header() {
    return (
        <div className='header-root'>
            <div className="banner-img">
                <img src={Logo}></img>
                </div>
        </div>
    );
}

export default Header;
