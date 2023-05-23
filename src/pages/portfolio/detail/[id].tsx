import { sendCommentIcon } from 'assets';
import Comment from 'components/comment';
import PortFolioViewer from 'components/portfolioViewer';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const PortfolioDetail = () => {
  const { id } = useParams();

  return (
    <DetailPage>
      <PortFolioViewer />
      <PortfolioInfoContainer>
        <PortfolioInfo>
          <InfoWrap>
            <Title>취뽀기원</Title>
            <Hashtags>
              {['취뽀기원', '취뽀', '취업'].map((tag, i) => (
                <Hashtag key={i}>#{tag}</Hashtag>
              ))}
            </Hashtags>
          </InfoWrap>
          <InfoWrap>
            <Writer>오주혜</Writer>
            <CretedDate>2023.04.06</CretedDate>
          </InfoWrap>
          <Content>
            취업을 희망하는 학생들 간에 스스로 포트폴리오를 공유하여 취준생들의
            취업 준비에 도움을 제공하는 서비스입니다. 취업을 희망하는 학생들
            간에 스스로 포트폴리오를 공유하여 취준생들의 취업 준비에 도움을
            제공하는 서비스입니다. 취업을 희망하는 학생들 간에 스스로
            포트폴리오를 공유하여 취준생들의 취업 준비에 도움을 제공하는
            서비스입니다.
          </Content>
        </PortfolioInfo>
        <CommentSection>
          <CommentInputWrap>
            <CommentInput />
            <SendBtn />
          </CommentInputWrap>
          <CommentWrap>
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <Comment key={i} />
              ))}
          </CommentWrap>
        </CommentSection>
      </PortfolioInfoContainer>
    </DetailPage>
  );
};

const CommentWrap = styled.div`
  width: 100%;
  flex: 1 1 0;
  margin-top: 30px;

  display: flex;
  flex-direction: column;

  gap: 16px;

  overflow-y: auto;
`;

const SendBtn = styled.div`
  width: 24px;
  aspect-ratio: 1;

  background-image: url(${sendCommentIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);

  cursor: pointer;
`;

const CommentInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: #d3d3d3 solid 1px;
  background-color: white;

  font-size: 12px;
  padding-left: 16px;

  outline: none;
`;

const CommentInputWrap = styled.div`
  width: 100%;
  height: 40px;

  position: relative;
`;

const Content = styled.div`
  width: 100%;
  height: 120px;
  font-size: 14px;
  margin-top: 8px;
`;

const CommentSection = styled.section`
  margin-top: 10px;
  width: 100%;
  height: 100px;
  flex: 1 1 0;

  display: flex;
  flex-direction: column;
`;

const Writer = styled.p`
  font-size: 14px;
  color: #808080;
`;

const CretedDate = styled(Writer)`
  font-size: 12px;
`;

const Hashtag = styled.div`
  padding: 4px 12px;
  background-color: #808080;
  border-radius: 15px;

  font-weight: 500;
  font-size: 14px;
  color: white;
`;

const Hashtags = styled.div`
  display: flex;
  gap: 6px;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
`;

const InfoWrap = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  align-items: center;
  justify-content: space-between;
`;

const PortfolioInfo = styled.section`
  width: 100%;
  height: fit-content;
`;

const PortfolioInfoContainer = styled.article`
  height: 100%;
  aspect-ratio: 3/4;

  display: flex;
  flex-direction: column;
`;

const DetailPage = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  padding: 60px 0 42px 0;

  display: flex;
  justify-content: center;
  gap: 44px;
`;

export default PortfolioDetail;
