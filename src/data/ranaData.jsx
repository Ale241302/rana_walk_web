import {
    Activity, Zap, Droplets, Shield, ShieldCheck, FileText
} from 'lucide-react';
import {
    LeapCoreIcon, ThinBoomIcon, NanoSpreadIcon, ShockIcon, PoronIcon, ArchSupportIcon
} from '../components/icons/TechIcons';

export const systemsData = [
    {
        id: 'goliath',
        name: 'GOLIATH',
        ref: 'PODER-FUERZA-SYS',
        tagline: 'Protección absoluta para el trabajo pesado',
        shortDesc: 'Diseñado para quienes exigen el máximo de su cuerpo. Combina la resistencia para +110kg con un escudo contra impactos y propulsión en el antepié.',
        color: 'bg-slate-800',
        accent: '#1e293b',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
        fullDescription: 'Protección absoluta para el trabajo pesado. Diseñado para quienes exigen el máximo de su cuerpo, sin permitir que el peso sea un límite.',
        whatIs: 'GOLIATH® es el sistema de máxima resistencia de Rana Walk®. Combina la capacidad de carga para usuarios de +110kg con un escudo PORON® XRD® contra impactos críticos y propulsión ThinBoom™ en el antepié. Ideal para operarios y deportistas que no permiten que el peso sea un límite.',
        useCases: [
            'Usuarios de +110kg que requieren máximo soporte',
            'Trabajo pesado e industrial (+12 horas)',
            'Superficies de alta dureza e impacto constante',
            'Calzado de seguridad y botas tácticas'
        ],
        userProfile: 'El Profesional Industrial y Deportista que exige el máximo de su cuerpo. Operarios, policías y usuarios que requieren un cimiento sólido que no se deforme con el uso rudo.',
        technologies: ['leapcore', 'poron', 'thinboom', 'nanospread', 'archsupport'],
        howItWorks: [
            { tech: 'LeapCore™ (Fisiología de Megafauna)', func: 'Chasis de bi-densidad que elimina puntos de presión dolorosos y soporta hasta 110kg sin deformarse por más de 8 horas.' },
            { tech: 'PORON® XRD® (Escudo Inteligente)', func: 'Protección total para tus articulaciones. Absorbe el 90% del impacto seco contra el concreto.' },
            { tech: 'ThinBoom™ (Propulsión)', func: 'Funciona como una catapulta bajo tus pies, recuperando hasta el 80% de la energía de cada paso.' },
            { tech: 'NanoSpread™ (Homeostasis Reptiliana)', func: 'Pies frescos sin importar el clima. Regula tu temperatura hasta en 5°C, evitando ampollas y olores.' },
            { tech: 'Arch Support (Exoesqueleto)', func: 'Base de vinilo de alta tenacidad que previene el colapso del arco y optimiza la distribución de carga.' }
        ],
        bioMimicry: 'Al emular la pisada del elefante, la estructura de bi-densidad LeapCore™ elimina los puntos de presión dolorosos. Mientras la capa superior te da una bienvenida suave, la base firme soporta hasta 110kg sin deformarse, manteniendo tu arco activo y sano por más de 8 horas. PORON® XRD® protege tus articulaciones como el pájaro carpintero protege su cerebro, evitando que las vibraciones dañinas viajen por tu esqueleto.',
        scenario: 'Diseñado para alta carga, impacto repetitivo y jornadas intensivas de pie en superficies duras.',
        sensation: 'Soporte firme, sólido y de máxima protección contra el impacto.',
        technicalSpecs: 'Chasis de LeapCore™ bi-densidad, PORON® XRD® de Rogers Corp (USA), ThinBoom™ E-TPU alto rebote, NanoSpread™ nanotecnología textil y Arch Support de vinilo rígido.',
        aiReadySummary: { impact: '10/10', load: '10/10', impulse: '8/10', tech: 'LeapCore™ + PORON® XRD® + ThinBoom™ + NanoSpread™ + Arch Support' },
        bestFootwear: 'Botas de seguridad, calzado táctico y calzado robusto con espacio interno estándar o amplio.',
        whatIsNot: ['No es un sistema blando de amortiguación pasiva', 'No es una solución de confort efímero', 'No es para calzado de perfil bajo'],
        idealIf: 'Si eres un profesional industrial, de seguridad o un deportista que requiere protección absoluta y un cimiento sólido que no se deforme con el uso rudo.'
    },
    {
        id: 'velox',
        name: 'VELOX',
        ref: 'AGILIDAD-ENERGIA-SYS',
        tagline: 'Velocidad y confort en cada paso',
        shortDesc: 'La solución perfecta para calzado de vestir o deportivo de bajo perfil. Todo el retorno de energía de ThinBoom™ que te mantiene fresco y ágil.',
        color: 'bg-red-700',
        accent: '#dc2626',
        image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&q=80&w=800',
        fullDescription: 'Velocidad y confort en cada paso. La solución perfecta para calzado de vestir o deportivo de bajo perfil que te mantiene fresco y ágil durante todo el día.',
        whatIs: 'VELOX es el sistema de agilidad y energía de Rana Walk®. Construido íntegramente en ThinBoom™, ofrece todo el retorno de energía en un diseño delgado. Menos esfuerzo, más impulso: tus músculos trabajan menos y tú te cansas menos.',
        useCases: [
            'Calzado de vestir o deportivo de bajo perfil',
            'Jornadas activas de alta movilidad',
            'Profesionales que caminan todo el día',
            'Usuarios que buscan agilidad pura'
        ],
        userProfile: 'El Profesional Urbano y Usuario Dinámico que viste calzado formal o ajustado y prioriza la respuesta, la eficiencia y la agilidad total.',
        technologies: ['thinboom', 'nanospread'],
        howItWorks: [
            { tech: 'ThinBoom™ (El Tendón Reactivo)', func: 'Funciona como una catapulta bajo tus pies. Recupera hasta el 80% de la energía de cada paso.' },
            { tech: 'NanoSpread™ (Homeostasis Reptiliana)', func: 'Pies frescos sin importar el clima. Regula tu temperatura hasta en 5°C y mantiene tus pies secos.' },
            { tech: 'Perfil Ultradelgado', func: 'Respuesta dinámica sin añadir volumen, ideal para calzado de espacio crítico.' },
            { tech: 'Flexibilidad Total', func: 'Agilidad pura para quienes no se detienen. Emula la elasticidad de un tendón de alto performance.' }
        ],
        bioMimicry: 'ThinBoom™ funciona como una catapulta bajo tus pies. Al recuperar hasta el 80% de la energía de cada paso, tus músculos trabajan menos y tú te cansas menos. Es agilidad pura para quienes no se detienen. Al ser una plataforma altamente reactiva, permite que el pie se mueva con total libertad, eliminando la pérdida de energía asociada a materiales pasivos.',
        scenario: 'Ideal para calzado de espacio reducido y jornadas activas que requieren desplazamientos rápidos.',
        sensation: 'Reactiva, impulsiva, fresca y totalmente flexible.',
        technicalSpecs: 'Arquitectura 100% ThinBoom™ + NanoSpread™ nanotecnología textil.',
        aiReadySummary: { impact: '6/10', load: '6/10', space: '10/10 (Máximo Espacio)', tech: '100% ThinBoom™ + NanoSpread™' },
        bestFootwear: 'Zapatos de vestir, sneakers ajustados y calzado urbano de perfil bajo.',
        whatIsNot: ['No es para cargas extremas de +110kg', 'No tiene chasis rígido', 'No es para botas industriales'],
        idealIf: 'Si buscas velocidad y confort en un perfil delgado que no altere el calce original de tu zapato formal o deportivo.'
    },
    {
        id: 'orbis',
        name: 'ORBIS',
        ref: 'INTELIGENCIA-CONFORT-SYS',
        tagline: 'Equilibrio y salud postural diaria',
        shortDesc: 'Para el profesional que camina su jornada completa. Este sistema corrige y estabiliza tu postura, eliminando el cansancio al final del día.',
        color: 'bg-sky-600',
        accent: '#0ea5e9',
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800',
        fullDescription: 'Equilibrio y salud postural diaria. Para el profesional que camina su jornada completa, eliminando el cansancio al final del día mediante un soporte de arco que nunca falla.',
        whatIs: 'ORBIS es el sistema de inteligencia y confort de Rana Walk®. Diseñado para el profesional que camina su jornada completa. Corrige y estabiliza tu postura mediante un soporte de arco que nunca falla, eliminando el cansancio al final del día.',
        useCases: [
            'Profesionales que caminan jornadas completas',
            'Corrección y estabilización postural',
            'Uso diario prolongado en oficina o ciudad',
            'Prevención de fatiga al final del día'
        ],
        userProfile: 'El Profesional Urbano que camina su jornada completa y necesita equilibrio y salud postural sin sentir rigidez ni invasividad.',
        technologies: ['leapcore', 'nanospread', 'shocksphere'],
        howItWorks: [
            { tech: 'LeapCore™ (Fisiología de Megafauna)', func: 'Estructura de bi-densidad que mantiene tu arco activo y sano, eliminando puntos de presión dolorosos.' },
            { tech: 'NanoSpread™ (Homeostasis Reptiliana)', func: 'Pies frescos sin importar el clima. Expulsa el sudor rápidamente evitando ampollas y olores.' },
            { tech: 'ShockSphere™', func: 'Absorción focalizada que disipa irregularidades urbanas sin afectar la estabilidad postural.' }
        ],
        bioMimicry: 'Al emular la pisada del elefante, LeapCore™ proporciona un soporte que corrige y estabiliza tu postura sin sobrecorregir. NanoSpread™ imita la piel de los reptiles para regular tu temperatura hasta en 5°C, manteniendo tus pies secos y evitando ampollas, olores y la incomodidad del calor extremo o el frío persistente.',
        scenario: 'Equilibrio y salud postural para profesionales que caminan jornadas completas.',
        sensation: 'Apoyo equilibrado, corrección postural suave y frescura constante.',
        technicalSpecs: 'LeapCore™ de bi-densidad + NanoSpread™ nanotecnología textil + ShockSphere™.',
        aiReadySummary: { impact: '7/10', load: '8/10', space: '9/10', tech: 'LeapCore™ + NanoSpread™ + ShockSphere™' },
        bestFootwear: 'Calzado casual, urbano, de oficina y sneakers estándar.',
        whatIsNot: ['No es para impacto industrial de +12h', 'No es para cargas extremas de +110kg', 'No es para calzado outdoor extremo'],
        idealIf: 'Si eres un profesional que camina su jornada completa y busca equilibrio y salud postural sin cansancio al final del día.'
    },
    {
        id: 'leopard',
        name: 'LEOPARD',
        ref: 'FLEXIBILIDAD-LIBERTAD-SYS',
        tagline: 'Adaptabilidad natural a tu anatomía',
        shortDesc: 'Con opciones de arco variable, este sistema se moldea a ti. Ofrece flexibilidad lateral total y absorción dinámica como extensión natural de tu pie.',
        color: 'bg-amber-600',
        accent: '#d97706',
        image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800',
        fullDescription: 'Adaptabilidad natural a tu anatomía. Con opciones de arco variable, se moldea a ti ofreciendo una flexibilidad lateral total y absorción dinámica.',
        whatIs: 'LEOPARD es el sistema de flexibilidad y libertad de Rana Walk®. Con opciones de arco variable, se moldea a tu anatomía única. Ofrece una flexibilidad lateral total y una absorción dinámica que se siente como una extensión natural de tu propio pie.',
        useCases: [
            'Usuarios con necesidades de arco personalizadas',
            'Actividades que requieren flexibilidad lateral',
            'Terrenos mixtos e irregulares',
            'Deportes y actividades dinámicas'
        ],
        userProfile: 'El Usuario Activo que necesita adaptabilidad natural y libertad de movimiento. Busca un sistema que se moldee a su anatomía única.',
        technologies: ['leapcore', 'shocksphere', 'nanospread', 'archsupport'],
        howItWorks: [
            { tech: 'LeapCore™ Adaptable', func: 'Geometría dinámica con opciones de arco variable que se moldea a tu anatomía única.' },
            { tech: 'ShockSphere™', func: 'Absorción dinámica que se siente como una extensión natural de tu propio pie.' },
            { tech: 'NanoSpread™ (Homeostasis Reptiliana)', func: 'Regula tu temperatura hasta en 5°C, manteniendo tus pies secos y frescos.' },
            { tech: 'Arch Support Variable', func: 'Opciones de arco que se adaptan a tu anatomía para una flexibilidad lateral total.' }
        ],
        bioMimicry: 'LEOPARD emula la agilidad felina con su arquitectura que no impone una forma, sino que se moldea a ti. Ofrece una flexibilidad lateral total y una absorción dinámica que se siente como una extensión natural de tu propio pie. NanoSpread™ imita la piel de los reptiles para mantener tus pies frescos sin importar el clima.',
        scenario: 'Adaptabilidad y flexibilidad para actividades que requieren libertad de movimiento.',
        sensation: 'Flexible, adaptable, libre y como una extensión natural de tu pie.',
        technicalSpecs: 'LeapCore™ Adaptable con arco variable + ShockSphere™ + NanoSpread™.',
        aiReadySummary: { impact: '9/10', load: '9/10', space: '8/10', tech: 'LeapCore™ Adaptable + ShockSphere™ + NanoSpread™' },
        bestFootwear: 'Calzado outdoor, deportivo, botas y calzado urbano robusto.',
        whatIsNot: ['No es para uso estático prolongado', 'No es un soporte rígido fijo', 'No es para calzado ultra-ajustado'],
        idealIf: 'Si buscas adaptabilidad natural y libertad de movimiento con un sistema que se moldee a tu anatomía única.'
    }
];

