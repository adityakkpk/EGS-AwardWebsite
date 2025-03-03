"use client";

import type React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Update the handleFileChange function
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const maxSize = 5 * 1024 * 1024; // 5MB
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          supportingDocs: "Only PDF and Word documents are allowed",
        }));
        e.target.value = "";
        return;
      }

      if (file.size > maxSize) {
        setErrors((prev) => ({
          ...prev,
          supportingDocs: "File size should not exceed 5MB",
        }));
        e.target.value = "";
        return;
      }

      setSupportingDoc(file);
      setErrors((prev) => ({ ...prev, supportingDocs: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Full Name validation
    if (formData.fullName.length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters long";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{8,}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Achievements validation
    if (
      formData.achievements.length < 50 ||
      formData.achievements.length > 500
    ) {
      newErrors.achievements =
        "Achievement description must be between 50-500 words";
    }

    // Required fields validation
    [
      "designation",
      "organization",
      "industry",
      "country",
      "category",
      "contributions",
    ].forEach((field) => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      }
    });

    setErrors(newErrors);
    console.log("Validation errors:", newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Submitting the form");

    const isValid = validateForm();
    console.log("Form is valid:", isValid);
    console.log("Current errors:", errors);

    if (!isValid) {
      const firstError = document.querySelector(".error-message");
      firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    try {
      const formInputData = new FormData();
      console.log(formData);

      setIsSubmitting(true);

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
        toast.success("Nomination submitted successfully!");
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
    } catch (error: any) {
      console.error("Error submitting nomination:", error);
      toast.error("Failed to submit nomination: ", error.message);
      setIsSubmitting(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section with updated gradient */}
      <section className="bg-gradient-to-r from-[#2f2607] to-[#241c07] text-[#fdd660] py-20">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Nominate for IBIEA 2025</h1>
          <p className="text-lg opacity-90">
            Submit your nomination for the International Business Innovation and Excellence Awards
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto -mt-10 px-4 pb-16">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl font-bold mb-8 text-center text-[#2f2607]">
            Nomination Form
          </h1>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            encType="multipart/form-data"
          >
            {/* Input field styling */}
            <div className="md:col-span-1">
              <label
                htmlFor="fullName"
                className="block mb-2 text-[#2f2607] font-medium"
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
                className={`w-full p-3 border ${
                  errors.fullName ? 'border-red-500' : 'border-[#2f2607]/20'
                } rounded-lg outline-none focus:ring-2 focus:ring-[#2f2607] focus:border-[#2f2607] transition-all duration-300`}
              />
              {errors.fullName && (
                <p className="error-message text-red-500 text-sm mt-1">
                  {errors.fullName}
                </p>
              )}
            </div>

            <div className="md:col-span-1">
              <label
                htmlFor="designation"
                className="block mb-2 text-[#2f2607] font-medium"
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
                className={`w-full p-3 border ${
                  errors.designation ? "border-red-500" : "border-[#2f2607]/20"
                } rounded-lg outline-none focus:ring-2 focus:ring-[#2f2607] focus:border-[#2f2607] transition-all duration-300`}
              />
              {errors.designation && (
                <p className="error-message text-red-500 text-sm mt-1">
                  {errors.designation}
                </p>
              )}
            </div>
            <div className="md:col-span-1">
              <label
                htmlFor="organization"
                className="block mb-2 text-[#2f2607] font-medium"
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
                className={`w-full p-3 border ${
                  errors.organization ? "border-red-500" : "border-[#2f2607]/20"
                } rounded-lg outline-none focus:ring-2 focus:ring-[#2f2607] focus:border-[#2f2607] transition-all duration-300`}
              />
              {errors.organization && (
                <p className="error-message text-red-500 text-sm mt-1">
                  {errors.organization}
                </p>
              )}
            </div>
            <div className="md:col-span-1">
              <label
                htmlFor="industry"
                className="block mb-2 text-[#2f2607] font-medium"
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
                className={`w-full p-3 border ${
                  errors.industry ? "border-red-500" : "border-[#2f2607]/20"
                } rounded-lg outline-none focus:ring-2 focus:ring-[#2f2607] focus:border-[#2f2607] transition-all duration-300`}
              />
              {errors.industry && (
                <p className="error-message text-red-500 text-sm mt-1">
                  {errors.industry}
                </p>
              )}
            </div>
            <div className="md:col-span-1">
              <label
                htmlFor="country"
                className="block mb-2 text-[#2f2607] font-medium"
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
                className={`w-full p-3 border ${
                  errors.country ? "border-red-500" : "border-[#2f2607]/20"
                } rounded-lg outline-none focus:ring-2 focus:ring-[#2f2607] focus:border-[#2f2607] transition-all duration-300`}
              />
              {errors.country && (
                <p className="error-message text-red-500 text-sm mt-1">
                  {errors.country}
                </p>
              )}
            </div>
            <div className="md:col-span-1">
              <label
                htmlFor="email"
                className="block mb-2 text-[#2f2607] font-medium"
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
                className={`w-full p-3 border ${
                  errors.email ? "border-red-500" : "border-[#2f2607]/20"
                } rounded-lg outline-none focus:ring-2 focus:ring-[#2f2607] focus:border-[#2f2607] transition-all duration-300`}
              />
              {errors.email && (
                <p className="error-message text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="md:col-span-1">
              <label
                htmlFor="phone"
                className="block mb-2 text-[#2f2607] font-medium"
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
                className={`w-full p-3 border ${
                  errors.phone ? "border-red-500" : "border-[#2f2607]/20"
                } rounded-lg outline-none focus:ring-2 focus:ring-[#2f2607] focus:border-[#2f2607] transition-all duration-300`}
              />
              {errors.phone && (
                <p className="error-message text-red-500 text-sm mt-1">
                  {errors.phone}
                </p>
              )}
            </div>
            <div className="md:col-span-1">
              <label
                htmlFor="category"
                className="block mb-2 text-[#2f2607] font-medium"
              >
                Award Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className={`w-full p-3 border ${
                  errors.category ? "border-red-500" : "border-[#2f2607]/20"
                } rounded-lg outline-none focus:ring-2 focus:ring-[#2f2607] focus:border-[#2f2607] transition-all duration-300`}
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
              {errors.category && (
                <p className="error-message text-red-500 text-sm mt-1">
                  {errors.category}
                </p>
              )}
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="achievements"
                className="block mb-2 text-[#2f2607] font-medium"
              >
                Brief Description of Achievements (50-500 words)
              </label>
              <textarea
                id="achievements"
                name="achievements"
                value={formData.achievements}
                onChange={handleChange}
                required
                className={`w-full p-3 border ${
                  errors.achievements ? "border-red-500" : "border-[#2f2607]/20"
                } rounded-lg outline-none focus:ring-2 focus:ring-[#2f2607] focus:border-[#2f2607] transition-all duration-300`}
                rows={6}
              ></textarea>
              {errors.achievements && (
                <p className="error-message text-red-500 text-sm mt-1">
                  {errors.achievements}
                </p>
              )}
            </div>
            <div className="md:col-span-1">
              <label
                htmlFor="contributions"
                className="block mb-2 text-[#2f2607] font-medium"
              >
                Key Contributions and Impact
              </label>
              <textarea
                id="contributions"
                name="contributions"
                value={formData.contributions}
                onChange={handleChange}
                required
                className={`w-full p-3 border-2 ${
                  errors.contributions ? "border-red-500" : "border-[#2f2607]/20"
                } rounded-lg outline-none focus:ring-2 focus:ring-[#2f2607] focus:border-[#2f2607] transition-all duration-300`}
                rows={4}
              ></textarea>
              {errors.contributions && (
                <p className="error-message text-red-500 text-sm mt-1">
                  {errors.contributions}
                </p>
              )}
            </div>
            <div className="md:col-span-1">
              <label
                htmlFor="awards"
                className="block mb-2 text-[#2f2607] font-medium"
              >
                Awards and Recognitions (if any)
              </label>
              <textarea
                id="awards"
                name="awards"
                value={formData.awards}
                onChange={handleChange}
                className={`w-full p-3 border-2 ${
                  errors.awards ? "border-red-500" : "border-[#2f2607]/20"
                } rounded-lg outline-none focus:ring-2 focus:ring-[#2f2607] focus:border-[#2f2607] transition-all duration-300`}
                rows={4}
              ></textarea>
              {errors.awards && (
                <p className="error-message text-red-500 text-sm mt-1">
                  {errors.awards}
                </p>
              )}
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="supportingDocs"
                className="block mb-2 text-[#2f2607] font-medium"
              >
                Supporting Documents (if any)
              </label>
              <input
                type="file"
                id="supportingDocs"
                name="supportingDocs"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className={`w-full p-3 border-2 ${
                  errors.supportingDocs ? "border-red-500" : "border-[#2f2607]/20"
                } rounded-lg outline-none focus:ring-2 focus:ring-[#2f2607] focus:border-[#2f2607] transition-all duration-300`}
              />
              {errors.supportingDocs && (
                <p className="error-message text-red-500 text-sm mt-1">
                  {errors.supportingDocs}
                </p>
              )}
            </div>
            <div className="md:col-span-2 mt-6">
              <button
                type="submit"
                className="w-full bg-[#2f2607] text-[#fdd660] px-6 py-4 rounded-lg 
                         hover:bg-[#463a0f] transition-colors duration-300 
                         font-medium text-lg"
                disabled={isSubmitting}
              >
                Submit Nomination
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
