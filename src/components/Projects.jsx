import React from "react";
import { useLanguage } from "../LanguageContext";
import { FaCode, FaCloud, FaAndroid, FaChartBar, FaDog, FaTasks, FaCheckCircle } from "react-icons/fa";

const projects = [
  {
    icon: <FaTasks className="text-pink-400 text-xl" />,
    title: "Intelligent Quiz Management Application (Final Year Project - In Progress)",
    description:
      "Interactive tool for teachers/students, generating automated quizzes from educational content.",
    stack:
      "Frontend: React.js, ChartJs/D3.js (visualization), react-qr-code | Backend: Python (Django), MySQL, OpenAI GPT / Hugging Face API | OCR (Tesseract), code validation via tools (unittest), isolation with Docker",
  },
  {
    icon: <FaCheckCircle className="text-pink-400 text-xl" />,
    title: "Cineplex",
    description:
      "Simple web application to easily choose a movie to watch.",
    stack: "HTML5 | CSS3 | Javascript | PHP | MySql",
  },
  {
    icon: <FaCode className="text-pink-400 text-xl" />,
    title: "Absence Management (Symfony)",
    description:
      "Complete web application with admin/student interface and optimized database for absence tracking.",
    stack: "Symfony, PHP, MySQL, Twig, Bootstrap",
  },
  {
    icon: <FaAndroid className="text-pink-400 text-xl" />,
    title: "Internship Tracking (Android)",
    description:
      "Mobile app with report management, calendar, and real-time internship geolocation.",
    stack: "Java, XML, SQLite",
  },
  {
    icon: <FaCloud className="text-pink-400 text-xl" />,
    title: "Weather App (React)",
    description:
      "Real-time weather app using external APIs with responsive interface.",
    stack: "React.js, REST API (OpenWeather), CSS Modules",
  },
  {
    icon: <FaChartBar className="text-pink-400 text-xl" />,
    title: "Dual PERT (Python)",
    description:
      "Mathematical programming and project optimization with automatic critical path calculation.",
    stack: "Python, Matplotlib (visualization), Graph Algorithms",
  },
  {
    icon: <FaDog className="text-pink-400 text-xl" />,
    title: "PETShop (JEE)",
    description:
      "E-commerce solution for pet stores with customer and action management.",
    stack: "Java EE, JPA/Hibernate, PostgreSQL, JSF",
  },
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="w-full min-h-screen flex items-center justify-center transition-colors duration-300 dark:bg-gradient-to-b dark:from-[#232946] dark:to-[#1a2235] bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-2">
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-800 mb-12 text-center">{t.projects.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.items.map((project, index) => (
            <div key={index} className="dark:bg-gray-800 bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold dark:text-white text-gray-800 mb-2">{project.title}</h3>
                <p className="dark:text-gray-300 text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-pink-500/20 text-pink-600 dark:text-pink-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 