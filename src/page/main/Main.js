import styled from "styled-components";
import Banner from "../../common/Banner";
import CommonRoot from "../../common/CommonRoot";
const StyledWrap = styled.div`
  width: ${(props) => props.theme.display.lg};
`;
function main() {
  return (
    <CommonRoot>
      <StyledWrap>
        <Banner />
      </StyledWrap>
    </CommonRoot>
  );
}

export default main;
