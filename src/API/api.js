import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "c14e60c2-d45d-46e6-9c86-7baa219ec6f8"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})


export const usersAPI = {
getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then (response => {
            return response.data;
        });
},
follow(userId) {
    return instance.post(`follow/${userId}`)
},
unfollow(userId) {
    return instance.delete(`follow/${userId}`) 
},
getProfile(userId) {
return instance.get(`profile/` + userId);  
},
}

export const authAPI= {
    me() {
     return instance.get(`auth/me`)
    }
}