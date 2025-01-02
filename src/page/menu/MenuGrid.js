import { Typography } from "@mui/material";
import styled from "styled-components";

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin: 20px;
`;
const Card = styled.div`
  width: 200px;
  height: 250px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  cursor: pointer;

  &:hover {
    transform: rotateY(180deg);
  }
`;
const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: rotateY(0deg);
`;

const CardBack = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  backface-visibility: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  transition: opacity 0.5s ease-in-out;
  transform: rotateY(180deg);
  border-radius: 10px;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  max-width: 100%;
`;

const InfoSection = ({ imgSrc, name, description }) => {
  return (
    <GridItem>
      <Card>
        <CardFront>
          <Image src={imgSrc} alt={name} />
          <Typography color="black" fontSize="25px" sx={{ marginTop: "10px" }}>
            {name}
          </Typography>
        </CardFront>
        <CardBack>
          <Typography variant="body2" fontSize="25px">
            {description}
          </Typography>
        </CardBack>
      </Card>
    </GridItem>
  );
};
const MenuGrid = ({ selectedSubMenu, items }) => {
  const filteredItems =
    selectedSubMenu && selectedSubMenu !== ""
      ? items.filter((item) => item.category === selectedSubMenu)
      : items;

  if (!items || items.length === 0) {
    return <div>No items available</div>; // 아이템이 없을 때 표시할 메시지
  }
  return (
    <GridContainer>
      {filteredItems.map((item, index) => (
        <InfoSection
          key={index}
          imgSrc={item.imgSrc}
          name={item.name}
          description={item.description}
        />
      ))}
    </GridContainer>
  );
};
export default MenuGrid;
