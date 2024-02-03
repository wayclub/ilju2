import React from 'react';
import './Header.css';

const USE_IMAGE_LOGO = false; // true: use image, false: use text
const LOGO_TEXT = "면면일주";
const LOGO_SRC = "/path/to/logo.png"; 

function Header() {
    return (
        <div className="header-container">
            {USE_IMAGE_LOGO ? (
                <img src={LOGO_SRC} alt="Logo" className="logo-image" />
            ) : (
                <div className="logo-text">{LOGO_TEXT}</div>
            )}
        </div>
    );
}

export default Header;
