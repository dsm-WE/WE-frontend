import styled from 'styled-components';

const Login = () => {
  return (
    <>
      <MainBox></MainBox>
    </>
  );
};

const MainBox = styled.div`
  width: 1000px;
  height: 700px;
`;

const LoginBox = styled.div`
  width: 500px;
  height: 700px;
  float: left;
`;

const ImgBox = styled.div`
  width: 500px;
  height: 700px;
  float: right;
`;
export default Login;
