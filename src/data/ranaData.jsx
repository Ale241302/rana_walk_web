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
        ref: 'PODER-ESTABILIDAD-SYS',
        tagline: 'Poder y Estabilidad Absoluta',
        shortDesc: 'ADN Mimético: Elefante (Distribución de Carga) y Pájaro Carpintero (Protección). El sistema más robusto y capaz de la línea.',
        color: 'bg-slate-800',
        accent: '#1e293b',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
        fullDescription: 'El sistema más robusto y capaz de la línea. Diseñado para ofrecer una absorción de energía superior y aprovechar la cinética residual para impulsar el despegue. Su construcción técnica es inquebrantable en superficies agresivas.',
        whatIs: 'Fisiología Mimética: Chasis de distribución de presiones LeapCore™ (soporta hasta 110 kg / 225 lbs) sincronizado con un escudo de PORON® XRD® para la absorción de impactos extremos. Potenciado por un Arch System rígido diseñado para mantener la integridad de su forma bajo carga pesada.',
        adnMimetico: 'Elefante (Distribución de Carga) y Pájaro Carpintero (Protección)',
        ajusteCalce: 'Grosor Máximo (Relleno de espacio alto)',
        anatomia: 'Altura de arco Media',
        useCases: [
            'Jornadas de +8 horas en industria',
            'Construcción',
            'Senderismo con calzado amplio',
            'Profesionales que enfrentan superficies duras'
        ],
        userProfile: 'Usuarios que buscan un efecto superior en la mejora de postura. Perfecto para jornadas de +8 horas en industria, construcción o senderismo con calzado amplio.',
        technologies: ['leapcore', 'poron', 'archsupport', 'nanospread'],
        howItWorks: [
            { tech: 'LeapCore™ (Bi-densidad)', func: 'Chasis de distribución de presiones que soporta hasta 110 kg sin colapsar.' },
            { tech: 'PORON® XRD®', func: 'Escudo de absorción de impactos extremos inspirado en el pájaro carpintero.' },
            { tech: 'Arch System Rígido', func: 'Mantiene la integridad de forma bajo carga pesada.' },
            { tech: 'NanoSpread™', func: 'Regula la temperatura (hasta 5°C menos) y mantiene el pie seco.' }
        ],
        bioMimicry: 'ADN Mimético: Elefante (Distribución de Carga) y Pájaro Carpintero (Protección). Una fusión de ingeniería pesada para soportar presiones masivas, anular impactos y proteger articulaciones.',
        scenario: 'Mecanismo de Desempeño: Su efecto es el más potente de la gama para la corrección postural y el alivio del estrés mecánico en rodillas y caderas.',
        sensation: 'Soporte firme, sólido y de máxima protección contra el impacto. El más potente para corrección postural.',
        technicalSpecs: 'LeapCore™ (Bi-densidad) + PORON® XRD® + Arch System + NanoSpread™. Gestión Térmica: NanoSpread™ integrado que regula la temperatura (hasta 5 °C menos) y mantiene el pie seco incluso en jornadas extensas.',
        aiReadySummary: { impact: '5/5', load: '5/5', tech: 'LeapCore™ + PORON® XRD® + Arch System + NanoSpread™' },
        beneficiosSistema: {
            mejoraPostura: 5,
            absorcionImpacto: 5,
            anatomicaFlexible: 4,
            devolucionEnergia: 3,
            piesFrescosSecos: 4,
            manejoPeso: 5,
            protectorRodillaCadera: 5,
            rellenoEspacio: 1
        },
        bestFootwear: 'Botas de seguridad, calzado industrial, botas de montaña y calzado con mucho espacio interno. NO apta para calzado ajustado: Debido a su alto nivel de relleno, no cabe en calzado de oficina slim o mocasines.',
        whatIsNot: [
            'No es una plantilla pesada: Su ingeniería de PU de bi-densidad es ligera para no añadir fatiga adicional al calzado.',
            'No es solo para personas de gran tamaño: Es para cualquier usuario expuesto a impactos secos contra el concreto o jornadas donde el cansancio suele vencer a otras plantillas.',
            'No es una superficie plana: Posee una arquitectura de soporte de arco media diseñada para evitar que las rodillas colapsen.',
            'No es apta para calzado ajustado: Debido a su alto nivel de relleno, no cabe en calzado de oficina slim o mocasines.'
        ],
        idealIf: 'Buscas un efecto superior en la mejora de postura para jornadas de +8 horas en industria, construcción o senderismo con calzado amplio.'
    },
    {
        id: 'velox',
        name: 'VELOX',
        ref: 'AGILIDAD-ENERGIA-SYS',
        tagline: 'Agilidad y Energía Reactiva',
        shortDesc: 'ADN Mimético: Tendón de Felino (Efecto Catapulta). Sistema ultra-delgado diseñado para la máxima eficiencia energética.',
        color: 'bg-red-700',
        accent: '#dc2626',
        image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&q=80&w=800',
        fullDescription: 'Sistema ultra-delgado diseñado para la máxima eficiencia energética. Transforma el impacto en fuerza de despegue sin alterar el calce original del zapato.',
        whatIs: 'Fisiología Mimética: Emula la elasticidad de los tendones felinos mediante una matriz de E-TPU supercritical de alto rebote. Este sistema NO integra el chasis LeapCore™ para garantizar flexibilidad absoluta y un perfil mínimo que respeta el espacio del pie.',
        adnMimetico: 'Tendón de Felino (Efecto Catapulta)',
        ajusteCalce: 'Grosor Mínimo (Ultra delgada)',
        anatomia: 'Altura de arco Media',
        useCases: [
            'Fútbol',
            'Ciclismo',
            'Calzado de vestir',
            'Mocasines y tenis deportivos slim'
        ],
        userProfile: 'El profesional que usa calzado elegante o ajustado y busca propulsión, eficiencia energética y agilidad total.',
        technologies: ['thinboom', 'nanospread'],
        howItWorks: [
            { tech: 'ThinBoom™ (Full-Length)', func: 'Actúa como un resorte biológico que devuelve hasta el 80% de la energía de cada paso.' },
            { tech: 'NanoSpread™', func: 'Control térmico activo y evaporación acelerada del sudor.' }
        ],
        bioMimicry: 'ADN Mimético: Tendón de Felino (Efecto Catapulta). Actúa como una catapulta continua, transformando cada pisada en velocidad y devolviendo hasta el 80% de la energía.',
        scenario: 'Mecanismo de Desempeño: Este sistema NO integra el chasis LeapCore™ para garantizar flexibilidad absoluta y un perfil mínimo que respeta el espacio del pie.',
        sensation: 'Reactiva, impulsiva, fresca y totalmente flexible. Eficiencia energética máxima.',
        technicalSpecs: 'ThinBoom™ (Full-Length) + NanoSpread™. Perfil ultra-delgado con retorno de energía del 80%. Gestión Térmica: NanoSpread™ activo para el control térmico y evaporación acelerada del sudor.',
        aiReadySummary: { impact: '4/5', load: '3/5', tech: 'ThinBoom™ + NanoSpread™' },
        beneficiosSistema: {
            mejoraPostura: 3,
            absorcionImpacto: 4,
            anatomicaFlexible: 5,
            devolucionEnergia: 5,
            piesFrescosSecos: 5,
            manejoPeso: 3,
            protectorRodillaCadera: 3,
            rellenoEspacio: 5
        },
        bestFootwear: 'Fútbol, ciclismo, calzado de vestir, mocasines y tenis deportivos slim. NO es para botas de gran volumen: Al ser de bajo perfil, su eficiencia se maximiza en calzado con poco espacio interno.',
        whatIsNot: [
            'No es una plantilla ortopédica rígida: Su propósito no es la inmovilización, sino devolver hasta el 80% de la energía de cada paso.',
            'No es para botas de gran volumen: Al ser de bajo perfil, su eficiencia se maximiza en calzado con poco espacio interno.',
            'No es una plantilla pasiva: Utiliza la tecnología ThinBoom™ para actuar como un resorte biológico que te impulsa activamente.'
        ],
        idealIf: 'Usas calzado elegante, ajustado o deportivo slim y buscas máxima agilidad y retorno de energía sin alterar el calce.'
    },
    {
        id: 'orbis',
        name: 'ORBIS',
        ref: 'INTELIGENCIA-SALUD-SYS',
        tagline: 'Inteligencia y Salud Postural',
        shortDesc: 'ADN Mimético: Homeostasis y Equilibrio Estructural. La solución técnica para estabilizar la cadena cinética y eliminar la fatiga mecánica diaria.',
        color: 'bg-sky-600',
        accent: '#0ea5e9',
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800',
        fullDescription: 'La solución técnica para estabilizar la cadena cinética y eliminar la fatiga mecánica diaria.',
        whatIs: 'Fisiología Mimética: Núcleo de LeapCore™ validado para mantener el arco firme por +8 horas en usuarios de hasta 110 kg. Proporciona un soporte de arco constante que evita el desbalance pélvico y el cansancio acumulado.',
        adnMimetico: 'Homeostasis y Equilibrio Estructural',
        ajusteCalce: 'Grosor Medio (Relleno estándar)',
        anatomia: 'Altura de arco Media',
        useCases: [
            'Tenis casuales',
            'Calzado médico',
            'Calzado de oficina',
            'El profesional que busca que su espalda no le duela al llegar a casa'
        ],
        userProfile: 'Tenis casuales, calzado médico o de oficina. Diseñado para el profesional que busca que su espalda no le duela al llegar a casa.',
        technologies: ['leapcore', 'nanospread'],
        howItWorks: [
            { tech: 'LeapCore™', func: 'Núcleo validado para mantener el arco firme por +8 horas en usuarios de hasta 110 kg.' },
            { tech: 'NanoSpread™', func: 'Tecnología que dispersa la humedad de forma uniforme para acelerar su evaporación.' }
        ],
        bioMimicry: 'ADN Mimético: Homeostasis y Equilibrio Estructural. Se enfoca en estabilizar la cadena cinética y eliminar la fatiga mecánica diaria.',
        scenario: 'Mecanismo de Desempeño: Proporciona un soporte de arco constante que evita el desbalance pélvico y el cansancio acumulado.',
        sensation: 'Apoyo equilibrado, corrección postural suave y frescura constante. Estabilidad para el caminante urbano.',
        technicalSpecs: 'LeapCore™ + NanoSpread™. Soporte de arco constante para +8 horas. Gestión Térmica: Tecnología NanoSpread™ que dispersa la humedad de forma uniforme para acelerar su evaporación.',
        aiReadySummary: { impact: '3/5', load: '5/5', tech: 'LeapCore™ + NanoSpread™' },
        beneficiosSistema: {
            mejoraPostura: 5,
            absorcionImpacto: 3,
            anatomicaFlexible: 4,
            devolucionEnergia: 2,
            piesFrescosSecos: 4,
            manejoPeso: 5,
            protectorRodillaCadera: 3,
            rellenoEspacio: 4
        },
        bestFootwear: 'Tenis casuales, calzado médico o de oficina. Diseñado para el profesional que busca que su espalda no le duela al llegar a casa.',
        whatIsNot: [
            'No es un sistema de alto rebote: No integra ThinBoom™; su enfoque es la calma postural, no la propulsión deportiva.',
            'No es para impactos extremos: No incluye el escudo PORON® XRD®; está optimizada para la estabilidad del caminante urbano.',
            'No es una solución temporal: Su estructura de PU de bi-densidad garantiza que el soporte no se "aplaste" con el uso continuo.'
        ],
        idealIf: 'Buscas estabilizar tu postura y eliminar la fatiga mecánica diaria con calzado casual, médico o de oficina.'
    },
    {
        id: 'leopard',
        name: 'LEOPARD',
        ref: 'FLEXIBILIDAD-ADAPTABLE-SYS',
        tagline: 'Flexibilidad Adaptable',
        shortDesc: 'ADN Mimético: Almohadillas de Leopardo (Suspensión Adaptable). Sistema de rendimiento dinámico que ofrece libertad de movimiento total y suspensión inteligente.',
        color: 'bg-amber-600',
        accent: '#d97706',
        image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800',
        fullDescription: 'Sistema de rendimiento dinámico que ofrece libertad de movimiento total y suspensión inteligente.',
        whatIs: 'Fisiología Mimética: Chasis 100% en LeapCore™ con tecnología ShockSphere™ localizada para absorción dinámica de impactos. Única con tres alturas de arco (Bajo, Medio y Alto) para moldearse perfectamente a la anatomía del usuario.',
        adnMimetico: 'Almohadillas de Leopardo (Suspensión Adaptable)',
        ajusteCalce: 'Grosor Medio (Relleno adaptable)',
        anatomia: 'Personalizada (3 alturas: Bajo, Medio y Alto)',
        useCases: [
            'Running',
            'Crossfit',
            'Actividades de alta movilidad',
            'Deportes que requieren corregir alineamiento sin restringir torsión'
        ],
        userProfile: 'Running, Crossfit y actividades de alta movilidad que requieren corregir el alineamiento sin restringir la torsión.',
        technologies: ['leapcore', 'shocksphere', 'nanospread'],
        howItWorks: [
            { tech: 'LeapCore™ (100%)', func: 'Chasis completo con geometría adaptable a tu tipo de arco.' },
            { tech: 'ShockSphere™', func: 'Suspensión inteligente localizada para absorción dinámica de impactos.' },
            { tech: 'NanoSpread™', func: 'Mantiene el microclima interno del calzado seco y fresco.' }
        ],
        bioMimicry: 'ADN Mimético: Almohadillas de Leopardo (Suspensión Adaptable). Se adaptan a cualquier terreno ofreciendo máxima libertad de movimiento y suspensión inteligente.',
        scenario: 'Mecanismo de Desempeño: Única con tres alturas de arco (Bajo, Medio y Alto) para moldearse perfectamente a la anatomía del usuario.',
        sensation: 'Flexible, adaptable, libre y como una extensión natural de tu pie. Suspensión inteligente.',
        technicalSpecs: 'LeapCore™ (100%) + ShockSphere™ + NanoSpread™. Tres alturas de arco (Bajo, Medio, Alto). Gestión Térmica: NanoSpread™ integrado que mantiene el microclima interno del calzado seco y fresco.',
        aiReadySummary: { impact: '5/5', load: '3/5', tech: 'LeapCore™ + ShockSphere™ + NanoSpread™' },
        beneficiosSistema: {
            mejoraPostura: 4,
            absorcionImpacto: 5,
            anatomicaFlexible: 5,
            devolucionEnergia: 3,
            piesFrescosSecos: 4,
            manejoPeso: 3,
            protectorRodillaCadera: 4,
            rellenoEspacio: 4
        },
        bestFootwear: 'Running, Crossfit y actividades de alta movilidad que requieren corregir el alineamiento sin restringir la torsión.',
        whatIsNot: [
            'No somos gel genérico: El gel colapsa y pierde forma; nuestro PU de bi-densidad tiene memoria geométrica y recupera su estructura instantáneamente.',
            'No somos un "yeso": No bloqueamos la musculatura del pie; somos un soporte activo que permite el trabajo biomecánico saludable.',
            'No somos un accesorio cosmético: Somos sistemas de ingeniería de grado médico desarrollados en el Costa Rica MedTech Hub.'
        ],
        idealIf: 'Practicas deportes o actividades de alta movilidad y necesitas personalizar la altura del arco según tu anatomía.'
    }
];

