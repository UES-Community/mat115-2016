import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import UnitsAccordion from '../components/UnitsAccordion';
import SymbolicCalculator from '../components/SymbolicCalculator';
import FunctionPlotter2D from '../components/FunctionPlotter2D';
import Vector3DSimulator from '../components/Vector3DSimulator';
import FormulaModal from '../components/FormulaModal';

export default function Home() {
  return (
    <div className="aurora-bg min-h-screen flex flex-col selection:bg-aurora-purple selection:text-white">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 space-y-0">
        <Hero />
        <UnitsAccordion />
        <SymbolicCalculator />
        <FunctionPlotter2D />
        <Vector3DSimulator />
        <FormulaModal />
      </main>

      {/* Footer */}
      <footer className="border-t border-inkline bg-void py-8 text-center text-xs text-ash">
        <div className="max-w-[1200px] mx-auto px-4 space-y-2">
          <p className="font-figtree text-sm text-quartz">
            Matemática I (MAT115-2016) — Universidad de El Salvador
          </p>
          <p className="font-sans font-light text-mist">
            Desarrollado con Next.js App Router, Tailwind CSS, Radix UI, KaTeX, MathJS, Recharts y Three.js.
          </p>
        </div>
      </footer>
    </div>
  );
}
