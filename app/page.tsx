import React from 'react';
import Link from 'next/link';
import Hero from '../components/Hero';
import { BookOpen, Calculator, LineChart, Box, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  const tools = [
    {
      href: '/unidades',
      title: 'Unidades Temáticas',
      description: 'Programa oficial completo de MAT115 con formulaciones teóricas y ejercicios por unidad.',
      icon: BookOpen,
      color: 'text-signal-blue',
      tag: '5 Unidades',
    },
    {
      href: '/calculadora',
      title: 'Calculadora Simbólica',
      description: 'Evaluación paso a paso de límites, derivadas e integrales mediante el motor MathJS.',
      icon: Calculator,
      color: 'text-signal-blue',
      tag: 'Cálculo CAS',
    },
    {
      href: '/graficador2d',
      title: 'Graficador 2D',
      description: 'Visualización interactiva de funciones reales con puntos notables, derivadas y tangentes.',
      icon: LineChart,
      color: 'text-frosted-lilac',
      tag: 'Gráficos 2D',
    },
    {
      href: '/simulador3d',
      title: 'Simulación 3D (R³)',
      description: 'Representación vectorial y planos en el espacio tridimensional impulsado por Three.js.',
      icon: Box,
      color: 'text-plasma-pink',
      tag: 'Espacio R³',
    },
    {
      href: '/recursos',
      title: 'Recursos & Fórmulas',
      description: 'Tablas de consulta rápida de derivadas trascendentes, integrales e identidades vectoriales.',
      icon: HelpCircle,
      color: 'text-frosted-lilac',
      tag: 'Referencias',
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <Hero />

      {/* Interactive Tool Cards Grid */}
      <section className="max-w-[1200px] mx-auto px-4 space-y-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-tags bg-cobalt-panel border border-sapphire-hairline text-frosted-lilac text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-plasma-pink" />
            <span>Módulos Interactivos</span>
          </div>
          <h2 className="font-figtree font-medium text-3xl sm:text-4xl text-quartz tracking-tight">
            Explora las Herramientas del Curso
          </h2>
          <p className="font-sans font-light text-mist text-base">
            Accede directamente a cada sección mediante rutas amigables diseñadas para una navegación rápida e interactiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="agentql-card group flex flex-col justify-between hover:border-sapphire-hairline hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-cobalt-panel border border-sapphire-hairline flex items-center justify-center group-hover:border-frosted-lilac/40 transition-colors">
                      <Icon className={`w-6 h-6 ${tool.color}`} />
                    </div>
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-abyss border border-inkline text-ash group-hover:text-frosted-lilac transition-colors font-mono">
                      {tool.tag}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-figtree font-medium text-xl text-quartz group-hover:text-frosted-lilac transition-colors">
                      {tool.title}
                    </h3>
                    <p className="font-sans font-light text-ash text-sm leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-inkline/60 flex items-center justify-between text-xs text-frosted-lilac font-medium group-hover:text-white transition-colors">
                  <span>Acceder al módulo</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
