import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ChevronRight, Shield, Activity, Zap, Droplets,
  ShoppingCart, ArrowRight, Check, Mail, MapPin, Linkedin,
  Instagram, Facebook, ArrowLeft, Info, HelpCircle, FileText,
  Star, Users, Globe, Award, ShieldCheck, Beaker, Trash,
  Sparkles, RefreshCw, AlertCircle, Cpu, Layers, Handshake
} from 'lucide-react';

/**
 * RANA WALK® - Ecosistema de Biomimetismo Podal
 * Versión: WEB INTEGRADA COMPLETA (AI-READY)
 */

// --- GEMINI API INTEGRATION ---
const callGemini = async (userPrompt) => {
  const apiKey = "AIzaSyBmO6qTow7RVhNv9QTgQM0PkdEoPTV_tf0"; // Key existente
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

  const systemPrompt = `
    Eres el Consultor Biomecánico Experto de Rana Walk®.
    Tu misión es recomendar uno de nuestros 4 sistemas biomecánicos (GOLIATH, VELOX, ORBIS, LEOPARD) basados en la necesidad del usuario.
    
    Instrucciones técnicas:
    - Usa un tono de Biomimetismo profesional (Ingeniería, Carga, Impacto).
    - NO uses lenguaje médico-clínico.
    - Basa tus respuestas en las siguientes variables: Impacto, Carga y Espacio Interno.
    - Responde siempre en español.
  `;

  const payload = {
    contents: [{
      parts: [{ text: `System Instruction: ${systemPrompt}\n\nUser Query: ${userPrompt}` }]
    }]
  };

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text;
  } catch (err) {
    throw err;
  }
};

