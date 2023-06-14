import { arrow } from 'assets';
import { photoListTpe } from 'models/portfolioList';
import { useRef, UIEvent, useState } from 'react';
import styled from 'styled-components';

interface props {
  imgs: photoListTpe[];
}

const PortfolioViewer = ({ imgs }: props) => {
  const PortfolioViewWrapRef = useRef<HTMLDivElement>(null);
  const scrollBoxRef = useRef<HTMLDivElement>(null);
  const [pageNumber, setPageNumber] = useState<number>(0);

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    const { scrollLeft, offsetWidth } = e.currentTarget;
    const pageIndex = Math.trunc(scrollLeft / offsetWidth);

    setPageNumber(pageIndex);
  };

  const moveScroll = (pageNumber: number) => {
    const current = scrollBoxRef.current;
    if (current === null) return null;

    current.scrollLeft = current.offsetWidth * pageNumber;
  };

  const movePrevImg = () => {
    if (pageNumber > 0) {
      moveScroll(pageNumber - 1);
      setPageNumber((pre) => pre - 1);
    }
  };

  const moveNextImg = () => {
    if (pageNumber < imgs.length - 1) {
      moveScroll(pageNumber + 1);
      setPageNumber((pre) => pre + 1);
    }
  };

  return (
    <PortfolioViewWrap ref={PortfolioViewWrapRef}>
      <PortfolioViewBox
        ref={scrollBoxRef}
        onScroll={onScroll}
        width={Math.floor(PortfolioViewWrapRef.current?.offsetWidth ?? 1)}
      >
        {imgs.map((img, i) => (
          <PortfolioImg key={i} img={img.fileUrl} />
        ))}
      </PortfolioViewBox>
      {pageNumber > 0 && <PrevImgBtn onClick={movePrevImg} />}
      {pageNumber < imgs.length - 1 && <NextImgBtn onClick={moveNextImg} />}
    </PortfolioViewWrap>
  );
};

const NextImgBtn = styled.button`
  width: 50px;
  aspect-ratio: 1;

  background: url(${arrow}) center/cover no-repeat;
  border: 0;

  position: absolute;
  top: 50%;
  right: 10px;

  transform: translateY(-50%);

  cursor: pointer;
`;

const PrevImgBtn = styled(NextImgBtn)`
  left: 10px;
  transform: translateY(-50%) rotate(180deg);
`;

const PortfolioImg = styled.div`
  width: 100%;
  height: 100%;
  background: white no-repeat center/contain
    url(${({ img }: { img: string }) => `'${img}'`});

  position: sticky;
  left: 0;
  flex-shrink: 0;
  scroll-snap-align: start;
`;

const PortfolioViewBox = styled.div`
  width: ${({ width }: { width: number }) => `'${width}'`};
  aspect-ratio: 3/4;
  width: 100%;
  box-shadow: 0px 5px 13px 4px rgba(0, 0, 0, 0.23);
  border-radius: 15px;

  position: relative;
  display: flex;

  overflow: auto;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const PortfolioViewWrap = styled.div`
  height: 100%;
  aspect-ratio: 3/4;

  position: relative;
`;

export default PortfolioViewer;
