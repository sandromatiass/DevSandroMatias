import { ReactNode, createContext, useState, useEffect } from "react";
import i18n from "../../languages/i18n";

interface LanguageContextType {
  selectedLanguage: string;
  changeLanguage: (value: string) => void;
}

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    window.localStorage.getItem("language") || "en"
  );

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage).catch((err) => console.log(err));
  }, [selectedLanguage]);

  const changeLanguage = (value: string) => {
    setSelectedLanguage(value);
    window.localStorage.setItem("language", value);
    i18n.changeLanguage(value).catch((err) => console.log(err));
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;