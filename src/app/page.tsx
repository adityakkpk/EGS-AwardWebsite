import Image from "next/image";
import Index from "../components/Index";
import About from "../components/About";
import Categories from "../components/Categories";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <>
      <Index />
      <About />
      <Categories />
      <Gallery />
      <Testimonials />
      <FAQ />
    </>
  );
}
