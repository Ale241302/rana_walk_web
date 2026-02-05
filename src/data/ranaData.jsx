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
        tagline: 'Poder y Fuerza',
        shortDesc: 'La armadura para calzado amplio y trabajos pesados. ADN Mimético: Elefante + Pájaro Carpintero + Felino.',
        color: 'bg-slate-800',
        accent: '#1e293b',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
        fullDescription: 'La armadura para calzado amplio y trabajos pesados.',
        whatIs: 'Ajuste de Calce: Máximo Relleno. Es nuestra plantilla más robusta. Ideal si sientes que el zapato te queda flojo o "baila". ¿Dónde usarla? Zapatos con mucho espacio (Botas de seguridad, industriales o de montaña). No cabe en calzado ajustado.',
        adnMimetico: 'Elefante + Pájaro Carpintero + Felino',
        ajusteCalce: 'Máximo Relleno',
        anatomia: 'Altura de arco Media',
        useCases: [
            'Zapatos con mucho espacio interno',
            'Botas de seguridad e industriales',
            'Botas de montaña',
            'Calzado que sientes flojo o que "baila"'
        ],
        userProfile: 'El Profesional Industrial que necesita máximo soporte y protección. Ideal para usuarios de +110kg o trabajos pesados de +12 horas.',
        technologies: ['leapcore', 'poron', 'thinboom', 'nanospread', 'archsupport'],
        howItWorks: [
            { tech: 'LeapCore™ (Bi-densidad)', func: 'Estructura de Elefante para soportar presiones masivas sin colapsar.' },
            { tech: 'PORON® XRD®', func: 'Escudo de Pájaro Carpintero que anula impactos y protege articulaciones.' },
            { tech: 'ThinBoom™ (Antepié)', func: 'Propulsión de Felino para un despegue potente y eficiente.' },
            { tech: 'Arch Support', func: 'Exoesqueleto de soporte que previene el colapso del arco.' },
            { tech: 'NanoSpread™', func: 'Homeostasis térmica que mantiene tus pies frescos.' }
        ],
        bioMimicry: 'ADN Mimético: Elefante + Pájaro Carpintero + Felino. Una fusión de ingeniería pesada para soportar presiones masivas, anular impactos y propulsar con fuerza.',
        scenario: 'Diseñado para alta carga, impacto repetitivo y jornadas intensivas de pie en superficies duras.',
        sensation: 'Soporte firme, sólido y de máxima protección contra el impacto.',
        technicalSpecs: 'LeapCore™ (Bi-densidad) + PORON® XRD® + ThinBoom™ (Antepié) + Arch Support + NanoSpread™.',
        aiReadySummary: { impact: '5/5', load: '5/5', tech: 'LeapCore™ + PORON® XRD® + ThinBoom™ + NanoSpread™ + Arch Support' },
        beneficiosSistema: {
            mejoraPostura: 5,
            absorcionImpacto: 5,
            anatomicaFlexible: 4,
            devolucionEnergia: 3,
            piesFrescosSecos: 4,
            manejoPeso: 5,
            protectorRodillaCadera: 5,
            rellenoEspacio: 5
        },
        bestFootwear: 'Botas de seguridad, calzado industrial, botas de montaña y calzado con mucho espacio interno.',
        whatIsNot: [
            'No es para calzado ajustado: Es nuestra plantilla más robusta, diseñada para zapatos con mucho espacio interno.',
            'No es solo para gigantes: Es para cualquier persona que someta sus pies a impactos extremos o jornadas intensivas.',
            'No es una superficie plana: Tiene arquitectura de soporte de arco diseñada para evitar que tus rodillas colapsen.'
        ],
        idealIf: 'Si sientes que tu zapato te queda flojo o "baila", o necesitas máximo soporte para trabajos pesados e industriales.'
    },
    {
        id: 'velox',
        name: 'VELOX',
        ref: 'AGILIDAD-ENERGIA-SYS',
        tagline: 'Agilidad y Energía',
        shortDesc: 'Propulsión ultra-delgada para calzado elegante o ajustado. ADN Mimético: Tendón de Felino (Propulsión Pura).',
        color: 'bg-red-700',
        accent: '#dc2626',
        image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&q=80&w=800',
        fullDescription: 'Propulsión ultra-delgada para calzado elegante o ajustado.',
        whatIs: 'Ajuste de Calce: Ultra Delgada. Casi no ocupa espacio. Respeta el calce original de tu zapato. ¿Dónde usarla? Es la única para calzado con poco espacio (Zapatos de vestir, oficina, mocasines o tenis muy tallados).',
        adnMimetico: 'Tendón de Felino (Propulsión Pura)',
        ajusteCalce: 'Ultra Delgada',
        anatomia: 'Altura de arco Media',
        useCases: [
            'Zapatos de vestir y oficina',
            'Mocasines y calzado formal',
            'Tenis muy tallados o ajustados',
            'Calzado con poco espacio interno'
        ],
        userProfile: 'El Profesional Urbano que viste calzado formal o ajustado y prioriza la respuesta, la eficiencia y la agilidad total.',
        technologies: ['thinboom', 'shocksphere', 'nanospread'],
        howItWorks: [
            { tech: 'ThinBoom™ (Full-Length)', func: 'Catapulta continua que transforma cada pisada en velocidad.' },
            { tech: 'ShockSphere™', func: 'Absorción focalizada felina para un despegue ágil.' },
            { tech: 'NanoSpread™', func: 'Homeostasis reptiliana que mantiene tus pies frescos.' }
        ],
        bioMimicry: 'ADN Mimético: Tendón de Felino (Propulsión Pura). Actúa como una catapulta continua, transformando cada pisada en velocidad.',
        scenario: 'Ideal para calzado de espacio reducido y jornadas activas que requieren desplazamientos rápidos.',
        sensation: 'Reactiva, impulsiva, fresca y totalmente flexible.',
        technicalSpecs: 'ThinBoom™ (Full-Length) + ShockSphere™ + NanoSpread™.',
        aiReadySummary: { impact: '3/5', load: '3/5', tech: 'ThinBoom™ + ShockSphere™ + NanoSpread™' },
        beneficiosSistema: {
            mejoraPostura: 3,
            absorcionImpacto: 4,
            anatomicaFlexible: 5,
            devolucionEnergia: 5,
            piesFrescosSecos: 5,
            manejoPeso: 3,
            protectorRodillaCadera: 3,
            rellenoEspacio: 1
        },
        bestFootwear: 'Zapatos de vestir, mocasines, calzado de oficina y tenis muy tallados.',
        whatIsNot: [
            'No es para zapatos con mucho espacio: Es ultra delgada, diseñada para calzado ajustado donde el espacio es limitado.',
            'No es una plantilla ortopédica rígida: Su enfoque no es corregir deformidades, sino devolverte energía.',
            'No es una plantilla pasiva: No solo "amortigua"; te empuja hacia adelante con su efecto catapulta.'
        ],
        idealIf: 'Si usas calzado elegante o ajustado y buscas propulsión y agilidad sin alterar el calce original de tu zapato.'
    },
    {
        id: 'orbis',
        name: 'ORBIS',
        ref: 'INTELIGENCIA-CONFORT-SYS',
        tagline: 'Inteligencia y Confort',
        shortDesc: 'Equilibrio y postura para tu calzado de todos los días. ADN Mimético: Estabilidad y Armonía Natural.',
        color: 'bg-sky-600',
        accent: '#0ea5e9',
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800',
        fullDescription: 'Equilibrio y postura para tu calzado de todos los días.',
        whatIs: 'Ajuste de Calce: Relleno Estándar. Reemplaza perfectamente la plantilla que trae tu zapato de fábrica. ¿Dónde usarla? Zapatos con espacio normal (Tenis casuales, calzado médico o profesional y zapatos de caminata).',
        adnMimetico: 'Estabilidad y Armonía Natural',
        ajusteCalce: 'Relleno Estándar',
        anatomia: 'Altura de arco Media',
        useCases: [
            'Tenis casuales',
            'Calzado médico o profesional',
            'Zapatos de caminata',
            'Zapatos con espacio normal'
        ],
        userProfile: 'El Profesional Urbano que camina su jornada completa y necesita equilibrio y salud postural sin sentir rigidez.',
        technologies: ['leapcore', 'nanospread'],
        howItWorks: [
            { tech: 'LeapCore™', func: 'Control del paso diario manteniendo la armonía biomecánica.' },
            { tech: 'NanoSpread™', func: 'Homeostasis reptiliana que mantiene tus pies frescos y secos.' }
        ],
        bioMimicry: 'ADN Mimético: Estabilidad y Armonía Natural. Se enfoca en el control del paso diario, manteniendo la armonía de tu cuerpo de la mañana a la noche.',
        scenario: 'Equilibrio y salud postural para profesionales que caminan jornadas completas.',
        sensation: 'Apoyo equilibrado, corrección postural suave y frescura constante.',
        technicalSpecs: 'LeapCore™ + NanoSpread™.',
        aiReadySummary: { impact: '3/5', load: '4/5', tech: 'LeapCore™ + NanoSpread™' },
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
        bestFootwear: 'Tenis casuales, calzado médico o profesional y zapatos de caminata.',
        whatIsNot: [
            'No es un sistema de alto rebote: Si buscas salir a correr y sentir propulsión, Orbis no es para eso. Su enfoque es la estabilidad postural.',
            'No es para impactos extremos: No tiene el escudo PORON® XRD® de la Goliath; es para el caminante urbano.',
            'No es temporal: Su resiliencia garantiza que el soporte no se "aplaste" con el uso diario intenso.'
        ],
        idealIf: 'Si buscas reemplazar la plantilla de fábrica de tu zapato con espacio normal y mejorar tu postura y confort diario.'
    },
    {
        id: 'leopard',
        name: 'LEOPARD',
        ref: 'FLEXIBILIDAD-LIBERTAD-SYS',
        tagline: 'Flexibilidad y Libertad',
        shortDesc: 'Personalización total para tu tipo de arco. ADN Mimético: Almohadillas de Leopardo (Suspensión Adaptable).',
        color: 'bg-amber-600',
        accent: '#d97706',
        image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800',
        fullDescription: 'Personalización total para tu tipo de arco.',
        whatIs: 'Ajuste de Calce: Relleno Adaptable. Tiene cuerpo pero es muy flexible para moverte libremente. ¿Dónde usarla? Zapatos con espacio moderado (Tenis de correr, crossfit o deportivos con plantilla removible). Anatomía Personalizada: Única con 3 alturas de arco (Bajo, Medio y Alto). Eliges la que mejor se adapte a tu pie plano o cavo.',
        adnMimetico: 'Almohadillas de Leopardo (Suspensión Adaptable)',
        ajusteCalce: 'Relleno Adaptable',
        anatomia: 'Personalizada (3 alturas: Bajo, Medio y Alto)',
        useCases: [
            'Tenis de correr',
            'Crossfit y deportes dinámicos',
            'Calzado deportivo con plantilla removible',
            'Zapatos con espacio moderado'
        ],
        userProfile: 'El Usuario Activo que necesita adaptabilidad natural y libertad de movimiento. Busca un sistema que se moldee a su anatomía única.',
        technologies: ['leapcore', 'shocksphere', 'nanospread'],
        howItWorks: [
            { tech: 'LeapCore™ (Arco Variable)', func: 'Geometría dinámica que se ajusta a la altura real de tu arco.' },
            { tech: 'ShockSphere™', func: 'Suspensión inteligente inspirada en las almohadillas del leopardo.' },
            { tech: 'NanoSpread™', func: 'Homeostasis reptiliana que mantiene tus pies frescos.' }
        ],
        bioMimicry: 'ADN Mimético: Almohadillas de Leopardo (Suspensión Adaptable). Se adaptan a cualquier terreno de forma independiente, ofreciendo máxima libertad de movimiento.',
        scenario: 'Adaptabilidad y flexibilidad para actividades que requieren libertad de movimiento.',
        sensation: 'Flexible, adaptable, libre y como una extensión natural de tu pie.',
        technicalSpecs: 'LeapCore™ (Arco Variable) + ShockSphere™ + NanoSpread™.',
        aiReadySummary: { impact: '4/5', load: '4/5', tech: 'LeapCore™ Adaptable + ShockSphere™ + NanoSpread™' },
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
        bestFootwear: 'Tenis de correr, crossfit, calzado deportivo con plantilla removible.',
        whatIsNot: [
            'No es de talla única: Al tener arco variable (Bajo, Medio, Alto), requiere saber qué tipo de pie tienes.',
            'No es una plantilla inestable: Aunque es la más flexible, su tecnología ShockSphere™ asegura tracción y equilibrio.',
            'No es restrictiva: Es para quien busca que la plantilla se sienta como una extensión de su propia piel.'
        ],
        idealIf: 'Si practicas deportes y buscas personalizar la altura del arco (Bajo, Medio o Alto) según tu pie plano o cavo.'
    }
];