export const techData = [
    {
        id: 'leapcore',
        name: 'LEAPCORE™',
        claim: 'Fisiología de Megafauna',
        icon: <LeapCoreIcon />,
        description: 'Inspirada en la arquitectura plantar del Elefante, diseñada para distribuir presiones masivas sin que el tejido colapse.',
        bioFunction: 'Mantiene la integridad del arco por jornadas de +8 horas, evitando el valgo de rodilla y el desbalance pélvico. A diferencia del gel, el LeapCore™ no se "vence" con el uso continuo.',
        engineering: 'Chasis de Poliuretano (PU) de bi-densidad. Combina una capa superior de baja densidad para confort inmediato y una base de alta densidad con memoria geométrica.',
        keyAttribute: 'Capacidad de Carga: Validada para soportar usuarios de hasta 110 kg (220 lbs) sin perder su forma original.',
        benefit: 'Mantiene la integridad del arco por jornadas de +8 horas, evitando el valgo de rodilla y el desbalance pélvico. A diferencia del gel, el LeapCore™ no se "vence" con el uso continuo.',
        science: 'Chasis de PU de bi-densidad con memoria geométrica para distribución de presiones masivas.',
        comparison: [
            { aspect: 'Capacidad de Carga', generic: 'Colapsa bajo peso', rana: 'Soporta hasta 110 kg (220 lbs)' },
            { aspect: 'Soporte de Arco', generic: 'Pierde forma tras horas', rana: 'Mantiene integridad +8 horas' },
            { aspect: 'Material', generic: 'Gel que se "vence"', rana: 'PU bi-densidad con memoria geométrica' }
        ]
    },
    {
        id: 'thinboom',
        name: 'THINBOOM™',
        claim: 'El Tendón Reactivo',
        icon: <ThinBoomIcon />,
        description: 'Emula la eficiencia elástica de los Felinos, funcionando como una catapulta biológica que almacena energía en el apoyo y la libera en la propulsión.',
        bioFunction: 'Reduce significativamente el esfuerzo de los isquiotibiales y glúteos, retrasando la fatiga muscular y permitiendo un andar más ágil y potente.',
        engineering: 'Matriz de E-TPU Supercritical (Elastómero de Celdas Expandidas) de alto rebote y perfil mínimo.',
        keyAttribute: 'Eficiencia Energética: Devuelve entre el 70% y 80% de la energía cinética en cada paso.',
        benefit: 'Reduce significativamente el esfuerzo de los isquiotibiales y glúteos, retrasando la fatiga muscular y permitiendo un andar más ágil y potente.',
        science: 'Matriz de E-TPU Supercritical de alto rebote para retorno elástico acelerado.',
        comparison: [
            { aspect: 'Retorno de Energía', generic: 'Amortiguación pasiva', rana: 'Devuelve 70-80% de energía' },
            { aspect: 'Fatiga Muscular', generic: 'Músculos trabajan más', rana: 'Reduce esfuerzo muscular' },
            { aspect: 'Perfil', generic: 'Grueso y voluminoso', rana: 'Perfil mínimo de alto desempeño' }
        ]
    },
    {
        id: 'poron',
        name: 'PORON® XRD®',
        claim: 'Escudo de Reacción Molecular',
        icon: <PoronIcon />,
        description: 'Tecnología propietaria y patentada del fabricante Rogers Corp (USA). Inspirado en el sistema de protección del Pájaro Carpintero, cuyo cráneo disipa impactos masivos protegiendo su estructura vital.',
        bioFunction: 'Actúa como un escudo para las articulaciones, evitando que las vibraciones dañinas viajen desde el talón hacia la rodilla y la cadera.',
        engineering: 'Polímero viscoelástico de celda abierta. Sus moléculas se "congelan" instantáneamente ante un impacto para disipar la energía y recuperan su flexibilidad al caminar.',
        keyAttribute: 'Capacidad de Absorción: Neutraliza hasta el 90% de la energía de impacto en superficies agresivas (concreto, acero, piedra).',
        benefit: 'Actúa como un escudo para las articulaciones, evitando que las vibraciones dañinas viajen desde el talón hacia la rodilla y la cadera.',
        science: 'Polímero viscoelástico de Rogers Corp (USA) que se "congela" molecularmente al impacto.',
        comparison: [
            { aspect: 'Absorción', generic: 'Protección pasiva limitada', rana: 'Neutraliza 90% del impacto' },
            { aspect: 'Articulaciones', generic: 'Vibraciones dañan rodillas', rana: 'Escudo protector articular' },
            { aspect: 'Certificación', generic: 'Sin patente', rana: 'Rogers Corp (USA) patentado' }
        ]
    },
    {
        id: 'nanospread',
        name: 'NANOSPREAD™',
        claim: 'Capilaridad Reptiliana',
        icon: <NanoSpreadIcon />,
        description: 'Emula los micro-canales de la piel de los Reptiles que dirigen la humedad por capilaridad para la termorregulación activa.',
        bioFunction: 'Mantiene los pies frescos y secos, eliminando la fricción que causa ampollas y reduciendo la hinchazón por calor acumulado.',
        engineering: 'Textil técnico de dispersión con nanotecnología de hilos hidrofóbicos.',
        keyAttribute: 'Gestión Térmica: Capaz de reducir la temperatura interna del calzado hasta 5°C (41°F), manteniendo la homeostasis incluso en climas extremos.',
        benefit: 'Mantiene los pies frescos y secos, eliminando la fricción que causa ampollas y reduciendo la hinchazón por calor acumulado.',
        science: 'Nanotecnología de hilos hidrofóbicos para gestión térmica y evaporación controlada.',
        comparison: [
            { aspect: 'Temperatura', generic: 'Pies calientes e incómodos', rana: 'Reduce hasta 5°C la temperatura' },
            { aspect: 'Humedad', generic: 'Absorbe y retiene sudor', rana: 'Expulsa humedad por capilaridad' },
            { aspect: 'Confort', generic: 'Ampollas y fricción', rana: 'Pies secos y frescos siempre' }
        ]
    },
    {
        id: 'shocksphere',
        name: 'ShockSphere™',
        claim: 'Amortiguación Focalizada',
        icon: <ShockIcon />,
        description: 'Inspirada en las almohadillas protectoras de las Ranas, que absorben impactos proporcionales a saltos masivos.',
        bioFunction: 'Neutraliza micro-vibraciones específicas, mejorando la tracción y el equilibrio en cada apoyo.',
        engineering: 'Puntos de absorción localizada fabricados en PU de baja densidad técnica integrados en zonas críticas de presión.',
        keyAttribute: 'Función: Proporciona una suspensión inteligente en el talón y metatarsos, adaptándose dinámicamente al terreno.',
        benefit: 'Neutraliza micro-vibraciones específicas, mejorando la tracción y el equilibrio en cada apoyo.',
        science: 'PU de baja densidad técnica con geometría esférica para suspensión inteligente.',
        comparison: [
            { aspect: 'Absorción', generic: 'Amortiguación uniforme', rana: 'Suspensión focalizada en zonas críticas' },
            { aspect: 'Terreno', generic: 'Transmite irregularidades', rana: 'Adaptación dinámica al suelo' },
            { aspect: 'Equilibrio', generic: 'Inestabilidad en apoyo', rana: 'Tracción y equilibrio optimizados' }
        ]
    },
    {
        id: 'archsupport',
        name: 'Arch System',
        claim: 'El Exoesqueleto de Soporte',
        icon: <ArchSupportIcon />,
        description: 'Emula la integridad y resistencia de un Exoesqueleto, actuando como un armazón externo que protege la estructura ósea cuando la musculatura se agota.',
        bioFunction: 'Optimiza la palanca de movimiento y asegura una transferencia de energía óptima, garantizando que el soporte sea inquebrantable independientemente del peso del usuario.',
        engineering: 'Refuerzo rígido de alta tenacidad diseñado para integrarse estructuralmente al chasis LeapCore™.',
        keyAttribute: 'Función: Previene el colapso del arco medial ante la fatiga extrema provocada por jornadas intensivas o cargas elevadas.',
        benefit: 'Optimiza la palanca de movimiento y asegura una transferencia de energía óptima, garantizando que el soporte sea inquebrantable independientemente del peso del usuario.',
        science: 'Refuerzo de alta tenacidad con integración estructural al chasis LeapCore™.',
        comparison: [
            { aspect: 'Soporte de Arco', generic: 'Cede ante la fatiga', rana: 'Inquebrantable bajo carga' },
            { aspect: 'Durabilidad', generic: 'Se deforma con el uso', rana: 'Integridad mecánica prolongada' },
            { aspect: 'Transferencia', generic: 'Pérdida de potencia', rana: 'Transferencia de energía óptima' }
        ]
    }
];

