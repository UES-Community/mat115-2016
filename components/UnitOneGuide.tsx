'use client';

import Link from 'next/link';
import { ArrowRight, BookOpenCheck, CheckCircle2, GraduationCap } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import MathRender from './MathRender';

interface TopicGuide {
  id: string;
  number: string;
  title: string;
  objective: string;
  formula: string;
  example: string;
  resource?: {
    label: string;
    href: string;
  };
}

const topics: TopicGuide[] = [
  {
    id: 'definicion-dominio',
    number: '01',
    title: 'Definición de función, dominio y contradominio',
    objective: 'Distingue la regla de correspondencia, el dominio permitido y el conjunto de llegada de una función real.',
    formula: 'f: D \\subseteq \\mathbb{R} \\to C, \\quad x \\mapsto f(x)',
    example: 'Para f(x) = √(x − 2), el dominio es [2, ∞) porque el radicando debe ser no negativo.',
    resource: { label: 'Abrir guía completa del tema', href: '/unidades/unidad-1/definicion-funcion' },
  },
  {
    id: 'grafica-funcion',
    number: '02',
    title: 'Gráfica de una función',
    objective: 'Relaciona una función con el conjunto de puntos (x, f(x)) que forma su gráfica en el plano cartesiano.',
    formula: '\\operatorname{Graf}(f) = \\{(x, f(x)) : x \\in D\\}',
    example: 'La gráfica de f(x) = x² es una parábola con vértice en (0, 0) y simetría respecto del eje y.',
    resource: { label: 'Abrir guía de gráficas', href: '/unidades/unidad-1/grafica-funcion' },
  },
  {
    id: 'tipos-funciones',
    number: '03',
    title: 'Tipos de funciones',
    objective: 'Reconoce funciones polinómicas, racionales, algebraicas, exponenciales, logarítmicas y trigonométricas.',
    formula: 'f(x) = a_nx^n + \\cdots + a_1x + a_0',
    example: 'f(x) = 2x³ − x + 4 es polinómica de grado 3; g(x) = 1/(x − 1) es racional y no está definida en x = 1.',
    resource: { label: 'Abrir guía de clasificación', href: '/unidades/unidad-1/tipos-funciones' },
  },
  {
    id: 'algebra-funciones',
    number: '04',
    title: 'Álgebra de funciones',
    objective: 'Construye nuevas funciones mediante suma, resta, producto y cociente, cuidando las restricciones del dominio.',
    formula: '(f + g)(x) = f(x) + g(x), \\quad (f/g)(x) = \\frac{f(x)}{g(x)}',
    example: 'Si f(x) = x y g(x) = x², entonces (f + g)(x) = x² + x; el cociente exige además x ≠ 0.',
    resource: { label: 'Abrir laboratorio de operaciones', href: '/unidades/unidad-1/algebra-funciones' },
  },
  {
    id: 'composicion',
    number: '05',
    title: 'Composición de funciones',
    objective: 'Aplica una función después de otra y determina el dominio válido de la composición.',
    formula: '(f \\circ g)(x) = f(g(x))',
    example: 'Con f(x) = x² y g(x) = x + 1, se obtiene (f ∘ g)(x) = (x + 1)².',
    resource: { label: 'Abrir laboratorio de composición', href: '/unidades/unidad-1/composicion-funciones' },
  },
  {
    id: 'funcion-inversa',
    number: '06',
    title: 'Función inversa',
    objective: 'Comprueba cuándo una función es invertible y entiende la inversión como intercambio de entradas y salidas.',
    formula: 'f^{-1}(f(x)) = x, \\quad f(f^{-1}(x)) = x',
    example: 'La inversa de f(x) = 3x − 2 es f⁻¹(x) = (x + 2)/3; ambas gráficas son simétricas respecto de y = x.',
    resource: { label: 'Abrir calculador de inversa', href: '/unidades/unidad-1/funcion-inversa' },
  },
  {
    id: 'modelos',
    number: '07',
    title: 'Modelos y lectura de parámetros',
    objective: 'Interpreta variables, unidades y parámetros para representar situaciones de ciencias e ingeniería.',
    formula: 'y = f(x) \\quad \\text{con } x = \\text{variable independiente}',
    example: 'En d(t) = 4.9t², t representa tiempo en segundos y d distancia en metros bajo una aceleración idealizada.',
  },
  {
    id: 'exponenciales-logaritmicas',
    number: '08',
    title: 'Funciones exponenciales y logarítmicas',
    objective: 'Relaciona crecimiento o decrecimiento exponencial con su función inversa logarítmica.',
    formula: 'a^x = y \\iff \\log_a(y) = x, \\quad a > 0,\\ a \\ne 1',
    example: 'Si una población se modela con P(t) = 100(1.05)ᵗ, crece 5% por periodo y P(0) = 100.',
    resource: { label: 'Abrir calculador exponencial', href: '/unidades/unidad-1/exponenciales-logaritmicas' },
  },
  {
    id: 'trigonometricas',
    number: '09',
    title: 'Funciones trigonométricas e inversas',
    objective: 'Usa seno, coseno y tangente para modelar periodicidad, y reconoce sus funciones inversas en dominios restringidos.',
    formula: '\\sin^2(x) + \\cos^2(x) = 1',
    example: 'En y = 2 sen(x), la amplitud es 2 y el periodo es 2π; arcsen(x) devuelve el ángulo principal.',
    resource: { label: 'Visualizar una función', href: '/graficador2d' },
  },
  {
    id: 'transformaciones',
    number: '10',
    title: 'Transformaciones de funciones',
    objective: 'Predice traslaciones, reflexiones y escalas a partir de una función base.',
    formula: 'g(x) = a f(b(x - h)) + k',
    example: 'En g(x) = −2f(x − 3) + 1, la gráfica se desplaza 3 a la derecha, se refleja y escala verticalmente, y sube 1.',
    resource: { label: 'Comparar gráficas', href: '/graficador2d' },
  },
  {
    id: 'par-impar',
    number: '11',
    title: 'Funciones pares e impares',
    objective: 'Identifica simetría respecto del eje y o del origen mediante la evaluación de f(-x).',
    formula: '\\text{Par: } f(-x) = f(x), \\quad \\text{impar: } f(-x) = -f(x)',
    example: 'f(x) = x² es par y g(x) = x³ es impar; sus simetrías permiten estudiar solo una parte de la gráfica.',
  },
];

