import styled from "styled-components";

import {
  CenterContents,
  Description,
  MainContainer,
  Title,
} from "../utils/styled";

import topImg from "../img/brandTop.png";

import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";

const TopSection = styled.div`
  background: url(${topImg});
  background-size: cover;
  height: 420px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & h1 {
    margin-bottom: 20px;
  }
`;

const Tabs = styled.div`
  position: sticky;
  top: 0;
  height: 100px;
  background-color: #fff;

  & > div {
    display: flex;
    height: 100px;
    align-items: center;
  }
`;
const Tab = styled.div`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: -1.8px;
  color: #d1d1d1;
  margin-right: 50px;
`;

function Brand() {
  const location = useLocation();
  const pathname = location.pathname.substring(7);
  return (
    <MainContainer>
      <TopSection>
        <Title>브랜드 소개</Title>
        <Description>2017년에 설립된 (주)에이치비메디는</Description>
        <Description>
          한방병원, 병의원을 상대로 각 분야별 의료컨설팅, 광고마케팅 사업을
          진행하고 있습니다.
        </Description>
        <Description>
          이 밖에도 한의학 박사를 비롯하여 의학박사 전문의, 티소믈리에가
          블렌딩한
        </Description>
        <Description>
          건강기능차 '티프레쉬' 출시 이후, 경희대 피부생명공학센터와 함께
        </Description>
        <Description>
          자연기반의 천연재료 연구를 지속해오면서 화장품 판매를 앞두고 있습니다.
        </Description>
      </TopSection>
      <Tabs>
        <CenterContents>
          <Tab>
            <Link
              to="jabocar"
              style={
                pathname === "jabocar"
                  ? { color: "#3F518B" }
                  : { color: "#D1D1D1" }
              }
            >
              자보카네트워크
            </Link>
          </Tab>
          <Tab>
            <Link
              to="8lab"
              style={
                pathname === "8lab"
                  ? { color: "#3F518B" }
                  : { color: "#D1D1D1" }
              }
            >
              8LAB
            </Link>
          </Tab>
          <Tab>
            <Link
              to="besolution"
              style={
                pathname === "besolution"
                  ? { color: "#3F518B" }
                  : { color: "#D1D1D1" }
              }
            >
              Be;solution
            </Link>
          </Tab>
        </CenterContents>
      </Tabs>
      <Outlet />
    </MainContainer>
  );
}

export default Brand;
