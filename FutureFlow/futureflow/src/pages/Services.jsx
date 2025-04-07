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

const Services = () => {
  const { t } = useTranslation();

  return (
    <section
      id="services"
      className="min-h-screen py-20 px-4 md:px-8 bg-[#0a192f]/95">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center text-neonBlue mb-16">
        {t("title")}
      </motion.h2>

      <div className="max-w-7xl mx-auto space-y-20">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-glassBg backdrop-blur-lg rounded-xl p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">{service.icon}</span>
              <h3 className="text-2xl font-bold text-neonBlue">
                {t(service.category)}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">
                  {t("features_title")}
                </h4>
                <ul className="space-y-3">
                  {service.subservices.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-300">
                      <span className="text-neonBlue">•</span>
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                {service.platforms && (
                  <div>
                    <h4 className="text-xl font-semibold mb-3">
                      {t("supported_platforms")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.platforms.map((platform, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {service.customization && (
                  <div>
                    <h4 className="text-xl font-semibold mb-3">
                      {t("customization_options")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.customization.map((size, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                          {t(size)}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {service.compliance && (
              <div className="mt-6 p-4 bg-green-900/20 rounded-lg border border-green-500">
                <p className="text-green-400 flex items-center gap-2">
                  <span>✅</span>
                  {t(service.compliance)}
                </p>
              </div>
            )}
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24">
          <h3 className="text-3xl font-bold text-center text-neonBlue mb-12">
            {t("pricing_plans")}
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-glassBg backdrop-blur-lg p-6 rounded-xl border border-gray-700 hover:border-neonBlue transition-all">
                <h4 className="text-2xl font-bold text-center mb-4">
                  {t(plan.name)}
                </h4>
                <p className="text-3xl text-center text-neonBlue mb-6">
                  {t(plan.price)}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-center text-gray-300">
                      ✓ {t(feature)}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 bg-neonBlue text-darkBg rounded-lg hover:bg-white transition-colors">
                  {t("choose_plan")}
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
