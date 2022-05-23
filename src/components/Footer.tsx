import styled from "styled-components";

import footerLogoImg from "../img/footerLogo.png";

const FooterLayout = styled.div`
  height: 295px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  font-size: 14px;
  letter-spacing: -0.28px;
  color: #333333;
`;

const FooterImg = styled.img``;

const FooterContents = styled.div`
  width: 1280px;
`;

const FooterSection = styled.div`
  display: flex;
  margin-top: 36px;
  margin-bottom: 20px;
  & p {
    margin: 0;
  }
`;
const InfoDiv = styled.div`
  &:first-child {
    margin-right: 253px;
  }
`;
function Footer() {
  return (
    <FooterLayout>
      <FooterContents>
        <FooterImg src={footerLogoImg} />
        <FooterSection>
          <InfoDiv>
            <p>주식회사 에이치비메디 대표이사 김동희</p>
            <p>주소 : 서울특별시 동대문구 왕산로 211-1, 3층 (청량리동)</p>
            <p>
              사업자번호 : 838-87-00691 | TEL : 02-324-2210 | FAX : 02-3144-0720
              | E-mail : info@hbmedi.kr
            </p>
          </InfoDiv>
          <InfoDiv>
            <p>개인정보처리방침</p>
            <p>이용약관</p>
          </InfoDiv>
        </FooterSection>
        <p>Copyright &copy; 2022 HBmedi. All right reserved.</p>
      </FooterContents>
    </FooterLayout>
  );
}

export default Footer;
