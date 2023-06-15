import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';
import { WE_Logo, searchIcon } from 'assets';
import { getUserData } from 'utils/api/userData';

const Header = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [profile, setProfile] = useState<string>('');

  const checkLogin = async () => {
    try {
      const { profile } = await getUserData();
      setProfile(profile);
      setIsLogin(true);
    } catch (error) {
      setIsLogin(false);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const UserProfile = () => {
    if (isLogin) {
      return (
        <>
          <Link to={'/'}>
            <NavItem>포트폴리오 소식</NavItem>
          </Link>
          <Link to={'/myPage'}>
            <NavItem>마이페이지</NavItem>
          </Link>
          <Link to={'/myPage'}>
            <Profile profile={profile} />
          </Link>
        </>
      );
    }

    return (
      <>
        <Link to={'/'}>
          <NavItem>포트폴리오 소식</NavItem>
        </Link>
        <Link to={'/login'}>
          <NavItem>로그인</NavItem>
        </Link>
        <Link to={'/signup'}>
          <NavItem>회원가입</NavItem>
        </Link>
      </>
    );
  };

  return (
    <>
      <HeaderContainer>
        <BoxSection>
          <Link to="/">
            <Logo />
          </Link>
          {/* <SearchInputWrap>
            <SearchInput placeholder="포트폴리오 제목을 입력해 주세요." />
            <SearchIcon />
          </SearchInputWrap> */}
        </BoxSection>
        <BoxSection>
          <Nav>
            <UserProfile />
          </Nav>
        </BoxSection>
      </HeaderContainer>
      <SizedBox />
      <Outlet />
    </>
  );
};

export default Header;

const Profile = styled.div`
  width: 38px;
  aspect-ratio: 1;

  border-radius: 19px;
  background-image: url(${({ profile }: { profile: string }) => profile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  cursor: pointer;
`;

const NavItem = styled.p`
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`;

const Nav = styled.nav`
  width: fit-content;
  height: fit-content;

  align-items: center;

  display: flex;
  gap: 40px;
`;

const SearchIcon = styled.div`
  width: 24px;
  aspect-ratio: 1;

  position: absolute;
  left: 10px;
  top: 50%;

  transform: translateY(-50%);

  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const SearchInput = styled.input`
  width: 220px;
  height: 100%;
  padding: 0;

  border: none;
  border-radius: 0 19px 19px 0;

  outline: none;

  font-size: 12px;
`;

const SearchInputWrap = styled.div`
  width: 260px;
  height: 38px;

  border: 1px solid #d3d3d3;
  border-radius: 19px;

  position: relative;

  display: flex;
  justify-content: flex-end;
`;

const Logo = styled.div`
  width: 44px;
  height: 28px;

  background-image: url(${WE_Logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const BoxSection = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  gap: 40px;
  align-items: center;
`;

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  padding: 0 200px;

  background-color: white;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;

  z-index: 10;
`;

const SizedBox = styled.div`
  height: 70px;
`;
