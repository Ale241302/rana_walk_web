import React from 'react';
import SectionHeader from '../components/common/SectionHeader';

const LegalView = () => (
    <div className="py-24 animate-fadeIn bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
            <SectionHeader sub="Legal" title="Marco Legal y Propiedad Intelectual" />

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 space-y-10 mb-10">
                <section>
                    <h3 className="text-xl font-black text-[#013A57] mb-4">1. PROPIEDAD INTELECTUAL Y PATENTES</h3>
                    <p className="text-slate-600 mb-4 font-bold uppercase text-xs tracking-widest">Rana Walk®: Una Arquitectura Protegida.</p>
                    <p className="text-slate-600 mb-6">El contenido, diseño, algoritmos y tecnologías presentes en este ecosistema son propiedad exclusiva de Rana Walk.</p>
                    <ul className="space-y-4 text-sm text-slate-500">
                        <li className="bg-slate-50 p-4 rounded-xl border-l-4 border-[#013A57]">
                            <strong>Marcas Registradas:</strong> Rana Walk®, el eslogan "Name it, leap forward.", LeapCore™, ThinBoom™, NanoSpread™, ShockSphere™, GOLIATH, ORBIS y el logotipo de la rana son marcas comerciales protegidas internacionalmente.
                        </li>
                        <li className="bg-slate-50 p-4 rounded-xl border-l-4 border-[#013A57]">
                            <strong>Patentes y Propiedad Industrial:</strong> Los diseños de los sistemas biomecánicos, las geometrías de las matrices de poliuretano y el uso de Elastómeros de Expansión Supercrítica están protegidos por leyes de propiedad industrial.
                        </li>
                        <li className="bg-slate-50 p-4 rounded-xl border-l-4 border-[#013A57]">
                            <strong>Licencias de Terceros:</strong> PORON® XRD® es una marca registrada de Rogers Corporation. Su uso se rige bajo acuerdos de licencia técnica de materiales.
                        </li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-black text-[#013A57] mb-4">2. TÉRMINOS DE SERVICIO (INGENIERÍA Y USO)</h3>
                    <p className="text-slate-600 mb-6 font-bold uppercase text-xs tracking-widest">Contrato de Rendimiento Biomecánico.</p>
                    <ul className="space-y-3 text-sm text-slate-500">
                        <li><strong>Naturaleza del Producto:</strong> Nuestros sistemas son dispositivos biomecánicos de soporte. No son medicamentos ni sustituyen el consejo de un médico especialista en casos de patologías clínicas graves.</li>
                        <li><strong>Protocolo de Adaptación:</strong> El usuario reconoce que existe un periodo de readaptación postural de 2 a 4 días. El uso inicial debe ser progresivo.</li>
                        <li><strong>Vida Útil Técnica:</strong> Los polímeros de ingeniería tienen una vida útil de rendimiento óptimo (8-12 meses). El uso más allá de este periodo es responsabilidad del usuario.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-black text-[#013A57] mb-4">3. POLÍTICA DE PRIVACIDAD</h3>
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
export default LegalView;
