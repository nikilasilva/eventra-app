import axios from "axios";
import AsyncStorage from  '@react-native-async-storage/async-storage';

const API_URL = 'http://192.168.1.10:5000/api/users';

const api = axios.create({
    baseURL: API_URL,
});

// Optional: Interceptor to add auth token to every request
api.interceptors.request.use(async (config) => {
    const token = await  AsyncStorage.getItem('userToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;