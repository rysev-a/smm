import axios from 'axios';
import { API_URL } from 'app/settings';

export const apiFactory = (url: String) => ({
  list: {
    get: ({ pagination, filters, sorting }) => {
      const params = [
        `pagination=${JSON.stringify(pagination)}`,
        `filters=${JSON.stringify(filters)}`,
        `sorting=${JSON.stringify(sorting)}`,
      ].join('&');

      return axios.get(`${API_URL}/${url}?${params}`);
    },
    delete: id => axios.delete(`${API_URL}/${url}/${id}`),
    post: values => axios.post(`${API_URL}/${url}`, values),
  },

  detail: {
    get: id => axios.get(`${API_URL}/${url}/${id}`),
    put: ({ id, values }) => axios.put(`${API_URL}/${url}/${id}`, values),
  },
});
