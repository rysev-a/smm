import axios from 'axios';
import { API_URL } from 'app/settings';

class DevModel {
  generate() {
    axios.post(`${API_URL}/cypress/generate`);
  }

  clear() {
    axios.post(`${API_URL}/cypress/clear`);
  }
}

const devModel = new DevModel();

export default devModel;
