import * as api from "../../api";
import {GET_POSTS,ADD_NEWSLETTER} from "../types"
export const getPosts=(homePosts,page,order,limit)=>({
    type:GET_POSTS,
    payload:api.getPosts(homePosts,page,order,limit)
})

export const addNewsletter=(data)=>({
    type:ADD_NEWSLETTER,
    payload: api.addNewsletter(data)
})