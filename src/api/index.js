import axios from "axios";
const URL_SERV = "http://localhost:3000";
export const getPosts = async (prevSate, page = 1, order = "asc", limit = "10") => {
    try {
        const response = await axios.get(`${URL_SERV}/posts?_page=${page}&_limit=${limit}&_order=${order}&$_sort=id`)
        return {
            posts: prevSate.posts ? [...prevSate.posts, response.data] : response.data,
            page: page,
            end: response.data.length === 0 ? true : false
        }
    } catch (error) {
        throw error
    }
}