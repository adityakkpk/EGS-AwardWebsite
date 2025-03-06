export default function About() {
  return (
    <section id="about" className="">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <h1
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#2f2607] 
                     animate-fade-in hover:scale-105 transition-transform duration-300 pt-5"
        >
          About the Awards
        </h1>

        <div className="flex flex-wrap gap-5">
          <div className="w-[50%]">
            <div className="space-y-8 px-4 sm:px-10">
              <p
                className="text-lg font-semibold leading-relaxed text-[#241c07]/70 animate-fade-in"
                style={{ animationDelay: "200ms" }}
              >
                The International Business Innovation and Excellence Awards is a
                prestigious global event dedicated to recognizing and
                celebrating outstanding achievements in business, research, and
                innovation. This event honors industrialists, researchers, and
                innovators who have demonstrated excellence in their respective
                fields, contributing significantly to their industries and
                society.
              </p>

              <p
                className="text-lg font-semibold leading-relaxed text-[#241c07]/70 animate-fade-in"
                style={{ animationDelay: "400ms" }}
              >
                Organized by PLSPL Charitable Trust in association with Xclusive
                Oman, this esteemed award function will be hosted in multiple
                countries worldwide. The event serves as a platform to
                acknowledge exceptional contributions and inspire future leaders
                in various industries.
              </p>
            </div>
          </div>
          <div className="w-[45%]">
            <img
              src="/awards-ceremony.avif"
              alt=""
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl 
                        transition-all duration-500 transform hover:-translate-y-2
                        border-2 border-[#2f2607]/20 hover:border-[#2f2607]
                        animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-[#2f2607]">
            Who Can Apply?
          </h2>
          <ul className="space-y-4">
            {[
              "Business leaders and industrialists who have pioneered innovative practices",
              "Researchers who have made groundbreaking discoveries and contributions",
              "Entrepreneurs and innovators driving change and excellence in their domains",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 text-[#241c07]/70 
                             hover:text-[#2f2607] transition-colors duration-300
                             group"
              >
                <span
                  className="h-2 w-2 bg-[#2f2607] rounded-full flex-shrink-0
                                group-hover:scale-150 transition-transform duration-300"
                ></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl 
                        transition-all duration-500 transform hover:-translate-y-2
                        border-2 border-[#2f2607]/20 hover:border-[#2f2607]
                        animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-[#2f2607]">
            Key Highlights
          </h2>
          <ul className="space-y-4">
            {[
              "A global platform to showcase achievements",
              "Recognition from a prestigious panel of industry experts",
              "Networking opportunities with global leaders and innovators",
              "Exclusive media coverage and promotional benefits",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 text-[#241c07]/70 
                             hover:text-[#2f2607] transition-colors duration-300
                             group"
              >
                <span
                  className="h-2 w-2 bg-[#2f2607] rounded-full flex-shrink-0
                                group-hover:scale-150 transition-transform duration-300"
                ></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
