import { useMemo, useState } from "react";
import { menuItems } from "../menu/MenuItems";

import CommonRoot from "../../common/CommonRoot";
import MenuGrid from "./MenuGrid";
import MenuTab from "./MenuTab";
import SubMenuTab from "./SubMenuTab";
const tabCheckboxItems = {
  0: [
    // Beverage
    { label: "커피", value: "coffee" },
    { label: "논커피", value: "nonCoffee" },
    { label: "칵테일&와인", value: "cockTailWine" },
    { label: "위스키&맥주", value: "whiskeyBeer" },
  ],
  1: [
    //Dessert
    { label: "레어크림치즈 & 케이크&아이스크림", value: "dessert1" },
    { label: "티라미수&스콘&크로플&안주", value: "dessert2" },
  ],
  2: [
    //Season
    { label: "봄&가을", value: "spring" },
    { label: "여름", value: "summer" },
    { label: "겨울", value: "winter" },
  ],
};
function Menu() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedSubMenu, setSelectedSubmenu] = useState("");

  const handleTabChange = (newTab) => {
    setSelectedTab(newTab);
    setSelectedSubmenu("");
  };
  const handleSubMenuChange = (value) => {
    setSelectedSubmenu(value);
  };
  const filteredItems = useMemo(() => {
    const items =
      selectedTab === 0
        ? menuItems.beverage
        : selectedTab === 1
        ? menuItems.dessert
        : selectedTab === 2
        ? menuItems.season
        : [];
    return selectedSubMenu && selectedSubMenu !== ""
      ? items.filter((item) => item.category === selectedSubMenu)
      : items;
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
