import Hero from "@/components/ui/Hero";
import InfoCards from "@/components/ui/InfoCards";
import OurWork from "@/components/ui/OurWork";
import ProgrammesSection from "@/components/ui/ProgrammesSection";
import Legacy from "@/components/ui/Legacy";
import Temp from "@/components/ui/Temp";

export default function Home() {
  return (
    <>
      <Temp />
      <Hero />
      <InfoCards />
      <Legacy />
      <OurWork />
      <ProgrammesSection />
    </>
  );
}
