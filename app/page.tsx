import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Contact from "@/components/home/Contact";
import FAQs from "@/components/home/FAQs";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Pricing from "@/components/home/Pricing";
import Ready from "@/components/home/Ready";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQs />
      <Ready />
      <Contact />
      <Footer />
    </main>
  );
}
