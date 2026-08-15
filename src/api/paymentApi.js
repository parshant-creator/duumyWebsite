import api  from "./axios";
export const  createOrderPayment = async(amount)=>{
    const response = await api.post('/payment/create-order',{
        amount
    });
    return response;
}
export const  verifyPayment = async(paymentData)=>{
    const response = await api.post('/payment/verify-payment',{
        paymentData
    });
    return response;
}