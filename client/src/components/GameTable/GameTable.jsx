import '../GameTable/GameTable_style.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addQuizAC } from '../../redux/actionCreators/quizAC.js';
import { UPD } from '../../redux/actionTypes/quizAT.js';




function GameTable() {
  const dispatch = useDispatch();
  const { quiz } = useSelector(state => state.quiz)
  const addQuestions = () => {
    fetch('/quiz')
      .then(res => res.json())
      .then(res => {
          // console.log(quiz);
        dispatch(addQuizAC(res.quiz))
      })
      
  }

  useEffect( () => {
    addQuestions()
    return () => dispatch( { type: UPD} )
  }, [dispatch])

  console.log("🚀 ~ file: GameTable.jsx ~ line 44 ~ {quiz.map ~ quiz", quiz)
  return (
    <>
      <div className='container'>
        <table>
          <tr>
            <th>Т Е М Ы</th>
            <br></br>
            <th>В О П Р О С Ы</th>
          </tr>

          <tr>
            {quiz.map((e)=>{
              <tr>
                <td>{e.question}</td>
                <td>{e["Theme.title"]}</td>
              </tr>
          })}
          </tr>
          <tr>
            <td>Тупые</td>
            <td> <Link to='/game/:id'>100</Link></td>
            <td> <Link to='/game/:id'>200</Link></td>
            <td> <Link to='/game/:id'>500</Link></td>
          </tr>
          <tr>
            <td>Айтишечка</td>
            <td> <Link to='/game/:id'>100</Link></td>
            <td> <Link to='/game/:id'>200</Link></td>
            <td> <Link to='/game/:id'>500</Link></td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default GameTable;
