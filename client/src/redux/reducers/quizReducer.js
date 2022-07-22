import { ADD_QUIZ, CHECK_ANSWER, UPD } from "../actionTypes/quizAT"

const quizReducer = (state = { quiz: [] }, action) => {
  switch (action.type) {

    case ADD_QUIZ:
      const id_num1 = action.payload[0].theme_id;
      const id_num2 = action.payload[0].id;
      const id = String(id_num1) + id_num2;
      console.log("🚀 ~ file: quizReducer.js ~ line 9 ~ quizReducer ~ action.payload", action.payload)

      return {...state, quiz: action.payload.map( (ob) => ({...ob, uniq: id}))}

    // приходит запрос с №темы, 
    case CHECK_ANSWER:
      
      return { ...state, quiz: state.quiz.map(photo => photo.id === action.payload ? { ...photo, likes: photo.likes + 1 } : photo) }
      
      case UPD:
        
        console.log("🚀 ~ file: quizReducer.js ~ line 18 ~ quizReducer ~ UPD action", action)
      return { ...state, quiz: [] }

    default:
      return state
  }
}
export default quizReducer
