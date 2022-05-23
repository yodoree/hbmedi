import styled from "styled-components";

import {
  CenterContents,
  Description,
  MainContainer,
  Title,
} from "../utils/styled";

import topImg from "../img/map.png";
import { useEffect } from "react";

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
    margin-bottom: 12px;
  }
`;

const MapSection = styled.div`
  padding-top: 100px;
  height: 970px;
  display: flex;

  align-items: center;
  flex-direction: column;
  position: relative;
  & h1 {
    margin-bottom: 50px;
  }
`;

const MapBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 264px;
  width: 1080px;
  background-color: #2e3772;
  position: absolute;
  top: 605px;
  z-index: 999;
  color: #fff;

  & div {
    margin-top: 30px;
    display: flex;
  }
`;

const MapSpan = styled.span`
  display: block;
  font-size: 24px;
  letter-spacing: -1.44px;

  & b {
    font-weight: bolder;
  }

  &:last-child {
    margin-left: 40px;
  }
`;

const SubwaySection = styled(CenterContents)`
  height: 366px;
  border-top: 1px solid #d1d1d1;
  padding-left: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  & > div {
    margin-bottom: 5px;
    display: flex;
    align-items: center;
  }

  & > div:last-child {
    margin-bottom: 0;
  }
`;

const SubwayBox = styled.div`
  width: 72px;
  height: 28px;
  letter-spacing: -0.96px;
  color: #ffffff;
  background: ${(props) => props.color};
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubwaySpan = styled.span`
  display: block;
  font-size: 18px;
  letter-spacing: -1.08px;
  margin-left: 7px;
`;

const BusTitle = styled.h3`
  font-size: 24px;
  letter-spacing: -1.44px;
  color: #3f518b;
  margin-bottom: 10px;
  font-weight: bold;
`;

const BusSection = styled(CenterContents)`
  height: 341px;
  border-top: 1px solid #d1d1d1;
  padding-left: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  & span {
    margin: 0;
  }
`;

const BoldText = styled.span`
  color: ${(props) => props.color};
  font-weight: bold;
`;

declare global {
  interface Window {
    kakao: any;
  }
}

// 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다

function Map() {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(37.5811665, 127.0460551),
      level: 3,
    };
    let map = new window.kakao.maps.Map(container, options);

    // 마커를 생성하고 지도에 표시
    let marker = new window.kakao.maps.Marker({
      map: map,
      position: new window.kakao.maps.LatLng(37.5811665, 127.0460551),
    });

    // const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

    // window.kakao.maps.event.addListener(marker, "mouseover", function () {
    //   var content =
    //     '<div class="wrap" style="color:black;padding: 10px 10px;">' +
    //     '    <div class="info">' +
    //     '        <div class="title">' +
    //     "            주식회사 에이치비메디" +
    //     "        </div>" +
    //     '        <div class="body">' +
    //     '            <div class="desc">' +
    //     "            </div>" +
    //     "        </div>" +
    //     "    </div>" +
    //     "</div>";

    //   infowindow.setContent(content);
    //   infowindow.open(map, marker);
    // });

    // window.kakao.maps.event.addListener(marker, "mouseout", function () {
    //   infowindow.close();
    // });
  }, []);
  return (
    <MainContainer>
      <TopSection>
        <Title>찾아 오시는 길</Title>
        <Description>찾아 오시는 방법을 안내해 드리겠습니다.</Description>
      </TopSection>
      <MapSection>
        <Title>(주)에이치비메디 오시는 길</Title>
        <div className="App">
          <div id="map" style={{ width: "1280px", height: "450px" }} />
        </div>
        <MapBottom>
          <MapSpan>
            서울특별시 동대문구 왕산로 211-1, 무광빌딩 3층 (청량리동)
          </MapSpan>
          <div>
            <MapSpan>
              <b>TEL</b> 02-324-2210
            </MapSpan>
            <MapSpan>
              <b>FAX</b> 02-3144-0720
            </MapSpan>
          </div>
        </MapBottom>
      </MapSection>
      <SubwaySection>
        <BusTitle>지하철로 오시는 길</BusTitle>
        <div>
          <SubwayBox color="#0D347F">1호선</SubwayBox>
          <SubwaySpan>
            <BoldText color="#0D347F">1호선 청량리역</BoldText> 3번 출구 |
            롯데리아 방향
          </SubwaySpan>
        </div>
        <div>
          <SubwayBox color="#178C72">경춘선</SubwayBox>
          <SubwaySpan>
            <BoldText color="#178C72">경춘선 청량리역</BoldText> 1번 출구 |
            청량리환승센터 건너 롯데리아 방향
          </SubwaySpan>
        </div>
        <div>
          <SubwayBox color="#FABE00">수인분당</SubwayBox>
          <SubwaySpan>
            <BoldText color="#FABE00">수인분당선 청량리역</BoldText> 1번 출구 |
            청량리환승센터 건너 롯데리아 방향
          </SubwaySpan>
        </div>
        <div>
          <SubwayBox color="#76B69B">경의중앙</SubwayBox>
          <SubwaySpan>
            <BoldText color="#76B69B">경의중앙선 청량리역</BoldText> 1번 출구 |
            청량리환승센터 건너 롯데리아 방향
          </SubwaySpan>
        </div>
      </SubwaySection>
      <BusSection>
        <BusTitle>버스로 오시는 길</BusTitle>
        <SubwaySpan>
          <BoldText color="#0D347F">청량리역환승센터</BoldText> 에서 롯데리아
          방향
        </SubwaySpan>
      </BusSection>
    </MainContainer>
  );
}

export default Map;
