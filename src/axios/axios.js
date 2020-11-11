import axios from 'axios';

require('dotenv').config();

const axClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});

export default axClient;
