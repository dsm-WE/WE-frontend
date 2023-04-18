import { cancelIcon } from 'assets';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import styled from 'styled-components';
import { WritePostDataType } from 'utils/interface/writePost';

const WritePortfolio = () => {
  const [data, setData] = useState<WritePostDataType>({
    title: '',
    content: '',
    hashtag: [],
  });
  const [hashInput, setHashInput] = useState<string>('');

  const contentInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setData((pre) => ({ ...pre, [name]: value }));
  };

  const changeHashInput = (e: ChangeEvent<HTMLInputElement>) => {
    setHashInput(e.target.value);
  };

  const enterEvent = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && hashInput) {
      setData((pre) => ({ ...pre, hashtag: [...pre.hashtag, hashInput] }));
      setHashInput('');
    }
  };

  const deleteHashtag = (index: number) => {
    const tempHash = [...data.hashtag];
    tempHash.splice(index, 1);

    setData((pre) => ({ ...pre, hashtag: tempHash }));
  };

  return (
    <WritePost>
      <FieldSet>
        <Subtitle>포트폴리오 제목</Subtitle>
        <Input
          placeholder="제목을 입력해 주세요."
          value={data.title}
          name="title"
          onChange={contentInput}
        />
      </FieldSet>
      <FieldSet>
        <Subtitle>포트폴리오 설명</Subtitle>
        <ContentInput
          placeholder="포트폴리오에 대해 설명해 주세요."
          value={data.content}
          name="content"
          onChange={contentInput}
        />
      </FieldSet>
      <FieldSet>
        <Subtitle>프로젝트를 상징하는 해시태그를 입력해 주세요.</Subtitle>
        <Input
          placeholder="추가할 태그를 입력해 주세요."
          value={hashInput}
          onChange={changeHashInput}
          onKeyDown={enterEvent}
        />
        <Hashtags>
          {data.hashtag.map((hashtag, i) => (
            <Hashtag key={i}>
              <p>{hashtag}</p>
              <div onClick={() => deleteHashtag(i)} />
            </Hashtag>
          ))}
        </Hashtags>
      </FieldSet>
    </WritePost>
  );
};

const Hashtag = styled.div`
  width: fit-content;
  height: 36px;
  padding: 0 10px;
  border-radius: 18px;

  display: flex;
  align-items: center;
  gap: 8px;

  background-color: white;
  border: 1px solid #808080;

  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);

  & > p {
    color: #808080;
    font-size: 16px;
    font-weight: bold;
  }

  & > div {
    width: 12px;
    aspect-ratio: 1;
    background-image: url(${cancelIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    cursor: pointer;
  }
`;
const Hashtags = styled.div`
  width: 100%;
  display: flex;
  gap: 12px 24px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const FieldSet = styled.div`
  margin-top: 30px;
  width: 880px;
  height: fit-content;
`;

const ContentInput = styled.textarea`
  width: 100%;
  height: 90px;
  padding-left: 14px;
  padding-top: 14px;
  margin-top: 10px;
  border: 1px solid #d4d4d4;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  background-color: white;

  font-size: 20px;
  outline: none;
  resize: none;
`;

const Input = styled.input`
  width: 100%;
  height: 60px;
  border: 1px solid #d4d4d4;
  border-radius: 8px;
  background-color: white;
  margin-top: 10px;

  font-size: 20px;
  padding-left: 14px;
  outline: none;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
`;

const Subtitle = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const WritePost = styled.main`
  width: 100%;
  height: fit-content;
  padding-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default WritePortfolio;
