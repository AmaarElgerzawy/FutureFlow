import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Home = ({ id, isDarkMode }) => {
  const { t } = useTranslation();
  const services = t("home.services", { returnObjects: true });
  const features = t("home.features", { returnObjects: true });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id={id} className="relative">
      {/* Hero Section */}
      <div
        className={`relative h-screen w-full flex items-center justify-center text-center pt-20 ${
          isDarkMode ? "bg-darkSecondary" : "bg-lightSecondary"
        }`}>
        <div
          className={`absolute inset-0 bg-gradient-to-b ${
            isDarkMode
              ? "from-darkBg/60 to-darkSecondary/80"
              : "from-lightBg/60 to-lightSecondary/80"
          }`}></div>
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className={`text-5xl md:text-6xl font-extrabold ${
              isDarkMode ? "text-accent" : "text-lightAccent"
            } mb-6`}>
            {t("home.headline")}
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={1}
            className={`text-2xl ${
              isDarkMode ? "text-purpleLight" : "text-gray-600"
            } mb-8`}>
            {t("home.subtitle")}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={2}>
            <a href="#services">
              <button
                className={`px-8 py-3 ${
                  isDarkMode
                    ? "bg-accent hover:bg-accent/90"
                    : "bg-lightAccent hover:bg-lightAccent/90"
                } text-white text-lg font-semibold rounded-full transition-transform transform hover:scale-105`}>
                {t("home.discoverServices")}
              </button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Services Preview */}
      <div
        className={`py-16 px-4 ${
          isDarkMode ? "bg-darkSecondary" : "bg-gray-100"
        }`}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className={`text-4xl font-bold text-center ${
              isDarkMode ? "text-accent" : "text-lightAccent"
            } mb-12`}>
            {t("home.mainServices")}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={index}
                className={`p-6 rounded-2xl border ${
                  isDarkMode
                    ? "bg-darkBg border-accent/20"
                    : "bg-white border-lightAccent/20"
                } hover:scale-[1.03] transition-transform`}>
                <div className="text-4xl mb-4">{["🤖", "💻", "📈"][index]}</div>
                <h3
                  className={`text-xl font-bold ${
                    isDarkMode ? "text-accent" : "text-lightAccent"
                  } mb-2`}>
                  {service.title}
                </h3>
                <p
                  className={isDarkMode ? "text-purpleLight" : "text-gray-600"}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Competitive Features */}
      <div className={`py-16 px-4 ${isDarkMode ? "bg-darkBg" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className={`text-4xl font-bold text-center ${
              isDarkMode ? "text-accent" : "text-lightAccent"
            } mb-12`}>
            {t("home.whyUs")}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={index}
                className={`text-center p-6 rounded-2xl border ${
                  isDarkMode
                    ? "bg-darkSecondary border-accent/20"
                    : "bg-lightSecondary border-lightAccent/20"
                }`}>
                <div className="text-3xl mb-4">{["🇸🇦", "🛡️", "⏱️"][index]}</div>
                <h3
                  className={`text-xl font-bold ${
                    isDarkMode ? "text-accent" : "text-lightAccent"
                  } mb-2`}>
                  {feature.title}
                </h3>
                <p
                  className={isDarkMode ? "text-purpleLight" : "text-gray-600"}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className={`py-16 px-4 ${
          isDarkMode ? "bg-darkSecondary" : "bg-gray-100"
        }`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className={`text-4xl font-bold ${
              isDarkMode ? "text-accent" : "text-lightAccent"
            } mb-8`}>
            {t("home.ctaTitle")}
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}>
            <a href="#contact">
              <button
                className={`px-8 py-3 ${
                  isDarkMode
                    ? "bg-accent hover:bg-accent/90"
                    : "bg-lightAccent hover:bg-lightAccent/90"
                } text-white text-lg font-semibold rounded-full transition-transform transform hover:scale-105`}>
                {t("home.ctaButton")}
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
