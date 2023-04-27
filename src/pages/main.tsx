import Banner from 'components/banner';
import Footer from 'components/common/footer';
import Portfolio from 'components/portfolio';
import styled from 'styled-components';

const Main = () => {
  return (
    <>
      <Banner />
      <ListCheckSection>
        <ListCheckText>
          <ListCheckMainText>포트폴리오를 확인해 보세요🌿</ListCheckMainText>
          <ListCheckSubText>
            취뽀기원에 올라온 포트폴리오 목록을 확인해 보세요.
          </ListCheckSubText>
        </ListCheckText>
        <PortfolioGridBox>
          {Array(9)
            .fill(0)
            .map((_, i) => (
              <Portfolio key={i} />
            ))}
        </PortfolioGridBox>
      </ListCheckSection>
      <Footer />
    </>
  );
};

const PortfolioGridBox = styled.div`
  display: grid;
  gap: 20px 30px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 50px;
  margin-bottom: 100px;
`;

const ListCheckSection = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const ListCheckMainText = styled.p`
  font-size: 28px;
  font-weight: bold;
`;

const ListCheckSubText = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: #808080;
`;

const ListCheckText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 70px;
`;

export default Main;
