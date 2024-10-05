import { Outlet, Link } from "react-router-dom";
import "./componentStyle/navbar.css"; 
import { useState } from "react";

function NavbarComp() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return ( 
    <>
      <nav>
        <div id="logoContainer">
          <div id='logo'>
            <span style={{ width: '20px', height: '20px', border: '1px solid black', 
                  backgroundColor: 'white', display: 'block', borderRadius: '5px' }}>
            </span>
            <span style={{ width: '20px', height: '20px', border: '1px solid black', backgroundColor: 'black',
                  display: 'block', position: 'relative', top: '-27px', left: '-7px', borderRadius: '5px' }}>
            </span>
          </div>
          <div style={{marginLeft: '10px'}}>
            <Link to='/' style={{fontSize: '24px', fontWeight: '800'}}>EntreTech</Link>
            <p>Your passion is our mission</p>
          </div>
        </div>
        <div id="navLinkContainer">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/tracks'>Tracks</Link></li> 
            <li><Link to=''>FAQ</Link></li> 
            <li><Link to=''>Kontakt</Link></li> 
          </ul>
        </div>
      </nav>

      <div id="hamburgerMenu" onClick={toggleMenu}>
        <div className="spanContainer">
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </div>
      </div>

      <ul className={`hamburgerMenuItems ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to='/' onClick={toggleMenu}>Home</Link></li>
        <li><Link to='/tracks' onClick={toggleMenu}>Tracks</Link></li> 
        <li><Link to='' onClick={toggleMenu}>FAQ</Link></li> 
        <li><Link to='' onClick={toggleMenu}>Kontakt</Link></li>
      </ul>

      <Outlet />
    </>
  );
}

export default NavbarComp;