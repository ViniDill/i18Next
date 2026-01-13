import { useTranslation } from "react-i18next";

const pageOne: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("default_title")}</h1>
      <p>{t("initial_description")}</p>
      <button>{t("next_page")}</button>
    </div>
  );
};

export default pageOne;
