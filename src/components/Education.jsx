import React from "react";
import { FaGraduationCap, FaSchool, FaBook } from "react-icons/fa";
import { useLanguage } from "../LanguageContext";

const education = [
  {
    icon: <FaGraduationCap className="text-pink-400 text-2xl" />,
    title: "Cycle ingénieur",
    school: "Ecole nationale des sciences appliquées, OUJDA",
    field: "Génie informatique",
    date: "de 2022 à ce jour",
  },
  {
    icon: <FaBook className="text-pink-400 text-2xl" />,
    title: "Classes préparatoires aux grandes écoles",
    school: "Lycée Qualifiant Mohammed VI, OUARZAZATE",
    field: "Physique, Chimie et Sciences de l'ingénieur (PCSI)",
    date: "de 2020 à 2022",
  },
  {
    icon: <FaSchool className="text-pink-400 text-2xl" />,
    title: "Baccalauréat",
    school: "Lycée My Ali Cherif, Rich",
    field: "Sciences Physique Option Français",
    date: "de 2019 à 2020",
  },
];

// Composant pour une carte d'éducation réutilisable
const EducationCard = ({ item }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105">
    <div className="flex items-center gap-3 mb-3">
      {item.icon}
      <h3 className="text-xl font-bold dark:text-white text-gray-800">{item.title}</h3>
    </div>
    <p className="text-gray-600 dark:text-gray-300 mb-2">{item.school}</p>
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.field}</p>
    <p className="text-sm text-pink-400">{item.date}</p>
  </div>
);

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="w-full min-h-screen flex items-center justify-center transition-colors duration-300 dark:bg-gradient-to-b dark:from-[#1a2235] dark:to-[#232946] bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-800 mb-12 text-center">
          {t.education?.title || "Éducation"}
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-pink-400 transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-8">
            {education.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 bg-pink-400 rounded-full transform -translate-x-1/2 z-10"></div>

                <div className="ml-16 md:ml-0 md:flex md:justify-between md:items-center">
                  {/* Côté gauche */}
                  <div className={`md:w-5/12 ${idx === 0 || idx === 2 ? 'md:order-1' : 'md:order-2'
                    }`}>
                    {(idx === 0 || idx === 2) ? <EducationCard item={item} /> : <div></div>}
                  </div>

                  {/* Côté droit */}
                  <div className={`md:w-5/12 ${idx === 1 ? 'md:order-2' : 'md:order-1'
                    }`}>
                    {idx === 1 ? <EducationCard item={item} /> : <div></div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}