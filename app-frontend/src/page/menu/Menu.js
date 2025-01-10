import { useEffect, useMemo, useState } from "react";
import { menuItems } from "../menu/MenuItems";
import CommonRoot from "../../common/CommonRoot";
import MenuGrid from "./MenuGrid";
import MenuTab from "./MenuTab";
import SubMenuTab from "./SubMenuTab";
import { useParams } from "react-router-dom";
const tabCheckboxItems = {
  0: [
    // Beverage
    { label: "전체", value: "" },
    { label: "커피", value: "coffee" },
    { label: "논커피", value: "nonCoffee" },
    { label: "칵테일&와인", value: "cockTailWine" },
    { label: "위스키&맥주", value: "whiskeyBeer" },
  ],
  1: [
    //Dessert
    { label: "전체", value: "" }, // 전체 탭

    { label: "레어크림치즈 & 케이크&아이스크림", value: "dessert1" },
    { label: "티라미수&스콘&크로플&안주", value: "dessert2" },
  ],
  2: [
    //Season
    { label: "전체", value: "" }, // 전체 탭

    { label: "봄&가을", value: "spring" },
    { label: "여름", value: "summer" },
    { label: "겨울", value: "winter" },
  ],
};
function Menu() {
  const { category } = useParams(); // category와 subCategory URL 파라미터 받기
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedSubMenu, setSelectedSubmenu] = useState("");

  useEffect(() => {
    // 카테고리 값에 맞는 탭을 선택
    if (category === "beverage") {
      setSelectedTab(0);
    } else if (category === "dessert") {
      setSelectedTab(1);
    } else if (category === "season") {
      setSelectedTab(2);
    }
  }, [category]);

  const handleTabChange = (newTab) => {
    setSelectedTab(newTab);
    setSelectedSubmenu("");
  };
  const handleSubMenuChange = (value) => {
    setSelectedSubmenu(value);
  };
  const filteredItems = useMemo(() => {
    let items = [];

    switch (selectedTab) {
      case 0: // Beverage 탭
        items =
          selectedSubMenu === "" || selectedSubMenu === "전체"
            ? menuItems.beverage
            : menuItems.beverage.filter(
                (item) => item.category === selectedSubMenu
              );
        break;
      case 1: // Dessert 탭
        items =
          selectedSubMenu === "" || selectedSubMenu === "전체"
            ? menuItems.dessert
            : menuItems.dessert.filter(
                (item) => item.category === selectedSubMenu
              );
        break;
      case 2: // Season 탭
        items =
          selectedSubMenu === "" || selectedSubMenu === "전체"
            ? menuItems.season
            : menuItems.season.filter(
                (item) => item.category === selectedSubMenu
              );
        break;
      default:
        items = [];
    }

    return items;
  }, [selectedTab, selectedSubMenu]);

  return (
    <CommonRoot>
      <MenuTab selectedTab={selectedTab} setSelectedTab={handleTabChange} />
      <SubMenuTab
        checkboxItems={tabCheckboxItems}
        selectedTab={selectedTab}
        onSubMenuChange={handleSubMenuChange}
      />
      <MenuGrid items={filteredItems} selectedSubMenu={selectedSubMenu} />
    </CommonRoot>
  );
}

export default Menu;
