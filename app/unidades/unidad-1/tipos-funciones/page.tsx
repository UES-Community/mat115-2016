'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, CheckCircle2, FunctionSquare, XCircle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectItemText, SelectPortal, SelectTrigger, SelectValue, SelectViewport } from '@/components/ui/select';
import MathRender from '@/components/MathRender';

const expressions = [
  { id: 'polynomial', label: '2x³ − x + 4', expression: 'f(x) = 2x³ − x + 4', type: 'Polinómica', explanation: 'Está formada por potencias enteras no negativas de x y sus coeficientes.' },
  { id: 'rational', label: '1 / (x − 1)', expression: 'g(x) = 1/(x − 1)', type: 'Racional', explanation: 'Es un cociente de polinomios y excluye los valores que anulan el denominador.' },
  { id: 'exponential', label: '3ˣ', expression: 'h(x) = 3ˣ', type: 'Exponencial', explanation: 'La variable aparece en el exponente y la base es positiva distinta de 1.' },
  { id: 'trigonometric', label: 'sen(x)', expression: 'p(x) = sen(x)', type: 'Trigonométrica', explanation: 'Es periódica y modela fenómenos oscilatorios.' },
];

export default function FunctionTypesPage() {
  const [selectedId, setSelectedId] = useState(expressions[0].id);
  const [answer, setAnswer] = useState<string | null>(null);
  const selected = expressions.find((item) => item.id === selectedId) ?? expressions[0];

  return (
    <div className="mx-auto max-w-[1200px] space-y-10 px-4 py-10 sm:py-16">
      <div className="space-y-5">
        <Link href="/unidades/unidad-1" className="inline-flex items-center gap-2 text-sm text-ash transition-colors hover:text-quartz">
          <ArrowLeft className="h-4 w-4" />
          Volver a la guía de Unidad 1
        </Link>
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sapphire-hairline bg-cobalt-panel text-signal-blue">
            <FunctionSquare className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-frosted-lilac">Unidad 1 · Tema 03</p>
            <h1 className="font-figtree text-3xl font-medium tracking-tight text-quartz sm:text-5xl">Tipos de funciones</h1>
            <p className="max-w-3xl text-base leading-relaxed text-mist">Clasifica una expresión por su estructura y anticipa el comportamiento que tendrá su gráfica.</p>
          </div>
        </div>
      </div>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          ['Polinómicas', 'aₙxⁿ + ··· + a₀', 'Su dominio es ℝ.'],
          ['Racionales', 'p(x) / q(x)', 'q(x) no puede ser 0.'],
          ['Exponenciales', 'aˣ', 'Crecen o decrecen según a.'],
          ['Trigonométricas', 'sen(x), cos(x)', 'Tienen comportamiento periódico.'],
        ].map(([title, formula, description]) => (
          <article key={title} className="agentql-card space-y-3">
            <h2 className="font-figtree text-lg text-quartz">{title}</h2>
            <MathRender math={formula} block />
            <p className="text-sm text-ash">{description}</p>
          </article>
        ))}
      </section>

      <section className="agentql-highlight-card space-y-6">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Clasificador interactivo</p>
          <h2 className="font-figtree text-2xl text-quartz">Observa la estructura de cada expresión</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,360px)_1fr] lg:items-end">
          <label className="space-y-2 text-sm text-ash">
            Selecciona una expresión
            <Select value={selectedId} onValueChange={setSelectedId}>
              <SelectTrigger className="flex w-full items-center justify-between rounded-inputs border border-obsidian-edge bg-void px-3 py-2.5 text-sm text-quartz outline-none">
                <SelectValue />
              </SelectTrigger>
              <SelectPortal>
                <SelectContent className="z-50 rounded-cards border border-obsidian-edge bg-deep-sea p-1 shadow-xl">
                  <SelectViewport className="space-y-1 p-1">
                    {expressions.map((item) => (
                      <SelectItem key={item.id} value={item.id} className="cursor-pointer rounded px-3 py-2 text-sm text-mist outline-none hover:bg-cobalt-panel hover:text-quartz">
                        <SelectItemText>{item.label}</SelectItemText>
                      </SelectItem>
                    ))}
                  </SelectViewport>
                </SelectContent>
              </SelectPortal>
            </Select>
          </label>
          <div className="rounded-lg border border-sapphire-hairline bg-cobalt-panel/60 p-5">
            <p className="font-mono text-lg text-frosted-lilac">{selected.expression}</p>
            <p className="mt-2 text-sm text-mist"><span className="font-semibold text-quartz">Tipo:</span> {selected.type}. {selected.explanation}</p>
          </div>
        </div>
      </section>

      <section className="agentql-card space-y-5">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-frosted-lilac">Autoevaluación</p>
          <h2 className="font-figtree text-xl text-quartz">¿Qué tipo de función es f(x) = log(x)?</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {['Polinómica', 'Logarítmica', 'Racional'].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setAnswer(option)}
              className={`rounded-full border px-5 py-2 text-sm transition-colors ${answer === option ? 'border-frosted-lilac bg-cobalt-panel text-quartz' : 'border-obsidian-edge text-mist hover:border-sapphire-hairline hover:text-quartz'}`}
            >
              {option}
            </button>
          ))}
        </div>
        {answer && (
          <div className={`flex items-start gap-3 text-sm ${answer === 'Logarítmica' ? 'text-emerald-200' : 'text-pink-200'}`} role="status">
            {answer === 'Logarítmica' ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : <XCircle className="h-5 w-5 shrink-0" />}
            <p>{answer === 'Logarítmica' ? 'Correcto: el logaritmo es la función inversa de una exponencial.' : 'La variable está dentro del argumento del logaritmo; revisa la familia logarítmica.'}</p>
          </div>
        )}
      </section>
    </div>
  );
}
