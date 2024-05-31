import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./shared/Pages/Home";
import ArticlesPage from "./shared/Pages/Articles"; 

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/Articles" element={ <ArticlesPage/> } />
      </Routes>
    </BrowserRouter>
  )
};

export default RoutesApp;