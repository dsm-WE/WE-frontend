import { WE_Logo, login } from 'assets';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    console.log('login');
    navigate('/');
  };

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
                <LoginFieldInput
                  placeholder="비밀번호를 입력해 주세요."
                  type="password"
                />
              </LoginFieldWrap>
              <LoginBtn onClick={onLogin}>로그인</LoginBtn>
            </LoginBoxMain>
            <LoginToSignup>
              처음이신가요? <SignupClick to="/signup">회원가입하기</SignupClick>
            </LoginToSignup>
          </LoginBoxContainer>
        </LoginBox>
        <ImgBox/>
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
  margin: 0 0 20px 0;
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
  /* height: 500px; */
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
  /* height: 300px; */
  height: fit-content;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

  border-bottom: 1px #e0e0e0 solid;
`;

const LoginBoxTitle = styled.div`
  font-size: 30px;
  height: 50px;
  margin: 0 0 60px 0;
  text-align: center;
`;

const LoginBtn = styled.button`
  margin: 30px auto;
  width: 308px;
  height: 44px;
  background-color: #242e63;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const LoginToSignup = styled.div`
  font-size: 16px;
  font-weight: normal;
  margin: 20px auto;
`;

const SignupClick = styled(Link)`
  color: #5a92ff;
  text-decoration: underline;
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
