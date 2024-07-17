import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  params: {
    apiKey: 'e940fbee2bea42f5be42ba2dfc2f1780',
    domains: 'google.com',
  },
});

export default apiClient;
