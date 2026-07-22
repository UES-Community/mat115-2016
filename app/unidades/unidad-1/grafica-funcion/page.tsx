'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, CheckCircle2, LineChart, XCircle } from 'lucide-react';
import FunctionPlotter2D from '@/components/FunctionPlotter2D';
import MathRender from '@/components/MathRender';

export default function FunctionGraphPage() {
  const [answer, setAnswer] = useState<boolean | null>(null);

  return (
    <div className="space-y-12 py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] space-y-5 px-4">
        <Link href="/unidades/unidad-1" className="inline-flex items-center gap-2 text-sm text-ash transition-colors hover:text-quartz">
          <ArrowLeft className="h-4 w-4" />
          Volver a la guía de Unidad 1
        </Link>
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sapphire-hairline bg-cobalt-panel text-frosted-lilac">
            <LineChart className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-frosted-lilac">Unidad 1 · Tema 02</p>
            <h1 className="font-figtree text-3xl font-medium tracking-tight text-quartz sm:text-5xl">Gráfica de una función</h1>
            <p className="max-w-3xl text-base leading-relaxed text-mist">Lee una función como un conjunto de puntos y usa el graficador para conectar dominio, imagen y comportamiento visual.</p>
          </div>
        </div>
      </div>

      <section className="mx-auto grid max-w-[1200px] gap-5 px-4 md:grid-cols-3">
        <article className="agentql-card space-y-3 md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Idea central</p>
          <h2 className="font-figtree text-2xl text-quartz">Cada punto cuenta una relación</h2>
          <p className="text-sm leading-relaxed text-mist">La gráfica de f contiene exactamente los puntos (x, f(x)) para las entradas permitidas. Las pruebas de la recta vertical ayudan a decidir si una curva representa una función.</p>
          <div className="rounded-lg border border-sapphire-hairline bg-cobalt-panel/60 p-4 text-center text-frosted-lilac">
            <MathRender math="\\operatorname{Graf}(f) = \\{(x, y) \\in \\mathbb{R}^2 : y = f(x)\\}" block />
          </div>
        </article>
        <aside className="agentql-card space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-ash">Checklist de lectura</p>
          <ul className="space-y-3 text-sm text-mist">
            <li>• Localiza intersecciones con los ejes.</li>
            <li>• Observa dónde la curva crece o decrece.</li>
            <li>• Identifica huecos, asíntotas y extremos.</li>
          </ul>
        </aside>
      </section>

      <FunctionPlotter2D />

      <section className="mx-auto max-w-[1200px] px-4">
        <div className="agentql-highlight-card space-y-5">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Autoevaluación</p>
            <h2 className="font-figtree text-xl text-quartz">Para f(x) = x² − 1, ¿el punto (2, 3) está en la gráfica?</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {[{ label: 'Sí', value: true }, { label: 'No', value: false }].map((option) => (
              <button
                key={option.label}
                type="button"
                onClick={() => setAnswer(option.value)}
                className={`rounded-full border px-5 py-2 text-sm transition-colors ${answer === option.value ? 'border-frosted-lilac bg-cobalt-panel text-quartz' : 'border-obsidian-edge text-mist hover:border-sapphire-hairline hover:text-quartz'}`}
              >
                {option.label}
              </button>
            ))}
          </div>
          {answer !== null && (
            <div className={`flex items-start gap-3 text-sm ${answer ? 'text-emerald-200' : 'text-pink-200'}`} role="status">
              {answer ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : <XCircle className="h-5 w-5 shrink-0" />}
              <p>{answer ? 'Correcto: 2² − 1 = 3, por lo que el punto sí pertenece a la gráfica.' : 'Revisa la sustitución: al evaluar x = 2 se obtiene f(2) = 3.'}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
