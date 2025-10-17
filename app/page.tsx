import Header from "./components/Header";
import Hero from "./components/Hero";
import MovieSection from './components/MovieSection';
import Partners from "./components/Partners";
import Features from "./components/Features";
import Ecosystem from "./components/Ecosystem";
import Core from "./components/Core";
import Awards from "./components/Awards";
import Medal from "./components/Medal";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      <Hero />
      <MovieSection />
      <Partners />
      <Ecosystem />
      <Core />
      <Medal />
      <Awards />
      <CallToAction />
      <Footer />
    </main>
  );
}