export const techData = [
    {
        id: 'leapcore',
        name: 'LEAPCORE™',
        claim: 'Fisiología de Megafauna',
        icon: <LeapCoreIcon />,
        description: 'Al emular la pisada del elefante, esta estructura de bi-densidad elimina los puntos de presión dolorosos. Mientras la capa superior te da una bienvenida suave, la base firme soporta hasta 110kg sin deformarse.',
        bioFunction: 'Manejo de la fatiga plantar mediante emulación de pisada de elefante.',
        engineering: 'Chasis de PU de doble densidad con memoria geométrica para una distribución de carga extrema.',
        keyAttribute: 'Mantiene tu arco activo y sano por más de 8 horas soportando hasta 110kg.',
        benefit: 'Manejo de la fatiga plantar. La capa superior te da una bienvenida suave mientras la base firme soporta hasta 110kg sin deformarse, manteniendo tu arco activo y sano por más de 8 horas.',
        science: 'Chasis de PU de doble densidad con memoria geométrica para una distribución de carga extrema.',
        comparison: [
            { aspect: 'Puntos de Presión', generic: 'Dolor y fatiga plantar', rana: 'Elimina puntos de presión dolorosos' },
            { aspect: 'Soporte', generic: 'Colapsa con el peso', rana: 'Soporta hasta 110kg sin deformarse' },
            { aspect: 'Duración', generic: 'Dolor tras pocas horas', rana: 'Arco activo y sano +8 horas' }
        ]
    },
    {
        id: 'thinboom',
        name: 'THINBOOM™',
        claim: 'El Tendón Reactivo',
        icon: <ThinBoomIcon />,
        description: 'Funciona como una catapulta bajo tus pies. Al recuperar hasta el 80% de la energía de cada paso, tus músculos trabajan menos y tú te cansas menos. Es agilidad pura para quienes no se detienen.',
        bioFunction: 'Menos esfuerzo, más impulso mediante retorno de energía.',
        engineering: 'Matriz de E-TPU de alto rebote que transforma el impacto del apoyo en fuerza de despegue.',
        keyAttribute: 'Recupera hasta el 80% de la energía de cada paso reduciendo el esfuerzo muscular.',
        benefit: 'Menos esfuerzo, más impulso. Al recuperar hasta el 80% de la energía de cada paso, tus músculos trabajan menos y tú te cansas menos. Es agilidad pura para quienes no se detienen.',
        science: 'Matriz de E-TPU de alto rebote que transforma el impacto del apoyo en fuerza de despegue.',
        comparison: [
            { aspect: 'Energía', generic: 'Amortiguación pasiva (absorbe)', rana: 'Catapulta reactiva (devuelve 80%)' },
            { aspect: 'Esfuerzo', generic: 'Músculos trabajan más', rana: 'Músculos trabajan menos' },
            { aspect: 'Sensación', generic: 'Cansancio progresivo', rana: 'Agilidad pura todo el día' }
        ]
    },
    {
        id: 'poron',
        name: 'PORON® XRD®',
        claim: 'Escudo de Absorción Inteligente',
        icon: <PoronIcon />,
        description: 'Protección total para tus articulaciones. Así como el pájaro carpintero protege su cerebro, este material protege tus rodillas y cadera. Absorbe el 90% del impacto seco contra el concreto.',
        bioFunction: 'Protección total para articulaciones como rodillas y cadera.',
        engineering: 'Polímero viscoelástico de Rogers Corp (USA) que se endurece al impacto y se relaja al caminar.',
        keyAttribute: 'Absorbe el 90% del impacto seco, evitando que las vibraciones dañinas viajen por tu esqueleto.',
        benefit: 'Protección total para tus articulaciones. Absorbe el 90% del impacto seco contra el concreto, evitando que las vibraciones dañinas viajen por tu esqueleto hacia rodillas y cadera.',
        science: 'Polímero viscoelástico de Rogers Corp (USA) que se endurece al impacto y se relaja al caminar.',
        comparison: [
            { aspect: 'Protección', generic: 'Pasiva / Limitada', rana: 'Absorbe 90% del impacto' },
            { aspect: 'Articulaciones', generic: 'Vibraciones dañan rodillas', rana: 'Escudo para rodillas y cadera' },
            { aspect: 'Certificación', generic: 'No certificada', rana: 'Rogers Corp (USA) patentado' }
        ]
    },
    {
        id: 'nanospread',
        name: 'NANOSPREAD™',
        claim: 'Homeostasis Reptiliana',
        icon: <NanoSpreadIcon />,
        description: 'Pies frescos, sin importar el clima. Al imitar la piel de los reptiles, esta tecnología regula tu temperatura hasta en 5°C. Mantiene tus pies secos al expulsar el sudor rápidamente.',
        bioFunction: 'Pies frescos sin importar el clima mediante regulación térmica de 5°C.',
        engineering: 'Nanotecnología textil de capilaridad activa para el control térmico y evaporación acelerada.',
        keyAttribute: 'Regula temperatura en 5°C, evitando ampollas, olores y la incomodidad del calor extremo o frío persistente.',
        benefit: 'Pies frescos, sin importar el clima. Regula tu temperatura hasta en 5°C. Mantiene tus pies secos al expulsar el sudor rápidamente, evitando ampollas, olores y la incomodidad del calor extremo o el frío persistente.',
        science: 'Nanotecnología textil de capilaridad activa para el control térmico y evaporación acelerada.',
        comparison: [
            { aspect: 'Clima', generic: 'Pies calientes o fríos', rana: 'Regulación térmica de 5°C' },
            { aspect: 'Sudor', generic: 'Absorbe y retiene humedad', rana: 'Expulsa sudor rápidamente' },
            { aspect: 'Confort', generic: 'Ampollas y olores', rana: 'Pies secos y frescos siempre' }
        ]
    },
    {
        id: 'shocksphere',
        name: 'ShockSphere™',
        claim: 'Absorción Felina Focalizada',
        icon: <ShockIcon />,
        description: 'Absorción inteligente en puntos de presión crítica. Emula las almohadillas de estabilidad felina para disipar impactos de forma focalizada sin comprometer la estabilidad.',
        bioFunction: 'Emula las almohadillas de estabilidad felina.',
        engineering: 'Poliuretano Micro-Celular de Baja Histéresis con geometría esférica.',
        keyAttribute: 'Adaptación dinámica al terreno y control del centro de gravedad.',
        benefit: 'Absorción inteligente en los puntos críticos de presión. Disipa impactos de forma focalizada sin comprometer tu estabilidad ni equilibrio.',
        science: 'Poliuretano Micro-Celular de Baja Histéresis con geometría esférica para disipación focalizada.',
        comparison: [
            { aspect: 'Impacto', generic: 'Amortiguación inestable', rana: 'Disipación focalizada felina' },
            { aspect: 'Terreno', generic: 'Transmite irregularidades', rana: 'Adaptación dinámica al suelo' },
            { aspect: 'Fatiga', generic: 'Carga articular alta', rana: 'Neutralización de vibraciones' }
        ]
    },
    {
        id: 'archsupport',
        name: 'Arch Support',
        claim: 'El Exoesqueleto de Soporte Anti-Colapso',
        icon: <ArchSupportIcon />,
        description: 'Exoesqueleto reforzado de vinilo de alta tenacidad que previene el colapso del arco medial ante la fatiga extrema de jornadas intensivas.',
        bioFunction: 'Emula el soporte estructural de un exoesqueleto biomecánico.',
        engineering: 'Polímero de Vinilo de Alta Tenacidad reforzado para soporte inquebrantable.',
        keyAttribute: 'Base de soporte inquebrantable que optimiza la distribución de carga del arco.',
        benefit: 'Soporte de arco que nunca falla. Previene el colapso del arco medial durante jornadas intensivas, optimizando la distribución de carga.',
        science: 'Polímero de Vinilo de Alta Tenacidad reforzado con geometría de exoesqueleto.',
        comparison: [
            { aspect: 'Arco', generic: 'Soporte blando (cede)', rana: 'Refuerzo externo inquebrantable' },
            { aspect: 'Durabilidad', generic: 'Se deforma con el uso', rana: 'Integridad mecánica prolongada' },
            { aspect: 'Palanca', generic: 'Pérdida de potencia', rana: 'Transferencia de energía óptima' }
        ]
    }
];

