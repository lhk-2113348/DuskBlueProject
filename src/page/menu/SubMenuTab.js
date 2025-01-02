import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Box, Radio } from "@mui/material";

export default function SubMenuTab({
  selectedTab,
  onSubMenuChange,
  checkboxItems,
}) {
  const [selectedValue, setSelectedValue] = React.useState("");
  const itemsToDisplay = checkboxItems[selectedTab] || [];

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    onSubMenuChange(event.target.value);
  };

  return (
    <Box>
      <FormControl
        component="fieldset"
        sx={{
          border: "2px solid black", // 전체 border 값 추가
          padding: "20px", // 내부 여백
          borderRadius: "20px", // 모서리 둥글게
          width: "100%",
        }}
      >
        <FormGroup
          aria-label="position"
          sx={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {itemsToDisplay.map((items) => (
            <FormControlLabel
              key={items.value}
              value={items.value}
              control={
                <Radio
                  checked={selectedValue === items.value}
                  onChange={handleChange}
                  sx={{
                    transform: "scale(2.0)",
                    color: selectedValue === items.value ? "#D95F03" : "",
                    "&.Mui-checked": {
                      color: "#D95F03",
                    },
                  }}
                />
              }
              label={items.label}
              labelPlacement="end"
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontSize: "30px",
                  marginLeft: "20px", // 레이블 글자 크기 키우기
                },
                marginRight: "100px", // 각 체크박스 사이의 간격을 넓히기
              }}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
}
