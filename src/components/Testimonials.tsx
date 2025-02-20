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
      className="pt-10 bg-blue-50 max-w-screen-xl mx-auto"
      id="testimonials"
    >
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-12 text-center text-[#4169E1] animate-fade-in">
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
                <div className="bg-[#4169E1]/10 p-3 rounded-full mr-4">
                  <User className="w-8 h-8 text-[#4169E1]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#4169E1]">
                    {testimonial.name}
                  </h3>
                  <p className="text-blue-600/60">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
