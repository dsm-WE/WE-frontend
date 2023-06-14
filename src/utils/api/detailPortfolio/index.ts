import instance from 'utils/axios/instance';

export const portfolioDetail = async (id: number) => {
  try {
    const res = await instance.get(`/post?portfolioId=${id}`);
    return res.data;
  } catch (error) {}
};
