import React from "react";
import { useLanguage } from "../LanguageContext";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPhp, FaPython, FaDatabase, FaCodeBranch, FaLinux, FaWindows, FaNetworkWired, FaCode } from "react-icons/fa";
import { SiSpringboot, SiLaravel, SiSymfony, SiDjango, SiMysql, SiCplusplus, SiGit, SiGithub, SiUbuntu } from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Java (Spring Boot)", icon: <SiSpringboot className="text-green-500" /> },
      { name: "PHP (Laravel)", icon: <SiLaravel className="text-red-500" /> },
      { name: "PHP (Symfony)", icon: <SiSymfony className="text-black dark:text-white" /> },
      { name: "Python (Django)", icon: <SiDjango className="text-green-700" /> },
    ],
  },
  {
    category: "Data Base",
    items: [
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    ],
  },
  {
    category: "Systems programming languages",
    items: [
      { name: "C", icon: <FaCodeBranch className="text-blue-600" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
      { name: "C#", icon: <FaCode className="text-purple-500" /> },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-black dark:text-white" /> },
    ],
  },
  {
    category: " Operating Systems",
    items: [
      { name: "Windows", icon: <FaWindows className="text-blue-500" /> },
      { name: "Linux (Ubuntu)", icon: <SiUbuntu className="text-orange-500" /> },
    ],
  },
  {
    category: "Networks",
    items: [
      { name: "TCP/IP", icon: <FaNetworkWired className="text-blue-400" /> },
      { name: "Network Security", icon: <FaNetworkWired className="text-green-500" /> },
    ],
  },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="w-full min-h-screen flex items-center justify-center transition-colors duration-300 dark:bg-gradient-to-b dark:from-[#1a2235] dark:to-[#232946] bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-2">
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-800 mb-12 text-center">{t.skills.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="dark:bg-gray-800 bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold dark:text-white text-gray-800 mb-4">{skillGroup.category}</h3>
              <div className="grid grid-cols-1 gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-3 p-3 dark:bg-gray-700 bg-gray-50 rounded-lg"
                  >
                    <div className="text-2xl">{skill.icon}</div>
                    <span className="dark:text-white text-gray-800">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 