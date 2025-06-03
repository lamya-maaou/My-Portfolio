import React, { useRef, useState } from "react";
import { useLanguage } from "../LanguageContext";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { t } = useLanguage();
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      await emailjs.sendForm(
        'service_y9fi22p',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'VpHEqQ_CV117cblIR'
      );

      setSuccess(true);
      setForm({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setError(true);
      console.error('Error sending email:', error);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="w-full min-h-screen flex items-center justify-center transition-colors duration-300 dark:bg-gradient-to-b dark:from-[#232946] dark:to-[#1a2235] bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-2">
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-800 mb-12 text-center">{t.contact.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="dark:bg-gray-800 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold dark:text-white text-gray-800 mb-6">{t.contact.getInTouch}</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block dark:text-white text-gray-800 mb-2">{t.contact.name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 dark:bg-gray-700 bg-gray-100 dark:text-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block dark:text-white text-gray-800 mb-2">{t.contact.email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 dark:bg-gray-700 bg-gray-100 dark:text-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block dark:text-white text-gray-800 mb-2">{t.contact.message}</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 dark:bg-gray-700 bg-gray-100 dark:text-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-pink-500 text-white py-3 rounded-lg transition-colors duration-300 ${
                  loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-pink-600'
                }`}
              >
                {loading ? 'Sending...' : t.contact.send}
              </button>
              {success && (
                <p className="text-green-400 text-center mt-2">
                  {t.contact.successMessage || 'Message sent successfully!'}
                </p>
              )}
              {error && (
                <p className="text-red-400 text-center mt-2">
                  {t.contact.errorMessage || 'Failed to send message. Please try again.'}
                </p>
              )}
            </form>
          </div>
          <div className="dark:bg-gray-800 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold dark:text-white text-gray-800 mb-6">{t.contact.contactInfo}</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-pink-400 font-semibold mb-2">Email</h4>
                <p className="dark:text-white text-gray-800">lamyamaaou2002@gmail.com</p>
              </div>
              <div>
                <h4 className="text-pink-400 font-semibold mb-2">{t.contact.phone}</h4>
                <p className="dark:text-white text-gray-800">0644334654</p>
              </div>
              <div>
                <h4 className="text-pink-400 font-semibold mb-2">{t.contact.location}</h4>
                <p className="dark:text-white text-gray-800">Oujda , Morocco</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 