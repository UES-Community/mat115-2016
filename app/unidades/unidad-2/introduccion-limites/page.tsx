'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowLeft, CheckCircle2, Infinity, XCircle } from 'lucide-react';
import MathRender from '@/components/MathRender';

export default function LimitIntroductionPage() {
  const [xValue, setXValue] = useState('0.9');
  const [answer, setAnswer] = useState<boolean | null>(null);
  const result = useMemo(() => {
    const x = Number(xValue);
    if (!Number.isFinite(x)) return 'Escribe un número real.';
    if (x === 1) return 'No definida en x = 1';
    return String(Number(((x * x - 1) / (x - 1)).toFixed(6)));
  }, [xValue]);

  return (
    <div className="mx-auto max-w-[1200px] space-y-10 px-4 py-10 sm:py-16"><div className="space-y-5"><Link href="/unidades/unidad-2" className="inline-flex items-center gap-2 text-sm text-ash transition-colors hover:text-quartz"><ArrowLeft className="h-4 w-4" />Volver a la guía de Unidad 2</Link><div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sapphire-hairline bg-cobalt-panel text-signal-blue"><Infinity className="h-6 w-6" /></div><div className="space-y-2"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-frosted-lilac">Unidad 2 · Tema 01</p><h1 className="font-figtree text-3xl font-medium tracking-tight text-quartz sm:text-5xl">Introducción a los límites</h1><p className="max-w-3xl text-base leading-relaxed text-mist">Describe qué valor se aproxima una función cuando la entrada se acerca a un punto, incluso si la función no está definida allí.</p></div></div></div><section className="grid gap-5 md:grid-cols-2"><article className="agentql-card space-y-4"><p className="text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Idea central</p><MathRender math="\\lim_{x \\to a}f(x) = L" block /><p className="text-sm leading-relaxed text-mist">El límite mira el comportamiento cercano a a, no necesariamente el valor exacto f(a).</p></article><article className="agentql-card space-y-4"><p className="text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Ejemplo removible</p><MathRender math="\\lim_{x \\to 1}\\frac{x^2-1}{x-1} = 2" block /><p className="text-sm leading-relaxed text-mist">Aunque la fracción no está definida en x = 1, para x ≠ 1 se simplifica a x + 1.</p></article></section><section className="agentql-highlight-card space-y-6"><div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Laboratorio de aproximación</p><h2 className="font-figtree text-2xl text-quartz">Evalúa (x² − 1)/(x − 1) cerca de x = 1</h2></div><label className="block max-w-xs space-y-2 text-sm text-ash">Valor de x<input value={xValue} onChange={(event) => setXValue(event.target.value)} inputMode="decimal" className="block w-full rounded-inputs border border-obsidian-edge bg-void px-3 py-2.5 font-mono text-sm text-quartz outline-none focus:border-signal-blue" /></label><div className="rounded-lg border border-sapphire-hairline bg-cobalt-panel/60 p-4 font-mono text-2xl text-frosted-lilac">f(x) = {result}</div></section><section className="agentql-card space-y-5"><div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Autoevaluación</p><h2 className="font-figtree text-xl text-quartz">¿El límite anterior es igual a 2?</h2></div><div className="flex gap-3">{[true, false].map((value) => <button key={String(value)} type="button" onClick={() => setAnswer(value)} className={`rounded-full border px-5 py-2 text-sm transition-colors ${answer === value ? 'border-frosted-lilac bg-cobalt-panel text-quartz' : 'border-obsidian-edge text-mist hover:border-sapphire-hairline hover:text-quartz'}`}>{value ? 'Verdadero' : 'Falso'}</button>)}</div>{answer !== null && <div className={`flex items-start gap-3 text-sm ${answer ? 'text-emerald-200' : 'text-pink-200'}`} role="status">{answer ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : <XCircle className="h-5 w-5 shrink-0" />}<p>{answer ? 'Correcto: al acercarse a 1, x + 1 se acerca a 2.' : 'Simplifica la fracción para ver que cerca de 1 se comporta como x + 1.'}</p></div>}</section></div>
  );
}
