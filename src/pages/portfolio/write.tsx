import { addFileIcon, cancelIcon, fileIcon } from 'assets';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { uploadPortfolio } from 'utils/api/uploadPortfolio/ndex';
import { setToken } from 'utils/functions/tokenManager';
import { WritePostDataType } from 'utils/interface/writePost';

const WritePortfolio = () => {
  const [data, setData] = useState<WritePostDataType>({
    title: '',
    content: '',
  });
  const [hashInput, setHashInput] = useState<string>('');
  const [portfolioFile, setPortfolioFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const fileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files as FileList;
    const theFile = fileList[0];

    console.log(theFile.name);
    setPortfolioFile(theFile);
  };

  const fileDelete = () => {
    setPortfolioFile(null);
  };

  const contentInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setData((pre) => ({ ...pre, [name]: value }));
  };

  const changeHashInput = (e: ChangeEvent<HTMLInputElement>) => {
    setHashInput(e.target.value);
  };

  // const enterEvent = (e: KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter' && hashInput) {
  //     setData((pre) => ({ ...pre, hashtag: [...pre.hashtag, hashInput] }));
  //     setHashInput('');
  //   }
  // };

  // const deleteHashtag = (index: number) => {
  //   const tempHash = [...data.hashtag];
  //   tempHash.splice(index, 1);

  //   setData((pre) => ({ ...pre, hashtag: tempHash }));
  // };

  const submit = async () => {
    try {
      const formData = new FormData();
      formData.append(
        'request',
        new Blob([JSON.stringify(data)], { type: 'application/json' }),
      );
      formData.append('file', portfolioFile as File);

      uploadPortfolio(formData);
      navigate('/');
    } catch (error) {}
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
      {/* <FieldSet>
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
              <Delete onClick={() => deleteHashtag(i)} />
            </Hashtag>
          ))}
        </Hashtags>
      </FieldSet> */}
      <FieldSet>
        <Subtitle>포트폴리오 파일 첨부</Subtitle>
        <Announcement>포트폴리오 파일을 첨부해 주세요.</Announcement>
        {portfolioFile ? (
          <FileContainer>
            <FileIcon />
            <FileName>{portfolioFile.name}</FileName>
            <Delete onClick={fileDelete} />
          </FileContainer>
        ) : (
          <>
            <input
              type="file"
              id="portfolioInput"
              style={{ display: 'none' }}
              onChange={fileChange}
            />
            <FileInput htmlFor="portfolioInput">
              <AddFileBtn />
              <LabelText>포트폴리오 추가</LabelText>
            </FileInput>
          </>
        )}
      </FieldSet>

      <SubmitBtn onClick={submit}>포트폴리오 공유하기</SubmitBtn>
    </WritePost>
  );
};

const SubmitBtn = styled.button`
  width: 310px;
  height: 44px;

  margin-top: 40px;

  background: #242e63;
  border: none;
  border-radius: 5px;

  color: #ffffff;
  font-size: 16px;

  cursor: pointer;
`;

const Delete = styled.div`
  width: 12px;
  aspect-ratio: 1;
  background-image: url(${cancelIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  cursor: pointer;
`;

const FileName = styled.p`
  flex: 1 1 0;

  overflow: hidden;
  text-overflow: ellipsis;
`;

const FileIcon = styled.div`
  width: 16px;
  height: 20px;

  background-image: url(${fileIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const FileContainer = styled.div`
  width: 510px;
  height: 40px;

  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 0 10px;

  display: flex;
  align-items: center;
  gap: 10px;
`;

const LabelText = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const AddFileBtn = styled.div`
  width: 20px;
  height: 20px;

  background-image: url(${addFileIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const FileInput = styled.label`
  width: 160px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border: 1px solid #e0e0e0;
  border-radius: 5px;

  cursor: pointer;
`;

const Announcement = styled.p`
  font-size: 12px;
  color: #d0d0d0;
  margin-bottom: 18px;
`;

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
