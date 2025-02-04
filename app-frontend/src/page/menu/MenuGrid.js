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
  grid-template-columns: repeat(4, 1fr);
  gap: 80px;
  margin: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 80px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 80px;
    margin: 20px 10px;
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 300px;
  height: 350px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  cursor: pointer;

  &:hover {
    transform: rotateY(180deg);
  }

  @media (max-width: 768px) {
    max-width: 250px; // 작은 화면에서 카드 크기 줄이기
    height: 300px;
  }

  @media (max-width: 480px) {
    max-width: 200px; // 모바일 화면에서 카드 크기 더 줄이기
    height: 250px;
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
  width: 100%;
  height: 100%;
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
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const InfoSection = ({ imgSrc, name, description, price, HotIce }) => {
  return (
    <GridItem>
      <Card>
        <CardFront>
          <Image src={imgSrc} alt={name} />
          <Typography color="black" fontSize="25px" sx={{ marginTop: "5px" }}>
            {name}
          </Typography>
          <Typography variant="body2" fontSize="20px" sx={{ marginTop: "1px" }}>
            {price}
          </Typography>
          <Typography variant="body2" fontSize="20px" sx={{ color: "#D95F03" }}>
            {HotIce}
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
          price={item.price}
          HotIce={item.HotIce}
        />
      ))}
    </GridContainer>
  );
};

export default MenuGrid;
