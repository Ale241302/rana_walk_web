import React, { useState, useEffect, useMemo } from 'react';
import {
  Menu, X, ChevronRight, Shield, Activity, Zap, Droplets,
  ShoppingCart, ArrowRight, Check, Mail, MapPin, Linkedin,
  Instagram, Facebook, ArrowLeft, Info, HelpCircle, FileText,
  Star, Users, Globe, Award, ShieldCheck, Beaker, Trash,
  Sparkles, RefreshCw, AlertCircle, Box, BookOpen, Layout
} from 'lucide-react';

/**
 * RANA WALK® - Ecosistema de Biomimetismo Podal
 * Versión: ESTRUCTURA INTEGRAL FINAL (Sistemas Biomecánicos)
 */
// --- DATA: SISTEMAS BIOMECÁNICOS ---
const systemsData = [
  {
    id: 'goliath',
    name: 'GOLIATH',
    ref: 'STRUCT-RES-SYS',
    tagline: 'El Sistema de Resiliencia Estructural',
    shortDesc: 'Inspirado en la arquitectura de los gigantes. Diseñado para dominar el impacto y la carga en las jornadas más exigentes.',
    color: 'bg-slate-800',
    accent: '#1e293b',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    fullDescription: 'Inspirado en la arquitectura de los gigantes. Diseñado para dominar el impacto y la carga en las jornadas más exigentes del mundo real.',
    whatIs: 'GOLIATH emula la capacidad de carga y estabilidad de los grandes organismos terrestres. Actúa como un cimiento sólido para el cuerpo humano en entornos de máxima exigencia, manteniendo un microclima estable incluso bajo presión extrema.',
    useCases: [
      'Entornos de Alta Carga y Peso',
      'Jornadas de Resistencia Estructural (+12 horas)',
      'Superficies de Alta Dureza e Impacto',
      'Calzado de Gran Volumen'
    ],
    userProfile: 'El Profesional Industrial y de Seguridad, usuarios con necesidad de estabilidad máxima y caminantes de larga distancia con carga.',
    technologies: ['leapcore', 'poron', 'thinboom', 'nanospread', 'archsupport'],
    howItWorks: [
      { tech: 'LeapCore™', func: 'Chasis estructural de poliuretano de ingeniería para soporte óseo.' },
      { tech: 'PORON® XRD®', func: 'Escudo de reacción instantánea que disipa hasta el 90% de la energía cinética.' },
      { tech: 'ThinBoom™', func: 'Almohadilla de propulsión que devuelve entre el 70% y 80% del impulso.' }
    ],
    bioMimicry: 'En la naturaleza, los organismos de gran volumen no dependen de la suavidad, sino de la integridad estructural y su capacidad de termorregulación. GOLIATH emula la biomecánica de los grandes mamíferos terrestres.',
    scenario: 'Diseñado para alta carga, impacto repetitivo y jornadas intensivas de pie en superficies duras.',
    sensation: 'Soporte firme, sólido y de máxima protección.',
    technicalSpecs: 'Chasis de LeapCore™ para soporte óseo, PORON® XRD® como escudo ante impactos críticos y ThinBoom™ para propulsión.',
    aiReadySummary: { impact: '10/10 (PORON® XRD®)', load: '10/10 (LeapCore™ alta densidad)', impulse: '8/10 (ThinBoom™)', tech: 'LeapCore™ + PORON® XRD® + ThinBoom™ + NanoSpread™' },
    bestFootwear: 'Botas de seguridad, calzado táctico y calzado robusto con espacio interno estándar o amplio.',
    whatIsNot: ['No es un sistema blando de amortiguación pasiva', 'No es una solución de confort efímero', 'No es para calzado de perfil bajo'],
    idealIf: 'Si eres un profesional industrial, de seguridad o un usuario que requiere un cimiento sólido que no se deforme con el uso rudo.'
  },
  {
    id: 'velox',
    name: 'VELOX',
    ref: 'AGILE-PERF-SYS',
    tagline: 'El Sistema de Agilidad de Perfil Bajo',
    shortDesc: 'Rendimiento puro impulsado por ThinBoom™. Emula la respuesta explosiva y la flexibilidad total de la naturaleza.',
    color: 'bg-red-700',
    accent: '#dc2626',
    image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&q=80&w=800',
    fullDescription: 'Rendimiento puro impulsado por ThinBoom™. Emula la respuesta explosiva y la flexibilidad total de la naturaleza.',
    whatIs: 'VELOX es el sistema de bio-mimetismo podal más liviano y reactivo de Rana Walk®. Construido íntegramente en ThinBoom™ (E-TPU supercrítico), ofrece un retorno de energía superior en un perfil ultradelgado.',
    useCases: [
      'Calzado de Perfil Bajo y Espacio Reducido',
      'Jornadas Activas de Alta Movilidad',
      'Eficiencia del Movimiento sin Relleno',
      'Gestión de Clima Interno Crítico'
    ],
    userProfile: 'El Profesional Urbano y el Usuario Dinámico que prioriza la respuesta, la eficiencia y el control del apoyo sobre la suavidad inmediata.',
    technologies: ['thinboom', 'nanospread'],
    howItWorks: [
      { tech: 'ThinBoom™', func: 'E-TPU supercrítico que almacena la fuerza del impacto y la libera explosivamente.' },
      { tech: 'NanoSpread™', func: 'Dispersión acelerada de humedad mediante micro canales reptilianos.' },
      { tech: 'Flexibilidad Total', func: 'Acompaña la torsión natural del pie sin chasis rígido.' }
    ],
    bioMimicry: 'En la naturaleza, la velocidad extrema requiere tejidos que puedan flexionarse sin restricciones. VELOX prescinde de estructuras rígidas para emular la elasticidad pura de un tendón de alto performance.',
    scenario: 'Ideal para calzado de espacio reducido y jornadas activas que requieren desplazamientos rápidos.',
    sensation: 'Reactiva, firme, fresca y totalmente flexible.',
    technicalSpecs: 'Cuerpo 100% ThinBoom™ (E-TPU supercrítico) + Capilaridad Técnica NanoSpread™.',
    aiReadySummary: { impact: '6/10', load: '6/10', space: '10/10 (Máximo Espacio)', tech: '100% ThinBoom™ + NanoSpread™' },
    bestFootwear: 'Zapatos de vestir, sneakers ajustados y calzado urbano.',
    whatIsNot: ['No es para cargas extremas', 'No tiene chasis rígido', 'No es para botas industriales'],
    idealIf: 'Si buscas soporte técnico sin alterar el calce original de tu zapato formal o ajustado.'
  },
  {
    id: 'orbis',
    name: 'ORBIS',
    ref: 'DAILY-EQ-SYS',
    tagline: 'El Sistema de Equilibrio Natural',
    shortDesc: 'Confort sostenido y estabilidad fluida para el movimiento cotidiano. Emula la autorregulación de la naturaleza.',
    color: 'bg-sky-600',
    accent: '#0ea5e9',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800',
    fullDescription: 'Confort sostenido y estabilidad fluida para el movimiento cotidiano. Emula la autorregulación de la naturaleza para mantener el equilibrio en cada paso.',
    whatIs: 'ORBIS es el sistema diseñado para el uso diario prolongado. Prioriza la estabilidad postural y el equilibrio térmico mediante la integración de un chasis LeapCore™ de densidad media.',
    useCases: [
      'Uso Diario Prolongado',
      'Jornadas de Trabajo Moderadas',
      'Caminatas Frecuentes en Ciudad',
      'Gestión Climática Pasiva'
    ],
    userProfile: 'El Usuario Urbano Cotidiano y buscadores de equilibrio postural que valoran sentir estabilidad constante sin que el sistema se sienta rígido.',
    technologies: ['leapcore', 'nanospread', 'shocksphere'],
    howItWorks: [
      { tech: 'LeapCore™ DM', func: 'Chasis de densidad media para mantener la postura sin rigidez excesiva.' },
      { tech: 'NanoSpread™', func: 'Distribuye el calor y el sudor de forma pasiva para una superficie seca.' },
      { tech: 'ShockSphere™', func: 'Disipa pequeñas irregularidades del terreno urbano.' }
    ],
    bioMimicry: 'En la naturaleza, la supervivencia depende de la homeostasis. ORBIS emula esta armonía biológica proporcionando un soporte que acompaña el movimiento natural del cuerpo.',
    scenario: 'Confort diario prolongado y equilibrio funcional para caminatas frecuentes en ciudad.',
    sensation: 'Natural, equilibrada y de confort progresivo.',
    technicalSpecs: 'LeapCore™ de densidad media + NanoSpread™ + ShockSphere™.',
    aiReadySummary: { impact: '7/10 (ShockSphere™)', load: '8/10 (LeapCore™ densidad media)', space: '9/10 (Versátil)', tech: 'LeapCore™ + NanoSpread™ + ShockSphere™' },
    bestFootwear: 'Calzado casual, urbano y sneakers estándar.',
    whatIsNot: ['No es para impacto industrial de +12h', 'No es un soporte rígido de alta carga', 'No es para calzado outdoor extremo'],
    idealIf: 'Si buscas confort real para todo el día sin la sensación "blanda" o inestable de las plantillas genéricas.'
  },
  {
    id: 'leopard',
    name: 'LEOPARD',
    ref: 'STAB-ADAPT-SYS',
    tagline: 'El Sistema de Estabilidad Adaptable',
    shortDesc: 'Inteligencia geométrica que se integra a tu anatomía. Emula la capacidad felina de ajustar la pisada.',
    color: 'bg-amber-600',
    accent: '#d97706',
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800',
    fullDescription: 'Inteligencia geométrica que se integra a tu anatomía. Emula la capacidad felina de ajustar la pisada para optimizar la postura.',
    whatIs: 'LEOPARD utiliza un chasis de LeapCore™ con geometría dinámica que se adapta al arco del usuario, mejorando la alineación postural y protegiendo la estructura natural del pie frente a la fatiga.',
    useCases: [
      'Soporte de Arco Personalizado',
      'Jornadas de Alta Exigencia Postural',
      'Entornos y Superficies Irregulares',
      'Actividades de Terrenos Mixtos'
    ],
    userProfile: 'El Buscador de Confort Postural y el Usuario Activo de Terrenos Mixtos que necesita una plataforma robusta que se adapte instantáneamente.',
    technologies: ['leapcore', 'shocksphere', 'nanospread', 'archsupport'],
    howItWorks: [
      { tech: 'LeapCore™ Adaptable', func: 'Chasis que reconoce la profundidad de tu arco ofreciendo resistencia proporcional.' },
      { tech: 'ShockSphere™', func: 'Almohadillas que disipan impactos en zonas críticas para proteger el equilibrio.' },
      { tech: 'Arch Support', func: 'Refuerzo que previene el colapso del arco medial ante la fatiga.' }
    ],
    bioMimicry: 'La estabilidad felina no proviene de la rigidez, sino de la capacidad de los tejidos para adaptarse. LEOPARD emula esta agilidad: su arquitectura refuerza el arco natural del usuario.',
    scenario: 'Control del apoyo y estabilidad dinámica en entornos irregulares o cambiantes.',
    sensation: 'Estable, robusta, adaptable y de control postural absoluto.',
    technicalSpecs: 'LeapCore™ Adaptable + ShockSphere™ + NanoSpread™.',
    aiReadySummary: { impact: '9/10 (ShockSphere™)', load: '9/10 (LeapCore™ Adaptable)', space: '8/10 (Outdoor/Robusto)', tech: 'LeapCore™ Adaptable + ShockSphere™ + NanoSpread™' },
    bestFootwear: 'Calzado outdoor, botas y calzado urbano robusto.',
    whatIsNot: ['No es una corrección fija rígida', 'No es para calzado ultra-ajustado', 'No es una plantilla de espuma simple'],
    idealIf: 'Si valoras la alineación corporal y quieres un soporte que mejore tu forma de caminar y estar de pie en cualquier terreno.'
  }
];