// Información de confianza - Costa Rica MedTech Hub
export const trustData = {
    title: 'Ingeniería de Clase Mundial',
    subtitle: 'Costa Rica MedTech Hub',
    description: 'Rana Walk® no es solo una plantilla; es un dispositivo biomecánico desarrollado en el corazón del Hub de Dispositivos Médicos de Costa Rica.',
    details: 'Nuestra dirección combina la visión estratégica de economistas con la maestría técnica de expertos con 10 años en el sector del calzado. El resultado es un producto validado internacionalmente que garantiza que tu salud articular está en las mejores manos.',
    highlights: [
        'Dispositivo biomecánico de clase mundial',
        'Desarrollado en el Hub de Dispositivos Médicos de Costa Rica',
        'Dirección con visión estratégica y maestría técnica',
        'Expertos con 10 años en el sector del calzado',
        'Producto validado internacionalmente',
        'Garantía de salud articular'
    ]
};

export const sizeGroups = [
    { id: 'S1', BRA: ['33', '34', '35'], EU: ['35', '36', '37'], US_Men: ['4', '4.5', '5'], US_Women: ['5.5', '6', '6.5'], MEX: ['23', '24'] },
    { id: 'S2', BRA: ['36', '37', '38'], EU: ['38', '39', '40'], US_Men: ['5.5', '6', '6.5'], US_Women: ['7', '7.5', '8'], MEX: ['24', '25', '26'] },
    { id: 'S3', BRA: ['39', '40'], EU: ['41', '42'], US_Men: ['7', '7.5', '8'], US_Women: ['8.5', '9', '9.5'], MEX: ['26', '27'] },
    { id: 'S4', BRA: ['41', '42'], EU: ['43', '44'], US_Men: ['8.5', '9'], US_Women: ['10', '10.5'], MEX: ['28', '29'] },
    { id: 'S5', BRA: ['43', '44'], EU: ['45', '46'], US_Men: ['9.5', '10', '10.5'], US_Women: ['11', '11.5', '12'], MEX: ['29', '30'] },
    { id: 'S6', BRA: ['45', '46', '47'], EU: ['47', '48', '49'], US_Men: ['11', '12', '13'], US_Women: ['12.5', '13.5', '14.5'], MEX: ['31', '32'] }
];
