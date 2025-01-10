import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function MenuTab({ selectedTab, setSelectedTab }) {
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const tabStyle = {
    fontSize: "50px",
    color: "#000000",
    "&:hover": {
      color: "#D95F03",
    },
    "&.Mui-selected": {
      color: "#D95F03",
    },
  };
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper", padding: "20px" }}>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        centered
        sx={{
          height: "auto",
        }}
        indicatorColor="secondary"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#D95F03",
          },
        }}
      >
        <Tab
          label="Drinks"
          value={0}
          sx={{ marginRight: "15%", ...tabStyle }}
        />
        <Tab
          label="Dessert"
          value={1}
          sx={{ marginRight: "15%", ...tabStyle }}
        />
        <Tab label="Season" value={2} sx={{ ...tabStyle }} />
      </Tabs>
    </Box>
  );
}
