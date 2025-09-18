import { ArrowLeft, ExternalLink, Github, Star, Zap, Database, Brain, Smartphone, Globe, Lock, TrendingUp, Code, Layers, Settings, Monitor, Cpu } from 'lucide-react';
import Link from 'next/link';
import AnimatedLink from '../components/AnimatedLink';
import MobileMenu from '../components/MobileMenu';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore 28 projects across AI, automation, web platforms, data panels, and blockchain by Mann Jadwani.',
};

export default function Projects() {
  const projects = [
    // 🌐 Websites & Live Platforms
    {
      id: 1,
      title: "Matrix by NeuralARC",
      description: "Multi-agent AI workspace enabling seamless collaboration between AI agents for complex task automation and workflow management.",
      category: "Websites & Live Platforms",
      technologies: ["React", "AI Agents", "WebSocket", "Node.js"],
      status: "Live",
      icon: <Brain className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-blue-500",
      link: "https://matrix.neuralarc.in",
      github: null
    },
    {
      id: 2,
      title: "NeuralARC",
      description: "AI products & ecosystem platform providing comprehensive AI tools and services for modern businesses.",
      category: "Websites & Live Platforms",
      technologies: ["Next.js", "AI/ML", "Cloud", "API"],
      status: "Live",
      icon: <Brain className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-blue-600",
      link: "https://neuralarc.in",
      github: null
    },
    {
      id: 3,
      title: "Beacon Wealth",
      description: "Financial consulting & advisory platform providing personalized wealth management solutions.",
      category: "Websites & Live Platforms",
      technologies: ["React", "FinTech", "Analytics", "CRM"],
      status: "Live",
      icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-green-500",
      link: "https://beaconwealth.in",
      github: null
    },
    {
      id: 4,
      title: "Beacon Mauritius",
      description: "International branch of Beacon offering financial services and consulting in the Mauritius market.",
      category: "Websites & Live Platforms",
      technologies: ["Next.js", "International", "Finance", "CMS"],
      status: "Live",
      icon: <Globe className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-green-600",
      link: "https://beaconmauritius.vercel.app",
      github: null
    },
    {
      id: 5,
      title: "Beacon Arabia Consulting",
      description: "MENA region consulting services specializing in financial advisory and business development.",
      category: "Websites & Live Platforms",
      technologies: ["React", "MENA", "Consulting", "CRM"],
      status: "Live",
      icon: <Globe className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-green-700",
      link: "https://beaconarabiaconsulting.com",
      github: null
    },
    {
      id: 6,
      title: "Eqivision Beta",
      description: "AI-powered stock recommendations platform providing intelligent market analysis and investment insights.",
      category: "Websites & Live Platforms",
      technologies: ["Python", "AI/ML", "React", "Finance"],
      status: "Beta",
      icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-purple-500",
      link: "https://eqivision.vercel.app",
      github: null
    },
    {
      id: 7,
      title: "Codium",
      description: "AI-assisted coding tools platform enhancing developer productivity with intelligent code generation.",
      category: "Websites & Live Platforms",
      technologies: ["AI/ML", "Code Gen", "React", "VSCode"],
      status: "Live",
      icon: <Code className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-indigo-500",
      link: "https://codium.tech",
      github: null
    },
    {
      id: 8,
      title: "India League Tables",
      description: "Debt market league tables platform providing comprehensive market insights and analytics (Beta version).",
      category: "Websites & Live Platforms",
      technologies: ["Next.js", "Vercel", "Analytics", "Finance"],
      status: "Beta",
      icon: <Database className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-orange-500",
      link: "https://indialeaguetables.vercel.app",
      github: null
    },
    {
      id: 9,
      title: "India League Tables",
      description: "Main site for debt market insights & intelligence with comprehensive league tables and market data.",
      category: "Websites & Live Platforms",
      technologies: ["React", "Analytics", "Finance", "API"],
      status: "Live",
      icon: <Database className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-orange-600",
      link: "https://indialeaguetables.com",
      github: null
    },
    {
      id: 10,
      title: "DebtCircle",
      description: "Comprehensive debt ecosystem platform revolutionizing debt market operations with advanced analytics.",
      category: "Websites & Live Platforms",
      technologies: ["Next.js", "PostgreSQL", "TypeScript", "AWS"],
      status: "Live",
      icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-red-500",
      link: "https://debtcircle.com",
      github: null
    },

    // 💡 AI & Product Innovations
    {
      id: 11,
      title: "AccessAllGPT",
      description: "LLM aggregator with AI context switching - NeuralARC product enabling seamless switching between AI models.",
      category: "AI & Product Innovations",
      technologies: ["Python", "LLM", "AI", "API"],
      status: "Live",
      icon: <Brain className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-blue-500",
      link: "https://accessallgpt.com",
      github: null
    },
    {
      id: 12,
      title: "DevBridge",
      description: "AI-powered collaboration platform bridging the gap between developers and non-developers.",
      category: "AI & Product Innovations",
      technologies: ["React", "AI", "Collaboration", "WebSocket"],
      status: "Live",
      icon: <Code className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-cyan-500",
      link: "https://devbridge.neuralarc.in",
      github: null
    },
    {
      id: 13,
      title: "DocumentAI",
      description: "AI-driven automated documentation & guides generator streamlining technical writing processes.",
      category: "AI & Product Innovations",
      technologies: ["Python", "NLP", "AI", "Automation"],
      status: "Live",
      icon: <Database className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-green-500",
      link: "https://documentai.neuralarc.in",
      github: null
    },
    {
      id: 14,
      title: "FitnessAI",
      description: "AI fitness tracking & health recommendations platform with personalized workout and nutrition plans.",
      category: "AI & Product Innovations",
      technologies: ["React", "AI/ML", "Health", "Mobile"],
      status: "Live",
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-red-500",
      link: "https://fitnessai.neuralarc.in",
      github: null
    },
    {
      id: 15,
      title: "Eqivision",
      description: "Stock recommendations & AI-generated market reports providing intelligent investment insights.",
      category: "AI & Product Innovations",
      technologies: ["Python", "AI/ML", "Finance", "React"],
      status: "Live",
      icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-purple-500",
      link: "https://eqivision.com",
      github: null
    },
    {
      id: 16,
      title: "CutZero",
      description: "Zero-cost business automation platform reducing operational overhead with intelligent process optimization.",
      category: "AI & Product Innovations",
      technologies: ["React", "Automation", "Business", "AI"],
      status: "Live",
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-yellow-500",
      link: null,
      github: null
    },
    {
      id: 17,
      title: "AI Search Engine",
      description: "AI-based intelligent search assistant providing contextual and semantic search capabilities.",
      category: "AI & Product Innovations",
      technologies: ["Python", "AI/ML", "Search", "NLP"],
      status: "Beta",
      icon: <Globe className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-indigo-500",
      link: null,
      github: null
    },
    {
      id: 18,
      title: "AI Slides Maker",
      description: "AI-powered presentation generator creating professional slides from text input automatically.",
      category: "AI & Product Innovations",
      technologies: ["Python", "AI", "Design", "Automation"],
      status: "Live",
      icon: <Layers className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-pink-500",
      link: null,
      github: null
    },
    {
      id: 19,
      title: "AI Report Builder",
      description: "Generates comprehensive research reports with AI in seconds, streamlining business intelligence.",
      category: "AI & Product Innovations",
      technologies: ["Python", "AI/ML", "Reports", "Analytics"],
      status: "Live",
      icon: <Database className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-teal-500",
      link: null,
      github: null
    },
    {
      id: 20,
      title: "Neuro",
      description: "AI memory manager for persistent workflows enabling continuous context across AI interactions.",
      category: "AI & Product Innovations",
      technologies: ["Python", "AI", "Memory", "Workflows"],
      status: "Beta",
      icon: <Brain className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-violet-500",
      link: null,
      github: null
    },
    {
      id: 21,
      title: "Legal Document AI",
      description: "Automated legal document analysis platform with AI-powered contract review and compliance checking.",
      category: "AI & Product Innovations",
      technologies: ["Python", "NLP", "Legal", "AI"],
      status: "Live",
      icon: <Lock className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-gray-500",
      link: null,
      github: null
    },
    {
      id: 22,
      title: "Auto Podcast Generator",
      description: "AI platform that transforms text content into engaging podcasts with natural voice synthesis.",
      category: "AI & Product Innovations",
      technologies: ["Python", "AI", "Audio", "TTS"],
      status: "Live",
      icon: <Smartphone className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-emerald-500",
      link: null,
      github: null
    },

    // 🏗️ Data Platforms & Panels
    {
      id: 23,
      title: "Real Estate Tokenization Platform",
      description: "Blockchain-backed real estate investment platform enabling fractional ownership and automated transactions.",
      category: "Data Platforms & Panels",
      technologies: ["Solidity", "Web3.js", "React", "Blockchain"],
      status: "Development",
      icon: <Lock className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-orange-500",
      link: null,
      github: null
    },
    {
      id: 24,
      title: "Arranger Panel (DebtCircle)",
      description: "Debt arranger data collection & analytics panel providing comprehensive market insights and reporting.",
      category: "Data Platforms & Panels",
      technologies: ["React", "Analytics", "Finance", "PostgreSQL"],
      status: "Live",
      icon: <Database className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-red-500",
      link: null,
      github: null
    },
    {
      id: 25,
      title: "Admin Panels & Content Panels",
      description: "Custom management systems providing comprehensive admin and content management capabilities.",
      category: "Data Platforms & Panels",
      technologies: ["React", "Node.js", "Admin", "CMS"],
      status: "Live",
      icon: <Settings className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-gray-500",
      link: null,
      github: null
    },
    {
      id: 26,
      title: "Bulk Upload Panels",
      description: "Large dataset ingestion tools enabling efficient bulk data processing and management.",
      category: "Data Platforms & Panels",
      technologies: ["Python", "Data", "Upload", "Processing"],
      status: "Live",
      icon: <Cpu className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-blue-500",
      link: null,
      github: null
    },
    {
      id: 27,
      title: "Forum for DebtCircle",
      description: "Community & discussion platform fostering collaboration within the debt market ecosystem.",
      category: "Data Platforms & Panels",
      technologies: ["React", "Community", "Forum", "Social"],
      status: "Live",
      icon: <Globe className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-green-500",
      link: null,
      github: null
    },
    {
      id: 28,
      title: "Envify",
      description: "Sustainability-driven website promoting environmental awareness and green business practices.",
      category: "Data Platforms & Panels",
      technologies: ["React", "Sustainability", "Environment", "CMS"],
      status: "Live",
      icon: <Layers className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-green-600",
      link: "https://envifymedia.com",
      github: null
    }
  ];

  const categories = ["All", "Websites & Live Platforms", "AI & Product Innovations", "Data Platforms & Panels"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Glassmorphic floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-8 md:left-32 w-20 h-20 md:w-40 md:h-40 bg-white/3 backdrop-blur-3xl rounded-full"></div>
        <div className="absolute top-20 right-8 md:right-20 w-16 h-16 md:w-32 md:h-32 bg-white/5 backdrop-blur-2xl rounded-full"></div>
        <div className="absolute bottom-40 left-4 md:left-20 w-18 h-18 md:w-36 md:h-36 bg-white/4 backdrop-blur-3xl rounded-full"></div>
        <div className="absolute bottom-32 right-8 md:right-32 w-14 h-14 md:w-28 md:h-28 bg-white/2 backdrop-blur-xl rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 md:w-24 md:h-24 bg-white/3 backdrop-blur-2xl rounded-full"></div>
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
            <span className="text-sm">Projects</span>
          </AnimatedLink>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
        <div className="text-center px-4 py-2 md:px-6 md:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
          <span className="text-white font-medium text-sm md:text-base">Mann Jadwani.</span>
        </div>
        <div className="hidden md:block text-white/60 text-sm px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">03</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 py-8 md:px-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-8 md:mb-16">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-12 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-center space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mb-6">
                  <h1 className="text-3xl md:text-6xl font-bold text-white">My Projects</h1>
                  <div className="self-center md:self-auto p-2 md:p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl">
                    <Code className="w-8 h-8 md:w-12 md:h-12 text-white" />
                  </div>
                </div>
                <p className="text-white/70 text-base md:text-xl max-w-3xl mx-auto">
                  Innovative solutions across AI, blockchain, and automation — each project designed to solve real problems and push technological boundaries.
                </p>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8 md:mb-12">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6">
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-3 py-2 md:px-6 md:py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 hover:bg-white/20 hover:text-white transition-all duration-300 relative overflow-hidden group text-xs md:text-base"
                  >
                    <span className="relative z-10">{category}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group relative overflow-hidden">
                {/* Glassmorphic shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4 md:mb-6">
                    <div className={`${project.color} w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium ${
                        project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                        'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="mb-4 md:mb-6">
                    <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:justify-between mb-2 md:mb-3">
                      <h3 className="text-lg md:text-xl font-bold text-white">{project.title}</h3>
                      <span className="text-xs text-white/50 px-2 py-1 bg-white/5 rounded-full self-start md:self-auto">{project.category}</span>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed mb-3 md:mb-4">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 md:px-3 md:py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs text-white/80">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Actions */}
                  <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:flex-1 flex items-center justify-center space-x-2 px-3 py-2 md:px-4 md:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg md:rounded-xl text-white/90 hover:bg-white/20 hover:text-white transition-all duration-300"
                      >
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="text-xs md:text-sm">View Live</span>
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:flex-1 flex items-center justify-center space-x-2 px-3 py-2 md:px-4 md:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg md:rounded-xl text-white/90 hover:bg-white/10 hover:text-white transition-all duration-300"
                      >
                        <Github className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="text-xs md:text-sm">Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 md:mt-20">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-12 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">Have a Project in Mind?</h2>
                <p className="text-white/70 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
                  Let's collaborate on your next big idea. From concept to deployment, I'll help bring your vision to life.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                  <a 
                    href="mailto:mann@neuralarc.in"
                    className="flex items-center justify-center space-x-3 px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl text-white font-semibold hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-sm md:text-base">Start a Project</span>
                  </a>
                  <AnimatedLink 
                    href="/about"
                    className="flex items-center justify-center space-x-3 px-6 py-3 md:px-8 md:py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-sm md:text-base">Learn More</span>
                  </AnimatedLink>
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
              href="/about"
              className="px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/90 font-medium hover:bg-white/20 hover:border-white/30 hover:text-white hover:shadow-lg hover:shadow-white/20 transition-all duration-500 ease-out relative overflow-hidden group"
            >
              <span className="relative z-10">About</span>
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