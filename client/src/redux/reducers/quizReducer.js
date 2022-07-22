import { ADD_QUIZ, CHECK_ANSWER, UPD } from "../actionTypes/quizAT"

const quizReducer = (state = { quiz: [] }, action) => {
  switch (action.type) {

    case ADD_QUIZ:
      console.log("🚀 ~ file: quizReducer.js ~ line 9 ~ quizReducer ~ action.payload", action.payload)

      return {...state, quiz:[...state.quiz, {...action.payload, id: action.payload.theme_id+action.payload.id}]}

    // приходит запрос с №темы, 
    case CHECK_ANSWER:
      
      return { ...state, quiz: state.quiz.map(photo => photo.id === action.payload ? { ...photo, likes: photo.likes + 1 } : photo) }

    case UPD:

      return { ...state, quiz: [] }

    default:
      return state
  }
}
export default quizReducer
