import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServiceDetails from "@/components/ServiceDetails";
import Founder from "@/components/Founder";
import WhyAdwox from "@/components/WhyAdwox";
import Industries from "@/components/Industries";
import Packages from "@/components/Packages";
import Process from "@/components/Process";
import Clients from "@/components/Clients";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Test comment to verify git push and trigger Vercel deployment pipeline
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ServiceDetails />
      <Founder />
      <WhyAdwox />
      <Industries />
      <Packages />
      <Process />
      <Clients />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
