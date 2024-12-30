import styled from "styled-components";
import Banner from "../../common/Banner";
import CommonRoot from "../../common/CommonRoot";
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";

const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: bold;
  color: ${(props) => props.theme.color.black};
  margin-bottom: 10px;
`;
const SubHeading = styled.h2`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: bold;
  color: ${(props) => props.theme.color.black};
  margin-bottom: 10px;
`;

function Store() {
  const naverMaps = useNavermaps();

  return (
    <CommonRoot>
      <Banner />
      <Heading>Store</Heading>

      <MapDiv
        style={{
          height: 900,
        }}
      >
        <NaverMap
          defaultCenter={new naverMaps.LatLng(37.528916, 126.899543)}
          defaultZoom={20}
        >
          <Marker position={new naverMaps.LatLng(37.528916, 126.899543)} />
        </NaverMap>
      </MapDiv>
      <SubHeading>주소 : 서울시 영등포구 당산로 38길 10 2층</SubHeading>
    </CommonRoot>
  );
}

export default Store;
