import { WE_Logo, signup2 } from 'assets';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SignupUser = () => {
  const navigate = useNavigate();
  const onSignupEmail = () => {
    console.log('homepage');
    navigate('/');
  };

  return (
    <SignupContainer>
      <MainBox>
        <ImgBoxContainer>
          <ImgBox />
        </ImgBoxContainer>
        <SignupBox>
          <SignupBoxContainer>
            <SignupBoxLogo />
            <SignupBoxMain>
              <SignupBoxTitle>Signup</SignupBoxTitle>
              <SignupFieldWrap>
                <SignupFieldInput placeholder="닉네임을 입력해 주세요." />
              </SignupFieldWrap>
              <SignupFieldWrap>
                <SignupFieldInput placeholder="자기소개를 입력해 주세요." />
              </SignupFieldWrap>
              <SignupBtn onClick={onSignupEmail}>회원가입</SignupBtn>
            </SignupBoxMain>
            <SignupToLogin>
              회원이신가요? <SignupClick to="/login">로그인하기</SignupClick>
            </SignupToLogin>
          </SignupBoxContainer>
        </SignupBox>
      </MainBox>
    </SignupContainer>
  );
};

const ImgBoxContainer = styled.div`
  background-color: #9aa46b;
  border-radius: 8px 0 0 8px;
`;

const ImgBox = styled.div`
  width: 500px;
  height: 700px;
  background-color: red;
  /* position: absolute; */
  /* left: 0; */
  background: url(${signup2}) center/contain no-repeat;
  border-radius: 8px 0 0 8px;
`;

const SignupContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to bottom, #242e63, #858ebf);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignupBox = styled.div`
  width: 500px;
  height: 700px;
  /* position: absolute; */
  /* right: 0; */
  background-color: #ffffff;
  border-radius: 0 8px 8px 0;
`;

const SignupBoxContainer = styled.div`
  width: 350px;
  /* height: 500px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-weight: bold;
`;

const SignupBoxLogo = styled.div`
  margin: 50px;
  width: 67px;
  height: 43px;
  background: center/contain url(${WE_Logo}) no-repeat;
`;

const SignupBoxMain = styled.div`
  /* height: 300px; */
  height: fit-content;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

  border-bottom: 1px #e0e0e0 solid;
`;

const SignupBoxTitle = styled.div`
  font-size: 30px;
  height: 50px;
  margin: 0 0 100px 0;
  text-align: center;
`;

const SignupFieldInput = styled.input`
  width: 100%;
  height: 40px;
  border: 0px;
  outline: none;
  font-size: 18px;
`;

const SignupFieldWrap = styled.div`
  margin: 0 0 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* height: 70px; */
  width: 308px;
  border-bottom: 0.5px solid #e0e0e0;
`;

const SignupBtn = styled.button`
  margin: 30px auto;
  width: 308px;
  height: 44px;
  background-color: #242e63;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SignupToLogin = styled.div`
  font-size: 16px;
  font-weight: normal;
  margin: 20px auto;
`;

const SignupClick = styled(Link)`
  color: #5a92ff;
  text-decoration: underline;
`;

const MainBox = styled.div`
  width: 1000px;
  height: 700px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default SignupUser;
