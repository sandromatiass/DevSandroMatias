import { useTranslation } from "react-i18next";

const ArticlesPage = () =>{
  const {t} = useTranslation();

  return (
    <div>
      <p>{t("Artigos")}</p>
      <p>{t("aqui eu consigo escrever artigos diversas vezes artigos ficam em inlgês")}</p>
    </div>
  )
}

export default ArticlesPage;