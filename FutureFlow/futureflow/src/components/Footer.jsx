import { useTranslation } from "react-i18next";
import React from "react";

const Footer = ({ isDarkMode }) => {
  const { t } = useTranslation();

  return (
    <footer
      className={`py-12 px-4 sm:px-6 lg:px-8 ${
        isDarkMode
          ? "bg-darkBg border-darkSecondary"
          : "bg-lightSecondary border-gray-200"
      }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h4
              className={`text-lg font-semibold ${
                isDarkMode ? "text-accent" : "text-lightAccent"
              }`}>
              {t("footer.about")}
            </h4>
            <ul className="space-y-2">
              {["privacy", "terms"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item}`}
                    className={`text-sm ${
                      isDarkMode
                        ? "text-gray-400 hover:text-accent"
                        : "text-gray-600 hover:text-lightAccent"
                    } transition-colors duration-200`}>
                    {t(`footer.${item}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h4
              className={`text-lg font-semibold ${
                isDarkMode ? "text-accent" : "text-lightAccent"
              }`}>
              {t("footer.services")}
            </h4>
            <ul className="space-y-2">
              {["automation", "development", "consulting"].map((service) => (
                <li
                  key={service}
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}>
                  {t(`footer.${service}`)}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4
              className={`text-lg font-semibold ${
                isDarkMode ? "text-accent" : "text-lightAccent"
              }`}>
              {t("footer.contact")}
            </h4>
            <ul className="space-y-2">
              <li
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                <a
                  href="mailto:info@futureflow.com"
                  className="hover:underline">
                  info@futureflow.com
                </a>
              </li>
              <li
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                <a href="tel:+966500000000" className="hover:underline">
                  +966 50 000 0000
                </a>
              </li>
              <li
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                الرياض، السعودية
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4
              className={`text-lg font-semibold ${
                isDarkMode ? "text-accent" : "text-lightAccent"
              }`}>
              {t("footer.follow")}
            </h4>
            <div className="flex flex-wrap gap-2">
              {["LinkedIn", "Twitter", "Facebook"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className={`px-4 py-2 rounded-lg text-sm flex items-center ${
                    isDarkMode
                      ? "bg-darkSecondary text-gray-300 hover:bg-darkSecondary/80"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  } transition-colors duration-200`}>
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div
          className={`border-t ${
            isDarkMode ? "border-darkSecondary" : "border-gray-200"
          } mt-8 pt-8`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p
              className={`text-sm ${
                isDarkMode ? "text-gray-500" : "text-gray-400"
              }`}>
              © {new Date().getFullYear()} FutureFlow. {t("footer.rights")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/privacy"
                className={`text-sm ${
                  isDarkMode
                    ? "text-gray-500 hover:text-accent"
                    : "text-gray-400 hover:text-lightAccent"
                } transition-colors duration-200`}>
                {t("footer.privacy")}
              </a>
              <a
                href="/terms"
                className={`text-sm ${
                  isDarkMode
                    ? "text-gray-500 hover:text-accent"
                    : "text-gray-400 hover:text-lightAccent"
                } transition-colors duration-200`}>
                {t("footer.terms")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
