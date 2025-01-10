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
export const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  min-height: 300px;
  padding: 20px;
`;
