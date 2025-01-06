import Banner from "../../common/Banner";
import CommonRoot from "../../common/CommonRoot";
import MainMenu from "./MainMenu";
import Coffee from "../../images/Logo/MainCoffee.png";
import NonCoffee from "../../images/Logo/MainNonCoffee.png";
import Alcoholic from "../../images/Logo/MainAlcoholic.png";
import Dessert from "../../images/Logo/MainDessert.png";
import MainMenu2 from "./MainMenu2";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const handleClick = (category) => {
    navigate(`/menu/${category}`);
  };
  return (
    <CommonRoot>
      <Banner />
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
      <MainMenu2
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
      <MainMenu2
        imgSrc={Dessert}
        alt="dessert"
        heading="디저트"
        subHeading="Dessert"
        description="달콤함으로 찾는 마음의 쉼터"
        onClick={() => handleClick("dessert")}
        fontSize="18px"
        width="30%"
      />
    </CommonRoot>
  );
}

export default Main;
