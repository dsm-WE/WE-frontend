import axios from 'axios';
import { loginReqModel } from 'models/login';
import { setToken } from 'utils/functions/tokenManager';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const loginApi = async (loginData: loginReqModel) => {
  try {
    const res = await axios.post(`${BASE_URL}/user/login`, loginData);

    const { accessToken, refreshToken } = res.data;

    setToken(accessToken, refreshToken);
  } catch (error) {}
};
