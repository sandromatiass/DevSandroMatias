import { useTheme } from "styled-components";
import { SNavbar, SThemeButton } from "./Navbar.styles";
import { BsSun, BsMoonStars } from 'react-icons/bs';
import ButtonTranslate from "../ButtonTranslate/ButtonTranslate";
import { Link } from "react-router-dom";
import { useTheme as useThemeContext } from "../../Utils/Context/ThemeContext";

import { useTranslation } from "react-i18next";

const Navbar = () => {
  const theme = useTheme();
  const { themeChanger } = useThemeContext();
  const { t } = useTranslation();

  return (
    <SNavbar>
      <h1>navbar</h1>
      <ButtonTranslate />
      <nav>
        <ul>
          <li>
            <Link to="/"> <p>{t("Home")}</p></Link>
            <Link to="/Articles">{t("Articles")}</Link>
          </li>
        </ul>
      </nav>
      <SThemeButton>
        <label htmlFor="checkbox" className="switch">
          <input
            id="checkbox"
            type="checkbox"
            onClick={themeChanger}
            onChange={() => false}
            checked={theme.title === 'DarkMode'}
          />
          <div className="slider round">
            {theme.title === 'LightMode' ? (
              <BsSun size={25} style={{ marginLeft: '0px', height: '19px' }} />
            ) : (
              <BsMoonStars size={25} style={{ marginLeft: '0px', height: '19px' }} />
            )}
          </div>
        </label>
      </SThemeButton>
    </SNavbar>
  );
};

export default Navbar;