// --- DATA: SISTEMAS BIOMECÁNICOS (ENRIQUECIDA CON PDF) ---
const systemsData = [
  {
    id: 'goliath',
    name: 'GOLIATH®',
    ref: 'HIGH-LOAD-SYS',
    tagline: 'Soporte estructural para alta carga',
    shortDesc: 'Diseñado para escenarios donde el cuerpo está sometido a altas cargas, impacto repetitivo y jornadas prolongadas.',
    color: 'bg-slate-800',
    accent: '#1e293b',
    textAccent: 'text-slate-800',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',

    // PDF Content
    bioMimicry: 'Inspirado en la arquitectura de los gigantes. Emula la estructura ósea de grandes mamíferos terrestres, distribuyendo toneladas de presión sin colapsar.',
    fullDescription: 'GOLIATH® actúa como un cimiento sólido para el cuerpo humano en entornos de máxima exigencia. Mientras otros materiales se comprimen y pierden función, este sistema mantiene su arquitectura bajo presión extrema.',

    scenario: 'Alta carga, impacto repetitivo y jornadas intensivas (+12h) en superficies duras.',
    sensation: 'Soporte firme, sólido y de máxima protección. No es una almohada, es un cimiento.',

    technologies: ['leapcore', 'poron', 'nanospread', 'arch'],
    techSpecs: [
      { name: 'LeapCore™', role: 'Chasis estructural que emula el soporte óseo.' },
      { name: 'PORON® XRD®', role: 'Escudo de reacción instantánea ante impactos.' },
      { name: 'Arch Support', role: 'Exoesqueleto rígido para máxima transferencia.' }
    ],

    aiReadySummary: {
      impact: '10/10 (PORON® XRD®)',
      load: '10/10 (LeapCore™)',
      space: 'Gran Volumen',
      tech: 'LeapCore™ + PORON® XRD®'
    },

    userProfile: 'Operarios industriales, policías, personal de rescate o usuarios de peso elevado que requieren estabilidad inquebrantable.',
    bestFootwear: 'Botas de trabajo, calzado industrial, táctico o de seguridad.',
    idealIf: 'Trabajas muchas horas de pie, llevas equipo pesado o prefieres firmeza estructural a suavidad momentánea.'
  },
  {
    id: 'velox',
    name: 'VELOX',
    ref: 'SLIM-PERF-SYS',
    tagline: 'Alto performance en perfil mínimo',
    shortDesc: 'Arquitectura ultradelgada para ofrecer respuesta dinámica y eficiencia del movimiento.',
    color: 'bg-red-700',
    accent: '#dc2626',
    textAccent: 'text-red-700',
    image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&q=80&w=800',

    // PDF Content
    bioMimicry: 'La ingeniería del tendón reactivo. Emula la elasticidad pura y la flexibilidad absoluta para movimientos rápidos sin restricciones rígidas.',
    fullDescription: 'VELOX es el sistema más liviano y reactivo. Construido íntegramente en ThinBoom™ (E-TPU), ofrece retorno de energía superior en un perfil ultradelgado que mantiene el calce original del zapato.',

    scenario: 'Calzado de espacio reducido, jornadas activas de alta movilidad y cambios de ritmo.',
    sensation: 'Reactiva, firme, fresca y totalmente flexible. "Rebote" técnico.',

    technologies: ['thinboom', 'nanospread'],
    techSpecs: [
      { name: '100% ThinBoom™', role: 'Retorno energético explosivo en espesor mínimo.' },
      { name: 'NanoSpread™', role: 'Capilaridad técnica para gestión térmica.' },
      { name: 'Flexibilidad Total', role: 'Sin chasis rígido, acompaña la torsión natural.' }
    ],

    aiReadySummary: {
      impact: '6/10 (Retorno Energía)',
      load: '6/10 (Agilidad)',
      space: '10/10 (Perfil Mínimo)',
      tech: '100% ThinBoom™'
    },

    userProfile: 'Profesionales urbanos con calzado ajustado o personas dinámicas que priorizan la respuesta sobre la suavidad.',
    bestFootwear: 'Zapatos de vestir, sneakers de perfil bajo, calzado casual ajustado.',
    idealIf: 'Buscas mejorar desempeño sin cambiar el calce de tus zapatos favoritos.'
  },
  {
    id: 'orbis',
    name: 'ORBIS',
    ref: 'DAILY-BAL-SYS',
    tagline: 'Equilibrio postural y confort diario',
    shortDesc: 'Diseñado para uso cotidiano prolongado. Acompaña el movimiento natural del cuerpo.',
    color: 'bg-sky-600',
    accent: '#0ea5e9',
    textAccent: 'text-sky-600',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800',

    // PDF Content
    bioMimicry: 'Ingeniería de la homeostasis. Emula el balance postural constante y la autorregulación del equilibrio natural.',
    fullDescription: 'ORBIS mantiene un equilibrio constante entre soporte estructural y gestión climática. Proporciona un soporte que no sobrecorrige, sino que acompaña el movimiento natural.',

    scenario: 'Confort diario prolongado, caminatas frecuentes en ciudad y oficina.',
    sensation: 'Natural, equilibrada y de confort progresivo. Estabilidad sin rigidez.',

    technologies: ['leapcore', 'shocksphere', 'nanospread'],
    techSpecs: [
      { name: 'LeapCore™ Media', role: 'Soporte equilibrado que acompaña el arco.' },
      { name: 'ShockSphere™', role: 'Suaviza irregularidades del terreno urbano.' },
      { name: 'NanoSpread™', role: 'Mantiene la planta seca y fresca.' }
    ],

    aiReadySummary: {
      impact: '7/10 (Equilibrado)',
      load: '8/10 (Soporte Medio)',
      space: '9/10 (Estándar)',
      tech: 'LeapCore™ + ShockSphere™'
    },

    userProfile: 'Usuarios urbanos cotidianos que buscan confort real para todo el día sin sensación de inestabilidad.',
    bestFootwear: 'Calzado casual, urbano, sneakers estándar.',
    idealIf: 'Caminas mucho en la ciudad y quieres sentir estabilidad sin rigidez.'
  },
  {
    id: 'leopard',
    name: 'LEOPARD',
    ref: 'ADAPT-STAB-SYS',
    tagline: 'Estabilidad adaptable a entornos variables',
    shortDesc: 'Inteligencia geométrica que se integra a tu anatomía y la variabilidad del terreno.',
    color: 'bg-amber-600',
    accent: '#d97706',
    textAccent: 'text-amber-600',
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800',

    // PDF Content
    bioMimicry: 'Ajuste felino. Emula la capacidad de los felinos para ajustar su pisada y mantener estabilidad en terrenos variables.',
    fullDescription: 'LEOPARD no es una corrección fija, es una plataforma inteligente. Su chasis de geometría dinámica se adapta al arco del usuario, mejorando la alineación postural.',

    scenario: 'Control del apoyo y estabilidad dinámica en entornos irregulares o mixtos.',
    sensation: 'Estable, robusta y adaptable al arco del usuario.',

    technologies: ['leapcore', 'shocksphere', 'nanospread', 'arch'],
    techSpecs: [
      { name: 'LeapCore™ Adaptable', role: 'Geometría que se amolda a la presión del arco.' },
      { name: 'ShockSphere™', role: 'Absorción focalizada en talón y antepié.' },
      { name: 'Arch Support', role: 'Refuerzo para evitar fatiga en terrenos mixtos.' }
    ],

    aiReadySummary: {
      impact: '9/10 (ShockSphere™)',
      load: '9/10 (Resiliencia)',
      space: '8/10 (Outdoor/Robusto)',
      tech: 'LeapCore™ Adaptable'
    },

    userProfile: 'Usuarios activos en terrenos mixtos o quienes requieren mayor control del apoyo adaptado a su arco.',
    bestFootwear: 'Calzado outdoor ligero, botas de uso mixto, tekkies.',
    idealIf: 'Te mueves en superficies distintas y necesitas que tu sistema se adapte a tu pie.'
  }
];

