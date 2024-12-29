import styled from "styled-components";
import Banner from "../../common/Banner";
import CommonRoot from "../../common/CommonRoot";
import MainMenu from "./MainMenu";
import Coffee from "../../images/Logo/MainCoffee.png";
import NonCoffee from "../../images/Logo/MainNonCoffee.png";
import Alcoholic from "../../images/Logo/MainAlcoholic.png";
import Dessert from "../../images/Logo/MainDessert.png";
import MainMenu2 from "./MainMenu2";
const StyledWrap = styled.div`
  width: ${(props) => props.theme.display.lg};
`;
function main() {
  return (
    <CommonRoot>
      <StyledWrap>
        <Banner />
        <MainMenu
          imgSrc={Coffee}
          alt="coffee"
          heading="Coffee"
          subHeading="하루의 무게 속 진정성 있는 위로"
          description="커피는 일상의 깊이를 더하는 고요한 순간 <br />
                       매일의 피로를 덜어주는 진정성 있는 한잔"
        />
        <MainMenu2
          imgSrc={NonCoffee}
          alt="nonCoffee"
          heading="Non-coffee"
          subHeading="하루의 분주함 속 마음의 안식"
          description="일상의 편암함과 여유를 선사하는 특별한 순간 <br/>
매일의 작은 위로가 되는 그 한잔"
        />
        <MainMenu
          imgSrc={Alcoholic}
          alt="alcoholic"
          heading="Alcoholic drinks"
          subHeading="한잔으로 찾는 마음의 고요함"
          description="일상의 흐름 속 여유를 불어 넣는 예술적 순간 <br />
                       매일의 고단한 시간에 스며드는 그 한잔
"
        />
        <MainMenu2
          imgSrc={Dessert}
          alt="dessert"
          heading="Dessert"
          subHeading="달콤함으로 찾는 마음의 쉼터"
          description="일상의 순간 여유와 따듯함을 선사하는 한입<br/>
삶을 더 풍성하고 달콤하게 만드는 방식"
        />
      </StyledWrap>
    </CommonRoot>
  );
}

export default main;
