import React from "react";
import { motion } from "framer-motion";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-darkBg backdrop-blur-xs text-white py-4 px-6 flex justify-between items-center z-50">
      <button
        onClick={() => handleScroll("home")}
        className="hover:text-neonBlue transition duration-300">
        <h1 className="text-2xl font-bold text-neonBlue">{t("title_nav")}</h1>
      </button>

      <ul className="hidden md:flex space-x-6 items-center">
        <li>
          <button
            onClick={() => handleScroll("home")}
            className="hover:text-neonBlue transition duration-300 m-3">
            {t("home_nav")}
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("services")}
            className="hover:text-neonBlue transition duration-300">
            {t("services_nav")}
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("contact")}
            className="hover:text-neonBlue transition duration-300">
            {t("contact_nav")}
          </button>
        </li>
        <li>
          <select
            onChange={handleLanguageChange}
            value={i18n.language}
            className="bg-darkBg border border-gray-500 text-white rounded px-2 py-1">
            <option value="en">EN</option>
            <option value="ar">عربي</option>
          </select>
        </li>
      </ul>

      <Bars3Icon className="h-6 w-6 md:hidden cursor-pointer text-white" />
    </motion.nav>
  );
};

export default Navbar;
