import { signUpRequestDataModel } from 'models/signUp';
import { ChangeEvent } from 'react';
import styled from 'styled-components';

interface props {
  signUpReqData: signUpRequestDataModel;
  updateSignUpReqData: (name: string, value: string) => void;
}

const EmailDataInput = ({ signUpReqData, updateSignUpReqData }: props) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    updateSignUpReqData(name, value);
  };

  return (
    <>
      <SignupFieldWrap>
        <SignupFieldInput
          onChange={onChange}
          name="email"
          value={signUpReqData.email}
          placeholder="이메일을 입력해 주세요."
        />
      </SignupFieldWrap>
      <SignupFieldWrap>
        <SignupFieldInput
          onChange={onChange}
          name="code"
          value={signUpReqData.code}
          placeholder="인증 코드를 입력해 주세요."
        />
      </SignupFieldWrap>
    </>
  );
};

export default EmailDataInput;

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
  width: 308px;
  border-bottom: 0.5px solid #e0e0e0;
`;
