import { addIcon } from 'assets';
import Portfolio from 'components/portfolio';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MyPortfolio = () => {
  return (
    <>
      <MyPortfolioSection>
        <SectionHead>
          <SectionTitle>내 포트폴리오</SectionTitle>
          <Link to="/portfolio/write">
            <AddPortfolioBtn />
          </Link>
        </SectionHead>
        <PortfolioWrap>
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <Portfolio key={i} />
            ))}
        </PortfolioWrap>
      </MyPortfolioSection>
    </>
  );
};

const PortfolioWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: fit-content;
  gap: 30px;
  margin-top: 30px;
  margin-bottom: 130px;
`;

const AddPortfolioBtn = styled.button`
  width: 30px;
  aspect-ratio: 1;
  border: 0;
  cursor: pointer;

  background: no-repeat center/cover url(${addIcon});
`;

const SectionTitle = styled.p`
  font-size: 26px;
`;

const SectionHead = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

const MyPortfolioSection = styled.section`
  width: 100%;
  height: fit-content;
  margin-top: 80px;
`;

export default MyPortfolio;
