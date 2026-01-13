import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const pageThree: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("third_title")}</h1>
      <p>{t("third_description")}</p>
      <button onClick={() => navigate("/")}>{t("next_page3")}</button>
    </div>
  );
};

export default pageThree;
