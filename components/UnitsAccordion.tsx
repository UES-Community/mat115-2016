'use client';

import React from 'react';
import Link from 'next/link';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import MathRender from './MathRender';
import { ArrowRight, ChevronDown, CheckCircle2, FunctionSquare, Binary, Compass, BarChart, Box } from 'lucide-react';

interface UnitData {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  formula: string;
  topics: string[];
  description: string;
  guideHref?: string;
}

const units: UnitData[] = [
  {
    id: 'unidad-1',
    title: 'Unidad 1: Funciones de una Variable Real y Modelos',
    subtitle: 'Dominio, Rango, Composición y Funciones Trascendentes',
    icon: FunctionSquare,
    formula: 'f: D \\subseteq \\mathbb{R} \\to \\mathbb{R}, \\quad (f \\circ g)(x) = f(g(x))',
    topics: [
      'Concepto de función, dominio e imagen real',
      'Operaciones y algebra de funciones',
      'Funciones inyectivas, sobreyectivas y función inversa f⁻¹(x)',
      'Modelado matemático con funciones polinómicas, exponenciales y logarítmicas'
    ],
    description: 'Estudio fundamental de la relación entre variables reales, transformaciones gráficas y construcción de modelos aplicados a física e ingeniería.',
    guideHref: '/unidades/unidad-1'
  },
  {
    id: 'unidad-2',
    title: 'Unidad 2: Límites y Continuidad de Funciones',
    subtitle: 'Definición Épsilon-Delta, Asíntotas y Teoremas de Continuidad',
    icon: Binary,
    formula: '\\lim_{x \\to a} f(x) = L \\iff \\forall \\varepsilon > 0, \\exists \\delta > 0 : 0 < |x - a| < \\delta \\implies |f(x) - L| < \\varepsilon',
    topics: [
      'Noción intuitiva y definición rigurosa de límite',
      'Límites laterales, infinitos y en el infinito',
      'Evaluación de formas indeterminadas (0/0, ∞/∞)',
      'Continuidad en un punto e intervalo; Teorema del Valor Intermedio'
    ],
    description: 'Análisis del comportamiento local y asintótico de funciones reales, estableciendo el rigor necesario para el cálculo diferencial.'
  },
  {
    id: 'unidad-3',
    title: 'Unidad 3: La Derivada y Aplicaciones del Cálculo Diferencial',
    subtitle: 'Razón de Cambio, Regla de la Cadena y Optimización',
    icon: Compass,
    formula: 'f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}, \\quad \\frac{d}{dx}[f(g(x))] = f\'(g(x)) \\cdot g\'(x)',
    topics: [
      'Interpretación geométrica (recta tangente) y física (velocidad)',
      'Reglas de derivación: producto, cociente y regla de la cadena',
      'Derivación implícita y razones de cambio relacionadas',
      'Teorema de Rolle y del Valor Medio',
      'Criterios de primera y segunda derivada para optimización y trazado de curvas'
    ],
    description: 'Desarrollo de las herramientas de la derivada para la resolución de problemas de razones de cambio instantáneas y optimización de recursos.'
  },
  {
    id: 'unidad-4',
    title: 'Unidad 4: La Integral Definida y Métodos de Integración',
    subtitle: 'Antiderivadas, Sumas de Riemann y Teorema Fundamental',
    icon: BarChart,
    formula: '\\int_{a}^{b} f(x) \\, dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i^*) \\Delta x = F(b) - F(a)',
    topics: [
      'Antiderivadas e integración indefinida',
      'Integración por sustitución, por partes y fracciones parciales',
      'Sumas de Riemann e integral definida',
      'Cálculo de áreas entre curvas y volúmenes de sólidos de revolución'
    ],
    description: 'Proceso de acumulación continua y su equivalencia inversa con la diferenciación mediante el Teorema Fundamental del Cálculo.'
  },
  {
    id: 'unidad-5',
    title: 'Unidad 5: Álgebra Lineal, Vectores y Geometría en R³',
    subtitle: 'Vectores en el Espacio, Producto Escalar, Vectorial y Planos',
    icon: Box,
    formula: '\\vec{u} \\cdot \\vec{v} = ||\\vec{u}|| ||\\vec{v}|| \\cos\\theta, \\quad \\vec{u} \\times \\vec{v} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ u_1 & u_2 & u_3 \\\\ v_1 & v_2 & v_3 \\end{vmatrix}',
    topics: [
      'Sistemas de coordenadas rectangulares tridimensionales',
      'Operaciones vectoriales, norma y magnitud',
      'Producto escalar (punto) y proyecciones ortogonales',
      'Producto vectorial (cruz) y aplicaciones al área y volumen',
      'Ecuaciones paramétricas de rectas y planos en R³'
    ],
    description: 'Fundamentos de la geometría analítica tridimensional y cálculo vectorial básico aplicados al espacio tridimensional.'
  }
];

