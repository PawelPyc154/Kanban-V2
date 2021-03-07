import axios from 'axios';

const axiosApi = axios.create({ baseURL: process.env.REACT_APP_AXIOS_BASE_URL, withCredentials: true });

export default axiosApi;
