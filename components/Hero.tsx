'use client';

import React from 'react';
import MathRender from './MathRender';
import { ArrowRight, Terminal, Sparkles, Layers } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:py-24 border-b border-inkline">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Headline & Action */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-tags bg-cobalt-panel border border-sapphire-hairline text-frosted-lilac text-xs font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-plasma-pink" />
            <span>Matemática I · UES MAT115-2016</span>
          </div>

          <h1 className="font-figtree font-medium text-[40px] sm:text-[54px] lg:text-[64px] leading-[1.05] tracking-[-1.28px] text-quartz">
            Análisis Matemático & <br />
            <span className="bg-gradient-to-r from-quartz via-frosted-lilac to-signal-blue bg-clip-text text-transparent">
              Simulación Simbólica
            </span>
          </h1>

          <p className="font-sans font-light text-ash text-base sm:text-lg max-w-xl leading-relaxed">
            Plataforma interactiva para el estudio integral de Funciones, Límites, Derivadas, Integrales y Geometría Analítica en <MathRender math="\mathbb{R}^3" />. Diseñado con precisión para la carrera de Matemática I.
          </p>

          {/* Action CTAs strictly following AgentQL specs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#unidades" className="btn-primary">
              Iniciar Programa
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <a href="#calculadora" className="btn-ghost">
              Explorar Calculadoras
            </a>
            <a href="#simulador3d" className="btn-accent text-sm">
              <Layers className="w-4 h-4" />
              Simulación 3D
            </a>
          </div>

          {/* Badges strip */}
          <div className="pt-6 border-t border-inkline grid grid-cols-3 gap-4 text-xs text-mist">
            <div>
              <span className="block font-figtree font-semibold text-lg text-quartz">5</span>
              <span>Unidades Teóricas</span>
            </div>
            <div>
              <span className="block font-figtree font-semibold text-lg text-quartz">2D & 3D</span>
              <span>Simuladores Visuales</span>
            </div>
            <div>
              <span className="block font-figtree font-semibold text-lg text-quartz">CAS</span>
              <span>Motor Simbólico MathJS</span>
            </div>
          </div>
        </div>

        {/* Right Column: Signature AgentQL IDE Code / Math Visual */}
        <div className="lg:col-span-5 relative">
          <div className="code-block p-5 shadow-xl-2 relative z-10 backdrop-blur-md">
            {/* Header row */}
            <div className="flex items-center justify-between border-b border-inkline pb-3 mb-4 text-xs text-ash">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-signal-blue" />
                <span className="font-mono text-frosted-lilac">calculus_kernel.ts</span>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded bg-cobalt-panel text-frosted-lilac">
                MAT115 Engine
              </span>
            </div>

            {/* Code Body with syntax styling */}
            <div className="space-y-3 font-mono text-xs leading-relaxed">
              <div className="text-mist">
                <span className="text-slate">01</span> <span className="text-plasma-pink">import</span> &#123; derivative, integrate &#125; <span className="text-plasma-pink">from</span> <span className="text-[#28b6ff]">&apos;mathjs&apos;</span>;
              </div>
              <div className="text-mist">
                <span className="text-slate">02</span>
              </div>
              <div className="text-mist">
                <span className="text-slate">03</span> <span className="text-[#8798c1]">// Teorema Fundamental del Cálculo</span>
              </div>
              <div className="text-mist">
                <span className="text-slate">04</span> <span className="text-plasma-pink">const</span> <span className="text-quartz">f</span> = (x) =&gt; <span className="text-[#28b6ff]">&apos;x^3 * sin(x)&apos;</span>;
              </div>
              <div className="text-mist">
                <span className="text-slate">05</span> <span className="text-plasma-pink">const</span> <span className="text-quartz">df_dx</span> = derivative(f(<span className="text-[#28b6ff]">&apos;x&apos;</span>), <span className="text-[#28b6ff]">&apos;x&apos;</span>);
              </div>

              {/* Formula Render Box */}
              <div className="mt-4 p-3 rounded-lg bg-cobalt-panel/60 border border-sapphire-hairline text-quartz font-sans">
                <span className="text-[11px] text-ash block mb-1 uppercase tracking-wider font-semibold">
                  Ecuación del Sistema:
                </span>
                <div className="text-center py-2 text-frosted-lilac overflow-x-auto">
                  <MathRender math="\int_{a}^{b} f(x) \, dx = F(b) - F(a)" block />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Aurora glow underneath code mockup */}
          <div className="absolute -inset-4 bg-gradient-to-r from-aurora-purple/20 to-plasma-pink/20 blur-2xl rounded-2xl -z-10" />
        </div>

      </div>
    </section>
  );
}
