import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OpeningLogo from "../components/OpeningLogo";
import BeatGrid from "../components/BeatGrid";
import About from "../components/About";
import Licenses from "../components/Licenses";
import { ScrollProvider } from "../components/ScrollContext";

export default function Home() {
  return (
    <ScrollProvider>
      <Navbar />
      <OpeningLogo />
      <Hero />
      <About />
      <BeatGrid />
      <Licenses />
    </ScrollProvider>
  );
}