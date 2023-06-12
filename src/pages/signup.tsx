import { WE_Logo, signup0 } from 'assets';
import EmailDataInput from 'components/auth/siginup/emailDataInput';
import PasswordDataInput from 'components/auth/siginup/passwordDataInput';
import UserProfileDataInput from 'components/auth/siginup/userProfileInput';
import { signUpRequestDataModel } from 'models/signUp';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { codeCheck } from 'utils/api/auth/signUp';

const Signup = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQuery = Number(searchParams.get('s'));
  const [step, setStep] = useState<number>(searchQuery || 1);
  const [imgFile, setImgFile] = useState<File | null>(null);

  const [signUpReqData, setSignUpReqData] = useState<signUpRequestDataModel>({
    name: '',
    email: '',
    password: '',
    code: '',
    introduction: '',
  });
  const [checkPassword, setCheckPassword] = useState<string>('');

  const updateSignUpReqData = (name: string, value: string) => {
    setSignUpReqData((pre) => ({ ...pre, [name]: value }));
  };

  const updateCheckPassword = (value: string) => {
    setCheckPassword(value);
  };

  const updateProfileFile = (file: File) => {
    setImgFile(file);
  };

  useEffect(() => {
    console.log(signUpReqData);
  }, [signUpReqData]);

  const goNextStep = async () => {
    const { name, email, password, code, introduction } = signUpReqData;

    navigate(`/signup?s=${step + 1}`);
  };

  const InputWidgetSwitch = () => {
    switch (step) {
      case 1:
        return (
          <EmailDataInput
            signUpReqData={signUpReqData}
            updateSignUpReqData={updateSignUpReqData}
          />
        );
      case 2:
        return (
          <PasswordDataInput
            signUpReqData={signUpReqData}
            updateSignUpReqData={updateSignUpReqData}
            checkPassword={checkPassword}
            updateCheckPassword={updateCheckPassword}
          />
        );
      case 3:
        return (
          <UserProfileDataInput
            signUpReqData={signUpReqData}
            updateSignUpReqData={updateSignUpReqData}
            updateProfileFile={updateProfileFile}
          />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    setStep(searchQuery || 1);
  }, [searchQuery]);

  return (
    <SignupContainer>
      <MainBox>
        <ImgBox />
        <SignupBox>
          <SignupBoxContainer>
            <SignupBoxLogo />
            <SignupBoxMain>
              <SignupBoxTitle>Signup</SignupBoxTitle>
              {InputWidgetSwitch()}
              <SignupBtn onClick={goNextStep}>
                {step < 3 ? '다음' : '회원가입'}
              </SignupBtn>
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

const ImgBox = styled.div`
  width: 500px;
  height: 700px;
  position: absolute;
  left: 0;
  background-image: url(${signup0});
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
  position: absolute;
  right: 0;
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px #e0e0e0 solid;
`;

const SignupBoxTitle = styled.div`
  font-size: 30px;
  height: 50px;
  margin: 0 0 60px 0;
  text-align: center;
`;

const SignupBtn = styled.button`
  margin: 30px auto;
  width: 308px;
  height: 44px;
  background-color: #242e63;
  color: #ffffff;
  font-size: 20px;
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
export default Signup;
