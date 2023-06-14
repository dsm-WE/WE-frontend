// import { likeIcon, unlikeIcon } from 'assets';
import { portfolioContentType } from 'models/portfolioList';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface props {
  content: portfolioContentType;
  portfolioId: number;
}

const Portfolio = ({ content, portfolioId }: props) => {
  // const [isLike, setIsLike] = useState<boolean>(false);

  // const updateIsLike = () => {
  //   setIsLike((pre) => !pre);
  // };

  return (
    <Link to={`/portfolio/detail/${portfolioId}`}>
      <PortfolioContainer img={content.photoList.fileUrl}>
        {/* <BackgroundImg src={content.photoList.fileUrl} /> */}

        <HoverBox>
          <Title>{content.title}</Title>
          {/* <SubTitle>
            {content.}
          </SubTitle>
          <Hashtags>
            <Hashtag>#취뽀기원</Hashtag>
            <Hashtag>#취뽀</Hashtag>
            <Hashtag>#취업</Hashtag>
            <Hashtag>#취업</Hashtag>
            <Hashtag>#취업</Hashtag>
            <Hashtag>#취업</Hashtag>
            <Hashtag>#취업</Hashtag>
            <Hashtag>#취업</Hashtag>
          </Hashtags> */}
          {/* <LikeBtn
            icon={isLike ? likeIcon : unlikeIcon}
            onClick={updateIsLike}
          /> */}
        </HoverBox>
      </PortfolioContainer>
    </Link>
  );
};

// const LikeBtn = styled.button`
//   width: 20px;
//   aspect-ratio: 1;
//   cursor: pointer;

//   background-image: url(${({ icon }: { icon: string }) => icon});

//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: contain;

//   border: none;
//   background-color: transparent;

//   position: absolute;
//   right: 15px;
//   bottom: 15px;
// `;

// const Hashtag = styled.div`
//   padding: 3px 10px;
//   border-radius: 15px;
//   background-color: white;
//   flex: 0 0 auto;
// `;

// const Hashtags = styled.div`
//   display: flex;
//   gap: 6px;
//   max-width: 100%;
//   flex-wrap: wrap;
// `;

const Title = styled.p`
  white-space: pre-wrap;
  font-size: 16px;
  color: white;
`;

// const SubTitle = styled(Title)`
//   font-size: 12px;
// `;

const HoverBox = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  border-radius: inherit;
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 20px;

  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const PortfolioContainer = styled.div`
  width: 100%;
  aspect-ratio: 3/4;
  border-radius: 10px;
  position: relative;

  background-color: white;

  overflow: hidden;

  box-shadow: 0px 3px 8px 3px rgba(0, 0, 0, 0.23);
  background-image: url(${({ img }: { img: string }) => `'${img}'`});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  &:not(:hover) > div {
    display: none;
  }
`;

export default Portfolio;
