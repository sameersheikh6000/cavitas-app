import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import i18n from "../../../../config/helpers/i18n";
import { useTranslation } from "react-i18next";
import BAT from "./BAT";
import PPT from "./PPT";
import CP from "./CP";
import CR from "./CR";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Alldocuments() {
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);

  return (
    <Box sx={{ width: "100%", minWidth: "30rem" }}>
      <Box sx={{ borderBottom: 0.5 }}>
        
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ style: { background: "#DD3333" } }}
          aria-label="basic tabs example"
          // textColor='black'
        >
            <Tab
            className="faq__tabs__tabsLabel"
            style={{ backgroundColor: "#fff", fontSize:"15px", fontWeight:"bold", color:"black" }}
            label="Privacy Policy"
            {...a11yProps(0)}
          />
          
           <Tab
            className="faq__tabs__tabsLabel"
            style={{ backgroundColor: "#fff", fontSize:"15px", fontWeight:"bold",color:"black" }}
            label="Cookie policy"

            {...a11yProps(1)}
          />
            <Tab
            className="faq__tabs__tabsLabel"
            style={{ backgroundColor: "#fff", fontSize:"15px", fontWeight:"bold" , color:"black" }}
            label="Complaint resolution"
            {...a11yProps(2)}
          />
         
          <Tab
            className="faq__tabs__tabsLabel"
            style={{ backgroundColor: "#fff", fontSize:"15px", fontWeight:"bold", color:"black" }}
            label="Broker agreement"
            {...a11yProps(3)}
          />
        
        
        </Tabs>
      </Box>
     
      <TabPanel
      value={value} index={0}>
        <PPT />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CR/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CP />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <BAT />
      </TabPanel>
    </Box>
  );
}
