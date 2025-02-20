import Link from "next/link";
import { Award, Globe, Users } from "lucide-react";

export default function Home() {
  return (
    <section className="max-w-screen-xl mx-auto py-10">
      <div className="container mx-auto px-4">
        <section className="text-center py-20 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#4169E1]">
            International Business Innovation and Excellence Awards 2025
          </h1>
          <p className="text-xl mb-10 text-gray-600">
            Celebrating global excellence in business, research, and innovation
          </p>
          <Link
            href="/nominate"
            className="bg-[#4169E1] text-white px-8 py-4 rounded-lg 
                     hover:bg-blue-700 transform hover:-translate-y-1
                     transition-all duration-300 inline-block"
          >
            Nominate Now
          </Link>
        </section>

        <section className="grid md:grid-cols-3 gap-8 py-12">
          {[
            {
              Icon: Award,
              title: "Excellence Recognition",
              description:
                "Honoring outstanding achievements across various industries",
            },
            {
              Icon: Globe,
              title: "Global Platform",
              description: "Showcasing innovations on an international stage",
            },
            {
              Icon: Users,
              title: "Networking Opportunities",
              description: "Connect with industry leaders worldwide",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl bg-white
                       shadow-lg hover:shadow-xl
                       transform hover:-translate-y-2
                       transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <item.Icon className="mx-auto mb-6 text-[#4169E1]" size={48} />
              <h2 className="text-2xl font-semibold mb-4 text-[#4169E1]">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}
