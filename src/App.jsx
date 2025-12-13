import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Globe, Terminal, User, BookOpen, ChevronDown, MapPin, Wrench, PenTool, Monitor, Cpu, Smartphone, MessageCircle } from 'lucide-react';
import fotoProfile from './assets/foto-profile.jpg';

const userData = {
  name: "Adryan Maulana Saputra",
  role: "IT Support & Developer",
  university: "Universitas Lambung Mangkurat",
  location: "Banjarbaru, Indonesia",
  shortBio: "Mahasiswa Ilmu Komputer yang gemar ngoding dan ngoprek hardware. Solusi untuk masalah software dan hardware laptopmu.",
  about: "Halo! Saya mahasiswa Ilmu Komputer di Universitas Lambung Mangkurat dengan ketertarikan luas di dunia teknologi. Tidak hanya fokus pada penulisan kode (Python, PHP, Flutter), saya juga memiliki jam terbang tinggi dalam perbaikan perangkat keras (Service Laptop/PC) dan Desain Grafis. Saya percaya pemahaman hardware dan software yang seimbang menciptakan solusi IT yang lebih baik.",
  email: "riyansmartfren@gmail.com",
  // Format nomor WA: 628xxx (tanpa + atau 0 di depan)
  whatsapp: "6282158846103", 
  profileImage: fotoProfile, 
  socials: {
    github: "https://github.com/Vanasixc/",
    linkedin: "https://www.linkedin.com/in/adryan-maulana-saputra-297a801b1/",
  },
  
  // SKILLS
  skillCategories: [
    {
      title: "Software Development",
      icon: <Code size={24} />,
      items: ["Python", "PHP (Laravel/CodeIgniter)", "Java", "Flutter (Mobile)", "HTML/CSS"]
    },
    {
      title: "Hardware & IT Support",
      icon: <Wrench size={24} />,
      items: ["Service Laptop & PC", "Hardware Troubleshooting", "Instalasi Windows/Linux", "Maintenance Jaringan", "Perakitan PC"]
    },
    {
      title: "Creative & Design",
      icon: <PenTool size={24} />,
      items: ["UI/UX Design", "Graphic Design", "Figma", "Canva"]
    }
  ],

  // DAFTAR PROYEK & LAYANAN
  projects: [
    {
      id: 1,
      title: "Jasa Service & Maintenance",
      category: "Hardware / IT Support",
      desc: "Menangani perbaikan hardware laptop (ganti LCD, Keyboard, Baterai), instalasi ulang OS, dan perakitan PC Gaming/Kantor.",
      tags: ["Hardware", "Repair", "Windows/Linux"],
      // Link WA diperbaiki agar bisa diklik langsung
      link: "https://wa.me/6282158846103?text=Halo%20Mas%20Adryan,%20saya%20mau%20tanya%20jasa%20service", 
      repo: null, 
      icon: <Cpu size={48} />
    },
    {
      id: 2,
      title: "Aplikasi Mobile Absensi (QRSense)",
      category: "Mobile App",
      desc: "Aplikasi absensi mahasiswa sederhana yang dibangun menggunakan Flutter dengan validasi lokasi menggunakan QR Code.",
      tags: ["Flutter", "Dart", "Mobile UI"],
      repo: "https://github.com/Vanasixc/projectPemmob",
      link: null, // null jika tidak ada demo link
      icon: <Smartphone size={48} />
    },
    {
      id: 3,
      title: "Sistem Inventaris Lab (SILAKOM)",
      category: "Web Development",
      desc: "Aplikasi web berbasis PHP CodeIgniter untuk mencatat stok barang masuk dan keluar di gudang serta peminjaman barang.",
      tags: ["PHP", "MySQL", "Bootstrap"],
      repo: "https://github.com/Vanasixc/SILAKOM",
      link: null,
      icon: <Globe size={48} />
    },
  ]
};

