import api from './axios';

export const getOrders = async () => {
    const response = await api.get('/order');
    return response;
}
export const createOrder = async (orderData) => {
    const response = await api.post('/order/create', orderData);
    return response;
}