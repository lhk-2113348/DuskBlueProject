import styled from "styled-components";

const StyledHr = styled.hr`
  width: ${(props) => props.$width || "100%"};
  border-top: ${(props) => props.$borderWidth || "0.5px"} solid
    ${(props) => props.$borderColor || "black"};
  margin: ${(props) => props.$margin || "10px 0px"};
`;
const CommonHr = ({ $width, $borderWidth, $borderColor, $margin }) => {
  return (
    <StyledHr
      $width={$width}
      $borderWidth={$borderWidth}
      $borderColor={$borderColor}
      $margin={$margin}
    />
  );
};

export default CommonHr;
