import quiz from '../../serverDB/server.js';

import './App.css';
import GameTable from "../GameTable/GameTable";
import Navbar from "../Navbar/Navbar";
import Registration from "../Registration/Registration.jsx"
import Card from '../Card/Card.jsx'
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { addQuizAC } from '../../redux/actionCreators/quizAC';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Backvideo from '../Backvideo/Backvideo.jsx';

function App() {
  
  // console.log("🚀 ~ file: App.jsx ~ line 5 ~ quiz", quiz)
  // const dispatch = useDispatch()
  // const { user } = useSelector(state => state.user)
  // useEffect(() => {
  //   fetch('/', {
  //     method: "GET",
  //     credentials: 'include',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(quiz => dispatch(addQuizAC(quiz)))
  // }, [])

  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
      <Backvideo/>
        <Routes>
          <Route path="/game" element={<GameTable />} />
          <Route path="/reg" element={<Registration />} />
          <Route path='/card/:id' element={<Card/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

