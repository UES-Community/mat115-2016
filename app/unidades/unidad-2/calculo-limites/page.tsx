'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowLeft, CheckCircle2, FunctionSquare, XCircle } from 'lucide-react';
import MathRender from '@/components/MathRender';

export default function LimitCalculationPage() {
  const [xValue, setXValue] = useState('1.9');
  const [answer, setAnswer] = useState<boolean | null>(null);
  const result = useMemo(() => {
    const x = Number(xValue);
    if (!Number.isFinite(x)) return 'Escribe un número real.';
    if (x === 2) return 'Forma 0/0; simplifica primero.';
    return String(Number(((x * x - 4) / (x - 2)).toFixed(6)));
  }, [xValue]);

  return (
    <div className="mx-auto max-w-[1200px] space-y-10 px-4 py-10 sm:py-16"><div className="space-y-5"><Link href="/unidades/unidad-2" className="inline-flex items-center gap-2 text-sm text-ash transition-colors hover:text-quartz"><ArrowLeft className="h-4 w-4" />Volver a la guía de Unidad 2</Link><div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sapphire-hairline bg-cobalt-panel text-signal-blue"><FunctionSquare className="h-6 w-6" /></div><div className="space-y-2"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-frosted-lilac">Unidad 2 · Tema 04</p><h1 className="font-figtree text-3xl font-medium tracking-tight text-quartz sm:text-5xl">Cálculo de límites aplicando teoremas</h1><p className="max-w-3xl text-base leading-relaxed text-mist">Combina sustitución directa y factorización para resolver límites que presentan una forma indeterminada.</p></div></div></div><section className="agentql-card space-y-4"><p className="text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Estrategia</p><MathRender math="\\frac{x^2-4}{x-2} = \\frac{(x-2)(x+2)}{x-2} = x+2" block /><p className="text-sm leading-relaxed text-mist">Cuando aparece 0/0, busca una simplificación válida para x ≠ 2 y calcula el límite de la expresión equivalente.</p></section><section className="agentql-highlight-card space-y-6"><div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Laboratorio</p><h2 className="font-figtree text-2xl text-quartz">Acércate a x = 2</h2></div><label className="block max-w-xs space-y-2 text-sm text-ash">Valor de x<input value={xValue} onChange={(event) => setXValue(event.target.value)} inputMode="decimal" className="block w-full rounded-inputs border border-obsidian-edge bg-void px-3 py-2.5 font-mono text-sm text-quartz outline-none focus:border-signal-blue" /></label><div className="rounded-lg border border-sapphire-hairline bg-cobalt-panel/60 p-4 font-mono text-2xl text-frosted-lilac">Valor simplificado: {result}</div></section><section className="agentql-card space-y-5"><div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Autoevaluación</p><h2 className="font-figtree text-xl text-quartz">¿El límite es igual a 4?</h2></div><div className="flex gap-3">{[true, false].map((v) => <button key={String(v)} type="button" onClick={() => setAnswer(v)} className={`rounded-full border px-5 py-2 text-sm ${answer === v ? 'border-frosted-lilac bg-cobalt-panel text-quartz' : 'border-obsidian-edge text-mist'}`}>{v ? 'Verdadero' : 'Falso'}</button>)}</div>{answer !== null && <div className={`flex items-start gap-3 text-sm ${answer ? 'text-emerald-200' : 'text-pink-200'}`} role="status">{answer ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}<p>{answer ? 'Correcto: la expresión simplificada es x + 2 y en x = 2 vale 4.' : 'Factoriza x² − 4 para cancelar el factor que provoca 0/0.'}</p></div>}</section></div>
  );
}
