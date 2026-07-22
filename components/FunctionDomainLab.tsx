'use client';

import { FormEvent, useState } from 'react';
import { evaluate } from 'mathjs';
import { CheckCircle2, FlaskConical, Lightbulb, XCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MathRender from './MathRender';

type EvaluationState =
  | { kind: 'idle' }
  | { kind: 'success'; message: string; value: string }
  | { kind: 'error'; message: string };

const presets = [
  { label: '√(x − 2)', expression: 'sqrt(x - 2)' },
  { label: '1 / (x − 1)', expression: '1 / (x - 1)' },
  { label: 'x² + 3x', expression: 'x^2 + 3*x' },
];

export default function FunctionDomainLab() {
  const [expression, setExpression] = useState('sqrt(x - 2)');
  const [inputValue, setInputValue] = useState('3');
  const [evaluation, setEvaluation] = useState<EvaluationState>({ kind: 'idle' });
  const [quizAnswer, setQuizAnswer] = useState<boolean | null>(null);

  function evaluateDomain(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const x = Number(inputValue);

    if (!Number.isFinite(x)) {
      setEvaluation({ kind: 'error', message: 'Escribe un número real para x.' });
      return;
    }

    try {
      const result = evaluate(expression, { x });

      if (typeof result !== 'number' || !Number.isFinite(result)) {
        setEvaluation({ kind: 'error', message: `x = ${x} no pertenece al dominio real de la expresión.` });
        return;
      }

      setEvaluation({
        kind: 'success',
        message: `x = ${x} sí pertenece al dominio real.`,
        value: String(Number(result.toFixed(4))),
      });
    } catch {
      setEvaluation({ kind: 'error', message: 'No se pudo evaluar la expresión.' });
    }
  }

  return (
    <Tabs defaultValue="conceptos" className="space-y-6">
      <TabsList className="grid h-auto w-full grid-cols-3 rounded-lg border border-obsidian-edge bg-deep-sea p-1">
        <TabsTrigger value="conceptos" className="rounded-md px-3 py-2 text-sm text-ash data-[state=active]:bg-cobalt-panel data-[state=active]:text-quartz">
          Conceptos
        </TabsTrigger>
        <TabsTrigger value="laboratorio" className="rounded-md px-3 py-2 text-sm text-ash data-[state=active]:bg-cobalt-panel data-[state=active]:text-quartz">
          Laboratorio
        </TabsTrigger>
        <TabsTrigger value="reto" className="rounded-md px-3 py-2 text-sm text-ash data-[state=active]:bg-cobalt-panel data-[state=active]:text-quartz">
          Reto rápido
        </TabsTrigger>
      </TabsList>

      <TabsContent value="conceptos" className="space-y-5">
        <div className="grid gap-5 md:grid-cols-3">
          <article className="agentql-card space-y-3">
            <h2 className="font-figtree text-xl text-quartz">Función</h2>
            <p className="text-sm leading-relaxed text-mist">Una función asigna a cada entrada del dominio exactamente una salida del contradominio.</p>
            <MathRender math="f: D \\to C, \\quad x \\mapsto f(x)" block />
          </article>
          <article className="agentql-card space-y-3">
            <h2 className="font-figtree text-xl text-quartz">Dominio</h2>
            <p className="text-sm leading-relaxed text-mist">Es el conjunto de valores de x para los que la regla está definida y produce una salida real.</p>
            <MathRender math="D_f = \\{x \\in \\mathbb{R}: f(x) \\text{ existe}\\}" block />
          </article>
          <article className="agentql-card space-y-3">
            <h2 className="font-figtree text-xl text-quartz">Contradominio</h2>
            <p className="text-sm leading-relaxed text-mist">Es el conjunto de llegada declarado para las salidas; la imagen puede ser un subconjunto de él.</p>
            <MathRender math="\\operatorname{Im}(f) \\subseteq C" block />
          </article>
        </div>
        <div className="rounded-lg border border-sapphire-hairline bg-cobalt-panel/50 p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-plasma-pink" />
            <p className="text-sm leading-relaxed text-mist">Para encontrar un dominio, revisa primero denominadores, raíces pares y logaritmos. Esas estructuras imponen restricciones sobre x.</p>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="laboratorio" className="space-y-5">
        <div className="agentql-highlight-card space-y-5">
          <div className="flex items-center gap-3">
            <FlaskConical className="h-5 w-5 text-signal-blue" />
            <div>
              <h2 className="font-figtree text-xl text-quartz">¿Pertenece al dominio?</h2>
              <p className="text-sm text-ash">Evalúa un valor real y observa si la salida también es real y finita.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {presets.map((preset) => (
              <button
                key={preset.expression}
                type="button"
                onClick={() => setExpression(preset.expression)}
                className="rounded-full border border-sapphire-hairline px-3 py-1.5 text-xs text-mist transition-colors hover:border-frosted-lilac hover:text-quartz"
              >
                {preset.label}
              </button>
            ))}
          </div>
          <form onSubmit={evaluateDomain} className="grid gap-4 sm:grid-cols-[1fr_140px_auto] sm:items-end">
            <label className="space-y-2 text-sm text-ash">
              Expresión
              <input
                value={expression}
                onChange={(event) => setExpression(event.target.value)}
                className="block w-full rounded-inputs border border-obsidian-edge bg-void px-3 py-2 font-mono text-sm text-quartz outline-none transition-colors focus:border-signal-blue"
                aria-label="Expresión de la función"
              />
            </label>
            <label className="space-y-2 text-sm text-ash">
              Valor de x
              <input
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                className="block w-full rounded-inputs border border-obsidian-edge bg-void px-3 py-2 font-mono text-sm text-quartz outline-none transition-colors focus:border-signal-blue"
                aria-label="Valor de x"
                inputMode="decimal"
              />
            </label>
            <button type="submit" className="btn-primary h-10 px-4 text-sm">Evaluar</button>
          </form>
          {evaluation.kind === 'success' && (
            <div className="flex items-start gap-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-100" role="status">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-300" />
              <p>{evaluation.message} Resultado: f(x) = {evaluation.value}.</p>
            </div>
          )}
          {evaluation.kind === 'error' && (
            <div className="flex items-start gap-3 rounded-lg border border-plasma-pink/30 bg-plasma-pink/10 p-4 text-sm text-pink-100" role="alert">
              <XCircle className="h-5 w-5 shrink-0 text-plasma-pink" />
              <p>{evaluation.message}</p>
            </div>
          )}
        </div>
      </TabsContent>

      <TabsContent value="reto" className="space-y-5">
        <div className="agentql-card space-y-5">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Autoevaluación</p>
            <h2 className="font-figtree text-xl text-quartz">Para f(x) = √(x − 4), ¿x = 2 pertenece al dominio?</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {[{ label: 'Sí', value: true }, { label: 'No', value: false }].map((answer) => (
              <button
                key={answer.label}
                type="button"
                onClick={() => setQuizAnswer(answer.value)}
                className={`rounded-full border px-5 py-2 text-sm transition-colors ${quizAnswer === answer.value ? 'border-frosted-lilac bg-cobalt-panel text-quartz' : 'border-obsidian-edge text-mist hover:border-sapphire-hairline hover:text-quartz'}`}
              >
                {answer.label}
              </button>
            ))}
          </div>
          {quizAnswer !== null && (
            <p className={`text-sm ${quizAnswer === false ? 'text-emerald-200' : 'text-pink-200'}`} role="status">
              {quizAnswer === false ? 'Correcto. x − 4 = −2 y la raíz cuadrada no produce un valor real.' : 'Revisa la condición de una raíz par: su radicando debe ser mayor o igual que cero.'}
            </p>
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
}