// --- DATA: TECNOLOGÍAS ---
const techData = [
  {
    id: 'leapcore',
    name: 'LeapCore™',
    claim: 'La Columna Vertebral del Sistema Biomecánico',
    icon: <Activity />,
    description: 'Chasis de poliuretano de ingeniería (PU) diseñado específicamente para soportar cargas prolongadas y distribuir las fuerzas de impacto dentro de la plataforma.',
    bioFunction: 'Emula la consistencia estructural ósea.',
    engineering: 'Chasis de Poliuretano de ingeniería (PU) de alta resiliencia.',
    keyAttribute: 'Soporte estable que resiste el colapso funcional durante jornadas intensivas.',
    comparison: [
      { aspect: 'Resiliencia', generic: 'Suavidad efímera (colapsa)', rana: 'Resiliencia Estructural (estable)' },
      { aspect: 'Jornadas', generic: 'Dolor tras 2 horas', rana: 'Soporte íntegro +12 horas' },
      { aspect: 'Postura', generic: 'Inestabilidad progresiva', rana: 'Alineación biomecánica constante' }
    ]
  },
  {
    id: 'thinboom',
    name: 'ThinBoom™',
    claim: 'Dinamismo de Alto Performance en Perfil Mínimo',
    icon: <Zap />,
    description: 'Matriz de Elastómero Termoplástico de Células Expandidas (ETCE) mediante expansión supercrítica para un retorno de energía explosivo.',
    bioFunction: 'Emula la eficiencia elástica de los tendones.',
    engineering: 'Elastómero Termoplástico de Células Expandidas (ETCE) de perfil ultradelgado.',
    keyAttribute: 'Retorno energético del 70% al 80% manteniendo el calce original.',
    comparison: [
      { aspect: 'Perfil', generic: 'Voluminoso / Incómodo', rana: 'Perfil mínimo / Ultra-discreto' },
      { aspect: 'Energía', generic: 'Amortiguación pasiva', rana: 'Retorno explosivo (70-80%)' },
      { aspect: 'Celdas', generic: 'Celdas abiertas (se hunden)', rana: 'Celdas expandidas (no colapsan)' }
    ]
  },
  {
    id: 'nanospread',
    name: 'NanoSpread™',
    claim: 'Gestión Climática para un Microclima Estable',
    icon: <Droplets />,
    description: 'Membrana Micro-Capilar de Transferencia Termo-Higroscópica diseñada para la dispersión acelerada de la humedad y el calor.',
    bioFunction: 'Emula la capilaridad reptiliana y los micro-canales epiteliales.',
    engineering: 'Membrana Micro-Capilar de Gestión de Humedad.',
    keyAttribute: 'Homeostasis térmica y frescura técnica en uso intensivo.',
    comparison: [
      { aspect: 'Humedad', generic: 'Absorción textíl (se moja)', rana: 'Capilaridad pasiva (distribuye)' },
      { aspect: 'Calor', generic: 'Efecto invernadero manual', rana: 'Dispersión de epitelio técnica' },
      { aspect: 'Sensación', generic: 'Humedad acumulada', rana: 'Frescura técnica constante' }
    ]
  },
  {
    id: 'shocksphere',
    name: 'ShockSphere™',
    claim: 'Absorción Inteligente en Puntos de Presión Crítica',
    icon: <Shield />,
    description: 'Poliuretano de Disipación de Energía y Geometría Esférica que disipa impactos de forma focalizada sin comprometer la estabilidad.',
    bioFunction: 'Emula las almohadillas de estabilidad felina.',
    engineering: 'Poliuretano Micro-Celular de Baja Histéresis.',
    keyAttribute: 'Adaptación dinámica al terreno y control del centro de gravedad.',
    comparison: [
      { aspect: 'Impacto', generic: 'Amortiguación inestable', rana: 'Disipación focalizada' },
      { aspect: 'Terreno', generic: 'Transmite irregularidades', rana: 'Adaptación dinámica felina' },
      { aspect: 'Fatiga', generic: 'Carga articular alta', rana: 'Neutralización de vibraciones' }
    ]
  },
  {
    id: 'poron',
    name: 'PORON® XRD®',
    claim: 'Escudo de Reacción ante Impactos Críticos',
    icon: <ShieldCheck />,
    description: 'Tecnología patentada (Rogers Corp, USA) que permanece flexible en el movimiento pero se endurece instantáneamente al impacto.',
    bioFunction: 'Emula los cojinetes de absorción reactiva.',
    engineering: 'Uretano de Celda Abierta para Mitigación de Impactos Extremos.',
    keyAttribute: 'Disipa hasta el 90% de la energía cinética del impacto.',
    comparison: [
      { aspect: 'Protección', generic: 'Pasiva / Limitada', rana: 'Reactiva / Absoluta' },
      { aspect: 'Moléculas', generic: 'Estática', rana: 'Dinámicas (se agrupan al golpe)' },
      { aspect: 'Certificación', generic: 'No certificada', rana: 'Criterio de Seguridad Industrial' }
    ]
  },
  {
    id: 'archsupport',
    name: 'Arch Support',
    claim: 'El Exoesqueleto de Soporte Anti-Colapso',
    icon: <FileText />,
    description: 'Refuerzo estructural de vinilo de alta tenacidad que previene el colapso del arco medial bajo condiciones de fatiga.',
    bioFunction: 'Emula la función de un exoesqueleto de soporte.',
    engineering: 'Polímero de Vinilo de Alta Tenacidad.',
    keyAttribute: 'Base de soporte inquebrantable que mejora la palanca mecánica.',
    comparison: [
      { aspect: 'Arco', generic: 'Soporte blando (cede)', rana: 'Refuerzo externo rígido' },
      { aspect: 'Durabilidad', generic: 'Se deforma con el uso', rana: 'Integridad mecánica prolongada' },
      { aspect: 'Palanca', generic: 'Pérdida de potencia', rana: 'Transferencia de energía óptima' }
    ]
  }
];

