import instance from 'utils/axios/instance';

export const uploadPortfolio = async (pofol: FormData) => {
  try {
    const res = await instance.post('/post', pofol, {
      headers: {
        'content-Type': 'multipart/form-data',
      },
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
