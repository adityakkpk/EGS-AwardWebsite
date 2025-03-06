import Link from "next/link";
import { Award, Globe, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      <section
        className="text-center py-20 h-[500px] animate-fade-in bg-[url('/banner.jpg')]"
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="max-w-screen-xl mx-auto bg-[#7e7e7e98] p-10 py-12 rounded-xl">
          <h1 className="text-2xl md:text-5xl font-bold mb-6 text-[#ffcf41]">
            International Business Innovation and Excellence Awards 2025
          </h1>
          <p className="text-sm md:text-xl mb-10 text-black bg-[#d3c1c1] w-fit mx-auto px-2 py-1 rounded">
            Celebrating global excellence in business, research, and innovation
          </p>
          <Link
            href="/nominate"
            className="bg-[#2f2607] text-[#fdd660] px-8 py-4 rounded-lg font-semibold text-lg 
                     hover:bg-[#241c07] transform hover:-translate-y-1
                     transition-all duration-300 inline-block"
          >
            Nominate Now
          </Link>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto py-10">
        <div className="container mx-auto px-4">
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
                <item.Icon className="mx-auto mb-6 text-[#2f2607]" size={48} />
                <h2 className="text-2xl font-semibold mb-4 text-[#2f2607]">
                  {item.title}
                </h2>
                <p className="text-[#241c07]/70">{item.description}</p>
              </div>
            ))}
          </section>
        </div>
      </section>
    </>
  );
}
