"use client";

import { useState } from "react";

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "Business Excellence Awards",
      submenus: [
        {
          id: 1,
          name: "Excellence in Business Innovation",
          description:
            "Demonstrates measurable impact on industry through innovation.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 2,
          name: "Outstanding Industrialist of the Year",
          description: "Proven leadership with trackable growth metrics.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 3,
          name: "Entrepreneur of the Year",
          description: "Scalable business model with market traction.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 4,
          name: "Business Leadership Award",
          description: "Exemplary leadership with measurable achievements.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 5,
          name: "Excellence in Family-Owned Business",
          description:
            "Sustained success in multi-generational business leadership.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 6,
          name: "Best Emerging Business",
          description:
            "Rapid growth and market disruption with measurable success.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 7,
          name: "Fastest Growing Company",
          description: "Consistent revenue growth and strategic expansion.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 8,
          name: "Excellence in Customer Experience",
          description:
            "High customer retention, satisfaction, and service innovation.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 9,
          name: "Best Business Expansion Strategy",
          description:
            "Successful expansion strategies backed by data-driven insights.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 10,
          name: "Excellence in Supply Chain & Logistics",
          description: "Operational efficiency with industry best practices.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
      ],
    },
    {
      id: 2,
      name: "Research & Innovation Awards",
      submenus: [
        {
          id: 11,
          name: "Breakthrough Research and Innovation",
          description:
            "Documented breakthroughs in research leading to market adoption.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 12,
          name: "Excellence in Technology Development",
          description: "Tech-driven solutions with a clear growth roadmap.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 13,
          name: "Artificial Intelligence & Digital Transformation Excellence",
          description:
            "Proven AI/digital innovation impacting business operations.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 14,
          name: "Innovative Product of the Year",
          description: "Market-ready product with measurable uniqueness.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 15,
          name: "Smart Cities & Urban Innovation Award",
          description:
            "Urban transformation through technology and smart solutions.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 16,
          name: "Best R&D Initiative of the Year",
          description: "Track record of successful R&D investments.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 17,
          name: "Innovation in Healthcare & Biotechnology",
          description: "Health innovations with demonstrable market impact.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 18,
          name: "Best Use of Blockchain & Cybersecurity",
          description:
            "Security solutions that improve business trust and transparency.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 19,
          name: "Smart Manufacturing Excellence Award",
          description:
            "Advanced manufacturing techniques with industry-wide influence.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 20,
          name: "Best Innovative Startup",
          description: "New ventures with strong market validation.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
      ],
    },
    {
      id: 3,
      name: "Sustainability & Social Impact Awards",
      submenus: [
        {
          id: 21,
          name: "Sustainability and Environmental Impact Award",
          description: "Eco-friendly initiatives with quantifiable benefits.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 22,
          name: "Excellence in Renewable Energy Solutions",
          description: "Renewable energy projects showing significant impact.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 23,
          name: "Best CSR Initiative of the Year",
          description: "CSR programs with measurable social change.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 24,
          name: "Social Impact Leadership Award",
          description: "Projects improving social equity and well-being.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 25,
          name: "Ethical Business Practices Award",
          description:
            "Business ethics compliance and best practices implementation.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 26,
          name: "Women in Business Leadership Award",
          description:
            "Women-led initiatives demonstrating measurable success.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 27,
          name: "Excellence in Inclusive Business Practices",
          description:
            "Inclusive business practices fostering workplace diversity.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 28,
          name: "Excellence in Circular Economy Innovations",
          description:
            "Sustainable models integrating circular economy principles.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 29,
          name: "Best Community Development Initiative",
          description: "Community programs with measurable social return.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 30,
          name: "Best ESG (Environmental, Social, Governance) Strategy",
          description: "Strong ESG strategy with transparent reporting.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
      ],
    },
    {
      id: 4,
      name: "Bilateral Excellence & Cultural Exchange Awards",
      submenus: [
        {
          id: 31,
          name: "Best India-Oman Business Collaboration",
          description:
            "Cross-border collaborations generating economic impact.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 32,
          name: "Excellence in Bilateral Trade Relations",
          description:
            "Trade relationships fostering bilateral business growth.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 33,
          name: "Cultural Diplomacy & Exchange Excellence",
          description:
            "Successful cultural exchange initiatives backed by results.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 34,
          name: "Best Cross-Border Investment Initiative",
          description: "Foreign investments leading to economic progress.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 35,
          name: "Excellence in Indo-Omani Tourism Development",
          description: "Tourism developments strengthening bilateral ties.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 36,
          name: "Best Culinary & Hospitality Excellence",
          description:
            "Food and hospitality ventures enhancing cultural connections.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 37,
          name: "Heritage & Art Business Excellence",
          description:
            "Heritage conservation projects with sustainable revenue models.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 38,
          name: "Best Educational Collaboration between India & Oman",
          description:
            "Educational partnerships boosting bilateral student exchanges.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 39,
          name: "Excellence in Infrastructure Development",
          description:
            "Infrastructure collaborations fostering long-term growth.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 40,
          name: "Excellence in Health & Well-Being Collaboration",
          description:
            "Healthcare initiatives or wellness programs showing measurable impact.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
      ],
    },
    {
      id: 5,
      name: "Industry-Specific Awards",
      submenus: [
        {
          id: 41,
          name: "Excellence in Financial Services & Banking",
          description: "Financial services demonstrating market leadership.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 42,
          name: "Best Manufacturing Company of the Year",
          description: "Manufacturing efficiency and market success.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 43,
          name: "Excellence in E-Commerce & Digital Retail",
          description: "E-commerce growth through digital strategies.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 44,
          name: "Best Real Estate & Construction Business",
          description:
            "Real estate and construction projects with lasting impact.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 45,
          name: "Hospitality & Tourism Excellence Award",
          description: "Tourism services enhancing customer experiences.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 46,
          name: "Best Retail Business of the Year",
          description: "Retail businesses with innovation and consumer focus.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 47,
          name: "Excellence in Healthcare & Pharmaceuticals",
          description: "Healthcare solutions with proven market success.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 48,
          name: "Best Education & EdTech Innovation",
          description: "EdTech innovations revolutionizing learning.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 49,
          name: "Automotive & Mobility Excellence Award",
          description: "Automotive advancements with industry-wide adoption.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
        {
          id: 50,
          name: "Best Agribusiness & Food Tech Innovation",
          description: "Agri-tech solutions transforming food production.",
          image: "/awards-ceremony.webp",
          date: "December 15, 2025",
          venue: "Grand Convention Center",
        },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<{
    id: number;
    name: string;
    description: string;
    image: string;
    date: string;
    venue: string;
  } | null>(null);

  // Reset selected item when category changes
  const handleCategoryClick = (categoryId: number) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
      setSelectedItem(null);
    } else {
      setSelectedCategory(categoryId);
      setSelectedItem(null);
    }
  };

  return (
    <section id="categories" className="pt-10 max-w-screen-xl mx-auto">
      <div className="p-4 sm:p-8 w-full max-w-7xl mx-auto">
        <h1
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#2f2607] 
                     animate-fade-in hover:scale-105 transition-transform duration-300"
        >
          Award Categories
        </h1>
        <div>
          {/* Left side - Accordion */}
          {/* <div className="w-full lg:w-1/2"> */}
          <div className="w-full">
            {categories.map((category) => (
              <div key={category.id}>
                <button
                  className={`text-left p-3 sm:p-4 font-semibold text-base sm:text-lg 
                  rounded-t-lg transition-colors duration-200
                  flex gap-2 items-center
                  `}
                  // ${selectedCategory === category.id ? "bg-red-100" : ""}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-200 -rotate-90
                        ${
                          selectedCategory === category.id
                            ? "-rotate-[270]"
                            : ""
                        }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                  {category.name}
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden
                ${
                  selectedCategory === category.id
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
                >
                  <div className="border border-black rounded-b-lg ml-10 rounded">
                    {category.submenus.map((item) => (
                      <button
                        key={item.id}
                        className={`w-full text-left py-1 px-4 text-sm sm:text-base border-b border-black last:border-b-0 transition-colors duration-200 flex items-center flex-wrap
                        `}
                        onClick={() => setSelectedItem(item)}
                      >
                        <div className="font-bold w-[30%] border-r border-black min-w-fit">
                          <span> · </span>
                          {item.name}
                        </div>
                        <div className="text-gray-700 w-1/2 min-w-fit pl-3">
                          {item.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Item Details Card */}
          {/* <div className="w-full lg:w-1/2">
            <div
              className={`transition-all duration-300 ease-in-out transform
            ${
              selectedItem
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0 pointer-events-none"
            }`}
            >
              {selectedItem && (
                <div className="border rounded-lg lg:sticky lg:top-12">
                  <div className="rounded-xl overflow-hidden shadow-lg mb-3 sm:mb-4">
                    <img
                      src={selectedItem.image}
                      alt="Awards Ceremony"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                    {selectedItem.name}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700">
                    {selectedItem.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-white p-4 rounded-lg shadow border-2 border-[#2f2607]/20">
                      <h4 className="font-bold text-[#2f2607]">Date</h4>
                      <p className="text-[#241c07]/70">{selectedItem.date}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow border-2 border-[#2f2607]/20">
                      <h4 className="font-bold text-[#2f2607]">Venue</h4>
                      <p className="text-[#241c07]/70">{selectedItem.venue}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
