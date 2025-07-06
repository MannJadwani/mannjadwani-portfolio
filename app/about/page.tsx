import { ArrowLeft, Github, Linkedin, Mail, Star } from 'lucide-react';
import Link from 'next/link';
import AnimatedLink from '../components/AnimatedLink';
import MobileMenu from '../components/MobileMenu';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Glassmorphic floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-16 h-16 md:w-32 md:h-32 bg-white/5 backdrop-blur-3xl rounded-full"></div>
        <div className="absolute top-40 right-8 md:right-32 w-12 h-12 md:w-24 md:h-24 bg-white/3 backdrop-blur-2xl rounded-full"></div>
        <div className="absolute bottom-32 left-4 md:left-16 w-20 h-20 md:w-40 md:h-40 bg-white/4 backdrop-blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-8 md:right-20 w-14 h-14 md:w-28 md:h-28 bg-white/2 backdrop-blur-xl rounded-full"></div>
      </div>
      
      {/* Decorative dots pattern */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8">
        <div className="grid grid-cols-4 gap-1 md:gap-2">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/30 rounded-full"></div>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-center p-4 md:p-8 space-y-4 md:space-y-0">
        <div className="flex items-center justify-between md:justify-start">
          <AnimatedLink 
            href="/"
            className="flex items-center space-x-2 px-3 py-2 md:px-4 md:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 hover:bg-white/20 hover:text-white transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">About</span>
          </AnimatedLink>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
        <div className="text-center px-4 py-2 md:px-6 md:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
          <span className="text-white font-medium text-sm md:text-base">Mann Jadwani.</span>
        </div>
        <div className="hidden md:block text-white/60 text-sm px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">02</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* About Section */}
        <div className="px-4 py-8 md:px-8 md:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-12 relative overflow-hidden">
              {/* Glassmorphic shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4 mb-6 md:mb-8">
                  <h1 className="text-4xl md:text-7xl font-bold text-white">About</h1>
                  <div className="self-start md:mt-4 p-2 md:p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl">
                    <Star className="w-8 h-8 md:w-12 md:h-12 text-white fill-current" />
                  </div>
                </div>
                <div className="max-w-3xl space-y-4 md:space-y-6">
                  <p className="text-white/90 text-base md:text-lg leading-relaxed">
                    I'm <span className="font-semibold text-white">Mann Jadwani</span>, a tech builder and AI enthusiast driven by one goal — turning ambitious ideas into real, scalable products.
                  </p>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">
                    Currently, I serve as the <span className="font-semibold text-white">Head of Tech at DebtCircle</span>, where we're reshaping how the debt market operates. Alongside that, I'm building <span className="font-semibold text-white">NeuralARC</span>, a company focused on integrating AI into businesses and creating the tools that will define the next decade — from AI search engines to intelligent productivity systems.
                  </p>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">
                    I specialize in building products at the intersection of <span className="font-semibold text-white">AI, automation, and blockchain</span>, using technologies like Solidity, Next.js, React, JavaScript, Python, HTML, and CSS.
                  </p>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">
                    My work spans AI platforms, automation tools, real estate tokenization, legal tech, and intelligent SaaS products — all aimed at making businesses faster, smarter, and more efficient.
                  </p>
                  <p className="text-white font-semibold text-base md:text-lg">
                    If you're building something ambitious — let's connect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="px-4 py-8 md:px-8 md:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-12 text-center relative overflow-hidden group">
              {/* Glassmorphic shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-8">Let's Build Something Amazing</h2>
                <p className="text-white/70 text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto">
                  Ready to turn your ambitious ideas into reality? I'm always excited to collaborate on innovative projects.
                </p>
                <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 md:gap-6">
                  <a href="mailto:mann@neuralarc." className="flex items-center justify-center space-x-3 px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl text-white font-semibold hover:bg-white/20 hover:border-white/30 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 relative z-10" />
                    <span className="relative z-10 text-sm md:text-base">Get in Touch</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                  </a>
                  <a href="https://www.linkedin.com/in/mann-jadwani-3415b4238/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 px-6 py-3 md:px-8 md:py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl text-white font-semibold hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/5 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
                    <Linkedin className="w-4 h-4 md:w-5 md:h-5 relative z-10" />
                    <span className="relative z-10 text-sm md:text-base">LinkedIn</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                  </a>
                  <a href="https://github.com/mannjadwani" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 px-6 py-3 md:px-8 md:py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl text-white font-semibold hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/5 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
                    <Github className="w-4 h-4 md:w-5 md:h-5 relative z-10" />
                    <span className="relative z-10 text-sm md:text-base">GitHub</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                  </a>
                  <a href="https://www.instagram.com/developer_mannjadwani/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 px-6 py-3 md:px-8 md:py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl text-white font-semibold hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/5 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
                    <svg className="w-4 h-4 md:w-5 md:h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="relative z-10 text-sm md:text-base">Instagram</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed bottom-6 right-6 z-20">
        <div className="flex items-center justify-center">
          <div className="hidden md:flex items-center space-x-4">
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
              href="/contact"
              className="px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/90 font-medium hover:bg-white/20 hover:border-white/30 hover:text-white hover:shadow-lg hover:shadow-white/20 transition-all duration-500 ease-out relative overflow-hidden group"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </AnimatedLink>
            <AnimatedLink
              href="/"
              className="px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/90 font-medium hover:bg-white/20 hover:border-white/30 hover:text-white hover:shadow-lg hover:shadow-white/20 transition-all duration-500 ease-out relative overflow-hidden group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </AnimatedLink>
          </div>
        </div>
      </nav>
    </div>
  );
} 