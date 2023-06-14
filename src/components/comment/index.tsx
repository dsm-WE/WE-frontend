import styled from 'styled-components';

const Comment = () => {
  return (
    <CommentContainer>
      <Profile />
      <CommentContentWrap>
        <Name>오주혜</Name>
        <Content>
          정말 휼룡한 포트폴리오이네요! 참고하면 취업에 많은 도움이 될거
          같아요!! 정말 휼룡한 포트폴리오이네요! 참고하면 취업에 많은 도움이
          될거 같아요!!
        </Content>
      </CommentContentWrap>
    </CommentContainer>
  );
};

const Content = styled.p`
  width: 100%;
  font-size: 12px;
`;

const Name = styled.p`
  font-size: 12px;
  font-weight: 500;
`;

const CommentContentWrap = styled.div`
  flex: 1 1 0;
`;

const Profile = styled.div`
  width: 40px;
  aspect-ratio: 1;
  border-radius: 20px;
  background-image: url('https://avatars.githubusercontent.com/u/81274450?v=4');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

export default Comment;
