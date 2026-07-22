'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowLeft, CheckCircle2, FunctionSquare, XCircle } from 'lucide-react';
import MathRender from '@/components/MathRender';

export default function TrigonometricFunctionsPage() {
  const [amplitude, setAmplitude] = useState('2');
  const [period, setPeriod] = useState(String(2 * Math.PI));
  const [angle, setAngle] = useState(String(Math.PI / 2));
  const [answer, setAnswer] = useState<boolean | null>(null);
  const value = useMemo(() => {
    const a = Number(amplitude);
    const p = Number(period);
    const x = Number(angle);
    if (![a, p, x].every(Number.isFinite) || p === 0) return 'Completa valores válidos.';
    return String(Number((a * Math.sin((2 * Math.PI * x) / p)).toFixed(4)));
  }, [amplitude, period, angle]);

  return (
    <div className="mx-auto max-w-[1200px] space-y-10 px-4 py-10 sm:py-16">
      <div className="space-y-5"><Link href="/unidades/unidad-1" className="inline-flex items-center gap-2 text-sm text-ash transition-colors hover:text-quartz"><ArrowLeft className="h-4 w-4" />Volver a la guía de Unidad 1</Link><div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sapphire-hairline bg-cobalt-panel text-signal-blue"><FunctionSquare className="h-6 w-6" /></div><div className="space-y-2"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-frosted-lilac">Unidad 1 · Tema 09</p><h1 className="font-figtree text-3xl font-medium tracking-tight text-quartz sm:text-5xl">Funciones trigonométricas e inversas</h1><p className="max-w-3xl text-base leading-relaxed text-mist">Comprende la periodicidad y relaciona seno, coseno y sus inversas con ángulos y fenómenos oscilatorios.</p></div></div></div>

      <section className="grid gap-5 md:grid-cols-2"><article className="agentql-card space-y-4"><p className="text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Identidad fundamental</p><MathRender math="\\sin^2(x) + \\cos^2(x) = 1" block /><p className="text-sm leading-relaxed text-mist">Seno y coseno describen coordenadas sobre la circunferencia unitaria y se repiten cada 2π.</p></article><article className="agentql-card space-y-4"><p className="text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Transformación</p><MathRender math="y = A\\sin(2\\pi x/T)" block /><p className="text-sm leading-relaxed text-mist">|A| determina la amplitud y T determina el periodo. arcsen, arccos y arctan usan dominios principales.</p></article></section>

      <section className="agentql-highlight-card space-y-6"><div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Explorador numérico</p><h2 className="font-figtree text-2xl text-quartz">Evalúa y = A sen(2πx/T)</h2></div><div className="grid gap-4 sm:grid-cols-3"><label className="space-y-2 text-sm text-ash">Amplitud A<input value={amplitude} onChange={(event) => setAmplitude(event.target.value)} inputMode="decimal" className="block w-full rounded-inputs border border-obsidian-edge bg-void px-3 py-2.5 font-mono text-sm text-quartz outline-none focus:border-signal-blue" /></label><label className="space-y-2 text-sm text-ash">Periodo T<input value={period} onChange={(event) => setPeriod(event.target.value)} inputMode="decimal" className="block w-full rounded-inputs border border-obsidian-edge bg-void px-3 py-2.5 font-mono text-sm text-quartz outline-none focus:border-signal-blue" /></label><label className="space-y-2 text-sm text-ash">Entrada x<input value={angle} onChange={(event) => setAngle(event.target.value)} inputMode="decimal" className="block w-full rounded-inputs border border-obsidian-edge bg-void px-3 py-2.5 font-mono text-sm text-quartz outline-none focus:border-signal-blue" /></label></div><div className="rounded-lg border border-sapphire-hairline bg-cobalt-panel/60 p-4 font-mono text-2xl text-frosted-lilac">y = {value}</div></section>

      <section className="agentql-card space-y-5"><div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Autoevaluación</p><h2 className="font-figtree text-xl text-quartz">¿sen(π/2) = 1?</h2></div><div className="flex gap-3">{[true, false].map((value) => <button key={String(value)} type="button" onClick={() => setAnswer(value)} className={`rounded-full border px-5 py-2 text-sm transition-colors ${answer === value ? 'border-frosted-lilac bg-cobalt-panel text-quartz' : 'border-obsidian-edge text-mist hover:border-sapphire-hairline hover:text-quartz'}`}>{value ? 'Verdadero' : 'Falso'}</button>)}</div>{answer !== null && <div className={`flex items-start gap-3 text-sm ${answer ? 'text-emerald-200' : 'text-pink-200'}`} role="status">{answer ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : <XCircle className="h-5 w-5 shrink-0" />}<p>{answer ? 'Correcto: en la circunferencia unitaria, el seno de π/2 es 1.' : 'Revisa la circunferencia unitaria: π/2 radianes corresponde al punto con coordenada y = 1.'}</p></div>}</section>
    </div>
  );
}
