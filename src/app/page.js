import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartyIntro from "@/components/PartyIntro";
import LeaderProfile from "@/components/LeaderProfile";
import Vision from "@/components/Vision";
import Gallery from "@/components/Gallery";
import Events from "@/components/Events";
import News from "@/components/News";
import Support from "@/components/Support";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about-party">
        <PartyIntro />
      </section>
      <section id="about-me">
        <LeaderProfile />
      </section>
      <section id="vision">
        <Vision />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="events">
        <Events />
      </section>
      <section id="news">
        <News />
      </section>
      <section id="contact">
        <Support />
      </section>
      <section id="join">
        <CTA />
      </section>
    </div>
  );
}
