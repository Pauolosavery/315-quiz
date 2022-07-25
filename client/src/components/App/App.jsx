import quiz from '../../serverDB/server.js';

import './App.css';
import GameTable from "../GameTable/GameTable";
import Navbar from "../Navbar/Navbar";
import Registration from "../Registration/Registration.jsx"
import Home from '../Home/Home.jsx'
import Exam from '../Exam/Exam.jsx'
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
  
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
      <Backvideo/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<GameTable />} />
          <Route path="/reg" element={<Registration />} />
          <Route path="/exam/:step" element={<Exam/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

