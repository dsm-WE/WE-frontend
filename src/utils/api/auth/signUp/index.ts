import axios from 'axios';
import { codeCheckReqModel } from 'models/signUp';
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const codeCheck = async (codeCheckRequest: codeCheckReqModel) => {
  try {
    const res = await axios.post(`${BASE_URL}/user/code`, codeCheckRequest);
    return res.data;
  } catch (error) {
    throw error;
  }
};
