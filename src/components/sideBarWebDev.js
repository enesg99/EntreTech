import './componentStyle/sideBarWebDev.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SideBarWebDev() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return ( 
        <>
            <div id="sbHamburgerMenu" onClick={toggleMenu}>
                <div className="sbSpanContainer">
                    <span className="sbHamburger"></span>
                    <span className="sbHamburger"></span>
                    <span className="sbHamburger"></span>
                </div>
            </div>

            <ul className={`sbHamburgerMenuItems ${isMenuOpen ? 'open' : ''}`}>
                <li><Link to='/tracks/webdevpath/basics' onClick={toggleMenu}>Basics</Link></li>
                <li><Link to='/tracks/webdevpath/html' onClick={toggleMenu}>HTML</Link></li> 
                <li><Link to='/tracks/webdevpath/css' onClick={toggleMenu}>CSS</Link></li> 
                <li><Link to='/tracks/webdevpath/javascript' onClick={toggleMenu}>Javascript</Link></li>
            </ul>
        </>
    );
}

export default SideBarWebDev;