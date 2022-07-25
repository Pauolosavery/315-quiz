import { REG_USER, USER_UPDATE } from "../actionTypes/userAT"


const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case REG_USER:
      return { ...state, user: action.payload }
    case USER_UPDATE:
      return { ...state, user: {...state.user, nickname: action.payload}}
    default:
      return state
  }
}
export default userReducer
