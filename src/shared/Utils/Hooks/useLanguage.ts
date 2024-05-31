import { useContext, useEffect } from "react";
import LanguageContext from "../Context/LanguageContext";
import i18n from "../languages/i18n";

const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  const { selectedLanguage } = context;

  useEffect(() => {
    const localLanguage = window.localStorage.getItem("language");
    if (localLanguage && localLanguage !== selectedLanguage) {
      i18n.changeLanguage(localLanguage).catch((err) => {
        console.log(err);
      });
      console.log("Language retrieved from localStorage:", localLanguage);
    }
  }, [selectedLanguage]);

  return context;
};

export default useLanguage;
