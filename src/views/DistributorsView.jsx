import React from 'react';
import { Box, BookOpen, Layout } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';

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
                <Box className="text-[#013A57]" />
              </div>
              <div>
                <h4 className="font-black text-[#013A57] uppercase tracking-widest text-sm mb-2">Portafolio Diferenciado</h4>
                <p className="text-slate-500 text-sm italic">Accede a sistemas con tecnologías protegidas (LeapCore™, ThinBoom™) que no compiten con el mercado masivo de gel.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[#e6fffb] rounded-xl flex items-center justify-center shrink-0">
                <BookOpen className="text-[#013A57]" />
              </div>
              <div>
                <h4 className="font-black text-[#013A57] uppercase tracking-widest text-sm mb-2">Capacitación Técnica</h4>
                <p className="text-slate-500 text-sm italic">Programas de entrenamiento en biomecánica podal para tu equipo de ventas y expertos en salud.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[#e6fffb] rounded-xl flex items-center justify-center shrink-0">
                <Layout className="text-[#013A57]" />
              </div>
              <div>
                <h4 className="font-black text-[#013A57] uppercase tracking-widest text-sm mb-2">Herramientas B2B</h4>
                <p className="text-slate-500 text-sm italic">Acceso a nuestro consultor de IA para facilitar la recomendación de sistemas en punto de venta.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 p-10 rounded-3xl shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#75CBB3]/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Solicitar Dossier Comercial</h3>
          <p className="text-slate-400 text-sm mb-8 italic">Únete al ecosistema Rana Walk®</p>
          <form className="space-y-5" onSubmit={e => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Empresa / Institución" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#75CBB3]" />
              <input type="text" placeholder="País / Región" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#75CBB3]" />
            </div>
            <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#75CBB3]">
              <option value="" className="bg-slate-900">Tipo de Negocio</option>
              <option value="distribuidor" className="bg-slate-900">Distribuidor Mayorista</option>
              <option value="retail" className="bg-slate-900">Retail Especializado</option>
              <option value="salud" className="bg-slate-900">Salud & Ortopedia</option>
            </select>
            <input type="email" placeholder="Email corporativo" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#75CBB3]" />
            <button className="w-full py-4 bg-[#75CBB3] text-[#013A57] rounded-xl font-black uppercase tracking-widest hover:bg-[#066383] transition-colors shadow-lg">Enviar Solicitud</button>
            <p className="text-[10px] text-center text-slate-500 uppercase tracking-widest mt-4">Verificaremos tu identidad corporativa en 24-48h.</p>
          </form>
        </div>
      </div>

      {/* Anexos enlazados */}
      <div className="mt-24 pt-24 border-t border-slate-100">
        <h3 className="text-2xl font-black text-[#013A57] mb-12 uppercase tracking-tight text-center">Material Técnico descargable</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Garantía de Satisfacción", file: "Garantia_Rana_Walk.pdf" },
            { title: "Dossier Técnico B2B", file: "Dossier_Corporativo.pdf" },
            { title: "Política de Privacidad", file: "Privacidad_Datos.pdf" },
            { title: "Condiciones de Uso", file: "Terminos_Condiciones.pdf" }
          ].map((doc, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center group hover:border-[#75CBB3] transition-all">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:bg-[#75CBB3] transition-colors">
                <BookOpen size={20} className="text-[#013A57]" />
              </div>
              <h4 className="font-bold text-[#013A57] text-sm mb-4 uppercase tracking-tighter leading-tight">{doc.title}</h4>
              <button className="text-[10px] font-black uppercase tracking-widest text-[#75CBB3] hover:underline cursor-pointer">
                Descargar PDF
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default DistributorsView;
