import AboutUS from "@/components/AboutUS";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Image from "next/image";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <div>

      <Hero heading="placeholder heading" message="placeholder msg" />
      <AboutUS />
      <Info />
      <Projects/>
      <Footer />
    </div>
  );
}