// --- COMPONENTES AUXILIARES ---

const Navbar = ({ currentView, navigate, cartCount, onOpenCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 'home', label: 'Inicio' },
    { id: 'systems', label: 'Sistemas' },
    { id: 'tech', label: 'Ciencia' },
    { id: 'distributors', label: 'B2B' },
    { id: 'support', label: 'Soporte' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-xl border-b border-white/5 h-20' : 'bg-transparent h-24'}`}>
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('home')}>
          <img
            src="https://ranawalk.com/images/rana-walk-hv2.png"
            alt="Rana Walk"
            className={`h-12 w-auto transition-all duration-300 ${(currentView === 'home' || isScrolled) ? 'brightness-0 invert' : ''}`}
          />
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => { navigate(l.id); setIsOpen(false); }}
              className={`text-[13px] font-black uppercase tracking-[0.2em] transition-all hover:translate-y-[-1px] ${currentView === l.id ? 'text-[#4FD1C5]' : 'text-slate-400 hover:text-white'}`}
            >
              {l.label}
            </button>
          ))}
          <button onClick={() => { navigate('consultor'); setIsOpen(false) }} className="bg-[#4FD1C5]/10 text-[#4FD1C5] px-5 py-2.5 rounded-full text-[13px] font-black uppercase tracking-[0.2em] flex items-center gap-2 hover:bg-[#4FD1C5] hover:text-[#003B5C] transition-all border border-[#4FD1C5]/20">
            Consultor IA <Sparkles className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative group cursor-pointer" onClick={onOpenCart}>
            <ShoppingCart className="w-5 h-5 text-white group-hover:text-[#4FD1C5] transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-[9px] font-black rounded-full w-5 h-5 flex items-center justify-center border-2 border-slate-900">
                {cartCount}
              </span>
            )}
          </div>
          <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-white/5 p-10 flex flex-col gap-6 animate-fadeIn min-h-screen">
          {links.map(l => (
            <button key={l.id} onClick={() => { navigate(l.id); setIsOpen(false); }} className="text-left font-black text-white text-2xl uppercase tracking-widest py-2 border-b border-white/5 pb-4">{l.label}</button>
          ))}
          <button onClick={() => { navigate('consultor'); setIsOpen(false) }} className="text-left font-black text-[#4FD1C5] text-2xl uppercase tracking-widest py-2 flex items-center gap-4">
            Consultor IA <Sparkles className="w-6 h-6" />
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
  <div className="bg-slate-900 py-12 border-y border-white/5">
    <div className="container mx-auto px-6">
      <h3 className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-[#4FD1C5] mb-10 opacity-60">Respaldado por la Ciencia de Materiales y la Ingeniería Global</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 items-center justify-items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
        <div className="flex flex-col items-center gap-2 text-white">
          <div className="font-black text-xl tracking-tighter">ROGERS <span className="text-[#4FD1C5]">CORP.</span></div>
          <span className="text-[8px] uppercase tracking-widest font-bold">PORON® XRD® Partner</span>
        </div>
        <div className="flex flex-col items-center gap-2 text-white">
          <div className="font-black text-xl tracking-tighter">LIFE SCIENCES <span className="text-[#4FD1C5]">HUB</span></div>
          <span className="text-[8px] uppercase tracking-widest font-bold">Costa Rica · R&D</span>
        </div>
        <div className="flex flex-col items-center gap-2 text-white">
          <div className="font-black text-xl tracking-tighter">LEAPCORE <span className="text-[#4FD1C5]">TECH</span></div>
          <span className="text-[8px] uppercase tracking-widest font-bold">Structural Resilience</span>
        </div>
        <div className="flex flex-col items-center gap-2 text-white">
          <div className="font-black text-xl tracking-tighter">ESENCIAL <span className="text-[#4FD1C5]">CR</span></div>
          <span className="text-[8px] uppercase tracking-widest font-bold">Marca País Excelencia</span>
        </div>
      </div>
    </div>
  </div>
);

