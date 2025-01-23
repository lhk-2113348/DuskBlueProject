import styled from "styled-components";

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: ${(props) => props.marginTop || "5%"};
`;

const Emoji = styled.img`
  width: 20%;
  height: 20%;
  margin-right: 5%;
`;

const InfoText = styled.p`
  font-size: ${(props) => props.fontSize || "24px"};
  color: ${(props) => props.color || props.theme.color.black};
`;
const InfoSection = ({ emojiSrc, text, color, fontSize, marginTop }) => {
  return (
    <InfoContainer marginTop={marginTop}>
      <Emoji src={emojiSrc} alt="emoji" />
      <InfoText color={color} fontSize={fontSize}>
        {text}
      </InfoText>
    </InfoContainer>
  );
};
export default InfoSection;
