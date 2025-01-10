import styled from "styled-components";

export const WholeContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 20px;
`;

export const TitleContainer = styled.div`
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.theme.color.white};
`;
