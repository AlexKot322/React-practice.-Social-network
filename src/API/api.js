import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "00b6c05c-5fb6-479c-9311-20e433e64c71"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})


export const usersAPI = {
getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then (response => {
            return response.data;
        });
}
}
