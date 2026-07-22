'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowLeft, CheckCircle2, FunctionSquare, XCircle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectItemText, SelectPortal, SelectTrigger, SelectValue, SelectViewport } from '@/components/ui/select';
import MathRender from '@/components/MathRender';

const orders = [
  { id: 'fg', label: 'f ∘ g', formula: '(f ∘ g)(x) = f(g(x))' },
  { id: 'gf', label: 'g ∘ f', formula: '(g ∘ f)(x) = g(f(x))' },
];

export default function FunctionCompositionPage() {
  const [order, setOrder] = useState('fg');
  const [xValue, setXValue] = useState('2');
  const [answer, setAnswer] = useState<boolean | null>(null);
  const result = useMemo(() => {
    const x = Number(xValue);
    if (!Number.isFinite(x)) return 'Escribe un número real.';
    const f = (value: number) => value * value + 1;
    const g = (value: number) => 2 * value - 3;
    return String(order === 'fg' ? f(g(x)) : g(f(x)));
  }, [order, xValue]);

  return (
    <div className="mx-auto max-w-[1200px] space-y-10 px-4 py-10 sm:py-16">
      <div className="space-y-5"><Link href="/unidades/unidad-1" className="inline-flex items-center gap-2 text-sm text-ash transition-colors hover:text-quartz"><ArrowLeft className="h-4 w-4" />Volver a la guía de Unidad 1</Link><div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sapphire-hairline bg-cobalt-panel text-signal-blue"><FunctionSquare className="h-6 w-6" /></div><div className="space-y-2"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-frosted-lilac">Unidad 1 · Tema 05</p><h1 className="font-figtree text-3xl font-medium tracking-tight text-quartz sm:text-5xl">Composición de funciones</h1><p className="max-w-3xl text-base leading-relaxed text-mist">Aplica una función después de otra y comprueba por qué cambiar el orden puede producir un resultado distinto.</p></div></div></div>

      <section className="grid gap-5 md:grid-cols-2"><article className="agentql-card space-y-4"><p className="text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Idea central</p><h2 className="font-figtree text-2xl text-quartz">La salida de una es la entrada de la siguiente</h2><MathRender math="(f \\circ g)(x) = f(g(x))" block /><p className="text-sm leading-relaxed text-mist">Primero se evalúa la función que está más cerca de x. El dominio de la composición exige que g(x) caiga dentro del dominio de f.</p></article><article className="agentql-card space-y-4"><p className="text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Funciones de ejemplo</p><MathRender math="f(x) = x^2 + 1, \\quad g(x) = 2x - 3" block /><p className="text-sm leading-relaxed text-mist">Con estas funciones, f ∘ g y g ∘ f tienen expresiones y valores diferentes.</p></article></section>

      <section className="agentql-highlight-card space-y-6"><div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Laboratorio de composición</p><h2 className="font-figtree text-2xl text-quartz">Cambia el orden y observa el resultado</h2></div><div className="grid gap-5 lg:grid-cols-[260px_160px_1fr] lg:items-end"><label className="space-y-2 text-sm text-ash">Composición<Select value={order} onValueChange={setOrder}><SelectTrigger className="flex w-full items-center justify-between rounded-inputs border border-obsidian-edge bg-void px-3 py-2.5 text-sm text-quartz outline-none"><SelectValue /></SelectTrigger><SelectPortal><SelectContent className="z-50 rounded-cards border border-obsidian-edge bg-deep-sea p-1 shadow-xl"><SelectViewport className="space-y-1 p-1">{orders.map((item) => <SelectItem key={item.id} value={item.id} className="cursor-pointer rounded px-3 py-2 text-sm text-mist outline-none hover:bg-cobalt-panel hover:text-quartz"><SelectItemText>{item.label}</SelectItemText></SelectItem>)}</SelectViewport></SelectContent></SelectPortal></Select></label><label className="space-y-2 text-sm text-ash">Valor de x<input value={xValue} onChange={(event) => setXValue(event.target.value)} inputMode="decimal" className="block w-full rounded-inputs border border-obsidian-edge bg-void px-3 py-2.5 font-mono text-sm text-quartz outline-none focus:border-signal-blue" aria-label="Valor de x" /></label><div className="rounded-lg border border-sapphire-hairline bg-cobalt-panel/60 p-4"><p className="text-sm text-mist">{orders.find((item) => item.id === order)?.formula}</p><p className="mt-2 font-mono text-2xl text-frosted-lilac">Resultado: {result}</p></div></div></section>

      <section className="agentql-card space-y-5"><div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Autoevaluación</p><h2 className="font-figtree text-xl text-quartz">¿Para cualquier par de funciones se cumple f ∘ g = g ∘ f?</h2></div><div className="flex gap-3">{[true, false].map((value) => <button key={String(value)} type="button" onClick={() => setAnswer(value)} className={`rounded-full border px-5 py-2 text-sm transition-colors ${answer === value ? 'border-frosted-lilac bg-cobalt-panel text-quartz' : 'border-obsidian-edge text-mist hover:border-sapphire-hairline hover:text-quartz'}`}>{value ? 'Verdadero' : 'Falso'}</button>)}</div>{answer !== null && <div className={`flex items-start gap-3 text-sm ${answer === false ? 'text-emerald-200' : 'text-pink-200'}`} role="status">{answer === false ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : <XCircle className="h-5 w-5 shrink-0" />}<p>{answer === false ? 'Correcto: la composición no es conmutativa en general.' : 'Compara los resultados del laboratorio: cambiar el orden suele cambiar la salida.'}</p></div>}</section>
    </div>
  );
}
