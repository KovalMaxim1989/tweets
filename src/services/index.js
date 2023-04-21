import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://6442650433997d3ef90f09c4.mockapi.io/api/v1/users/',
});
