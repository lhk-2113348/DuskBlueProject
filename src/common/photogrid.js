import { Typography } from "@mui/material";
import styled from "styled-components";
import LemonCake from "../images/Menu/LemonCake.png";
import EarlGrey from "../images/Menu/EarlGreyCake.png";
import CarrotCake from "../images/Menu/CarrotCake.png";
import YellowCake from "../images/Menu/YellowCheeseCake.png";
import MalChaCake from "../images/Menu/MalchaCake.png";
import StrawberryCake from "../images/Menu/StrawBerryCake.png";

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 20px;
`;
const Image = styled.img`
  width: 180px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  max-width: 100%;
`;

const InfoSection = ({ imgSrc, name }) => {
  return (
    <GridItem>
      <Image src={imgSrc} alt={name} />
      <Typography variant="subtitle1" color="white" sx={{ marginTop: "10px" }}>
        {name}
      </Typography>
    </GridItem>
  );
};
const photoGrid = () => {
  const items = [
    { imgSrc: LemonCake, name: "레몬 파운드" },
    { imgSrc: EarlGrey, name: "얼그레이 파운드" },
    { imgSrc: CarrotCake, name: "당근" },
    { imgSrc: StrawberryCake, name: "빅토리아" },
    { imgSrc: LemonCake, name: "솔티초콜릿" },
    { imgSrc: LemonCake, name: "바스크 치즈" },
    { imgSrc: LemonCake, name: "얼그레이 바스크" },
    { imgSrc: YellowCake, name: "황치즈 바스크" },
    { imgSrc: MalChaCake, name: "흑임자 바스크" },
    { imgSrc: MalChaCake, name: "인절미 바스크" },
    { imgSrc: MalChaCake, name: "단호박 바스크" },
    { imgSrc: MalChaCake, name: "말차 바스크" },
  ];
  return (
    <GridContainer>
      {items.map((item, index) => (
        <InfoSection key={index} imgSrc={item.imgSrc} name={item.name} />
      ))}
    </GridContainer>
  );
};
export default photoGrid;
