import React, { useState, useEffect, useMemo } from 'react';
import {
  Menu, X, ChevronRight, Shield, Activity, Zap, Droplets,
  ShoppingCart, ArrowRight, Check, Mail, MapPin, Linkedin,
  Instagram, Facebook, ArrowLeft, Info, HelpCircle, FileText,
  Star, Users, Globe, Award, ShieldCheck, Beaker, Trash,
  Sparkles, RefreshCw, AlertCircle
} from 'lucide-react';

/**
 * RANA WALK® - Ecosistema de Biomimetismo Podal
 * Versión: ESTRUCTURA INTEGRAL FINAL (Sistemas Biomecánicos)
 */
// Gemini API Integration
const callGemini = async (userPrompt) => {
  const apiKey = "AIzaSyBmO6qTow7RVhNv9QTgQM0PkdEoPTV_tf0"; // Runtime provided key
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

  const systemPrompt = `
      Eres el Consultor Biomecánico Experto de Rana Walk®. 
      Tu misión es recomendar uno de nuestros 4 sistemas biomecánicos basados en la necesidad del usuario.
      
      Sistemas disponibles:
      1. GOLIATH: Enfocado en alta carga e impacto repetitivo. Ideal para botas industriales y trabajo pesado.
      2. VELOX: Perfil mínimo para calzado de vestir o ajustado. Prioriza dinamismo y retorno de energía.
      3. ORBIS: Confort diario y equilibrio postural para caminatas urbanas.
      4. LEOPARD: Estabilidad adaptable con perfiles de arco específicos para terrenos irregulares.

      Instrucciones técnicas:
      - Usa un tono de Biomimetismo profesional.
      - Habla de "carga", "impacto" y "espacio interno".
      - NO uses lenguaje médico-clínico (evita "ortopédico", "clínica", "paciente").
      - Responde siempre en español.
    `;

  const payload = {
    contents: [{
      parts: [{ text: `System Instruction: ${systemPrompt}\n\nUser Query: ${userPrompt}` }]
    }]
  };

  const fetchWithRetry = async (retries = 5, delay = 1000) => {
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
      if (retries > 0) {
        await new Promise(resolve => setTimeout(resolve, delay));
        return fetchWithRetry(retries - 1, delay * 2);
      }
      throw err;
    }
  };

  setIsLoading(true);
  setError(null);
  try {
    const result = await fetchWithRetry();
    setResponse(result);
  } catch (err) {
    setError("No se pudo conectar con el consultor. Inténtalo de nuevo.");
  } finally {
    setIsLoading(false);
  }
};

// --- DATA: SISTEMAS BIOMECÁNICOS ---
const systemsData = [
  {
    id: 'goliath',
    name: 'GOLIATH',
    ref: 'HIGH-LOAD-SYS',
    tagline: 'Soporte estructural para alta carga',
    shortDesc: 'Diseñado para escenarios donde el cuerpo está sometido a altas cargas, impacto repetitivo y jornadas prolongadas.',
    color: 'bg-slate-800',
    accent: '#1e293b',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    fullDescription: 'GOLIATH es el sistema biomecánico diseñado para escenarios donde el cuerpo está sometido a altas cargas, impacto repetitivo y jornadas prolongadas. Su prioridad es la estabilidad estructural sostenida.',
    whatIs: 'Un sistema biomecánico orientado a trabajo exigente y actividades de alta demanda física. Mantiene soporte y forma bajo carga prolongada, evitando el colapso común.',
    useCases: ['Jornadas laborales prolongadas de pie', 'Trabajo en superficies duras', 'Actividades con impacto repetitivo'],
    userProfile: 'Personas expuestas a carga elevada que necesitan soporte consistente durante todo el día.',
    technologies: ['leapcore', 'poron', 'nanospread'],
    howItWorks: [
      { tech: 'LeapCore™', func: 'Soporte estructural y resistencia al colapso.' },
      { tech: 'PORON® XRD®', func: 'Absorción de impacto en zonas críticas.' },
      { tech: 'NanoSpread™', func: 'Gestión de humedad en uso intensivo.' }
    ],
    // Enhanced Data from PDF
    bioMimicry: 'Emula la estructura ósea de grandes mamíferos terrestres, distribuyendo toneladas de presión sin colapsar.',
    scenario: 'Alta carga, impacto repetitivo y jornadas intensivas (+12h) en superficies duras.',
    sensation: 'Soporte firme, sólido y de máxima protección. No es una almohada, es un cimiento.',
    technicalSpecs: 'Chasis LeapCore™ de alta densidad + Protección de impacto certificado PORON® XRD®.',
    aiReadySummary: { impact: '10/10 (PORON® XRD®)', load: '10/10 (LeapCore™)', space: 'Gran Volumen', tech: 'LeapCore™ + PORON® XRD®' },
    bestFootwear: 'Botas de trabajo, calzado industrial, táctico o de seguridad.',
    whatIsNot: ['No es un sistema blando de amortiguación', 'No es una solución médica', 'No es para calzado ultra-slim'],
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
    image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&q=80&w=800',
    fullDescription: 'VELOX es el sistema biomecánico orientado a performance funcional en perfil mínimo. Permite integrarse en calzado de bajo volumen sin sacrificar estabilidad.',
    whatIs: 'La opción adecuada cuando otras soluciones fallan por grosor excesivo. Arquitectura de alto desempeño en perfil mínimo.',
    useCases: ['Uso diario en calzado de perfil bajo', 'Jornadas activas con desplazamientos rápidos', 'Zapatos de vestir o sneakers ajustados'],
    userProfile: 'Usuarios que priorizan respuesta, eficiencia y mantener el calce original de su calzado.',
    technologies: ['thinboom', 'nanospread'],
    howItWorks: [
      { tech: 'ThinBoom™', func: 'Retorno de energía explosivo en espesor mínimo.' },
      { tech: 'NanoSpread™', func: 'Confort térmico y frescura.' }
    ],
    // Enhanced Data from PDF
    bioMimicry: 'Emula la elasticidad de un tendón reactivo y la flexibilidad absoluta para movimientos rápidos.',
    scenario: 'Calzado de espacio reducido, jornadas activas de alta movilidad y cambios de ritmo.',
    sensation: 'Reactiva, firme, fresca y totalmente flexible. "Rebote" técnico.',
    technicalSpecs: 'Cuerpo 100% ThinBoom™ (E-TPU supercrítico) + NanoSpread™.',
    aiReadySummary: { impact: '6/10', load: '6/10', space: '10/10 (Perfil Mínimo)', tech: '100% ThinBoom™' },
    bestFootwear: 'Zapatos de vestir, sneakers de perfil bajo, calzado casual ajustado.',
    whatIsNot: ['No es para alta carga pesada', 'No es amortiguación blanda', 'No es para botas voluminosas'],
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
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800',
    fullDescription: 'ORBIS es el sistema biomecánico diseñado para uso cotidiano prolongado, manteniendo equilibrio postural y estabilidad funcional.',
    whatIs: 'Un sistema orientado a confort diario con soporte equilibrado. Ayuda a mantener una postura consistente sin sobrecorregir.',
    useCases: ['Uso diario prolongado', 'Caminatas urbanas', 'Actividades de baja a media exigencia'],
    userProfile: 'Personas que buscan confort real que dure todo el día, no solo una suavidad inicial.',
    technologies: ['leapcore', 'shocksphere', 'nanospread'],
    howItWorks: [
      { tech: 'LeapCore™', func: 'Soporte equilibrado que acompaña el arco.' },
      { tech: 'ShockSphere™', func: 'Suaviza irregularidades del terreno.' },
      { tech: 'NanoSpread™', func: 'Mantiene la planta seca y fresca.' }
    ],
    // Enhanced Data from PDF
    bioMimicry: 'Emula la homeostasis y el balance postural constante. Autorregulación del equilibrio.',
    scenario: 'Confort diario prolongado, caminatas frecuentes en ciudad y oficina.',
    sensation: 'Natural, equilibrada y de confort progresivo. Estabilidad sin rigidez.',
    technicalSpecs: 'Combina LeapCore™ de densidad media con ShockSphere™.',
    aiReadySummary: { impact: '7/10 (Equilibrado)', load: '8/10 (Soporte Densidad Media)', space: '9/10 (Estándar)', tech: 'LeapCore™ + ShockSphere™' },
    bestFootwear: 'Calzado casual, urbano, sneakers estándar.',
    whatIsNot: ['No es para alto impacto deportivo', 'No es corrección ortopédica severa', 'No es para carga industrial extrema'],
    idealIf: 'Caminas mucho en la ciudad y quieres sentir estabilidad sin rigidez.'
  },
  {
    id: 'leopard',
    name: 'LEOPARD',
    ref: 'ADAPT-STAB-SYS',
    tagline: 'Estabilidad adaptable a entornos variables',
    shortDesc: 'Tres perfiles de altura para responder a la anatomía del usuario y la variabilidad del terreno.',
    color: 'bg-amber-600',
    accent: '#d97706',
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800',
    fullDescription: 'LEOPARD es el sistema biomecánico diseñado para estabilidad adaptable. Pensado para donde el terreno y la pisada cambian constantemente.',
    whatIs: 'Un sistema de control dinámico que ofrece adaptabilidad para ajustarse al arco real del usuario.',
    useCases: ['Entornos y superficies variables', 'Caminatas en terrenos irregulares', 'Necesidad de control postural'],
    userProfile: 'Usuarios que requieren mayor control del apoyo adaptado a su tipo de arco específico.',
    technologies: ['leapcore', 'shocksphere', 'nanospread'],
    howItWorks: [
      { tech: 'LeapCore™ Adaptable', func: 'Mantiene control bajo carga variable.' },
      { tech: 'ShockSphere™', func: 'Absorción focalizada en talón y antepié.' },
      { tech: 'NanoSpread™', func: 'Gestión de humedad en exteriores.' }
    ],
    // Enhanced Data from PDF
    bioMimicry: 'Emula la capacidad de los felinos para ajustar su pisada y mantener estabilidad en terrenos variables.',
    scenario: 'Control del apoyo y estabilidad dinámica en entornos irregulares o mixtos.',
    sensation: 'Estable, robusta y adaptable al arco del usuario.',
    technicalSpecs: 'LeapCore™ de Geometría Adaptable + Absorción ShockSphere™.',
    aiReadySummary: { impact: '9/10 (ShockSphere™)', load: '9/10 (Resiliencia Adaptable)', space: '8/10 (Outdoor/Urbano Robusto)', tech: 'LeapCore™ Adaptable' },
    bestFootwear: 'Calzado outdoor ligero, botas de uso mixto, tekkies.',
    whatIsNot: ['No es una plantilla rígida fija', 'No es ultradelgada', 'No es para zapatos de gala'],
    idealIf: 'Te mueves en superficies distintas y necesitas que tu sistema se adapte a tu pie.'
  }
];

