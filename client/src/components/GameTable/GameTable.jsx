import '../GameTable/GameTable_style.css'

// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { addQuizAC } from '../../redux/actionCreators/quizAC.js';
import { UPD } from '../../redux/actionTypes/quizAT.js';

import ButtonQuestion from '../ButtonQuestion/ButtonQuestion.jsx';


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
            <th>&nbsp;Т Е М Ы&nbsp;</th>
            <br></br>
           
           
            <th>&nbsp;В О П Р О С Ы&nbsp;</th>
          </tr>

          
            {quiz.map((question)=>
              <tr>
                <td>{question["Theme.title"]}</td>
                &nbsp;
                &nbsp;
                <td> <ButtonQuestion key={quiz.uniq} question={question} size="large"/></td>                
              </tr>
              )
            }
          
        </table>
      </div>
    </>
  );
}

export default GameTable;
