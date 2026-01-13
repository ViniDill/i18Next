import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const pageTwo: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("second_title")}</h1>
      <p>{t("second_description")}</p>
      <button onClick={() => navigate("/page-three")}>{t("next_page2")}</button>
    </div>
  );
};

export default pageTwo;
