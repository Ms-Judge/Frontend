import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import React from "react";
import {
  MSJLogo,
  LogoutLogin,
  Hold,
  Participation,
  MyPage as MyPageIcon,
  Question,
  ProblemUpload,
} from "../assets";
import { logoutUser } from "../apis/auth"; // 로그아웃 API 호출을 임포트
import { useAuth } from "../context/AuthContext";

// NavLinkWithIcon 컴포넌트 수정
const NavLinkWithIcon = ({ icon, children, to, onClick }) => (
  <NavLink to={to} onClick={onClick}>
    <Icon src={icon} alt="" />
    {children}
  </NavLink>
);

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      setIsLoggedIn(false);
      // localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error)
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
          <NavLinkWithIcon to="/login" icon={LogoutLogin}>
            로그인
          </NavLinkWithIcon>
        )}
        <NavLinkWithIcon to="/mypage" icon={MyPageIcon}>
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
