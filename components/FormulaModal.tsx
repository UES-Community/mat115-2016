'use client';

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Tooltip from '@radix-ui/react-tooltip';
import MathRender from './MathRender';
import { BookOpen, X, Info, HelpCircle } from 'lucide-react';

export default function FormulaModal() {
  return (
    <section id="recursos" className="py-16 bg-abyss border-b border-inkline text-center">
      <div className="max-w-[1200px] mx-auto px-4 space-y-6">
        <h3 className="font-figtree font-medium text-2xl text-quartz">
          Formulario & Referencias Rápidas
        </h3>
        <p className="font-sans font-light text-ash text-sm max-w-xl mx-auto">
          Consulte las tablas de fórmulas integradas de derivadas trascendentes, integrales inmediatas e identidades vectoriales.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          
          {/* Radix Dialog for Formulario Completo */}
          <Dialog.Root>
            <Dialog.Trigger className="btn-ghost text-sm">
              <BookOpen className="w-4 h-4 text-signal-blue" />
              Ver Tablas de Derivadas e Integrales
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-void/80 backdrop-blur-sm z-50 animate-in fade-in" />
              <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-deep-sea border border-obsidian-edge rounded-cards p-6 shadow-xl z-50 space-y-6 max-h-[85vh] overflow-y-auto">
                <div className="flex items-center justify-between border-b border-inkline pb-3">
                  <Dialog.Title className="font-figtree font-medium text-xl text-quartz">
                    Formulario Fundamental MAT115
                  </Dialog.Title>
                  <Dialog.Close className="p-1 rounded-full text-ash hover:text-quartz hover:bg-cobalt-panel focus:outline-none">
                    <X className="w-5 h-5" />
                  </Dialog.Close>
                </div>

                <div className="space-y-6 text-left text-sm">
                  <div className="space-y-2">
                    <h4 className="font-medium text-frosted-lilac text-xs uppercase tracking-wider">
                      Derivadas Fundamentales
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-cobalt-panel p-3 rounded border border-sapphire-hairline text-center">
                        <MathRender math="\frac{d}{dx}[x^n] = n x^{n-1}" block />
                      </div>
                      <div className="bg-cobalt-panel p-3 rounded border border-sapphire-hairline text-center">
                        <MathRender math="\frac{d}{dx}[\sin(x)] = \cos(x)" block />
                      </div>
                      <div className="bg-cobalt-panel p-3 rounded border border-sapphire-hairline text-center">
                        <MathRender math="\frac{d}{dx}[e^x] = e^x" block />
                      </div>
                      <div className="bg-cobalt-panel p-3 rounded border border-sapphire-hairline text-center">
                        <MathRender math="\frac{d}{dx}[\ln(x)] = \frac{1}{x}" block />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-plasma-pink text-xs uppercase tracking-wider">
                      Integrales Inmediatas
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-cobalt-panel p-3 rounded border border-sapphire-hairline text-center">
                        <MathRender math="\int x^n \, dx = \frac{x^{n+1}}{n+1} + C" block />
                      </div>
                      <div className="bg-cobalt-panel p-3 rounded border border-sapphire-hairline text-center">
                        <MathRender math="\int \frac{1}{x} \, dx = \ln|x| + C" block />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-inkline text-right">
                  <Dialog.Close className="btn-primary text-xs px-4 py-2">
                    Cerrar
                  </Dialog.Close>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>

          {/* Radix Tooltip Provider for notation info */}
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger className="btn-accent text-sm inline-flex items-center gap-1.5 cursor-pointer">
                <HelpCircle className="w-4 h-4" />
                Guía de Notación Simbólica
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content className="bg-deep-sea border border-sapphire-hairline rounded-lg p-3 text-xs text-mist shadow-xl max-w-xs z-50">
                  <p>Sintaxis para el motor simbólico:</p>
                  <ul className="mt-1 space-y-1 font-mono text-[11px] text-frosted-lilac">
                    <li>* Multiplicación: 2*x</li>
                    <li>^ Potencia: x^2</li>
                    <li>sin(x), cos(x), exp(x), log(x)</li>
                  </ul>
                  <Tooltip.Arrow className="fill-deep-sea" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>

        </div>
      </div>
    </section>
  );
}
