import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import { USER_STORAGE_KEY } from "../../config/helpers/variables";

import { useTranslation } from "react-i18next";
import i18n from "../../config/helpers/i18n";

export default function SidebarMenu() {
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();
  const user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));
  const currentPathname = window.location.pathname;
  const handleLanguageChange = (language) => {
    const newPathname = currentPathname.replace(/\/[a-z]{2}$/, `/${language}`);
    navigate(newPathname);
    i18n.changeLanguage(language);
    window.location.reload();
  };

  React.useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <IconButton {...bindTrigger(popupState)}>
            <MenuIcon style={{ color: "#DD3333" }} />
          </IconButton>
          {/* <Box
                className="appbar__imageBox"
                onClick={() => navigate(`/${lang === "pl" ? lang : "en"}`)}
              >
                <img
                  className="appbar__imageBox__image"
                  src={require("../../assets/Navbar-logo.png")}
                  alt=""
                />
              </Box> */}
          <Menu {...bindMenu(popupState)} style={{display:"flex", justifyContent:"center", textAlign:"center"}}>
            <MenuItem onClick={popupState.close}>
              <Link
                className="appbar__menuLink"
                to={`/${lang === "pl" ? lang : "en"}`}
              >
                {" "}
                {t("nav.home")}
              </Link>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <Link
                className="appbar__menuLink"
                to={`/${lang === 'pl' ? 'o-nas/pl' : 'about/en'}`}
              >
                {" "}
                {t("nav.aboutUs")}
              </Link>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <Link
                className="appbar__menuLink"
                to={`/faq/${lang === "pl" ? "pl" : "en"}`}
              >
                {t("nav.faq")}
              </Link>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <Link
                className="appbar__menuLink"
                to={`/claims/${lang === "pl" ? "pl" : "en"}`}
              >
                {t("nav.claims")}
              </Link>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <Link
                className="appbar__menuLink"
                to={`/broker/${lang === "pl" ? "pl" : "en"}`}
              >
                {t("nav.brokerLogin")}
              </Link>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <Link
                className="appbar__menuLink"
                to={`/employ/${lang === "pl" ? "pl" : "en"}`}
              >
                {t("nav.employLogin")}
              </Link>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <Link
                className="appbar__menuLink"
                to={`/member/${lang === "pl" ? "pl" : "en"}`}
              >
                {t("nav.memberLogin")}
              </Link>
            </MenuItem>
            <select onChange={(e) => handleLanguageChange(e.target.value)}>
              <option value="">{t("nav.selectLang")}</option>
              <option value="en">{t("nav.english")}</option>
              <option value="pl">{t("nav.polish")}</option>
            </select>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
