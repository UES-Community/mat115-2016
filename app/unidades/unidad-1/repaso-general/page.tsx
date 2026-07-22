'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, CheckCircle2, ClipboardCheck, XCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import MathRender from '@/components/MathRender';

const checkpoints = [
  { question: '¿Qué conjunto contiene las entradas permitidas de una función?', answer: 'Dominio', options: ['Imagen', 'Dominio', 'Contradominio'] },
  { question: '¿Qué operación se escribe como f(g(x))?', answer: 'Composición', options: ['Cociente', 'Composición', 'Producto'] },
  { question: '¿Qué condición caracteriza a una función par?', answer: 'f(−x) = f(x)', options: ['f(−x) = f(x)', 'f(−x) = −f(x)', 'f(x) = 0'] },
];

export default function UnitOneReviewPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const checkpoint = checkpoints[current];
  const isCorrect = selected === checkpoint.answer;

  function choose(answer: string) {
    setSelected(answer);
  }

  function next() {
    setCurrent((value) => (value + 1) % checkpoints.length);
    setSelected(null);
  }

  return (
    <div className="mx-auto max-w-[1200px] space-y-10 px-4 py-10 sm:py-16">
      <div className="space-y-5"><Link href="/unidades/unidad-1" className="inline-flex items-center gap-2 text-sm text-ash transition-colors hover:text-quartz"><ArrowLeft className="h-4 w-4" />Volver a la guía de Unidad 1</Link><div className="space-y-2"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-frosted-lilac">Unidad 1 · Repaso general</p><h1 className="font-figtree text-3xl font-medium tracking-tight text-quartz sm:text-5xl">Funciones y sus gráficas</h1><p className="max-w-3xl text-base leading-relaxed text-mist">Consolida las ideas que conectan dominio, operaciones, composición, inversas y transformaciones antes de avanzar a la siguiente unidad.</p></div></div>

      <Accordion type="single" collapsible defaultValue="mapa" className="space-y-3"><AccordionItem value="mapa" className="overflow-hidden rounded-cards border border-obsidian-edge bg-deep-sea"><AccordionTrigger className="p-5 text-left font-figtree text-xl text-quartz">Mapa de conceptos</AccordionTrigger><AccordionContent className="border-t border-inkline px-5 pb-5 pt-4"><div className="grid gap-4 md:grid-cols-2"><article className="rounded-lg border border-sapphire-hairline bg-cobalt-panel/50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Representación</p><p className="mt-2 text-sm leading-relaxed text-mist">Una función puede describirse con regla, tabla, gráfica o modelo. Todas representan la misma correspondencia entre entradas y salidas.</p><MathRender math="(x, f(x)) \\in \\operatorname{Graf}(f)" block /></article><article className="rounded-lg border border-sapphire-hairline bg-cobalt-panel/50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Transformación</p><p className="mt-2 text-sm leading-relaxed text-mist">Las operaciones y cambios de parámetros permiten comparar gráficas sin reconstruir cada punto desde cero.</p><MathRender math="g(x) = a f(b(x-h)) + k" block /></article></div></AccordionContent></AccordionItem></Accordion>

      <section className="agentql-highlight-card space-y-6"><div className="flex items-center gap-3"><ClipboardCheck className="h-6 w-6 text-signal-blue" /><div><p className="text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Autoevaluación</p><h2 className="font-figtree text-2xl text-quartz">Checkpoint {current + 1} de {checkpoints.length}</h2></div></div><p className="text-lg text-quartz">{checkpoint.question}</p><div className="grid gap-3 sm:grid-cols-3">{checkpoint.options.map((option) => <button key={option} type="button" onClick={() => choose(option)} className={`rounded-lg border px-4 py-3 text-left text-sm transition-colors ${selected === option ? 'border-frosted-lilac bg-cobalt-panel text-quartz' : 'border-obsidian-edge text-mist hover:border-sapphire-hairline hover:text-quartz'}`}>{option}</button>)}</div>{selected && <div className={`flex items-start gap-3 text-sm ${isCorrect ? 'text-emerald-200' : 'text-pink-200'}`} role="status">{isCorrect ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : <XCircle className="h-5 w-5 shrink-0" />}<p>{isCorrect ? 'Correcto. Puedes pasar al siguiente checkpoint.' : `La respuesta correcta es: ${checkpoint.answer}.`}</p></div>}{selected && <button type="button" onClick={next} className="btn-primary text-sm">Siguiente checkpoint</button>}</section>
    </div>
  );
}
