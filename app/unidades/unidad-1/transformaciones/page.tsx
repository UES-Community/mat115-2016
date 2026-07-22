'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowLeft, CheckCircle2, FunctionSquare, XCircle } from 'lucide-react';
import MathRender from '@/components/MathRender';

export default function FunctionTransformationsPage() {
  const [parameters, setParameters] = useState({ a: '-2', b: '1', h: '3', k: '1', x: '4' });
  const [answer, setAnswer] = useState<boolean | null>(null);
  const result = useMemo(() => {
    const values = Object.values(parameters).map(Number);
    if (values.some((value) => !Number.isFinite(value))) return 'Completa los parámetros.';
    const [a, b, h, k, x] = values;
    return String(Number((a * Math.pow(b * (x - h), 2) + k).toFixed(4)));
  }, [parameters]);
  const update = (key: keyof typeof parameters, value: string) => setParameters((current) => ({ ...current, [key]: value }));

  return (
    <div className="mx-auto max-w-[1200px] space-y-10 px-4 py-10 sm:py-16">
      <div className="space-y-5"><Link href="/unidades/unidad-1" className="inline-flex items-center gap-2 text-sm text-ash transition-colors hover:text-quartz"><ArrowLeft className="h-4 w-4" />Volver a la guía de Unidad 1</Link><div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sapphire-hairline bg-cobalt-panel text-signal-blue"><FunctionSquare className="h-6 w-6" /></div><div className="space-y-2"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-frosted-lilac">Unidad 1 · Tema 10</p><h1 className="font-figtree text-3xl font-medium tracking-tight text-quartz sm:text-5xl">Transformaciones de funciones</h1><p className="max-w-3xl text-base leading-relaxed text-mist">Predice desplazamientos, reflexiones y escalas a partir de una función base.</p></div></div></div>

      <section className="grid gap-5 md:grid-cols-2"><article className="agentql-card space-y-4"><p className="text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Plantilla</p><MathRender math="g(x) = a f(b(x-h)) + k" block /><p className="text-sm leading-relaxed text-mist">h desplaza horizontalmente, k verticalmente, a escala o refleja en vertical y b modifica la escala horizontal.</p></article><article className="agentql-card space-y-4"><p className="text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Función base</p><MathRender math="f(x) = x^2" block /><p className="text-sm leading-relaxed text-mist">El laboratorio calcula g(x) usando la parábola como función base.</p></article></section>

      <section className="agentql-highlight-card space-y-6"><div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Explorador de parámetros</p><h2 className="font-figtree text-2xl text-quartz">Ajusta g(x) = a f(b(x − h)) + k</h2></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{(['a', 'b', 'h', 'k', 'x'] as const).map((key) => <label key={key} className="space-y-2 text-sm text-ash">{key === 'x' ? 'Entrada x' : `Parámetro ${key}`}<input value={parameters[key]} onChange={(event) => update(key, event.target.value)} inputMode="decimal" className="block w-full rounded-inputs border border-obsidian-edge bg-void px-3 py-2.5 font-mono text-sm text-quartz outline-none focus:border-signal-blue" aria-label={key} /></label>)}</div><div className="rounded-lg border border-sapphire-hairline bg-cobalt-panel/60 p-4 font-mono text-xl text-frosted-lilac">g(x) = {result}</div></section>

      <section className="agentql-card space-y-5"><div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Autoevaluación</p><h2 className="font-figtree text-xl text-quartz">En g(x) = f(x − 3) + 1, ¿la gráfica se mueve 3 a la derecha y 1 hacia arriba?</h2></div><div className="flex gap-3">{[true, false].map((value) => <button key={String(value)} type="button" onClick={() => setAnswer(value)} className={`rounded-full border px-5 py-2 text-sm transition-colors ${answer === value ? 'border-frosted-lilac bg-cobalt-panel text-quartz' : 'border-obsidian-edge text-mist hover:border-sapphire-hairline hover:text-quartz'}`}>{value ? 'Verdadero' : 'Falso'}</button>)}</div>{answer !== null && <div className={`flex items-start gap-3 text-sm ${answer ? 'text-emerald-200' : 'text-pink-200'}`} role="status">{answer ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : <XCircle className="h-5 w-5 shrink-0" />}<p>{answer ? 'Correcto: x − 3 desplaza a la derecha y +1 sube la gráfica.' : 'Observa que una resta dentro del argumento mueve la gráfica hacia la derecha.'}</p></div>}</section>
    </div>
  );
}
