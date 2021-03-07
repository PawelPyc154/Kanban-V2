import axios from 'axios';

const axiosApi = axios.create({ baseURL: process.env.REACT_APP_AXIOS_BASE_URL });

export default axiosApi;
