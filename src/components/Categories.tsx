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
        <h1 className="text-3xl font-bold mb-10 text-center text-[#4169E1] animate-fade-in">
          Award Categories
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl 
                         transform hover:-translate-y-1 transition-all duration-300
                         border-2 border-blue-100 hover:border-[#4169E1]
                         animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h2 className="text-xl font-bold mb-4 text-[#4169E1]">
                {category}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Recognizing outstanding achievements and contributions in{" "}
                {category.toLowerCase()}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
