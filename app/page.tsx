import Spline from '@splinetool/react-spline/next';
import AnimatedLink from './components/AnimatedLink';
import MobileMenu from './components/MobileMenu';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Mann Jadwani — AI, product, and full‑stack engineering. Explore projects, skills, and ways to collaborate.',
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Spline 3D Scene */}
      <section className="h-screen relative justify-center items-center flex overflow-hidden">
  <div className="md:absolute inset-0 z-0  w-full justify-center items-center overflow-hidden h-[120vh]"
     
  
  >
    
    <Spline scene="https://prod.spline.design/gV1jWLm45Jvm4eNh/scene.splinecode" />
    <div className="block md:hidden w-full h-[50vh] absolute inset-0 z-20 top-120 "
    style={{
      background: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,1))",
    }}
    ></div>
  </div>
  
  
</section>

      {/* Mobile Menu Component */}
      <MobileMenu />

      {/* Bottom Center Contact Button */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <AnimatedLink
          href="/contact"
          className="inline-block px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white font-bold text-lg hover:bg-white/20 hover:border-white/30 hover:text-white hover:shadow-xl hover:shadow-white/25 transition-all duration-500 ease-out relative overflow-hidden group"
        >
          <span className="relative z-10">Contact Me</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"></div>
        </AnimatedLink>
      </div>

      {/* Navbar */}
      <nav className="fixed bottom-6 right-6 z-20">
        <div className="flex items-center justify-center">
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <AnimatedLink
              href="/about"
              className="px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/90 font-medium hover:bg-white/20 hover:border-white/30 hover:text-white hover:shadow-lg hover:shadow-white/20 transition-all duration-500 ease-out relative overflow-hidden group"
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </AnimatedLink>
            <AnimatedLink
              href="/projects"
              className="px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/90 font-medium hover:bg-white/20 hover:border-white/30 hover:text-white hover:shadow-lg hover:shadow-white/20 transition-all duration-500 ease-out relative overflow-hidden group"
            >
              <span className="relative z-10">Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </AnimatedLink>
            <AnimatedLink
              href="/skills"
              className="px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/90 font-medium hover:bg-white/20 hover:border-white/30 hover:text-white hover:shadow-lg hover:shadow-white/20 transition-all duration-500 ease-out relative overflow-hidden group"
            >
              <span className="relative z-10">Skills</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </AnimatedLink>
            <AnimatedLink
              href="/utility"
              className="px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/90 font-medium hover:bg-white/20 hover:border-white/30 hover:text-white hover:shadow-lg hover:shadow-white/20 transition-all duration-500 ease-out relative overflow-hidden group"
            >
              <span className="relative z-10">Utilities</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </AnimatedLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
