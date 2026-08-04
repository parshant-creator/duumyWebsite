import api from './axios';

export const registerUser = (userData)=>{
    return api.post('/user', userData);
}
export const loginUser = (userData)=>{
    return api.post('/user/login', userData);
}