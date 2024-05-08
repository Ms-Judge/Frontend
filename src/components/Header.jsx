import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import React from "react";
import {
  MSJLogo,
  LogoutLogin,
  Hold,
  Participation,
  MyPage,
  Question,
} from "../assets";
const NavLinkWithIcon = ({ icon, children, to }) => (
  <NavLink to={to}>
    <img
      src={icon}
      alt=""
      style={{ marginRight: "8px", verticalAlign: "middle" }}
    />
    {children}
  </NavLink>
);
const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <Nav>
        <NavLinkWithIcon to="/hold" icon={Hold}>
          대회 대최
        </NavLinkWithIcon>
        <NavLinkWithIcon to="/participation" icon={Participation}>
          대회 참여
        </NavLinkWithIcon>
        <NavLinkWithIcon to="/question" icon={Question}>
          질문 게시판{" "}
        </NavLinkWithIcon>
      </Nav>
      <Nav>
        <NavLinkWithIcon to="/login" icon={LogoutLogin}>
          로그인
        </NavLinkWithIcon>
        <NavLinkWithIcon to="/mypage" icon={MyPage}>
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
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin-left: 20px;
  &:hover {
    text-decoration: underline;
  }
`;
