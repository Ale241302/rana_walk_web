import React from 'react';

export default function TrustBar() {
  return (
    <div className="bg-slate-900 text-white p-8">
      <h1 className="text-2xl font-bold text-center border-b border-white/20 pb-4 mb-8">
        Instrucciones de diseño para el diseñador Grizzly
      </h1>
      {/* 1. TRUST BAR */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#75CBB3] mb-4">1. TRUST BAR (Barra de Autoridad Inmediata)</h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Ubicación: Inmediatamente debajo del Hero Section (Banner principal).</li>
          <li>Estilo Visual:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Franja delgada minimalista.</li>
              <li>Efecto: Glassmorphism (fondo translúcido) O Negro Mate.</li>
            </ul>
          </li>
          <li>Contenido:
            <ul className="list-none ml-6 mt-2 space-y-3">
              <li>
                <strong className="text-[#75CBB3]">[IZQUIERDA - ANCLA]</strong>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Logo: Costa Rica MedTech Hub.</li>
                  <li>Texto: "Diseñado en el epicentro de dispositivos médicos de Latinoamérica".</li>
                </ul>
              </li>
              <li>
                <strong className="text-[#75CBB3]">[CENTRO - EL TECH-LOOP]</strong>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Elemento: Loop infinito/carrusel.</li>
                  <li>Logos (5 Tecnologías): LeapCore™, ThinBoom™, NanoSpread™, ShockSphere™, Arch System.</li>
                  <li>Estilo Logos: Versión blanco monocromático (Look de "certificación técnica").</li>
                </ul>
              </li>
              <li>
                <strong className="text-[#75CBB3]">[DERECHA - RESPALDO GLOBAL]</strong>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Logo: PORON® XRD®.</li>
                  <li>Texto: "Material viscoelástico de Rogers Corp, USA".</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Micro-copy: "Donde el 6% de la biodiversidad mundial converge con la ingeniería médica de exportación".</li>
        </ul>
      </section>

      {/* 2. ECOSISTEMA BIOMECÁNICO */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#75CBB3] mb-4">2. ECOSISTEMA BIOMECÁNICO (Sección: "Explosión de Producto")</h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Reemplazo: Sustituye a la antigua sección "Presencia Global" (Mapa).</li>
          <li>Elemento Central: Render 3D o Fotografía High-End de la plantilla GOLIATH, abierta en capas/explosión.</li>
          <li>Call-outs (Puntos de Interacción): Líneas finas conectando partes a fichas técnicas.
            <ul className="list-none ml-6 mt-2 space-y-3">
              <li>
                <strong>Base de Soporte:</strong> Resaltar LeapCore™ y Arch System.
                <br /><span className="text-gray-400 ml-4">→ Copy: "Armazón que soporta hasta 110kg sin colapsar".</span>
              </li>
              <li>
                <strong>Puntos de Impacto:</strong> Señalar zonas de PORON® XRD®.
                <br /><span className="text-gray-400 ml-4">→ Copy: "Absorbe el 90% del impacto seco contra el concreto".</span>
              </li>
              <li>
                <strong>Zona de Despegue:</strong> Resaltar ThinBoom™.
                <br /><span className="text-gray-400 ml-4">→ Copy: "Tendón reactivo que devuelve hasta el 80% de la energía".</span>
              </li>
              <li>
                <strong>Superficie Térmica:</strong> Señalar tejido NanoSpread™.
                <br /><span className="text-gray-400 ml-4">→ Copy: "Regula la temperatura en 5°C mediante capilaridad reptiliana".</span>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* 3. CÍRCULO DINÁMICO */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#75CBB3] mb-4">3. CÍRCULO DINÁMICO DE TECNOLOGÍAS (Componente Interactivo)</h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Estructura: Menú circular interactivo.</li>
          <li>Centro: Logo de Rana Walk.</li>
          <li>Órbitas: Los 5 íconos de las tecnologías.</li>
          <li>Interacción (Hover state):
            <ol className="list-decimal list-inside ml-6 mt-2 space-y-1">
              <li>Cambio de Color: Al color corporativo correspondiente (ej: Verde agilidad, Azul estabilidad).</li>
              <li>Modelo Biológico: Aparece el animal asociado (Elefante, Felino, Carpintero, Reptil).</li>
              <li>Beneficio: Se despliega texto "Más que confort, es protección articular".</li>
            </ol>
          </li>
        </ul>
      </section>

      {/* 4. TABLA DE VALIDACIÓN */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#75CBB3] mb-4">4. TABLA DE VALIDACIÓN (Cierre de Venta)</h2>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
          <li>Estilo: Tabla comparativa limpia y autoritaria. "Rana Walk vs. Estándar".</li>
        </ul>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-white/20">
            <thead>
              <tr className="bg-white/10">
                <th className="border border-white/20 p-2 text-left">VARIABLE</th>
                <th className="border border-white/20 p-2 text-left text-red-400">GENÉRICAS ✗</th>
                <th className="border border-white/20 p-2 text-left text-green-400">RANA WALK ✓</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white/20 p-2">Arco</td>
                <td className="border border-white/20 p-2 text-red-400">Gel blando que cede</td>
                <td className="border border-white/20 p-2 text-green-400">Arch System inquebrantable</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">Resiliencia</td>
                <td className="border border-white/20 p-2 text-red-400">Se aplasta en semanas</td>
                <td className="border border-white/20 p-2 text-green-400">PU bi-densidad con memoria</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">Potencia de Paso</td>
                <td className="border border-white/20 p-2 text-red-400">(Sin retorno de energía)</td>
                <td className="border border-white/20 p-2 text-green-400">Potencia de despegue activa</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">Origen</td>
                <td className="border border-white/20 p-2 text-red-400">Manufactura masiva</td>
                <td className="border border-white/20 p-2 text-green-400">Ingeniería Grado Médico (MedTech Hub)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. ESPECIFICACIONES DE MARCA */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#75CBB3] mb-4">5. ESPECIFICACIONES DE MARCA</h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Colores Primarios:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li><span className="text-blue-400">Pantone 302 C (Azul Profundo)</span> → Estabilidad, Confianza.</li>
              <li><span className="text-[#75CBB3]">Pantone 338 C (Verde Frescura)</span> → Agilidad, Bio-mímesis.</li>
            </ul>
          </li>
          <li>Tipografía: Mantener jerarquía del manual (Proyección profesional y legible).</li>
          <li>Filosofía Visual: "Herramienta de precisión", NO "Producto de moda".</li>
        </ul>
      </section>
    </div>
  );
}