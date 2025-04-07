import { useTranslation } from "react-i18next";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  };

  return (
    <div className="flex items-center gap-2">
      <GlobeAltIcon className="h-5 w-5 text-gray-300" />
      <button
        onClick={() => changeLanguage("ar")}
        className={`px-3 py-1 rounded ${
          i18n.language === "ar" ? "bg-neonBlue text-darkBg" : "text-gray-300"
        }`}>
        عربي
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1 rounded ${
          i18n.language === "en" ? "bg-neonBlue text-darkBg" : "text-gray-300"
        }`}>
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;
