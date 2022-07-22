import '../Navbar/Navbar_style.css';
import { Link } from "react-router-dom";


function Navbar({setunmountVideo, unmountVideo}) {




  return (
    <>
      <header>
        <Link to ='/Home' className='logo'>W E L C O M E &nbsp; to &nbsp;  V I C T O R I U S</Link>
        
        <ul>
          <li><Link to='/game' >START GAME</Link></li>
          <li><Link to='/login' >Log in</Link></li>
          <li><Link to ='/reg' >Register</Link></li>
        </ul>
      </header>
    </>
  );
}

export default Navbar;
