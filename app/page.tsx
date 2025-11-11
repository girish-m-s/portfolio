import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Footer from '@/components/Footer';
import MouseSpotlight from '@/components/MouseSpotlight';

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <MouseSpotlight />
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Left Column - Hero/Header */}
        <Hero />

        {/* Right Column - Main Content */}
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <About />
          <Experience />
          <Projects />
          <Certifications />
          <Footer />
        </main>
      </div>
    </div>
  );
}

