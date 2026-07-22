'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowLeft, CheckCircle2, FunctionSquare, XCircle } from 'lucide-react';
import MathRender from '@/components/MathRender';

export default function ExponentialLogarithmicPage() {
  const [initial, setInitial] = useState('100');
  const [rate, setRate] = useState('0.05');
  const [periods, setPeriods] = useState('3');
  const [answer, setAnswer] = useState<boolean | null>(null);
  const result = useMemo(() => {
    const values = [initial, rate, periods].map(Number);
    if (values.some((value) => !Number.isFinite(value))) return 'Completa los valores.';
    return String(Number((values[0] * Math.pow(1 + values[1], values[2])).toFixed(4)));
  }, [initial, rate, periods]);

  return (
    <div className="mx-auto max-w-[1200px] space-y-10 px-4 py-10 sm:py-16">
      <div className="space-y-5"><Link href="/unidades/unidad-1" className="inline-flex items-center gap-2 text-sm text-ash transition-colors hover:text-quartz"><ArrowLeft className="h-4 w-4" />Volver a la guía de Unidad 1</Link><div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sapphire-hairline bg-cobalt-panel text-signal-blue"><FunctionSquare className="h-6 w-6" /></div><div className="space-y-2"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-frosted-lilac">Unidad 1 · Tema 08</p><h1 className="font-figtree text-3xl font-medium tracking-tight text-quartz sm:text-5xl">Funciones exponenciales y logarítmicas</h1><p className="max-w-3xl text-base leading-relaxed text-mist">Modela crecimiento y decrecimiento, y usa el logaritmo para recuperar el exponente desconocido.</p></div></div></div>

      <section className="grid gap-5 md:grid-cols-2"><article className="agentql-card space-y-4"><p className="text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Relación inversa</p><MathRender math="a^x = y \\iff \\log_a(y) = x" block /><p className="text-sm leading-relaxed text-mist">La base debe ser positiva y diferente de 1. El dominio del logaritmo contiene argumentos positivos.</p></article><article className="agentql-card space-y-4"><p className="text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Modelo de crecimiento</p><MathRender math="P(t) = P_0(1+r)^t" block /><p className="text-sm leading-relaxed text-mist">P₀ es el valor inicial, r la tasa por periodo y t el número de periodos.</p></article></section>

      <section className="agentql-highlight-card space-y-6"><div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Calculador de crecimiento</p><h2 className="font-figtree text-2xl text-quartz">Explora P(t) = P₀(1 + r)ᵗ</h2></div><div className="grid gap-4 sm:grid-cols-3"><label className="space-y-2 text-sm text-ash">Valor inicial P₀<input value={initial} onChange={(event) => setInitial(event.target.value)} inputMode="decimal" className="block w-full rounded-inputs border border-obsidian-edge bg-void px-3 py-2.5 font-mono text-sm text-quartz outline-none focus:border-signal-blue" /></label><label className="space-y-2 text-sm text-ash">Tasa r<input value={rate} onChange={(event) => setRate(event.target.value)} inputMode="decimal" className="block w-full rounded-inputs border border-obsidian-edge bg-void px-3 py-2.5 font-mono text-sm text-quartz outline-none focus:border-signal-blue" /></label><label className="space-y-2 text-sm text-ash">Periodos t<input value={periods} onChange={(event) => setPeriods(event.target.value)} inputMode="decimal" className="block w-full rounded-inputs border border-obsidian-edge bg-void px-3 py-2.5 font-mono text-sm text-quartz outline-none focus:border-signal-blue" /></label></div><div className="rounded-lg border border-sapphire-hairline bg-cobalt-panel/60 p-4 font-mono text-2xl text-frosted-lilac">P(t) = {result}</div></section>

      <section className="agentql-card space-y-5"><div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Autoevaluación</p><h2 className="font-figtree text-xl text-quartz">¿log₂(8) = 3?</h2></div><div className="flex gap-3">{[true, false].map((value) => <button key={String(value)} type="button" onClick={() => setAnswer(value)} className={`rounded-full border px-5 py-2 text-sm transition-colors ${answer === value ? 'border-frosted-lilac bg-cobalt-panel text-quartz' : 'border-obsidian-edge text-mist hover:border-sapphire-hairline hover:text-quartz'}`}>{value ? 'Verdadero' : 'Falso'}</button>)}</div>{answer !== null && <div className={`flex items-start gap-3 text-sm ${answer ? 'text-emerald-200' : 'text-pink-200'}`} role="status">{answer ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : <XCircle className="h-5 w-5 shrink-0" />}<p>{answer ? 'Correcto: 2³ = 8.' : 'Recuerda que el logaritmo pregunta qué exponente produce 8 a partir de la base 2.'}</p></div>}</section>
    </div>
  );
}
