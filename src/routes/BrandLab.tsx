import styled from "styled-components";

import { CenterContents, Description, Title } from "../utils/styled";

import topImg from "../img/labTop.png";
import labDescriptionImg from "../img/labDes.png";
import ballImg from "../img/ball.png";
import earthImg from "../img/earth.png";
import handImg from "../img/hand.png";
import cupImg from "../img/cup.png";
import labGoal1Img from "../img/labGoal1.png";
import labGoal2Img from "../img/labGoal2.png";
import labGoal3Img from "../img/labGoal3.png";
import labGoal4Img from "../img/labGoal4.png";
import labGoal5Img from "../img/labGoal5.png";

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

const NavDiv = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
`;

const NavBox = styled.a`
  height: 80px;
  border: 1px solid #a9a8ad;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PinkSection = styled(CenterContents)`
  height: 230px;
  color: #666666;
`;

const PinkTitle = styled.h3`
  letter-spacing: -1.2px;
  font-size: 20px;
  font-weight: bold;
`;

const PinkDescription = styled.span`
  display: block;
  letter-spacing: -1.2px;
  font-size: 20px;
`;

const PinkCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 230px;
`;

const GoalSection = styled.div`
  height: 1392px;
  background-color: #f5f7ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const LabTitle = styled.h3`
  letter-spacing: -0.72px;
  color: #3f518b;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 26px;
`;

const BoxWrapper = styled.div`
  box-shadow: 0px 10px 20px #00000029;
  height: 233px;
  margin-bottom: 60px;
  width: 1060px;
  display: flex;
  border-radius: 20px;

  &:last-child {
    margin: 0;
  }
`;

const LeftBox = styled.div<{ backColor?: any }>`
  background-color: ${(props) => props.backColor || "#c6b8c9"};
  width: 333px;
  height: 233px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightBox = styled.div<{ backColor?: any }>`
  background-color: ${(props) => props.backColor || "#fff"};
  padding-left: 67px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 727px;
  height: 233px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  color: ${(props) => props.color || "none"};
`;

const BoxTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -1.44px;
`;

const BoxDescription = styled.span`
  font-size: 20px;
  letter-spacing: -1.2px;
`;

const DevelopSection = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  color: #3f518b;
  text-align: center;

  & h1 {
    font-size: 24px;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  & > span {
    margin-bottom: 20px;
  }

  & > h1 {
    margin: 0;
  }
`;

const Col = styled.div`
  letter-spacing: -1.08px;
  color: #666666;
  flex-direction: column;
  justify-content: center;
  display: flex;
`;

const Col2 = styled.div`
  letter-spacing: -1.08px;
  color: #666666;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-direction: column;
  & div > div {
    display: flex;
    margin-bottom: 10px;
  }
`;

const ColMonthDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: #333333;
`;

const ColDescriptionDiv = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #666666;
  opacity: 0.8;
`;

