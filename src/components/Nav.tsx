import Link from "next/link"

export default function Nav() {
  return (
    <nav className="bg-[#4169E1] text-white p-4 sticky top-0 z-10 shadow-lg transition-all duration-300">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center">
        <Link 
          href="#" 
          className="text-2xl font-bold hover:scale-105 transition-transform duration-300 tracking-wide"
        >
          IBIEA 2025
        </Link>
        <ul className="flex flex-wrap items-center gap-2 sm:gap-6">
          {[
            { href: "./", label: "Home" },
            { href: "./#about", label: "About" },
            { href: "./#categories", label: "Categories" },
            { href: "./#gallery", label: "Gallery" },
            { href: "./#testimonials", label: "Testimonials" },
            { href: "./#faq", label: "FAQ" },
            { href: "/nominate", label: "Nominate" },
          ].map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href}
                className="px-3 py-2 rounded-md hover:bg-blue-600 transition-all duration-300
                         relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all 
                               duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

