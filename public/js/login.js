/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
// const baseUrl = 'http://localhost:5000';
const api = '/api/v1';

export const signup = async (name, email, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `${api}/users/signup`,
      data: {
        name,
        email,
        password,
        passwordConfirm
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `${api}/users/login`,
      data: {
        email,
        password
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: `${api}/users/logout`
    });
    if ((res.data.status = 'success')) location.assign('/');
  } catch (err) {
    showAlert('error', 'Error logging out! Try again.');
  }
};
