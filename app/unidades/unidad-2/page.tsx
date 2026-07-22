import Link from 'next/link';
import { ArrowLeft, Binary } from 'lucide-react';
import UnitTwoGuide from '@/components/UnitTwoGuide';

export default function UnitTwoPage() {
  return (
    <div className="mx-auto max-w-[1200px] space-y-10 px-4 py-10 sm:py-16"><div className="space-y-5"><Link href="/unidades" className="inline-flex items-center gap-2 text-sm text-ash transition-colors hover:text-quartz"><ArrowLeft className="h-4 w-4" />Volver al programa</Link><div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sapphire-hairline bg-cobalt-panel text-signal-blue"><Binary className="h-6 w-6" /></div><div className="space-y-2"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-frosted-lilac">Unidad 2 · Límites y continuidad</p><h1 className="font-figtree text-3xl font-medium tracking-tight text-quartz sm:text-5xl">Límites y continuidad de funciones</h1><p className="max-w-3xl text-base leading-relaxed text-mist">Guía de estudio para comprender aproximación, continuidad, asíntotas y comportamiento al infinito.</p></div></div></div><UnitTwoGuide /></div>
  );
}