// Información de confianza - Costa Rica MedTech Hub
export const trustData = {
    title: 'El Respaldo de la Ingeniería MedTech',
    subtitle: 'Costa Rica MedTech Hub',
    description: 'Cada una de estas tecnologías no es solo un material; es una solución biomecánica diseñada en el Costa Rica MedTech Hub.',
    details: 'Nuestra dirección combina la visión estratégica de expertos en Economía y Negocios con la maestría de un equipo técnico con más de 10 años de experiencia en calzado de alta exigencia. El resultado es un ecosistema validado que garantiza que tu salud articular es nuestra prioridad técnica.',
    highlights: [
        'Soluciones biomecánicas diseñadas en Costa Rica MedTech Hub',
        'Visión estratégica de expertos en Economía y Negocios',
        'Equipo técnico con +10 años en calzado de alta exigencia',
        'Ecosistema validado internacionalmente',
        'Tu salud articular es nuestra prioridad técnica'
    ]
};

export const sizeGroups = [
    { id: 'S1', BRA: ['33', '34', '35'], EU: ['35', '36', '37'], US_Men: ['4', '4.5', '5'], US_Women: ['5.5', '6', '6.5'], MEX: ['23', '24'], Width_mm: 87, Length_mm: ['225.00', '232.00', '238.00'], Length_in: ['8.86', '9.13', '9.37'] },
    { id: 'S2', BRA: ['36', '37', '38'], EU: ['38', '39', '40'], US_Men: ['5.5', '6', '6.5'], US_Women: ['7', '7.5', '8'], MEX: ['24', '25', '26'], Width_mm: 92, Length_mm: ['245.00', '252.00', '258.00'], Length_in: ['9.65', '9.92', '10.16'] },
    { id: 'S3', BRA: ['39', '40'], EU: ['41', '42'], US_Men: ['7', '7.5', '8'], US_Women: ['8.5', '9', '9.5'], MEX: ['26', '27'], Width_mm: 95, Length_mm: ['265.00', '268.50', '272.00'], Length_in: ['10.43', '10.57', '10.71'] },
    { id: 'S4', BRA: ['41', '42'], EU: ['43', '44'], US_Men: ['8.5', '9'], US_Women: ['10', '10.5'], MEX: ['28', '29'], Width_mm: 99, Length_mm: ['278.00', '285.00'], Length_in: ['10.94', '11.22'] },
    { id: 'S5', BRA: ['43', '44'], EU: ['45', '46'], US_Men: ['9.5', '10', '10.5'], US_Women: ['11', '11.5', '12'], MEX: ['29', '30'], Width_mm: 101, Length_mm: ['288.50', '292.00', '298.00'], Length_in: ['11.36', '11.5', '11.73'] },
    { id: 'S6', BRA: ['45', '46', '47'], EU: ['47', '48', '49'], US_Men: ['11', '12', '13'], US_Women: ['12.5', '13.5', '14.5'], MEX: ['31', '32'], Width_mm: 106, Length_mm: ['305.00', '312.00', '319.00'], Length_in: ['12.01', '12.28', '12.52'] }
];
