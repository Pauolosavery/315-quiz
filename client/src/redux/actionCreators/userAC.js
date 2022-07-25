import { REG_USER, USER_UPDATE } from "../actionTypes/userAT";


export function regUserAC (payload){
  return{
    type: REG_USER,
    payload
  }
}

export function updateUserAC (payload) {
  return {
    type: USER_UPDATE,
    payload,
  }
}