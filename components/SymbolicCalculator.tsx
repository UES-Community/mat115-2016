'use client';

import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import MathRender from './MathRender';
import { computeDerivative, evaluateExpression } from '../lib/math-helpers';
import { Calculator, Sparkles, Check, Copy } from 'lucide-react';

export default function SymbolicCalculator() {
  // Derivadas state
  const [diffInput, setDiffInput] = useState<string>('x^3 * sin(x)');
  const [diffVar, setDiffVar] = useState<string>('x');

  // Evaluación state
  const [evalInput, setEvalInput] = useState<string>('2 * x^2 + 5 * x - 3');
  const [evalX, setEvalX] = useState<string>('4');

  // Copied state indicator
  const [copied, setCopied] = useState<boolean>(false);

  const diffResult = computeDerivative(diffInput, diffVar);
  const evalResult = evaluateExpression(evalInput, { x: parseFloat(evalX) || 0 });

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="calculadora" className="py-20 bg-void border-b border-inkline">
      <div className="max-w-[1200px] mx-auto px-4 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-ash">
            Motor Simbólico CAS
          </span>
          <h2 className="font-figtree font-medium text-3xl sm:text-4xl text-quartz tracking-tight">
            Calculadora Simbólica en Tiempo Real
          </h2>
          <p className="font-sans font-light text-mist text-base">
            Evaluación sintáctica y cálculo de derivadas simbólicas procesadas instantáneamente con MathJS y renderizadas con KaTeX.
          </p>
        </div>

        {/* Radix UI Tabs Component */}
        <Tabs defaultValue="derivadas" className="w-full max-w-4xl mx-auto space-y-6">
          <TabsList className="flex rounded-buttons bg-deep-sea p-1 border border-obsidian-edge max-w-md mx-auto">
            <TabsTrigger
              value="derivadas"
              className="flex-1 py-2 text-sm font-medium text-ash rounded-buttons transition-all data-[state=active]:bg-cobalt-panel data-[state=active]:text-quartz data-[state=active]:shadow-md focus:outline-none"
            >
              Cálculo de Derivadas
            </TabsTrigger>
            <TabsTrigger
              value="evaluacion"
              className="flex-1 py-2 text-sm font-medium text-ash rounded-buttons transition-all data-[state=active]:bg-cobalt-panel data-[state=active]:text-quartz data-[state=active]:shadow-md focus:outline-none"
            >
              Evaluación Numérica
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: DERIVADAS */}
          <TabsContent value="derivadas" className="agentql-card space-y-6">
            <div className="flex items-center gap-2 text-xs font-medium text-frosted-lilac">
              <Sparkles className="w-4 h-4 text-plasma-pink" />
              <span>Diferenciación Simbólica (Regla de la Cadena, Producto, Potencias)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              <div className="sm:col-span-9 space-y-1">
                <label className="text-xs font-medium text-ash block">Función f(x)</label>
                <input
                  type="text"
                  value={diffInput}
                  onChange={(e) => setDiffInput(e.target.value)}
                  placeholder="Ej: x^3 * sin(x)"
                  className="w-full bg-void border border-obsidian-edge rounded-inputs px-4 py-2.5 text-sm font-mono text-quartz focus:outline-none focus:border-signal-blue"
                />
              </div>

              <div className="sm:col-span-3 space-y-1">
                <label className="text-xs font-medium text-ash block">Respecto a</label>
                <input
                  type="text"
                  value={diffVar}
                  onChange={(e) => setDiffVar(e.target.value)}
                  className="w-full bg-void border border-obsidian-edge rounded-inputs px-4 py-2.5 text-sm font-mono text-quartz text-center focus:outline-none focus:border-signal-blue"
                />
              </div>
            </div>

            {/* Presets */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-ash">Ejemplos rápidos:</span>
              {[
                'x^3 * sin(x)',
                'exp(2*x) * cos(x)',
                '(x^2 + 1) / (x - 3)',
                'log(x^2 + 4)',
              ].map((preset) => (
                <button
                  key={preset}
                  onClick={() => setDiffInput(preset)}
                  className="px-2.5 py-1 rounded-tags bg-cobalt-panel/60 border border-sapphire-hairline text-frosted-lilac hover:text-quartz transition-colors font-mono"
                >
                  {preset}
                </button>
              ))}
            </div>

            {/* Output Display */}
            <div className="bg-cobalt-panel border border-sapphire-hairline rounded-cards p-6 relative space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-ash uppercase tracking-wider">
                  Resultado de Derivada <MathRender math={`\\frac{d}{d${diffVar}} f(${diffVar})`} />:
                </span>
                <button
                  onClick={() => handleCopy(diffResult.resultText)}
                  className="p-1.5 rounded-lg bg-deep-sea hover:bg-inkline text-ash hover:text-quartz transition-colors text-xs flex items-center gap-1"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>

              <div className="py-4 px-2 text-center text-xl text-quartz overflow-x-auto">
                <MathRender math={`\\frac{d}{d${diffVar}} = ${diffResult.resultLatex}`} block />
              </div>

              <div className="text-xs font-mono text-mist bg-void/50 p-2.5 rounded border border-inkline flex justify-between items-center">
                <span>Formato Texto: {diffResult.resultText}</span>
              </div>
            </div>
          </TabsContent>

          {/* TAB 2: EVALUACION */}
          <TabsContent value="evaluacion" className="agentql-card space-y-6">
            <div className="flex items-center gap-2 text-xs font-medium text-frosted-lilac">
              <Calculator className="w-4 h-4 text-signal-blue" />
              <span>Evaluación Numérica Puntual en f(x)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              <div className="sm:col-span-8 space-y-1">
                <label className="text-xs font-medium text-ash block">Expresión f(x)</label>
                <input
                  type="text"
                  value={evalInput}
                  onChange={(e) => setEvalInput(e.target.value)}
                  placeholder="Ej: 2*x^2 + 5*x - 3"
                  className="w-full bg-void border border-obsidian-edge rounded-inputs px-4 py-2.5 text-sm font-mono text-quartz focus:outline-none focus:border-signal-blue"
                />
              </div>

              <div className="sm:col-span-4 space-y-1">
                <label className="text-xs font-medium text-ash block">Valor de x</label>
                <input
                  type="number"
                  value={evalX}
                  onChange={(e) => setEvalX(e.target.value)}
                  className="w-full bg-void border border-obsidian-edge rounded-inputs px-4 py-2.5 text-sm font-mono text-quartz focus:outline-none focus:border-signal-blue"
                />
              </div>
            </div>

            {/* Output Display */}
            <div className="bg-cobalt-panel border border-sapphire-hairline rounded-cards p-6 space-y-4">
              <span className="text-xs font-semibold text-ash uppercase tracking-wider block">
                Resultado Evaluado:
              </span>

              <div className="py-4 text-center text-xl text-quartz overflow-x-auto">
                <MathRender math={`f(${evalX}) = ${evalResult.resultText}`} block />
              </div>
            </div>
          </TabsContent>
        </Tabs>

      </div>
    </section>
  );
}
