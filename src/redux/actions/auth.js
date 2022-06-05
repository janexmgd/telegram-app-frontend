import axios from 'axios';
import { BACKEND_URL } from '../../helpers/env';
export const OnLogin = (form) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BACKEND_URL}/auth/login`, form)
      .then((res) => {
        // resolve(res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.data));
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const OnRegister = (form) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BACKEND_URL}/auth/register`, form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
