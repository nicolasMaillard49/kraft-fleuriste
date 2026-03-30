import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CursorFollower from "@/components/CursorFollower";
import ScrollProgress from "@/components/ScrollProgress";
import PageLoader from "@/components/PageLoader";

export default function Home() {
  return (
    <>
      <PageLoader />
      <CursorFollower />
      <ScrollProgress />
      <Navbar />
      <SmoothScroll>
        <main className="grain-overlay">
          <Hero />
          <About />
          <Services />
          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
