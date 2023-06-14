import axios from 'axios';
import { codeCheckReqModel } from 'models/signUp';
import instance from 'utils/axios/instance';
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const codeCheck = async (codeCheckRequest: codeCheckReqModel) => {
  try {
    const res = await axios.post(`${BASE_URL}/user/code`, codeCheckRequest);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const emailAuthCode = async (email: string) => {
  try {
    await axios.put(`${BASE_URL}/user/code?email=${email}`);
  } catch (error) {
    throw error;
  }
};

export const userSignUp = async () => {
  try {
    axios.post(`${BASE_URL}/user/signup`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const signUp = async (signUpForm: FormData) => {
  try {
    const res = await instance.post('/user/signup', signUpForm, {
      headers: {
        'content-Type': 'multipart/form-data',
      },
    });

    console.log(res);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
