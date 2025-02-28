import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Categories", href: "/#categories" },
    { name: "Gallery", href: "/#gallery" },
    { name: "FAQ", href: "/#faq" },
    { name: "Nominate", href: "/nominate" },
  ]

  return (
    <footer className="bg-[#2f2607] text-[#fdd660] py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 tracking-wide animate-fade-in">
              International Business Innovation and Excellence Awards
            </h3>
            <p className="text-blue-100 leading-relaxed animate-fade-in">
              Organized by PLSPL Charitable Trust in Association with Xclusive Oman
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.href} 
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}>
                  <Link 
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-colors duration-300
                             flex items-center space-x-2 group"
                  >
                    <span className="h-1 w-1 bg-blue-100 rounded-full group-hover:w-2 
                                   transition-all duration-300"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              {[
                { 
                  icon: Mail, 
                  content: "info@ibiea.com",
                  href: "mailto:info@ibiea.com"
                },
                { 
                  icon: Phone, 
                  content: "+1 234 567 8900",
                  href: "tel:+12345678900"
                },
                { 
                  icon: MapPin, 
                  content: "123 Business Avenue, New York, NY 10001",
                  href: "#"
                },
              ].map((item, index) => (
                <li key={index} 
                    className="flex items-center space-x-3 text-blue-100 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}>
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <a href={item.href} 
                     className="hover:text-white transition-colors duration-300">
                    {item.content}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: LinkedIn, href: "https://linkedin.com" },
                { icon: Instagram, href: "https://instagram.com" },
              ].map((social, index) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 text-blue-500 hover:text-blue-200 
                           transition-all duration-300 opacity-80 hover:opacity-100
                           animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-6 border-t border-blue-300/20 text-center">
          <p className="text-blue-100 text-sm">
            &copy; {new Date().getFullYear()} International Business Innovation and Excellence Awards. 
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}