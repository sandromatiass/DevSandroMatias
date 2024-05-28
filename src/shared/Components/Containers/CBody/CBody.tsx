import { useTranslation } from "react-i18next";

const CBody = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t("aqui vai ficar o body")}</h2>
      <p>{t("teste para tradução")}</p>
    </>
  )
};

export default CBody;