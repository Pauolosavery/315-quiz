

const reducer =(state, action)=>{
  switch(action.type){
    case 'ADD_POST':
     return {...state, posts:[...state.posts,{id: Date.now(),title:action.payload}] } 
     case 'ADD_PHOTO':
      return {...state,photos:[...state.photos,{id: Date.now(),url:action.payload,likes:0}]}
     case'DELETE_POST':
     return {...state,posts:state.posts.filter(post=>post.id !== action.payload.id)}
     case 'ADD_LIKE':
      return{...state,photos:state.photos.map(photo=> photo.id === action.payload ? {...photo,likes: photo.likes + 1 } :photo)}
     case 'INIT_USERS':
      return {...state,users:action.payload}
      case 'ADD_FRIEND':
        const friend= state.users.filter(user=>user.id === +action.payload)[0]
        return{...state,friends:[...state.friends,friend]}
        case 'UPD':
          console.log(44)
          return{...state,photos:[]}
      default:
      return state
  }
}
 export default reducer
