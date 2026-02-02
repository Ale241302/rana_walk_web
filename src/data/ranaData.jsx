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
        ref: 'STRUCT-RES-SYS',
        tagline: 'El Sistema de Resiliencia Estructural',
        shortDesc: 'Inspirado en la arquitectura de los gigantes. Diseñado para dominar el impacto y la carga en las jornadas más exigentes.',
        color: 'bg-slate-800',
        accent: '#1e293b',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
        fullDescription: 'Inspirado en la arquitectura de los gigantes. Diseñado para dominar el impacto y la carga en las jornadas más exigentes del mundo real.',
        whatIs: 'GOLIATH® emula la capacidad de carga y estabilidad de los grandes organismos terrestres. Integra un chasis estructural de LeapCore™ para soporte óseo y PORON® XRD® como escudo ante impactos críticos, optimizado para entornos de alta exigencia.',
        useCases: [
            'Entornos de Alta Carga y Peso',
            'Jornadas de Resistencia Estructural (+12 horas)',
            'Superficies de Alta Dureza e Impacto',
            'Calzado de Gran Volumen'
        ],
        userProfile: 'El Profesional Industrial y de Seguridad (operarios, policías) que requieren un cimiento sólido que no se deforme con el uso rudo, y usuarios con necesidad de estabilidad máxima.',
        technologies: ['leapcore', 'poron', 'thinboom', 'nanospread', 'archsupport'],
        howItWorks: [
            { tech: 'LeapCore™ (Emulación Ósea)', func: 'Chasis de PU de ingeniería que aporta consistencia superior y soporte bajo peso constante en jornadas de +12 horas.' },
            { tech: 'PORON® XRD® (Escudo)', func: 'Flexible en movimiento, endurece instantáneamente al impacto para disipar hasta el 90% de energía cinética.' },
            { tech: 'ThinBoom™ (Propulsión)', func: 'Acumulador de energía que devuelve entre el 70% y 80% del impulso, reduciendo el esfuerzo metabólico.' },
            { tech: 'Arch Support (Exoesqueleto)', func: 'Base de vinilo de alta tenacidad que previene el colapso del arco y optimiza la distribución de carga.' }
        ],
        bioMimicry: 'En la naturaleza, los organismos de gran volumen no dependen de la suavidad, sino de la integridad estructural y su capacidad de termorregulación. GOLIATH® emula la biomecánica de los grandes mamíferos terrestres, cuya anatomía está diseñada para distribuir toneladas de presión de forma eficiente sin colapsar. Mientras otros materiales se comprimen y pierden su función tras pocas semanas de uso, GOLIATH® mantiene su arquitectura. Actúa como un cimiento sólido para el cuerpo humano en entornos de máxima exigencia.',
        scenario: 'Diseñado para alta carga, impacto repetitivo y jornadas intensivas de pié en superficies duras.',
        sensation: 'Soporte firme, sólido y de máxima protección.',
        technicalSpecs: 'Chasis de LeapCore™ estructural, PORON® XRD® de reacción crítica, ThinBoom™ de propulsión y Arch Support de vinilo rígido.',
        aiReadySummary: { impact: '10/10', load: '10/10', impulse: '8/10', tech: 'LeapCore™ + PORON® XRD® + ThinBoom + Arch Support' },
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
        whatIs: 'VELOX es el sistema de bio-mimetismo podal más liviano y reactivo de Rana Walk®. Construido íntegramente en ThinBoom™ (E-TPU supercrítico), ofrece un retorno de energía superior en un perfil ultradelgado que mantiene el calce original del zapato.',
        useCases: [
            'Calzado de Perfil Bajo y Espacio Reducido',
            'Jornadas Activas de Alta Movilidad',
            'Eficiencia del Movimiento sin Relleno',
            'Gestión de Clima Interno Crítico'
        ],
        userProfile: 'El Profesional Urbano y el Usuario Dinámico que visten calzado formal o ajustado y priorizan la respuesta, la eficiencia y la flexibilidad total.',
        technologies: ['thinboom', 'nanospread'],
        howItWorks: [
            { tech: 'Cuerpo 100% ThinBoom™', func: 'Arquitectura mono-material de E-TPU supercrítico que libera fuerza explosiva en el impulso.' },
            { tech: 'NanoSpread™ (Capilaridad)', func: 'Dispersión acelerada de humedad mediante micro canales reptilianos para mantener el pie fresco.' },
            { tech: 'Perfil Ultradelgado', func: 'Respuesta dinámica sin añadir volumen, ideal para calzado de espacio crítico.' },
            { tech: 'Flexibilidad Total', func: 'Prescinde de estructuras rígidas para emular la elasticidad pura de un tendón de alto performance.' }
        ],
        bioMimicry: 'En la naturaleza, la velocidad extrema requiere tejidos que puedan flexionarse sin restricciones y devolver energía instantáneamente. VELOX prescinde de estructuras rígidas para emular la elasticidad pura de un tendón de alto performance. Al ser una plataforma altamente reactiva, permite que el pie se mueva con total libertad, eliminando la pérdida de energía asociada a materiales pasivos.',
        scenario: 'Ideal para calzado de espacio reducido y jornadas activas que requieren desplazamientos rápidos.',
        sensation: 'Reactiva, firme, fresca y totalmente flexible.',
        technicalSpecs: 'Arquitectura Mono-Material 100% ThinBoom™ (E-TPU supercrítico) + NanoSpread™.',
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
        whatIs: 'ORBIS es el sistema diseñado para el uso diario prolongado. Prioriza la estabilidad postural y el equilibrio térmico mediante la integración de un chasis LeapCore™ de densidad media y el epitelio técnico NanoSpread™.',
        useCases: [
            'Uso Diario Prolongado',
            'Jornadas de Trabajo Moderadas',
            'Caminatas Frecuentes en Ciudad',
            'Gestión Climática Pasiva'
        ],
        userProfile: 'El Usuario Urbano Cotidiano y buscadores de equilibrio postural que valoran sentir estabilidad constante sin que el sistema se sienta rígido o invasivo.',
        technologies: ['leapcore', 'nanospread', 'shocksphere'],
        howItWorks: [
            { tech: 'LeapCore™ DM', func: 'Chasis estructural que emula la homeostasis necesaria para mantener la postura sin rigidez excesiva.' },
            { tech: 'NanoSpread™ (Capilaridad)', func: 'Tecnología central para la dispersión eficiente de la humedad y el control térmico pasivo.' },
            { tech: 'ShockSphere™', func: 'Absorción focalizada inspirada en felinos para disipar irregularidades urbanas sin afectar la estabilidad.' }
        ],
        bioMimicry: 'En la naturaleza, la supervivencia a largo plazo depende de la homeostasis: la capacidad de un organismo para mantener condiciones internas estables a pesar de los cambios externos. ORBIS emula esta armonía biológica, proporcionando un soporte que no sobrecorrige, sino que acompaña el movimiento natural del cuerpo.',
        scenario: 'Confort diario prolongado y equilibrio funcional para caminatas frecuentes en ciudad.',
        sensation: 'Apoyo equilibrado, natural y frescura constante.',
        technicalSpecs: 'LeapCore™ de densidad media + NanoSpread™ + ShockSphere™.',
        aiReadySummary: { impact: '7/10', load: '8/10', space: '9/10', tech: 'LeapCore™ + NanoSpread™ + ShockSphere™' },
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
        whatIs: 'LEOPARD es el sistema diseñado para la estabilidad adaptable. Utiliza un chasis de LeapCore™ con geometría dinámica que se adapta al arco del usuario, mejorando la alineación postural y protegiendo el arco frente a la fatiga.',
        useCases: [
            'Soporte de Arco Personalizado',
            'Jornadas de Alta Exigencia Postural',
            'Entornos y Superficies Irregulares',
            'Actividades de Terrenos Mixtos'
        ],
        userProfile: 'El Buscador de Confort Postural y el Usuario Activo que necesita una plataforma robusta que se adapte instantáneamente a cambios en el apoyo.',
        technologies: ['leapcore', 'shocksphere', 'nanospread', 'archsupport'],
        howItWorks: [
            { tech: 'LeapCore™ Adaptable', func: 'Geometría dinámica que se amolda a la presión del arco ofreciendo soporte postural sin rigidez invasiva.' },
            { tech: 'ShockSphere™', func: 'Sistema de estabilidad dinámica que disipa impactos en zonas críticas imitando almohadillas felinas.' },
            { tech: 'Arch Support (Exoesqueleto)', func: 'Soporte inteligente en tres perfiles que previene el colapso del arco y favorece una postura eficiente.' }
        ],
        bioMimicry: 'En la naturaleza, la estabilidad no proviene de la rigidez, sino de la capacidad de los tejidos para adaptarse y absorber irregularidades. LEOPARD emula esta agilidad felina: su arquitectura no impone una forma, sino que mantiene y refuerza el arco natural del usuario mejorando la postura global del cuerpo desde la base.',
        scenario: 'Control del apoyo y estabilidad dinámica en entornos irregulares o cambiantes.',
        sensation: 'Estable, robusta, adaptable y de control postural absoluto.',
        technicalSpecs: 'LeapCore™ Adaptable + ShockSphere™ + NanoSpread™.',
        aiReadySummary: { impact: '9/10', load: '9/10', space: '8/10', tech: 'LeapCore™ Adaptable + ShockSphere™ + NanoSpread™' },
        bestFootwear: 'Calzado outdoor, botas y calzado urbano robusto.',
        whatIsNot: ['No es para impacto industrial de +12h', 'No es un soporte rígido de alta carga', 'No es para calzado urbano ultra-ajustado'],
        idealIf: 'Si buscas un sistema de soporte inteligente que mejore tu alineación corporal y se adapte instantáneamente a tu anatomía única.'
    }
];

