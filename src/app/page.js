import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BeatGrid from "../components/BeatGrid";
import About from "../components/About";
import Licenses from "../components/Licenses";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <BeatGrid />
      <Licenses />
    </>
  );
}