export default function UnitOneGuide() {
  return (
    <section className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="agentql-card flex items-center gap-3 p-4">
          <BookOpenCheck className="h-5 w-5 text-signal-blue" />
          <div>
            <p className="text-xs uppercase tracking-wider text-ash">Guía</p>
            <p className="font-figtree text-lg text-quartz">11 temas</p>
          </div>
        </div>
        <div className="agentql-card flex items-center gap-3 p-4">
          <GraduationCap className="h-5 w-5 text-plasma-pink" />
          <div>
            <p className="text-xs uppercase tracking-wider text-ash">Formato</p>
            <p className="font-figtree text-lg text-quartz">Teoría aplicada</p>
          </div>
        </div>
        <div className="agentql-card flex items-center gap-3 p-4">
          <CheckCircle2 className="h-5 w-5 text-frosted-lilac" />
          <div>
            <p className="text-xs uppercase tracking-wider text-ash">Práctica</p>
            <p className="font-figtree text-lg text-quartz">Recursos interactivos</p>
          </div>
        </div>
      </div>

      <Link
        href="/unidades/unidad-1/repaso-general"
        className="inline-flex items-center gap-2 text-sm font-medium text-frosted-lilac transition-colors hover:text-quartz"
      >
        Abrir repaso general de la unidad
        <ArrowRight className="h-4 w-4" />
      </Link>

      <Accordion type="single" collapsible defaultValue="definicion-dominio" className="space-y-3">
        {topics.map((topic) => (
          <AccordionItem
            key={topic.id}
            value={topic.id}
            className="overflow-hidden rounded-cards border border-obsidian-edge bg-deep-sea"
          >
            <AccordionTrigger className="flex w-full items-center gap-4 p-4 text-left transition-colors hover:bg-cobalt-panel/50 sm:p-5">
              <span className="font-mono text-xs text-signal-blue">{topic.number}</span>
              <span className="flex-1 font-figtree text-base text-quartz sm:text-lg">{topic.title}</span>
            </AccordionTrigger>
            <AccordionContent className="border-t border-inkline/70 bg-void/30 px-4 pb-5 pt-4 sm:px-5">
              <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-4">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Idea clave</p>
                    <p className="text-sm leading-relaxed text-mist">{topic.objective}</p>
                  </div>
                  <div className="rounded-lg border border-sapphire-hairline bg-cobalt-panel/60 p-4 text-center text-frosted-lilac">
                    <MathRender math={topic.formula} block />
                  </div>
                </div>
                <div className="space-y-3 rounded-lg border border-inkline bg-deep-sea/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ash">Ejemplo guiado</p>
                  <div className="text-sm leading-relaxed text-mist">
                    <p>{topic.example}</p>
                  </div>
                  {topic.resource && (
                    <Link
                      href={topic.resource.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-frosted-lilac transition-colors hover:text-quartz"
                    >
                      {topic.resource.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
