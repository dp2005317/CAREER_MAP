import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Search, Briefcase, Map as MapIcon, 
  Settings, User, LogOut, SlidersHorizontal, ChevronRight, 
  ExternalLink, Building2, Clock, DollarSign, LocateFixed,
  Menu, X, Sparkles, Navigation
} from 'lucide-react';

const CITIES = {
  Bangalore: [12.9716, 77.5946],
  Kolkata: [22.5726, 88.3639],
  Hyderabad: [17.3850, 78.4867],
  Delhi: [28.6139, 77.2090],
  Mumbai: [19.0760, 72.8777],
  Pune: [18.5204, 73.8567]
};

const JOB_TYPES = ['Internship', 'Full Time', 'Startup', 'Remote'];
const DOMAINS = ['Frontend', 'Backend', 'AI/ML', 'Data Science', 'Design'];

const generateMockJobs = () => {
  const jobs = [];
  let idCounter = 1;
  
  Object.entries(CITIES).forEach(([city, coords]) => {
    for (let i = 0; i < 15; i++) {
      const lat = coords[0] + (Math.random() - 0.5) * 1.5;
      const lng = coords[1] + (Math.random() - 0.5) * 1.5;
      const type = JOB_TYPES[Math.floor(Math.random() * JOB_TYPES.length)];
      
      jobs.push({
        id: idCounter++,
        title: `${DOMAINS[Math.floor(Math.random() * DOMAINS.length)]} Engineer`,
        company: `TechCorp ${city} ${i + 1}`,
        location: city,
        lat,
        lng,
        type,
        salary: type === 'Internship' ? '₹20k - ₹40k/mo' : '₹12L - ₹24L/yr',
        postedAt: `${Math.floor(Math.random() * 10) + 1}d ago`,
        logo: `https://ui-avatars.com/api/?name=${city[0]}+C&background=random&color=fff&rounded=true`,
        description: "Join our highly motivated team to build scalable applications. You will be working with bleeding-edge technologies in a fast-paced, innovative environment.",
      });
    }
  });
  return jobs;
};

const MOCK_JOBS = generateMockJobs();

const getMarkerColor = (type) => {
  if (type === 'Internship') return 'bg-blue-500 shadow-blue-500/50';
  if (type === 'Full Time') return 'bg-emerald-500 shadow-emerald-500/50';
  if (type === 'Startup') return 'bg-orange-500 shadow-orange-500/50';
  return 'bg-purple-500 shadow-purple-500/50';
};

const getCoordinatesPercent = (lat, lng) => {
  const minLat = 8, maxLat = 38;
  const minLng = 65, maxLng = 98;
  const x = ((lng - minLng) / (maxLng - minLng)) * 100;
  const y = ((maxLat - lat) / (maxLat - minLat)) * 100;
  return { x, y };
};

// Reusable Liquid Glass Panel for that Apple visionOS/macOS feel
const LiquidGlass = ({ children, className = "", style = {} }) => (
  <div 
    className={`bg-white/40 backdrop-blur-[40px] border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_20px_40px_rgba(0,0,0,0.08)] ${className}`}
    style={{ WebkitBackdropFilter: 'blur(40px)', ...style }}
  >
    {children}
  </div>
);

// Animated Background Blobs for the "Liquid" aesthetic
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-300/40 mix-blend-multiply filter blur-[100px] animate-blob" />
    <div className="absolute top-[20%] -right-[10%] w-[45vw] h-[45vw] rounded-full bg-purple-300/40 mix-blend-multiply filter blur-[120px] animate-blob animation-delay-2000" />
    <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-teal-200/40 mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000" />
  </div>
);

const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col relative overflow-hidden font-sans selection:bg-blue-200">
      <AnimatedBackground />
      
      {/* Liquid Navbar */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full px-4 sm:px-8 py-6 flex justify-between items-center z-10"
      >
        <LiquidGlass className="px-6 py-3 rounded-full flex items-center gap-2">
          <MapPin className="text-blue-600 w-5 h-5" />
          <span className="text-lg font-bold tracking-tight text-gray-900">CareerMap AI</span>
        </LiquidGlass>
        
        <LiquidGlass className="hidden md:flex px-8 py-3 rounded-full gap-8 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-blue-600 transition-colors">Features</a>
          <a href="#" className="hover:text-blue-600 transition-colors">How it Works</a>
          <a href="#" className="hover:text-blue-600 transition-colors">About</a>
        </LiquidGlass>

        <LiquidGlass className="p-1 rounded-full">
          <button 
            onClick={onGetStarted}
            className="bg-gray-900/90 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-all shadow-md"
          >
            Login
          </button>
        </LiquidGlass>
      </motion.nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <LiquidGlass className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-gray-700 mb-8">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>Discover location-based opportunities</span>
          </LiquidGlass>
          
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-gray-900 mb-6 leading-[1.1]">
            Find Your Next <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500">
              Role on the Map
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Stop scrolling through endless job boards. Experience a fluid, spatial way to discover internships and jobs near you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onGetStarted}
              className="group relative px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-lg hover:scale-105 transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.2)] flex items-center justify-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Launch App <Navigation className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

