import { sendCommentIcon } from 'assets';
import Comment from 'components/comment';
import PortFolioViewer from 'components/portfolioViewer';
import { detailPortfolioType } from 'models/portfolioList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { portfolioDetail } from 'utils/api/detailPortfolio';

const PortfolioDetail = () => {
  const { id } = useParams();
  const [isLoding, setIsLoding] = useState(true);
  const [detailPortfolioData, setDetailPortfolioData] =
    useState<detailPortfolioType>({
      title: '',
      photoList: {
        fileUrl: '',
        fileName: '',
        createdAt: '',
        updatedAt: '',
        id: 0,
      },
      uploader: {
        name: '',
        email: '',
        introduction: '',
        profile: '',
      },
      createdAt: '',
      updatedAt: '',
      commentList: [],
      likeCount: 0,
    });

  const getData = async () => {
    const res = await portfolioDetail(Number(id));

    setDetailPortfolioData(res);
    setIsLoding(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoding) {
    return <></>;
  }

  return (
    <DetailPage>
      <PortFolioViewer imgs={[detailPortfolioData.photoList]} />
      <PortfolioInfoContainer>
        <PortfolioInfo>
          <InfoWrap>
            <Title>{detailPortfolioData.title}</Title>
            <Hashtags>
              {['취뽀기원', '취뽀', '취업'].map((tag, i) => (
                <Hashtag key={i}>#{tag}</Hashtag>
              ))}
            </Hashtags>
          </InfoWrap>
          <InfoWrap>
            <Writer>{detailPortfolioData.uploader.name}</Writer>
            <CretedDate>{detailPortfolioData.createdAt}</CretedDate>
          </InfoWrap>
          <Content>
            {
              '개발자 포트폴리오 공유합니다~ 참고하셔서 다들 취업 뽀개봅시다~ 좋아좋아요~\n개발자 포트폴리오 공유합니다~ 참고하셔서 다들 취업 뽀개봅시다~ 좋아좋아요~\n개발자 포트폴리오 공유합니다~ 참고하셔서 다들 취업 뽀개봅시다~ 좋아좋아요~\n개발자 포트폴리오 공유합니다~ 참고하셔서 다들 취업 뽀개봅시다~ 좋아좋아요~\n개발자 포트폴리오 공유합니다~ 참고하셔서 다들 취업 뽀개봅시다~ 좋아좋아요~\n개발자 포트폴리오 공유합니다~ 참고하셔서 다들 취업 뽀개봅시다~ 좋아좋아요~\n'
            }
          </Content>
        </PortfolioInfo>
        <CommentSection>
          <CommentInputWrap>
            <CommentInput />
            <SendBtn />
          </CommentInputWrap>
          <CommentWrap>
            {Array.from({ length: 10 }).map((_, i) => (
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
