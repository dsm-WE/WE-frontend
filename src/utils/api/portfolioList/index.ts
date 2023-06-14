import { portfolioListModel } from 'models/portfolioList';
import instance from 'utils/axios/instance';

export const getPortfolioList = async (): Promise<portfolioListModel> => {
  try {
    const res = await instance.get(`/post/list?size=9&idx=1`);

    return res.data;
  } catch (err) {
    throw err;
  }
};
