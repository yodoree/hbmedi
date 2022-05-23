import styled from "styled-components";

import {
  CenterContents,
  Description,
  MainContainer,
  Title,
} from "../utils/styled";

import topImg from "../img/brandBe2.png";
import logoImg from "../img/brandBe1.png";
import topInnerImg from "../img/brandBe3.png";

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
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BottomSection = styled.div`
  height: 540px;
  background: #f5f7ff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & img {
    margin-bottom: 15px;
  }
`;

function BrandBe() {
  return (
    <>
      <TopSection>
        <img src={topInnerImg} />
      </TopSection>
      <DescriptionSection>
        <Description>
          매일 바르는 화장품에 건강하지 못한 성분이 포함된다면,
        </Description>
        <Description>피부는 하루하루 거칠어지고 손상되게 됩니다. </Description>
        <Description>
          비솔루션은 기초 화장원료 일지라도 피부에 좋지 않은
        </Description>
        <Description>
          화학성분을 최대한 배제하여 누구나 안심하고 바를 수 있도록
          만들었습니다.
        </Description>
      </DescriptionSection>
      <BottomSection>
        <img src={logoImg} />
        <Description>관심을 가져주셔서 감사합니다.</Description>
        <Description>Be;solution 안내 페이지는 준비중 입니다.</Description>
      </BottomSection>
    </>
  );
}

export default BrandBe;
