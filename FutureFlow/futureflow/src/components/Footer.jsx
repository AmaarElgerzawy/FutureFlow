import { useTranslation } from "react-i18next";
import React from "react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-glassBg backdrop-blur-lg py-12 px-4 md:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-300">
          {/* About Section */}
          <div className="col-span-2 md:col-span-1 text-center md:text-left">
            <h4 className="text-neonBlue text-lg font-semibold mb-4">
              {t("footer.about")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/privacy"
                  className="hover:text-neonBlue transition-colors duration-300">
                  {t("footer.privacy")}
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-neonBlue transition-colors duration-300">
                  {t("footer.terms")}
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="text-center md:text-left">
            <h4 className="text-neonBlue text-lg font-semibold mb-4">
              {t("footer.services")}
            </h4>
            <ul className="space-y-3">
              <li>{t("footer.automation")}</li>
              <li>{t("footer.development")}</li>
              <li>{t("footer.consulting")}</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h4 className="text-neonBlue text-lg font-semibold mb-4">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3">
              <li>info@futureflow.com</li>
              <li>+966 50 000 0000</li>
              <li>الرياض، السعودية</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-2 md:col-span-1 text-center md:text-left">
            <h4 className="text-neonBlue text-lg font-semibold mb-4">
              {t("footer.follow")}
            </h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-neonBlue transition-colors">
                {/* Add social media icons here */}
                <span className="text-white">LinkedIn</span>
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-neonBlue transition-colors">
                <span className="text-white">Twitter</span>
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-neonBlue transition-colors">
                <span className="text-white">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center order-last md:order-first">
              © {new Date().getFullYear()} FutureFlow. {t("footer.rights")}
            </p>
            <div className="flex gap-6">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-neonBlue text-sm">
                {t("footer.privacy")}
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-neonBlue text-sm">
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
