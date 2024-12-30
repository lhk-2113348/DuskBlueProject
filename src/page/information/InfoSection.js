import styled from "styled-components";

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
`;

const Emoji = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
`;

const InfoText = styled.p`
  font-size: 24px;
  color: ${(props) => props.theme.color.black};
`;
const InfoSection = ({ emojiSrc, text }) => {
  return (
    <InfoContainer>
      <Emoji src={emojiSrc} alt="emoji" />
      <InfoText>{text}</InfoText>
    </InfoContainer>
  );
};
export default InfoSection;
