import styled from "styled-components";

import {
  CenterContents,
  Description,
  MainContainer,
  Title,
} from "../utils/styled";

import topImg from "../img/beTop.png";
import logoImg from "../img/beLogo.png";
import beMiddleImg from "../img/beMiddle.png";
import beBottomImg from "../img/beBottom.png";
import bottleImg from "../img/beBottle.png";
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

const ImgSection = styled.div<{ img: any; height: any }>`
  height: ${(props) => props.height};
  background: url(${(props) => props.img});
  background-size: cover;
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

const Section = styled(CenterContents)`
  height: 345px;

  & img {
    margin-top: 100px;
  }
  & h3 {
    margin-top: 195px;
  }
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -1.44px;
`;

const SectionDescription = styled.span`
  display: block;
  font-size: 20px;
  letter-spacing: -1.2px;
  color: #333333;
`;

const Section2 = styled(CenterContents)`
  height: 600px;

  & img {
    margin-top: 100px;
  }

  & p {
    margin-top: 216px;
    margin-bottom: 70px;
  }

  & p ~ span:last-child {
    margin-top: 10px;
  }

  & b {
    font-weight: bold;
  }
`;
const DescriptionSection = styled.div`
  height: 297px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  letter-spacing: -1.8px;
  color: #333333;
`;

function BeSolution() {
  return (
    <MainContainer>
      <TopSection>
        <Title>Be;solution</Title>
        <Description>
          오로지 피부만을 연구하며 고민해 온 우리는 화장품의 성분을 가장
          중요하게 생각합니다.
        </Description>
        <Description>
          피부에 대한 연구와 임상경험이 풍부한 한의사와 의사가 개발에 참여
          하였습니다.
        </Description>
      </TopSection>
      <Section>
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col p-0">
              <img src={logoImg}></img>
            </div>
            <div className="col p-0">
              <SectionTitle>피부와 자연의 부담을 줄이기 위해</SectionTitle>
              <SectionDescription>
                자연원료를 기반으로 화학 첨가물을 넣지 않아 피부에
              </SectionDescription>
              <SectionDescription>
                자극적이지 않은 천연 한방 화장품 브랜드입니다.
              </SectionDescription>
            </div>
          </div>
        </div>
      </Section>
      <ImgSection img={beMiddleImg} height="600px"></ImgSection>
      <Section2>
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col p-0">
              <img src={bottleImg}></img>
            </div>
            <div className="col p-0">
              <p>
                <SectionDescription>
                  비솔루션 진정라인은 기초 화장품 원료 일지라도
                </SectionDescription>
                <SectionDescription>
                  피부에 좋지 않은 화학성분을 최대한 배제하면서
                </SectionDescription>
                <SectionDescription>
                  순하고 보습 및 진정효과가 뛰어난 천연원료를 사용하여
                </SectionDescription>
                <SectionDescription>
                  누구나 안심하고 바를 수 있도록 만들었습니다.
                </SectionDescription>
              </p>
              <Description>
                <b>LINE UP</b>
              </Description>
              <Description>Relaxing skincare</Description>
            </div>
          </div>
        </div>
      </Section2>
      <ImgSection img={beBottomImg} height="560px"></ImgSection>
      <DescriptionSection>
        <p>피부가 예민하여도 매일 발라도 부담없는</p>
        <p>천연 한방 화장품 비솔루션 입니다.</p>
      </DescriptionSection>
      <NavDiv to="/brand/besolution">
        <CenterContents>
          <NavBox>Be;solution 자세히 보기</NavBox>
        </CenterContents>
      </NavDiv>
    </MainContainer>
  );
}

export default BeSolution;
