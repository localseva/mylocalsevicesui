
import Categories from "../../_components/home/Categories";
import Footer from "../../_components/home/Footer";
import HeroSection from "../../_components/home/HeroSection";
import HowItWorks from "../../_components/home/HowItWorks";
import Navbar from "../../_components/common/Navbar";
import StatsSection from "../../_components/home/StatsSection";
import WorkerCTA from "../../_components/home/WorkerCTA";


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