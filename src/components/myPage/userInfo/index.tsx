import { userDataModel } from 'models/userData';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getUserData } from 'utils/api/userData';

const UserInfoSection = () => {
  const [userData, setUserData] = useState<userDataModel>({
    name: '',
    email: '',
    introduction: '',
    profile: '',
  });

  const getData = async () => {
    const res = await getUserData();
    setUserData(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <UserInfoContainer>
      <UserInfoWrap>
        <ProfileImg img={userData.profile} />
        <TextWrap>
          <Name>{userData.name}</Name>
          <Introduction>{userData.introduction}</Introduction>
        </TextWrap>
      </UserInfoWrap>
      <Link to="/myPage/edit">
        <ProfileEdit>수정하기</ProfileEdit>
      </Link>
    </UserInfoContainer>
  );
};

const ProfileEdit = styled.button`
  width: 120px;
  height: 46px;

  background-color: white;

  border: 1px solid #e0e0e0;
  border-radius: 10px;

  font-weight: bold;
  font-size: 20px;

  cursor: pointer;
`;

const UserInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 160px;
  padding-bottom: 50px;

  border-bottom: solid 1px #c7c7c7;
`;

const Introduction = styled.p`
  font-size: 20px;
`;

const Name = styled.p`
  font-size: 40px;
`;

const TextWrap = styled.div`
  width: fit-content;
`;

const ProfileImg = styled.div`
  width: 130px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: center/cover no-repeat url(${({ img }: { img: string }) => img});
`;
const UserInfoWrap = styled.div`
  width: fit-content;

  display: flex;
  align-items: center;
  gap: 20px;
`;

export default UserInfoSection;