function BrandLab() {
  return (
    <>
      <TopSection>
        <img src={labDescriptionImg} alt="자보카" />
      </TopSection>
      <PinkSection>
        <div className="container-fluid p-0">
          <div className="row g-0">
            <PinkCol className="col p-0">
              <div>
                <PinkTitle>좋은 원료에서 좋은 제품이 만들어진다.</PinkTitle>
                <PinkDescription>
                  최상의 품질의 원료만을 고집하며, 인공첨가물을 사용하지
                </PinkDescription>
                <PinkDescription>
                  않고 만드는 건강한 제품을 지향하는 8LAB
                </PinkDescription>
              </div>
            </PinkCol>
            <PinkCol className="col p-0">
              <div>
                <PinkTitle>
                  건강한 아름다움은 좋은 제품에서부터 시작된다.
                </PinkTitle>
                <PinkDescription>
                  좋은 원료로 만든 좋은 제품을 만나 건강한
                </PinkDescription>
                <PinkDescription>아름다움을 추구하는 8LAB</PinkDescription>
              </div>
            </PinkCol>
          </div>
        </div>
      </PinkSection>
      <GoalSection>
        <LabTitle>우리의 목표</LabTitle>

        <BoxWrapper>
          <LeftBox backColor="#3f518b">
            <img src={ballImg} alt="ball" />
          </LeftBox>
          <RightBox backColor="#3f518b" color="#fff">
            <BoxTitle>올바른 브랜드</BoxTitle>
            <BoxDescription>
              인공 첨가물을 사용하지 않고 믿을 수 있는 원료만을 선별 후 사용
              합니다.
            </BoxDescription>
            <BoxDescription>
              식품, 화장품 등 다방면으로 안심하고 사용할 건강한 제품을 만듭니다.
            </BoxDescription>
          </RightBox>
        </BoxWrapper>

        <BoxWrapper>
          <LeftBox backColor="#fff">
            <img src={earthImg} alt="earth" />
          </LeftBox>
          <RightBox>
            <BoxTitle>함께하는 브랜드</BoxTitle>
            <BoxDescription>
              누구나 안심하고 먹고 바르고 사용할 수 있는 제품을 생산하여
            </BoxDescription>
            <BoxDescription>
              우리가 생활하는 곳곳에서 함께 합니다.
            </BoxDescription>
          </RightBox>
        </BoxWrapper>

        <BoxWrapper>
          <LeftBox backColor="#3f518b">
            <img src={cupImg} alt="cup" />
          </LeftBox>
          <RightBox backColor="#3f518b" color="#fff">
            <BoxTitle>건강 전문가 브랜드</BoxTitle>
            <BoxDescription>
              한의학 박사 한의사, 의학박사 전문의 등 전문가들이 건강에 초점을
            </BoxDescription>
            <BoxDescription>
              두고 제품 개발 및 품질 향상을 위해 끊임 없이 연구 합니다.
            </BoxDescription>
            <BoxDescription>
              제품에 대한 전문 지식을 갖춘 큐레이터 직원이 안내함으로
            </BoxDescription>
            <BoxDescription>
              고객이 제품 이해도가 높아져 효과적으로 제품을 사용할 수 있도록
              합니다.
            </BoxDescription>
          </RightBox>
        </BoxWrapper>

        <BoxWrapper>
          <LeftBox backColor="#fff">
            <img src={handImg} alt="hand" />
          </LeftBox>
          <RightBox>
            <BoxTitle>상생하는 브랜드</BoxTitle>
            <BoxDescription>
              사람과 자연 모두에게 건강한 제품을 제공하기 위해 노력합니다.
            </BoxDescription>
            <BoxDescription>
              자연에서 얻을 수 있는 원료는 환경보존을 우선으로 하며,
            </BoxDescription>
            <BoxDescription>
              지역사회 공헌을 원칙으로 지킴으로 지역사회의 삶의 질을 높일 수
              있는
            </BoxDescription>
            <BoxDescription>
              사회적 목적을 추구하며 재화 및 서비스 생산활동을 합니다.
            </BoxDescription>
          </RightBox>
        </BoxWrapper>
      </GoalSection>

      <DevelopSection>
        <Title>우리의 성장</Title>
        <Description>
          건강한 제품을 만들고자 한길만 바라보여 달리고 있습니다.
        </Description>
        <CenterContents>
          <div className="container-fluid p-0">
            <Title>2022</Title>
            <div className="row g-0">
              <div className="col p-0">
                <img src={labGoal2Img} alt="8lab" />
              </div>
              <Col className="col p-0">
                <Description>깐깐한 호박즙 출시 예정</Description>
              </Col>
            </div>
            <Title>2011</Title>
            <div className="row g-0">
              <Col2 className="col p-0">
                <div>
                  <div>
                    <ColMonthDiv>
                      <p>2월</p>
                    </ColMonthDiv>
                    <ColDescriptionDiv>
                      <p>티프레쉬 4종 리뉴얼</p>
                    </ColDescriptionDiv>
                  </div>
                  <div>
                    <ColMonthDiv>
                      <p>3월</p>
                    </ColMonthDiv>
                    <ColDescriptionDiv>
                      <p>브이쏙티 리뉴얼</p>
                    </ColDescriptionDiv>
                  </div>

                  <div>
                    <ColMonthDiv>
                      <p>7월</p>
                    </ColMonthDiv>
                    <ColDescriptionDiv>
                      <p>작두콩차 출시</p>
                    </ColDescriptionDiv>
                  </div>

                  <div>
                    <ColMonthDiv>
                      <p>8월</p>
                    </ColMonthDiv>
                    <ColDescriptionDiv>
                      <p>티프레쉬 청모차 출시</p>
                    </ColDescriptionDiv>
                  </div>
                  <div>
                    <ColMonthDiv>
                      <p>12월</p>
                    </ColMonthDiv>
                    <ColDescriptionDiv>
                      <p>티프레쉬 청명차 출시</p>
                    </ColDescriptionDiv>
                  </div>
                </div>
              </Col2>
              <div className="col p-0">
                <img src={labGoal3Img} alt="8lab" />
              </div>
            </div>
            <Title>2020</Title>
            <div className="row g-0">
              <div className="col p-0">
                <img src={labGoal4Img} alt="8lab" />
              </div>
              <Col2 className="col p-0">
                <div>
                  <div>
                    <ColMonthDiv>
                      <p>3월</p>
                    </ColMonthDiv>
                    <ColDescriptionDiv>
                      <p>티프레쉬 브랜드 런칭</p>
                      <p>티프레쉬 4종 출시 </p>
                      <p>브이쏙티 출시 </p>
                      <p>티프레쉬 청혈차를 '청쑥차'로 상표 변경</p>
                    </ColDescriptionDiv>
                  </div>
                  <div>
                    <ColMonthDiv>
                      <p>8월</p>
                    </ColMonthDiv>
                    <ColDescriptionDiv>
                      <p>깐깐한 흑마늘 진액 3종 출시</p>
                    </ColDescriptionDiv>
                  </div>
                </div>
              </Col2>
            </div>
            <Title>2019</Title>
            <div className="row g-0">
              <Col2 className="col p-0">
                <div>
                  <div>
                    <ColMonthDiv>
                      <p>12월</p>
                    </ColMonthDiv>
                    <ColDescriptionDiv>
                      <p>8LAB 브랜드 런칭</p>
                      <p>태우식품과 MOU 체결</p>
                      <p>깐깐한 식품 브랜드 런칭</p>
                      <p>깐깐한 깐 흑마늘 출시</p>
                    </ColDescriptionDiv>
                  </div>
                </div>
              </Col2>
              <div className="col p-0">
                <img src={labGoal5Img} alt="8lab" />
              </div>
            </div>
            <Title>2016</Title>
            <div className="row g-0">
              <div className="col p-0">
                <img src={labGoal1Img} alt="8lab" />
              </div>
              <Col className="col p-0">
                <Description>티프레쉬 기획</Description>
              </Col>
            </div>
          </div>
        </CenterContents>
      </DevelopSection>

      <NavDiv>
        <CenterContents>
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col p-0">
                <NavBox
                  href="https://www.8lab.co.kr/teafreshinfo"
                  target="_blank"
                >
                  티프레쉬에 대해 궁금하다면?
                </NavBox>
              </div>
              <div className="col p-0">
                <NavBox
                  style={{ borderLeft: "none" }}
                  href="https://www.8lab.co.kr/blackgarlic"
                  target="_blank"
                >
                  깐깐한 식품에 대해 궁금하다면?
                </NavBox>
              </div>
            </div>
          </div>
        </CenterContents>
      </NavDiv>
    </>
  );
}

export default BrandLab;
