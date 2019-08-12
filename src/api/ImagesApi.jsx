import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 732876a859a4e1618782c89125ca06d86eec33aea31b2bf1afb4371411591b5f'
  }
});
