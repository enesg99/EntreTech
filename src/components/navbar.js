import { Outlet, Link } from "react-router-dom";
import "./componentStyle/navbar.css"; 

function NavbarComp() {
  return ( 
    <>
      <nav>
        <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
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
        <div class="navUnterding">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to=''>Tracks</Link></li> 
            <li><Link to=''>FAQ</Link></li> 
            <li><Link to=''>Kontakt</Link></li> 
          </ul>
        </div>
      </nav>

      <hr />

      <Outlet />
    </>
  );
}

export default NavbarComp;

{/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
</nav> */}