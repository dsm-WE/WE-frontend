import styled from 'styled-components';
import { githubIcon, notionIcon } from 'assets';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <Introduction>WE: 우리를 위한 포트폴리오</Introduction>
        <Developers>
          <Role>
            <Field>Front-end</Field>
            <Developer>배준수</Developer>
            <Developer>오주혜</Developer>
          </Role>
          <Role>
            <Field>Back-end</Field>
            <Developer>안진우</Developer>
          </Role>
          <Role>
            <Field>Design</Field>
            <Developer>배준수</Developer>
            <Developer>오주혜</Developer>
          </Role>
        </Developers>
        <SocialMedias>
          <a href="https://www.notion.so/548a0c41481b4a7aa1efab16ee816c44?pvs=4">
            <SocialMedia img={notionIcon} />
          </a>
          <a href="https://github.com/dsm-WE">
            <SocialMedia img={githubIcon} />
          </a>
        </SocialMedias>
      </FooterSection>
    </FooterContainer>
  );
};

const SocialMedia = styled.div`
  width: 50px;
  aspect-ratio: 1;
  border-radius: 25px;

  background-color: white;
  background-image: url(${({ img }: { img: string }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 32px;

  cursor: pointer;
`;

const SocialMedias = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  gap: 14px;

  position: absolute;
  bottom: 30px;
  right: 0;
`;

const Developer = styled.p`
  font-size: 12px;
  font-weight: bold;

  color: white;
`;

const Field = styled(Developer)`
  font-size: 16px;
  margin-bottom: 3px;
`;

const Role = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Developers = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  gap: 30px;
`;

const Introduction = styled(Developer)`
  font-size: 20px;
  margin-bottom: 16px;
`;

const FooterSection = styled.div`
  width: 100%;
  height: 170px;

  display: flex;
  flex-direction: column;

  border-bottom: 1px solid white;

  position: relative;
`;

const FooterContainer = styled.footer`
  width: 100%;
  height: 300px;
  padding: 0 200px;
  background-color: #242e63;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;
