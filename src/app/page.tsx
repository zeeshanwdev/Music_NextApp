import FeatureCourses from "@/components/FeatureCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestamonial from "@/components/TestamonialCard";
import UpcomingWebiners from "@/components/UpcomingWebiners";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white-[0.2]">
      <HeroSection/>
      <FeatureCourses/>
      <WhyChooseUs/>
      <MusicSchoolTestamonial/>
      <UpcomingWebiners/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
