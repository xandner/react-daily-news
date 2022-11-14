import { GET_POSTS } from "../types"
export default function postReducer(state = {}, action) {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, ...action.payload }
    default:
      return state;
  }
}
