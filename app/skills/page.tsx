'use client';

import { useState } from 'react';
import { ArrowLeft, File, Folder, FolderOpen, Terminal, Code2, Play, Settings, Search, GitBranch, Users, Zap, Menu, X } from 'lucide-react';
import AnimatedLink from '../components/AnimatedLink';
import MobileMenu from '../components/MobileMenu';

type SkillKey = 'tech-development' | 'product-building' | 'ai-innovation' | 'data-business' | 'leadership';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillKey>('tech-development');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openFolders, setOpenFolders] = useState<Record<SkillKey, boolean>>({
    'tech-development': true,
    'product-building': false,
    'ai-innovation': false,
    'data-business': false,
    'leadership': false
  });

  const skillsData: Record<SkillKey, { name: string; icon: string; content: { line: number; code: string; type: string; }[] }> = {
    'tech-development': {
      name: 'tech-development.ts',
      icon: '⚛️',
      content: [
        { line: 1, code: 'interface TechSkills {', type: 'keyword' },
        { line: 2, code: '  // Full Stack Development', type: 'comment' },
        { line: 3, code: '  frontend: {', type: 'keyword' },
        { line: 4, code: '    framework: "Next.js" | "React.js";', type: 'string' },
        { line: 5, code: '    languages: ["JavaScript", "HTML", "CSS"];', type: 'string' },
        { line: 6, code: '  };', type: 'keyword' },
        { line: 7, code: '', type: 'normal' },
        { line: 8, code: '  // AI & Machine Learning', type: 'comment' },
        { line: 9, code: '  aiDevelopment: {', type: 'keyword' },
        { line: 10, code: '    language: "Python";', type: 'string' },
        { line: 11, code: '    specializations: [', type: 'keyword' },
        { line: 12, code: '      "AI Search Systems",', type: 'string' },
        { line: 13, code: '      "AI Code Builders & Report Generators",', type: 'string' },
        { line: 14, code: '      "LLM Aggregators (AccessAllGPT)",', type: 'string' },
        { line: 15, code: '      "AI Memory Management (Neuro)",', type: 'string' },
        { line: 16, code: '      "AI Legal Document Analysis",', type: 'string' },
        { line: 17, code: '      "AI Fitness & Health Systems",', type: 'string' },
        { line: 18, code: '      "AI Financial Market Tools (Eqivision)"', type: 'string' },
        { line: 19, code: '    ];', type: 'keyword' },
        { line: 20, code: '  };', type: 'keyword' },
        { line: 21, code: '', type: 'normal' },
        { line: 22, code: '  // Blockchain & Smart Contracts', type: 'comment' },
        { line: 23, code: '  blockchain: {', type: 'keyword' },
        { line: 24, code: '    language: "Solidity";', type: 'string' },
        { line: 25, code: '    expertise: "Real Estate Tokenization";', type: 'string' },
        { line: 26, code: '  };', type: 'keyword' },
        { line: 27, code: '', type: 'normal' },
        { line: 28, code: '  // Backend & Platforms', type: 'comment' },
        { line: 29, code: '  backend: {', type: 'keyword' },
        { line: 30, code: '    platforms: ["Supabase", "Vercel", "Strapi"];', type: 'string' },
        { line: 31, code: '    services: ["PostgreSQL", "Auth", "Edge Functions"];', type: 'string' },
        { line: 32, code: '  };', type: 'keyword' },
        { line: 33, code: '}', type: 'keyword' }
      ]
    },
    'product-building': {
      name: 'product-building.js',
      icon: '🏗️',
      content: [
        { line: 1, code: 'class ProductBuilding {', type: 'keyword' },
        { line: 2, code: '  constructor() {', type: 'keyword' },
        { line: 3, code: '    this.expertise = [', type: 'keyword' },
        { line: 4, code: '      "SaaS Product Development",', type: 'string' },
        { line: 5, code: '      "Automation Tools",', type: 'string' },
        { line: 6, code: '      "Admin Panels & CMS",', type: 'string' },
        { line: 7, code: '      "Bulk Data Platforms",', type: 'string' },
        { line: 8, code: '      "Upload Panels",', type: 'string' },
        { line: 9, code: '      "Debt Market Data Collection",', type: 'string' },
        { line: 10, code: '      "Community & Forum Platforms",', type: 'string' },
        { line: 11, code: '      "Tokenization Platforms",', type: 'string' },
        { line: 12, code: '      "Multi-Agent Systems (Matrix, MCP)"', type: 'string' },
        { line: 13, code: '    ];', type: 'keyword' },
        { line: 14, code: '  }', type: 'keyword' },
        { line: 15, code: '', type: 'normal' },
        { line: 16, code: '  buildProduct(idea) {', type: 'function' },
        { line: 17, code: '    // Transform ideas into scalable solutions', type: 'comment' },
        { line: 18, code: '    return this.expertise.map(skill => {', type: 'keyword' },
        { line: 19, code: '      return skill.implement(idea);', type: 'function' },
        { line: 20, code: '    });', type: 'keyword' },
        { line: 21, code: '  }', type: 'keyword' },
        { line: 22, code: '}', type: 'keyword' }
      ]
    },
    'ai-innovation': {
      name: 'ai-innovation.py',
      icon: '⚡',
      content: [
        { line: 1, code: 'from ai_tools import *', type: 'keyword' },
        { line: 2, code: '', type: 'normal' },
        { line: 3, code: 'class AIInnovation:', type: 'keyword' },
        { line: 4, code: '    """AI-Driven Innovation Expertise"""', type: 'comment' },
        { line: 5, code: '    ', type: 'normal' },
        { line: 6, code: '    def __init__(self):', type: 'function' },
        { line: 7, code: '        self.tools = {', type: 'keyword' },
        { line: 8, code: '            "generative_ai": "Generative AI Tools",', type: 'string' },
        { line: 9, code: '            "presentations": "AI Slides & Presentation Builders",', type: 'string' },
        { line: 10, code: '            "research": "AI Research & Report Generation",', type: 'string' },
        { line: 11, code: '            "search": "AI Search Engines with NLP",', type: 'string' },
        { line: 12, code: '            "productivity": "AI Productivity Platforms",', type: 'string' },
        { line: 13, code: '            "video": "Video Automation Tools (CutZero)"', type: 'string' },
        { line: 14, code: '        }', type: 'keyword' },
        { line: 15, code: '    ', type: 'normal' },
        { line: 16, code: '    def innovate(self, problem):', type: 'function' },
        { line: 17, code: '        """Transform problems into AI solutions"""', type: 'comment' },
        { line: 18, code: '        solution = self.ai_analyze(problem)', type: 'function' },
        { line: 19, code: '        return self.build_ai_tool(solution)', type: 'function' },
        { line: 20, code: '    ', type: 'normal' },
        { line: 21, code: '    def deploy_at_scale(self):', type: 'function' },
        { line: 22, code: '        return "Production-ready AI systems"', type: 'string' }
      ]
    },
    'data-business': {
      name: 'data-business.sql',
      icon: '📊',
      content: [
        { line: 1, code: '-- Data & Business Applications Expertise', type: 'comment' },
        { line: 2, code: '', type: 'normal' },
        { line: 3, code: 'CREATE TABLE expertise (', type: 'keyword' },
        { line: 4, code: '  domain VARCHAR(100),', type: 'keyword' },
        { line: 5, code: '  application TEXT,', type: 'keyword' },
        { line: 6, code: '  status VARCHAR(20)', type: 'keyword' },
        { line: 7, code: ');', type: 'keyword' },
        { line: 8, code: '', type: 'normal' },
        { line: 9, code: 'INSERT INTO expertise VALUES', type: 'keyword' },
        { line: 10, code: "  ('Finance', 'Financial Market Analytics', 'EXPERT'),", type: 'string' },
        { line: 11, code: "  ('AI', 'AI Equity Recommendations', 'EXPERT'),", type: 'string' },
        { line: 12, code: "  ('Debt', 'Debt Market Platforms', 'EXPERT'),", type: 'string' },
        { line: 13, code: "  ('Data', 'India League Tables', 'LIVE'),", type: 'string' },
        { line: 14, code: "  ('Platform', 'DebtCircle Ecosystem', 'LIVE'),", type: 'string' },
        { line: 15, code: "  ('Blockchain', 'Real Estate Tokenization', 'ACTIVE'),", type: 'string' },
        { line: 16, code: "  ('Legal', 'Legal Tech & Document Automation', 'EXPERT');", type: 'string' },
        { line: 17, code: '', type: 'normal' },
        { line: 18, code: 'SELECT domain, COUNT(*) as projects', type: 'keyword' },
        { line: 19, code: 'FROM expertise', type: 'keyword' },
        { line: 20, code: 'WHERE status IN ("EXPERT", "LIVE")', type: 'keyword' },
        { line: 21, code: 'GROUP BY domain;', type: 'keyword' }
      ]
    },
    'leadership': {
      name: 'leadership.md',
      icon: '🎯',
      content: [
        { line: 1, code: '# Leadership & Growth', type: 'header' },
        { line: 2, code: '', type: 'normal' },
        { line: 3, code: '## Current Roles', type: 'header' },
        { line: 4, code: '', type: 'normal' },
        { line: 5, code: '### Head of Tech at DebtCircle', type: 'header' },
        { line: 6, code: '- Leading technical strategy & implementation', type: 'list' },
        { line: 7, code: '- Reshaping debt market operations', type: 'list' },
        { line: 8, code: '- Building scalable fintech platforms', type: 'list' },
        { line: 9, code: '', type: 'normal' },
        { line: 10, code: '### Founder & Product Builder at NeuralARC', type: 'header' },
        { line: 11, code: '- Creating AI-first business solutions', type: 'list' },
        { line: 12, code: '- Building the future of AI tooling', type: 'list' },
        { line: 13, code: '- Multi-agent AI workspace development', type: 'list' },
        { line: 14, code: '', type: 'normal' },
        { line: 15, code: '## Innovation Focus', type: 'header' },
        { line: 16, code: '', type: 'normal' },
        { line: 17, code: '```typescript', type: 'code' },
        { line: 18, code: 'const leadership = {', type: 'code' },
        { line: 19, code: '  focus: ["AI", "Automation", "SaaS Innovation"],', type: 'code' },
        { line: 20, code: '  impact: "Turning ambitious ideas into reality"', type: 'code' },
        { line: 21, code: '};', type: 'code' },
        { line: 22, code: '```', type: 'code' }
      ]
    }
  };

  const fileTree = [
    { 
      name: 'mann-jadwani-skills/', 
      type: 'folder', 
      key: 'root' as const,
      children: [
        { name: '📁 tech-development/', type: 'folder', key: 'tech-development' as SkillKey, icon: '💻' },
        { name: '📁 product-building/', type: 'folder', key: 'product-building' as SkillKey, icon: '🧩' },
        { name: '📁 ai-innovation/', type: 'folder', key: 'ai-innovation' as SkillKey, icon: '⚡' },
        { name: '📁 data-business/', type: 'folder', key: 'data-business' as SkillKey, icon: '📊' },
        { name: '📁 leadership/', type: 'folder', key: 'leadership' as SkillKey, icon: '🎯' }
      ]
    }
  ];

  const toggleFolder = (folderKey: SkillKey) => {
    setOpenFolders(prev => ({
      ...prev,
      [folderKey]: !prev[folderKey]
    }));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getLineColor = (type: string) => {
    switch (type) {
      case 'keyword': return 'text-blue-300';
      case 'string': return 'text-green-300';
      case 'comment': return 'text-gray-400';
      case 'function': return 'text-yellow-300';
      case 'header': return 'text-purple-300 font-bold';
      case 'list': return 'text-white/80';
      case 'code': return 'text-cyan-300';
      default: return 'text-white/70';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Glassmorphic floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-8 md:left-20 w-16 h-16 md:w-32 md:h-32 bg-white/3 backdrop-blur-3xl rounded-full"></div>
        <div className="absolute top-40 right-8 md:right-32 w-12 h-12 md:w-24 md:h-24 bg-white/5 backdrop-blur-2xl rounded-full"></div>
        <div className="absolute bottom-32 left-4 md:left-16 w-20 h-20 md:w-40 md:h-40 bg-white/4 backdrop-blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-8 md:right-20 w-14 h-14 md:w-28 md:h-28 bg-white/2 backdrop-blur-xl rounded-full"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-center p-4 md:p-6 border-b border-white/10 space-y-4 md:space-y-0">
        <div className="flex items-center justify-between md:justify-start">
          <div className="flex items-center space-x-4">
            <AnimatedLink 
              href="/"
              className="flex items-center space-x-2 px-3 py-2 md:px-4 md:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white/90 hover:bg-white/20 hover:text-white transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Skills</span>
            </AnimatedLink>
            {/* Mobile sidebar toggle */}
            <button
              onClick={toggleSidebar}
              className="md:hidden flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white/90 hover:bg-white/20 transition-all duration-300"
            >
              {isSidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
        <div className="text-center px-4 py-2 md:px-6 md:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg">
          <span className="text-white font-medium text-sm md:text-base">Mann Jadwani - Code Editor</span>
        </div>
        <div className="hidden md:flex items-center space-x-3">
          <div className="flex items-center space-x-2 px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg">
            <GitBranch className="w-4 h-4 text-green-400" />
            <span className="text-white/60 text-sm">main</span>
          </div>
          <div className="text-white/60 text-sm px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg">04</div>
        </div>
      </div>

      {/* Main Editor Layout */}
      <div className="relative z-10 flex h-[calc(100vh-120px)] md:h-[calc(100vh-80px)]">
        {/* Sidebar - File Explorer */}
        <div className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 z-30 w-64 md:w-80 bg-white/5 backdrop-blur-xl border-r border-white/10 flex flex-col transition-transform duration-300 ease-in-out`}>
          {/* Sidebar Header */}
          <div className="p-3 md:p-4 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <Folder className="w-4 h-4 md:w-5 md:h-5 text-white/70" />
              <span className="text-white/90 font-medium text-sm md:text-base">EXPLORER</span>
            </div>
          </div>

          {/* File Tree */}
          <div className="flex-1 p-3 md:p-4 overflow-y-auto">
            <div className="space-y-1 md:space-y-2">
              {fileTree[0].children?.map((folder) => (
                <div key={folder.key}>
                  <div 
                    className="flex items-center space-x-2 py-2 px-2 md:px-3 rounded-lg hover:bg-white/10 cursor-pointer transition-all duration-200"
                    onClick={() => {
                      toggleFolder(folder.key);
                      setActiveTab(folder.key);
                      if (window.innerWidth < 768) {
                        setIsSidebarOpen(false);
                      }
                    }}
                  >
                    {openFolders[folder.key] ? 
                      <FolderOpen className="w-3 h-3 md:w-4 md:h-4 text-blue-400" /> : 
                      <Folder className="w-3 h-3 md:w-4 md:h-4 text-white/60" />
                    }
                    <span className="text-white/80 text-xs md:text-sm">{folder.name}</span>
                  </div>
                  {openFolders[folder.key] && (
                    <div className="ml-4 md:ml-6 mt-1">
                      <div className="flex items-center space-x-2 py-1 px-2 md:px-3 rounded-lg hover:bg-white/5 cursor-pointer">
                        <File className="w-3 h-3 md:w-4 md:h-4 text-white/50" />
                        <span className="text-white/70 text-xs md:text-sm">{skillsData[folder.key]?.name}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-3 md:p-4 border-t border-white/10">
            <div className="flex items-center justify-between text-white/50 text-xs">
              <div className="flex items-center space-x-2">
                <Users className="w-3 h-3 md:w-4 md:h-4" />
                <span>28 Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-3 h-3 md:w-4 md:h-4" />
                <span>Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Backdrop for Mobile */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col">
          {/* Tabs */}
          <div className="flex bg-white/5 backdrop-blur-xl border-b border-white/10 overflow-x-auto">
            {Object.entries(skillsData).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as SkillKey)}
                className={`flex items-center space-x-1 md:space-x-2 px-2 py-2 md:px-4 md:py-3 border-r border-white/10 text-xs md:text-sm transition-all duration-200 whitespace-nowrap ${
                  activeTab === key 
                    ? 'bg-white/10 text-white border-b-2 border-blue-400' 
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="text-xs md:text-sm">{data.icon}</span>
                <span className="hidden sm:block">{data.name}</span>
              </button>
            ))}
          </div>

          {/* Code Editor */}
          <div className="flex-1 flex">
            {/* Line Numbers */}
            <div className="w-8 md:w-16 bg-white/5 backdrop-blur-xl border-r border-white/10 p-2 md:p-4 text-right">
              {skillsData[activeTab]?.content.map((line) => (
                <div key={line.line} className="text-white/40 text-xs md:text-sm font-mono leading-5 md:leading-6">
                  {line.line}
                </div>
              ))}
            </div>

            {/* Code Content */}
            <div className="flex-1 p-2 md:p-4 overflow-y-auto bg-white/2 backdrop-blur-xl">
              {skillsData[activeTab]?.content.map((line) => (
                <div key={line.line} className="font-mono text-xs md:text-sm leading-5 md:leading-6 flex">
                  <span className={getLineColor(line.type)}>
                    {line.code || '\u00A0'}
                  </span>
                </div>
              ))}
            </div>

            {/* Minimap - Hidden on Mobile */}
            <div className="hidden lg:block w-20 bg-white/5 backdrop-blur-xl border-l border-white/10 p-2">
              <div className="space-y-1">
                {skillsData[activeTab]?.content.map((_, index) => (
                  <div key={index} className="h-1 bg-white/20 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="flex items-center justify-between px-2 py-1 md:px-4 md:py-2 bg-white/5 backdrop-blur-xl border-t border-white/10 text-xs text-white/60">
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="flex items-center space-x-1 md:space-x-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full"></div>
                <span className="hidden md:block">Ready</span>
              </div>
              <span className="hidden md:block">UTF-8</span>
              <span className="hidden sm:block">TypeScript React</span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <span className="hidden md:block">Ln {skillsData[activeTab]?.content.length || 0}, Col 1</span>
              <span className="hidden lg:block">Spaces: 2</span>
              <div className="flex items-center space-x-1">
                <Terminal className="w-3 h-3 md:w-4 md:h-4" />
                <span className="hidden md:block">Skills Terminal</span>
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
              href="/projects"
              className="px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/90 font-medium hover:bg-white/20 hover:border-white/30 hover:text-white hover:shadow-lg hover:shadow-white/20 transition-all duration-500 ease-out relative overflow-hidden group"
            >
              <span className="relative z-10">Projects</span>
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