import styled from "styled-components";

import {
  Description,
  Title,
  MainContainer,
  CenterContents,
} from "../utils/styled";

import mainCityImg from "../img/mainCity.png";
import telIconImg from "../img/telIcon.png";
import emailIconImg from "../img/emailIcon.png";
import faxIconImg from "../img/faxIcon.png";
import upImg from "../img/up.png";
import purpleImg from "../img/purple.png";
import viralImg from "../img/viral.png";
import brandcareImg from "../img/brandcare.png";
import naverImg from "../img/naver.png";
import lawImg from "../img/law.png";
import marketingImg from "../img/marketing.png";
import keywordImg from "../img/keyword.png";
import keywordImg1 from "../img/keyword1.png";
import keywordImg2 from "../img/keyword2.png";
import keywordImg3 from "../img/keyword3.png";
import competitionImg from "../img/competition.png";
import comMarketingImg from "../img/comMarketing.png";
import pageImg from "../img/page.png";
import pageImg1 from "../img/page1.png";
import postingImg from "../img/posting.png";
import postingImg1 from "../img/posting1.png";
import { Link } from "react-router-dom";

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 420px;
  background: url(${mainCityImg});
  color: #fff;

  & h1 {
    margin-bottom: 12px;
  }
`;

const StickySection = styled.div`
  height: 100px;
  position: sticky;
  top: 0;
  color: #fff;
  background: #000000;
  display: flex;
  align-items: center;
`;

const StickyInner = styled(CenterContents)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StickyTitle = styled(Title)`
  font-size: 30px;
  letter-spacing: -1.8px;
`;

const StickyUl = styled.ul`
  display: flex;
`;

const StickyLi = styled.li`
  display: flex;
  margin-right: 63px;

  &:last-child {
    margin: 0;
  }
`;

const StickyIcon = styled.img`
  margin-right: 10px;
`;

const StickyListDiv = styled.div``;

const Section = styled.div<{ img?: any }>`
  height: 922px;
  background: url(${(props) => props.img});
  background-color: ${(props) => props.color};
`;

const FirstSectionInner = styled(CenterContents)`
  color: #fff;
  padding-top: 100px;

  & img {
    margin-bottom: 10px;
  }
`;

const FirstSectionBottom = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 216px;
`;

const FirstSectionInnerBox = styled.div`
  width: 340px;
  height: 350px;
  background-color: #fff;
  border-radius: 20px;
  margin-right: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:last-child {
    margin: 0;
  }
`;

const FirstSectionInnerBoxTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -1.44px;
  color: #3f518b;
  margin-bottom: 40px;
`;

const FirstSectionInnerBoxDescription = styled(Description)`
  letter-spacing: -1.2px;
  color: #333333;
`;

const SecondSectionInner = styled(CenterContents)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
  & img {
    margin-bottom: 50px;
  }
`;

const SecondSectionInnerBoxWrapper = styled.div`
  margin-top: 78px;
  margin-bottom: 77px;
`;

const SecondSectionInnerBox = styled.div`
  width: 700px;
  height: 50px;
  border-radius: 20px;
  background-color: #3f518b;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const ThirdSectionInner = styled(CenterContents)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
  & img {
    margin-bottom: 22px;
  }

  & img:last-child {
    box-shadow: rgb(0 0 0 / 16%) 0px 10px 20px;
    border-radius: 20px;
  }

  & > span {
    margin-bottom: 49px;
  }

  & div {
    text-align: center;
    margin-bottom: 40px;
  }
`;

const FourthSectionInner = styled(CenterContents)`
  padding-top: 100px;
  color: #fff;
  & img {
    margin-bottom: 20px;
  }

  & > span {
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

const FourthSectionInnerBoxWrapper = styled.div`
  padding-top: 40px;
  width: 1180px;
  margin: 0 auto;
  text-align: center;
`;

const FourthSectionInnerBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BannerSection = styled.div<{ img?: any }>`
  height: 460px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${(props) => props.img});

  & img {
    margin-bottom: 20px;
  }
`;

const FifthSectionInner = styled(CenterContents)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    margin-right: 108px;
    box-shadow: 0px 10px 20px #00000029;
    border-radius: 10px;
  }

  & div img {
    margin-bottom: 20px;
  }

  & div {
    text-align: center;
  }
`;

