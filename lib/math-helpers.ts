import { evaluate, parse, derivative } from 'mathjs';

export interface FunctionPlotPoint {
  x: number;
  y: number | null;
}

export function sampleFunction2D(
  expression: string,
  minX = -10,
  maxX = 10,
  steps = 100
): FunctionPlotPoint[] {
  const points: FunctionPlotPoint[] = [];
  const step = (maxX - minX) / steps;

  try {
    const compiled = parse(expression).compile();
    for (let i = 0; i <= steps; i++) {
      const x = minX + i * step;
      try {
        const val = compiled.evaluate({ x });
        if (typeof val === 'number' && !isNaN(val) && isFinite(val)) {
          points.push({ x: Number(x.toFixed(2)), y: Number(val.toFixed(2)) });
        } else {
          points.push({ x: Number(x.toFixed(2)), y: null });
        }
      } catch {
        points.push({ x: Number(x.toFixed(2)), y: null });
      }
    }
  } catch {
    console.error('Error parsing expression for 2D plot');
  }

  return points;
}

export function computeDerivative(expression: string, variable = 'x'): { resultLatex: string; resultText: string } {
  try {
    const der = derivative(expression, variable);
    return {
      resultLatex: der.toTex(),
      resultText: der.toString(),
    };
  } catch {
    return {
      resultLatex: '\\text{Expresión no válida}',
      resultText: 'Expresión no válida',
    };
  }
}

export function evaluateExpression(expression: string, scope: Record<string, number> = {}): { resultText: string; latex: string } {
  try {
    const parsed = parse(expression);
    const result = evaluate(expression, scope);
    return {
      resultText: String(result),
      latex: parsed.toTex(),
    };
  } catch {
    return {
      resultText: 'Error',
      latex: '\\text{Error}',
    };
  }
}
