import { REG_USER } from "../actionTypes/userAT";


export function regUserAC (payload){
  return{
    type: REG_USER,
    payload
  }
}
