import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar'
import SidebarDrawer from '../Sidebar/SidebarDrawer'
import SidebarMenu from '../Sidebar/SidebarMenu';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ADMIN_STORAGE_KEY, USER_STORAGE_KEY } from '../../config/helpers/variables';
import { useTranslation } from 'react-i18next';
import i18n from '../../config/helpers/i18n';


function Navbar() {
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();
  const user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));
  const admin = JSON.parse(sessionStorage.getItem(ADMIN_STORAGE_KEY));
  const currentPathname = window.location.pathname;


  const handleLanguageChange = (language) => {
    const newPathname = currentPathname.replace(/\/[a-z]{2}$/, `/${language}`);
    navigate(newPathname);
    i18n.changeLanguage(language);window.location.reload();
  };

  React.useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, [])

  return (
    <>
      {user?.data?.role || admin?.data?.role ? (
        <section className="navbar">
          <div className="navbar__sidebarLarge">
            <Sidebar />
          </div>
          <div className="navbar__sidebarDrawers">
            <div className="navbar__sidebarDrawers__box">
              <SidebarDrawer />
              <header className="navbar__sidebarDrawers__box__heading">
                Cavitas
              </header>
            </div>
          </div>

        </section>
      ) : (
        <AppBar position="static" className="appbar">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box className="appbar__imageBox" onClick={() => navigate(`/${lang === "pl" ? lang : "en"}`)}>
                <img
                  className="appbar__imageBox__image"
                  src={require("../../assets/Navbar-logo.png")}
                  alt=""
                />
              </Box>
              <Box className="appbar__linksBox">
                <div className="appbar__linksBox__links">
                  <Link to={`/about/${lang === "pl" ? "pl" : "en"}`} className="appbar__linksBox__links__link">
                    {t("nav.aboutUs")}
                  </Link>
                  <Link className="appbar__linksBox__links__link" to={`/faq/${lang === "pl" ? "pl" : "en"}`}>
                   {t("nav.faq")}
                  </Link>
                  <Link className="appbar__linksBox__links__link" to={`/claims/${lang === "pl" ? "pl" : "en"}`}>
                  {t("nav.claims")}
                  </Link>
                  <Link className="appbar__linksBox__links__link" to={`/broker/${lang === "pl" ? "pl" : "en"}`}>
                  {t("nav.brokerLogin")}
                  </Link>
                  <Link className="appbar__linksBox__links__link" to={`/employ/${lang === "pl" ? "pl" : "en"}`}>
                  {t("nav.employLogin")}
                  </Link>
                  <Link className="appbar__linksBox__links__link" to={`/member/${lang === "pl" ? "pl" : "en"}`}>
                  {t("nav.memberLogin")}
                  </Link>
                  <Link className="appbar__linksBox__links__link" to={"/Shop"}>
                 <ShoppingCartIcon />
                  </Link>
                  <select onChange={(e) => handleLanguageChange(e.target.value)}>
                  <option value="">{t("nav.selectLang")}</option>
                  <option value="en">{t("nav.english")}</option>
                  <option value="pl">{t("nav.polish")}</option>
                </select>

                </div>


              </Box>
              <Box className="appbar__sidebar1">
                <IconButton>
                  <ShoppingCartOutlinedIcon
                    className="appbar__sidebar1__icon"
                    onClick={() => navigate("/cart")}
                  />
                </IconButton>
                <div>
                  <SidebarMenu />
                </div>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </>
  );
}
export default Navbar;
