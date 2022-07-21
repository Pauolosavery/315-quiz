import { REG_USER } from "../actionTypes/userAT"


const userReducer =(state={user:{}}, action)=>{
  switch(action.type){
   case REG_USER:
    return{...state,user: action.payload}
   
      default:
      return state
  }
}
 export default userReducer
