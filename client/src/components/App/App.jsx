// import { useEffect} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import './App.css';
import GameTable from "../GameTable/GameTable";
import Navbar from "../Navbar/Navbar";

function App() {
  // const dispatch = useDispatch()
  // const { user } = useSelector(state => state.user)
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/game" element={<GameTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
