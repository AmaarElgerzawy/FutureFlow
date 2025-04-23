import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  GeoAlt,
  Telephone,
  Envelope,
  Linkedin,
  Instagram,
  TwitterX,
} from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";

const Contact = ({ id, isDarkMode }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section
      id={id}
      className={`min-h-screen py-20 px-4 md:px-8 ${
        isDarkMode ? "bg-darkBg" : "bg-lightSecondary"
      }`}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl md:text-5xl font-bold text-center ${
            isDarkMode ? "text-accent" : "text-lightAccent"
          } mb-16`}>
          {t("contact.title")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={`p-8 rounded-xl shadow-xl border ${
              isDarkMode
                ? "bg-darkSecondary border-accent/20"
                : "bg-lightBg border-lightAccent/20"
            }`}>
            <h3
              className={`text-2xl font-bold ${
                isDarkMode ? "text-accent" : "text-lightAccent"
              } mb-8`}>
              {t("contact.contactInfo")}
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <GeoAlt
                  className={`h-6 w-6 ${
                    isDarkMode ? "text-accent" : "text-lightAccent"
                  }`}
                />
                <div>
                  <p
                    className={`font-semibold ${
                      isDarkMode ? "text-purpleLight" : "text-gray-600"
                    }`}>
                    {t("contact.address")}:
                  </p>
                  <p
                    className={
                      isDarkMode ? "text-purpleLight" : "text-gray-600"
                    }>
                    {t("contact.addressText")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Telephone
                  className={`h-6 w-6 ${
                    isDarkMode ? "text-accent" : "text-lightAccent"
                  }`}
                />
                <div>
                  <p
                    className={`font-semibold ${
                      isDarkMode ? "text-purpleLight" : "text-gray-600"
                    }`}>
                    {t("contact.phone")}:
                  </p>
                  <a
                    href="tel:+966500000000"
                    className={`${
                      isDarkMode
                        ? "text-purpleLight hover:text-accent"
                        : "text-gray-600 hover:text-lightAccent"
                    } transition-colors`}>
                    +966 50 000 0000
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Envelope
                  className={`h-6 w-6 ${
                    isDarkMode ? "text-accent" : "text-lightAccent"
                  }`}
                />
                <div>
                  <p
                    className={`font-semibold ${
                      isDarkMode ? "text-purpleLight" : "text-gray-600"
                    }`}>
                    {t("contact.email")}:
                  </p>
                  <a
                    href="mailto:info@futureflow.com"
                    className={`${
                      isDarkMode
                        ? "text-purpleLight hover:text-accent"
                        : "text-gray-600 hover:text-lightAccent"
                    } transition-colors`}>
                    info@futureflow.com
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h4
                className={`text-xl font-semibold mb-6 ${
                  isDarkMode ? "text-accent" : "text-lightAccent"
                }`}>
                {t("contact.social")}
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className={`p-2 rounded-full border transition-colors ${
                    isDarkMode
                      ? "bg-darkSecondary border-accent/20 hover:bg-accent"
                      : "bg-lightBg border-lightAccent/20 hover:bg-lightAccent"
                  }`}>
                  <Linkedin
                    className={`h-6 w-6 ${
                      isDarkMode ? "text-purpleLight" : "text-gray-600"
                    }`}
                  />
                </a>
                <a
                  href="#"
                  className={`p-2 rounded-full border transition-colors ${
                    isDarkMode
                      ? "bg-darkSecondary border-accent/20 hover:bg-accent"
                      : "bg-lightBg border-lightAccent/20 hover:bg-lightAccent"
                  }`}>
                  <TwitterX
                    className={`h-6 w-6 ${
                      isDarkMode ? "text-purpleLight" : "text-gray-600"
                    }`}
                  />
                </a>
                <a
                  href="#"
                  className={`p-2 rounded-full border transition-colors ${
                    isDarkMode
                      ? "bg-darkSecondary border-accent/20 hover:bg-accent"
                      : "bg-lightBg border-lightAccent/20 hover:bg-lightAccent"
                  }`}>
                  <Instagram
                    className={`h-6 w-6 ${
                      isDarkMode ? "text-purpleLight" : "text-gray-600"
                    }`}
                  />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className={`p-8 rounded-xl shadow-xl border ${
              isDarkMode
                ? "bg-darkSecondary border-accent/20"
                : "bg-lightBg border-lightAccent/20"
            }`}>
            <div className="space-y-6">
              <div>
                <label
                  className={`block mb-2 ${
                    isDarkMode ? "text-purpleLight" : "text-gray-600"
                  }`}>
                  {t("contact.fullName")}
                </label>
                <input
                  type="text"
                  required
                  className={`w-full p-3 rounded-lg border ${
                    isDarkMode
                      ? "bg-darkBg border-accent/20 text-purpleLight"
                      : "bg-white border-lightAccent/20 text-gray-700"
                  }`}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    className={`block mb-2 ${
                      isDarkMode ? "text-purpleLight" : "text-gray-600"
                    }`}>
                    {t("contact.emailAddress")}
                  </label>
                  <input
                    type="email"
                    required
                    className={`w-full p-3 rounded-lg border ${
                      isDarkMode
                        ? "bg-darkBg border-accent/20 text-purpleLight"
                        : "bg-white border-lightAccent/20 text-gray-700"
                    }`}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    className={`block mb-2 ${
                      isDarkMode ? "text-purpleLight" : "text-gray-600"
                    }`}>
                    {t("contact.phoneNumber")}
                  </label>
                  <input
                    type="tel"
                    required
                    className={`w-full p-3 rounded-lg border ${
                      isDarkMode
                        ? "bg-darkBg border-accent/20 text-purpleLight"
                        : "bg-white border-lightAccent/20 text-gray-700"
                    }`}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <label
                  className={`block mb-2 ${
                    isDarkMode ? "text-purpleLight" : "text-gray-600"
                  }`}>
                  {t("contact.inquiryType")}
                </label>
                <select
                  className={`w-full p-3 rounded-lg border ${
                    isDarkMode
                      ? "bg-darkBg border-accent/20 text-purpleLight"
                      : "bg-white border-lightAccent/20 text-gray-700"
                  }`}>
                  <option value="general">{t("contact.general")}</option>
                  <option value="sales">{t("contact.sales")}</option>
                  <option value="support">{t("contact.support")}</option>
                </select>
              </div>
              <div>
                <label
                  className={`block mb-2 ${
                    isDarkMode ? "text-purpleLight" : "text-gray-600"
                  }`}>
                  {t("contact.message")}
                </label>
                <textarea
                  required
                  rows="5"
                  className={`w-full p-3 rounded-lg border ${
                    isDarkMode
                      ? "bg-darkBg border-accent/20 text-purpleLight"
                      : "bg-white border-lightAccent/20 text-gray-700"
                  }`}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }></textarea>
              </div>
              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  isDarkMode
                    ? "bg-accent hover:bg-accent/90"
                    : "bg-lightAccent hover:bg-lightAccent/90"
                } text-white`}>
                {t("contact.send")}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
