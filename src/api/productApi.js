import api from './axios';
export const getProducts = async () => {
    const response = await api.get('/product');
    return response;
}
export const getProductById = async (id) => {
    const response = await api.get(`/product/${id}`);
    return response;
}