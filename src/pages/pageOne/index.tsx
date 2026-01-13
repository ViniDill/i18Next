import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const PageOne: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div>
      <h1>{t("default_title")}</h1>
      <p>{t("initial_description")}</p>
      <button onClick={() => navigate("/page-two")}>{t("next_page")}</button>
    </div>
  );
};

export default PageOne;
