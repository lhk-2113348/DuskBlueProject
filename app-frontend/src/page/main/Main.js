import Banner from "../../common/Banner";
import CommonRoot from "../../common/CommonRoot";
import MainMenu from "./MainMenu";
import Coffee from "../../images/Logo/MainCoffee.png";
import NonCoffee from "../../images/Logo/MainNonCoffee.png";
import Alcoholic from "../../images/Logo/MainAlcoholic.png";
import Dessert from "../../images/Logo/MainDessert.png";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 300px 40px;
  align-items: center;
  min-height: 100vh;
  @media (max-width: 1024px){
  padding:150px 20px
  }
  @media (max-width: 768px) {
    padding: 100px 15px;
  }
     @media (max-width: 480px) {
    padding: 0px 10px;
    margin-bottom: 20px;
    margin-top: 35%;
  }
`;
const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  width: 100%;
  place-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;
function Main() {
  const navigate = useNavigate();
  const handleClick = (category) => {
    navigate(`/menu/${category}`);
  };

  return (
    <CommonRoot>
      <MainContainer>
        <Banner />
        <MenuWrapper>

        <MainMenu
          imgSrc={Coffee}
          alt="coffee"
          heading="커피"
          subHeading="COFFEE"
          description="하루의 무게 속 진정성 있는 위로"
          onClick={() => handleClick("beverage")} // Coffee 선택 시 category와 subCategory를 지정
          width="30%"
          fontSize="18px"
        />
        <MainMenu
          imgSrc={NonCoffee}
          alt="nonCoffee"
          heading="논커피"
          subHeading="Non-coffee"
          description="하루의 분주함 속 마음의 안식"
          onClick={() => handleClick("beverage")} // NonCoffee 선택 시 category와 subCategory를 지정
          fontSize="18px"
          width="30%"
        />
        <MainMenu
          imgSrc={Alcoholic}
          alt="alcoholic"
          heading="주류 "
          subHeading="Alcoholic drinks"
          description="한잔으로 찾는 마음의 고요함"
          onClick={() => handleClick("beverage")} // Alcoholic drinks 선택 시 category와 subCategory를 지정
          fontSize="18px"
          width="30%"
        />
        <MainMenu
          imgSrc={Dessert}
          alt="dessert"
          heading="디저트"
          subHeading="Dessert"
          description="달콤함으로 찾는 마음의 쉼터"
          onClick={() => handleClick("dessert")}
          fontSize="18px"
          width="30%"
        />
                </MenuWrapper>

      </MainContainer>
    </CommonRoot>
  );
}

export default Main;
