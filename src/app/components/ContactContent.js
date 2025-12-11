"use client";

import { useState } from "react";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:sithumalwis05@gmail.com?subject=${subject}&body=${body}`;
    
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
    }, 100);
  };
  return (
    <div
      className={`
        /* 
          MAIN CONTAINER - Size controlled by parent
          Width and height determined by parent's aspect ratio
        */
        w-full h-full
        bg-white shadow-xl rounded-xl
        overflow-y-auto
        
        /* 
          ADJUST: Padding for different size ratios
          Current: 24px (6 * 4) on mobile, 40px (10 * 4) on desktop
        */
        p-6 lg:p-10
      `}
    >
      {/* ---------------------------------------------------------------- */}
      {/* ✔ Top Contact Info Badges */}
      {/* ---------------------------------------------------------------- */}
      <div className="grid grid-cols-2 gap-y-6 mb-10 text-sm">
        {/* Address */}
        <div className="flex items-center gap-3">
          <span className="bg-green-100 text-green-700 px-2 py-[2px] rounded font-semibold">
            Address:
          </span>
          <span className="text-gray-700">Colombo, Sri Lanka</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <span className="bg-green-100 text-green-700 px-2 py-[2px] rounded font-semibold">
            Email:
          </span>
          <a 
            href="mailto:sithumalwis05@gmail.com"
            className="text-gray-700 hover:text-green-600 transition-colors"
          >
            sithumalwis05@gmail.com
          </a>
        </div>



      </div>

      {/* ---------------------------------------------------------------- */}
      {/* ✔ Contact Form Title */}
      {/* ---------------------------------------------------------------- */}
      <h3 className="text-lg font-bold mb-6 flex items-center">
        <span className="w-3 h-3 bg-green-600 rounded-full mr-2"></span>
        Contact Form
      </h3>

      {/* ---------------------------------------------------------------- */}
      {/* ✔ Contact Form */}
      {/* ---------------------------------------------------------------- */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* 
          ADJUST: Form input sizing
          Current: gap-6 between rows, px-4 py-3 for inputs
        */}
        
        {/* Name + Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="border border-green-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
          />
        </div>

        {/* Message Box */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          placeholder="Your Message"
          required
          className="border border-gray-300 rounded-lg px-4 py-3 w-full outline-none focus:border-green-500"
        ></textarea>

        {/* 
          ADJUST: Button sizing
          Current: px-6 py-3 for button
        */}
        <button
          type="submit"
          className="px-6 py-3 bg-gray-100 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-gray-200 transition"
        >
          SEND MESSAGE
          <span className="text-lg">→</span>
        </button>
      </form>
    </div>
  );
}