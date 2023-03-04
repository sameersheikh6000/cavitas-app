import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AllTab from './AllTab';
import EmployerTab from './EmployerTab';
import MemberTab from './MemberTab';
import BrokerTab from './BrokerTab';

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <Tab className='faq__tabs__tabsLabel' label="All" {...a11yProps(0)} />
          <Tab className='faq__tabs__tabsLabel' label="For Employers" {...a11yProps(1)} />
          <Tab className='faq__tabs__tabsLabel' label="For Members" {...a11yProps(2)} />
          <Tab className='faq__tabs__tabsLabel' label="For Brokers" {...a11yProps(3)} />
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
    </Box >
  );
}
