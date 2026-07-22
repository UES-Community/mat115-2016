'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, CheckCircle2, FunctionSquare, XCircle } from 'lucide-react';
import MathRender from '@/components/MathRender';

const functions = [
  { id: 'square', expression: 'f(x) = x²', type: 'Par', explanation: 'f(−x) = (−x)² = x² = f(x).' },
  { id: 'cube', expression: 'g(x) = x³', type: 'Impar', explanation: 'g(−x) = (−x)³ = −x³ = −g(x).' },
  { id: 'mixed', expression: 'h(x) = x² + x', type: 'Ni par ni impar', explanation: 'Combina una parte par y una parte impar, así que no cumple ninguna igualdad completa.' },
];

export default function EvenOddFunctionsPage() {
  const [selectedId, setSelectedId] = useState('square');
  const [answer, setAnswer] = useState<boolean | null>(null);
  const selected = functions.find((item) => item.id === selectedId) ?? functions[0];

  return (
    <div className="mx-auto max-w-[1200px] space-y-10 px-4 py-10 sm:py-16">
      <div className="space-y-5"><Link href="/unidades/unidad-1" className="inline-flex items-center gap-2 text-sm text-ash transition-colors hover:text-quartz"><ArrowLeft className="h-4 w-4" />Volver a la guía de Unidad 1</Link><div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sapphire-hairline bg-cobalt-panel text-signal-blue"><FunctionSquare className="h-6 w-6" /></div><div className="space-y-2"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-frosted-lilac">Unidad 1 · Tema 11</p><h1 className="font-figtree text-3xl font-medium tracking-tight text-quartz sm:text-5xl">Funciones pares e impares</h1><p className="max-w-3xl text-base leading-relaxed text-mist">Usa la simetría para reconocer funciones pares, impares o ninguna de las dos.</p></div></div></div>

      <section className="grid gap-5 md:grid-cols-2"><article className="agentql-card space-y-4"><p className="text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Criterios</p><MathRender math="\\text{Par: } f(-x)=f(x) \\quad \\text{Impar: } f(-x)=-f(x)" block /><p className="text-sm leading-relaxed text-mist">Las funciones pares tienen simetría respecto del eje y; las impares, respecto del origen.</p></article><article className="agentql-card space-y-4"><p className="text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Procedimiento</p><p className="text-sm leading-relaxed text-mist">1. Sustituye x por −x. 2. Simplifica. 3. Compara con f(x) y con −f(x).</p><MathRender math="f(-x) \\stackrel{?}{=} f(x)" block /></article></section>

      <section className="agentql-highlight-card space-y-6"><div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Clasificador de simetría</p><h2 className="font-figtree text-2xl text-quartz">Elige una función</h2></div><div className="flex flex-wrap gap-3">{functions.map((item) => <button key={item.id} type="button" onClick={() => setSelectedId(item.id)} className={`rounded-full border px-4 py-2 text-sm transition-colors ${selectedId === item.id ? 'border-frosted-lilac bg-cobalt-panel text-quartz' : 'border-obsidian-edge text-mist hover:border-sapphire-hairline hover:text-quartz'}`}>{item.expression}</button>)}</div><div className="rounded-lg border border-sapphire-hairline bg-cobalt-panel/60 p-5"><p className="font-mono text-xl text-frosted-lilac">{selected.expression}</p><p className="mt-2 text-sm text-mist"><span className="font-semibold text-quartz">Clasificación:</span> {selected.type}. {selected.explanation}</p></div></section>

      <section className="agentql-card space-y-5"><div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Autoevaluación</p><h2 className="font-figtree text-xl text-quartz">¿f(x) = x³ es una función impar?</h2></div><div className="flex gap-3">{[true, false].map((value) => <button key={String(value)} type="button" onClick={() => setAnswer(value)} className={`rounded-full border px-5 py-2 text-sm transition-colors ${answer === value ? 'border-frosted-lilac bg-cobalt-panel text-quartz' : 'border-obsidian-edge text-mist hover:border-sapphire-hairline hover:text-quartz'}`}>{value ? 'Verdadero' : 'Falso'}</button>)}</div>{answer !== null && <div className={`flex items-start gap-3 text-sm ${answer ? 'text-emerald-200' : 'text-pink-200'}`} role="status">{answer ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : <XCircle className="h-5 w-5 shrink-0" />}<p>{answer ? 'Correcto: (−x)³ = −x³, por lo que la función es impar.' : 'Comprueba f(−x): para x³ se obtiene −x³, que es −f(x).'}</p></div>}</section>
    </div>
  );
}
