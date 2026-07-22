'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowLeft, CheckCircle2, Infinity, XCircle } from 'lucide-react';
import MathRender from '@/components/MathRender';

const samplePoints = [1.5, 1.9, 1.99, 2.01, 2.1, 2.5];

export default function InfiniteLimitsPage() {
  const [answer, setAnswer] = useState<boolean | null>(null);
  const values = useMemo(
    () => samplePoints.map((x) => ({ x, y: (1 / (x - 2)).toFixed(2) })),
    [],
  );

  return (
    <div className="mx-auto max-w-[1200px] space-y-10 px-4 py-10 sm:py-16">
      <div className="space-y-5">
        <Link href="/unidades/unidad-2" className="inline-flex items-center gap-2 text-sm text-ash transition-colors hover:text-quartz"><ArrowLeft className="h-4 w-4" />Volver a la guía de Unidad 2</Link>
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sapphire-hairline bg-cobalt-panel text-plasma-pink"><Infinity className="h-6 w-6" /></div>
          <div className="space-y-2"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-frosted-lilac">Unidad 2 · Tema 06</p><h1 className="font-figtree text-3xl font-medium tracking-tight text-quartz sm:text-5xl">Límites infinitos</h1><p className="max-w-3xl text-base leading-relaxed text-mist">Describe lo que ocurre cuando los valores de una función crecen sin cota al acercarse a una asíntota vertical.</p></div>
        </div>
      </div>

      <section className="agentql-card space-y-4"><p className="text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Idea clave</p><MathRender math="\\lim_{x \\to 2^-}\\frac{1}{x-2}=-\\infty,\\qquad \\lim_{x \\to 2^+}\\frac{1}{x-2}=+\\infty" block /><p className="text-sm leading-relaxed text-mist">Los símbolos ±∞ no representan números reales. Indican que la función puede superar cualquier valor positivo o negativo cuando x se aproxima a 2 por el lado correspondiente. La recta x = 2 es una asíntota vertical.</p></section>

      <section className="agentql-highlight-card space-y-5"><div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Laboratorio de aproximación</p><h2 className="font-figtree text-2xl text-quartz">Observa f(x) = 1/(x − 2)</h2></div><div className="overflow-x-auto rounded-lg border border-obsidian-edge"><table className="w-full min-w-[420px] text-left text-sm"><thead className="bg-cobalt-panel/70 text-frosted-lilac"><tr><th className="px-4 py-3 font-medium">x</th><th className="px-4 py-3 font-medium">f(x)</th><th className="px-4 py-3 font-medium">Lectura</th></tr></thead><tbody className="divide-y divide-inkline/70 text-mist">{values.map(({ x, y }) => <tr key={x}><td className="px-4 py-3 font-mono">{x}</td><td className="px-4 py-3 font-mono text-quartz">{y}</td><td className="px-4 py-3">{x < 2 ? 'Se aproxima a −∞' : 'Se aproxima a +∞'}</td></tr>)}</tbody></table></div><p className="text-sm leading-relaxed text-ash">Cuanto más cerca está x de 2, mayor es el valor absoluto de f(x). La tabla muestra por qué es necesario indicar el lado de aproximación.</p></section>

      <section className="agentql-card space-y-5"><div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Autoevaluación</p><h2 className="font-figtree text-xl text-quartz">¿Es correcta la afirmación: lim x→2⁺ 1/(x−2) = +∞?</h2></div><div className="flex gap-3"><button type="button" onClick={() => setAnswer(true)} className={`rounded-full border px-5 py-2 text-sm ${answer === true ? 'border-frosted-lilac bg-cobalt-panel text-quartz' : 'border-obsidian-edge text-mist'}`}>Verdadero</button><button type="button" onClick={() => setAnswer(false)} className={`rounded-full border px-5 py-2 text-sm ${answer === false ? 'border-frosted-lilac bg-cobalt-panel text-quartz' : 'border-obsidian-edge text-mist'}`}>Falso</button></div>{answer !== null && <div className={`flex items-start gap-3 text-sm ${answer ? 'text-emerald-200' : 'text-pink-200'}`} role="status">{answer ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}<p>{answer ? 'Correcto: por la derecha, x − 2 es positivo y muy pequeño, por lo que el cociente crece hacia +∞.' : 'Revisa el signo: cuando x se acerca a 2 por la derecha, x − 2 es positivo y muy pequeño.'}</p></div>}</section>
    </div>
  );
}
