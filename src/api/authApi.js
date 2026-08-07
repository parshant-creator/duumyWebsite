import api from './axios';

export const registerUser = (userData)=>{
    return api.post('/user', userData);
}
export const loginUser = (userData)=>{
    return api.post('/user/login', userData);
}
export const getUserProfile = async ()=>{
    const token = localStorage.getItem("token")
    const response = await api.get("/user/profile",{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return response.data;
}
export const checkPhoneNumber = (userData)=>{
    return api.post('/user/check-phone', userData);
}
