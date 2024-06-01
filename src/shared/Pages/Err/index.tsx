import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <h2>{t("Página não Encontrada.")}</h2>
  )
};

export default NotFound;