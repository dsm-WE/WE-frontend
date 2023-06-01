import { WE_Logo, login } from 'assets';
import styled from 'styled-components';

const Login = () => {
  return (
    <LoginContainer>
      <MainBox>
        <LoginBox>
          <LoginBoxContainer>
            <LoginBoxLogo />
            <LoginBoxMain>
              <LoginBoxTitle>Login</LoginBoxTitle>
              <LoginFieldWrap>
                <LoginField>ID</LoginField>
                <LoginFieldInput placeholder="아이디를 입력해 주세요." />
              </LoginFieldWrap>
              <LoginFieldWrap>
                <LoginField>PASSWORD</LoginField>
                <LoginFieldInput placeholder="비밀번호를 입력해 주세요." />
              </LoginFieldWrap>
            </LoginBoxMain>
          </LoginBoxContainer>
        </LoginBox>
        <ImgBox></ImgBox>
      </MainBox>
    </LoginContainer>
  );
};

const LoginFieldInput = styled.input`
  width: 100%;
  height: 40px;
  border: 0px;
  outline: none;
  font-size: 18px;
`;

const LoginFieldWrap = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  height: 70px;
  width: 308px;
  border-bottom: 0.5px solid #e0e0e0;
`;

const LoginField = styled.p`
  color: #242e63;
`;

const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to bottom, #242e63, #858ebf);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainBox = styled.div`
  width: 1000px;
  height: 700px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginBox = styled.div`
  width: 500px;
  height: 700px;
  position: absolute;
  left: 0;
  background-color: #ffffff;
  border-radius: 8px 0 0 8px;
`;

const LoginBoxContainer = styled.div`
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-weight: bold;
`;

const LoginBoxLogo = styled.div`
  margin: 50px;
  width: 67px;
  height: 43px;
  background: center/contain url(${WE_Logo}) no-repeat;
`;

const LoginBoxMain = styled.div`
  height: 300px;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
`;

const LoginBoxTitle = styled.div`
  font-size: 30px;
  height: 50px;
  margin: 0 0 60px 0;
  text-align: center;
`;

const LoginPassword = styled.div`
  color: #242e63;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  height: 70px;
  width: 308px;
  border-bottom: 0.5px solid #e0e0e0;
`;

const ImgBox = styled.div`
  width: 500px;
  height: 700px;
  position: absolute;
  right: 0;
  background-image: url(${login});
  border-radius: 0 8px 8px 0;
`;
export default Login;
