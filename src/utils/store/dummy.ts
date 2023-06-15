import { dummyImg } from 'assets';
import { signUpRequestDataModel } from 'models/signUp';
import { RecoilState, atom } from 'recoil';

export const porfolRecoil = atom({
  key: 'porfol' + Date.now(),
  default: [
    {
      id: 0,
      title: '내포폴이야0',
      content:
        '개발자 포트폴리오 공유합니다~ 참고하셔서 다들 취업 뽀개봅시다~ 좋아좋아요~',
      writer: 'testUser',
      file: 'https://test-we-test.s3.ap-northeast-2.amazonaws.com/test-we-test/artns25@dsm.hs.kr/My portfolio4/Group 97.pdf',
      img: dummyImg,
      hashtag: ['취뽀기원', '취뽀', '취업'],
      createdDate: '2023.6.15',
      conmments: [
        {
          user: {
            profiile: 'https://avatars.githubusercontent.com/u/81274450?v=4',
            name: '오주혜',
          },
          content:
            '정말 휼룡한 포트폴리오이네요! 참고하면 취업에 많은 도움이 될거 같아요!! 정말 휼룡한 포트폴리오이네요! 참고하면 취업에 많은 도움이 될거 같아요!!',
        },
        {
          user: {
            profiile: 'https://avatars.githubusercontent.com/u/81274450?v=4',
            name: '오주혜',
          },
          content:
            '정말 휼룡한 포트폴리오이네요! 참고하면 취업에 많은 도움이 될거 같아요!! 정말 휼룡한 포트폴리오이네요! 참고하면 취업에 많은 도움이 될거 같아요!!',
        },
        {
          user: {
            profiile: 'https://avatars.githubusercontent.com/u/81274450?v=4',
            name: '오주혜',
          },
          content:
            '정말 휼룡한 포트폴리오이네요! 참고하면 취업에 많은 도움이 될거 같아요!! 정말 휼룡한 포트폴리오이네요! 참고하면 취업에 많은 도움이 될거 같아요!!',
        },
        {
          user: {
            profiile: 'https://avatars.githubusercontent.com/u/81274450?v=4',
            name: '오주혜',
          },
          content:
            '정말 휼룡한 포트폴리오이네요! 참고하면 취업에 많은 도움이 될거 같아요!! 정말 휼룡한 포트폴리오이네요! 참고하면 취업에 많은 도움이 될거 같아요!!',
        },
      ],
    },
    {
      id: 1,
      title: '내포폴이야1',
      content:
        '개발자 포트폴리오 공유합니다~ 참고하셔서 다들 취업 뽀개봅시다~ 좋아좋아요~',
      writer: 'testUser',
      file: 'https://test-we-test.s3.ap-northeast-2.amazonaws.com/test-we-test/artns25@dsm.hs.kr/My portfolio4/Group 97.pdf',
      img: dummyImg,
      hashtag: ['취뽀기원', '취뽀', '취업'],
      createdDate: '2023.6.15',
      conmments: [
        {
          user: {
            profiile: 'https://avatars.githubusercontent.com/u/81274450?v=4',
            name: '오주혜',
          },
          content:
            '정말 휼룡한 포트폴리오이네요! 참고하면 취업에 많은 도움이 될거 같아요!! 정말 휼룡한 포트폴리오이네요! 참고하면 취업에 많은 도움이 될거 같아요!!',
        },
      ],
    },
    {
      id: 2,
      title: '내포폴이야2',
      content:
        '개발자 포트폴리오 공유합니다~ 참고하셔서 다들 취업 뽀개봅시다~ 좋아좋아요~',
      writer: 'testUser',
      file: 'https://test-we-test.s3.ap-northeast-2.amazonaws.com/test-we-test/artns25@dsm.hs.kr/My portfolio4/Group 97.pdf',
      img: dummyImg,
      hashtag: ['취뽀기원', '취뽀', '취업'],
      createdDate: '2023.6.15',
      conmments: [
        {
          user: {
            profiile: 'https://avatars.githubusercontent.com/u/81274450?v=4',
            name: '오주혜',
          },
          content:
            '정말 휼룡한 포트폴리오이네요! 참고하면 취업에 많은 도움이 될거 같아요!! 정말 휼룡한 포트폴리오이네요! 참고하면 취업에 많은 도움이 될거 같아요!!',
        },
      ],
    },
    {
      id: 3,
      title: '내포폴이야3',
      content:
        '개발자 포트폴리오 공유합니다~ 참고하셔서 다들 취업 뽀개봅시다~ 좋아좋아요~',
      writer: 'testUser',
      file: 'https://test-we-test.s3.ap-northeast-2.amazonaws.com/test-we-test/artns25@dsm.hs.kr/My portfolio4/Group 97.pdf',
      img: dummyImg,
      hashtag: ['취뽀기원', '취뽀', '취업'],
      createdDate: '2023.6.15',
      conmments: [
        {
          user: {
            profiile: 'https://avatars.githubusercontent.com/u/81274450?v=4',
            name: '오주혜',
          },
          content:
            '정말 휼룡한 포트폴리오이네요! 참고하면 취업에 많은 도움이 될거 같아요!! 정말 휼룡한 포트폴리오이네요! 참고하면 취업에 많은 도움이 될거 같아요!!',
        },
      ],
    },
    {
      id: 4,
      title: '내포폴이야4',
      content:
        '개발자 포트폴리오 공유합니다~ 참고하셔서 다들 취업 뽀개봅시다~ 좋아좋아요~',
      writer: 'testUser',
      file: 'https://test-we-test.s3.ap-northeast-2.amazonaws.com/test-we-test/artns25@dsm.hs.kr/My portfolio4/Group 97.pdf',
      img: dummyImg,
      hashtag: ['취뽀기원', '취뽀', '취업'],
      createdDate: '2023.6.15',
      conmments: [
        {
          user: {
            profiile: 'https://avatars.githubusercontent.com/u/81274450?v=4',
            name: '오주혜',
          },
          content:
            '정말 휼룡한 포트폴리오이네요! 참고하면 취업에 많은 도움이 될거 같아요!! 정말 휼룡한 포트폴리오이네요! 참고하면 취업에 많은 도움이 될거 같아요!!',
        },
      ],
    },
    {
      id: 5,
      title: '내포폴이야5',
      content:
        '개발자 포트폴리오 공유합니다~ 참고하셔서 다들 취업 뽀개봅시다~ 좋아좋아요~',
      writer: 'testUser',
      file: 'https://test-we-test.s3.ap-northeast-2.amazonaws.com/test-we-test/artns25@dsm.hs.kr/My portfolio4/Group 97.pdf',
      img: dummyImg,
      hashtag: ['취뽀기원', '취뽀', '취업'],
      createdDate: '2023.6.15',
      conmments: [
        {
          user: {
            profiile: 'https://avatars.githubusercontent.com/u/81274450?v=4',
            name: '오주혜',
          },
          content:
            '정말 휼룡한 포트폴리오이네요! 참고하면 취업에 많은 도움이 될거 같아요!! 정말 휼룡한 포트폴리오이네요! 참고하면 취업에 많은 도움이 될거 같아요!!',
        },
      ],
    },
    {
      id: 6,
      title: '내포폴이야6',
      content:
        '개발자 포트폴리오 공유합니다~ 참고하셔서 다들 취업 뽀개봅시다~ 좋아좋아요~',
      writer: 'testUser',
      file: 'https://test-we-test.s3.ap-northeast-2.amazonaws.com/test-we-test/artns25@dsm.hs.kr/My portfolio4/Group 97.pdf',
      img: dummyImg,
      hashtag: ['취뽀기원', '취뽀', '취업'],
      createdDate: '2023.6.15',
      conmments: [
        {
          user: {
            profiile: 'https://avatars.githubusercontent.com/u/81274450?v=4',
            name: '오주혜',
          },
          content:
            '정말 휼룡한 포트폴리오이네요! 참고하면 취업에 많은 도움이 될거 같아요!! 정말 휼룡한 포트폴리오이네요! 참고하면 취업에 많은 도움이 될거 같아요!!',
        },
      ],
    },
    {
      id: 7,
      title: '내포폴이야7',
      content:
        '개발자 포트폴리오 공유합니다~ 참고하셔서 다들 취업 뽀개봅시다~ 좋아좋아요~',
      writer: 'testUser',
      file: 'https://test-we-test.s3.ap-northeast-2.amazonaws.com/test-we-test/artns25@dsm.hs.kr/My portfolio4/Group 97.pdf',
      img: dummyImg,
      hashtag: ['취뽀기원', '취뽀', '취업'],
      createdDate: '2023.6.15',
      conmments: [
        {
          user: {
            profiile: 'https://avatars.githubusercontent.com/u/81274450?v=4',
            name: '오주혜',
          },
          content:
            '정말 휼룡한 포트폴리오이네요! 참고하면 취업에 많은 도움이 될거 같아요!! 정말 휼룡한 포트폴리오이네요! 참고하면 취업에 많은 도움이 될거 같아요!!',
        },
      ],
    },
  ],
});
