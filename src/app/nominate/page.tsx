"use client";

import type React from "react";
import Head from "next/head";
import { useState } from "react";

export default function Nominate() {

  const [formData, setFormData] = useState({
    fullName: "",
    designation: "",
    organization: "",
    industry: "",
    country: "",
    email: "",
    phone: "",
    category: "",
    achievements: "",
    contributions: "",
    awards: "",
  });
  const [supportingDoc, setSupportingDoc] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      if (e.target.files && e.target.files[0]) {
        setSupportingDoc(e.target.files[0]);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formInputData = new FormData();
      console.log(formData);
      
      // Append all form fields
      Object.entries(formData).forEach(([key, value]) => {
        formInputData.append(key, value);
      });

      // Append file if it exists
      if (supportingDoc) {
        formInputData.append("supportingDocs", supportingDoc);
      }

      const response = await fetch("/api/submit-nomination", {
        method: "POST",
        body: formInputData,
      });

      if (response.ok) {
        alert("Nomination submitted successfully!");
        setFormData({
          fullName: "",
          designation: "",
          organization: "",
          industry: "",
          country: "",
          email: "",
          phone: "",
          category: "",
          achievements: "",
          contributions: "",
          awards: "",
        });
      } else {
        throw new Error("Failed to submit nomination");
      }
    } catch (error) {
      console.error("Error submitting nomination:", error);
      alert("Failed to submit nomination. Please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>
          Nominate - International Business Innovation and Excellence Awards
          2025
        </title>
        <meta
          name="description"
          content="Submit your nomination for the International Business Innovation and Excellence Awards"
        />
      </Head>

      <div className="max-w-screen-xl mx-auto px-4 md:px-12 py-12">
        <h1 className="text-3xl font-bold mb-10 text-center text-[#4169E1]">
          Nomination Form
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mx-auto"
          encType="multipart/form-data"
        >
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block mb-2 text-gray-700 font-medium"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-blue-100 rounded-lg focus:ring-2 
                         focus:ring-[#4169E1] focus:border-transparent outline-none
                         transition-all duration-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="designation"
              className="block mb-2 text-gray-700 font-medium"
            >
              Designation
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-blue-100 rounded-lg focus:ring-2 
                         focus:ring-[#4169E1] focus:border-transparent outline-none
                         transition-all duration-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="organization"
              className="block mb-2 text-gray-700 font-medium"
            >
              Organization/Company Name
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-blue-100 rounded-lg focus:ring-2 
                         focus:ring-[#4169E1] focus:border-transparent outline-none
                         transition-all duration-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="industry"
              className="block mb-2 text-gray-700 font-medium"
            >
              Industry/Sector
            </label>
            <input
              type="text"
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-blue-100 rounded-lg focus:ring-2 
                         focus:ring-[#4169E1] focus:border-transparent outline-none
                         transition-all duration-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="country"
              className="block mb-2 text-gray-700 font-medium"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-blue-100 rounded-lg focus:ring-2 
                         focus:ring-[#4169E1] focus:border-transparent outline-none
                         transition-all duration-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-gray-700 font-medium"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-blue-100 rounded-lg focus:ring-2 
                         focus:ring-[#4169E1] focus:border-transparent outline-none
                         transition-all duration-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block mb-2 text-gray-700 font-medium"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-blue-100 rounded-lg focus:ring-2 
                         focus:ring-[#4169E1] focus:border-transparent outline-none
                         transition-all duration-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block mb-2 text-gray-700 font-medium"
            >
              Award Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-blue-100 rounded-lg focus:ring-2 
                         focus:ring-[#4169E1] focus:border-transparent outline-none
                         transition-all duration-300"
            >
              <option value="">Select a category</option>
              <option value="Excellence in Business Innovation">
                Excellence in Business Innovation
              </option>
              <option value="Outstanding Industrialist of the Year">
                Outstanding Industrialist of the Year
              </option>
              <option value="Breakthrough Research and Innovation">
                Breakthrough Research and Innovation
              </option>
              <option value="Sustainability and Environmental Impact">
                Sustainability and Environmental Impact
              </option>
              <option value="Excellence in Technology Development">
                Excellence in Technology Development
              </option>
              <option value="Entrepreneur of the Year">
                Entrepreneur of the Year
              </option>
              <option value="Social Impact and CSR Leadership">
                Social Impact and CSR Leadership
              </option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="achievements"
              className="block mb-2 text-gray-700 font-medium"
            >
              Brief Description of Achievements (250-500 words)
            </label>
            <textarea
              id="achievements"
              name="achievements"
              value={formData.achievements}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-blue-100 rounded-lg focus:ring-2 
                         focus:ring-[#4169E1] focus:border-transparent outline-none
                         transition-all duration-300"
              rows={6}
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="contributions"
              className="block mb-2 text-gray-700 font-medium"
            >
              Key Contributions and Impact
            </label>
            <textarea
              id="contributions"
              name="contributions"
              value={formData.contributions}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-blue-100 rounded-lg focus:ring-2 
                         focus:ring-[#4169E1] focus:border-transparent outline-none
                         transition-all duration-300"
              rows={4}
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="awards"
              className="block mb-2 text-gray-700 font-medium"
            >
              Awards and Recognitions (if any)
            </label>
            <textarea
              id="awards"
              name="awards"
              value={formData.awards}
              onChange={handleChange}
              className="w-full p-3 border-2 border-blue-100 rounded-lg focus:ring-2 
                         focus:ring-[#4169E1] focus:border-transparent outline-none
                         transition-all duration-300"
              rows={4}
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="supportingDocs"
              className="block mb-2 text-gray-700 font-medium"
            >
              Supporting Documents (if any)
            </label>
            <input
              type="file"
              id="supportingDocs"
              name="supportingDocs"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="w-full p-3 border-2 border-blue-100 rounded-lg focus:ring-2 
                         focus:ring-[#4169E1] focus:border-transparent outline-none
                         transition-all duration-300"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Nomination
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
