import { ReactNode, createContext, useState } from "react";
import i18n from "../../Languages/i18n";

interface LanguageContextType {
  selectedLanguage: string;
  changeLanguage: (value: string) => void;
};

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [selectedLanguage, setSelectdLanguage] = useState<string>("en");

  const changeLanguage = (value: string) => {
    setSelectdLanguage(value);
    window.localStorage.setItem("language", value)
    i18n.changeLanguage(value).catch((err) => {
      console.log(err);
    });
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, changeLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
