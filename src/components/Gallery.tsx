import Image from "next/image"

const galleryItems = [
  { id: 1, src: "/award.jpg", alt: "Award Ceremony 2024", caption: "Award Ceremony 2024" },
  {
    id: 2,
    src: "/img3.jpg",
    alt: "Winner - Excellence in Business Innovation",
    caption: "Winner - Excellence in Business Innovation",
  },
  { id: 3, src: "/img5.jpg", alt: "Networking Event", caption: "Networking Event" },
  { id: 4, src: "/img4.jpg", alt: "Keynote Speaker", caption: "Keynote Speaker" },
  { id: 5, src: "/img2.JPG", alt: "Award Trophy", caption: "Award Trophy" },
  { id: 6, src: "/img1.jpg", alt: "Panel Discussion", caption: "Panel Discussion" },
]

export default function Gallery() {
  return (
    <section className="pt-10 mx-auto" id="gallery">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-[#2f2607] 
                     animate-fade-in hover:scale-105 transition-transform duration-300">
          Gallery
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-xl shadow-lg overflow-hidden
                         transform hover:-translate-y-2 hover:shadow-2xl 
                         hover:shadow-[#2f2607]/20 transition-all duration-500
                         border-2 border-[#2f2607]/10 hover:border-[#2f2607]/30
                         animate-fade-in"
              style={{ animationDelay: `${item.id * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.src || "/placeholder.png"}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transform group-hover:scale-110
                           transition-transform duration-500"
                />
              </div>
              <p className="p-4 text-center text-[#2f2607]/80 font-bold">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