export const techData = [
    {
        id: 'leapcore',
        name: 'LEAPCORE™',
        claim: 'Fisiología de Megafauna',
        icon: <LeapCoreIcon />,
        description: 'Nos inspiramos en la arquitectura plantar del Elefante, la estructura más eficiente de la naturaleza para distribuir presiones masivas sin colapsar.',
        bioFunction: 'Alineación Total de la Cadena Cinética. Al soportar hasta 110 kg (225 lbs) sin deformarse, LeapCore™ evita que el arco caiga. Esto detiene la rotación interna de la tibia (valgo de rodilla) y mantiene la pelvis nivelada, eliminando el dolor lumbar por desbalance postural.',
        engineering: 'Un chasis de poliuretano (PU) de bi-densidad. Una capa superior de baja densidad que ofrece una bienvenida de suavidad inmediata, sobre una base de alta densidad con memoria geométrica.',
        keyAttribute: 'Soporte estructural activo que garantiza la forma del arco por más de 8 horas, permitiendo que el pie trabaje sin llegar a la fatiga.',
        benefit: 'Alineación Total de la Cadena Cinética. Al soportar hasta 110 kg sin deformarse, evita que el arco caiga, detiene la rotación interna de la tibia y mantiene la pelvis nivelada, eliminando el dolor lumbar por desbalance postural.',
        science: 'Chasis de PU de bi-densidad con memoria geométrica para distribución de presiones masivas.',
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
        description: 'Emulamos la eficiencia elástica de los Felinos. Sus patas no solo amortiguan; funcionan como una catapulta que almacena energía en el apoyo y la libera explosivamente en la propulsión.',
        bioFunction: 'Eficiencia Energética y Reducción de Fatiga. Al devolver entre el 70% y 80% de la energía que recibes, tus músculos posteriores (isquiotibiales y glúteos) realizan menos esfuerzo en cada despegue. Es agilidad pura que te permite llegar al final del día con piernas descansadas.',
        engineering: 'Una matriz de Elastómero de Celdas Expandidas de alto rebote integrada en un perfil mínimo de alto desempeño.',
        keyAttribute: 'Transformación del impacto cinético en impulso propulsivo mediante retorno elástico acelerado.',
        benefit: 'Eficiencia Energética y Reducción de Fatiga. Devuelve entre el 70% y 80% de la energía, tus músculos trabajan menos y llegas al final del día con piernas descansadas.',
        science: 'Matriz de Elastómero de Celdas Expandidas de alto rebote para retorno elástico acelerado.',
        comparison: [
            { aspect: 'Energía', generic: 'Amortiguación pasiva (absorbe)', rana: 'Catapulta reactiva (devuelve 70-80%)' },
            { aspect: 'Esfuerzo', generic: 'Músculos trabajan más', rana: 'Músculos trabajan menos' },
            { aspect: 'Sensación', generic: 'Cansancio progresivo', rana: 'Agilidad pura todo el día' }
        ]
    },
    {
        id: 'poron',
        name: 'PORON® XRD®',
        claim: 'Absorbedor y Disipador de Impactos',
        icon: <PoronIcon />,
        description: 'Copiamos el sistema de seguridad del Pájaro Carpintero. El hueso hioides de esta ave actúa como un cinturón de seguridad que rodea su cráneo, dispersando vibraciones extremas para proteger su centro vital.',
        bioFunction: 'Protección Estructural y Articular. Absorbe el 90% de la energía de cada impacto contra superficies duras (concreto/asfalto). Al disipar la onda de choque en la base, evitas que las vibraciones dañinas asciendan por los huesos hacia las articulaciones de rodilla y cadera, previniendo el desgaste prematuro.',
        engineering: 'Polímero viscoelástico de protección extrema con propiedad intelectual de Rogers Corp, USA.',
        keyAttribute: 'Material inteligente que permanece flexible en movimiento, pero se endurece molecularmente al instante del impacto para neutralizar la fuerza.',
        benefit: 'Protección Estructural y Articular. Absorbe el 90% de la energía de cada impacto, evitando que las vibraciones dañinas asciendan hacia rodillas y cadera, previniendo el desgaste prematuro.',
        science: 'Polímero viscoelástico de Rogers Corp (USA) que se endurece molecularmente al impacto.',
        comparison: [
            { aspect: 'Protección', generic: 'Pasiva / Limitada', rana: 'Absorbe 90% del impacto' },
            { aspect: 'Articulaciones', generic: 'Vibraciones dañan rodillas', rana: 'Escudo para rodillas y cadera' },
            { aspect: 'Certificación', generic: 'No certificada', rana: 'Rogers Corp (USA) patentado' }
        ]
    },
    {
        id: 'nanospread',
        name: 'NANOSPREAD™',
        claim: 'Capilaridad Disipativa Reptiliana',
        icon: <NanoSpreadIcon />,
        description: 'Inspirado en los micro-canales de los Reptiles, que movilizan la humedad a través de su piel mediante capilaridad pasiva, desafiando incluso la gravedad.',
        bioFunction: 'Homeostasis Térmica y Estabilidad Volumétrica. Un pie caliente se hincha, y un pie hinchado altera su forma de pisar. NanoSpread™ regula la temperatura (hasta 5°C menos) y mantiene el pie seco. Esto asegura que el pie conserve su volumen ideal y que el soporte ortótico actúe exactamente donde fue diseñado.',
        engineering: 'Textil técnico avanzado con nanotecnología de capilaridad activa para gestión de flujo de aire y humedad.',
        keyAttribute: 'Succión y movilización del sudor hacia los bordes para una evaporación controlada (FreshStep Dynamics).',
        benefit: 'Homeostasis Térmica y Estabilidad Volumétrica. Regula la temperatura (hasta 5°C menos) y mantiene el pie seco, asegurando que el soporte ortótico actúe exactamente donde fue diseñado.',
        science: 'Nanotecnología de capilaridad activa para gestión de flujo de aire y evaporación controlada.',
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
