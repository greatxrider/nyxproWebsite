import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ClientMarquee from "@/components/ClientMarquee";
import About from "@/components/About";
import Team from "@/components/Team";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <ClientMarquee />
      <About />
      <Team />
      <Connect />
      <Footer />
    </main>
  );
}