// --- DATA: TECNOLOGÍAS DETALLADAS ---
const techData = [
  {
    id: 'leapcore',
    name: 'LeapCore™',
    claim: 'La Columna Vertebral del Sistema',
    desc: 'Matriz estructural de poliuretano de ingeniería (PU). Emula la consistencia ósea para mantener alineación y soporte bajo carga repetitiva sin colapsar.',
    icon: <Activity className="w-8 h-8 text-blue-500" />
  },
  {
    id: 'thinboom',
    name: 'ThinBoom™',
    claim: 'El Tendón de Energía Explosiva',
    desc: 'Matriz de Elastómero de Expansión Supercrítica (ETCE). Emula la eficiencia elástica de los tendones, devolviendo 70-80% de energía en perfil mínimo.',
    icon: <Zap className="w-8 h-8 text-yellow-500" />
  },
  {
    id: 'nanospread',
    name: 'NanoSpread™',
    claim: 'Capilaridad Reptiliana',
    desc: 'Membrana de transferencia termo-higroscópica. Micro-canales que dispersan la humedad y el calor de forma pasiva, emulando pieles técnicas naturales.',
    icon: <Droplets className="w-8 h-8 text-cyan-500" />
  },
  {
    id: 'poron',
    name: 'PORON® XRD®',
    claim: 'Escudo de Reacción Instantánea',
    desc: 'Uretano de celda abierta que permanece flexible al movimiento pero se endurece al impacto para disipar hasta el 90% de la energía. Tecnología patentada.',
    icon: <ShieldCheck className="w-8 h-8 text-slate-400" />
  },
  {
    id: 'shocksphere',
    name: 'ShockSphere™',
    claim: 'Estabilidad Dinámica Felina',
    desc: 'Polímero de disipación con geometría esférica. Absorción focalizada que estabiliza la pisada en superficies irregulares sin perder control.',
    icon: <CircleDotIcon className="w-8 h-8 text-orange-500" />
  },
  {
    id: 'arch',
    name: 'Arch Support',
    claim: 'Exoesqueleto de Soporte',
    desc: 'Refuerzo de polímero de vinilo de alta tenacidad. Previene el colapso del arco medial y optimiza la palanca mecánica del pie.',
    icon: <Layers className="w-8 h-8 text-indigo-500" />
  }
];

// Helper icon component since CircleDot wasn't imported initially
const CircleDotIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="1" /></svg>
);