const Footer = ({ navigate }) => (
  <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-5 gap-16 mb-20">
        <div className="col-span-1 lg:col-span-1">
          <img src="https://ranawalk.com/images/2025/02/06/image-2.png" alt="Rana Walk" className="h-14 w-auto mb-8 invert" />
          <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
            Ingeniería de bio-mimetismo podal diseñada en el Life Sciences Hub de Costa Rica. Domina el impacto y la carga.
          </p>
          <div className="flex gap-5">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#4FD1C5]/20 group transition-all cursor-pointer border border-white/10">
              <Linkedin size={18} className="text-slate-400 group-hover:text-[#4FD1C5]" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#4FD1C5]/20 group transition-all cursor-pointer border border-white/10">
              <Instagram size={18} className="text-slate-400 group-hover:text-[#4FD1C5]" />
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-black text-[#4FD1C5] mb-8 uppercase text-[10px] tracking-[0.3em]">Navegación Técnica</h4>
          <ul className="space-y-4 text-sm font-bold text-slate-400">
            <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2" onClick={() => navigate('home')}>Inicio <ArrowRight size={12} className="opacity-0 group-hover:opacity-100" /></li>
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('systems')}>Sistemas</li>
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('tech')}>Ciencia & Tech</li>
            <li className="text-[#4FD1C5] hover:brightness-125 cursor-pointer transition-all flex items-center gap-2" onClick={() => navigate('consultor')}>AI Consultant <Sparkles size={14} /></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-[#4FD1C5] mb-8 uppercase text-[10px] tracking-[0.3em]">Sistemas Bio-Miméticos</h4>
          <ul className="space-y-4 text-sm font-bold text-slate-400">
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('systemDetail', 'goliath')}>GOLIATH</li>
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('systemDetail', 'velox')}>VELOX</li>
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('systemDetail', 'orbis')}>ORBIS</li>
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('systemDetail', 'leopard')}>LEOPARD</li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-[#4FD1C5] mb-8 uppercase text-[10px] tracking-[0.3em]">Soporte & Legal</h4>
          <ul className="space-y-4 text-sm font-bold text-slate-400">
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('support')}>Centro de Ayuda</li>
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('distributors')}>Distribución B2B</li>
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('legal')}>Términos de Uso</li>
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('legal')}>Privacidad de Datos</li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-[#4FD1C5] mb-8 uppercase text-[10px] tracking-[0.3em]">Presencia Industrial</h4>
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-black text-slate-500 uppercase block mb-1">HQ & R&D</span>
              <p className="text-sm font-bold">Costa Rica, Central America</p>
              <p className="text-[10px] text-slate-500">Life Sciences Hub</p>
            </div>
            <div>
              <span className="text-[10px] font-black text-slate-500 uppercase block mb-1">Distribution</span>
              <p className="text-sm font-bold">USA | Latam | Global</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-widest text-slate-600">
        <p>© 2026 RANA WALK®</p>
        <p className="text-center md:text-right max-w-xl opacity-60 leading-relaxed">
          AVISO LEGAL: LOS SISTEMAS RANA WALK NO SON DISPOSITIVOS MÉDICOS. ESTÁN DISEÑADOS PARA EL BIENESTAR FUNCIONAL Y LA SALUD BIOMECÁNICA.
        </p>
      </div>
    </div>
  </footer>
);

// --- VISTAS ---

