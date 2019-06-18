import axios from 'axios';
import { API_URL } from 'app/settings';
import { apiFactory } from './factory';

export const projectApi = {
  create: {
    post: data => axios.post(`${API_URL}/projects/create`, data),
  },
  update: {
    put: ({ id, values }) =>
      axios.put(`${API_URL}/projects/${id}/update`, values),
  },
  ...apiFactory('projects'),
};
