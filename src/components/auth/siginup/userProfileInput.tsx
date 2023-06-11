import styled from 'styled-components';

const UserProfileDataInput = () => {
  return (
    <>
      <ProfileImg htmlFor="signupUserProfileInput"></ProfileImg>
      <input id="signupUserProfileInput" style={{ display: 'none' }} />
      <SignupFieldWrap>
        <SignupFieldInput placeholder="닉네임을 입력해 주세요." />
      </SignupFieldWrap>
      <SignupFieldWrap>
        <SignupFieldInput placeholder="자기소개를 입력해 주세요." />
      </SignupFieldWrap>
    </>
  );
};

const ProfileImg = styled.label`
  width: 150px;
  height: 150px;
  display: flex;
  background-color: #bbb;
  margin-top: -50px;

  border-radius: 75px;
`;

export default UserProfileDataInput;

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
