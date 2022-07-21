import { ADD_QUIZ } from "../actionTypes/quizAT";


export function addQuizAC(payload){
  return {
    type: ADD_QUIZ,
    payload
  }
}
