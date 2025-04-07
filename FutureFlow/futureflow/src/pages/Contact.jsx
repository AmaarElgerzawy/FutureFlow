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

const Contact = () => {
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
      id="contact"
      className="min-h-screen py-20 px-4 md:px-8 bg-[#0a192f]/95">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center text-neonBlue mb-16">
          {t("contact.title")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-glassBg backdrop-blur-lg p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-neonBlue mb-8">
              {t("contact.contactInfo")}
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <GeoAlt className="h-6 w-6 text-neonBlue" />
                <div>
                  <p className="font-semibold">{t("contact.address")}:</p>
                  <p className="text-gray-300">{t("contact.addressText")}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Telephone className="h-6 w-6 text-neonBlue" />
                <div>
                  <p className="font-semibold">{t("contact.phone")}:</p>
                  <a
                    href="tel:+966500000000"
                    className="text-gray-300 hover:text-neonBlue transition-colors">
                    +966 50 000 0000
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Envelope className="h-6 w-6 text-neonBlue" />
                <div>
                  <p className="font-semibold">{t("contact.email")}:</p>
                  <a
                    href="mailto:info@futureflow.com"
                    className="text-gray-300 hover:text-neonBlue transition-colors">
                    info@futureflow.com
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-6">
                {t("contact.social")}
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-2 rounded-full bg-gray-800 hover:bg-neonBlue transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-gray-800 hover:bg-neonBlue transition-colors">
                  <TwitterX className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-gray-800 hover:bg-neonBlue transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="bg-glassBg backdrop-blur-lg p-8 rounded-xl shadow-xl">
            <div className="space-y-6">
              <div>
                <label className="block mb-2">{t("contact.fullName")}</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-lg bg-gray-800 text-white"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2">
                    {t("contact.emailAddress")}
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 rounded-lg bg-gray-800 text-white"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block mb-2">
                    {t("contact.phoneNumber")}
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full p-3 rounded-lg bg-gray-800 text-white"
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2">{t("contact.inquiryType")}</label>
                <select className="w-full p-3 rounded-lg bg-gray-800 text-white">
                  <option value="general">{t("contact.general")}</option>
                  <option value="sales">{t("contact.sales")}</option>
                  <option value="support">{t("contact.support")}</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">{t("contact.message")}</label>
                <textarea
                  required
                  rows="5"
                  className="w-full p-3 rounded-lg bg-gray-800 text-white"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-neonBlue text-darkBg font-semibold py-3 rounded-lg hover:bg-white transition-all duration-300">
                {t("contact.send")}
              </button>
            </div>
          </motion.form>
        </div>

        {/* Google Map remains unchanged */}
      </div>
    </section>
  );
};

export default Contact;