/**
 * KOMPONEN UTAMA
 */

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-sky-200 selection:text-sky-900">
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-bold text-2xl text-sky-600 flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
            <Terminal size={28} />
            <span>Vanasixc<span className="text-slate-400">.Dev</span></span>
          </div>
          <div className="hidden md:flex gap-8 font-medium text-slate-600">
            {['Home', 'About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-sky-500 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-6 text-center z-10">
          <div className="inline-block mb-4 px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold tracking-wide animate-fade-in-up">
            👋 Welcome to My Space
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight animate-fade-in-up delay-100">
            Halo, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">{userData.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            {userData.role}
            <br className="hidden md:block"/> 
            <span className="text-base text-slate-500 mt-2 block">{userData.shortBio}</span>
          </p>
          
          <div className="flex justify-center gap-4 animate-fade-in-up delay-300">
            <button onClick={() => scrollTo('portfolio')} className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-sky-200 transform hover:-translate-y-1">
              Lihat Karya & Jasa
            </button>
            <button onClick={() => scrollTo('contact')} className="px-8 py-3 bg-white border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-200 rounded-full font-semibold transition-all shadow-sm hover:shadow-md">
              Hubungi Saya
            </button>
          </div>

          <div className="mt-16 animate-bounce text-slate-400 flex justify-center">
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-20 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/3 relative group">
                <div className="aspect-square rounded-2xl bg-slate-100 overflow-hidden shadow-xl border-4 border-white relative z-10">
                   <img 
                    src={userData.profileImage} 
                    alt={userData.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://via.placeholder.com/400x400?text=No+Image";
                    }}
                   />
                </div>
                <div className="absolute -z-0 top-4 -right-4 w-full h-full rounded-2xl bg-sky-100 transition-all duration-300 group-hover:top-5 group-hover:-right-5"></div>
              </div>
              
              <div className="w-full md:w-2/3">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <BookOpen className="text-sky-500" />
                  Tentang Saya
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  {userData.about}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-slate-600 bg-slate-50 p-3 rounded-lg">
                    <MapPin size={20} className="text-sky-500" />
                    <span>{userData.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 bg-slate-50 p-3 rounded-lg">
                    <Globe size={20} className="text-sky-500" />
                    <span>Universitas Lambung Mangkurat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-20 bg-sky-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Keahlian & Kompetensi</h2>
            <p className="text-slate-600">Gabungan antara kemampuan teknis pemrograman dan dukungan perangkat keras.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {userData.skillCategories.map((cat, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mb-6">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-6">{cat.title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {cat.items.map((item, idx) => (
                    <span key={idx} className="px-4 py-2 bg-slate-50 text-slate-700 text-sm font-medium rounded-full border border-slate-200 hover:border-sky-300 hover:text-sky-600 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS & SERVICES SECTION --- */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Portfolio & Layanan</h2>
            <p className="text-slate-600">Beberapa proyek pemrograman dan jenis layanan IT yang saya kerjakan.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {userData.projects.map((project) => (
              // Mengatur width agar responsive: Full width di mobile, 48% di desktop (mirip 2 kolom)
              <div key={project.id} className="w-full md:w-[48%] group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row min-h-[16rem]">
                
                {/* Icon Section (Left) */}
                <div className="w-full md:w-40 bg-slate-50 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-slate-100 group-hover:bg-sky-50 transition-colors">
                   <div className="text-sky-300 group-hover:text-sky-500 group-hover:scale-110 transition-all duration-500">
                     {project.icon}
                   </div>
                </div>
                
                {/* Content Section (Right) */}
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <div className="mb-2">
                    <span className="text-xs font-bold tracking-wider text-sky-600 uppercase mb-1 block">{project.category}</span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">{project.title}</h3>
                  </div>
                  
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors">
                        <Github size={16} /> Code
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-sky-600 hover:text-sky-700 font-medium transition-colors">
                        {project.link.includes('wa.me') ? 'Chat WA' : 'Lihat Detail'} <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-20 bg-sky-900 text-white relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-sky-800 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-blue-800 rounded-full opacity-50 blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Butuh Bantuan IT?</h2>
            <p className="text-sky-100 text-lg mb-10">
              Baik itu pembuatan aplikasi/website, desain grafis, atau laptop kamu sedang bermasalah, saya siap membantu.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
              <a href={`mailto:${userData.email}`} className="flex w-full md:w-auto items-center justify-center gap-3 px-8 py-4 bg-white text-sky-900 rounded-full font-bold hover:bg-sky-50 transition-transform hover:scale-105 shadow-lg">
                <Mail size={20} />
                Hubungi via Email
              </a>
              
              <a href={`https://wa.me/${userData.whatsapp}`} target="_blank" rel="noreferrer" className="flex w-full md:w-auto items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white rounded-full font-bold hover:bg-green-600 transition-transform hover:scale-105 shadow-lg border border-green-400">
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>

            <div className="flex justify-center gap-6">
              <a href={userData.socials.github} target="_blank" rel="noreferrer" className="p-3 bg-sky-800/50 rounded-full hover:bg-sky-700 hover:text-white text-sky-200 transition-all">
                <Github size={24} />
              </a>
              <a href={userData.socials.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-sky-800/50 rounded-full hover:bg-sky-700 hover:text-white text-sky-200 transition-all">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-8 text-center text-slate-400 text-sm">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} {userData.name}. All Rights Reserved.</p>
        </div>
      </footer>

      {/* --- CUSTOM CSS FOR ANIMATIONS --- */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
};

export default App;