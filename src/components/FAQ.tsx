"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Who is eligible to participate in the IBIEA?",
    answer:
      "The IBIEA is open to business leaders, industrialists, researchers, and innovators from all sectors and countries who have made significant contributions to their fields.",
  },
  {
    question: "Is there a fee to participate in the awards?",
    answer:
      "The nomination process is free of charge. However, shortlisted nominees who wish to attend the award function in person are required to pay a fixed mandatory package cost, covering event logistics, hospitality, and associated expenses.",
  },
  {
    question: "How are the winners selected?",
    answer:
      "Winners are selected by a panel of expert judges based on the merit of their achievements, innovations, and impact in their respective fields.",
  },
  {
    question: "When and where will the award ceremony take place?",
    answer:
      "The award ceremony will be held in multiple countries worldwide. Specific dates and locations will be announced to the nominees and published on our website.",
  },
  {
    question: "Can I nominate someone else for an award?",
    answer:
      "Yes, you can nominate others who you believe deserve recognition for their achievements. Please ensure you have their consent and accurate information when submitting the nomination.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="pt-10"
      id="faq"
    >
      <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-[#2f2607] 
                     animate-fade-in hover:scale-105 transition-transform duration-300">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-[#2f2607]/20 rounded-xl overflow-hidden
                         shadow-sm hover:shadow-md transition-all duration-300
                         animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left
                           bg-white hover:bg-[#2f2607]/5 transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-[#2f2607]">
                  {faq.question}
                </span>
                <span
                  className="text-[#2f2607] transition-transform duration-300
                               transform"
                >
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out
                           ${
                             openIndex === index
                               ? "grid-rows-[1fr] opacity-100"
                               : "grid-rows-[0fr] opacity-0"
                           }`}
              >
                <div className="overflow-hidden">
                  <p className="p-6 bg-white text-[#241c07]/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
