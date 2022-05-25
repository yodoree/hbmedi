import styled from "styled-components";

import {
  CenterContents,
  Description,
  MainContainer,
  Title,
} from "../utils/styled";

import topImg from "../img/top.png";
import teaImg from "../img/tea.png";
import teaImg1 from "../img/tea_tit_img.png";
import maneulImg from "../img/maneul.png";
import maneulImg1 from "../img/maneul1.png";
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

const Section = styled.div`
  height: 780px;
`;

const ImgCol = styled.div<{ img: any }>`
  height: 780px;
  background: url(${(props) => props.img});
  background-size: cover;
`;

const TextCol = styled.div`
  height: 780px;
  display: flex;
  align-items: center;
  background-color: #d5d4d8;
  & img {
    margin-left: 270px;
  }
`;

const TextCol2 = styled.div`
  height: 780px;
  display: flex;
  align-items: center;
  background-color: #dddad0;
  justify-content: end;
  & img {
    margin-right: 240px;
  }
`;

const Section2 = styled(CenterContents)`
  height: 420px;
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

const LeftBox = styled.div`
  padding-left: 100px;
`;
const RightBox = styled.div`
  padding-left: 100px;
`;

const Title3 = styled.h3`
  font-weight: bold;
  font-size: 18px;
  color: #000000;
  margin-bottom: 10px;
`;

const TagBoxWrapper = styled.div`
  margin-top: 50px;
  display: flex;
`;

const LineUpWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  margin-bottom: 72px;
`;

const LineUpList = styled.div`
  margin-right: 60px;

  &:last-child {
    margin: 0;
  }
`;

const TagBox = styled.div`
  width: 148px;
  height: 45px;
  border: 2px solid #333333;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-weight: bold;

  &:last-child {
    margin: 0;
  }
`;

const NavDiv = styled(Link)`
  height: 120px;
  display: flex;
  align-items: center;
`;

const NavBox = styled.div`
  height: 80px;
  border: 1px solid #a9a8ad;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Col = styled.div``;

const ALink = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;
function EightLab() {
  return (
    <MainContainer>
      <TopSection>
        <Title>8LAB</Title>
        <Description>
          한의학 박사를 비롯하여 의학박사 전문의, 티소믈리에가 블렌딩 한
        </Description>
        <Description>
          건강기능차 '티프레쉬' 출시 이후, 경희대 피부생명공학센터와 함께
        </Description>
        <Description>
          자연 기반의 천연재료 연구를 지속해오면서 화장품 판매를 앞두고
          있습니다.
        </Description>
      </TopSection>
      <Section>
        <div className="container-fluid p-0">
          <div className="row g-0">
            <ImgCol className="col p-0" img={teaImg}></ImgCol>
            <TextCol className="col p-0">
              <img src={teaImg1} alt="" />
            </TextCol>
          </div>
        </div>
      </Section>
      <Section2>
        <div className="container-fluid p-0">
          <div className="row g-0">
            <Col className="col p-0">
              <LeftBox>
                <Title3>STORY</Title3>
                <Description>
                  티프레쉬는 "마시는 차"의 "TEA"와 "생기를 불어 넣다"라는
                </Description>
                <Description>
                  "REFRESH"의 합성어로, 일상 속 작은 부분에 스며들어
                </Description>
                <Description>
                  건강의 가치를 전해드리는 블렌디드 티브랜드 입니다.
                </Description>
                <TagBoxWrapper>
                  <TagBox>#한의사블렌딩</TagBox>
                  <TagBox>#블렌디드티</TagBox>
                  <TagBox>#청정자연원료</TagBox>
                </TagBoxWrapper>
              </LeftBox>
            </Col>
            <Col className="col p-0">
              <RightBox>
                <Title3>LINE UP</Title3>
                <LineUpWrapper>
                  <LineUpList>
                    <Description>청명차</Description>
                    <Description>청해차</Description>
                    <Description>청폐차</Description>
                  </LineUpList>
                  <LineUpList>
                    <Description>청모차</Description>
                    <Description>청쑥차</Description>
                  </LineUpList>
                  <LineUpList>
                    <Description>작두콩차</Description>
                    <Description>붓티</Description>
                  </LineUpList>
                </LineUpWrapper>
                <ALink
                  href="https://www.8lab.co.kr/teafreshinfo"
                  target="_blank"
                >
                  <Description>홈페이지 방문 {">"}</Description>
                </ALink>
              </RightBox>
            </Col>
          </div>
        </div>
      </Section2>
      <Section>
        <div className="container-fluid p-0">
          <div className="row g-0">
            <TextCol2 className="col p-0">
              <img src={maneulImg1} alt="" />
            </TextCol2>
            <ImgCol className="col p-0" img={maneulImg}></ImgCol>
          </div>
        </div>
      </Section>
      <Section2>
        <div className="container-fluid p-0">
          <div className="row g-0">
            <Col className="col p-0">
              <LeftBox>
                <Title3>STORY</Title3>
                <Description>
                  원료부터 생산 과정까지 깐깐하게 따지고 제품을 생산합니다.
                </Description>
                <Description>
                  또한 자체 시설을 갖추어 제품 특수 공법을 이용하여
                </Description>
                <Description>흑마늘부터 직접 생산 합니다.</Description>
                <TagBoxWrapper>
                  <TagBox>#남녀노소누구나</TagBox>
                  <TagBox>#발효흑마늘</TagBox>
                </TagBoxWrapper>
              </LeftBox>
            </Col>
            <Col className="col p-0">
              <RightBox>
                <Title3>LINE UP</Title3>
                <LineUpWrapper>
                  <LineUpList>
                    <Description>흑마늘 농축 진액</Description>
                    <Description>흑마늘 진액</Description>
                    <Description>흑마늘 양파진액</Description>
                  </LineUpList>
                  <LineUpList>
                    <Description>발효 깐 흑마늘</Description>
                    <Description>호박즙 (2022년 출시 예정)</Description>
                  </LineUpList>
                </LineUpWrapper>
                <ALink
                  href="https://www.8lab.co.kr/blackgarlic"
                  target="_blank"
                >
                  <Description>홈페이지 방문 {">"}</Description>
                </ALink>
              </RightBox>
            </Col>
          </div>
        </div>
      </Section2>
      <NavDiv to="/brand/8lab">
        <CenterContents>
          <NavBox>8LAB 자세히 보기</NavBox>
        </CenterContents>
      </NavDiv>
    </MainContainer>
  );
}

export default EightLab;
