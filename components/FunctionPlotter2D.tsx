'use client';

import React, { useState, useMemo } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectPortal,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectItemText,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from 'recharts';
import { sampleFunction2D } from '../lib/math-helpers';
import MathRender from './MathRender';
import { LineChart as ChartIcon, ChevronDown, Check, SlidersHorizontal } from 'lucide-react';

const functionPresets = [
  { label: 'Polinómica: f(x) = x^3 - 3*x', value: 'x^3 - 3*x', latex: 'f(x) = x^3 - 3x' },
  { label: 'Trigonométrica: f(x) = sin(x) + cos(2*x)', value: 'sin(x) + cos(2*x)', latex: 'f(x) = \\sin(x) + \\cos(2x)' },
  { label: 'Exponencial: f(x) = exp(-x^2)', value: 'exp(-x^2)', latex: 'f(x) = e^{-x^2}' },
  { label: 'Racional: f(x) = (x^2 - 1) / (x^2 + 1)', value: '(x^2 - 1) / (x^2 + 1)', latex: 'f(x) = \\frac{x^2 - 1}{x^2 + 1}' },
];

export default function FunctionPlotter2D() {
  const [expression, setExpression] = useState<string>('x^3 - 3*x');
  const [domainRange, setDomainRange] = useState<number[]>([-5, 5]);

  const data = useMemo(() => {
    return sampleFunction2D(expression, domainRange[0], domainRange[1], 120);
  }, [expression, domainRange]);

  const selectedPreset = functionPresets.find((p) => p.value === expression);

  return (
    <section id="graficador2d" className="py-20 bg-abyss border-b border-inkline">
      <div className="max-w-[1200px] mx-auto px-4 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-ash">
            Visualización Interactiva 2D
          </span>
          <h2 className="font-figtree font-medium text-3xl sm:text-4xl text-quartz tracking-tight">
            Graficador de Funciones Reales
          </h2>
          <p className="font-sans font-light text-mist text-base">
            Representación cartesiana continua de funciones y curvas de una variable real.
          </p>
        </div>

        {/* Plotter Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel */}
          <div className="lg:col-span-4 agentql-card space-y-6">
            <div className="flex items-center gap-2 text-xs font-medium text-frosted-lilac border-b border-inkline pb-3">
              <SlidersHorizontal className="w-4 h-4 text-signal-blue" />
              <span>Parámetros del Dominio</span>
            </div>

            {/* Radix UI Select for Preset Functions */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-ash block">Seleccionar Función Preset</label>
              <Select value={expression} onValueChange={setExpression}>
                <SelectTrigger className="w-full inline-flex items-center justify-between bg-void border border-obsidian-edge rounded-inputs px-3 py-2.5 text-xs text-quartz focus:outline-none focus:border-signal-blue cursor-pointer">
                  <SelectValue placeholder="Selecciona una función..." />
                  <ChevronDown className="w-4 h-4 text-ash" />
                </SelectTrigger>
                <SelectPortal>
                  <SelectContent className="bg-deep-sea border border-obsidian-edge rounded-cards p-1 shadow-xl z-50">
                    <SelectViewport className="p-1 space-y-1">
                      {functionPresets.map((preset) => (
                        <SelectItem
                          key={preset.value}
                          value={preset.value}
                          className="flex items-center justify-between px-3 py-2 text-xs text-mist hover:text-quartz hover:bg-cobalt-panel rounded cursor-pointer focus:outline-none"
                        >
                          <SelectItemText>{preset.label}</SelectItemText>
                        </SelectItem>
                      ))}
                    </SelectViewport>
                  </SelectContent>
                </SelectPortal>
              </Select>
            </div>

            {/* Custom Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-ash block">Expresión Personalizada</label>
              <input
                type="text"
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
                className="w-full bg-void border border-obsidian-edge rounded-inputs px-3 py-2 text-xs font-mono text-quartz focus:outline-none focus:border-signal-blue"
              />
            </div>

            {/* Radix UI Slider for Domain Range */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between text-xs font-medium text-ash">
                <span>Rango del Dominio [X_min, X_max]:</span>
                <span className="font-mono text-frosted-lilac">[{domainRange[0]}, {domainRange[1]}]</span>
              </div>
              <Slider
                className="relative flex items-center select-none touch-none w-full h-5 cursor-pointer"
                value={domainRange}
                onValueChange={setDomainRange}
                min={-15}
                max={15}
                step={1}
                minStepsBetweenThumbs={2}
              />
            </div>

            {/* Latex Info Card */}
            <div className="bg-cobalt-panel/70 border border-sapphire-hairline rounded-lg p-3 text-center">
              <span className="text-[11px] text-ash block uppercase font-semibold mb-1">
                Ecuación Graficada
              </span>
              <div className="text-frosted-lilac py-1">
                <MathRender math={selectedPreset?.latex || `f(x) = ${expression}`} />
              </div>
            </div>
          </div>

          {/* Chart Viewport */}
          <div className="lg:col-span-8 agentql-highlight-card p-4 sm:p-6 space-y-4">
            <div className="flex items-center justify-between text-xs text-ash border-b border-sapphire-hairline/60 pb-3">
              <div className="flex items-center gap-2">
                <ChartIcon className="w-4 h-4 text-signal-blue" />
                <span className="font-medium text-quartz">Plano Cartesiano Real</span>
              </div>
              <span className="font-mono text-[11px] text-mist">
                Puntos muestreados: 120
              </span>
            </div>

            {/* Recharts LineChart */}
            <div className="w-full h-[360px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#172540" />
                  <XAxis dataKey="x" stroke="#abaebb" tick={{ fontSize: 11 }} />
                  <YAxis stroke="#abaebb" tick={{ fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0d172b',
                      borderColor: '#172540',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '12px',
                    }}
                  />
                  <ReferenceLine y={0} stroke="#3c3f44" strokeWidth={1.5} />
                  <ReferenceLine x={0} stroke="#3c3f44" strokeWidth={1.5} />
                  <Line
                    type="monotone"
                    dataKey="y"
                    stroke="#85a6e9"
                    strokeWidth={2.5}
                    dot={false}
                    activeDot={{ r: 5, fill: '#ff7dda' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
