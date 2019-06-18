import axios from 'axios';
import { API_URL } from 'app/settings';

export const accountApi = {
  signin: data => axios.post(`${API_URL}/account/signin`, data),
  signup: data => axios.post(`${API_URL}/account/signup`, data),
  signout: () => axios.post(`${API_URL}/account/signout`),
  update: data => axios.post(`${API_URL}/account/update`, data),
  load: () => axios.get(`${API_URL}/account`),
};
