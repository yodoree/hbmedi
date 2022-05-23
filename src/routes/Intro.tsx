import styled from "styled-components";

import contentsSectionsImg from "../img/middle.png";
import diagramImg from "../img/diagram.png";
import jabocarImg from "../img/jabocar.png";
import labImg from "../img/lab.png";
import solutionImg from "../img/solution.png";
import detailImg1 from "../img/detail1.png";
import detailImg2 from "../img/detail2.png";
import { Description, Title, MainContainer } from "../utils/styled";
import { Link } from "react-router-dom";

const TopSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 420px;
  background: #3f518b;
  color: #fff;
`;

const TopSectionInner = styled.div`
  width: 1280px;

  & h1 {
    margin-bottom: 12px;
  }
`;

const Title2 = styled(Title)`
  font-size: 36px;
  letter-spacing: -2.16px;
  margin-bottom: 12px;
`;

const ContentsSection = styled.div`
  display: flex;
  padding-top: 30px;
  justify-content: center;
  background: url(${contentsSectionsImg}) 0% 0% no-repeat;
  background-size: cover;
  height: 947px;
`;

const ContentsSectionInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & div:last-child {
    margin-top: 39px;

    & img {
      margin-right: 31px;
    }

    & img:last-child {
      margin: 0;
    }
  }
`;

const DetailSection = styled.div<{ img: any }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 475px;
  background: url(${(props) => props.img});
  background-size: cover;
  color: #fff;
`;

const NavSection = styled.div`
  width: 1280px;
  margin: 0 auto;
  margin-top: 22px;
  margin-bottom: 20px;
  display: flex;
  border: 1px solid #a9a8ad;
`;

const NavBox = styled(Link)`
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  letter-spacing: -1.08px;
  color: #333333;

  border-right: 1px solid #a9a8ad;
`;

function Home() {
  return (
    <MainContainer>
      <TopSection>
        <TopSectionInner>
          <Title>회사 소개</Title>
          <Description>우리는 상품을 중심으로 하는 광고를 진행하며</Description>

          <Description>
            온라인과 오프라인 등의 다양한 영역에서 사업을 펼쳐나가고 있습니다.
          </Description>
        </TopSectionInner>
      </TopSection>
      <ContentsSection>
        <ContentsSectionInner>
          <div>
            <img src={diagramImg} alt="이미지" />
          </div>
          <div>
            <img src={jabocarImg} alt="자보카" />
            <img src={labImg} alt="8lab" />
            <img src={solutionImg} alt="besolsution" />
          </div>
        </ContentsSectionInner>
      </ContentsSection>
      <DetailSection img={detailImg1}>
        <Title2>01</Title2>
        <Description>
          우리는 하나의 상품이 고객에게 효과적으로 전달하기 위하여
        </Description>
        <Description>
          끊임없는 연구와 학습으로 한 발자국 더 나아가고 있습니다.
        </Description>
      </DetailSection>
      <DetailSection img={detailImg2}>
        <Title2>02</Title2>
        <Description>
          다양한 경험을 지닌 인재들이 모인 (주)에이치비메디는
        </Description>
        <Description>
          우리만의 전문성과 기술을 만들어 효과적으로 광고가 진행되도록 노력하고
          있습니다.
        </Description>
      </DetailSection>
      <NavSection>
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col p-0">
              <NavBox to="/jabocar">자보카네트워크 자세히 보기</NavBox>
            </div>
            <div className="col p-0">
              <NavBox to="/8lab">8LAB 자세히 보기</NavBox>
            </div>
            <div className="col p-0">
              <NavBox to="/besolution" style={{ borderRight: "0px" }}>
                Be;solution 자세히 보기
              </NavBox>
            </div>
          </div>
        </div>
      </NavSection>
    </MainContainer>
  );
}

export default Home;
