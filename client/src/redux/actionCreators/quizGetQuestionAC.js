import { GET_QUESTION } from "../actionTypes/quizAT";


export function quizGetQuestionAC(payload){
  return {
    type: GET_QUESTION,
    payload
  }
}