const SixthSectionInner = styled(CenterContents)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  & div {
    margin-right: 125px;

    & img {
      margin-bottom: 20px;
    }

    & span:last-child {
      margin-top: 20px;
    }
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

function Jabocar() {
  return (
    <MainContainer>
      <TopSection>
        <Title>자보카 네트워크</Title>
        <Description>2017년에 설립된 중소기업 (주)에이치비메디는</Description>
        <Description>
          한방병원, 병의원을 상대로 각 분야별 의료컨설팅, 광고마케팅 사업을
          진행하고 있습니다.
        </Description>
      </TopSection>
      <StickySection>
        <StickyInner>
          <StickyTitle>자보카 네트워크</StickyTitle>
          <StickyUl>
            <StickyLi>
              <StickyIcon src={telIconImg} />
              <StickyListDiv>
                <Description>문의전화</Description>
                <Description>02-324-2210</Description>
              </StickyListDiv>
            </StickyLi>
            <StickyLi>
              <StickyIcon src={emailIconImg} />
              <StickyListDiv>
                <Description>이메일문의</Description>
                <Description>info@hbmedi.kr</Description>
              </StickyListDiv>
            </StickyLi>
            <StickyLi>
              <StickyIcon src={faxIconImg} />
              <StickyListDiv>
                <Description>팩스</Description>
                <Description>02-3144-0720</Description>
              </StickyListDiv>
            </StickyLi>
          </StickyUl>
        </StickyInner>
      </StickySection>
      <Section img={upImg}>
        <FirstSectionInner>
          <img src={viralImg} alt="바이럴마케팅" />
          <Description>의료기관 마케팅은 누구나 할 수 있지만</Description>
          <Description>누구나 올바르게 잘 하진 못합니다.</Description>
        </FirstSectionInner>
        <FirstSectionBottom>
          <FirstSectionInnerBox>
            <FirstSectionInnerBoxTitle>
              한의원 네트워크
            </FirstSectionInnerBoxTitle>
            <FirstSectionInnerBoxDescription>
              자보카 네트워크는 교통사고로 인한
            </FirstSectionInnerBoxDescription>
            <FirstSectionInnerBoxDescription>
              상해를 중점적으로 치료하는
            </FirstSectionInnerBoxDescription>
            <FirstSectionInnerBoxDescription>
              전국의 한의원들이 모인
            </FirstSectionInnerBoxDescription>
            <FirstSectionInnerBoxDescription>
              교통사고한의원 네트워크 입니다.
            </FirstSectionInnerBoxDescription>
          </FirstSectionInnerBox>
          <FirstSectionInnerBox>
            <FirstSectionInnerBoxTitle>높은 재연장</FirstSectionInnerBoxTitle>
            <FirstSectionInnerBoxDescription>
              자보카는 원장님들의 추천과
            </FirstSectionInnerBoxDescription>
            <FirstSectionInnerBoxDescription>
              높은 재연장률로 보답합니다.
            </FirstSectionInnerBoxDescription>
            <FirstSectionInnerBoxDescription>
              수년간의 노하우로 투자 이상의
            </FirstSectionInnerBoxDescription>
            <FirstSectionInnerBoxDescription>
              한의원 매출을 올리고 있습니다.
            </FirstSectionInnerBoxDescription>
          </FirstSectionInnerBox>
          <FirstSectionInnerBox>
            <FirstSectionInnerBoxTitle>
              한의원 네트워크
            </FirstSectionInnerBoxTitle>
            <FirstSectionInnerBoxDescription>
              내원률을 높이기 위해서는
            </FirstSectionInnerBoxDescription>
            <FirstSectionInnerBoxDescription>
              마케팅으로 환자가 편해야 합니다.
            </FirstSectionInnerBoxDescription>
            <FirstSectionInnerBoxDescription>
              한의원뿐만 아니라 환자의 신뢰를
            </FirstSectionInnerBoxDescription>
            <FirstSectionInnerBoxDescription>
              높이는 방향으로 진행돼야 합니다.
            </FirstSectionInnerBoxDescription>
          </FirstSectionInnerBox>
        </FirstSectionBottom>
      </Section>
      <Section>
        <SecondSectionInner>
          <img src={brandcareImg} alt="브랜드케어" />
          <FirstSectionInnerBoxDescription>
            바이럴부터 브랜딩까지
          </FirstSectionInnerBoxDescription>
          <FirstSectionInnerBoxDescription>
            의료기관에 적합한 콘텐츠만 사용하여 진행
          </FirstSectionInnerBoxDescription>
          <SecondSectionInnerBoxWrapper>
            <SecondSectionInnerBox>
              <Description>
                고객사 맞춤형으로 마케팅 전략을 구성한 후, 검색에 노출 되게 하는
                바이럴 작업
              </Description>
            </SecondSectionInnerBox>
            <SecondSectionInnerBox>
              <Description>
                브랜드의 가치를 높여 신뢰를 쌓아 나가는 브랜딩
              </Description>
            </SecondSectionInnerBox>
            <SecondSectionInnerBox>
              <Description>
                '브랜드 블로그' 운영을 통한 흡입력 있는 전문 의료 포스팅 →
                브랜드 가치 상승
              </Description>
            </SecondSectionInnerBox>
          </SecondSectionInnerBoxWrapper>
          <img src={naverImg} alt="네이버" />
          <Description>네이버 브랜드 케어 블로그 운영</Description>
        </SecondSectionInner>
      </Section>
      <Section color={"#F2F6FF"}>
        <ThirdSectionInner>
          <img src={lawImg} alt="의료법 준수" />
          <Description>브랜드 가치를 높이는 브랜드 마케팅</Description>
          <div>
            <Description>
              자체적으로 진행하는 의료법 교육으로 의료법을 1순위로 지키며
            </Description>
            <Description>눈에 띄게 하는 것만 생각하는 것이 아닌 </Description>
            <Description>
              그 속에 고객사의 가치를 담아내는 수준 높은 브랜드 마케팅
            </Description>
          </div>
          <img src={marketingImg} alt="의료 마케팅" />
        </ThirdSectionInner>
      </Section>
      <Section img={purpleImg}>
        <FourthSectionInner>
          <img src={keywordImg} alt="네이버 검색 키워드" />
          <Description>
            네이버 통합검색에서 한의원 주요 키워드 선별 후 상위 노출
          </Description>
          <div>
            <Description>
              ‘가맹점별 지역+교통사고 관련단어’ 조합 등 키워드로
            </Description>
            <Description>
              잠재 환자들에게 쉽게 검색될 수 있도록 상단 노출을 보장합니다.
            </Description>
          </div>
          <FourthSectionInnerBoxWrapper>
            <FourthSectionInnerBox>
              <img src={keywordImg1} alt="네이버 검색 키워드" />
              <img src={keywordImg2} alt="네이버 검색 키워드" />
              <img src={keywordImg3} alt="네이버 검색 키워드" />
            </FourthSectionInnerBox>
            <Description>네이버 'VIEW 로직' 최상단 노출</Description>
          </FourthSectionInnerBoxWrapper>
        </FourthSectionInner>
      </Section>
      <BannerSection img={competitionImg}>
        <img src={comMarketingImg} alt="비교 마케팅" />
        <Description>
          인근 지역 유동인구와 경쟁 업체 분석을 통해 유입 환수를
        </Description>
        <Description>늘리기 위한 공격적 바이럴 마케팅</Description>
      </BannerSection>
      <Section>
        <FifthSectionInner>
          <img src={pageImg1} alt="자체 페이지" />
          <div>
            <img src={pageImg} alt="자체 페이지" />
            <Description>자보카 대표 홈페이지 내</Description>
            <Description>가독성 좋은 한의원 광고 랜딩페이지 제작</Description>
          </div>
        </FifthSectionInner>
      </Section>
      <Section color={"#f2f6ff"}>
        <SixthSectionInner>
          <div>
            <img src={postingImg} alt="" />
            <Description>트랜드에 맞추어 매월 블로그에 들어가는</Description>
            <Description>포스팅 이미지가 새롭게 제작 됩니다.</Description>
            <Description>
              ※ 이해를 돕기 위해 만들어진 이미지 입니다.
            </Description>
          </div>
          <img src={postingImg1} alt="네이버 포스팅" />
        </SixthSectionInner>
      </Section>
      <NavDiv to="/brand/jabocar">
        <CenterContents>
          <NavBox>자보카네트워크 자세히 보기</NavBox>
        </CenterContents>
      </NavDiv>
    </MainContainer>
  );
}

export default Jabocar;
