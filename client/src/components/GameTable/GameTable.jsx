import '../GameTable/GameTable_style.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addQuizAC } from '../../redux/actionCreators/quizAC.js';
import { UPD } from '../../redux/actionTypes/quizAT.js';




function GameTable() {
  const dispatch = useDispatch();
  // const { quiz } = useSelector(state => state.quiz)
  const addQuestions = () => {
    fetch('http://localhost:4000/')
      .then(res => res.json())
      .then(data => {
          console.log(data);
        dispatch(addQuizAC(data.message))
      
      })
      
  }

  useEffect( () => {
    addQuestions()
    return () => dispatch( { type: UPD} )
  }, [dispatch])




  return (
    <>
      <div className='container'>
        <table>
          <tr>
            <th>Т Е М Ы</th>
            <br></br>
            <th>В О П Р О С Ы</th>
          </tr>
            {/* {quest.map(()=>{
              <tr>
                <td>{quest.question}</td>
                <td>{quest.questionText_1}</td>
              </tr>
          })} */}
          
          
          <tr>
            <td>Эльбрус</td>
            <td> <Link to='/game/:id'>100</Link></td>
            <td> <Link to='/game/:id'>200</Link></td>
            <td> <Link to='/game/:id'>500</Link></td>
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