const HomeView = ({ navigate }) => (
  <div className="animate-fadeIn">
    {/* Hero Principal */}
    <section className="relative h-[90vh] flex items-center bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556103330-d5b932f7970a?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-6xl font-bold leading-[1.1] mb-8">
            Sistemas de bio-mimetismo podal: diseñados para dominar el <span className="text-[#4FD1C5]">impacto y la carga</span> en jornadas exigentes.
          </h1>
          <p className="text-xl text-slate-300 mb-6 leading-relaxed max-w-2xl">
            Rana Walk® desarrolla soluciones de bio-mimetismo podal inspiradas en la eficiencia de la naturaleza y diseñadas en el Life Sciences Hub de las Américas en Costa Rica. Name it, leap forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <button onClick={() => navigate('systems')} className="bg-[#4FD1C5] text-[#003B5C] px-8 py-4 rounded-lg font-black uppercase tracking-wider hover:bg-[#3db8ae] transition-all flex items-center justify-center gap-2">
              Explorar sistemas <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => navigate('consultor')} className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-black uppercase tracking-wider hover:bg-white/10 transition-all">
              ¿Cuál es mi sistema?
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Sección · Propuesta de Valor */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeader sub="Bio-mimetismo aplicado a la base de tu bienestar" title="Nacemos donde la precisión de la bio-ingeniería converge" center={false} />
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                Nacemos en el territorio con la mayor densidad biológica del planeta. Mientras que las plantillas genéricas ofrecen una suavidad inicial que colapsa rápidamente, perdiendo soporte y estabilidad tras pocas semanas de uso, Rana Walk® emula los mecanismos de supervivencia de la naturaleza.
              </p>
              <div className="p-8 bg-slate-50 border-l-4 border-[#4FD1C5] rounded-r-xl">
                <p className="font-bold text-[#003B5C]">
                  Ofrecemos soporte estructural estable, protección reactiva ante impactos y un retorno de energía constante diseñado para durar en el mundo real.
                </p>
              </div>
              <p>
                Esto es posible porque no diseñamos capas aisladas, sino un ecosistema de tecnologías que trabajan como un sistema interconectado.
              </p>
              <button onClick={() => navigate('tech')} className="flex items-center gap-2 text-[#003B5C] font-black uppercase tracking-widest hover:translate-x-2 transition-transform">
                Conoce nuestra ciencia <ChevronRight className="w-5 h-5 text-[#4FD1C5]" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:bg-[#003B5C] transition-colors">
              <ShieldCheck className="w-12 h-12 text-[#4FD1C5] mb-4" />
              <h4 className="font-bold mb-2 group-hover:text-white transition-colors">Resiliencia</h4>
              <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">Soporte óseo que no colapsa.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:bg-[#003B5C] transition-colors">
              <Zap className="w-12 h-12 text-[#4FD1C5] mb-4" />
              <h4 className="font-bold mb-2 group-hover:text-white transition-colors">Reacción</h4>
              <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">Protección instantánea certificada.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:bg-[#003B5C] transition-colors">
              <RefreshCw className="w-12 h-12 text-[#4FD1C5] mb-4" />
              <h4 className="font-bold mb-2 group-hover:text-white transition-colors">Retorno</h4>
              <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">Tendón elástico reactivo.</p>
            </div>
            <div className="bg-[#e6fffb] p-8 rounded-3xl border border-[#4FD1C5]/30 flex flex-col items-center text-center group hover:bg-[#003B5C] transition-colors">
              <Beaker className="w-12 h-12 text-[#003B5C] group-hover:text-[#4FD1C5] mb-4 transition-colors" />
              <h4 className="font-bold mb-2 group-hover:text-white transition-colors">Ciencia</h4>
              <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">Life Sciences Hub CR.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Sección · Tecnologías (preview) */}
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <SectionHeader sub="Tecnologías que emulan una función real" title="El Ecosistema Tecnológico" dark />
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {techData.map(t => (
            <div
              key={t.id}
              onClick={() => navigate('techDetail', t.id)}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group flex flex-col items-center text-center"
            >
              <div className="text-[#4FD1C5] mb-4 group-hover:scale-110 transition-transform">{t.icon}</div>
              <h4 className="font-black text-sm mb-2">{t.name}</h4>
              <p className="text-[10px] text-slate-400 leading-tight uppercase tracking-widest">{t.bioFunction}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button onClick={() => navigate('tech')} className="bg-transparent border-2 border-[#4FD1C5] text-[#4FD1C5] px-10 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-[#4FD1C5] hover:text-[#003B5C] transition-all">
            Conoce nuestras tecnologías →
          </button>
        </div>
      </div>
    </section>

    {/* El Laboratorio del Mundo Real */}
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader sub="Life Sciences Hub" title="Diseñado en el Hub de Dispositivos Médicos" />
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Nuestra ciencia no se limita a simulaciones. Se valida en jornadas de +12 horas y bajo carga física real en las condiciones más exigentes de Costa Rica. Aprovechamos uno de los ecosistemas más avanzados en manufactura de dispositivos médicos a nivel global.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-black text-[#003B5C] mb-2 uppercase text-xs tracking-widest">Protección Reactiva</h4>
              <p className="text-sm text-slate-500">Emulamos los cojinetes de la rana que se endurecen ante el impacto absoluto.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-black text-[#003B5C] mb-2 uppercase text-xs tracking-widest">Homeostasis Térmica</h4>
              <p className="text-sm text-slate-500">Capilaridad reptiliana para gestionar la saturación térmica en el calzado.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-black text-[#003B5C] mb-2 uppercase text-xs tracking-widest">Resiliencia Ósea</h4>
              <p className="text-sm text-slate-500">Chasis LeapCore™ que mantiene la altura donde las espumas genéricas colapsan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const SystemsCatalogView = ({ navigate }) => (
  <div className="py-20 animate-fadeIn">
    <div className="container mx-auto px-6 text-center mb-16">
      <SectionHeader sub="SISTEMAS DE BIO-MIMETISMO" title="Cuatro ecosistemas de movimiento. Cuatro respuestas de la naturaleza." />
      <p className="text-slate-500 max-w-3xl mx-auto mb-10 text-xl leading-relaxed">
        Rana Walk® no diseña modelos aislados. Organizamos nuestro portafolio en sistemas que emulan la especialización biológica para responder a tres variables críticas: <strong>impacto, carga y espacio interno del calzado.</strong>
      </p>
    </div>

    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {systemsData.map(s => (
          <div key={s.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all group flex flex-col border border-slate-100">
            <div className="h-64 overflow-hidden relative">
              <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-[10px] font-black text-[#003B5C] tracking-widest border border-slate-100">{s.id.toUpperCase()}</div>
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
            <button onClick={() => navigate('systems')} className="flex items-center gap-2 text-slate-400 hover:text-[#003B5C] mb-10 font-black transition-colors uppercase text-xs tracking-widest">
              <ArrowLeft className="w-4 h-4" /> Volver al Portafolio
            </button>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
                <img src={system.image} alt={system.name} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003B5C]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div>
                <span className="text-[#4FD1C5] font-black tracking-[0.3em] text-xs uppercase mb-4 block">SISTEMA · {system.ref}</span>
                <h1 className="text-5xl md:text-8xl font-black text-[#003B5C] mb-6 leading-none">{system.name}</h1>
                <p className="text-2xl text-slate-500 font-medium mb-10 leading-relaxed italic">"{system.fullDescription}"</p>

                <div className="flex flex-wrap gap-2 mb-12">
                  {system.technologies.slice(0, 4).map(tId => {
                    const t = techData.find(td => td.id === tId);
                    return (
                      <div key={tId} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 text-[10px] font-black text-[#003B5C] uppercase tracking-widest">
                        <Activity className="w-3 h-3 text-[#4FD1C5]" /> {t?.name}
                      </div>
                    );
                  })}
                </div>

                <div className="bg-slate-900 p-10 rounded-[2rem] text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#4FD1C5]/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <span className="font-black text-[#4FD1C5] uppercase text-[10px] tracking-widest block mb-1">Inversión Técnica</span>
                      <span className="text-4xl font-black">$59.90 <span className="text-sm font-normal text-slate-400">USD</span></span>
                    </div>
                    <div className="text-right">
                      <span className="font-black text-[#4FD1C5] uppercase text-[10px] tracking-widest block mb-1">Disponibilidad</span>
                      <span className="text-sm font-bold text-emerald-400">En Inventario</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-5 bg-[#4FD1C5] text-[#003B5C] rounded-xl font-black uppercase tracking-[0.2em] hover:bg-white hover:scale-[1.02] transition-all shadow-xl shadow-[#4FD1C5]/10"
                  >
                    Implementar en mi calzado
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2 space-y-20">
              <section>
                <h3 className="text-3xl font-black text-[#003B5C] mb-8 flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#e6fffb] rounded-full flex items-center justify-center text-[#003B5C]"><Info size={20} /></div>
                  ¿Qué es el Sistema {system.name}?
                </h3>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">{system.whatIs}</p>
                <div className="bg-[#003B5C] text-white p-8 rounded-3xl border-l-8 border-[#4FD1C5]">
                  <h4 className="font-black uppercase tracking-widest text-xs mb-4 text-[#4FD1C5]">Bio-Mimicry Insight</h4>
                  <p className="text-lg italic leading-relaxed">"{system.bioMimicry}"</p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-black text-[#003B5C] mb-8 uppercase tracking-tight">Arquitectura de Funcionamiento</h3>
                <div className="grid sm:grid-cols-3 gap-8">
                  {system.howItWorks.map((h, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-[#4FD1C5] mb-4"><Zap size={24} /></div>
                      <h4 className="font-black text-[#003B5C] mb-3 text-sm uppercase tracking-widest">{h.tech}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed italic">{h.func}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
                <h3 className="text-xl font-black text-[#003B5C] mb-8 uppercase tracking-widest flex items-center gap-3">
                  <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-red-500 shadow-sm">✕</span>
                  Lo que NO es {system.name}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {system.whatIsNot.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-500 font-medium">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-10">
              <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#4FD1C5]/5 rounded-full -mb-16 -mr-16 blur-2xl"></div>
                <h3 className="text-xl font-black mb-8 text-[#4FD1C5] uppercase tracking-widest">Ficha Técnica</h3>
                <div className="space-y-8">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-black block mb-2">Escenario Biomecánico</span>
                    <p className="font-bold text-lg">{system.scenario}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-black block mb-2">Sensation Factor</span>
                    <p className="font-bold text-lg">{system.sensation}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-black block mb-2">Especificaciones</span>
                    <p className="text-sm text-slate-300 leading-relaxed font-medium">{system.technicalSpecs}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-black block mb-2">Calzado Recomendado</span>
                    <p className="font-bold text-lg">{system.bestFootwear}</p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-10 rounded-[2.5rem] border border-emerald-100 relative group">
                <Sparkles className="absolute top-8 right-8 text-emerald-300 group-hover:rotate-12 transition-transform" size={24} />
                <h4 className="font-black text-[#003B5C] mb-4 uppercase tracking-widest text-xs">AI Summary (Quick View)</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-500">RESILIENCIA CARGA</span>
                    <span className="font-black text-[#003B5C]">{system.aiReadySummary.load}</span>
                  </div>
                  <div className="w-full bg-white h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full" style={{ width: system.aiReadySummary.load.includes('10/10') ? '100%' : '80%' }}></div>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-500">ABSORCIÓN IMPACTO</span>
                    <span className="font-black text-[#003B5C]">{system.aiReadySummary.impact}</span>
                  </div>
                  <div className="w-full bg-white h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full" style={{ width: system.aiReadySummary.impact.includes('10/10') ? '100%' : '70%' }}></div>
                  </div>
                </div>
                <p className="mt-8 text-sm text-emerald-800 font-medium leading-relaxed italic border-t border-emerald-200 pt-6">"{system.idealIf}"</p>
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
    <div className="container mx-auto px-6 text-center mb-20">
      <SectionHeader sub="SCIENCE & TECHNOLOGY VIEWER" title="Bio-mimetismo en cada capa: la ciencia detrás del movimiento." />
      <p className="text-slate-500 text-xl max-w-3xl mx-auto leading-relaxed">
        No fabricamos accesorios. Construimos ecosistemas de materiales que emulan funciones biológicas reales. Cada componente de Rana Walk® tiene un propósito de ingeniería definido.
      </p>
    </div>
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12">
        {techData.map(t => (
          <div
            key={t.id}
            onClick={() => navigate('techDetail', t.id)}
            className="group flex flex-col md:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 cursor-pointer"
          >
            <div className="md:w-1/3 bg-slate-900 flex flex-col items-center justify-center p-8 text-[#4FD1C5] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4FD1C5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="scale-[2.5] group-hover:rotate-12 transition-transform duration-700 relative z-10">{t.icon}</div>
            </div>
            <div className="md:w-2/3 p-10">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] block mb-2">{t.bioFunction}</span>
              <h3 className="text-3xl font-black text-[#003B5C] mb-2">{t.name}</h3>
              <p className="text-[#4FD1C5] font-bold text-xs mb-4 uppercase tracking-widest">{t.claim}</p>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed italic">{t.description}</p>
              <span className="text-[#003B5C] font-black text-[10px] uppercase tracking-[0.2em] group-hover:translate-x-4 flex items-center gap-2 transition-all">
                Análisis Comparativo <ArrowRight className="w-4 h-4" />
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
    <div className="py-24 animate-fadeIn">
      <div className="container mx-auto px-6 max-w-5xl">
        <button onClick={() => navigate('tech')} className="flex items-center gap-2 text-slate-400 hover:text-[#003B5C] mb-12 font-black uppercase text-xs tracking-[0.3em] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Portafolio de Ciencia
        </button>

        <div className="flex items-center gap-8 mb-16">
          <div className="w-24 h-24 bg-slate-900 rounded-[2rem] flex items-center justify-center text-[#4FD1C5] shadow-2xl">
            {React.cloneElement(tech.icon, { size: 40 })}
          </div>
          <div>
            <span className="text-[10px] font-black text-[#4FD1C5] uppercase tracking-[0.4em] block mb-2">{tech.bioFunction}</span>
            <h1 className="text-4xl md:text-7xl font-black text-[#003B5C] leading-none">{tech.name}</h1>
            <p className="text-lg text-slate-400 font-bold uppercase tracking-widest mt-2">{tech.claim}</p>
          </div>
        </div>

        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 mb-20">
          <div className="p-12 border-b border-slate-100 bg-slate-50/50">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Especificación de Ingeniería</h2>
            <p className="text-2xl text-[#003B5C] leading-relaxed font-medium italic">"{tech.description}"</p>
          </div>

          <div className="p-0 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white border-b border-slate-100">
                  <th className="px-12 py-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 border-r border-slate-100">Variable Crítica</th>
                  <th className="px-12 py-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Solución Genérica (Gel/Foam)</th>
                  <th className="px-12 py-8 text-[10px] font-black uppercase tracking-[0.3em] text-[#003B5C] bg-[#4FD1C5]/5">Criterio Rana Walk®</th>
                </tr>
              </thead>
              <tbody>
                {tech.comparison.map((row, i) => (
                  <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors group">
                    <td className="px-12 py-8 font-black text-[#003B5C] uppercase text-xs tracking-widest border-r border-slate-100">{row.aspect}</td>
                    <td className="px-12 py-8 text-slate-500 font-medium italic text-sm">{row.generic}</td>
                    <td className="px-12 py-8 font-black text-[#003B5C] bg-[#4FD1C5]/5 text-sm">{row.rana}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-slate-900 p-16 rounded-[4rem] text-center text-white relative overflow-hidden shadow-2xl shadow-[#003B5C]/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#4FD1C5]/10 rounded-full -mr-32 -mt-32 blur-[100px]"></div>
          <Zap className="mx-auto text-[#4FD1C5] mb-8" size={48} />
          <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">¿Quieres ver esta tecnología en acción?</h3>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            {tech.name} no actúa de forma aislada. Forma parte de un ecosistema biomecánico diseñado para sostener tu rendimiento en jornadas críticas.
          </p>
          <button onClick={() => navigate('systems')} className="bg-[#4FD1C5] text-[#003B5C] px-12 py-5 rounded-2xl font-black uppercase tracking-[0.3em] hover:bg-white hover:scale-105 transition-all shadow-xl shadow-[#4FD1C5]/20">
            Explorar Sistemas Integrados
          </button>
        </div>
      </div>
    </div>
  );
};

const DistributorsView = () => (
  <div className="py-24 animate-fadeIn">
    <div className="container mx-auto px-6">
      <SectionHeader sub="PARTNERSHIP & B2B" title="Escala con el Estándar de Bio-Ingeniería" center={false} />
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-10">
          <p className="text-xl text-slate-600 leading-relaxed">
            Rana Walk® busca socios estratégicos que deseen diferenciar su portafolio mediante <strong>sistemas biomecánicos</strong> diseñados para condiciones reales. No ofrecemos productos genéricos; proporcionamos una arquitectura de valor para distribuidores que buscan soluciones consistentes y escalables.
          </p>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[#e6fffb] rounded-xl flex items-center justify-center shrink-0">
                <Box className="text-[#003B5C]" />
              </div>
              <div>
                <h4 className="font-black text-[#003B5C] uppercase tracking-widest text-sm mb-2">Portafolio Diferenciado</h4>
                <p className="text-slate-500 text-sm italic">Accede a sistemas con tecnologías protegidas (LeapCore™, ThinBoom™) que no compiten con el mercado masivo de gel.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[#e6fffb] rounded-xl flex items-center justify-center shrink-0">
                <BookOpen className="text-[#003B5C]" />
              </div>
              <div>
                <h4 className="font-black text-[#003B5C] uppercase tracking-widest text-sm mb-2">Capacitación Técnica</h4>
                <p className="text-slate-500 text-sm italic">Programas de entrenamiento en biomecánica podal para tu equipo de ventas y expertos en salud.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[#e6fffb] rounded-xl flex items-center justify-center shrink-0">
                <Layout className="text-[#003B5C]" />
              </div>
              <div>
                <h4 className="font-black text-[#003B5C] uppercase tracking-widest text-sm mb-2">Herramientas B2B</h4>
                <p className="text-slate-500 text-sm italic">Acceso a nuestro consultor de IA para facilitar la recomendación de sistemas en punto de venta.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 p-10 rounded-3xl shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4FD1C5]/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Solicitar Dossier Comercial</h3>
          <p className="text-slate-400 text-sm mb-8 italic">Únete al ecosistema Rana Walk®</p>
          <form className="space-y-5" onSubmit={e => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Empresa / Institución" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4FD1C5]" />
              <input type="text" placeholder="País / Región" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4FD1C5]" />
            </div>
            <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#4FD1C5]">
              <option value="" className="bg-slate-900">Tipo de Negocio</option>
              <option value="distribuidor" className="bg-slate-900">Distribuidor Mayorista</option>
              <option value="retail" className="bg-slate-900">Retail Especializado</option>
              <option value="salud" className="bg-slate-900">Salud & Ortopedia</option>
            </select>
            <input type="email" placeholder="Email corporativo" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4FD1C5]" />
            <button className="w-full py-4 bg-[#4FD1C5] text-[#003B5C] rounded-xl font-black uppercase tracking-widest hover:bg-[#3db8ae] transition-colors shadow-lg">Enviar Solicitud</button>
            <p className="text-[10px] text-center text-slate-500 uppercase tracking-widest mt-4">Verificaremos tu identidad corporativa en 24-48h.</p>
          </form>
        </div>
      </div>
    </div>
  </div>
);

const SupportView = () => {
  const sections = [
    {
      title: "1. Selección y Calce (Fitment)",
      faqs: [
        { q: "¿Cómo sé qué talla elegir?", a: "Nuestros sistemas están diseñados para ser recortados y adaptados con precisión. Recomendamos seleccionar la talla que incluya tu medida habitual y utilizar la plantilla original de tu calzado como guía para un recorte exacto." },
        { q: "¿Debo remover la plantilla original de mi zapato?", a: "Sí. Para que tecnologías como LeapCore™ y Arch Support funcionen correctamente, deben estar en contacto directo con la base del calzado. Colocarlas sobre plantillas viejas altera la palanca mecánica y reduce el espacio interno." },
        { q: "¿Qué sistema cabe en zapatos ajustados?", a: "El sistema VELOX es el único diseñado con ThinBoom™ de perfil ultradelgado, optimizado específicamente para calzado de vestir o sneakers con espacio interno limitado." }
      ]
    },
    {
      title: "2. Uso y Adaptación",
      faqs: [
        { q: "¿Existe un periodo de adaptación?", a: "Al ser sistemas de Integridad Estructural, es normal que sientas una firmeza inusual durante los primeros 2 a 4 días. Tu pie se está realineando a una base sólida. Si sientes molestias leves, úsalas de forma progresiva (2 horas el primer día, 4 el segundo) hasta completar la jornada." },
        { q: "¿Por qué las siento más 'duras' que las plantillas de gel?", a: "La suavidad del gel es una 'suavidad efímera' que colapsa. Lo que sientes en Rana Walk® es Resiliencia Estructural. Estamos emulamos el soporte óseo, no solo el tejido blando, para garantizar que el soporte no desaparezca tras dos horas de carga." }
      ]
    },
    {
      title: "3. Mantenimiento del Ecosistema",
      faqs: [
        { q: "¿Cómo debo limpiar mis Rana Walk®?", a: "La membrana NanoSpread™ es técnica y delicada. No laves tus sistemas en lavadora ni los sumerjas en agua hirviendo. Usa un paño húmedo con jabón neutro y deja secar al aire (nunca bajo el sol directo o fuentes de calor artificial, ya que pueden alterar las propiedades del PU)." },
        { q: "¿Cuál es la vida útil del sistema?", a: "Dependiendo de la intensidad de carga y el entorno, nuestras plataformas mantienen su integridad biomecánica entre 8 y 12 meses. Aunque visualmente se vean bien, los polímeros de ingeniería tienen un ciclo de fatiga tras el cual pierden su capacidad de retorno energético." }
      ]
    },
    {
      title: "4. Garantía y Devoluciones",
      faqs: [
        { q: "¿Qué cubre la garantía técnica?", a: "Cubrimos cualquier defecto de manufactura o delaminación prematura de los materiales (como el Arch Support de vinilo o la membrana NanoSpread™) bajo condiciones de uso normal. No cubre desgaste por uso abrasivo o recortes incorrectos fuera de las guías." }
      ]
    }
  ];

  return (
    <div className="py-24 animate-fadeIn">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader sub="Centro de Ayuda y Soporte Técnico" title="Resolviendo tus dudas con precisión biomecánica" center={false} />
        <p className="text-xl text-slate-600 mb-12">En Rana Walk®, entendemos que la transición a un sistema de alto desempeño puede generar preguntas. Aquí encontrarás las respuestas técnicas necesarias para optimizar tu experiencia.</p>
        <div className="space-y-12">
          {sections.map((sec, i) => (
            <div key={i}>
              <h3 className="text-2xl font-black text-[#003B5C] mb-6 border-b border-slate-100 pb-2">{sec.title}</h3>
              <div className="grid gap-6">
                {sec.faqs.map((faq, j) => (
                  <div key={j} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-[#003B5C] mb-3">{faq.q}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{faq.a}</p>
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
          <h3 className="text-xl font-black text-[#003B5C] mb-4">1. PROPIEDAD INTELECTUAL Y PATENTES</h3>
          <p className="text-slate-600 mb-4 font-bold uppercase text-xs tracking-widest">Rana Walk®: Una Arquitectura Protegida.</p>
          <p className="text-slate-600 mb-6">El contenido, diseño, algoritmos y tecnologías presentes en este ecosistema son propiedad exclusiva de Rana Walk.</p>
          <ul className="space-y-4 text-sm text-slate-500">
            <li className="bg-slate-50 p-4 rounded-xl border-l-4 border-[#003B5C]">
              <strong>Marcas Registradas:</strong> Rana Walk®, el eslogan "Name it, leap forward.", LeapCore™, ThinBoom™, NanoSpread™, ShockSphere™, GOLIATH, ORBIS y el logotipo de la rana son marcas comerciales protegidas internacionalmente.
            </li>
            <li className="bg-slate-50 p-4 rounded-xl border-l-4 border-[#003B5C]">
              <strong>Patentes y Propiedad Industrial:</strong> Los diseños de los sistemas biomecánicos, las geometrías de las matrices de poliuretano y el uso de Elastómeros de Expansión Supercrítica están protegidos por leyes de propiedad industrial.
            </li>
            <li className="bg-slate-50 p-4 rounded-xl border-l-4 border-[#003B5C]">
              <strong>Licencias de Terceros:</strong> PORON® XRD® es una marca registrada de Rogers Corporation. Su uso se rige bajo acuerdos de licencia técnica de materiales.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-black text-[#003B5C] mb-4">2. TÉRMINOS DE SERVICIO (INGENIERÍA Y USO)</h3>
          <p className="text-slate-600 mb-6 font-bold uppercase text-xs tracking-widest">Contrato de Rendimiento Biomecánico.</p>
          <ul className="space-y-3 text-sm text-slate-500">
            <li><strong>Naturaleza del Producto:</strong> Nuestros sistemas son dispositivos biomecánicos de soporte. No son medicamentos ni sustituyen el consejo de un médico especialista en casos de patologías clínicas graves.</li>
            <li><strong>Protocolo de Adaptación:</strong> El usuario reconoce que existe un periodo de readaptación postural de 2 a 4 días. El uso inicial debe ser progresivo.</li>
            <li><strong>Vida Útil Técnica:</strong> Los polímeros de ingeniería tienen una vida útil de rendimiento óptimo (8-12 meses). El uso más allá de este periodo es responsabilidad del usuario.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-black text-[#003B5C] mb-4">3. POLÍTICA DE PRIVACIDAD</h3>
          <p className="text-slate-600 mb-6 font-bold uppercase text-xs tracking-widest">Protección de Datos en el Life Sciences Hub.</p>
          <ul className="space-y-3 text-sm text-slate-500">
            <li><strong>Uso de IA:</strong> Tu interacción con nuestro consultor impulsado por Google Gemini se utiliza para mejorar la precisión de las recomendaciones. No vendemos tus datos a terceros.</li>
            <li><strong>Seguridad:</strong> Como empresa operando bajo los estándares del Life Sciences Hub de Costa Rica, aplicamos protocolos de seguridad de datos de grado industrial.</li>
            <li><strong>Derechos ARCO:</strong> Tienes derecho a acceder, rectificar o cancelar el uso de tus datos escribiendo a leap@ranawalk.com.</li>
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
          <Sparkles size={18} /> CONSULTOR
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-[#003B5C]">DATA-DRIVEN <span className="text-emerald-600">SELECTION</span>.</h2>
        <p className="text-slate-500 font-medium text-xl max-w-2xl mx-auto">Nuestro consultor basado en Gemini analizará tus variables de <strong>carga, impacto y tipo de calzado</strong> para recomendarte el sistema de bio-mimetismo ideal.</p>
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
        Eres el Consultor de Bio-mimetismo Podal de Rana Walk®.
        Tu objetivo es prescribir el sistema ideal basado exclusivamente en la arquitectura de nuestros 4 sistemas.
        
        CONTEXTO DE LOS SISTEMAS:
        1. GOLIATH (Resiliencia Estructural): Para entornos de ALTA CARGA (personas pesadas o con carga adicional), impacto repetitivo certificado y jornadas industriales de +10-12h. Usa PORON® XRD®. Calzado industrial/táctico.
        2. VELOX (Agilidad de Perfil Bajo): El único para calzado AJUSTADO o de VESTIR. 100% ThinBoom™ (E-TPU supercrítico). Prioriza retorno de energía y agilidad sobre la amortiguación pesada.
        3. ORBIS (Equilibrio Natural): Uso DIARIO URBANO. Chasis LeapCore™ de densidad media. Para el trabajador de oficina o caminante urbano que busca estabilidad postural.
        4. LEOPARD (Estabilidad Adaptable): Para terrenos IRREGULARES (Outdoor ligero) y usuarios con fatiga de arco medial. Tres perfiles de altura dinámica.
        
        REGLAS DE RESPUESTA:
        - Empieza siempre con un análisis breve de las variables Carga e Impacto detectadas en el relato del usuario.
        - Sé directo: Indica qué sistema debe usar y por qué, citando una de nuestras tecnologías (LeapCore™, ThinBoom™, NanoSpread™, etc).
        - Usa un tono de ingeniería biomimética: profesional, preciso, empoderador.
        - No menciones marcas de la competencia, solo el estándar Rana Walk®.
        - Si el usuario menciona problemas médicos graves, recomienda consultar a un especialista además de usar el sistema.
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