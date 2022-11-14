import axios from "axios";
const URL_SERV = "http://localhost:3004";
export const getPosts = async (prevSate, page = 1, order = "asc", limit = "10") => {
    try {
        const response = await axios.get(`${URL_SERV}/posts?_page=${page}&_limit=${limit}&_order=${order}&$_sort=id`)
        return {
            posts: prevSate.posts ? [...prevSate.posts, ...response.data] : response.data,
            page: page,
            end: response.data.length === 0 ? true : false
        }
    } catch (error) {
        throw error
    }
}

export const addNewsletter = async (data) => {
    try {
        const findUser = await axios.get(`${URL_SERV}/newsletter?email=${data.email}`)
        if (!Array.isArray(findUser.data) || !findUser.data.length) {
            const response = await axios({
                method: "POST",
                url: `${URL_SERV}/newsletter`,
                data: {
                    email: data.email
                }
            })
            return { newsletter: "added", email: response.data }
        } else {
            return {newsletter:"faild"}
        }
    } catch (error) {
        throw error
    }
}

