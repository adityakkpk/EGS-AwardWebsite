"use client";

import { SquareMenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-[#2f2607] text-[#f9dd8a] p-4 sticky top-0 z-10 shadow-lg transition-all duration-300 w-full">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center relative">
        <Link
          href="/"
          className="text-2xl font-bold hover:scale-105 hover:text-[#a09574] transition-transform duration-300 tracking-wide"
        >
          IBIEA 2025
        </Link>

        <ul className="hidden md:flex flex-wrap items-center text-white gap-3">
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
                className="px-3 py-2 rounded-md hover:bg-slate-900 transition-all duration-300
                         relative group hover:text-[#fdd660]"
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all 
                               duration-300 group-hover:w-full"
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex md:hidden">
          <div
            className={`${
              showMenu ? "rotate-180" : ""
            } duration-300 cursor-pointer`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <SquareMenuIcon className="h-8 w-8 text-white" />
          </div>
        </div>

        <div
          className={`md:hidden fixed inset-0 bg-black/50 transition-opacity duration-300 ${
            showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setShowMenu(false)}
        >
          <ul
            className={`flex flex-col gap-3 fixed text-white right-0 top-16 w-[280px]
            bg-[#491927] py-1 mt-[1px] rounded-md overflow-y-auto transition-transform duration-300 h-fit ${
              showMenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
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
                  className="px-3 py-2 rounded-md transition-all duration-300
                         relative group hover:text-[#BA9524] border-b w-full flex"
                  onClick={() => setShowMenu(false)} 
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all 
                               duration-300 group-hover:w-full"
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
