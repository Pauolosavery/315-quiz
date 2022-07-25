import '../GameTable/GameTable_style.css'

import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { addQuizAC } from '../../redux/actionCreators/quizAC.js';
import { ADD_QUIZ } from '../../redux/actionTypes/quizAT.js';
import ButtonQuestion from '../ButtonQuestion/ButtonQuestion';

function GameTable() {
  const dispatch = useDispatch();
  const { quiz } = useSelector(state => state.quiz)

  useEffect(() => {
    dispatch(addQuizAC({ type: ADD_QUIZ }))
  }, [])

  return (
    <>
      <div
        className="container"
      >
        <h3>
          ИСПЫТАЙ СЕБЯ
        </h3>
        {quiz.map((q) => 
          < ButtonQuestion key={q.id} _id={q.id} size="large" />
        )
        }
      </div>

    </>
  );
}

export default GameTable;
