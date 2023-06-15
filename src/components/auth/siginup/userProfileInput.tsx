import { cameraIcon } from 'assets';
import { signUpRequestDataModel } from 'models/signUp';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

interface props {
  signUpReqData: signUpRequestDataModel;
  updateSignUpReqData: (name: string, value: string) => void;
  updateProfileFile: (file: File) => void;
}

const UserProfileDataInput = ({
  signUpReqData,
  updateSignUpReqData,
  updateProfileFile,
}: props) => {
  const [imgView, setImgView] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    updateSignUpReqData(name, value);
  };

  const fileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files as FileList;
    const theFile = fileList[0];

    console.log(theFile.name.replace(/.+\.(.+)$/, '$1').toLowerCase());
    updateProfileFile(theFile);

    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      }: any = finishedEvent;

      setImgView(result);
    };
    await reader.readAsDataURL(theFile);
  };

  return (
    <>
      <ProfileImg htmlFor="signupUserProfileInput" imgView={imgView} />
      <input
        id="signupUserProfileInput"
        type="file"
        style={{ display: 'none' }}
        onChange={fileChange}
      />
      <SignupFieldWrap>
        <SignupFieldInput
          onChange={onChange}
          name="name"
          value={signUpReqData.name}
          placeholder="닉네임을 입력해 주세요."
        />
      </SignupFieldWrap>
      <SignupFieldWrap>
        <SignupFieldInput
          onChange={onChange}
          name="introduction"
          value={signUpReqData.introduction}
          placeholder="자기소개를 입력해 주세요."
        />
      </SignupFieldWrap>
    </>
  );
};

const ProfileImg = styled.label`
  width: 120px;
  height: 120px;
  display: flex;
  background: #bbb center/cover no-repeat
    url(${({ imgView }: { imgView: string }) => imgView});
  margin-top: -50px;
  position: relative;

  border-radius: 75px;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5) no-repeat center/50px url(${cameraIcon});
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }
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