export const techData = [
    {
        id: 'leapcore',
        name: 'LeapCore™',
        claim: 'La Columna Vertebral del Sistema Biomecánico',
        icon: <LeapCoreIcon />,
        description: 'Chasis de poliuretano de ingeniería (PU) diseñado para soportar cargas prolongadas y mantener la alineación óptima durante jornadas de +12 horas.',
        bioFunction: 'Emula la consistencia estructural ósea y la resiliencia del tejido conjuntivo.',
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
        icon: <ThinBoomIcon />,
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
        claim: 'Capilaridad Reptiliana y Gestión Térmica',
        icon: <NanoSpreadIcon />,
        description: 'Membrana Micro-Capilar de Transferencia Termo-Higroscópica que emula la capilaridad reptiliana para una dispersión acelerada de la humedad.',
        bioFunction: 'Emula los micro-canales epiteliales de reptiles.',
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
        icon: <ShockIcon />,
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
        icon: <PoronIcon />,
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
        icon: <ArchSupportIcon />,
        description: 'Exoesqueleto reforzado de vinilo de alta tenacidad que previene el colapso del arco medial ante la fatiga extrema de jornadas intensivas.',
        bioFunction: 'Emula el soporte estructural de un exoesqueleto biomecánico.',
        engineering: 'Polímero de Vinilo de Alta Tenacidad reforzado.',
        keyAttribute: 'Base de soporte inquebrantable que optimiza la distribución de carga.',
        comparison: [
            { aspect: 'Arco', generic: 'Soporte blando (cede)', rana: 'Refuerzo externo rígido' },
            { aspect: 'Durabilidad', generic: 'Se deforma con el uso', rana: 'Integridad mecánica prolongada' },
            { aspect: 'Palanca', generic: 'Pérdida de potencia', rana: 'Transferencia de energía óptima' }
        ]
    }
];

