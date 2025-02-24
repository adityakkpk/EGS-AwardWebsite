export default function Categories() {
  const categories = [
    "Excellence in Business Innovation",
    "Outstanding Industrialist of the Year",
    "Breakthrough Research and Innovation",
    "Sustainability and Environmental Impact",
    "Excellence in Technology Development",
    "Entrepreneur of the Year",
    "Social Impact and CSR Leadership",
  ];

  return (
    <section id="categories" className="pt-10 max-w-screen-xl mx-auto">
      <div className="container mx-auto px-4 py-12">
        <h1
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#2f2607] 
                     animate-fade-in hover:scale-105 transition-transform duration-300"
        >
          Award Categories
        </h1>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Categories Section */}
          <div className="lg:w-1/2">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl 
                           transform hover:-translate-y-1 transition-all duration-300
                           border-2 border-[#2f2607]/20 hover:border-[#2f2607]
                           animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-lg font-bold mb-2 text-[#2f2607]">
                    {category}
                  </h3>
                  <p className="text-sm text-[#241c07]/70 leading-relaxed">
                    Recognizing outstanding achievements and contributions in{" "}
                    {category.toLowerCase()}.
                  </p>
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
                className="w-full h-96 object-cover"
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
