import axios from 'axios';
const api = axios.create({
    baseURL:import.meta.env.VITE_API_URL,
})
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message;
      console.log("STATUS:", error.response?.status);
    console.log("MESSAGE:", error.response?.data?.message);


    if (
      error.response?.status === 401 &&
      message === "Token expired"
    ) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);
export default api;