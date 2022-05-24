import { Link } from "react-router-dom";
import styled from "styled-components";

import mainLogo from "../img/logo.png";

const HeaderLayout = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderContents = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
`;

const LogoDiv = styled.div``;
const Logo = styled.img``;

const Nav = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;

  & > li:nth-child(2) {
    margin-right: 54px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const NavList = styled.li`
  margin-right: 54px;
  height: 50px;
  width: 110px;
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: center;

  &:nth-child(2) {
    position: relative;
  }

  &:nth-child(2):hover .hover {
    display: block;
  }
`;

const HiddenDiv = styled.div`
  display: none;
  position: absolute;
  background-color: #fff;
  top: 50px;
  left: 0;
  z-index: 999;
`;

const HiddenUl = styled.ul``;

const HiddenLi = styled.li`
  width: 120px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

function Header() {
  return (
    <HeaderLayout>
      <HeaderContents>
        <LogoDiv>
          <Link to="/">
            <Logo src={mainLogo} />
          </Link>
        </LogoDiv>
        <Nav>
          <NavList>
            <Link to="/intro">회사 소개</Link>
          </NavList>
          <NavList>
            <Link to="/jabocar">사업 소개</Link>
            <HiddenDiv className="hover">
              <HiddenUl>
                <HiddenLi>
                  <Link to="/jabocar">자보카네트워크</Link>
                </HiddenLi>
                <HiddenLi>
                  <Link to="/8lab">8LAB</Link>
                </HiddenLi>
                <HiddenLi>
                  <Link to="/besolution">Be;solution</Link>
                </HiddenLi>
              </HiddenUl>
            </HiddenDiv>
          </NavList>

          <NavList>
            <Link to="/brand/jabocar">브랜드 소개</Link>
          </NavList>
          <NavList>
            <Link to="/map">오시는 길</Link>
          </NavList>
        </Nav>
      </HeaderContents>
    </HeaderLayout>
  );
}

export default Header;
