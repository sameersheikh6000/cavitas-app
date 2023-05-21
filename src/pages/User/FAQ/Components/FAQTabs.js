import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AllTab from './AllTab';
import EmployerTab from './EmployerTab';
import MemberTab from './MemberTab';
import BrokerTab from './BrokerTab';
import i18n from "../../../../config/helpers/i18n";
import { useTranslation } from "react-i18next";

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function FAQTabs() {
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
    <Box sx={{ width: '100%', minWidth: "30rem" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ style: { background: '#DD3333' } }}
          aria-label="basic tabs example"
        // textColor='black'
        >
          <Tab className='faq__tabs__tabsLabel' label={t('FAQ.FAQ_genral_title')} {...a11yProps(0)} />
          <Tab className='faq__tabs__tabsLabel' label={t("FAQ.FAQ_Employer_title")} {...a11yProps(1)} />
          <Tab className='faq__tabs__tabsLabel' label={t("FAQ.FAQ_member_title")} {...a11yProps(2)} />
          <Tab className='faq__tabs__tabsLabel' label={t("FAQ.FAQ_broker_title")} {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AllTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EmployerTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MemberTab />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <BrokerTab />
      </TabPanel>
    </Box>
  );
}
