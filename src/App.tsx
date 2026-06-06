import { useState, useEffect, useRef, TouchEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Settings,
  Coins,
  Briefcase,
  GraduationCap,
  Award,
  Leaf,
  Users,
  ChevronRight,
  ChevronLeft,
  Plus,
  Trash,
  Calculator,
  Cpu,
  BookOpen,
  HeartHandshake,
  Menu,
  X,
  Sliders,
  Eye,
  BookMarked,
  Building2,
  Sparkles,
  Share2,
  CheckCircle,
  TrendingUp,
  FileText,
  DollarSign,
  Undo2,
  ListRestart
} from 'lucide-react';
import { getGeneralSlides, getProgramDetails } from './data';
import { SlideItem, ProgramDetail, InstitutionConfig } from './types';

export default function App() {
  // 1. Dynamic White-Label Institution State
  const [pts, setPts] = useState<string>(() => {
    const saved = localStorage.getItem('pts_name');
    return saved || 'PTS Mitra Inovasi';
  });

  const [city, setCity] = useState<string>(() => {
    const saved = localStorage.getItem('pts_city');
    return saved || 'Kota Pendidikan';
  });

  // Save the custom institution configuration to state
  useEffect(() => {
    localStorage.setItem('pts_name', pts);
    localStorage.setItem('pts_city', city);
  }, [pts, city]);

  // Preset list of generalised Private Universities (PTS) for general demonstration
  const PTS_PRESETS = [
    { name: 'PTS Mitra Inovasi', city: 'Kota Pendidikan' },
    { name: 'PTS Unggul Pratama', city: 'Kota Metropolitan' },
    { name: 'PTS Madya Mandiri', city: 'Wilayah Berkembang' }
  ];

  // 2. Application View State: 'presentation' or 'hub'
  const [viewMode, setViewMode] = useState<'presentation' | 'hub'>('presentation');

  // Slide state inside presentation deck
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slides = getGeneralSlides(pts);
  const totalSlides = slides.length;

  // Selected Program Modal state
  const [activeModalId, setActiveModalId] = useState<string | null>(null);
  const [modalTab, setModalTab] = useState<'concept' | 'rpl' | 'execution' | 'model'>('concept');

  // Quick Navigation Menu state
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);

  // Spotlight pointer coordinate tracker for glowing effect
  const [mouseCoord, setMouseCoord] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseCoord({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Keyboard accessibility helper for slide transitions
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalId !== null) {
        if (e.key === 'Escape') {
          setActiveModalId(null);
        }
        return; // maintain focus on modal
      }
      if (viewMode === 'presentation') {
        if (e.key === 'ArrowRight' || e.key === ' ') {
          e.preventDefault();
          nextSlide();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          prevSlide();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, viewMode, activeModalId]);

  // Touch gesture state for swipeable mobile navigation
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null || activeModalId !== null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (idx: number) => {
    setCurrentSlideIndex(idx);
    setIsNavDrawerOpen(false);
  };

  // 3. Simulated Tools & Calculators Data
  // Simulator A: ROI / Financial Calculator for enrollment recovery
  const [annualTarget, setAnnualTarget] = useState<number>(1000);
  const [currentAnnual, setCurrentAnnual] = useState<number>(700);
  const [averageTuitionFee, setAverageTuitionFee] = useState<number>(9500000); // per semester in IDR
  const [sandboxConversion, setSandboxConversion] = useState<number>(12); // expected % enlistment bump via Sandbox

  const recoveredStudents = annualTarget - currentAnnual;
  const targetMetShortfall = Math.max(0, annualTarget - currentAnnual);
  const baseRevenueSemester = currentAnnual * averageTuitionFee;
  
  // Calculate gains through proposal
  // 12% conversion bump on the shortfall leads to:
  const studentsGainedViaSandbox = Math.round(currentAnnual * (sandboxConversion / 100));
  const newProjectedEnrollment = Math.min(annualTarget, currentAnnual + studentsGainedViaSandbox);
  const extraRevenuePerSemester = studentsGainedViaSandbox * averageTuitionFee;
  const projectValueMicroAgency = Math.round(studentsGainedViaSandbox * 2500000); // extra non-tuition revenue from industry sharing

  // Format currency directly
  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(val);
  };

  // Simulator B: AI Portofolio Matcher for Student Sandbox
  const [matchStudentName, setMatchStudentName] = useState('Budi Pratama');
  const [matchProjectTitle, setMatchProjectTitle] = useState('Desain Sistem Pemesanan Kafe Mandiri Berbasis WhatsApp');
  const [matchCategory, setMatchCategory] = useState<'IT' | 'Business' | 'Communication'>('IT');
  const [matcherOutput, setMatcherOutput] = useState<{
    score: number;
    matchClass: string;
    recommendedProdi: string;
    suggestedCredits: number;
    skillsAnalyzed: string[];
    isMatching: boolean;
  } | null>(null);
  const [isMatchingLoading, setIsMatchingLoading] = useState(false);

  const triggerPortfolioMatch = () => {
    setIsMatchingLoading(true);
    setMatcherOutput(null);
    setTimeout(() => {
      let score = 78;
      let recommendedProdi = 'S1 Sistem Informasi / S1 Teknik Informatika';
      let suggestedCredits = 3;
      let skillsAnalyzed = ['WhatsApp API Integration', 'Workflow UX Design', 'Database Dasar'];

      if (matchCategory === 'Business') {
        score = 85;
        recommendedProdi = 'S1 Manajemen Bisnis Inovatif / S1 Akuntansi';
        suggestedCredits = 4;
        skillsAnalyzed = ['Business Model Canvas', 'Analisis Harga Pokok Penjualan', 'Digital Marketing'];
      } else if (matchCategory === 'Communication') {
        score = 91;
        recommendedProdi = 'S1 Ilmu Komunikasi / S1 Hubungan Masyarakat';
        suggestedCredits = 6;
        skillsAnalyzed = ['Copywriting Berbasis AI', 'Dokumentasi Visual Kreatif', 'Campaign Planning'];
      }

      setMatcherOutput({
        score,
        matchClass: score >= 85 ? 'Sangat Direkomendasikan (Apresiasi Kelas Premium)' : 'Direkomendasikan (Apresiasi Kelas Utama)',
        recommendedProdi,
        suggestedCredits,
        skillsAnalyzed,
        isMatching: true
      });
      setIsMatchingLoading(false);
    }, 1200);
  };

  // Simulator C: Micro-Agency Project Board Mockup
  const [microProjects, setMicroProjects] = useState([
    { id: 1, name: 'Rebranding Digital Kafe Lokal', category: 'Creative & Social Media', status: 'Selesai', student: 'Riska (Smt 4)', reward: 1500000 },
    { id: 2, name: 'Otomasi Chatbot CS Swalayan Sinar', category: 'IT & Automation', status: 'pengerjaan', student: 'Andi (Smt 2) + Firman (Smt 6)', reward: 3000000 },
    { id: 3, name: 'Penyusunan Sistem Pajak Resto ABC', category: 'Akuntansi & Legal', status: 'pengerjaan', student: 'Mega (Smt 5)', reward: 2500000 },
    { id: 4, name: 'Analisis Audiens Toko Roti Mandiri', category: 'Data & Market Research', status: 'antrean', student: 'Sonia (Smt 3)', reward: 1200000 }
  ]);

  const [newProjName, setNewProjName] = useState('');
  const [newProjCat, setNewProjCat] = useState('IT & Automation');
  const [newProjStudent, setNewProjStudent] = useState('Mahasiswa Baru (Smt 1)');
  const [newProjReward, setNewProjReward] = useState(1500000);

  const handleAddProject = (e: FormEvent) => {
    e.preventDefault();
    if (!newProjName.trim()) return;
    setMicroProjects([
      ...microProjects,
      {
        id: Date.now(),
        name: newProjName,
        category: newProjCat,
        status: 'antrean',
        student: newProjStudent,
        reward: Number(newProjReward)
      }
    ]);
    setNewProjName('');
  };

  // 4. Modal Deep-dive data getter
  const programDetails = getProgramDetails(pts);
  const activeProgram = programDetails.find(p => p.id === activeModalId);

  // Get active slide object
  const currentSlide: SlideItem = slides[currentSlideIndex];

  return (
    <div className="relative min-h-screen bg-[#040406] text-[#e2e8f0] font-sans selection:bg-indigo-600 selection:text-white overflow-x-hidden md:py-0">
      
      {/* Interactive RGB Mouse Pointer Glow Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-25 blur-[130px] transition-all duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mouseCoord.x}px ${mouseCoord.y}px, rgba(99,102,241,0.25) 0%, rgba(139,92,246,0.15) 50%, transparent 100%)`
        }}
      />

      {/* Floating Sparkles Backdrop */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/20 via-neutral-950 to-black pointer-events-none" />

      {/* HEADER / CONTROL PANEL */}
      <header className="sticky top-0 z-40 bg-[#08080c]/80 backdrop-blur-xl border-b border-zinc-800/40 px-4 py-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo & Customizer Input */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
                <Sparkles className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <span className="text-[10px] tracking-widest text-indigo-400 font-bold block uppercase">Strategic Deck Builder</span>
                <span className="font-display font-semibold text-sm text-white tracking-wide">White-Label Presentation Hub</span>
              </div>
            </div>

            {/* Live customizer badge & input */}
            <div className="flex items-center bg-zinc-900/50 rounded-xl px-3 py-1.5 border border-zinc-800/80 w-full sm:w-auto">
              <Building2 className="w-4 h-4 text-zinc-400 mr-2 shrink-0" />
              <div className="flex flex-col">
                <span className="text-[9px] text-zinc-500 uppercase font-black">Presentasi Target</span>
                <input
                  type="text"
                  value={pts}
                  onChange={(e) => setPts(e.target.value)}
                  placeholder="Nama PTS Sasaran..."
                  className="bg-transparent text-xs text-white focus:outline-none focus:ring-0 font-medium w-full sm:w-48 placeholder-zinc-600"
                  id="target-institution-input"
                  title="Ganti nama institusi sasaran untuk demo instan"
                />
              </div>
            </div>
            
            {/* City input */}
            <div className="hidden lg:flex items-center bg-zinc-900/50 rounded-xl px-3 py-1.5 border border-zinc-800/80">
              <Sliders className="w-3.5 h-3.5 text-zinc-400 mr-2 shrink-0" />
              <div className="flex flex-col">
                <span className="text-[9px] text-zinc-500 uppercase font-black">Kota PTS</span>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Surabaya/Yogyakarta..."
                  className="bg-transparent text-xs text-white focus:outline-none font-medium w-24"
                  title="Kota lokasi PTS"
                />
              </div>
            </div>
          </div>

          {/* Preset Buttons & Mode Switches */}
          <div className="flex items-center justify-between w-full md:w-auto gap-3">
            
            {/* Presets dropdown/selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-zinc-400 hidden lg:inline font-medium">Presets:</span>
              <div className="flex flex-wrap gap-1">
                {PTS_PRESETS.slice(0, 3).map((preset) => (
                  <button
                    key={preset.name}
                    id={`preset-${preset.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => {
                      setPts(preset.name);
                      setCity(preset.city);
                    }}
                    className={`text-[10px] px-2 py-1 rounded-md transition-all duration-300 cursor-pointer ${
                      pts === preset.name
                        ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/40 font-bold'
                        : 'bg-zinc-900/40 text-slate-400 border border-zinc-800/60 hover:bg-zinc-800/60 hover:text-white'
                    }`}
                  >
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-6 w-[1px] bg-zinc-800 hidden sm:block" />

            {/* View Mode Switcher */}
            <div className="bg-zinc-950/80 p-1 rounded-xl border border-zinc-800 flex items-center gap-1 ml-auto md:ml-0 shadow-inner">
              <button
                id="btn-mode-presentation"
                onClick={() => setViewMode('presentation')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  viewMode === 'presentation'
                    ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-md font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Slide Deck</span>
              </button>
              <button
                id="btn-mode-hub"
                onClick={() => setViewMode('hub')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  viewMode === 'hub'
                    ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-md font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Bento Hub</span>
              </button>
            </div>
            
          </div>

        </div>
      </header>

      {/* APP CORES: PRESENTATION VIEW VS BEN-TO HUB VIEW */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-6 md:py-10 flex flex-col justify-center min-h-[calc(100vh-140px)]">
        
        {/* VIEW A: PRESENTATION MODE */}
        {viewMode === 'presentation' && (
          <div 
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="w-full flex flex-col gap-6"
          >
            {/* Progress indicator */}
            <div className="w-full flex items-center justify-between text-xs text-slate-500 font-mono mb-2">
              <div className="flex items-center gap-1">
                <BookMarked className="w-3.5 h-3.5 text-indigo-400" />
                <span>SEKSI: {currentSlide.category}</span>
              </div>
              <div className="font-bold text-indigo-400">
                SLIDE {currentSlideIndex + 1} / {totalSlides}
              </div>
            </div>

            <div className="w-full bg-[#08080c]/60 rounded-3xl h-1.5 overflow-hidden border border-zinc-900">
              <div 
                className="bg-gradient-to-r from-indigo-500 to-violet-500 h-full rounded-3xl transition-all duration-500 ease-out" 
                style={{ width: `${((currentSlideIndex + 1) / totalSlides) * 100}%` }}
              />
            </div>

            {/* MAIN SLIDE STAGE CONTAINER */}
            <div className="relative min-h-[500px] md:min-h-[520px] bg-zinc-950/20 rounded-3xl border border-zinc-800/60 p-6 md:p-12 flex flex-col justify-between backdrop-blur-md overflow-hidden min-w-0">
              
              {/* Artistic Blobs specific to slides */}
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-indigo-600/15 to-violet-500/10 rounded-full filter blur-3xl pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-violet-600/15 to-indigo-500/5 rounded-full filter blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlideIndex}
                  initial={{ opacity: 0, x: 25, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -25, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="flex flex-col gap-6"
                >
                  
                  {/* Category and Quick Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span 
                      id={`badge-cat-${currentSlideIndex}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-800 text-xs font-semibold text-slate-300 font-mono text-[9px] uppercase tracking-wider"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                      {currentSlide.category}
                    </span>
                    
                    <span className="text-[11px] font-mono font-medium text-slate-500 hidden sm:inline">
                      Press <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-400 text-[10px]">Space / Arrow</kbd> to Navigate
                    </span>
                  </div>

                  {/* Slide Title and Description */}
                  <div className="space-y-4">
                    <h2 
                      id={`slide-title-${currentSlideIndex}`}
                      className="font-display font-black text-white text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-balance text-left"
                    >
                      {currentSlide.title}
                    </h2>
                    {currentSlide.description && (
                      <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-4xl text-left">
                        {currentSlide.description}
                      </p>
                    )}
                  </div>

                  {/* RENDERING SPECIALIZED INTERACTIVE CONTENT DEPENDING ON SLIDE */}
                  
                  {/* Option 1: Standard Points List (If Any) */}
                  {currentSlide.points && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-4 text-left">
                      {currentSlide.points.map((point: any, idx) => (
                        <div 
                          key={idx}
                          className="p-5 rounded-2xl bg-[#0a0a0f]/85 border border-zinc-800/80 hover:border-indigo-500/45 transition-all duration-300 md:flex md:flex-col md:justify-between group"
                        >
                          <div>
                            <div className="flex items-start gap-3 mb-3">
                              <span className="w-6 h-6 rounded-lg bg-indigo-500/10 flex items-center justify-center text-xs font-bold text-indigo-400 border border-indigo-500/25 shrink-0 font-mono">
                                0{idx + 1}
                              </span>
                              <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors duration-200 text-sm sm:text-base">
                                {point.title}
                              </h3>
                            </div>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                              {point.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Option 2: Slide 4 - Flow Chart/Bento Block */}
                  {currentSlide.visualType === 'flow-chart' && currentSlideIndex === 3 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mt-6 text-left">
                      <div className="p-5 bg-gradient-to-b from-zinc-900/60 to-zinc-950/60 rounded-2xl border-l-4 border-l-indigo-500 border border-zinc-800/60">
                        <span className="text-[10px] font-mono text-indigo-400 block font-bold mb-1">MASUKAN SMA</span>
                        <h4 className="font-bold text-white text-sm mb-1">Portofolio Inovasi Digital</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">Karya & portofolio digital calon mahasiswa disaring otomatis agar mendaftar lebih awal.</p>
                      </div>
                      
                      <div className="flex justify-center shrink-0 py-1 md:py-0">
                        <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/25">
                          <ArrowRight className="w-4 h-4 text-indigo-400 rotate-90 md:rotate-0" />
                        </div>
                      </div>

                      <div className="p-5 bg-gradient-to-b from-[#0a0a10] to-[#050508] rounded-2xl border-l-4 border-l-violet-500 border border-zinc-800">
                        <span className="text-[10px] font-mono text-violet-400 block font-bold mb-1">EKOSISTEM KULIAH</span>
                        <h4 className="font-bold text-white text-sm mb-1">Kelas Literasi & Agency</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">Penyediaan proyek industri dan pelatihan keuangan produktif non-risiko sejak semester 1.</p>
                      </div>
                    </div>
                  )}

                  {/* Option 3: Slide 5 - Three pillars overview */}
                  {currentSlide.visualType === 'grid-summary' && currentSlideIndex === 4 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-left">
                      <div className="p-5 rounded-2xl bg-gradient-to-br from-zinc-900/40 to-zinc-950/40 border border-zinc-800/60 flex flex-col justify-between">
                        <div>
                          <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 text-orange-400 mb-3">
                            <BookOpen className="w-5 h-5" />
                          </div>
                          <h4 className="font-bold text-white mb-2 text-sm sm:text-base">Pilar I: Early-Engagement</h4>
                          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Memasuki SMA lewat jalur Sandbox & program tabungan SKS formal bermetode RPL.</p>
                        </div>
                      </div>

                      <div className="p-5 rounded-2xl bg-gradient-to-br from-zinc-900/40 to-zinc-950/40 border border-zinc-800/60 flex flex-col justify-between">
                        <div>
                          <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20 text-violet-400 mb-3">
                            <Coins className="w-5 h-5" />
                          </div>
                          <h4 className="font-bold text-white mb-2 text-sm sm:text-base">Pilar II: Inovasi & Nilai Etis</h4>
                          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Mengamankan ketangguhan keuangan keluarga via kurikulum FinLit & dana stimulus produktif digital.</p>
                        </div>
                      </div>

                      <div className="p-5 rounded-2xl bg-gradient-to-br from-zinc-900/40 to-zinc-950/40 border border-zinc-800/60 flex flex-col justify-between">
                        <div>
                          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 text-indigo-400 mb-3">
                            <Briefcase className="w-5 h-5" />
                          </div>
                          <h4 className="font-bold text-white mb-2 text-sm sm:text-base">Pilar III: Karir Berkelanjutan</h4>
                          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Unit digital Agency internal untuk portofolio riil & jaminan penempatan program beasiswa industri.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Option 4: Slide 7 - Journey Siswa (Stepper Interaktif) */}
                  {currentSlide.visualType === 'flow-chart' && currentSlideIndex === 6 && (
                    <div className="relative mt-4 flex flex-col md:flex-row items-stretch justify-between gap-4 text-left">
                      <div className="flex-1 bg-[#0a0a0f]/80 p-5 rounded-2xl border border-zinc-800/80">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-[11px] font-bold text-white font-mono">1</span>
                          <span className="text-xs font-bold text-white uppercase font-display">Kurasi Sandbox</span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">Siswa mengirim video pendek & portofolio karya kreatif/bisnis/rekayasa perangkat lunak via seluler.</p>
                      </div>
                      <div className="flex items-center justify-center text-indigo-400 py-1">
                        <ChevronRight className="w-5 h-5 hidden md:block" />
                        <ChevronLeft className="w-5 h-5 md:hidden rotate-90" />
                      </div>
                      <div className="flex-1 bg-[#0a0a0f]/80 p-5 rounded-2xl border border-zinc-800/80">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-[11px] font-bold text-white font-mono">2</span>
                          <span className="text-xs font-bold text-white uppercase font-display">Tabungan SKS RPL</span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">Siswa menyelesaikan modul pra-kuliah formal berbobot 3-6 SKS di LMS kampus secara mandiri.</p>
                      </div>
                      <div className="flex items-center justify-center text-indigo-400 py-1">
                        <ChevronRight className="w-5 h-5 hidden md:block" />
                        <ChevronLeft className="w-5 h-5 md:hidden rotate-90" />
                      </div>
                      <div className="flex-1 bg-[#0a0a0f]/80 p-5 rounded-2xl border border-zinc-800/80">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-[11px] font-bold text-white font-mono">3</span>
                          <span className="text-xs font-bold text-white uppercase font-display">Klaim Enrollment</span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">SKS diklaim penuh saat mendaftar resmi dengan diskon uang pangkal otomatis dari tabungan modul.</p>
                      </div>
                    </div>
                  )}

                  {/* Option 5: Slide 8 - ROI Simulator embed */}
                  {currentSlide.visualType === 'roi' && (
                    <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/25 to-violet-950/15 border border-indigo-500/20 mt-4 text-left">
                      <div className="flex flex-col lg:flex-row items-center gap-6">
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center gap-2">
                            <Calculator className="w-4 h-4 text-indigo-400" />
                            <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-wider font-mono">Simulasi Finansial & Penerimaan {pts}</h4>
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed text-balance">
                            Gunakan panel kontrol di bawah untuk memperkirakan keuntungan tambahan jika konsep program ini dijalankan di {pts}.
                          </p>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-[10px] text-zinc-500 uppercase font-bold mb-1">Target Tahunan PMB</label>
                              <input 
                                type="number" 
                                value={annualTarget} 
                                onChange={(e) => setAnnualTarget(Number(e.target.value))}
                                className="w-full bg-zinc-950/90 border border-zinc-800/80 rounded px-2 py-1 text-xs text-white"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] text-zinc-500 uppercase font-bold mb-1">Pendaftar Saat Ini</label>
                              <input 
                                type="number" 
                                value={currentAnnual} 
                                onChange={(e) => setCurrentAnnual(Number(e.target.value))}
                                className="w-full bg-zinc-950/90 border border-zinc-800/80 rounded px-2 py-1 text-xs text-white"
                              />
                            </div>
                            <div className="col-span-2">
                              <label className="block text-[10px] text-zinc-500 uppercase font-bold mb-1">Estimasi Kenaikan dari Sandbox (% Pendaftar)</label>
                              <div className="flex items-center gap-3">
                                <input 
                                  type="range" 
                                  min="5" 
                                  max="30" 
                                  value={sandboxConversion} 
                                  onChange={(e) => setSandboxConversion(Number(e.target.value))}
                                  className="flex-1 accent-indigo-500 cursor-pointer"
                                />
                                <span className="text-xs text-white font-mono shrink-0">{sandboxConversion}%</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="w-full lg:w-80 p-4 bg-zinc-950/90 rounded-xl border border-zinc-800/80 flex flex-col justify-between">
                          <span className="text-[10px] text-zinc-500 uppercase font-bold block mb-2 text-center border-b border-zinc-900 pb-1">Proyeksi Hasil Studi Kelayakan</span>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-slate-400">Shortfall Saat Ini</span>
                              <span className="font-mono text-red-400 font-bold">{targetMetShortfall} Orang</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-indigo-400">Gained via Sandbox</span>
                              <span className="font-mono text-indigo-400 font-bold">+{studentsGainedViaSandbox} Orang</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-slate-400">New Projected Intake</span>
                              <span className="font-mono text-white font-bold">{newProjectedEnrollment} / {annualTarget}</span>
                            </div>
                            <hr className="border-zinc-900" />
                            <div className="flex flex-col text-slate-400">
                              <span className="text-[10px] uppercase text-zinc-500">Estimasi Tambahan Omzet Semester:</span>
                              <span className="text-sm font-bold text-white font-mono mt-1">{formatRupiah(extraRevenuePerSemester)}</span>
                            </div>
                            <div className="flex flex-col text-slate-400">
                              <span className="text-[10px] uppercase text-zinc-500">Nilai Tambah Sinergi Micro-Agency:</span>
                              <span className="text-xs font-semibold text-violet-450 font-mono text-violet-400">{formatRupiah(projectValueMicroAgency)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Option 6: Slide 11 - Visual Alur Karir */}
                  {currentSlide.visualType === 'flow-chart' && currentSlideIndex === 10 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-left">
                      <div className="p-4 bg-[#0a0a10]/80 rounded-2xl border border-zinc-850/80">
                        <span className="text-[10px] font-mono text-indigo-400 block font-bold uppercase mb-1">Tahun I (Semester 1-2)</span>
                        <h4 className="font-bold text-white text-xs mb-1">Analis Junior & Data Sandbox</h4>
                        <p className="text-slate-400 text-[11px] leading-relaxed">Mendeteksi model promosi digital, membantu asah data dasar klien mini pasca modul dasar bisnis selesai.</p>
                      </div>
                      <div className="p-4 bg-[#0a0a10]/80 rounded-2xl border border-zinc-850/80">
                        <span className="text-[10px] font-mono text-indigo-400 block font-bold uppercase mb-1">Tahun II-III (Semester 3-5)</span>
                        <h4 className="font-bold text-white text-xs mb-1">Spesialis Teknis Pembuat Solusi</h4>
                        <p className="text-slate-400 text-[11px] leading-relaxed">Mengambil penugasan riil dari korporasi partner terkait copywriting AI, CRM swalayan, & sistem pajak.</p>
                      </div>
                      <div className="p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                        <span className="text-[10px] font-mono text-violet-400 block font-bold uppercase mb-1">Tahun IV (Semester 6+)</span>
                        <h4 className="font-bold text-white text-xs mb-1">Pengendali Mutu & Rekrutmen Tetap</h4>
                        <p className="text-slate-400 text-[11px] leading-relaxed">Memeriksa keselarasan solusi sebelum disubmit ke klien, beralih penuh ke ikatan kerja tetap industri.</p>
                      </div>
                    </div>
                  )}

                  {/* Option 7: Slide 13 - Roadmap Stepper */}
                  {currentSlide.visualType === 'flow-chart' && currentSlideIndex === 12 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch mt-4 text-left">
                      <div className="p-5 rounded-2xl bg-[#0a0a10]/80 border border-zinc-850/80 relative">
                        <div className="absolute top-2 right-3 text-[10px] font-mono text-slate-600 font-bold">FASE 01</div>
                        <h4 className="font-bold text-indigo-400 text-xs uppercase tracking-wider mb-2">Bulan 01 - 06 (Inisiasi)</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">
                          Penyusunan portal Sandbox, standardisasi rubrik kelola dengan Senat, integrasi kelas pra-sarjana pada 3 SMA unggulan percontohan.
                        </p>
                      </div>
                      <div className="p-5 rounded-2xl bg-[#0a0a10]/80 border border-zinc-850/80 relative">
                        <div className="absolute top-2 right-3 text-[10px] font-mono text-slate-600 font-bold">FASE 02</div>
                        <h4 className="font-bold text-violet-400 text-xs uppercase tracking-wider mb-2">Bulan 07 - 12 (Pilot Run)</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">
                          Peluncuran Micro-Agency batch pertama, operasional pusat edukasi keuangan keluarga, dan konversi perdana kredit RPL mahasiswa baru.
                        </p>
                      </div>
                      <div className="p-5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 relative">
                        <div className="absolute top-2 right-3 text-[10px] font-mono text-indigo-450 font-bold text-indigo-400">FASE 03</div>
                        <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-2">Tahun II (Full Scale Up)</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">
                          Pembukaan program beasiswa industri terikat penuh, otomatisasi rekrutmen terstandar AI, perluasan sekolah kemitraan daerah.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Option 8: Slide 15 - Appendix Menu Portal */}
                  {currentSlide.visualType === 'grid-summary' && currentSlideIndex === 14 && (
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
                      {programDetails.map((prog) => (
                        <div
                          key={prog.id}
                          id={`card-appendix-${prog.id}`}
                          onClick={() => {
                            setActiveModalId(prog.id);
                            setModalTab('concept');
                          }}
                          className="p-4 rounded-xl bg-[#0a0a10]/85 border border-zinc-800/85 hover:border-indigo-500/50 cursor-pointer hover:bg-[#0d0d15]/80 transition-all duration-300 flex flex-col justify-between group h-28"
                        >
                          <div>
                            <div className="flex items-center justify-between text-indigo-400 mb-1">
                              <span className="text-[10px] font-mono font-bold tracking-widest uppercase">PROGRAM {prog.num}</span>
                              <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </div>
                            <h4 className="font-bold text-white text-xs sm:text-sm line-clamp-2 leading-tight group-hover:text-indigo-400 transition-colors">
                              {prog.title}
                            </h4>
                          </div>
                          <span className="text-[9px] text-indigo-400/70 font-semibold uppercase group-hover:text-violet-400">Eksplorasi Konsep &rarr;</span>
                        </div>
                      ))}
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>

              {/* Bottom Buttons for Slide Nav (Tablet & Desktop size) */}
              <div className="flex items-center justify-between border-t border-zinc-800/80 pt-6 mt-6 gap-4">
                <button
                  id="btn-prev-slide"
                  onClick={prevSlide}
                  className="flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-white transition px-3 py-1.5 rounded-lg hover:bg-zinc-800/60 cursor-pointer"
                  aria-label="Kembali ke slide sebelumnya"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Sebelumnya</span>
                </button>
                
                {/* Dots controller indicator */}
                <div className="hidden md:flex items-center gap-2">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      id={`dot-nav-${idx}`}
                      onClick={() => goToSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentSlideIndex 
                          ? 'w-6 bg-indigo-500' 
                          : 'w-2 bg-zinc-850 hover:bg-zinc-650'
                      }`}
                      aria-label={`Pindah ke slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  id="btn-next-slide"
                  onClick={nextSlide}
                  className="flex items-center gap-1 text-xs font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 transition duration-300 px-4 py-2 rounded-xl shadow-md cursor-pointer"
                  aria-label="Lanjut ke slide berikutnya"
                >
                  <span>Selanjutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Mobile Touch Navigation Guide & TOC quick-select dropdown */}
            <div className="flex md:hidden items-center justify-between px-2 text-xs text-slate-500">
              <span>Swipe layar untuk berpindah slide</span>
              <button 
                id="btn-mobile-toc"
                onClick={() => setIsNavDrawerOpen(true)}
                className="text-indigo-400 font-bold flex items-center gap-1 cursor-pointer"
              >
                <Menu className="w-3.5 h-3.5" />
                <span>Quick Select..</span>
              </button>
            </div>

          </div>
        )}

        {/* VIEW B: COMPREHENSIVE HUB EXPLORER MODE (BENTO BOARD) */}
        {viewMode === 'hub' && (
          <div className="w-full space-y-8 animate-fadeIn duration-500 text-left">
            
            {/* Hub Title Block */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-800 text-xs font-semibold text-slate-300 font-mono text-[9px] uppercase tracking-wider mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  EXECUTIVE BRIEF PORTAL
                </span>
                <h1 className="font-display font-black text-white text-3xl sm:text-4xl">
                  Bento Executive Hub Proyek {pts}
                </h1>
                <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mt-1 leading-relaxed">
                  Peta jalan taktis digital satu halaman. Seluruh slide presentasi dikodifikasikan dalam layout bento interaktif yang memudahkan penelaahan materi bagi Pimpinan Kampus.
                </p>
              </div>

              {/* Utility action reset */}
              <button
                id="btn-reset-configuration"
                onClick={() => {
                  setPts('PTS Mitra Inovasi');
                  setCity('Kota Pendidikan');
                  setAnnualTarget(1000);
                  setCurrentAnnual(700);
                  setSandboxConversion(12);
                }}
                className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white border border-zinc-800/80 rounded-xl px-3 py-2 bg-zinc-950/40 hover:bg-zinc-800/60 transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Parameter Demo</span>
              </button>
            </div>

            {/* BENTO GRID LAYOUT */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Core Problem & Challenge */}
              <div className="md:col-span-2 p-6 rounded-2xl bg-zinc-950/20 border border-zinc-800/60 hover:border-zinc-700/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-red-500 mb-3">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Konteks & Hambatan Nasional</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">Rasio Hambatan Tingkat Kelulusan & Enrollment PTS</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                    Tekanan jalur mandiri PTN, menjamurnya kursus digital non-akademik, and fluktuasi keyakinan publik terhadap daya serap lulusan berkontribusi pada penyusutan peminat di dalam PTS. Cara-cara promosi reklame konvensional sudah memasuki fase jenuh.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 bg-red-950/20 rounded-xl border border-red-950/40">
                      <span className="text-xs text-red-400 block font-bold mb-1">Naiknya Agregasi PTN</span>
                      <p className="text-[10px] text-slate-400 leading-relaxed font-normal">Kapasitas tampung PTN jalur mandiri kian meningkat merebut pangsa pasar PTS.</p>
                    </div>
                    <div className="p-3 bg-red-950/20 rounded-xl border border-red-950/40">
                      <span className="text-xs text-red-400 block font-bold mb-1">Alternatif Non-Kampus</span>
                      <p className="text-[10px] text-slate-400 leading-relaxed font-normal">Bootcamp kilat menawarkan jalur penempatan karir langsung tanpa ijazah formal.</p>
                    </div>
                    <div className="p-3 bg-red-950/20 rounded-xl border border-red-950/40">
                      <span className="text-xs text-red-400 block font-bold mb-1">Rasio Finansial</span>
                      <p className="text-[10px] text-slate-400 leading-relaxed font-normal">Orang tua kian teliti menyaring nilai pengembalian aset dari uang pangkal kuliah.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: 3 Pilars of Solution (The Engine) */}
              <div className="p-6 rounded-2xl bg-zinc-950/20 border border-zinc-800/60 hover:border-zinc-700/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-indigo-400 mb-3">
                    <Cpu className="w-4 h-4" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Arsitektur Agenda Pelaksana</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">Tiga Dinamo Penggerak Utama</h3>
                  <div className="space-y-3 mt-3 text-xs">
                    <div className="flex gap-2 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                      <p className="text-slate-400"><strong>Pilar 1 (Engagement):</strong> Menarik calon mahasiswa berkat karya kreatif di bangku SMA (RPL & Sandbox).</p>
                    </div>
                    <div className="flex gap-2 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                      <p className="text-slate-400"><strong>Pilar 2 (Empowerment):</strong> Memberikan literasi finansial terapan sirkulasi keluarga non-spekulatif.</p>
                    </div>
                    <div className="flex gap-2 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                      <p className="text-slate-400"><strong>Pilar 3 (Placement):</strong> Jaminan penempatan kerja terdesain sejak semester awal lewat Agensi & Mitra Industri.</p>
                    </div>
                  </div>
                </div>
                <button 
                  id="btn-jump-pilar-slide"
                  onClick={() => { setViewMode('presentation'); setCurrentSlideIndex(4); }}
                  className="text-xs text-indigo-400 font-bold hover:text-indigo-300 hover:underline inline-flex items-center gap-1 mt-4 cursor-pointer text-left font-sans"
                >
                  Lihat visualisasi alur &rarr;
                </button>
              </div>

              {/* Card 3: INTEGRATED INTERACTIVE ENROLLMENT RECOVERY ROI CALCULATOR */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-zinc-900/40 to-zinc-950/50 border border-indigo-500/20 shadow-lg md:col-span-1">
                <div className="flex items-center gap-2 text-indigo-400 mb-3">
                  <Calculator className="w-4 h-4" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Kalkulator Simulasi Keuangan</span>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-1">Simulator Kontrol {pts}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4 font-normal">
                  Kalkulasi secara konkrit proyeksi keuntungan pendaftaran kuliah dan nilai ekonomi sinergi yang dapat diraih.
                </p>

                <div className="space-y-3.5 text-xs text-left">
                  <div>
                    <label className="block text-[10px] text-zinc-500 uppercase font-bold mb-1">Target Tahunan PMB</label>
                    <input 
                      type="number" 
                      value={annualTarget} 
                      onChange={(e) => setAnnualTarget(Number(e.target.value))}
                      className="w-full bg-zinc-950/90 border border-zinc-800/80 rounded px-2.5 py-1.5 text-white focus:outline-none focus:border-indigo-500"
                      title="Jumlah target pendaftar mahasiswa baru ideal per tahun"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-zinc-500 uppercase font-bold mb-1">Realisasi Pendaftar Saat Ini</label>
                    <input 
                      type="number" 
                      value={currentAnnual} 
                      onChange={(e) => setCurrentAnnual(Number(e.target.value))}
                      className="w-full bg-zinc-950/90 border border-zinc-800/80 rounded px-2.5 py-1.5 text-white focus:outline-none focus:border-indigo-500"
                      title="Jumlah rata-rata pendaftar saat ini (sebelum strategi)"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-zinc-500 uppercase font-bold mb-1">Biaya Kuliah Rata-rata / Smt</label>
                    <input 
                      type="number" 
                      value={averageTuitionFee} 
                      onChange={(e) => setAverageTuitionFee(Number(e.target.value))}
                      className="w-full bg-zinc-950/90 border border-zinc-800/80 rounded px-2.5 py-1.5 text-white focus:outline-none focus:border-indigo-500"
                      title="Biaya SPP/UKT rerata per semester"
                    />
                  </div>

                  <div className="h-[1px] bg-zinc-800/60" />

                  <div className="space-y-1 bg-[#0a0a10]/80 p-3 rounded-xl border border-zinc-850/60">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-400">Peluang Penetrasi</span>
                      <span className="font-bold text-red-400">+{recoveredStudents} Mahasiswa</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-400">Beban Hilang/Smt</span>
                      <span className="font-mono text-xs font-semibold text-red-400">{formatRupiah(recoveredStudents * averageTuitionFee)}</span>
                    </div>
                    <div className="flex justify-between text-[11px] font-bold text-indigo-400 pt-1 border-t border-zinc-900 mt-1">
                      <span>Proyeksi Kenaikan</span>
                      <span className="font-mono">{formatRupiah(extraRevenuePerSemester)}</span>
                    </div>
                    <div className="text-[10px] text-slate-500 text-center mt-1 leading-normal">
                      *(Target konversi Sandbox diasumsikan {sandboxConversion}% pendaftar baru)
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: INTEGRATED STUDENT SANDBOX AI PORTFOLIO MATCHER DEMO */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-zinc-900/40 to-zinc-950/50 border border-indigo-500/15 shadow-lg md:col-span-1">
                <div className="flex items-center gap-2 text-indigo-400 mb-3">
                  <Cpu className="w-4 h-4" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Simulasi Mesin Sandbox AI</span>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-1">Matcher Portofolio Calon Mahasiswa</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4 font-normal">
                  Simulasikan bagaimana AI mengorelasikan portofolio inovasi kreativitas siswa SMA dengan Rekognisi SKS & Prodi secara langsung.
                </p>

                <div className="space-y-3 text-xs text-left">
                  <div>
                    <label className="block text-[10px] text-zinc-500 uppercase font-bold mb-1">Nama Siswa Pendaftar</label>
                    <input 
                      type="text" 
                      value={matchStudentName} 
                      onChange={(e) => setMatchStudentName(e.target.value)}
                      className="w-full bg-zinc-950/90 border border-zinc-800/80 rounded px-2 py-1.5 text-white focus:outline-none focus:border-indigo-500"
                      title="Nama perwakilan calon siswa"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-zinc-500 uppercase font-bold mb-1">Judul Portofolio Karya</label>
                    <input 
                      type="text" 
                      value={matchProjectTitle} 
                      onChange={(e) => setMatchProjectTitle(e.target.value)}
                      className="w-full bg-zinc-950/90 border border-zinc-800/80 rounded px-2 py-1.5 text-white focus:outline-none focus:border-indigo-500"
                      title="Judul portofolio atau ide usaha siswa"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-zinc-500 uppercase font-bold mb-1">Kategori Keahlian Karya</label>
                    <div className="grid grid-cols-3 gap-1 bg-zinc-950 p-1 rounded border border-zinc-850/80">
                      {(['IT', 'Business', 'Communication'] as const).map((cat) => (
                        <button
                          key={cat}
                          id={`btn-cat-${cat}`}
                          onClick={() => setMatchCategory(cat)}
                          className={`py-1 text-[10px] rounded transition-all font-semibold uppercase cursor-pointer ${
                            matchCategory === cat 
                              ? 'bg-indigo-500 text-white font-bold shadow-sm' 
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    id="btn-trigger-ai-match"
                    onClick={triggerPortfolioMatch}
                    className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition duration-300 flex items-center justify-center gap-1.5 shadow-md cursor-pointer text-sans"
                    disabled={isMatchingLoading}
                  >
                    {isMatchingLoading ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin mr-1" />
                        <span>Menganalisis Portofolio...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-indigo-300 fill-current" />
                        <span>Analisis Cocok Karya & SKS</span>
                      </>
                    )}
                  </button>

                  {/* Matching output panel */}
                  {matcherOutput && (
                    <div className="mt-3 bg-indigo-950/10 p-3 rounded-xl border border-indigo-500/20 text-[11px] space-y-1.5">
                      <div className="flex justify-between text-indigo-400 font-bold">
                        <span>Skor Relevansi AI:</span>
                        <span>{matcherOutput.score} / 100</span>
                      </div>
                      <div className="text-white">
                        <strong>Rekomendasi Prodi:</strong> <span className="text-violet-400 font-bold">{matcherOutput.recommendedProdi}</span>
                      </div>
                      <div className="text-slate-400 flex justify-between">
                        <span>Tabungan Kredit SKS:</span>
                        <span className="text-indigo-400 font-mono font-bold">+{matcherOutput.suggestedCredits} SKS RPL</span>
                      </div>
                      <div className="h-[1px] bg-indigo-950/60" />
                      <div>
                        <span className="text-[10px] text-slate-500 block mb-1">Draf Analis Kompetensi:</span>
                        <div className="flex flex-wrap gap-1">
                          {matcherOutput.skillsAnalyzed.map((skill, index) => (
                            <span key={index} className="text-[9px] px-1.5 py-0.5 bg-zinc-900 border border-zinc-800/80 text-slate-400 rounded-md">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Card 5: INTEGRATED CAMPUS MICRO-AGENCY PROJECT ASSIGNER BOARD */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-zinc-900/40 to-zinc-950/50 border border-zinc-800/60 shadow-lg md:col-span-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-yellow-500 mb-3">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Simulasi Work Board Micro-Agency</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-1">Papan Proyek Industri Mahasiswa</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4 font-normal">
                    Lihat bagaimana portofolio riil dikelola dan dikoordinasikan secara bertingkat di unit digital usaha mahasiswa.
                  </p>

                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {microProjects.map((p) => (
                      <div key={p.id} className="p-2.5 bg-zinc-950/90 rounded-xl border border-zinc-850/80 flex items-center justify-between gap-2 text-[11px]">
                        <div className="truncate flex-1">
                          <span className="text-[9px] uppercase font-bold text-slate-500 block">{p.category}</span>
                          <strong className="text-white font-medium block truncate text-[11.5px]">{p.name}</strong>
                          <span className="text-[10px] text-slate-400 mt-0.5 block">{p.student}</span>
                        </div>
                        <div className="text-right shrink-0">
                          <span className={`inline-block px-1.5 py-0.5 rounded text-[8.5px] font-bold uppercase ${
                            p.status === 'Selesai' 
                              ? 'bg-violet-500/10 text-violet-400 border border-violet-500/20' 
                              : p.status === 'pengerjaan'
                              ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                              : 'bg-zinc-800 text-slate-400 border border-zinc-700'
                          }`}>
                            {p.status}
                          </span>
                          <span className="text-[9.5px] font-mono block text-indigo-400 mt-1 font-bold">
                            {formatRupiah(p.reward)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inline form to add simulated project */}
                <form onSubmit={handleAddProject} className="mt-4 border-t border-zinc-900 pt-3 flex flex-col gap-2">
                  <div className="flex gap-1">
                    <input 
                      type="text" 
                      value={newProjName}
                      onChange={(e) => setNewProjName(e.target.value)}
                      placeholder="Input proyek industri baru..."
                      className="bg-zinc-950 border border-zinc-800/80 rounded px-2 py-1 text-[11px] text-white flex-1 placeholder-zinc-650 focus:outline-none"
                      title="Masukkan judul proyek industri dari klien real"
                    />
                    <button 
                      type="submit"
                      id="btn-add-simulated-project"
                      className="p-1 px-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded text-xs cursor-pointer flex items-center justify-center shrink-0"
                      title="Tambahkan proyek ke daftar simulasi"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </div>

            </div>

            {/* LOWER PORTON: APPENDIX 8 PROPOSALS CARD GRID */}
            <div className="space-y-4 pt-4 border-t border-zinc-850/80">
              <h2 className="font-display font-black text-white text-2xl">
                Lampiran Ekspedisi Proposal Taktis Untuk {pts}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mt-1 leading-relaxed">
                Tinjau secara runut dari delapan paket program integrasi. Dilengkapi landasan akademis, rancangan skenario implementasi, tinjauan etis serta kelayakan anggaran.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {programDetails.map((prog) => (
                  <div
                    key={prog.id}
                    id={`hub-card-${prog.id}`}
                    onClick={() => {
                      setActiveModalId(prog.id);
                      setModalTab('concept');
                    }}
                    className="p-5 rounded-2xl bg-zinc-950/20 border border-zinc-800/60 hover:border-indigo-500/50 cursor-pointer hover:bg-[#0d0d15]/80 transition-all duration-300 flex flex-col justify-between group h-36 border-b-4 border-b-zinc-800 hover:border-b-indigo-500"
                  >
                    <div>
                      <div className="flex items-center justify-between text-indigo-400 mb-2">
                        <span className="text-[10px] font-mono font-bold tracking-widest bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                          PROG {prog.num}
                        </span>
                        <ChevronRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                      <h4 className="font-bold text-white font-display text-sm sm:text-base line-clamp-2 leading-tight group-hover:text-indigo-400 transition-all">
                        {prog.title}
                      </h4>
                    </div>
                    <span className="text-[10px] text-indigo-400/80 font-bold uppercase tracking-wide group-hover:text-violet-400 mt-2 block">
                      Tinjau Rincian Terperinci &rarr;
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="relative z-10 bg-slate-950/60 border-t border-slate-900/80 py-8 px-4 text-center text-xs text-slate-500 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-normal leading-relaxed text-left text-slate-400">
            Sistem Presentasi Terdistribusi &copy; 2026. Dikembangkan untuk efisiensi proposal multi-kampus.<br />
            Semua parameter simulasi finansial berpedoman pada kurikulum Invezthink, tata tertib kompilasi digital OJK, adopsi program Kemdikbudristek.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <button 
              id="footer-open-dashboard"
              onClick={() => setViewMode(viewMode === 'hub' ? 'presentation' : 'hub')}
              className="hover:text-white underline font-medium transition cursor-pointer"
            >
              Ubah ke {viewMode === 'hub' ? 'Slide Deck' : 'Bento Hub'}
            </button>
            <span>&bull;</span>
            <span className="font-mono text-[10px]">VER 2.4.0 (RELEASED)</span>
          </div>
        </div>
      </footer>

      {/* 5. SIDE DRAWER NAVIGATION (TOC) FOR QUICK JUMP */}
      <AnimatePresence>
        {isNavDrawerOpen && (
          <>
            {/* Backdrop cover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsNavDrawerOpen(false)}
              className="fixed inset-0 bg-black z-50 pointer-events-auto cursor-pointer"
            />
            {/* Drawer sheet */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-full bg-[#090e18] border-l border-slate-800 p-6 shadow-2xl z-50 overflow-y-auto text-left"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-indigo-400" />
                  <h3 className="font-display font-black text-white text-lg">Daftar Slide Presentasi</h3>
                </div>
                <button
                  id="btn-close-drawer"
                  onClick={() => setIsNavDrawerOpen(false)}
                  className="p-1 text-slate-400 hover:text-white rounded-lg bg-zinc-900 border border-zinc-800/80 cursor-pointer"
                  aria-label="Tutup menu navigasi"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-1.5 font-normal">
                {slides.map((sld, idx) => (
                  <button
                    key={sld.id}
                    id={`btn-drawer-goto-${idx}`}
                    onClick={() => goToSlide(idx)}
                    className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-xs text-left transition-all duration-300 ${
                      idx === currentSlideIndex
                        ? 'bg-indigo-500/25 text-indigo-300 border border-indigo-500/50 font-bold shadow-xs'
                        : 'text-slate-400 hover:bg-zinc-900 hover:text-white border border-transparent'
                    }`}
                  >
                    <span className="font-mono text-[10px] bg-zinc-950 px-1.5 py-0.5 rounded text-slate-500">{idx + 1}</span>
                    <div className="flex-1 truncate">
                      <span className="text-[9px] uppercase font-bold text-slate-500 block leading-none mb-1">{sld.category}</span>
                      <span className="block truncate font-medium text-white">{sld.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 6. MODAL INTERAKTIF DEEP-DIVE DOCUMENT PORTAL */}
      <AnimatePresence>
        {activeModalId !== null && activeProgram && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalId(null)}
              className="fixed inset-0 bg-neutral-950/80 z-[100] backdrop-blur-xs cursor-pointer"
            />
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-4 sm:inset-10 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl md:max-h-[85vh] bg-[#06060a]/95 border border-zinc-800/80 rounded-3xl overflow-hidden shadow-2xl z-[100] flex flex-col text-left backdrop-blur-xl"
            >
              
              {/* Modal header */}
              <div className="p-5 sm:p-6 bg-zinc-950 border-b border-zinc-900 flex items-start justify-between gap-4 shrink-0">
                <div className="space-y-1">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-[9.5px] font-mono font-bold text-indigo-400 uppercase tracking-widest">
                    PROGRAM {activeProgram.num} — PROPOSAL DETAIL
                  </span>
                  <h3 className="font-display font-black text-white text-xl sm:text-2xl tracking-tight leading-tight">
                    {activeProgram.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-normal">
                    {activeProgram.subtitle}
                  </p>
                </div>
                <button
                  id="btn-close-modal"
                  onClick={() => setActiveModalId(null)}
                  className="p-1 px-2 text-slate-400 hover:text-white rounded-lg bg-zinc-900 border border-zinc-800/80 transition cursor-pointer"
                  aria-label="Tutup modal detail"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal local tab controllers */}
              <div className="bg-[#08080d]/80 border-b border-zinc-900/60 px-6 py-2 flex gap-1.5 overflow-x-auto shrink-0 select-none">
                {(['concept', 'rpl', 'execution', 'model'] as const).map((tab) => (
                  <button
                    key={tab}
                    id={`btn-modal-tab-${tab}`}
                    onClick={() => setModalTab(tab)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all uppercase tracking-wider cursor-pointer ${
                      modalTab === tab
                        ? 'bg-indigo-500/25 text-indigo-300 border border-indigo-500/40 font-bold'
                        : 'text-slate-400 hover:text-white border border-transparent'
                    }`}
                  >
                    {tab === 'concept' ? '1. Inti Konsep' : tab === 'rpl' ? '2. Relevansi RPL' : tab === 'execution' ? '3. Tahapan Eksekusi' : '4. Model Bisnis & Etika'}
                  </button>
                ))}
              </div>

              {/* Modal body scroll container */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1 font-normal text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
                
                {modalTab === 'concept' && (
                  <div className="space-y-4 animate-fadeIn duration-200">
                    <div className="space-y-2">
                       <span className="text-xs uppercase text-slate-400 font-bold block font-mono">Definisi & Skenario Konseptual:</span>
                      <p className="text-slate-350">
                        {activeProgram.concept}
                      </p>
                    </div>
                    <div className="bg-zinc-950/90 p-4 rounded-2xl border border-zinc-850/80">
                      <span className="text-xs uppercase text-indigo-400 font-bold block font-mono mb-1.5">Signifikansi Dampak Strategis:</span>
                      <p className="text-xs text-slate-400 leading-relaxed font-normal">
                        {activeProgram.strategicWeight}
                      </p>
                    </div>
                  </div>
                )}

                {modalTab === 'rpl' && (
                  <div className="space-y-4 animate-fadeIn duration-200">
                    <div className="space-y-2">
                      <span className="text-xs uppercase text-slate-400 font-bold block font-mono">Mekanisme Pengakuan SKS / Rekognisi Pembelajaran Lampau (RPL):</span>
                      <p className="text-slate-350">
                        {activeProgram.rplRelevance}
                      </p>
                    </div>
                    <div className="bg-indigo-950/15 p-4 rounded-2xl border border-indigo-500/20 text-xs">
                      <span className="font-bold text-indigo-400 block mb-1">Landasan Mutu Akademik</span>
                      <p className="text-slate-400 leading-normal font-normal">
                        Kompilasi kualifikasi ini disesuaikan dengan Keputusan Direktur Jenderal Pendidikan Tinggi tentang penyelenggaraan RPL Tipe A di perguruan tinggi untuk mengamankan legalitas pelaporan ijazah mahasiswa baru.
                      </p>
                    </div>
                  </div>
                )}

                {modalTab === 'execution' && (
                  <div className="space-y-4 animate-fadeIn duration-200">
                    <span className="text-xs uppercase text-slate-400 font-bold block font-mono">Daftar Rencana Implementasi Bertahap (Roadmap Teknis):</span>
                    <ol className="space-y-3.5 pl-1">
                      {activeProgram.implementationSteps.map((step, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="w-5 h-5 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-xs text-indigo-400 font-mono font-bold shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <span className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {modalTab === 'model' && (
                  <div className="space-y-5 animate-fadeIn duration-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      <div className="p-4 bg-zinc-950/90 rounded-2xl border border-zinc-850/80 text-xs">
                        <span className="font-bold text-indigo-400 block mb-1 font-mono uppercase tracking-widest text-[9.5px]">A. Model Anggaran & Sumber Dana:</span>
                        <p className="text-slate-400 leading-relaxed font-normal">
                          {activeProgram.fundingStructure}
                        </p>
                        <div className="mt-2.5 pt-2 border-t border-zinc-900 text-slate-500 font-normal">
                          <strong className="text-slate-300 block">Efek Beban Kas Kampus:</strong> {activeProgram.budgetImpact}
                        </div>
                      </div>

                      <div className="p-4 bg-zinc-950/90 rounded-2xl border border-zinc-850/80 text-xs">
                        <span className="font-bold text-yellow-500 block mb-1 font-mono uppercase tracking-widest text-[9.5px]">B. Kode Etik, Mitigasi & Kepatuhan Hukum:</span>
                        <p className="text-slate-400 leading-relaxed font-normal">
                          {activeProgram.ethicsRegulations}
                        </p>
                      </div>

                    </div>
                    
                    <div className="p-4 rounded-xl bg-zinc-950/40 border border-zinc-900 text-xs leading-relaxed text-slate-500 text-center font-normal">
                      Seluruh usulan pada program {activeProgram.num} ini bersifat fleksibel dan dapat dikustomisasi lebih lanjut sesuai persetujuan pimpinan Senat Akademik serta kapasitas tim pelaksana teknis universitas.
                    </div>
                  </div>
                )}

              </div>

              {/* Modal footer back to deck info/controls */}
              <div className="p-4 bg-zinc-950 border-t border-zinc-900 flex justify-between items-center sm:px-6 shrink-0 text-slate-500 text-xs">
                <span>Perubahan dinamis diatur via presenter panel atas</span>
                <button
                  id="btn-close-modal-bottom"
                  onClick={() => setActiveModalId(null)}
                  className="px-4 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-lg border border-zinc-800/80 transition cursor-pointer"
                >
                  Tutup Rincian
                </button>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