export default function UnitsAccordion() {
  return (
    <section id="unidades" className="py-20 bg-abyss border-b border-inkline">
      <div className="max-w-[1200px] mx-auto px-4 space-y-10">
        
        {/* Section Header with Eyebrow & Figtree Title */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-ash">
            Programa de Asignatura
          </span>
          <h2 className="font-figtree font-medium text-3xl sm:text-4xl text-quartz tracking-tight">
            Unidades Temáticas de Matemática I
          </h2>
          <p className="font-sans font-light text-mist text-base">
            Estructura curricular completa de MAT115-2016 combinando fundamentación teórica y aplicaciones prácticas.
          </p>
        </div>

        {/* Radix UI Accordion Component */}
        <Accordion type="single" defaultValue="unidad-1" collapsible className="space-y-4">
          {units.map((unit) => {
            const Icon = unit.icon;
            return (
              <AccordionItem
                key={unit.id}
                value={unit.id}
                className="agentql-card overflow-hidden transition-all duration-200 border border-obsidian-edge rounded-cards"
              >
                <AccordionTrigger className="flex-1 flex items-center justify-between p-4 sm:p-6 text-left group focus:outline-none cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cobalt-panel border border-sapphire-hairline flex items-center justify-center text-signal-blue group-hover:text-frosted-lilac group-hover:border-frosted-lilac/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-figtree font-medium text-lg sm:text-xl text-quartz group-hover:text-frosted-lilac transition-colors">
                        {unit.title}
                      </h3>
                      <p className="font-sans font-light text-xs sm:text-sm text-ash">
                        {unit.subtitle}
                      </p>
                    </div>
                  </div>

                  <ChevronDown className="w-5 h-5 text-ash group-hover:text-quartz transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </AccordionTrigger>

                <AccordionContent className="px-4 sm:px-6 pb-6 pt-2 text-mist text-sm border-t border-inkline/60 bg-deep-sea/40 transition-all">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-4">
                    {/* Description & Topics */}
                    <div className="lg:col-span-7 space-y-4">
                      <p className="font-sans text-ash text-sm leading-relaxed">
                        {unit.description}
                      </p>

                      {unit.guideHref && (
                        <Link
                          href={unit.guideHref}
                          className="inline-flex items-center gap-2 text-sm font-medium text-frosted-lilac transition-colors hover:text-quartz"
                        >
                          Abrir guía interactiva de la unidad
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      )}

                      <div className="space-y-2">
                        <span className="text-xs uppercase font-semibold text-frosted-lilac tracking-wider block">
                          Temas Clave:
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {unit.topics.map((topic, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-mist">
                              <CheckCircle2 className="w-4 h-4 text-signal-blue shrink-0 mt-0.5" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Formula highlight box */}
                    <div className="lg:col-span-5 bg-cobalt-panel/70 border border-sapphire-hairline rounded-lg p-4 text-center">
                      <span className="text-xs font-semibold text-ash uppercase tracking-wider block mb-2">
                        Fórmula / Expresión Clave
                      </span>
                      <div className="py-3 px-2 bg-deep-sea rounded border border-inkline text-frosted-lilac overflow-x-auto">
                        <MathRender math={unit.formula} block />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

      </div>
    </section>
  );
}
