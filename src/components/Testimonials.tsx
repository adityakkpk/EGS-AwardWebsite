import { User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Innovation Tech",
    content:
      "Winning this award has significantly boosted our company's visibility and credibility in the industry.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Researcher, Green Energy Solutions",
    content:
      "The recognition from IBIEA has opened up new collaboration opportunities and accelerated our research efforts.",
  },
  {
    id: 3,
    name: "Dr. Alex Johnson",
    role: "Judge, IBIEA 2024",
    content:
      "I'm consistently impressed by the caliber of innovations and the passion of the participants in these awards.",
  },
];

export default function Testimonials() {
  return (
    <section
      className="pt-10 mx-auto"
      id="testimonials"
    >
      <div className="max-w-screen-xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-[#2f2607] 
                     animate-fade-in hover:scale-105 transition-transform duration-300">
          What People Say About Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-8 
                         transform hover:-translate-y-1 hover:shadow-xl 
                         transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${testimonial.id * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-[#2f2607]/10 p-3 rounded-full mr-4">
                  <User className="w-8 h-8 text-[#2f2607]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#2f2607]">
                    {testimonial.name}
                  </h3>
                  <p className="text-[#241c07]/60">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-[#241c07]/70 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
