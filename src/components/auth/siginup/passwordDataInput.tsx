import { signUpRequestDataModel } from 'models/signUp';
import { ChangeEvent } from 'react';
import styled from 'styled-components';

interface props {
  signUpReqData: signUpRequestDataModel;
  updateSignUpReqData: (name: string, value: string) => void;
  checkPassword: string;
  updateCheckPassword: (value: string) => void;
}

const PasswordDataInput = ({
  signUpReqData,
  updateSignUpReqData,
  checkPassword,
  updateCheckPassword,
}: props) => {
  const pwChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    updateSignUpReqData('password', value);
  };

  const pwCheckChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    updateCheckPassword(value);
  };

  return (
    <>
      <SignupFieldWrap>
        <SignupFieldInput
          onChange={pwChange}
          value={signUpReqData.password}
          placeholder="비밀번호를 입력해 주세요."
          type="password"
        />
      </SignupFieldWrap>
      <SignupFieldWrap>
        <SignupFieldInput
          onChange={pwCheckChange}
          value={checkPassword}
          placeholder="비밀번호를 다시 입력해 주세요."
        />
      </SignupFieldWrap>
    </>
  );
};
export default PasswordDataInput;

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
