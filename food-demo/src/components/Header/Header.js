import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <a className="header-container__link">
                    <FontAwesomeIcon icon="shopping-cart" size={25} />
                    <span className="header-container__link-title">CART</span>
                </a>

            </div>
        </header>

    )
}

export default Header;
