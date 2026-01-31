import React from 'react';
import SectionHeader from '../components/common/SectionHeader';

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
                { q: "¿Cómo debo limpiar mis Rana Walk®?", a: "La membrana NanoSpread™ es técnica y delicada. No laves tus sistemas en lavadora ni los sumerjas en agua hirviendo. Usa un paño húmedo con jabón neutro y deja secar al aire." },
                { q: "ADVERTENCIA CRÍTICA DE SECADO", a: "NUNCA seques tus sistemas bajo el sol directo o fuentes de calor artificial. La radiación UV y las temperaturas altas aceleran la degradación de los polímeros de ingeniería (PU/Vinyl), comprometiendo su resiliencia estructural." },
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
                            <h3 className="text-2xl font-black text-[#013A57] mb-6 border-b border-slate-100 pb-2">{sec.title}</h3>
                            <div className="grid gap-6">
                                {sec.faqs.map((faq, j) => (
                                    <div key={j} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                        <h4 className="font-bold text-[#013A57] mb-3">{faq.q}</h4>
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
export default SupportView;
