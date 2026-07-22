'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, CheckCircle2, FunctionSquare, XCircle } from 'lucide-react';
import MathRender from '@/components/MathRender';

const laws = [
  { id: 'sum', label: 'Suma', formula: '\\lim(f+g) = \\lim f + \\lim g', example: 'lim[x→2](x² + 3x) = 4 + 6 = 10.' },
  { id: 'product', label: 'Producto', formula: '\\lim(fg) = (\\lim f)(\\lim g)', example: 'lim[x→1](x + 2)(x − 1) = 3 · 0 = 0.' },
  { id: 'quotient', label: 'Cociente', formula: '\\lim(f/g) = \\frac{\\lim f}{\\lim g}, \\quad \\lim g \\ne 0', example: 'lim[x→2](x + 1)/(x + 2) = 3/4.' },
];

export default function LimitTheoremsPage() {
  const [selectedId, setSelectedId] = useState('sum');
  const [answer, setAnswer] = useState<boolean | null>(null);
  const selected = laws.find((law) => law.id === selectedId) ?? laws[0];

  return (
    <div className="mx-auto max-w-[1200px] space-y-10 px-4 py-10 sm:py-16"><div className="space-y-5"><Link href="/unidades/unidad-2" className="inline-flex items-center gap-2 text-sm text-ash transition-colors hover:text-quartz"><ArrowLeft className="h-4 w-4" />Volver a la guía de Unidad 2</Link><div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sapphire-hairline bg-cobalt-panel text-signal-blue"><FunctionSquare className="h-6 w-6" /></div><div className="space-y-2"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-frosted-lilac">Unidad 2 · Tema 03</p><h1 className="font-figtree text-3xl font-medium tracking-tight text-quartz sm:text-5xl">Teoremas sobre límites</h1><p className="max-w-3xl text-base leading-relaxed text-mist">Descompón límites complejos usando las leyes algebraicas y reconoce cuándo es válida la sustitución directa.</p></div></div></div><section className="agentql-card space-y-4"><p className="text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Principio</p><p className="text-sm leading-relaxed text-mist">Si los límites de f y g existen, las operaciones algebraicas pueden trasladarse al resultado, siempre que no aparezca una división entre cero.</p><MathRender math="\\lim_{x \\to a}[c f(x)] = c \\lim_{x \\to a}f(x)" block /></section><section className="agentql-highlight-card space-y-6"><div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Selector de ley</p><h2 className="font-figtree text-2xl text-quartz">Elige una regla para ver un ejemplo</h2></div><div className="flex flex-wrap gap-3">{laws.map((law) => <button key={law.id} type="button" onClick={() => setSelectedId(law.id)} className={`rounded-full border px-4 py-2 text-sm ${selectedId === law.id ? 'border-frosted-lilac bg-cobalt-panel text-quartz' : 'border-obsidian-edge text-mist'}`}>{law.label}</button>)}</div><div className="rounded-lg border border-sapphire-hairline bg-cobalt-panel/60 p-5"><MathRender math={selected.formula} block /><p className="mt-3 text-sm text-mist">{selected.example}</p></div></section><section className="agentql-card space-y-5"><div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Autoevaluación</p><h2 className="font-figtree text-xl text-quartz">lim[x→3](x + 1)(x − 2) = 4</h2></div><div className="flex gap-3">{[true, false].map((v) => <button key={String(v)} type="button" onClick={() => setAnswer(v)} className={`rounded-full border px-5 py-2 text-sm ${answer === v ? 'border-frosted-lilac bg-cobalt-panel text-quartz' : 'border-obsidian-edge text-mist'}`}>{v ? 'Verdadero' : 'Falso'}</button>)}</div>{answer !== null && <div className={`flex items-start gap-3 text-sm ${answer ? 'text-emerald-200' : 'text-pink-200'}`} role="status">{answer ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}<p>{answer ? 'Correcto: por sustitución, (3 + 1)(3 − 2) = 4.' : 'Aplica la ley del producto y sustituye x = 3 en cada factor.'}</p></div>}</section></div>
  );
}
