import Banner from 'components/banner';
import Footer from 'components/common/footer';
import Portfolio from 'components/portfolio';
import { portfolioListModel } from 'models/portfolioList';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPortfolioList } from 'utils/api/portfolioList';

const Main = () => {
  const [portfolioList, setPortfolioList] = useState<portfolioListModel>({
    content: [],
    pageable: {
      sort: {
        empty: false,
        sorted: false,
        unsorted: false,
      },
      offset: 0,
      pageNumber: 0,
      pageSize: 0,
      paged: false,
      unpaged: false,
    },
    totalPages: 0,
    totalElements: 0,
    last: false,
    size: 0,
    number: 0,
    sort: {
      empty: false,
      sorted: false,
      unsorted: false,
    },
    numberOfElements: 0,
    first: false,
    empty: false,
  });

  const getData = async () => {
    const res = await getPortfolioList();
    setPortfolioList(res);

    console.log(res.content);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Banner />
      <ListCheckSection>
        <ListCheckText>
          <ListCheckMainText>포트폴리오를 확인해 보세요🌿</ListCheckMainText>
          <ListCheckSubText>
            취뽀기원에 올라온 포트폴리오 목록을 확인해 보세요.
          </ListCheckSubText>
        </ListCheckText>
        <PortfolioGridBox>
          {portfolioList.content.map((content, i) => (
            <Portfolio
              key={i}
              content={content}
              portfolioId={content.photoList.id - 2}
            />
          ))}
        </PortfolioGridBox>
      </ListCheckSection>
      <Footer />
    </>
  );
};

const PortfolioGridBox = styled.div`
  display: grid;
  width: 60vmax;
  gap: 20px 30px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 50px;
  margin-bottom: 100px;
`;

const ListCheckSection = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const ListCheckMainText = styled.p`
  font-size: 28px;
  font-weight: bold;
`;

const ListCheckSubText = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: #808080;
`;

const ListCheckText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 70px;
`;

export default Main;
