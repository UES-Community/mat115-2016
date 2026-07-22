import Link from 'next/link';
import { ArrowLeft, FunctionSquare } from 'lucide-react';
import FunctionDomainLab from '@/components/FunctionDomainLab';

export default function FunctionDefinitionPage() {
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-frosted-lilac">Unidad 1 · Tema 01</p>
            <h1 className="font-figtree text-3xl font-medium tracking-tight text-quartz sm:text-5xl">Función, dominio y contradominio</h1>
            <p className="max-w-3xl text-base leading-relaxed text-mist">Una función organiza entradas y salidas. Aprende a identificar sus conjuntos y practica las restricciones que determinan su dominio real.</p>
          </div>
        </div>
      </div>

      <FunctionDomainLab />
    </div>
  );
}
