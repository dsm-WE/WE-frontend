import { useParams } from 'react-router-dom';

const PortfolioDetail = () => {
  const { id } = useParams();

  return <h1>PortfolioDetail {id}</h1>;
};

export default PortfolioDetail;