const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedSystem, setSelectedSystem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [geminiQuery, setGeminiQuery] = useState('');
  const [geminiResponse, setGeminiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Scroll to top when section changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection, selectedSystem]);

  const handleNav = (section) => {
    setActiveSection(section);
    setSelectedSystem(null);
    setIsMenuOpen(false);
  };

  const handleGeminiConsult = async (e) => {
    e.preventDefault();
    if (!geminiQuery.trim()) return;

    setIsLoading(true);
    setGeminiResponse('');

    try {
      const response = await callGemini(geminiQuery);
      setGeminiResponse(response);
    } catch (error) {
      setGeminiResponse("Error de conexión con el consultor. Por favor intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  // --- COMPONENTES INTERNOS ---

  const Header = () => (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleNav('home')}
          >
            <Activity className="h-8 w-8 text-emerald-600 mr-2" />
            <span className="text-xl font-bold text-slate-900 tracking-tight">RANA WALK®</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => handleNav('home')} className={`text-sm font-medium transition-colors ${activeSection === 'home' ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}>Inicio</button>
            <button onClick={() => handleNav('systems')} className={`text-sm font-medium transition-colors ${activeSection === 'systems' ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}>Sistemas</button>
            <button onClick={() => handleNav('technology')} className={`text-sm font-medium transition-colors ${activeSection === 'technology' ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}>Tecnología</button>
            <button onClick={() => handleNav('distributors')} className={`text-sm font-medium transition-colors ${activeSection === 'distributors' ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}>Distribuidores</button>
            <button onClick={() => handleNav('ai')} className={`flex items-center text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-all shadow-md`}>
              <Sparkles className="w-4 h-4 mr-2" /> Consultor IA
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 absolute w-full">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <button onClick={() => handleNav('home')} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Inicio</button>
            <button onClick={() => handleNav('systems')} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Sistemas</button>
            <button onClick={() => handleNav('technology')} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Ciencia y Tecnología</button>
            <button onClick={() => handleNav('distributors')} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Distribuidores</button>
            <button onClick={() => handleNav('ai')} className="block w-full text-left px-3 py-2 text-base font-medium text-emerald-600 bg-emerald-50 rounded-md flex items-center">
              <Sparkles className="w-4 h-4 mr-2" /> Consultor IA
            </button>
          </div>
        </div>
      )}
    </header>
  );

  const Footer = () => (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      {/* Trust Barometer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <h3 className="text-white text-lg font-semibold mb-6 text-center uppercase tracking-wider">Respaldado por la Ciencia Global</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-8 h-8 text-slate-400 mb-2" />
              <span className="text-sm font-bold text-white">PORON® XRD®</span>
              <span className="text-xs text-slate-400">Protección Certificada</span>
            </div>
            <div className="flex flex-col items-center">
              <Beaker className="w-8 h-8 text-slate-400 mb-2" />
              <span className="text-sm font-bold text-white">Life Sciences Hub</span>
              <span className="text-xs text-slate-400">Validación Costa Rica</span>
            </div>
            <div className="flex flex-col items-center">
              <Activity className="w-8 h-8 text-slate-400 mb-2" />
              <span className="text-sm font-bold text-white">LeapCore™ Tech</span>
              <span className="text-xs text-slate-400">Resiliencia Estructural</span>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-8 h-8 text-slate-400 mb-2" />
              <span className="text-sm font-bold text-white">Esencial Costa Rica</span>
              <span className="text-xs text-slate-400">Origen de Excelencia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <div className="flex items-center text-white font-bold text-xl">
            <Activity className="h-6 w-6 mr-2 text-emerald-500" /> RANA WALK®
          </div>
          <p className="text-sm text-slate-400">
            Bio-ingeniería desde el Life Sciences Hub de las Américas.
            Name it, leap forward.
          </p>
          <div className="flex space-x-4 pt-2">
            <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
            <Globe className="w-5 h-5 hover:text-white cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Plataformas</h4>
          <ul className="space-y-2 text-sm">
            <li onClick={() => { handleNav('systems'); setSelectedSystem(systemsData[0]); }} className="hover:text-emerald-400 cursor-pointer">GOLIATH® (Alta Carga)</li>
            <li onClick={() => { handleNav('systems'); setSelectedSystem(systemsData[1]); }} className="hover:text-emerald-400 cursor-pointer">VELOX (Perfil Bajo)</li>
            <li onClick={() => { handleNav('systems'); setSelectedSystem(systemsData[2]); }} className="hover:text-emerald-400 cursor-pointer">ORBIS (Equilibrio)</li>
            <li onClick={() => { handleNav('systems'); setSelectedSystem(systemsData[3]); }} className="hover:text-emerald-400 cursor-pointer">LEOPARD (Adaptable)</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Ingeniería</h4>
          <ul className="space-y-2 text-sm">
            <li onClick={() => handleNav('technology')} className="hover:text-emerald-400 cursor-pointer">LeapCore™ (Estructura)</li>
            <li onClick={() => handleNav('technology')} className="hover:text-emerald-400 cursor-pointer">ThinBoom™ (Energía)</li>
            <li onClick={() => handleNav('technology')} className="hover:text-emerald-400 cursor-pointer">NanoSpread™ (Clima)</li>
            <li onClick={() => handleNav('technology')} className="hover:text-emerald-400 cursor-pointer">PORON® XRD® (Impacto)</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contacto & B2B</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> leap@ranawalk.com</li>
            <li className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> San Antonio, Heredia, CR</li>
            <li onClick={() => handleNav('distributors')} className="text-emerald-400 font-medium cursor-pointer mt-4 block">→ Portal Distribuidores</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 text-xs text-center text-slate-500">
        <p>© 2026 Rana Walk®. Todos los derechos reservados.</p>
        <div className="mt-2 space-x-4">
          <span className="hover:text-slate-300 cursor-pointer">Privacidad</span>
          <span className="hover:text-slate-300 cursor-pointer">Términos</span>
          <span className="hover:text-slate-300 cursor-pointer">Patentes</span>
        </div>
      </div>
    </footer>
  );

  // --- VISTAS ---

  const HomeView = () => (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-50 pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold tracking-wide mb-6">
            LIFE SCIENCES HUB · COSTA RICA
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Sistemas de Bio-mimetismo <br />
            <span className="text-emerald-600">Diseñados para Dominar</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
            Rana Walk® desarrolla soluciones inspiradas en la eficiencia de la naturaleza.
            Dominamos el impacto y la carga en jornadas exigentes.
            <br /><span className="font-semibold text-slate-800">Name it, leap forward.</span>
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button onClick={() => handleNav('systems')} className="px-8 py-4 bg-slate-900 text-white font-bold rounded-lg shadow-lg hover:bg-slate-800 transition-transform transform hover:-translate-y-1 flex items-center">
              Explorar Sistemas <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button onClick={() => handleNav('ai')} className="px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-lg shadow-sm hover:bg-slate-50 transition-colors flex items-center">
              <Sparkles className="ml-2 w-5 h-5 text-emerald-600 mr-2" /> ¿Cuál es mi sistema?
            </button>
          </div>
        </div>

        {/* Abstract shapes background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0 opacity-30">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Bio-mimetismo aplicado a la base de tu bienestar</h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-600">
              Nacemos donde la precisión de la bio-ingeniería converge con la mayor densidad biológica del planeta.
              Mientras las plantillas genéricas colapsan, <span className="font-semibold text-emerald-700">Rana Walk® emula mecanismos de supervivencia.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-6 rounded-2xl bg-slate-50 hover:shadow-md transition-shadow">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Layers className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ecosistema Interconectado</h3>
              <p className="text-slate-600">No diseñamos capas aisladas. Creamos arquitecturas que trabajan como un sistema unificado de soporte.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 hover:shadow-md transition-shadow">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Activity className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Resiliencia Estructural</h3>
              <p className="text-slate-600">Soporte estable que no cede ante la gravedad, diseñado para durar en el mundo real.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 hover:shadow-md transition-shadow">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <ShieldCheck className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Protección Reactiva</h3>
              <p className="text-slate-600">Tecnologías que se activan ante el impacto, protegiendo tus articulaciones al instante.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Systems Preview */}
      <div className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Cuatro Ecosistemas de Movimiento</h2>
              <p className="text-slate-400">Organizados por impacto, carga y espacio interno.</p>
            </div>
            <button onClick={() => handleNav('systems')} className="hidden md:flex text-emerald-400 font-bold items-center hover:text-emerald-300">
              Ver todos <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {systemsData.map((sys) => (
              <div
                key={sys.id}
                onClick={() => { handleNav('systems'); setSelectedSystem(sys); }}
                className="group cursor-pointer bg-slate-800 rounded-xl overflow-hidden hover:ring-2 hover:ring-emerald-500 transition-all"
              >
                <div className={`h-2 w-full ${sys.color}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{sys.name}</h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">{sys.tagline}</p>
                  <p className="text-sm text-slate-300 mb-6 line-clamp-3">{sys.shortDesc}</p>
                  <span className="text-xs font-bold text-emerald-400 flex items-center group-hover:translate-x-1 transition-transform">
                    Explorar <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const SystemsView = () => (
    <div className="pt-12 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!selectedSystem ? (
          <>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Elige tu Sistema de Biomimetismo</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                No vendemos plantillas genéricas. Ofrecemos arquitecturas biomecánicas especializadas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {systemsData.map((sys) => (
                <div
                  key={sys.id}
                  onClick={() => setSelectedSystem(sys)}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden cursor-pointer group border border-slate-100"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className={`absolute inset-0 ${sys.color} opacity-90 mix-blend-multiply`}></div>
                    <img src={sys.image} alt={sys.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-xs font-bold tracking-widest uppercase mb-1 opacity-80">{sys.ref}</p>
                      <h3 className="text-3xl font-bold">{sys.name}</h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-lg text-slate-700 font-medium mb-4">{sys.tagline}</p>
                    <p className="text-slate-500 mb-6">{sys.shortDesc}</p>
                    <div className="flex items-center space-x-2 mb-6">
                      {sys.technologies.map(techId => {
                        const tech = techData.find(t => t.id === techId);
                        return tech ? (
                          <div key={techId} className="bg-slate-100 p-1.5 rounded-md text-slate-600" title={tech.name}>
                            {React.cloneElement(tech.icon, { className: "w-4 h-4" })}
                          </div>
                        ) : null;
                      })}
                    </div>
                    <span className={`inline-flex items-center font-bold ${sys.textAccent}`}>
                      Ver especificaciones completas <ArrowRight className="ml-2 w-5 h-5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="animate-fade-in">
            <button
              onClick={() => setSelectedSystem(null)}
              className="mb-8 flex items-center text-slate-500 hover:text-slate-800 transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5 mr-2" /> Volver a Sistemas
            </button>

            {/* System Detail Hero */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
              <div className="grid md:grid-cols-2">
                <div className={`relative min-h-[400px] ${selectedSystem.color} p-12 flex flex-col justify-center text-white`}>
                  <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-xs font-bold tracking-wide mb-6 w-max backdrop-blur-sm">
                    {selectedSystem.ref}
                  </span>
                  <h1 className="text-5xl font-extrabold mb-4">{selectedSystem.name}</h1>
                  <p className="text-2xl font-light opacity-90 mb-8">{selectedSystem.tagline}</p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-white/20 p-2 rounded-lg mr-4 backdrop-blur-sm">
                        <Layers className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase opacity-70">Perfil Bio-mimético</p>
                        <p className="text-sm font-medium leading-snug">{selectedSystem.bioMimicry}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-12 flex flex-col justify-center bg-white">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Ingeniería del Sistema</h3>
                  <p className="text-slate-600 mb-8 text-lg leading-relaxed">{selectedSystem.fullDescription}</p>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-slate-400" /> Escenario
                      </h4>
                      <p className="text-sm text-slate-600">{selectedSystem.scenario}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                        <Activity className="w-4 h-4 mr-2 text-slate-400" /> Sensación
                      </h4>
                      <p className="text-sm text-slate-600">{selectedSystem.sensation}</p>
                    </div>
                  </div>

                  <div className="bg-slate-900 text-slate-300 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-2">
                      <span className="font-bold text-white flex items-center"><Cpu className="w-4 h-4 mr-2" /> AI-READY SUMMARY</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span>Impacto:</span> <span className="text-white font-medium">{selectedSystem.aiReadySummary.impact}</span></div>
                      <div className="flex justify-between"><span>Carga:</span> <span className="text-white font-medium">{selectedSystem.aiReadySummary.load}</span></div>
                      <div className="flex justify-between"><span>Espacio:</span> <span className="text-white font-medium">{selectedSystem.aiReadySummary.space}</span></div>
                      <div className="flex justify-between"><span>Tech Clave:</span> <span className="text-emerald-400 font-medium">{selectedSystem.aiReadySummary.tech}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Specs */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {selectedSystem.techSpecs.map((spec, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-emerald-500">
                  <h4 className="font-bold text-slate-900 text-lg mb-2">{spec.name}</h4>
                  <p className="text-slate-600">{spec.role}</p>
                </div>
              ))}
            </div>

            {/* Profile & Ideal For */}
            <div className="bg-slate-100 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Perfil de Usuario</h3>
                  <p className="text-slate-700 mb-6">{selectedSystem.userProfile}</p>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Calzado Recomendado</h3>
                  <p className="text-slate-700">{selectedSystem.bestFootwear}</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    <Check className="w-6 h-6 text-emerald-500 mr-2" /> ¿Es para ti?
                  </h3>
                  <p className="text-lg text-slate-700 italic">"{selectedSystem.idealIf}"</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const TechnologyView = () => (
    <div className="animate-fade-in bg-white pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Ciencia de Materiales</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-6">Ingeniería Pura Inspirada en la Vida</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Para Rana Walk®, la naturaleza es el laboratorio de I+D más avanzado. No diseñamos accesorios;
            desarrollamos plataformas que emulan soluciones biológicas probadas por millones de años.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {techData.map((tech) => (
            <div key={tech.id} className="flex gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
              <div className="flex-shrink-0 mt-1">
                <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center">
                  {tech.icon}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">{tech.name}</h3>
                <p className="text-sm font-bold text-emerald-600 uppercase tracking-wide mb-3">{tech.claim}</p>
                <p className="text-slate-600 leading-relaxed">{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pillars of Science Section */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-16 overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center">Los Pilares de Nuestra Ciencia</h2>

            <div className="space-y-12">
              <div className="md:flex gap-8 items-start border-b border-slate-700 pb-12">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-emerald-400">Resiliencia Estructural</h3>
                  <p className="text-sm text-slate-400">vs. Suavidad Efímera</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-slate-300 mb-4">Muchas marcas usan espumas que colapsan en días. Nuestra prioridad es la integridad mecánica.</p>
                  <p className="text-sm text-slate-400 bg-slate-800 p-4 rounded-lg border-l-2 border-emerald-500">
                    <span className="font-bold text-white">Dato Técnico:</span> Utilizamos LeapCore™, un chasis que mantiene su altura tras 12 horas de carga continua, emulando la consistencia ósea.
                  </p>
                </div>
              </div>

              <div className="md:flex gap-8 items-start border-b border-slate-700 pb-12">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-emerald-400">Protección Reactiva</h3>
                  <p className="text-sm text-slate-400">No Pasiva</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-slate-300 mb-4">El impacto es dinámico. Integramos PORON® XRD® que se endurece instantáneamente.</p>
                  <p className="text-sm text-slate-400 bg-slate-800 p-4 rounded-lg border-l-2 border-emerald-500">
                    <span className="font-bold text-white">Enfoque Bio-mimético:</span> Emulamos los cojinetes digitales de la rana: flexibles en movimiento, escudos absolutos ante presión.
                  </p>
                </div>
              </div>

              <div className="md:flex gap-8 items-start">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-emerald-400">Homeostasis Térmica</h3>
                  <p className="text-sm text-slate-400">Gestión de Clima</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-slate-300 mb-4">Gestionamos el sudor, no lo bloqueamos. NanoSpread™ actúa como un epitelio técnico.</p>
                  <p className="text-sm text-slate-400 bg-slate-800 p-4 rounded-lg border-l-2 border-emerald-500">
                    <span className="font-bold text-white">Ingeniería:</span> Membrana Micro-Capilar que dispersa la humedad para evaporación acelerada, manteniendo el pie fresco.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const DistributorsView = () => (
    <div className="animate-fade-in bg-slate-50 pt-16 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Partnership Rana Walk®</h1>
        <p className="text-xl text-slate-600">
          Escala tu negocio con el estándar de bio-ingeniería en bienestar podal.
          Buscamos socios estratégicos para distribución B2B y Retail Especializado.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-emerald-500">
          <Handshake className="w-10 h-10 text-emerald-600 mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-3">Portafolio Diferenciado</h3>
          <p className="text-slate-600 text-sm">Organizamos la oferta por sistemas (GOLIATH, VELOX...), facilitando la segmentación del mercado y evitando la commoditización.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-blue-500">
          <Award className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-3">Formación Técnica</h3>
          <p className="text-slate-600 text-sm">Capacitamos a tu equipo con la ciencia del Life Sciences Hub. Vende con argumentos de ingeniería defendibles, no solo por precio.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-slate-500">
          <RefreshCw className="w-10 h-10 text-slate-600 mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-3">Soporte B2B</h3>
          <p className="text-slate-600 text-sm">Kits de demostración táctil (ThinBoom™, PORON®), material educativo sobre fatiga y canal directo para licitaciones.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Solicitar Dossier de Distribuidor</h2>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Empresa</label>
              <input type="text" className="w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-3 bg-slate-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Contacto</label>
              <input type="text" className="w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-3 bg-slate-50" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Corporativo</label>
            <input type="email" className="w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-3 bg-slate-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Tipo de Distribución</label>
            <select className="w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-3 bg-slate-50">
              <option>Seguridad Industrial (EPP)</option>
              <option>Retail Especializado / Ortopedia</option>
              <option>Farmacias / Salud</option>
              <option>Venta Corporativa</option>
            </select>
          </div>
          <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors">
            Contactar Equipo Comercial
          </button>
        </form>
      </div>
    </div>
  );

  const AIView = () => (
    <div className="animate-fade-in bg-slate-900 min-h-screen pt-12 pb-24 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-500/20 rounded-full mb-6">
            <Sparkles className="w-8 h-8 text-emerald-400" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Consultor Inteligente Rana Walk®</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ingeniería personalizada impulsada por IA. Describe tu jornada, tu peso y tu calzado.
            Nuestro algoritmo analizará las variables de carga e impacto.
          </p>
        </div>

        <div className="bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
          <div className="p-6 md:p-8">
            {/* Chat History / Response Area */}
            <div className="mb-8 min-h-[200px] bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
              {!geminiResponse && !isLoading && (
                <div className="text-center text-slate-500 mt-8">
                  <p className="mb-2">Prueba preguntando:</p>
                  <p className="text-sm italic">"Trabajo 12 horas en una planta de acero y uso botas pesadas..."</p>
                  <p className="text-sm italic mt-2">"Uso zapatos de vestir ajustados y camino mucho en la oficina..."</p>
                </div>
              )}

              {isLoading && (
                <div className="flex items-center justify-center h-full space-x-3 text-emerald-400">
                  <RefreshCw className="w-6 h-6 animate-spin" />
                  <span>Analizando variables biomecánicas...</span>
                </div>
              )}

              {geminiResponse && (
                <div className="prose prose-invert max-w-none">
                  <div className="whitespace-pre-wrap leading-relaxed">{geminiResponse}</div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleGeminiConsult} className="relative">
              <input
                type="text"
                value={geminiQuery}
                onChange={(e) => setGeminiQuery(e.target.value)}
                placeholder="Describe tu trabajo, calzado y sensaciones..."
                className="w-full bg-slate-900 text-white border border-slate-600 rounded-xl py-4 pl-6 pr-16 focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-slate-500"
              />
              <button
                type="submit"
                disabled={isLoading || !geminiQuery.trim()}
                className="absolute right-2 top-2 bottom-2 bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </form>
            <p className="text-xs text-slate-500 mt-4 text-center">
              Powered by Google Gemini™ • Recomendaciones orientativas basadas en datos del usuario.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Header />
      <main>
        {activeSection === 'home' && <HomeView />}
        {activeSection === 'systems' && <SystemsView />}
        {activeSection === 'technology' && <TechnologyView />}
        {activeSection === 'distributors' && <DistributorsView />}
        {activeSection === 'ai' && <AIView />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
