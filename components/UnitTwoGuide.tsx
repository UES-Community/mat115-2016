'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Infinity, LineChart } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import MathRender from './MathRender';

const topics = [
  { id: 'introduccion', number: '01', title: 'Introducción a los límites', objective: 'Describe el valor al que se aproxima una función cuando x se acerca a un punto.', formula: '\\lim_{x \\to a} f(x) = L', example: 'Aunque f(a) no exista, el límite puede existir si los valores cercanos se aproximan a L.', resource: '/unidades/unidad-2/introduccion-limites' },
  { id: 'laterales', number: '02', title: 'Límites laterales', objective: 'Compara el comportamiento de la función al acercarse desde la izquierda y desde la derecha.', formula: '\\lim_{x \\to a^-}f(x) = \\lim_{x \\to a^+}f(x) = L', example: 'El límite bilateral existe solo cuando ambos límites laterales coinciden.' },
  { id: 'teoremas', number: '03', title: 'Teoremas sobre límites', objective: 'Aplica reglas de suma, producto, cociente y potencias para transformar límites.', formula: '\\lim(f+g) = \\lim f + \\lim g', example: 'Las leyes de límites permiten separar una expresión compleja en partes evaluables.' },
  { id: 'calculo', number: '04', title: 'Cálculo de límites aplicando teoremas', objective: 'Resuelve límites por sustitución directa y simplificación algebraica.', formula: '\\lim_{x \\to a}p(x) = p(a)', example: 'Los polinomios son continuos: sustituir x = a entrega directamente el límite.' },
  { id: 'continuidad', number: '05', title: 'Continuidad', objective: 'Verifica que el valor, el límite y la aproximación de una función coincidan en un punto.', formula: '\\lim_{x \\to a}f(x) = f(a)', example: 'Una función es continua en a si está definida, tiene límite y ambos valores son iguales.' },
  { id: 'infinitos', number: '06', title: 'Límites infinitos', objective: 'Interpreta el crecimiento sin cota de una función cerca de una asíntota vertical.', formula: '\\lim_{x \\to a}f(x) = \\infty', example: 'En f(x)=1/(x−2), x=2 es una posible asíntota vertical.' },
  { id: 'al-infinito', number: '07', title: 'Límites al infinito', objective: 'Analiza el comportamiento de una función cuando x crece o decrece sin límite.', formula: '\\lim_{x \\to \\infty}f(x) = L', example: 'Una función racional puede acercarse a una asíntota horizontal cuando |x| aumenta.' },
];

export default function UnitTwoGuide() {
  return (
    <section className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-3"><div className="agentql-card flex items-center gap-3 p-4"><LineChart className="h-5 w-5 text-signal-blue" /><div><p className="text-xs uppercase tracking-wider text-ash">Guía</p><p className="font-figtree text-lg text-quartz">7 temas</p></div></div><div className="agentql-card flex items-center gap-3 p-4"><Infinity className="h-5 w-5 text-plasma-pink" /><div><p className="text-xs uppercase tracking-wider text-ash">Enfoque</p><p className="font-figtree text-lg text-quartz">Aproximación</p></div></div><div className="agentql-card flex items-center gap-3 p-4"><CheckCircle2 className="h-5 w-5 text-frosted-lilac" /><div><p className="text-xs uppercase tracking-wider text-ash">Práctica</p><p className="font-figtree text-lg text-quartz">Lectura gráfica</p></div></div></div>
      <Accordion type="single" collapsible defaultValue="introduccion" className="space-y-3">{topics.map((topic) => <AccordionItem key={topic.id} value={topic.id} className="overflow-hidden rounded-cards border border-obsidian-edge bg-deep-sea"><AccordionTrigger className="flex w-full items-center gap-4 p-4 text-left transition-colors hover:bg-cobalt-panel/50 sm:p-5"><span className="font-mono text-xs text-signal-blue">{topic.number}</span><span className="flex-1 font-figtree text-base text-quartz sm:text-lg">{topic.title}</span></AccordionTrigger><AccordionContent className="border-t border-inkline/70 bg-void/30 px-4 pb-5 pt-4 sm:px-5"><div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]"><div className="space-y-4"><div><p className="mb-1 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Idea clave</p><p className="text-sm leading-relaxed text-mist">{topic.objective}</p></div><div className="rounded-lg border border-sapphire-hairline bg-cobalt-panel/60 p-4 text-center text-frosted-lilac"><MathRender math={topic.formula} block /></div></div><div className="space-y-3 rounded-lg border border-inkline bg-deep-sea/60 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-ash">Ejemplo guiado</p><p className="text-sm leading-relaxed text-mist">{topic.example}</p>{topic.resource && <Link href={topic.resource} className="inline-flex items-center gap-2 text-sm font-medium text-frosted-lilac hover:text-quartz">Abrir laboratorio del tema<ArrowRight className="h-4 w-4" /></Link>}</div></div></AccordionContent></AccordionItem>)}</Accordion>
    </section>
  );
}
