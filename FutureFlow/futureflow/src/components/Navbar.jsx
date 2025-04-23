import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
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
      className={`fixed top-0 w-full ${
        isDarkMode ? "bg-darkBg/90" : "bg-lightSecondary/90"
      } backdrop-blur-lg border-b ${
        isDarkMode ? "border-darkSecondary" : "border-gray-200"
      } py-4 px-6 flex justify-between items-center z-50`}>
      <div className="flex items-center justify-between w-full">
        <button
          onClick={() => handleScroll("home")}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span
            className={`text-2xl font-bold ${
              isDarkMode ? "text-accent" : "text-lightAccent"
            }`}>
            {t("title_nav")}
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {["home", "services", "contact"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleScroll(item)}
                  className={`text-sm font-medium ${
                    isDarkMode
                      ? "text-gray-300 hover:text-accent"
                      : "text-gray-600 hover:text-lightAccent"
                  } transition-colors`}>
                  {t(`${item}_nav`)}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 ml-4">
            <select
              onChange={handleLanguageChange}
              value={i18n.language}
              className={`text-sm px-3 py-1 rounded-lg border ${
                isDarkMode
                  ? "bg-darkSecondary border-gray-600 text-gray-300"
                  : "bg-white border-gray-300 text-gray-600"
              }`}>
              <option value="en">EN</option>
              <option value="ar">عربي</option>
            </select>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg ${
                isDarkMode
                  ? "bg-darkSecondary hover:bg-darkSecondary/80"
                  : "bg-gray-100 hover:bg-gray-200"
              } transition-colors`}>
              {isDarkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <XMarkIcon
              className={`h-6 w-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            />
          ) : (
            <Bars3Icon
              className={`h-6 w-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-darkBg p-4 shadow-lg">
          <ul className="space-y-4">
            {["home", "services", "contact"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleScroll(item)}
                  className={`w-full text-left p-2 ${
                    isDarkMode
                      ? "text-gray-300 hover:bg-darkSecondary"
                      : "text-gray-600 hover:bg-gray-100"
                  } rounded-lg transition-colors`}>
                  {t(`${item}_nav`)}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex gap-4">
            <select
              onChange={handleLanguageChange}
              value={i18n.language}
              className={`w-full text-sm px-3 py-2 rounded-lg border ${
                isDarkMode
                  ? "bg-darkSecondary border-gray-600 text-gray-300"
                  : "bg-white border-gray-300 text-gray-600"
              }`}>
              <option value="en">EN</option>
              <option value="ar">عربي</option>
            </select>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg ${
                isDarkMode
                  ? "bg-darkSecondary hover:bg-darkSecondary/80"
                  : "bg-gray-100 hover:bg-gray-200"
              } transition-colors`}>
              {isDarkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
