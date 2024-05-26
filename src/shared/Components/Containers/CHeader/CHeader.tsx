import Navbar, { themeChangeProps } from "../../Navbar/Navbar";


const CHeader = ({themeChanger}: themeChangeProps) => {
  return (
    <Navbar themeChanger={themeChanger}/>
  )
};

export default CHeader;