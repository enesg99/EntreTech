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
            <div id="hamburgerMenu" onClick={toggleMenu}>
                <div className="spanContainer">
                    <span className="hamburger"></span>
                    <span className="hamburger"></span>
                    <span className="hamburger"></span>
                </div>
            </div>

            <ul className={`hamburgerMenuItems ${isMenuOpen ? 'open' : ''}`}>
                <li><Link to='' onClick={toggleMenu}>Basics</Link></li>
                <li><Link to='' onClick={toggleMenu}>HTML</Link></li> 
                <li><Link to='' onClick={toggleMenu}>CSS</Link></li> 
                <li><Link to='' onClick={toggleMenu}>Javascript</Link></li>
            </ul>
        </>
    );
}

export default SideBarWebDev;