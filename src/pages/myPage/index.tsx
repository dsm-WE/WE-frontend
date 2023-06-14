import Footer from 'components/common/footer';
// import MyPortfolio from 'components/myPage/myPortfolio';
import UserInfoSection from 'components/myPage/userInfo';
import styled from 'styled-components';

const MyPage = () => {
  return (
    <MyPageWrap>
      <MyPageContainer>
        <UserInfoSection />
        {/* <MyPortfolio /> */}
      </MyPageContainer>
      <Footer />
    </MyPageWrap>
  );
};
const MyPageWrap = styled.main`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MyPageContainer = styled.div`
  width: 880px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MyPage;
