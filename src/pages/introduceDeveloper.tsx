import { jinuProfile, juhyeProfile, ppuiProfile } from 'assets';
import styled from 'styled-components';

const IntroduceDeveloper = () => {
  const mainDeveloperData = [
    {
      name: '안진우',
      role: 'Back-end',
      content: 'are you got it?',
      profile: jinuProfile,
    },
    {
      name: '오주혜',
      role: 'Front-end&Design',
      content: '2학기엔 보지 말자...',
      profile: juhyeProfile,
    },
    {
      name: '배준수',
      role: 'Front-end&Design',
      content: '왜 저희만 3명이에요?',
      profile: ppuiProfile,
    },
  ];

  return (
    <IntroPage>
      <WeDeveloper>Team.WE Developer</WeDeveloper>
      <MainDevelopers>
        {mainDeveloperData.map((data) => (
          <DevCard key={data.name}>
            <Profile img={data.profile} />
            <Name>{data.name}</Name>
            <Role>{data.role}</Role>
            <Content>{data.content}</Content>
          </DevCard>
        ))}
      </MainDevelopers>
    </IntroPage>
  );
};

const WeDeveloper = styled.p`
  font-size: 40px;
  font-weight: bold;
  margin: 50px 0;
`;

const Content = styled.p`
  font-size: 18px;
  color: #808080;
  margin-top: 10px;
`;

const Role = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #242e63;
`;

const Name = styled.p`
  font-size: 32px;
  font-weight: bold;
  margin-top: 12px;
`;

const Profile = styled.div`
  width: 200px;
  height: 200px;
  background: white center/cover no-repeat
    url(${({ img }: { img: string }) => img});
  border: 1px solid black;
  border-radius: 100px;
`;

const DevCard = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainDevelopers = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;

const IntroPage = styled.main`
  width: 100%;
  height: calc(100vh - 70px);

  display: flex;
  flex-direction: column;
  padding: 0 200px 0 200px;
`;

export default IntroduceDeveloper;
