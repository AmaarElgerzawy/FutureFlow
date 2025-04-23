import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const servicesData = [
  {
    category: "services.automation_services",
    icon: "🤖",
    subservices: [
      "services.process_analysis",
      "services.workflow_design",
      "services.integration",
    ],
    platforms: ["Zapier", "Make.com", "Power Automate"],
    compliance: "services.compliance",
  },
  {
    category: "services.software_development",
    icon: "💻",
    subservices: [
      "services.advanced_web_apps",
      "services.mobile_apps",
      "services.custom_systems",
      "services.business_intelligence",
    ],
    technologies: ["React", "Node.js", "Flutter", "Power BI"],
    customization: [
      "services.small_businesses",
      "services.medium_businesses",
      "services.large_enterprises",
    ],
  },
  {
    category: "services.tech_consulting",
    icon: "📈",
    subservices: [
      "services.cybersecurity_strategies",
      "services.cloud_solutions",
      "services.digital_transformation",
      "services.infrastructure_optimization",
    ],
  },
  {
    category: "services.tech_support",
    icon: "🛠️",
    subservices: [
      "services.technical_support_24_7",
      "services.data_recovery",
      "services.secure_backups",
      "services.system_maintenance",
    ],
    sla: ["services.basic_sla", "services.premium_sla", "services.custom_sla"],
  },
];

const pricingPlans = [
  {
    name: "plans.basic_plan",
    price: "plans.basic_price",
    features: [
      "plans.support_8_hours",
      "plans.automation_5",
      "plans.monthly_maintenance",
    ],
  },
  {
    name: "plans.mid_plan",
    price: "plans.mid_price",
    features: [
      "plans.support_24_7",
      "plans.automation_15",
      "plans.basic_web_app",
    ],
  },
  {
    name: "plans.premium_plan",
    price: "plans.premium_price",
    features: [
      "plans.dedicated_support",
      "plans.integrated_solutions",
      "plans.mobile_apps",
    ],
  },
];

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

const Services = ({ id, isDarkMode }) => {
  const { t } = useTranslation();

  return (
    <section
      id={id}
      className={`min-h-screen py-16 px-4 md:px-8 text-center pt-20 ${
        isDarkMode ? "bg-darkSecondary" : "bg-lightSecondary"
      }`}>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className={`text-4xl md:text-5xl font-bold text-center ${
          isDarkMode ? "text-accent" : "text-lightAccent"
        } mb-16`}>
        {t("title")}
      </motion.h2>

      <div className="max-w-7xl mx-auto space-y-20">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={fadeIn}
            className={`${
              isDarkMode ? "bg-darkBg" : "bg-lightBg"
            } rounded-2xl overflow-hidden shadow-xl border ${
              isDarkMode ? "border-accent/20" : "border-lightAccent/20"
            } p-8`}>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">{service.icon}</span>
              <h3 className={`text-2xl font-bold ${
                isDarkMode ? "text-accent" : "text-lightAccent"
              }`}>
                {t(service.category)}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className={`text-xl font-semibold ${
                  isDarkMode ? "text-accent" : "text-lightAccent"
                } mb-4`}>
                  {t("features_title")}
                </h4>
                <ul className="space-y-3">
                  {service.subservices.map((item, i) => (
                    <li
                      key={i}
                      className={`flex items-center gap-2 ${
                        isDarkMode ? "text-purpleLight" : "text-gray-600"
                      }`}>
                      <span className={`${
                        isDarkMode ? "text-accent" : "text-lightAccent"
                      }`}>•</span>
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                {service.platforms && (
                  <div>
                    <h4 className={`text-xl font-semibold ${
                      isDarkMode ? "text-accent" : "text-lightAccent"
                    } mb-3`}>
                      {t("supported_platforms")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.platforms.map((platform, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-sm ${
                            isDarkMode 
                              ? "bg-darkSecondary text-purpleLight"
                              : "bg-gray-100 text-gray-700"
                          }`}>
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {service.technologies && (
                  <div>
                    <h4 className={`text-xl font-semibold ${
                      isDarkMode ? "text-accent" : "text-lightAccent"
                    } mb-3`}>
                      {t("technologies")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-sm ${
                            isDarkMode 
                              ? "bg-darkSecondary text-purpleLight"
                              : "bg-gray-100 text-gray-700"
                          }`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {service.customization && (
                  <div>
                    <h4 className={`text-xl font-semibold ${
                      isDarkMode ? "text-accent" : "text-lightAccent"
                    } mb-3`}>
                      {t("customization_options")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.customization.map((size, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-sm ${
                            isDarkMode 
                              ? "bg-darkSecondary text-purpleLight"
                              : "bg-gray-100 text-gray-700"
                          }`}>
                          {t(size)}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {service.compliance && (
              <div className={`mt-6 p-4 rounded-lg border ${
                isDarkMode 
                  ? "bg-green-900/20 border-green-500"
                  : "bg-green-100 border-green-400"
              }`}>
                <p className={`flex items-center gap-2 ${
                  isDarkMode ? "text-green-400" : "text-green-700"
                }`}>
                  <span>✅</span>
                  {t(service.compliance)}
                </p>
              </div>
            )}
          </motion.div>
        ))}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-24">
          <h3 className={`text-3xl font-bold text-center ${
            isDarkMode ? "text-accent" : "text-lightAccent"
          } mb-12`}>
            {t("pricing_plans")}
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeIn}
                className={`${
                  isDarkMode ? "bg-darkBg" : "bg-lightBg"
                } rounded-2xl overflow-hidden shadow-xl border ${
                  isDarkMode ? "border-accent/20" : "border-lightAccent/20"
                } p-6 hover:scale-[1.03] transition-transform`}>
                <h4 className={`text-2xl font-bold text-center ${
                  isDarkMode ? "text-accent" : "text-lightAccent"
                } mb-4`}>
                  {t(plan.name)}
                </h4>
                <p className={`text-3xl text-center ${
                  isDarkMode ? "text-accent" : "text-lightAccent"
                } mb-6`}>
                  {t(plan.price)}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={`text-center ${
                      isDarkMode ? "text-purpleLight" : "text-gray-600"
                    }`}>
                      ✓ {t(feature)}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-2 ${
                  isDarkMode 
                    ? "bg-accent hover:bg-accent/90" 
                    : "bg-lightAccent hover:bg-lightAccent/90"
                } text-white rounded-lg transition-colors`}>
                  {t("choose_plan")}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
