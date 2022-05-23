import { Carousel } from "react-bootstrap";
import styled from "styled-components";

import slideImg from "../img/mainHero.png";
import slideImg2 from "../img/slide2.png";
import mainBoxImg1 from "../img/mainBox1.png";
import mainBoxImg2 from "../img/mainBox2.png";
import mainBoxImg3 from "../img/mainBox3.png";
import mainBottomImg from "../img/mainBottom.png";
import { Description, Title } from "../utils/styled";
import { Link } from "react-router-dom";

const MainContainer = styled.div``;

const SlideContainer = styled.div``;

const CarouselExtends = styled(Carousel)`
  & img {
    height: 630px;
  }
  & button {
    width: 15px !important;
    height: 15px !important;
    border-radius: 50% !important;
  }
  & h3 {
    font-size: 36px;
    font-weight: bold;
  }

  & p {
    font-size: 24px;
    letter-spacing: -1.44px;
  }
`;

const CarouselExtendsCaption = styled(CarouselExtends.Caption)`
  bottom: 15.25rem !important;
`;

const SectionNav = styled.div`
  width: 1280px;
  margin: 0 auto;
  margin-bottom: 100px;
`;

const TitleContainer = styled.div`
  margin-top: 100px;
  text-align: center;
  color: #333333;
`;

const NavContainer = styled.div`
  margin-top: 75px;
`;

const NavBox = styled.div<{ img: any }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 420px;
  /* width: 400px; */
  background: url(${(props) => props.img}) no-repeat;
  color: #fff;
`;

const Col = styled(Link)`
  margin-right: 40px;

  &:last-child {
    margin: 0;
  }
`;

const NavText = styled.span`
  font-size: 18px;
  letter-spacing: -1.08px;
`;

const NavTitle = styled.h3`
  font-size: 24px;
  letter-spacing: -1.44px;
  font-weight: bold;
`;

const NavBottom = styled(Link)`
  margin-top: 40px;
  width: 100%;
  height: 195px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url(${mainBottomImg});
  color: #333333;

  &:hover {
    color: #333333;
  }
`;

function Home() {
  return (
    <MainContainer>
      <SlideContainer>
        <CarouselExtends fade>
          <CarouselExtends.Item interval={3000}>
            <img className="d-block w-100" src={slideImg} alt="First slide" />
            <CarouselExtendsCaption>
              <h3>에이치비메디의 방향</h3>
              <p>올바른 방향과 목표로 한 걸음 더 성장하고 있습니다.</p>
            </CarouselExtendsCaption>
          </CarouselExtends.Item>
          <CarouselExtends.Item interval={3000}>
            <img className="d-block w-100" src={slideImg2} alt="Second slide" />

            <CarouselExtendsCaption>
              <h3>에이치비메디의 도전</h3>
              <p>변화의 흐름에 발 맞추어 앞으로 나아가고 있습니다.</p>
            </CarouselExtendsCaption>
          </CarouselExtends.Item>
        </CarouselExtends>
      </SlideContainer>

      <SectionNav>
        <TitleContainer>
          <Title>OUR BUSINESS</Title>
          <Description>
            (주)에이치비메디는 온라인 및 오프라인 마케팅 사업을 진행하고
            있습니다.
          </Description>
        </TitleContainer>
        <NavContainer>
          <div className="container-fluid p-0">
            <div className="row g-0">
              <Col to="/jabocar" className="col p-0">
                <NavBox img={mainBoxImg1}>
                  <NavText>병&#183;의원</NavText>
                  <NavTitle>광고대행</NavTitle>
                </NavBox>
              </Col>
              <Col to="/8lab" className="col p-0">
                <NavBox img={mainBoxImg2}>
                  <NavText>온라인</NavText>
                  <NavTitle>쇼핑몰</NavTitle>
                </NavBox>
              </Col>
              <Col to="/intro" className="col p-0">
                <NavBox img={mainBoxImg3}>
                  <NavText>사업방향</NavText>
                  <NavTitle>회사소개</NavTitle>
                </NavBox>
              </Col>
            </div>
            <div className="row g-0">
              <div className="col p-0">
                <NavBottom to="/map">
                  <NavText>교통안내</NavText>
                  <NavTitle>찾아 오시는 길</NavTitle>
                </NavBottom>
              </div>
            </div>
          </div>
        </NavContainer>
      </SectionNav>
    </MainContainer>
  );
}

export default Home;
