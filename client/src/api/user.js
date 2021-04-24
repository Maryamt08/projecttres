import axios from './axios';
export const loginUser = (email,password)=>{
    return axios.post("/users/login",{
        email,
        password
    })
}
export const registerUser=(email,password,role)=>{
    return axios.post("/users/register",{
        email,
        password,
        role
    })
}