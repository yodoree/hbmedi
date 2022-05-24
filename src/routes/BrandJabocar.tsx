import styled from "styled-components";

import { CenterContents, Description, Title } from "../utils/styled";

import topImg from "../img/jabocarTop.png";
import DescriptionImg from "../img/jabocarTopDe.png";
import brandJa1Img from "../img/brandJa1.png";
import brandJa2Img from "../img/brandJa2.png";
import brandJa3Img from "../img/brandJa3.png";

const TopSection = styled.div`
  background: url(${topImg});
  background-size: cover;
  height: 809px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const DescriptionSection = styled.div`
  height: 230px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const GoalSection = styled.div`
  height: 856px;
  background-color: #f5f7ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;

  & h3 {
    margin-bottom: 30px;
  }

  & h1 {
    margin-bottom: 30px;
  }
`;

const JabocarTitle = styled.h3`
  letter-spacing: -1.44px;
  color: #3f518b;
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Box = styled.div`
  width: 340px;
  height: 350px;
  border-radius: 20px;
  background: #121621;
  margin-right: 30px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 89px;

  &:last-child {
    margin: 0;
  }
`;

const DevelopSection = styled.div`
  height: 1390px;
  padding-top: 100px;
`;

const DevelopSectionInner = styled(CenterContents)`
  text-align: center;

  & h3:first-child {
    margin-bottom: 46px;
  }
`;

const Col = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const NavDiv = styled.a`
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

function BrandJabocar() {
  return (
    <>
      <TopSection>
        <img src={DescriptionImg} alt="자보카" />
      </TopSection>
      <DescriptionSection>
        <Description>
          환자유치는 병의원 전문 마케팅 회사와 함께해야 제대로 효과가 납니다.
        </Description>
        <Description>
          급변하는 온라인 광고 시장에 빠르게 맞춰 성공적인 온라인 마케팅을
        </Description>
        <Description>
          제시하고 검색광고 효율을 높여 드리고 있습니다.
        </Description>
      </DescriptionSection>
      <GoalSection>
        <JabocarTitle>우리의 목표</JabocarTitle>
        <Title>차별된 병원마케팅</Title>
        <Description>옳은 방향으로 나아가기 위해</Description>
        <Description>매일 함께 고민하고 있습니다.</Description>
        <BoxWrapper>
          <Box>
            <Title style={{ fontSize: "24px" }}>한의원 마케팅 전문</Title>
            <Description>한의원 전문 마케터의</Description>
            <Description>다년간 경험을 바탕으로</Description>
            <Description>각 특성에 맞는 방향으로</Description>
            <Description>관리가 진행 됩니다.</Description>
          </Box>
          <Box>
            <Title style={{ fontSize: "24px" }}>차별화 전략으로</Title>
            <Description>에이치비메디는 한의원</Description>
            <Description>마다의 차별화된 가치를</Description>
            <Description>선별하여 소비자에게</Description>
            <Description>전달 합니다.</Description>
          </Box>
          <Box>
            <Title style={{ fontSize: "24px" }}>의료 광고법 엄수</Title>
            <Description>현 의료법에서</Description>
            <Description>변경된 이슈 발견시</Description>
            <Description>빠른 대처가 진행 됩니다.</Description>
          </Box>
        </BoxWrapper>
      </GoalSection>
      <DevelopSection>
        <DevelopSectionInner>
          <JabocarTitle>우리의 성장</JabocarTitle>
          <JabocarTitle>2021</JabocarTitle>
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col p-0">
                <img src={brandJa2Img} alt="자보카" />
              </div>
              <Col className="col p-0">
                <Description>척추나한의원</Description>
                <Description>프렌차이즈 설립</Description>
              </Col>
            </div>
            <JabocarTitle>2018</JabocarTitle>
            <div className="row g-0">
              <Col className="col p-0">
                <Description>바른추나 네트워크 설립</Description>
              </Col>
              <div className="col p-0">
                <img src={brandJa3Img} alt="자보카" />
              </div>
            </div>
            <JabocarTitle>2017</JabocarTitle>
            <div className="row g-0">
              <div className="col p-0">
                <img src={brandJa1Img} alt="자보카" />
              </div>
              <Col className="col p-0">
                <Description>자보카 네트워크</Description>
              </Col>
            </div>
          </div>
        </DevelopSectionInner>
      </DevelopSection>
      <NavDiv href="https://www.jabocar.com/" target="_blank">
        <CenterContents>
          <NavBox>병의원마케팅에 대해 궁금하다면?</NavBox>
        </CenterContents>
      </NavDiv>
    </>
  );
}

export default BrandJabocar;
