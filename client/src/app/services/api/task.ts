import axios from 'axios';
import { API_URL } from 'app/settings';
import { apiFactory } from './factory';

export const taskApi = {
  create: {
    post: values => axios.post(`${API_URL}/tasks/create`, values),
  },
  update: {
    put: ({ id, values }) => axios.put(`${API_URL}/tasks/${id}/update`, values),
  },
  ...apiFactory('tasks'),
};
