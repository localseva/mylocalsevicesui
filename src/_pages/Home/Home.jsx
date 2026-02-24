import Categories from "../../_components/home/Categories/Categories";
import Footer from "../../_components/home/Footer/Footer";
import HeroSection from "../../_components/home/HeroSection/HeroSection";
import HowItWorks from "../../_components/home/HowItWorks/HowItWorks";
import Navbar from "../../_components/common/Navbar";
import StatsSection from "../../_components/home/StatsSection/StatsSection";
import WorkerCTA from "../../_components/home/WorkerCTA/WorkerCTA";


export default function Home() {
  return (
    <>
      <Navbar />
     
      <HeroSection />
      <StatsSection />
      <HowItWorks />
      <Categories />
      <WorkerCTA />
      <Footer />
    </>
  );
}