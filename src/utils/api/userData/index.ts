import { editUserDatareqModel, userDataModel } from 'models/userData';
import instance from 'utils/axios/instance';

export const getUserData = async (): Promise<userDataModel> => {
  try {
    const res = await instance.get('/user/my');
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const editUserData = async (editData: editUserDatareqModel) => {
  try {
    await instance.patch('/user/my', editData);
  } catch (error) {
    throw error;
  }
};
