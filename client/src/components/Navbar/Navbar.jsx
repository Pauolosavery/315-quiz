import '../Navbar/Navbar_style.css';
import { Link, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { regUserAC } from "../../redux/actionCreators/userAC";

import { pink } from '@mui/material/colors';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Button from '@mui/material/Button';

function Navbar({ setunmountVideo, unmountVideo }) {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)
  const navigate=useNavigate()

  return (
    <>
      <header>
        <Link to='/' className='logo'>WELCOME &nbsp; TO &nbsp; REACT QUIZ</Link>
      </header>
    </>
  );
}

export default Navbar;