export const sizeGroups = [
    { id: 'S1', BRA: ['33', '34', '35'], EU: ['35', '36', '37'], US_Men: ['4', '4.5', '5'], US_Women: ['5.5', '6', '6.5'], MEX: ['23', '24'] },
    { id: 'S2', BRA: ['36', '37', '38'], EU: ['38', '39', '40'], US_Men: ['5.5', '6', '6.5'], US_Women: ['7', '7.5', '8'], MEX: ['24', '25', '26'] },
    { id: 'S3', BRA: ['39', '40'], EU: ['41', '42'], US_Men: ['7', '7.5', '8'], US_Women: ['8.5', '9', '9.5'], MEX: ['26', '27'] },
    { id: 'S4', BRA: ['41', '42'], EU: ['43', '44'], US_Men: ['8.5', '9'], US_Women: ['10', '10.5'], MEX: ['28', '29'] },
    { id: 'S5', BRA: ['43', '44'], EU: ['45', '46'], US_Men: ['9.5', '10', '10.5'], US_Women: ['11', '11.5', '12'], MEX: ['29', '30'] },
    { id: 'S6', BRA: ['45', '46', '47'], EU: ['47', '48', '49'], US_Men: ['11', '12', '13'], US_Women: ['12.5', '13.5', '14.5'], MEX: ['31', '32'] }
];
