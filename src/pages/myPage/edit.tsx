import { cameraIcon } from 'assets';
import styled from 'styled-components';

const UserEdit = () => {
  return (
    <EditPage>
      <EditSection>
        <FieldContainer>
          <ProfileWrap>
            <Profile />
            <HoverBox htmlFor="profileImgInput">
              <CameraImg />
            </HoverBox>
            <input
              type="file"
              style={{ display: 'none' }}
              id="profileImgInput"
            />
          </ProfileWrap>
          <EditFieldContainer>
            <EditFieldWrap>
              <EditFieldLabel>닉네임</EditFieldLabel>
              <NicknameEditInput />
            </EditFieldWrap>
            <EditFieldWrap>
              <IntroductionEditFieldLabel>소개</IntroductionEditFieldLabel>
              <IntroductionEditInput />
            </EditFieldWrap>
          </EditFieldContainer>
        </FieldContainer>
        <SubmitBtn>수정하기</SubmitBtn>
      </EditSection>
    </EditPage>
  );
};

const SubmitBtn = styled.button`
  width: 140px;
  height: 46px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background-color: white;
  margin-bottom: 46px;

  font-weight: bold;
  font-size: 20px;

  cursor: pointer;
`;

const FieldContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EditFieldWrap = styled.div`
  display: flex;
  gap: 11px;
  align-items: center;
`;

const EditFieldLabel = styled.p`
  width: 45px;
  text-align: end;
  font-size: 16px;
  font-weight: bold;
`;

const IntroductionEditFieldLabel = styled(EditFieldLabel)`
  margin-bottom: 48px;
`;

const NicknameEditInput = styled.input`
  width: 330px;
  height: 45px;

  background: #ffffff;
  border: 1px solid #979797;
  border-radius: 10px;
  outline: none;
  padding: 0px 14px;

  font-size: 18px;
`;

const IntroductionEditInput = styled.textarea`
  width: 330px;
  height: 96px;
  background: #ffffff;
  border: 1px solid #979797;
  border-radius: 10px;
  outline: none;
  padding: 14px;

  resize: none;
  font-size: 18px;
`;

const EditFieldContainer = styled.div`
  width: fit-content;
  height: fit-content;

  margin-top: 76px;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const CameraImg = styled.div`
  width: 50px;
  aspect-ratio: 1;
  background: no-repeat center/cover url(${cameraIcon});
`;

const HoverBox = styled.label`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Profile = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;

  background: no-repeat center/cover
    url('https://avatars.githubusercontent.com/u/81274450?v=4');
`;

const ProfileWrap = styled.div`
  width: 125px;
  aspect-ratio: 1;
  border-radius: 50%;

  margin-top: 75px;

  position: relative;

  &:not(:hover) > label {
    display: none;
  }
`;

const EditSection = styled.div`
  width: 640px;
  height: calc(100% - 100px);
  border: 1px solid #5b5b5b;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-between;
`;

const EditPage = styled.main`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export default UserEdit;
