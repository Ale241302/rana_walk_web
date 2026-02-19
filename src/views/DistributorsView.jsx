import React, { useState } from 'react';
import { Box, BookOpen, Layout, Shield, Users, CheckCircle, X, FileText, Award, BarChart3, Briefcase } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';

const DistributorsView = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    pais: '',
    sectores: [],
    mensaje: ''
  });

  const handleSectorChange = (sector) => {
    setFormData(prev => ({
      ...prev,
      sectores: prev.sectores.includes(sector)
        ? prev.sectores.filter(s => s !== sector)
        : [...prev.sectores, sector]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const scrollToForm = () => {
    document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="animate-fadeIn">
      {/* Compliance: Rana Walk Design System v2.8 — Adecuado 2026-02-18 */}
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <SectionHeader sub="PARTNERSHIP & B2B" title="Escala con el Estándar de Bio-Ingeniería" />
            <p className="text-xl text-slate-600 leading-relaxed">
              Rana Walk® busca socios estratégicos que deseen liderar su mercado mediante sistemas biomecánicos diseñados para el mundo real. No ofrecemos accesorios de consumo masivo; proporcionamos una <strong className="text-[#013A57]">arquitectura de valor</strong> para distribuidores que exigen soluciones consistentes, escalables y con respaldo científico del <strong className="text-[#013A57]">Costa Rica MedTech Hub</strong>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <button
              onClick={scrollToForm}
              className="px-8 py-4 bg-[#013A57] text-white rounded-full font-black uppercase tracking-widest hover:bg-[#066383] transition-colors shadow-xl"
            >
              Solicitar Dossier Comercial
            </button>
            <button
              onClick={scrollToForm}
              className="px-8 py-4 bg-[#75CBB3] text-[#013A57] rounded-full font-black uppercase tracking-widest hover:brightness-110 transition-colors shadow-xl"
            >
              Contactar a un Consultor B2B
            </button>
          </div>
        </div>
      </section>

      {/* Alianza Estratégica */}
      <section className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#e6fffb] rounded-full text-[#013A57] text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-[#75CBB3]/20">
              Propuesta de Valor
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#013A57] mb-6 leading-tight">
              Una Alianza <span className="text-[#75CBB3]">Estratégica</span>, No Solo un Producto
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Box className="w-6 h-6" />,
                title: "Portafolio de Alta Diferenciación",
                desc: "Accede a sistemas con tecnologías propietarias (LeapCore™, ThinBoom™, Arch System) que no compiten con el mercado genérico de gel o espuma. Ofrecemos productos con memoria geométrica y soporte real para usuarios de hasta 110 kg (220 lbs)."
              },
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "Transferencia de Conocimiento",
                desc: "Programas de capacitación técnica en biomecánica podal y ergonomía para tus equipos de ventas y especialistas en salud. Elevamos el nivel de asesoría de tu fuerza comercial."
              },
              {
                icon: <Layout className="w-6 h-6" />,
                title: "Herramientas de Venta Inteligente",
                desc: "Acceso exclusivo a nuestro Consultor de IA para facilitar la prescripción precisa de sistemas en punto de venta, reduciendo el margen de error y aumentando la satisfacción del cliente final."
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Gestión de Salud Ocupacional",
                desc: "Soluciones diseñadas para mejorar la postura y neutralizar dolores de rodilla y cadera en entornos industriales agresivos, convirtiéndote en un proveedor clave para la seguridad laboral."
              }
            ].map((item, idx) => (
              <div key={idx} className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#75CBB3]/30 transition-all duration-500 hover:-translate-y-1">
                <div className="w-14 h-14 bg-[#e6fffb] rounded-2xl flex items-center justify-center text-[#013A57] mb-6 group-hover:bg-[#75CBB3] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-[#013A57] mb-3 uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos para Distribuidores */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#e6fffb] rounded-full text-[#013A57] text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-[#75CBB3]/20">
              Documentación Técnica
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#013A57] mb-6 leading-tight">
              Recursos para <span className="text-[#75CBB3]">Distribuidores</span>
            </h2>
            <p className="text-slate-500 max-w-3xl mx-auto text-xl leading-relaxed">
              Ponemos a tu disposición toda la documentación técnica para facilitar la integración de la marca en tu cartera.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Dossier Técnico B2B",
                desc: "Especificaciones de materiales y validaciones mecánicas."
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Guía de Aplicación por Sector",
                desc: "Soluciones específicas para industria, deporte y salud."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Certificaciones de Resiliencia",
                desc: "Pruebas de carga y fatiga de +8 horas."
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-[#75CBB3]/30 transition-all group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-[#75CBB3] group-hover:bg-[#013A57] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-[#013A57] mb-3 uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué asociarse */}
      <section className="py-24 bg-gradient-to-br from-[#013A57] to-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#75CBB3]/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#75CBB3]/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-[#75CBB3] text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-white/20">
              La Diferencia Rana Walk®
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              ¿Por qué asociarse con <span className="text-[#75CBB3]">Rana Walk®</span>?
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-10">
              Porque somos la convergencia entre la <strong className="text-white">inspiración biológica de Costa Rica</strong> y la <strong className="text-white">ingeniería médica de exportación</strong>. Ofrecemos un producto que no colapsa, no se degrada y garantiza la fidelidad de tus clientes a través de resultados biomecánicos tangibles.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={scrollToForm}
                className="px-8 py-4 bg-[#75CBB3] text-[#013A57] rounded-full font-black uppercase tracking-widest hover:bg-white transition-colors shadow-xl"
              >
                Solicitar Dossier Comercial
              </button>
              <button
                onClick={scrollToForm}
                className="px-8 py-4 bg-white/10 text-white border border-white/30 rounded-full font-black uppercase tracking-widest hover:bg-white/20 transition-colors"
              >
                Contactar Consultor B2B
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section id="form-section" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-[#e6fffb] rounded-full text-[#013A57] text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-[#75CBB3]/20">
                Formulario de Solicitud
              </span>
              <h2 className="text-4xl font-black text-[#013A57] mb-6">Dossier Comercial B2B</h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Eleva tu portafolio al estándar de la Bio-Ingeniería. Completa el siguiente formulario para recibir nuestro dossier técnico y comercial. Un consultor del <strong className="text-[#013A57]">Costa Rica MedTech Hub</strong> se pondrá en contacto contigo para analizar las oportunidades de distribución en tu región.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl border border-slate-100">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-black text-[#013A57] uppercase tracking-widest mb-3">Nombre y Apellido</label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-[#013A57] placeholder:text-slate-400 focus:outline-none focus:border-[#75CBB3] focus:ring-2 focus:ring-[#75CBB3]/20 transition-all"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-[#013A57] uppercase tracking-widest mb-3">Correo Corporativo</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-[#013A57] placeholder:text-slate-400 focus:outline-none focus:border-[#75CBB3] focus:ring-2 focus:ring-[#75CBB3]/20 transition-all"
                    placeholder="socio@empresa.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-black text-[#013A57] uppercase tracking-widest mb-3">Nombre de la Empresa / Distribuidora</label>
                  <input
                    type="text"
                    required
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-[#013A57] placeholder:text-slate-400 focus:outline-none focus:border-[#75CBB3] focus:ring-2 focus:ring-[#75CBB3]/20 transition-all"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-[#013A57] uppercase tracking-widest mb-3">País / Región de Operación</label>
                  <select
                    required
                    value={formData.pais}
                    onChange={(e) => setFormData({ ...formData, pais: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-[#013A57] focus:outline-none focus:border-[#75CBB3] focus:ring-2 focus:ring-[#75CBB3]/20 transition-all"
                  >
                    <option value="">Selecciona tu región</option>
                    <option value="usa">USA</option>
                    <option value="europa">Europa</option>
                    <option value="brasil">Brasil</option>
                    <option value="latam">Latam</option>
                    <option value="global">Global</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-black text-[#013A57] uppercase tracking-widest mb-4">Sector de Especialización</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { id: 'industrial', label: 'Seguridad Industrial y Salud Ocupacional' },
                    { id: 'deportivo', label: 'Artículos Deportivos de Alto Rendimiento' },
                    { id: 'medico', label: 'Sector Médico / Ortopédico' },
                    { id: 'retail', label: 'Retail Especializado' }
                  ].map((sector) => (
                    <label
                      key={sector.id}
                      className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${formData.sectores.includes(sector.id)
                        ? 'bg-[#e6fffb] border-[#75CBB3] text-[#013A57]'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-[#75CBB3]/50'
                        }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.sectores.includes(sector.id)}
                        onChange={() => handleSectorChange(sector.id)}
                        className="w-5 h-5 rounded border-slate-300 text-[#75CBB3] focus:ring-[#75CBB3]"
                      />
                      <span className="text-sm font-medium">{sector.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-xs font-black text-[#013A57] uppercase tracking-widest mb-3">Mensaje Adicional</label>
                <textarea
                  rows={4}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-[#013A57] placeholder:text-slate-400 focus:outline-none focus:border-[#75CBB3] focus:ring-2 focus:ring-[#75CBB3]/20 transition-all resize-none"
                  placeholder="Breve descripción de su volumen de distribución actual..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-[#013A57] text-white rounded-full font-black uppercase tracking-[0.2em] hover:bg-[#066383] transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transform transition-all"
              >
                Solicitar Acceso al Dossier Técnico
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contenido del Dossier */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#e6fffb] rounded-full text-[#013A57] text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-[#75CBB3]/20">
              📂 Contenido del Dossier
            </span>
            <h2 className="text-3xl font-black text-[#013A57] mb-4">Lo que el socio recibirá</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Una vez enviado el formulario, recibirás un archivo PDF de alta calidad con toda la información técnica y comercial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { num: "01", title: "Certificaciones de Resiliencia", desc: "Resultados de las pruebas de fatiga de +8 horas y soporte de carga de 110 kg (220 lbs)." },
              { num: "02", title: "Especificaciones de Materiales", desc: "Detalle químico del PU de bi-densidad (LeapCore™) y la matriz reactiva del ThinBoom™." },
              { num: "03", title: "Ficha de Origen", desc: "Respaldo de fabricación y validación en el Costa Rica MedTech Hub." },
              { num: "04", title: "Comparativa de Mercado", desc: "Tabla comparativa: Rana Walk® vs. Plantillas genéricas de Gel/Espuma." },
              { num: "05", title: "Guía de Implementación B2B", desc: "Cómo integrar el Consultor de IA en el punto de venta y programas de capacitación." }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-[#75CBB3]/30 transition-all group relative overflow-hidden">
                <span className="absolute top-4 right-4 text-4xl font-black text-slate-100 group-hover:text-[#e6fffb] transition-colors">{item.num}</span>
                <div className="w-10 h-1 bg-[#75CBB3] rounded-full mb-4 group-hover:w-16 transition-all"></div>
                <h4 className="font-black text-[#013A57] mb-2 relative z-10">{item.title}</h4>
                <p className="text-slate-500 text-sm relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Confirmación */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fadeIn">
          <div className="bg-white rounded-[2.5rem] p-10 max-w-lg w-full relative shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#e6fffb] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-[#75CBB3]" />
              </div>
              <h3 className="text-2xl font-black text-[#013A57] mb-4">Solicitud Procesada con Éxito</h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                Gracias por tu interés en integrar el estándar de bio-ingeniería de <strong className="text-[#013A57]">Rana Walk®</strong>. Hemos enviado el dossier comercial a tu correo electrónico.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Uno de nuestros <strong className="text-[#013A57]">directores regionales</strong> se comunicará contigo en las próximas <strong className="text-[#75CBB3]">48 horas</strong> para explorar esta alianza estratégica.
              </p>
              <p className="text-[#75CBB3] font-bold italic mb-8">"Name it, leap forward."</p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full py-4 bg-[#013A57] text-white rounded-full font-black uppercase tracking-widest hover:bg-[#066383] transition-colors"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DistributorsView;
