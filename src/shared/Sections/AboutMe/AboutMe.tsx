import { useTranslation } from "react-i18next";



const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <p>{t("teste")}</p>
  )
}

export default AboutMe;