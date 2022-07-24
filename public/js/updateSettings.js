/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
// const baseUrl = 'http://localhost:5000';
const api = '/api/v1';

// type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? `${api}/users/updateMyPassword`
        : `${api}/users/updateMe`;

    const res = await axios({
      method: 'PATCH',
      url,
      data
    });

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully!`);
    }
    setTimeout(() => {
      location.reload(true);
    }, 1000);
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
