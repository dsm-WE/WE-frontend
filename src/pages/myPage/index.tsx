import Footer from 'components/common/footer';
import MyPortfolio from 'components/myPage/myPortfolio';
import UserInfoSection from 'components/myPage/userInfo';
import styled from 'styled-components';

const MyPage = () => {
  return (
    <>
      <MyPageContainer>
        <UserInfoSection />
        <MyPortfolio />
      </MyPageContainer>
      <Footer />
    </>
  );
};

const MyPageContainer = styled.div`
  width: 880px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MyPage;
