import axios from "axios";

const createApi = () => {
    const api = axios.create({
        baseURL: `http://localhost:3000`,
        timeout: 5000,
        withCredentials: true,
    });

    const onSuccess = (response) => response;
    const onFail = (err) => { throw err };
    
    api.interceptors.response.use(onSuccess, onFail);

    return api;
};

export default createApi;
