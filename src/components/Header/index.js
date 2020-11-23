import React from 'react';
import './styles.css';
import Logo from '../../assets/Logo.jpg'

function Header() {
    return (
        <div className='header-root'>
                <img src={Logo}></img>
        </div>
    );
}

export default Header;
