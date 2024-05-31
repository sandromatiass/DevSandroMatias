import { useTheme } from "styled-components";

import { SNavbar, SThemeButton } from "./Navbar.styles";

import { BsSun } from 'react-icons/bs';
import { BsMoonStars } from 'react-icons/bs';

import ButtonTranslate from "../ButtonTranslate/ButtonTranslate";

export interface themeChangeProps {
  themeChanger: () => void;
}

const Navbar = ({themeChanger}: themeChangeProps) => {
  const theme = useTheme();

  return (
    <SNavbar>
      <h1>navbar</h1>
      <ButtonTranslate/>
      
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
            {window.localStorage.getItem('theme') !== 'LightMode' ? (
              <>
                <BsSun size={25} style={{ marginLeft: '0px', height: '19px' }}/>
              </>
            ) : (
              <>
                <BsMoonStars size={25} style={{ marginLeft: '0px', height: '19px' }}/>
              </>
            )}
          </div>
        </label>
       
      </SThemeButton>
    </SNavbar>
  )
};

export default Navbar;