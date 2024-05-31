import { useTranslation } from "react-i18next";

const ArticlesPage = () =>{
  const {t} = useTranslation();

  return (
    <div>
      <p>{t("Articles")}</p>
    </div>
  )
}

export default ArticlesPage;