'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowLeft, CheckCircle2, FunctionSquare, XCircle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectItemText, SelectPortal, SelectTrigger, SelectValue, SelectViewport } from '@/components/ui/select';
import MathRender from '@/components/MathRender';

const operations = [
  { id: 'sum', label: 'Suma', formula: '(f + g)(x) = f(x) + g(x)' },
  { id: 'difference', label: 'Resta', formula: '(f − g)(x) = f(x) − g(x)' },
  { id: 'product', label: 'Producto', formula: '(fg)(x) = f(x)g(x)' },
  { id: 'quotient', label: 'Cociente', formula: '(f/g)(x) = f(x)/g(x)' },
  { id: 'composition', label: 'Composición', formula: '(f ∘ g)(x) = f(g(x))' },
];

export default function FunctionAlgebraPage() {
  const [operationId, setOperationId] = useState('sum');
  const [xValue, setXValue] = useState('2');
  const [quizAnswer, setQuizAnswer] = useState<boolean | null>(null);
  const operation = operations.find((item) => item.id === operationId) ?? operations[0];
  const result = useMemo(() => {
    const x = Number(xValue);
    if (!Number.isFinite(x)) return 'Escribe un número real.';
    const f = x * x + 1;
    const g = 2 * x - 3;
    if (operationId === 'sum') return String(f + g);
    if (operationId === 'difference') return String(f - g);
    if (operationId === 'product') return String(f * g);
    if (operationId === 'quotient') return g === 0 ? 'No definido (g(x) = 0)' : String(Number((f / g).toFixed(4)));
    return String(g * g + 1);
  }, [operationId, xValue]);

  return (
    <div className="mx-auto max-w-[1200px] space-y-10 px-4 py-10 sm:py-16">
      <div className="space-y-5">
        <Link href="/unidades/unidad-1" className="inline-flex items-center gap-2 text-sm text-ash transition-colors hover:text-quartz"><ArrowLeft className="h-4 w-4" />Volver a la guía de Unidad 1</Link>
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sapphire-hairline bg-cobalt-panel text-signal-blue"><FunctionSquare className="h-6 w-6" /></div>
          <div className="space-y-2"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-frosted-lilac">Unidad 1 · Tema 04</p><h1 className="font-figtree text-3xl font-medium tracking-tight text-quartz sm:text-5xl">Álgebra de funciones</h1><p className="max-w-3xl text-base leading-relaxed text-mist">Combina funciones conocidas y controla las restricciones de dominio que aparecen en cada operación.</p></div>
        </div>
      </div>

      <section className="grid gap-5 md:grid-cols-2">
        <article className="agentql-card space-y-4"><p className="text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Funciones base</p><MathRender math="f(x) = x^2 + 1, \\quad g(x) = 2x - 3" block /><p className="text-sm leading-relaxed text-mist">Las operaciones se realizan punto a punto. Para el cociente, elimina del dominio los valores donde g(x) = 0.</p></article>
        <article className="agentql-card space-y-4"><p className="text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Regla de composición</p><MathRender math="(f \\circ g)(x) = f(g(x))" block /><p className="text-sm leading-relaxed text-mist">El orden importa: f ∘ g no tiene por qué ser igual a g ∘ f.</p></article>
      </section>

      <section className="agentql-highlight-card space-y-6"><div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Laboratorio numérico</p><h2 className="font-figtree text-2xl text-quartz">Combina f y g en un punto</h2></div>
        <div className="grid gap-5 lg:grid-cols-[260px_160px_1fr] lg:items-end">
          <label className="space-y-2 text-sm text-ash">Operación<Select value={operationId} onValueChange={setOperationId}><SelectTrigger className="flex w-full items-center justify-between rounded-inputs border border-obsidian-edge bg-void px-3 py-2.5 text-sm text-quartz outline-none"><SelectValue /></SelectTrigger><SelectPortal><SelectContent className="z-50 rounded-cards border border-obsidian-edge bg-deep-sea p-1 shadow-xl"><SelectViewport className="space-y-1 p-1">{operations.map((item) => <SelectItem key={item.id} value={item.id} className="cursor-pointer rounded px-3 py-2 text-sm text-mist outline-none hover:bg-cobalt-panel hover:text-quartz"><SelectItemText>{item.label}</SelectItemText></SelectItem>)}</SelectViewport></SelectContent></SelectPortal></Select></label>
          <label className="space-y-2 text-sm text-ash">Valor de x<input value={xValue} onChange={(event) => setXValue(event.target.value)} inputMode="decimal" className="block w-full rounded-inputs border border-obsidian-edge bg-void px-3 py-2.5 font-mono text-sm text-quartz outline-none focus:border-signal-blue" aria-label="Valor de x" /></label>
          <div className="rounded-lg border border-sapphire-hairline bg-cobalt-panel/60 p-4"><p className="text-sm text-mist">{operation.formula}</p><p className="mt-2 font-mono text-2xl text-frosted-lilac">Resultado: {result}</p></div>
        </div>
      </section>

      <section className="agentql-card space-y-5"><div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Autoevaluación</p><h2 className="font-figtree text-xl text-quartz">Si f(x) = x² + 1 y g(x) = 2x − 3, ¿(f + g)(2) = 6?</h2></div><div className="flex gap-3">{[true, false].map((value) => <button key={String(value)} type="button" onClick={() => setQuizAnswer(value)} className={`rounded-full border px-5 py-2 text-sm transition-colors ${quizAnswer === value ? 'border-frosted-lilac bg-cobalt-panel text-quartz' : 'border-obsidian-edge text-mist hover:border-sapphire-hairline hover:text-quartz'}`}>{value ? 'Verdadero' : 'Falso'}</button>)}</div>{quizAnswer !== null && <div className={`flex items-start gap-3 text-sm ${quizAnswer ? 'text-emerald-200' : 'text-pink-200'}`} role="status">{quizAnswer ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : <XCircle className="h-5 w-5 shrink-0" />}<p>{quizAnswer ? 'Correcto: f(2) = 5, g(2) = 1 y la suma es 6.' : 'Revisa la evaluación: f(2) = 5 y g(2) = 1, por lo que la suma es 6.'}</p></div>}</section>
    </div>
  );
}
