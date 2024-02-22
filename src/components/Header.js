import React from 'react';
import './Header.css';
// Import the Instagram logo if it's stored locally
// import InstagramLogo from './imgs/Instagram_Glyph_Gradient.png';

const USE_IMAGE_LOGO = false; // true: use image, false: use text
const LOGO_TEXT = "면면일주";
const LOGO_SRC = process.env.PUBLIC_URL + '/imgs/Instagram_Glyph_Gradient.png';
const INSTAGRAM_LINK = "https://instagram.com/surface_park";

function Header() {
    return (
        <div className="header-container">
            {USE_IMAGE_LOGO ? (
                // Example usage if you want to use a logo from public directory
                <div className="logo-text">{LOGO_TEXT}
                    {/* <img src={LOGO_SRC} alt="Instagram" className="instagram-logo"/> */}
                </div>
            ) : (
                <div className="logo-text">{LOGO_TEXT}</div>
            )}
            {/* Instagram Link */}
            <a href={INSTAGRAM_LINK} className="instagram-link" target="_blank" rel="noopener noreferrer">
                <img src={LOGO_SRC} alt="Instagram" className="instagram-logo"/>
            </a>
        </div>
    );
}

export default Header;