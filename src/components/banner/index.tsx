import { bannerImg } from 'assets';
import styled from 'styled-components';

const Banner = () => {
  return (
    <BannerContainer>
      <Title>{'자신에게 맞는\n포트폴리오를 만나보세요.'}</Title>
      <SubTitle>자신의 포트폴리오를 공유하고 의견을 나눌 수 있습니다.</SubTitle>
      <Button>자세히보기</Button>
    </BannerContainer>
  );
};

const SubTitle = styled.p`
  color: white;
  font-size: 20px;
  margin-top: 16px;
  margin-bottom: 34px;
`;

const Title = styled(SubTitle)`
  font-size: 44px;
  font-weight: bold;
  margin: 0;

  white-space: pre-wrap;
`;

const Button = styled.button`
  width: 145px;
  height: 38px;
  background-color: white;
  border-radius: 19px;
  border: none;

  font-size: 16px;
  font-weight: bold;

  cursor: pointer;
`;

const BannerContainer = styled.section`
  background-image: url(${bannerImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 500px;

  padding-left: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Banner;