// --- DATA: TECNOLOGÍAS ---
const techData = [
  {
    id: 'leapcore',
    name: 'LeapCore™',
    claim: 'Chasis estructural de soporte estable',
    icon: <Activity />,
    description: 'LeapCore™ es la columna vertebral de cada sistema Rana Walk®. Un chasis de poliuretano de ingeniería diseñado para resistir el colapso.',
    // New fields
    bioFunction: 'Emula la consistencia estructural ósea.',
    engineering: 'Chasis de Poliuretano de ingeniería (PU) de alta resiliencia.',
    keyAttribute: 'Soporte estable que resiste el colapso funcional durante jornadas intensivas.',
    comparison: [
      { aspect: 'Soporte estructural', generic: 'Débil / Variable', rana: 'Alto y consistente' },
      { aspect: 'Resistencia bajo carga', generic: 'Baja (colapsa rápido)', rana: 'Alta (mantiene forma)' },
      { aspect: 'Confort funcional', generic: 'Efímero', rana: 'Sostenido durante horas' }
    ]
  },
  {
    id: 'thinboom',
    name: 'ThinBoom™',
    claim: 'Alto performance en espesor mínimo',
    icon: <Zap />,
    description: 'Plataforma reactiva de E-TPU que almacena energía y la devuelve en el impulso, todo en un perfil milimétrico.',
    // New fields
    bioFunction: 'Emula la eficiencia elástica de los tendones.',
    engineering: 'Elastómero Termoplástico de Células Expandidas (ETCE) de perfil ultradelgado.',
    keyAttribute: 'Dinamismo reactivo que mantiene el calce original del calzado.',
    comparison: [
      { aspect: 'Perfil / Grosor', generic: 'Delgado pero pasivo', rana: 'Delgadísimo y reactivo' },
      { aspect: 'Retorno de energía', generic: 'Nulo', rana: 'Alto (E-TPU)' },
      { aspect: 'Alteración del calce', generic: 'Frecuente', rana: 'Mínima' }
    ]
  },
  {
    id: 'nanospread',
    name: 'NanoSpread™',
    claim: 'Gestión inteligente de humedad',
    icon: <Droplets />,
    description: 'Textil de micro-canales que dispersa el sudor sobre una superficie mayor para acelerar la evaporación.',
    // New fields
    bioFunction: 'Emula la capilaridad de los epitelios técnicos y la piel de reptiles.',
    engineering: 'Membrana Micro-Capilar de Gestión de Humedad.',
    keyAttribute: 'Homeostasis térmica y frescura técnica en uso intensivo.',
    comparison: [
      { aspect: 'Distribución de sudor', generic: 'Localizada (humedad)', rana: 'Dispersa (evaporación)' },
      { aspect: 'Confort térmico', generic: 'Variable', rana: 'Más estable' },
      { aspect: 'Durabilidad funcional', generic: 'Limitada', rana: 'Prolongada' }
    ]
  },
  {
    id: 'shocksphere',
    name: 'ShockSphere™',
    claim: 'Absorción focalizada de impacto',
    icon: <Shield />,
    description: 'Geometrías esféricas que disipan energía en puntos críticos sin generar la inestabilidad de las espumas blandas.',
    // New fields
    bioFunction: 'Emula las almohadillas de estabilidad felina.',
    engineering: 'Poliuretano de Disipación de Energía y Geometría Esférica.',
    keyAttribute: 'Adaptación dinámica al terreno y control del centro de gravedad.',
    comparison: [
      { aspect: 'Enfoque', generic: 'Suaviza todo (inestable)', rana: 'Absorbe impacto focalizado' },
      { aspect: 'Estabilidad', generic: 'Baja', rana: 'Se mantiene íntegra' },
      { aspect: 'Respuesta', generic: 'Lenta', rana: 'Inmediata' }
    ]
  },
  {
    id: 'poron',
    name: 'PORON® XRD®',
    claim: 'Protección extrema (USA Tech)',
    icon: <ShieldCheck />,
    description: 'Material viscoelástico que permanece flexible al caminar pero se endurece al impacto para disipar energía.',
    // New fields
    bioFunction: 'Emula los cojinetes de absorción reactiva.',
    engineering: 'Uretano de Celda Abierta para Mitigación de Impactos Extremos (Rogers Corp).',
    keyAttribute: 'Protección reactiva localizada en zonas de aterrizaje crítico.',
    comparison: [
      { aspect: 'Comportamiento', generic: 'Siempre blando', rana: 'Reactivo al impacto' },
      { aspect: 'Protección', generic: 'Básica', rana: 'Extrema (Uso Industrial)' },
      { aspect: 'Recuperación', generic: 'Lenta', rana: 'Instantánea' }
    ]
  }
];

