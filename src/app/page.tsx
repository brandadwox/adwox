import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServiceDetails from "@/components/ServiceDetails";
import CampaignSimulator from "@/components/CampaignSimulator";
import Founder from "@/components/Founder";
import WhyAdwox from "@/components/WhyAdwox";
import Industries from "@/components/Industries";
import Packages from "@/components/Packages";
import Process from "@/components/Process";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ServiceDetails />
      <CampaignSimulator />
      <Founder />
      <WhyAdwox />
      <Industries />
      <Packages />
      <Process />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}
