'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowLeft, CheckCircle2, FunctionSquare, XCircle } from 'lucide-react';
import MathRender from '@/components/MathRender';

export default function InverseFunctionPage() {
  const [output, setOutput] = useState('7');
  const [answer, setAnswer] = useState<boolean | null>(null);
  const inverseResult = useMemo(() => {
    const y = Number(output);
    return Number.isFinite(y) ? String(Number(((y + 2) / 3).toFixed(4))) : 'Escribe un número real.';
  }, [output]);

  return (
    <div className="mx-auto max-w-[1200px] space-y-10 px-4 py-10 sm:py-16">
      <div className="space-y-5"><Link href="/unidades/unidad-1" className="inline-flex items-center gap-2 text-sm text-ash transition-colors hover:text-quartz"><ArrowLeft className="h-4 w-4" />Volver a la guía de Unidad 1</Link><div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sapphire-hairline bg-cobalt-panel text-signal-blue"><FunctionSquare className="h-6 w-6" /></div><div className="space-y-2"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-frosted-lilac">Unidad 1 · Tema 06</p><h1 className="font-figtree text-3xl font-medium tracking-tight text-quartz sm:text-5xl">Función inversa</h1><p className="max-w-3xl text-base leading-relaxed text-mist">Invierte el proceso de una función, intercambia entradas y salidas y verifica cuándo existe una única respuesta.</p></div></div></div>

      <section className="grid gap-5 md:grid-cols-2"><article className="agentql-card space-y-4"><p className="text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Condición</p><h2 className="font-figtree text-2xl text-quartz">Una entrada, una salida y regreso</h2><p className="text-sm leading-relaxed text-mist">Una función es invertible en un dominio cuando es uno a uno. La prueba de la recta horizontal permite detectar si una gráfica tiene inversa como función.</p><MathRender math="f^{-1}(f(x)) = x, \\quad f(f^{-1}(x)) = x" block /></article><article className="agentql-card space-y-4"><p className="text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Ejemplo</p><MathRender math="f(x) = 3x - 2 \\quad \\Longrightarrow \\quad f^{-1}(y) = \\frac{y + 2}{3}" block /><p className="text-sm leading-relaxed text-mist">Para despejar la inversa, intercambia x e y y despeja la nueva salida.</p></article></section>

      <section className="agentql-highlight-card space-y-6"><div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Calculador de inversa</p><h2 className="font-figtree text-2xl text-quartz">Para f(x) = 3x − 2, encuentra f⁻¹(y)</h2></div><div className="grid gap-5 sm:grid-cols-[180px_1fr] sm:items-end"><label className="space-y-2 text-sm text-ash">Valor de y<input value={output} onChange={(event) => setOutput(event.target.value)} inputMode="decimal" className="block w-full rounded-inputs border border-obsidian-edge bg-void px-3 py-2.5 font-mono text-sm text-quartz outline-none focus:border-signal-blue" aria-label="Valor de y" /></label><div className="rounded-lg border border-sapphire-hairline bg-cobalt-panel/60 p-4"><p className="text-sm text-mist">f⁻¹(y) = (y + 2) / 3</p><p className="mt-2 font-mono text-2xl text-frosted-lilac">Resultado: {inverseResult}</p></div></div></section>

      <section className="agentql-card space-y-5"><div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Autoevaluación</p><h2 className="font-figtree text-xl text-quartz">Si f(x) = 3x − 2, ¿f⁻¹(7) = 3?</h2></div><div className="flex gap-3">{[true, false].map((value) => <button key={String(value)} type="button" onClick={() => setAnswer(value)} className={`rounded-full border px-5 py-2 text-sm transition-colors ${answer === value ? 'border-frosted-lilac bg-cobalt-panel text-quartz' : 'border-obsidian-edge text-mist hover:border-sapphire-hairline hover:text-quartz'}`}>{value ? 'Verdadero' : 'Falso'}</button>)}</div>{answer !== null && <div className={`flex items-start gap-3 text-sm ${answer ? 'text-emerald-200' : 'text-pink-200'}`} role="status">{answer ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : <XCircle className="h-5 w-5 shrink-0" />}<p>{answer ? 'Correcto: (7 + 2) / 3 = 3.' : 'Revisa la fórmula: f⁻¹(7) = (7 + 2) / 3 = 3.'}</p></div>}</section>
    </div>
  );
}