// --- COMPONENTES AUXILIARES ---

const Navbar = ({ currentView, navigate, cartCount, onOpenCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { id: 'home', label: 'Inicio' },
    { id: 'systems', label: 'Sistemas Biomecánicos' },
    { id: 'tech', label: 'Tecnologías' },
    { id: 'distributors', label: 'Distribuidores' },
    { id: 'support', label: 'Ayuda' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('home')}>
          <img src="https://ranawalk.com/images/rana-walk-hv2.png" alt="Rana Walk" className="h-12 w-auto" />

        </div>

        <div className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => { navigate(l.id); setIsOpen(false); }}
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${currentView === l.id ? 'text-[#003B5C]' : 'text-slate-400 hover:text-[#003B5C]'}`}
            >
              {l.label}
            </button>
          ))}
          <button onClick={() => { navigate('consultor'); setIsOpen(false) }} className="text-sm font-bold uppercase tracking-widest text-emerald-600 flex items-center gap-2 underline decoration-2 decoration-emerald-200 hover:text-emerald-700 hover:decoration-emerald-500 transition-all">
            Consultor Inteligente <Sparkles className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer" onClick={onOpenCart}>
            <ShoppingCart className="w-6 h-6 text-[#003B5C]" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 p-6 flex flex-col gap-4 animate-fadeIn">
          {links.map(l => (
            <button key={l.id} onClick={() => { navigate(l.id); setIsOpen(false); }} className="text-left font-bold text-slate-600 py-2">{l.label}</button>
          ))}
          <button onClick={() => { navigate('consultor'); setIsOpen(false) }} className="text-left font-bold text-emerald-600 py-2 flex items-center gap-2">
            Consultor Inteligente <Sparkles className="w-4 h-4" />
          </button>
        </div>
      )}
    </nav>
  );
};

const SectionHeader = ({ sub, title, center = true, dark = false }) => (
  <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
    <span className={`text-sm font-black uppercase tracking-[0.2em] ${dark ? 'text-[#4FD1C5]' : 'text-[#003B5C]'} mb-3 block`}>{sub}</span>
    <h2 className={`text-3xl md:text-5xl font-bold ${dark ? 'text-white' : 'text-slate-900'} leading-tight`}>{title}</h2>
    <div className={`h-1.5 w-20 bg-[#4FD1C5] mt-6 ${center ? 'mx-auto' : ''}`}></div>
  </div>
);

// --- DATA: DATA DE TALLAS ---
const sizeGroups = [
  { id: 'S1', BRA: ['33', '34', '35'], EU: ['35', '36', '37'], US_Men: ['4', '4.5', '5'], US_Women: ['5.5', '6', '6.5'], MEX: ['23', '24'] },
  { id: 'S2', BRA: ['36', '37', '38'], EU: ['38', '39', '40'], US_Men: ['5.5', '6', '6.5'], US_Women: ['7', '7.5', '8'], MEX: ['24', '25', '26'] },
  { id: 'S3', BRA: ['39', '40'], EU: ['41', '42'], US_Men: ['7', '7.5', '8'], US_Women: ['8.5', '9', '9.5'], MEX: ['26', '27'] },
  { id: 'S4', BRA: ['41', '42'], EU: ['43', '44'], US_Men: ['8.5', '9'], US_Women: ['10', '10.5'], MEX: ['28', '29'] },
  { id: 'S5', BRA: ['43', '44'], EU: ['45', '46'], US_Men: ['9.5', '10', '10.5'], US_Women: ['11', '11.5', '12'], MEX: ['29', '30'] },
  { id: 'S6', BRA: ['45', '46', '47'], EU: ['47', '48', '49'], US_Men: ['11', '12', '13'], US_Women: ['12.5', '13.5', '14.5'], MEX: ['31', '32'] }
];

// --- MODAL: AGREGAR AL CARRITO ---
const AddToCartModal = ({ isOpen, onClose, onConfirm, system }) => {
  const [unit, setUnit] = useState('US');
  const [gender, setGender] = useState('Masculino');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  // Generación de tallas basada en la selección (Simplificada para el ejemplo)
  const getAvailableSizes = (group) => {
    if (unit === 'US') return gender === 'Masculino' ? group.US_Men : group.US_Women;
    if (unit === 'EU') return group.EU;
    if (unit === 'BRA') return group.BRA;
    if (unit === 'MEX') return group.MEX;
    return [];
  };

  const handleConfirm = () => {
    if (!size) {
      alert('Por favor selecciona una talla');
      return;
    }
    onConfirm({
      systemId: system.id,
      systemName: system.name,
      image: system.image,
      price: 59.90, // Precio hardcodeado por ahora, idealmente vendría del sistema
      unit,
      gender,
      size,
      quantity
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-fadeIn">
        <div className="bg-[#003B5C] p-6 text-white flex justify-between items-center">
          <h3 className="font-bold text-lg">Configura tu {system.name}</h3>
          <button onClick={onClose}><X className="w-5 h-5 hover:text-[#4FD1C5]" /></button>
        </div>

        <div className="p-8 space-y-6">
          <div>
            <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Unidad de Medida</label>
            <div className="grid grid-cols-4 gap-2">
              {['US', 'BRA', 'EU', 'MEX'].map(u => (
                <button
                  key={u}
                  onClick={() => { setUnit(u); setSize(''); }}
                  className={`py-2 rounded-lg text-sm font-bold border ${unit === u ? 'bg-[#003B5C] text-white border-[#003B5C]' : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-[#003B5C]'}`}
                >
                  {u}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Género</label>
            <div className="grid grid-cols-2 gap-2">
              {['Masculino', 'Femenino'].map(g => (
                <button
                  key={g}
                  onClick={() => { setGender(g); setSize(''); }}
                  className={`py-2 rounded-lg text-sm font-bold border ${gender === g ? 'bg-[#003B5C] text-white border-[#003B5C]' : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-[#003B5C]'}`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Talla ({unit})</label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-bold text-[#003B5C] focus:outline-none focus:border-[#4FD1C5]"
            >
              <option value="">Selecciona tu talla</option>
              {sizeGroups.map(group => {
                const sizes = getAvailableSizes(group);
                return (
                  <option key={group.id} value={group.id}>
                    {group.id} ({sizes.join(', ')})
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Cantidad</label>
            <div className="flex items-center gap-4">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-[#003B5C] font-bold hover:bg-slate-200">-</button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="w-20 text-center font-bold text-xl text-[#003B5C] bg-transparent border-b-2 border-slate-200 focus:border-[#4FD1C5] outline-none"
              />
              <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-[#003B5C] font-bold hover:bg-slate-200">+</button>
            </div>
          </div>

          <div className="pt-4 flex gap-3">
            <button onClick={onClose} className="flex-1 py-3 rounded-xl border-2 border-slate-200 font-bold text-slate-400 hover:border-slate-300 hover:text-slate-600">Cancelar</button>
            <button onClick={handleConfirm} className="flex-[2] py-3 rounded-xl bg-[#4FD1C5] text-[#003B5C] font-black uppercase tracking-widest hover:scale-[1.02] transition-transform">
              ACEPTAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- SIDEBAR: CARRITO ---
const CartSidebar = ({ isOpen, onClose, cartItems, onRemoveItem }) => {
  if (!isOpen) return null;

  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 z-[200] flex justify-end">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl p-6 flex flex-col animate-slideInRight">

        <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-6 h-6 text-[#4FD1C5]" />
            <h2 className="text-2xl font-black text-[#003B5C]">Tu Carrito</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors"><X className="w-6 h-6 text-slate-400" /></button>
        </div>

        <div className="flex-grow overflow-y-auto space-y-6 pr-2">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 opacity-60">
              <ShoppingCart className="w-16 h-16 mb-4" />
              <p>Tu carrito está vacío.</p>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50 relative group hover:border-[#4FD1C5]/50 transition-colors">
                <div className="w-20 h-20 bg-white rounded-xl overflow-hidden shrink-0 border border-slate-200">
                  {item.image && <img src={item.image} alt={item.systemName} className="w-full h-full object-cover" />}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-black text-[#003B5C]">{item.systemName}</h4>
                    <button onClick={() => onRemoveItem(index)} className="text-slate-300 hover:text-red-500 transition-colors"><Trash className="w-4 h-4" /></button>
                  </div>
                  <p className="text-xs font-bold text-[#4FD1C5] mb-2 uppercase tracking-wider">{item.gender} • {item.unit} Rana {item.size}</p>
                  <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-slate-100">
                    <span className="text-xs font-bold text-slate-400">Cant: {item.quantity}</span>
                    <span className="text-sm font-black text-[#003B5C]">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="pt-6 border-t border-slate-100 mt-4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-slate-500 font-bold">Total</span>
              <span className="text-3xl font-black text-[#003B5C]">${total.toFixed(2)}</span>
            </div>
            <button className="w-full py-4 bg-[#003B5C] text-white rounded-xl font-black uppercase tracking-widest hover:bg-slate-800 transition-colors shadow-lg shadow-[#003B5C]/20">
              Pagar Ahora
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const TrustBar = () => (
  <div className="bg-[#1e293b] py-8 border-b border-white/5">
    <div className="container mx-auto px-6">
      <h3 className="text-center text-xs font-black uppercase tracking-[0.2em] text-[#4FD1C5] mb-6 opacity-80">Respaldado por la Ciencia de Materiales y la Ingeniería Global</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-white text-opacity-60 grayscale hover:grayscale-0 hover:text-opacity-100 transition-all duration-500">
        <div className="text-center">
          <span className="font-bold block text-white text-sm">PORON® XRD®</span>
          <span className="text-[10px] uppercase">Protección Certificada</span>
        </div>
        <div className="text-center">
          <span className="font-bold block text-white text-sm">Life Sciences Hub</span>
          <span className="text-[10px] uppercase">Validación Costa Rica</span>
        </div>
        <div className="text-center">
          <span className="font-bold block text-white text-sm">LeapCore™ Tech</span>
          <span className="text-[10px] uppercase">Resiliencia Estructural</span>
        </div>
        <div className="text-center">
          <span className="font-bold block text-white text-sm">Esencial Costa Rica</span>
          <span className="text-[10px] uppercase">Excelencia País</span>
        </div>
      </div>
    </div>
  </div>
);

const Footer = ({ navigate }) => (
  <footer className="bg-[#003B5C] text-white pt-20 pb-10">
    <div className="container mx-auto px-6 grid md:grid-cols-5 gap-10 border-b border-white/10 pb-16 text-sm"> {/* Expanded to 5 columns */}
      <div className="col-span-1 md:col-span-1">
        <div className="flex items-center gap-2 mb-6">
          <img src="https://ranawalk.com/images/2025/02/06/image-2.png" alt="Rana Walk Logo" className="h-12 w-auto" />
        </div>
        <p className="text-slate-400 text-xs leading-relaxed mb-6">
          Name It, LEAP BEYOND. Ingeniería para el movimiento humano inspirada en la naturaleza.
        </p>
        <div className="flex gap-4">
          <Linkedin className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer text-[#4FD1C5]" />
          <Instagram className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer text-[#4FD1C5]" />
          <Facebook className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer text-[#4FD1C5]" />
        </div>
      </div>

      <div>
        <h4 className="font-bold text-[#4FD1C5] mb-6 uppercase text-[10px] tracking-widest">Ecosistema</h4>
        <ul className="space-y-3 text-slate-300">
          {systemsData.map(s => <li key={s.id} className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('systemDetail', s.id)}>{s.name}</li>)}
          <li className="hover:text-white cursor-pointer transition-colors mt-4 text-[#4FD1C5] font-bold" onClick={() => navigate('consultor')}>Consultor IA</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-[#4FD1C5] mb-6 uppercase text-[10px] tracking-widest">Ingeniería</h4>
        <ul className="space-y-3 text-slate-300">
          {techData.map(t => <li key={t.id} className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('techDetail', t.id)}>{t.name}</li>)}
          <li className="hover:text-white cursor-pointer transition-colors">Ciencia de Materiales</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-[#4FD1C5] mb-6 uppercase text-[10px] tracking-widest">Recursos</h4>
        <ul className="space-y-3 text-slate-300">
          <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('support')}>FAQ Maestro</li>
          <li className="hover:text-white cursor-pointer transition-colors">Guía de Adaptación</li>
          <li className="hover:text-white cursor-pointer transition-colors">Mantenimiento</li>
          <li className="flex items-center gap-2 text-white font-medium mt-4"><Mail className="w-4 h-4" /> support@ranawalk.com</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-[#4FD1C5] mb-6 uppercase text-[10px] tracking-widest">Corporativo</h4>
        <ul className="space-y-3 text-slate-300">
          <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('distributors')}>Partnership B2B</li>
          <li className="hover:text-white cursor-pointer transition-colors">Seguridad Industrial</li>
          <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('legal')}>Portal Legal</li>
        </ul>
      </div>
    </div>

    <div className="container mx-auto px-6 mt-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 gap-4">
      <p>© 2026 Rana Walk®. Todos los derechos reservados.</p>
      <div className="flex gap-6">
        <span className="cursor-pointer hover:text-slate-300" onClick={() => navigate('legal')}>Privacidad</span>
        <span className="cursor-pointer hover:text-slate-300" onClick={() => navigate('legal')}>Términos</span>
        <span className="cursor-pointer hover:text-slate-300" onClick={() => navigate('legal')}>Patentes</span>
      </div>
      <p className="text-center md:text-right max-w-md opacity-60">Aviso Legal: Los sistemas Rana Walk® no son dispositivos médicos. Están destinados al bienestar funcional.</p>
    </div>
  </footer>
);

// --- VISTAS ---

const HomeView = ({ navigate }) => (
  <div className="animate-fadeIn">
    {/* Hero */}
    <section className="relative h-[90vh] flex items-center bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556103330-d5b932f7970a?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1 bg-[#4FD1C5]/20 text-[#4FD1C5] rounded-full text-xs font-black tracking-widest uppercase mb-6 border border-[#4FD1C5]/30">
            Biomimetismo Podal
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
            Sistemas biomecánicos para reducir la fatiga en <span className="text-[#4FD1C5]">jornadas exigentes.</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
            Desarrollamos soluciones inspiradas en la naturaleza y diseñadas en el Life Sciences Hub de las Américas, Costa Rica.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <button onClick={() => navigate('systems')} className="bg-[#4FD1C5] text-[#003B5C] px-8 py-4 rounded-lg font-black uppercase tracking-wider hover:bg-[#3db8ae] transition-all flex items-center justify-center gap-2">
              Explorar Sistemas <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => navigate('support')} className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-black uppercase tracking-wider hover:bg-white/10 transition-all">
              ¿Cuál es mi sistema?
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Propuesta de Valor */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeader sub="Propuesta de Valor" title="Ingeniería aplicada a la base de tu bienestar" center={false} />
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                Muchas soluciones genéricas se sienten cómodas al principio, pero pierden soporte tras pocas semanas de uso. Esto ocurre porque priorizan suavidad inicial, no estabilidad estructural.
              </p>
              <div className="p-8 bg-slate-50 border-l-4 border-[#4FD1C5] rounded-r-xl">
                <p className="font-bold text-[#003B5C] italic">
                  "Rana Walk® integra un ecosistema de materiales inteligentes que trabajan como un sistema integrado, ofreciendo soporte estable y absorción de impacto en uso real."
                </p>
              </div>
              <p>
                No vendemos plantillas; diseñamos arquitecturas que responden a tres variables clave: <strong>Impacto, Carga y Espacio.</strong>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
              <ShieldCheck className="w-12 h-12 text-[#003B5C] mb-4" />
              <h4 className="font-bold mb-2">Defendible</h4>
              <p className="text-sm text-slate-500">Tecnología basada en ciencia de materiales.</p>
            </div>
            <div className="bg-slate-100 p-8 rounded-2xl flex flex-col items-center text-center">
              <Globe className="w-12 h-12 text-[#003B5C] mb-4" />
              <h4 className="font-bold mb-2">Global</h4>
              <p className="text-sm text-slate-500">Estándares de dispositivos médicos.</p>
            </div>
            <div className="bg-slate-100 p-8 rounded-2xl flex flex-col items-center text-center">
              <Users className="w-12 h-12 text-[#003B5C] mb-4" />
              <h4 className="font-bold mb-2">Humano</h4>
              <p className="text-sm text-slate-500">Diseñado para trabajadores reales.</p>
            </div>
            <div className="bg-[#e6fffb] p-8 rounded-2xl border border-[#4FD1C5]/30 flex flex-col items-center text-center">
              <Award className="w-12 h-12 text-[#003B5C] mb-4" />
              <h4 className="font-bold mb-2">Calidad</h4>
              <p className="text-sm text-slate-500">Fabricación de alta precisión.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Preview de Tecnologías */}
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <SectionHeader sub="Innovación" title="Tecnologías que cumplen una función real" dark />
        <div className="grid md:grid-cols-5 gap-4">
          {techData.map(t => (
            <div
              key={t.id}
              onClick={() => navigate('techDetail', t.id)}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group"
            >
              <div className="text-[#4FD1C5] mb-4 group-hover:scale-110 transition-transform">{t.icon}</div>
              <h4 className="font-black text-xl mb-2">{t.name}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{t.claim}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Responsabilidad y Origen */}
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader sub="Nacimiento" title="Diseñado en el Hub de Dispositivos Médicos" />
          <p className="text-lg text-slate-600 mb-10">
            Costa Rica es referente mundial en Ciencias de la Vida. Rana Walk® nace en este ecosistema, heredando procesos de control de calidad y precisión propios de la industria de la salud.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-black text-[#003B5C] mb-2">100%</div>
              <p className="text-sm font-bold text-slate-400 uppercase">Trazabilidad técnica</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-black text-[#003B5C] mb-2">USA</div>
              <p className="text-sm font-bold text-slate-400 uppercase">Tecnologías Aliadas</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-black text-[#003B5C] mb-2">+50</div>
              <p className="text-sm font-bold text-slate-400 uppercase">Pruebas de Resiliencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const SystemsCatalogView = ({ navigate }) => (
  <div className="py-20 animate-fadeIn">
    <div className="container mx-auto px-6">
      <SectionHeader sub="Catálogo" title="Elige tu Sistema Biomecánico" />
      <p className="text-center text-slate-500 max-w-2xl mx-auto mb-16">
        No todas las jornadas son iguales. Clasificamos nuestros sistemas según el nivel de carga, el impacto y el calzado que utilizas.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {systemsData.map(s => (
          <div key={s.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all group flex flex-col border border-slate-100">
            <div className="h-64 overflow-hidden relative">
              <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-[10px] font-black text-[#003B5C] tracking-widest border border-slate-100">{s.ref}</div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-black text-[#003B5C] mb-1">{s.name}</h3>
              <p className="text-[#4FD1C5] font-bold text-xs uppercase tracking-wider mb-4">{s.tagline}</p>
              <p className="text-slate-500 text-sm mb-8 flex-grow leading-relaxed">{s.shortDesc}</p>
              <button
                onClick={() => navigate('systemDetail', s.id)}
                className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-[#003B5C] transition-colors"
              >
                Ver Especificaciones
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SystemDetailView = ({ systemId, navigate, addToCart }) => {
  const system = useMemo(() => systemsData.find(s => s.id === systemId), [systemId]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!system) return null;

  return (
    <>
      <div className="animate-fadeIn">
        <div className="bg-slate-50 py-16 border-b border-slate-100">
          <div className="container mx-auto px-6">
            <button onClick={() => navigate('systems')} className="flex items-center gap-2 text-slate-400 hover:text-[#003B5C] mb-10 font-bold transition-colors">
              <ArrowLeft className="w-4 h-4" /> VOLVER AL CATÁLOGO
            </button>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={system.image} alt={system.name} className="w-full aspect-[4/3] object-cover" />
              </div>
              <div>
                <span className="text-[#4FD1C5] font-black tracking-widest text-sm uppercase">{system.ref}</span>
                <h1 className="text-5xl md:text-7xl font-black text-[#003B5C] mb-4">{system.name}</h1>
                <p className="text-2xl text-slate-500 font-medium mb-8 leading-relaxed">{system.fullDescription}</p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {system.technologies.map(tId => {
                    const t = techData.find(td => td.id === tId);
                    return (
                      <div key={tId} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 text-xs font-bold text-[#003B5C]">
                        <Check className="w-3 h-3 text-[#4FD1C5]" /> {t?.name}
                      </div>
                    );
                  })}
                </div>

                <div className="bg-[#003B5C] p-8 rounded-2xl text-white">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-bold opacity-60">Precio del Sistema</span>
                    <span className="text-3xl font-black text-[#4FD1C5]">$59.90</span>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-4 bg-[#4FD1C5] text-[#003B5C] rounded-xl font-black uppercase tracking-widest hover:scale-[1.02] transition-transform"
                  >
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              <section>
                <h3 className="text-2xl font-bold text-[#003B5C] mb-6 flex items-center gap-3">
                  <Info className="text-[#4FD1C5]" /> Qué es el Sistema {system.name}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">{system.whatIs}</p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-[#003B5C] mb-6">¿Cómo funciona el sistema?</h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  {system.howItWorks.map((h, i) => (
                    <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <h4 className="font-black text-[#003B5C] mb-2">{h.tech}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{h.func}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-red-50 p-8 rounded-2xl border border-red-100">
                <h3 className="text-xl font-bold text-red-800 mb-6">Lo que NO es {system.name}</h3>
                <div className="flex flex-wrap gap-3">
                  {system.whatIsNot.map((item, i) => (
                    <span key={i} className="px-4 py-2 bg-white rounded-full text-xs font-bold text-red-600 border border-red-200 uppercase">
                      ✕ {item}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-900 text-white p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-6 text-[#4FD1C5]">Ficha Técnica</h3>
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block mb-1">Sensación</span>
                    <p className="font-bold">{system.sensation}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block mb-1">Calzado Ideal</span>
                    <p className="font-bold">{system.bestFootwear}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block mb-1">Uso Sugerido</span>
                    <ul className="text-sm space-y-2 mt-2">
                      {system.useCases.map((u, i) => <li key={i} className="flex gap-2"><Check className="w-4 h-4 text-[#4FD1C5] shrink-0" /> {u}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                <h4 className="font-black text-[#003B5C] mb-4">¿Es este tu sistema?</h4>
                <p className="text-sm text-slate-500 mb-6">{system.idealIf}</p>
                <button className="text-[#003B5C] font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform">
                  Consultar guía de elección <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddToCartModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={addToCart}
        system={system}
      />
    </>
  );
};

const TechCatalogView = ({ navigate }) => (
  <div className="py-20 animate-fadeIn">
    <div className="container mx-auto px-6">
      <SectionHeader sub="Tecnologías" title="Biomimetismo en cada capa" />
      <div className="grid lg:grid-cols-2 gap-12">
        {techData.map(t => (
          <div
            key={t.id}
            onClick={() => navigate('techDetail', t.id)}
            className="group flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 cursor-pointer"
          >
            <div className="md:w-1/3 bg-slate-900 flex flex-col items-center justify-center p-8 text-[#4FD1C5]">
              <div className="scale-[2] group-hover:scale-[2.5] transition-transform duration-500">{t.icon}</div>
            </div>
            <div className="md:w-2/3 p-8">
              <h3 className="text-3xl font-black text-[#003B5C] mb-2">{t.name}</h3>
              <p className="text-[#4FD1C5] font-bold text-sm mb-4 uppercase tracking-wider">{t.claim}</p>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">{t.description}</p>
              <span className="text-[#003B5C] font-black text-[10px] uppercase tracking-[0.2em] group-hover:gap-4 flex items-center gap-2 transition-all">
                Ver comparativa técnica <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TechDetailView = ({ techId, navigate }) => {
  const tech = useMemo(() => techData.find(t => t.id === techId), [techId]);
  if (!tech) return null;

  return (
    <div className="py-20 animate-fadeIn">
      <div className="container mx-auto px-6 max-w-5xl">
        <button onClick={() => navigate('tech')} className="flex items-center gap-2 text-slate-400 hover:text-[#003B5C] mb-12 font-bold transition-colors">
          <ArrowLeft className="w-4 h-4" /> VOLVER A TECNOLOGÍAS
        </button>

        <div className="flex items-center gap-6 mb-12">
          <div className="w-24 h-24 bg-slate-900 rounded-3xl flex items-center justify-center text-[#4FD1C5]">
            {React.cloneElement(tech.icon, { size: 48 })}
          </div>
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-[#003B5C]">{tech.name}</h1>
            <p className="text-xl text-[#4FD1C5] font-bold uppercase tracking-widest">{tech.claim}</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 mb-20">
          <div className="p-10 border-b border-slate-100">
            <h2 className="text-2xl font-bold text-[#003B5C] mb-4">¿Por qué es superior?</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{tech.description}</p>
          </div>

          <div className="p-0 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="px-10 py-6 text-xs font-black uppercase tracking-widest text-slate-400">Variable</th>
                  <th className="px-10 py-6 text-xs font-black uppercase tracking-widest text-slate-400">Solución Genérica</th>
                  <th className="px-10 py-6 text-xs font-black uppercase tracking-widest text-[#003B5C] bg-[#4FD1C5]/10">Tecnología Rana Walk®</th>
                </tr>
              </thead>
              <tbody>
                {tech.comparison.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                    <td className="px-10 py-6 font-bold text-[#003B5C]">{row.aspect}</td>
                    <td className="px-10 py-6 text-slate-500 italic">{row.generic}</td>
                    <td className="px-10 py-6 font-bold text-[#003B5C] bg-[#4FD1C5]/5">{row.rana}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-[#003B5C] p-12 rounded-3xl text-center text-white">
          <h3 className="text-2xl font-bold mb-6">¿Quieres ver esta tecnología en acción?</h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Explora los sistemas biomecánicos que integran {tech.name} como parte de su arquitectura funcional.</p>
          <button onClick={() => navigate('systems')} className="bg-[#4FD1C5] text-[#003B5C] px-10 py-4 rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-transform">Ver Sistemas</button>
        </div>
      </div>
    </div>
  );
};

const DistributorsView = () => (
  <div className="py-24 animate-fadeIn">
    <div className="container mx-auto px-6">
      <SectionHeader sub="Partnership" title="Escala tu negocio con el estándar de bio-ingeniería" />
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-10">
          <p className="text-xl text-slate-600 leading-relaxed">
            Rana Walk® busca socios estratégicos que deseen diferenciar su portafolio mediante <strong>sistemas biomecánicos</strong> diseñados para condiciones reales de uso. No ofrecemos productos genéricos; proporcionamos una arquitectura de valor diseñada para distribuidores que buscan soluciones consistentes y escalables.
          </p>

          <div className="space-y-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-[#003B5C] mb-2 flex items-center gap-2">
                <Check className="text-[#4FD1C5]" /> Portafolio Diferenciado
              </h4>
              <p className="text-sm text-slate-500">Organizamos nuestra oferta por escenario (GOLIATH, VELOX, ORBIS, LEOPARD), facilitando la segmentación del mercado.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-[#003B5C] mb-2 flex items-center gap-2">
                <Check className="text-[#4FD1C5]" /> Capacitación Técnica de Alto Nivel
              </h4>
              <p className="text-sm text-slate-500">Formación basada en la ciencia de materiales del Life Sciences Hub de Costa Rica. Vende con confianza técnica.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-[#003B5C] mb-2 flex items-center gap-2">
                <Check className="text-[#4FD1C5]" /> Herramientas de Soporte B2B
              </h4>
              <p className="text-sm text-slate-500">Kits de demostración táctil, material educativo sobre fatiga acumulada y canal de soporte directo.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100">
          <h3 className="text-2xl font-black text-[#003B5C] mb-8">Solicitar Dossier Comercial</h3>
          <form className="space-y-5" onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 mb-2">Empresa</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:border-[#4FD1C5] outline-none" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 mb-2">País</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:border-[#4FD1C5] outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase text-slate-400 mb-2">Tipo de Negocio</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:border-[#4FD1C5] outline-none">
                <option>Retail Especializado</option>
                <option>Distribución Industrial</option>
                <option>Salud / Ortopedia</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase text-slate-400 mb-2">Email Corporativo</label>
              <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:border-[#4FD1C5] outline-none" />
            </div>
            <button className="w-full py-4 bg-[#003B5C] text-white rounded-xl font-black uppercase tracking-widest hover:bg-slate-800 transition-colors">Enviar Solicitud</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

const SupportView = () => {
  const sections = [
    {
      title: "Selección y Calce (Fitment)",
      faqs: [
        { q: "¿Cómo sé qué talla elegir?", a: "Nuestros sistemas están diseñados para ser recortados y adaptados con precisión. Recomendamos seleccionar la talla que incluya tu medida habitual y utilizar la plantilla original de tu calzado como guía." },
        { q: "¿Debo remover la plantilla original?", a: "Sí. Para que tecnologías como LeapCore™ funcionen correctamente, deben estar en contacto directo con la base del calzado. Colocarlas sobre plantillas viejas altera la palanca mecánica." },
        { q: "¿Qué sistema cabe en zapatos ajustados?", a: "El sistema VELOX es el único diseñado con ThinBoom™ de perfil ultradelgado, optimizado para calzado de vestir o sneakers con espacio interno limitado." }
      ]
    },
    {
      title: "Uso y Adaptación",
      faqs: [
        { q: "¿Existe un periodo de adaptación?", a: "Al ser sistemas de Integridad Estructural, es normal sentir firmeza inusual los primeros 2-4 días. Tu pie se realinea a una base sólida. Recomendamos uso progresivo." },
        { q: "¿Por qué se sienten más 'duras' que el gel?", a: "La suavidad excesiva colapsa. Rana Walk® ofrece Resiliencia Estructural para garantizar soporte óseo que no desaparezca tras dos horas de carga." }
      ]
    },
    {
      title: "Mantenimiento e Higiene",
      faqs: [
        { q: "¿Cómo debo limpiar mis Rana Walk®?", a: "Usa un paño húmedo con jabón neutro y deja secar a la sombra. Nunca uses lavadora ni fuentes de calor directo." },
        { q: "¿Cuál es la vida útil?", a: "Entre 8 y 12 meses dependiendo de la intensidad de carga, momento en el cual los polímeros inician su ciclo de fatiga natural." }
      ]
    },
    {
      title: "Garantía y Devoluciones",
      faqs: [
        { q: "¿Qué cubre la garantía técnica?", a: "Cubrimos defectos de manufactura o delaminación prematura no causada por uso abrasivo o recortes incorrectos." }
      ]
    }
  ];

  return (
    <div className="py-24 animate-fadeIn">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader sub="Centro de Ayuda" title="Resolviendo dudas con precisión" />
        <div className="space-y-12">
          {sections.map((sec, i) => (
            <div key={i}>
              <h3 className="text-2xl font-black text-[#003B5C] mb-6 border-b border-slate-100 pb-2">{sec.title}</h3>
              <div className="grid gap-6">
                {sec.faqs.map((faq, j) => (
                  <div key={j} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-[#003B5C] mb-3">{faq.q}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LegalView = () => (
  <div className="py-24 animate-fadeIn bg-slate-50">
    <div className="container mx-auto px-6 max-w-5xl">
      <SectionHeader sub="Legal" title="Marco Legal y Propiedad Intelectual" />

      <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 space-y-10 mb-10">
        <section>
          <h3 className="text-xl font-black text-[#003B5C] mb-4">1. Propiedad Intelectual y Patentes</h3>
          <p className="text-slate-600 mb-4">El contenido, diseño, algoritmos y tecnologías presentes en este ecosistema son propiedad exclusiva de Rana Walk.</p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-500">
            <li><strong>Marcas Registradas:</strong> Rana Walk®, LeapCore™, ThinBoom™, NanoSpread™, ShockSphere™, GOLIATH®, ORBIS®.</li>
            <li><strong>Patentes:</strong> Diseños de sistemas biomecánicos y matrices de poliuretano protegidos por leyes de propiedad industrial.</li>
            <li><strong>Licencias de Terceros:</strong> PORON® XRD® es una marca registrada de Rogers Corporation.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-black text-[#003B5C] mb-4">2. Términos de Servicio (Ingeniería y Uso)</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-500">
            <li><strong>Naturaleza del Producto:</strong> Dispositivos biomecánicos de soporte, no médicos.</li>
            <li><strong>Protocolo de Adaptación:</strong> El usuario reconoce el periodo de readaptación postural de 2 a 4 días.</li>
            <li><strong>Garantía de Resiliencia:</strong> Cubre defectos de manufactura bajo uso normal.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-black text-[#003B5C] mb-4">3. Política de Privacidad</h3>
          <p className="text-slate-600 mb-4">Protección de Datos en el Life Sciences Hub.</p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-500">
            <li><strong>Uso de IA:</strong> Datos usados únicamente para mejorar precisión de recomendaciones del Consultor.</li>
            <li><strong>Seguridad:</strong> Protocolos de grado industrial para proteger información.</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

const ConsultantPage = ({ query, setQuery, handleConsult, isLoading, response, error, navigate }) => (
  <div className="pt-32 pb-24 px-4 bg-white min-h-screen animate-fadeIn">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-black uppercase tracking-[0.2em] mb-10 shadow-sm border border-emerald-200">
          <Sparkles size={18} /> Consultor Inteligente
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-[#003B5C]">EL SISTEMA <span className="text-emerald-600">IDEAL</span> PARA TI.</h2>
        <p className="text-slate-500 font-medium text-xl max-w-2xl mx-auto">Describe tu jornada y calzado. Nuestra IA analizará las variables de carga e impacto para recomendarte una solución técnica.</p>
      </div>

      <div className="bg-slate-900 p-10 md:p-16 rounded-[3rem] shadow-2xl relative border border-white/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 blur-[100px] rounded-full"></div>
        <form onSubmit={(e) => { e.preventDefault(); handleConsult(query) }} className="space-y-8 relative z-10">
          <textarea
            className="w-full h-56 bg-slate-800 border-none rounded-3xl p-8 text-white text-xl placeholder:text-slate-500 focus:ring-4 focus:ring-emerald-500/20 transition-all shadow-inner leading-relaxed resize-none"
            placeholder="Ej: Peso 90kg, trabajo en una planta de ensamble 10 horas, uso botas de seguridad pesadas y me duele el talón..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            disabled={isLoading || !query.trim()}
            className={`w-full py-6 rounded-2xl font-black text-xl uppercase tracking-[0.2em] flex items-center justify-center gap-4 transition-all shadow-xl ${isLoading || !query.trim() ? 'bg-slate-700 text-slate-500 cursor-not-allowed' : 'bg-emerald-600 text-white hover:bg-emerald-500 hover:scale-[1.01]'
              }`}
          >
            {isLoading ? <RefreshCw className="animate-spin" /> : <Zap size={24} />}
            {isLoading ? 'PROCESANDO VARIABLES...' : 'ANALIZAR'}
          </button>
        </form>
      </div>

      <div className="mt-16">
        {response && (
          <div className="animate-fadeIn bg-emerald-50 p-12 md:p-16 rounded-[4rem] border border-emerald-100 shadow-xl">
            <h3 className="font-black text-[#003B5C] uppercase tracking-[0.2em] text-sm mb-10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white"><Check size={18} /></div>
              Diagnóstico del Consultor ✨
            </h3>
            <div className="prose prose-slate max-w-none text-slate-800 text-xl leading-relaxed font-medium whitespace-pre-wrap italic">
              {response}
            </div>
            <div className="mt-12 pt-12 border-t border-emerald-200">
              <button onClick={() => navigate('systems')} className="font-black text-emerald-700 text-lg flex items-center gap-2 hover:gap-6 transition-all uppercase tracking-widest">
                Ver especificaciones de mi sistema <ArrowRight size={24} />
              </button>
            </div>
          </div>
        )}
        {error && (
          <div className="p-10 bg-red-50 text-red-600 rounded-[3rem] border border-red-100 flex items-center gap-6 shadow-sm">
            <AlertCircle size={32} /> <span className="font-black text-lg uppercase">{error}</span>
          </div>
        )}
      </div>
    </div>
  </div>
);

// --- MAIN APP COMPONENT ---

export default function App() {
  const [view, setView] = useState('home');
  const [activeId, setActiveId] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Gemini State
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const callGemini = async (userPrompt) => {
    const apiKey = "AIzaSyBmO6qTow7RVhNv9QTgQM0PkdEoPTV_tf0";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    const systemPrompt = `
        Eres el Consultor Biomecánico Experto de Rana Walk®.
        Tu misión es recomendar uno de nuestros 4 sistemas biomecánicos basados en la necesidad del usuario.

        Sistemas disponibles:
        1. GOLIATH: Enfocado en alta carga e impacto repetitivo. Ideal para botas industriales y trabajo pesado.
        2. VELOX: Perfil mínimo para calzado de vestir o ajustado. Prioriza dinamismo y retorno de energía.
        3. ORBIS: Confort diario y equilibrio postural para caminatas urbanas.
        4. LEOPARD: Estabilidad adaptable con perfiles de arco específicos para terrenos irregulares.

        Instrucciones técnicas:
        - Usa un tono de Biomimetismo profesional.
        - Habla de "carga", "impacto" y "espacio interno".
        - NO uses lenguaje médico-clínico (evita "ortopédico", "clínica", "paciente").
        - Responde siempre en español.
        - Sé conciso y directo.
        - Al final, recomienda explícitamente UN sistema principal.
        `;

    const payload = {
      contents: [{
        parts: [{ text: `System Instruction: ${systemPrompt}\n\nUser Query: ${userPrompt}` }]
      }]
    };

    const fetchWithRetry = async (retries = 3, delay = 1000) => {
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
        if (retries > 0) {
          await new Promise(resolve => setTimeout(resolve, delay));
          return fetchWithRetry(retries - 1, delay * 2);
        }
        throw err;
      }
    };

    setIsLoading(true);
    setError(null);
    try {
      const result = await fetchWithRetry();
      setResponse(result);
    } catch (err) {
      console.error(err);
      setError("No se pudo conectar con el consultor inteligente. Por favor verifica tu conexión o intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    setIsCartOpen(true); // Abrir carrito automáticamente al agregar
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const navigate = (newView, id = null) => {
    setView(newView);
    setActiveId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#4FD1C5] selection:text-[#003B5C]">
      <Navbar currentView={view} navigate={navigate} cartCount={cart.length} onOpenCart={() => setIsCartOpen(true)} />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemoveItem={removeFromCart}
      />

      <main>
        {view === 'home' && <HomeView navigate={navigate} />}
        {view === 'consultor' && (
          <ConsultantPage
            query={query}
            setQuery={setQuery}
            handleConsult={callGemini}
            isLoading={isLoading}
            response={response}
            error={error}
            navigate={navigate}
          />
        )}
        {view === 'systems' && <SystemsCatalogView navigate={navigate} />}
        {view === 'systemDetail' && <SystemDetailView systemId={activeId} navigate={navigate} addToCart={addToCart} />}
        {view === 'tech' && <TechCatalogView navigate={navigate} />}
        {view === 'techDetail' && <TechDetailView techId={activeId} navigate={navigate} />}
        {view === 'distributors' && <DistributorsView />}
        {view === 'support' && <SupportView />}
        {view === 'legal' && <LegalView />}
      </main>

      <TrustBar />
      <Footer navigate={navigate} />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out forwards;
        }
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
}