import axios from 'axios';
import { API_URL } from 'app/settings';
import { apiFactory } from './factory';

export const postApi = {
  ...apiFactory('posts'),
  public: postId => axios.post(`${API_URL}/posts/public`, { postId }),
};
