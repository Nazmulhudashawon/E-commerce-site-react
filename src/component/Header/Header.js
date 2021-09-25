import React from 'react';
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css'


const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <div className="navsearch">
                <nav>
                    <a href="#">ShopOrder</a>
                    <a href="#"> ReviewManage </a>
                    <a href="#">Inventory here</a>
                </nav>
                <input className="input" type="text" placeholder="Type here to search" />
                <FontAwesomeIcon className="icon" icon={faShoppingCart} />
            </div>
        </div>
    );
};

export default Header;