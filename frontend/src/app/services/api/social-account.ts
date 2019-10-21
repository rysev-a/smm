import axios from 'axios';
import { API_URL } from 'app/settings';
import { apiFactory } from './factory';

export const socialAccountApi = {
  ...apiFactory('social-accounts'),
  getToken: socialAccountId =>
    axios.get(`${API_URL}/social-accounts/${socialAccountId}/get-token`),
};
