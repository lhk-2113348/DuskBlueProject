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

function Store() {
  const navermaps = useNavermaps();

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
          defaultCenter={new navermaps.LatLng(37.528916, 126.899543)}
          defaultZoom={20}
        >
          <Marker position={new navermaps.LatLng(37.528916, 126.899543)} />
        </NaverMap>
      </MapDiv>
    </CommonRoot>
  );
}

export default Store;
