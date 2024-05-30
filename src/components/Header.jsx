import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import {
  MSJLogo,
  LogoutLogin,
  Hold,
  Participation,
  MyPage as MyPageIcon,
  Question,
  ProblemUpload,
} from "../assets";
import { logoutUser } from "../../apis/user"; // 로그아웃 API 호출을 임포트

// NavLinkWithIcon 컴포넌트 수정
const NavLinkWithIcon = ({ icon, children, to, onClick }) => (
  <NavLink to={to} onClick={onClick}>
    <Icon src={icon} alt="" />
    {children}
  </NavLink>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // 예시로 로컬 스토리지에 토큰이 있는지 확인하여 로그인 상태를 설정
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser(); // 서버에 로그아웃 요청
      localStorage.removeItem('accessToken');
      // 쿠키 비우기
      document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      setIsLoggedIn(false);
      navigate('/'); // 로그아웃 후 홈 페이지로 이동
    } catch (error) {
      console.error('Logout failed:', error);
      alert('로그아웃에 실패했습니다.');
    }
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <Nav>
        <NavLinkWithIcon to="/OpenContest" icon={Hold}>
          대회 개최
        </NavLinkWithIcon>
        <NavLinkWithIcon to="/ContestList" icon={Participation}>
          대회 참여
        </NavLinkWithIcon>
        <NavLinkWithIcon to="/Question" icon={Question}>
          질문 게시판
        </NavLinkWithIcon>
        <NavLinkWithIcon to="/ProblemUpload" icon={ProblemUpload}>
          문제 업로드
        </NavLinkWithIcon>
      </Nav>
      <Nav>
        {isLoggedIn ? (
          <NavLinkWithIcon to="/" icon={LogoutLogin} onClick={handleLogout}>
            로그아웃
          </NavLinkWithIcon>
        ) : (
          <NavLinkWithIcon to="/Login" icon={LogoutLogin}>
            로그인
          </NavLinkWithIcon>
        )}
        <NavLinkWithIcon to="/Mypage" icon={MyPageIcon}>
          마이페이지
        </NavLinkWithIcon>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 
`;

const Logo = styled.h1`
  width: 180px;
  height: 72px;
  font-size: 24px;
  color: white;
  background-image: url(${MSJLogo});
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  font-size: 30px;

  @media (max-width: 500px) {
    font-size: 20px;
  }

  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin-left: 20px;
  &:hover {
    text-decoration: underline;
  }
`;

const Icon = styled.img`
  margin-right: 8px;
  vertical-align: middle;
  width: 24px;

  @media (max-width: 1024px) {
    width: 30px;
  }

  @media (max-width: 500px) {
    width: 16px;
  }
`;
