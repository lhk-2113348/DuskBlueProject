import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Box, Radio } from "@mui/material";

export default function SubMenuTab({
  selectedTab,
  onSubMenuChange,
  checkboxItems,
  width = "120%",
  border = "transparent",
  borderRadius = "20px",
  color = "black",
  selectedColor = "D95F03",
  marginLeft = "0px",
}) {
  const [selectedValue, setSelectedValue] = React.useState("전체");
  const handleChange = (event) => {
    const newValue = event.target.value;
    const updatedValue = newValue === "전체" ? "" : newValue; // 전체 선택 시 빈 문자열로 설정
    setSelectedValue(updatedValue);
    onSubMenuChange(updatedValue); // 부모로 상태 전달
  };
  const itemsToDisplay = checkboxItems[selectedTab] || [];

  return (
    <Box>
      <FormControl
        component="fieldset"
        sx={{
          border: { border },
          padding: "20px",
          borderRadius: { borderRadius },
          width: { width },
          marginLeft: { marginLeft },
        }}
      >
        <FormGroup
          aria-label="position"
          sx={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {itemsToDisplay.map((items, index) => (
            <FormControlLabel
              key={index}
              value={items.value}
              control={
                <Radio
                  checked={
                    selectedValue === items.value ||
                    (selectedValue === "" && items.value === "전체")
                  }
                  onChange={handleChange}
                  sx={{
                    transform: "scale(2.0)",
                    color:
                      selectedValue === items.value ||
                      (selectedValue === "" && items.value === "전체")
                        ? { selectedColor }
                        : "",
                    "&.Mui-checked": {
                      color: { selectedColor }, // 선택된 항목에 주황색을 적용
                    },
                  }}
                />
              }
              label={items.label}
              labelPlacement="end"
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontSize: "30px",
                  marginLeft: "20px",
                },
                marginRight: "100px",
                color: { color },
              }}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
}
