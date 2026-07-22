'use client';

import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface MathRenderProps {
  math: string;
  block?: boolean;
}

export default function MathRender({ math, block = false }: MathRenderProps) {
  try {
    if (block) {
      return <BlockMath math={math} />;
    }
    return <InlineMath math={math} />;
  } catch {
    return <span className="font-mono text-xs text-red-400">{math}</span>;
  }
}
