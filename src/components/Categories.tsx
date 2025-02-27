"use client";

import { useState } from "react";

export default function Categories() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const categories = [
    {
      title: "Excellence in Business Innovation",
      description:
        "Recognizing companies that have implemented innovative business models, processes, or solutions that have significantly impacted their operations and market position.",
    },
    {
      title: "Outstanding Industrialist of the Year",
      description:
        "Honoring individuals who have demonstrated exceptional leadership and contributed to industrial growth and development.",
    },
    {
      title: "Breakthrough Research and Innovation",
      description:
        "Celebrating groundbreaking research initiatives and innovative solutions that address industry challenges or create new opportunities.",
    },
    {
      title: "Sustainability and Environmental Impact",
      description:
        "Recognizing organizations that have shown exceptional commitment to environmental sustainability and responsible business practices.",
    },
    {
      title: "Excellence in Technology Development",
      description:
        "Awarding technological innovations that have transformed business operations or created new possibilities in the industry.",
    },
    {
      title: "Entrepreneur of the Year",
      description:
        "Celebrating visionary entrepreneurs who have demonstrated outstanding business acumen and success in their ventures.",
    },
    {
      title: "Social Impact and CSR Leadership",
      description:
        "Honoring organizations that have made significant contributions to society through their CSR initiatives and social impact programs.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="categories" className="pt-10 max-w-screen-xl mx-auto">
      <div className="container mx-auto px-4 py-12">
        <h1
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#2f2607] 
                     animate-fade-in hover:scale-105 transition-transform duration-300"
        >
          Award Categories
        </h1>
        <div className="flex flex-col mt-20 lg:flex-row gap-12">
          {/* Categories Section */}
          <div className="lg:w-1/2">
            <div className="space-y-2">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full justify-start items-center gap-5 px-4 py-4 text-left 
                             text-lg font-bold text-[#2f2607]
                             transition-all duration-300"
                  >
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 -rotate-90 ${
                        activeIndex === index ? "-rotate-[270]" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                    <span>{category.title}</span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      activeIndex === index
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 pb-2 text-sm ml-10 text-black">
                        {category.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Information Section */}
          <div className="lg:w-1/2 space-y-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/awards-ceremony.webp"
                alt="Awards Ceremony"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#2f2607] animate-fade-in">
                About the Award Ceremony
              </h2>
              <p className="text-[#241c07]/70 leading-relaxed">
                The Excellence & Growth Summit Awards celebrate outstanding
                achievements across various sectors of industry and business.
                Our prestigious awards recognize innovation, leadership, and
                significant contributions to sustainable growth and development.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white p-4 rounded-lg shadow border-2 border-[#2f2607]/20">
                  <h4 className="font-bold text-[#2f2607]">Date</h4>
                  <p className="text-[#241c07]/70">December 15, 2025</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border-2 border-[#2f2607]/20">
                  <h4 className="font-bold text-[#2f2607]">Venue</h4>
                  <p className="text-[#241c07]/70">Grand Convention Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
