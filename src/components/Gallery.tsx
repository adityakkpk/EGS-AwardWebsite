
import Image from "next/image"

const galleryItems = [
  { id: 1, src: "/placeholder.png", alt: "Award Ceremony 2024", caption: "Award Ceremony 2024" },
  {
    id: 2,
    src: "/placeholder.png",
    alt: "Winner - Excellence in Business Innovation",
    caption: "Winner - Excellence in Business Innovation",
  },
  { id: 3, src: "/placeholder.png", alt: "Networking Event", caption: "Networking Event" },
  { id: 4, src: "/placeholder.png", alt: "Keynote Speaker", caption: "Keynote Speaker" },
  { id: 5, src: "/placeholder.png", alt: "Award Trophy", caption: "Award Trophy" },
  { id: 6, src: "/placeholder.png", alt: "Panel Discussion", caption: "Panel Discussion" },
]

export default function Gallery() {
  return (
    <section className="pt-10 bg-gradient-to-b from-blue-50/50 to-white max-w-screen-xl mx-auto" id="gallery">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-10 text-center text-[#4169E1] animate-fade-in">
          Gallery
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-xl shadow-lg overflow-hidden
                         transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-500 transition-all duration-500
                         animate-fade-in"
              style={{ animationDelay: `${item.id * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transform group-hover:scale-110
                           transition-transform duration-500"
                />
              </div>
              <p className="p-4 text-center text-gray-700 font-medium">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

