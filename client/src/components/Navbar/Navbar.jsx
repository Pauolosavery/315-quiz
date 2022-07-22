import '../Navbar/Navbar_style.css';
import { Link } from "react-router-dom";


function Navbar({setunmountVideo, unmountVideo}) {




  return (
    <>
      <header>
        <Link to ='/Home' className='logo'>VICTORIUS</Link>
        
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
