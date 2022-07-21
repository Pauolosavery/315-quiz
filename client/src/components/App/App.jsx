
import './App.css';

import quiz from '../../serverDB/server.js';

import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { addQuizAC } from '../../redux/actionCreators/quizAC';

export function App() {
  
  console.log("🚀 ~ file: App.jsx ~ line 5 ~ quiz", quiz)
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)
  useEffect(() => {
    fetch('/', {
      method: "GET",
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(quiz => dispatch(addQuizAC(quiz)))
  }, [])

  return (
    <div className="App">

    </div>
  );
}

