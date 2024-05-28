import { useState, useEffect } from "react";
import useLanguage from "../../Utils/Hooks/useLanguage";

type LanguageValue = string;

const ButtonTranslate = () => {
  const { selectedLanguage, changeLanguage } = useLanguage();
  
  const [checkedLanguage, setCheckedLanguage] = useState(() => {
    const localLanguage = window.localStorage.getItem("language");
    return localLanguage || selectedLanguage;
  });

  const handleLanguageChange = (value: LanguageValue) => {
    changeLanguage(value);
    setCheckedLanguage(value);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="en"
        onChange={() => handleLanguageChange("en")}
        checked={checkedLanguage === "en"}
      />
      <label htmlFor="english">English</label>

      <input 
      type="checkbox"
      id="pt-Br"
      onChange={() => handleLanguageChange("ptBr")}
      checked={checkedLanguage === "ptBr"}
      />
      <label htmlFor="portugues">Portugues</label>
    </div>

  )
};

export default ButtonTranslate;