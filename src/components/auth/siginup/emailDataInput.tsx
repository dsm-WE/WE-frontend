import styled from 'styled-components';

const EmailDataInput = () => {
  return (
    <>
      <SignupFieldWrap>
        <SignupFieldInput placeholder="이메일을 입력해 주세요." />
      </SignupFieldWrap>
      <SignupFieldWrap>
        <SignupFieldInput placeholder="인증 코드를 입력해 주세요." />
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
  /* align-items: center; */
  /* height: 70px; */
  width: 308px;
  border-bottom: 0.5px solid #e0e0e0;
`;