const Dashboard = ({ onLogout }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);
  const [mapScale, setMapScale] = useState(1);
  const [mapPan, setMapPan] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredJobs = useMemo(() => {
    return MOCK_JOBS.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            job.company.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = activeFilter === 'All' || job.type === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  const handleJobClick = (job) => {
    setSelectedJob(job);
    if (window.innerWidth < 768) setIsMobileMenuOpen(false);
    
    const pos = getCoordinatesPercent(job.lat, job.lng);
    setMapPan({ x: 50 - pos.x, y: 50 - pos.y });
    setMapScale(1.8);
  };

  const handleResetMap = () => {
    setMapScale(1);
    setMapPan({ x: 0, y: 0 });
    setSelectedJob(null);
  };

  return (
    <div className="h-screen w-full bg-[#E5E7EB] font-sans overflow-hidden relative text-gray-900 selection:bg-blue-200">
      <AnimatedBackground />

      {/* The Liquid Map Canvas */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ 
          transform: `scale(${mapScale}) translate(${mapPan.x}%, ${mapPan.y}%)`,
          transformOrigin: 'center center'
        }}
      >
        {/* Soft Grid overlay for mapping aesthetic */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{ 
            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Markers */}
        {filteredJobs.map(job => {
          const pos = getCoordinatesPercent(job.lat, job.lng);
          const isSelected = selectedJob?.id === job.id;
          const markerClass = getMarkerColor(job.type);

          return (
            <div 
              key={job.id}
              className="absolute z-10 transition-all duration-500 cursor-pointer group"
              style={{ 
                left: `${pos.x}%`, 
                top: `${pos.y}%`,
                transform: `translate(-50%, -50%) scale(${isSelected ? 1.3 : 1})`,
              }}
              onClick={() => handleJobClick(job)}
            >
              {isSelected && (
                <motion.div 
                  layoutId="pulse"
                  className={`absolute inset-0 ${markerClass.split(' ')[0]} rounded-full animate-ping opacity-40`} 
                />
              )}
              <div className={`relative w-4 h-4 rounded-full border-[3px] border-white/90 shadow-lg ${markerClass} group-hover:scale-125 transition-transform duration-300 ease-out`} />
              
              {!isSelected && (
                <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-3 pointer-events-none transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <LiquidGlass className="px-3 py-1.5 rounded-xl shadow-xl text-xs font-semibold whitespace-nowrap">
                    {job.title}
                    <div className="text-gray-500 font-normal mt-0.5">{job.company}</div>
                  </LiquidGlass>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden absolute top-4 left-4 z-40">
        <LiquidGlass className="p-3 rounded-full cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </LiquidGlass>
      </div>

      {/* Floating Map Controls */}
      <div className="absolute top-4 right-4 z-30 flex flex-col gap-3">
        <LiquidGlass className="p-1 rounded-2xl flex flex-col gap-1">
          <button onClick={handleResetMap} className="p-3 rounded-xl hover:bg-white/40 transition-colors text-gray-700" title="Recenter">
            <LocateFixed size={20} strokeWidth={1.5} />
          </button>
          <div className="w-8 h-[1px] bg-white/40 mx-auto" />
          <button className="p-3 rounded-xl hover:bg-white/40 transition-colors text-gray-700">
            <SlidersHorizontal size={20} strokeWidth={1.5} />
          </button>
        </LiquidGlass>
        <LiquidGlass className="p-1 rounded-2xl mt-auto">
           <button onClick={onLogout} className="p-3 rounded-xl hover:bg-red-500/10 text-gray-700 hover:text-red-600 transition-colors" title="Logout">
             <LogOut size={20} strokeWidth={1.5} />
           </button>
        </LiquidGlass>
      </div>

      {/* Main UI Overlay (Left Panel) */}
      <div className={`
        absolute top-0 md:top-4 bottom-0 md:bottom-4 left-0 md:left-4 z-30 w-full md:w-[420px] 
        transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <LiquidGlass className="w-full h-full md:rounded-[2.5rem] flex flex-col overflow-hidden">
          
          {/* Header & Search */}
          <div className="p-6 pb-2 shrink-0">
            <div className="flex items-center gap-3 mb-6 px-1">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <MapPin size={20} />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">CareerMap</h1>
                <p className="text-xs text-gray-500 font-medium">Find your next opportunity</p>
              </div>
            </div>

            <div className="relative mb-4 group">
              <div className="absolute inset-0 bg-white/40 rounded-2xl blur group-hover:bg-white/50 transition-colors" />
              <div className="relative flex items-center bg-white/50 border border-white/60 rounded-2xl px-4 py-3 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8)]">
                <Search className="text-gray-400 mr-3" size={18} />
                <input 
                  type="text" 
                  placeholder="Search roles, companies..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-sm placeholder:text-gray-400 text-gray-900"
                />
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
              {['All', ...JOB_TYPES].map(type => (
                <button
                  key={type}
                  onClick={() => setActiveFilter(type)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                    activeFilter === type 
                      ? 'bg-gray-900 text-white shadow-md scale-105' 
                      : 'bg-white/50 text-gray-600 hover:bg-white/70 border border-white/50'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Job List */}
          <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-3 custom-scrollbar relative">
            {filteredJobs.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-3">
                <Search size={32} opacity={0.5} />
                <p className="text-sm font-medium">No matches found.</p>
              </div>
            ) : (
              <AnimatePresence>
                {filteredJobs.map(job => (
                  <motion.div
                    key={job.id}
                    layoutId={`card-${job.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onClick={() => handleJobClick(job)}
                    className={`relative p-4 rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 ${
                      selectedJob?.id === job.id 
                        ? 'bg-white/80 shadow-md border-white' 
                        : 'bg-white/30 hover:bg-white/50 border-white/40 hover:shadow-sm'
                    } border`}
                  >
                    {selectedJob?.id === job.id && (
                      <motion.div layoutId="highlight" className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-blue-500 rounded-r-full" />
                    )}
                    
                    <div className="flex gap-4">
                      <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-xl shadow-sm border border-white/60 bg-white" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm truncate">{job.title}</h3>
                        <p className="text-gray-500 text-xs truncate mt-0.5">{job.company}</p>
                        
                        <div className="flex items-center gap-3 mt-3 text-xs font-medium text-gray-500">
                          <span className="flex items-center gap-1 bg-white/40 px-2 py-1 rounded-md"><MapPin size={10} className="text-blue-500"/> {job.location}</span>
                          <span className="flex items-center gap-1 bg-white/40 px-2 py-1 rounded-md"><DollarSign size={10} className="text-emerald-500"/> {job.salary.split(' ')[0]}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>
        </LiquidGlass>
      </div>

      {/* Floating Job Detail Panel (Right Side) */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div 
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute bottom-4 left-4 right-4 md:left-auto md:right-24 md:top-4 md:bottom-4 md:w-[400px] z-30"
          >
            <LiquidGlass className="w-full h-full md:rounded-[2.5rem] rounded-3xl flex flex-col overflow-hidden">
              <div className="relative h-32 bg-gradient-to-br from-blue-100/50 to-purple-100/50 shrink-0">
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-4 right-4 p-2 bg-white/40 hover:bg-white/70 backdrop-blur-md rounded-full text-gray-600 transition-colors z-10"
                >
                  <X size={16} strokeWidth={2} />
                </button>
                <div className="absolute -bottom-8 left-6">
                  <img src={selectedJob.logo} alt="logo" className="w-20 h-20 rounded-2xl shadow-lg border-2 border-white bg-white" />
                </div>
              </div>
              
              <div className="p-6 pt-12 flex-1 overflow-y-auto custom-scrollbar">
                <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-1">{selectedJob.title}</h2>
                <p className="text-gray-500 font-medium mb-6 flex items-center gap-2">
                  <Building2 size={16}/> {selectedJob.company}
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: MapPin, label: 'Location', val: selectedJob.location, color: 'text-blue-500' },
                    { icon: DollarSign, label: 'Salary', val: selectedJob.salary, color: 'text-emerald-500' },
                    { icon: Briefcase, label: 'Type', val: selectedJob.type, color: 'text-purple-500' },
                    { icon: Clock, label: 'Posted', val: selectedJob.postedAt, color: 'text-orange-500' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/40 border border-white/50 rounded-2xl p-3 shadow-[inset_0_1px_1px_rgba(255,255,255,1)]">
                      <div className="text-gray-400 text-xs mb-1 flex items-center gap-1.5 font-medium">
                        <stat.icon size={12} className={stat.color} /> {stat.label}
                      </div>
                      <div className="font-semibold text-gray-900 text-sm">{stat.val}</div>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Sparkles size={16} className="text-amber-500"/> About the role
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed bg-white/30 p-4 rounded-2xl border border-white/40 shadow-inner">
                    {selectedJob.description}
                  </p>
                </div>
              </div>
              
              <div className="p-6 bg-white/30 border-t border-white/40 shrink-0">
                <button className="w-full relative group overflow-hidden bg-gray-900 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center gap-2">
                    Apply Now <ExternalLink size={16} />
                  </span>
                </button>
              </div>
            </LiquidGlass>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function CareerMapApp() {
  const [view, setView] = useState('landing');

  useEffect(() => {
    // Injecting CSS for Apple Liquid Glass specifics and animations
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
      }
      .animate-blob {
        animation: blob 10s infinite;
      }
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      .animation-delay-4000 {
        animation-delay: 4s;
      }
      .custom-scrollbar::-webkit-scrollbar { width: 4px; }
      .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
      .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.2); }
      .scrollbar-hide::-webkit-scrollbar { display: none; }
      .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {view === 'landing' ? (
        <motion.div key="landing" exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }} transition={{ duration: 0.5 }} className="h-full">
          <LandingPage onGetStarted={() => setView('dashboard')} />
        </motion.div>
      ) : (
        <motion.div key="dashboard" initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ duration: 0.6 }} className="h-full">
          <Dashboard onLogout={() => setView('landing')} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}