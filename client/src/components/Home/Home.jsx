import '../Home/Home_style.css';
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { regUserAC } from "../../redux/actionCreators/userAC";

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Button from '@mui/material/Button';

function Home() {
    const { user } = useSelector(state => state.user)
    const navigate = useNavigate()

    return (
        <div
            className="startBtn"
        >
            <Button
                variant="text"
                onClick={() => {
                    navigate('/game');
                    console.log('CLICK START')
                }}
            >
                <PlayCircleOutlineIcon sx={{ color: '#ffafea', fontSize: 150 }} />
            </Button>
            <button 
            >
                <Link to="/exam/3">EXAM</Link>
            </button>
        </div>
    )
}
export default Home;
