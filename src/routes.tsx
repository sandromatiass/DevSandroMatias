/* importations routes */ 
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Pages */ 
import HomePage from "./shared/Pages/Home";
import ArticlesPage from "./shared/Pages/Articles";

/* Hooks themeMode */
import useThemeMode from "./shared/Utils/Hooks/useThemeMode";

/* Container */
import CHeader from "./shared/Components/Containers/CHeader/CHeader";


function RoutesApp() {
  const {themeChanger} = useThemeMode();


  return (
    <BrowserRouter>
      <CHeader themeChanger={themeChanger}/>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/Articles" element={ <ArticlesPage/> } />
      </Routes>
    </BrowserRouter>
  )
};

export default RoutesApp;