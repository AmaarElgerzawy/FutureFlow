import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const services = t("home.services", { returnObjects: true });
  const features = t("home.features", { returnObjects: true });

  return (
    <section id="home" className="relative">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-neonBlue mb-6">
            {t("home.headline")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-gray-300 mb-8">
            {t("home.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}>
            <a href="#services">
              <button className="px-8 py-3 bg-neonBlue text-darkBg text-lg font-semibold rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105">
                {t("home.discoverServices")}
              </button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-16 px-4 bg-[#0a192f]/90">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center text-neonBlue mb-12">
            {t("home.mainServices")}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all">
                <div className="text-4xl mb-4">{["🤖", "💻", "📈"][index]}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Competitive Features */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center text-neonBlue mb-12">
            {t("home.whyUs")}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 bg-gray-800 rounded-xl">
                <div className="text-3xl mb-4">{["🇸🇦", "🛡️", "⏱️"][index]}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-neonBlue mb-8">
            {t("home.ctaTitle")}
          </motion.h2>

          <motion.div initial={{ scale: 0.8 }} whileInView={{ scale: 1 }}>
            <a href="#contact">
              <button className="px-8 py-3 bg-neonBlue text-darkBg text-lg font-semibold rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105">
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
