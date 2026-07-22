'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { BookOpen, Calculator, LineChart, Box, Sparkles, ChevronDown, Github } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const isToolsActive = ['/calculadora', '/graficador2d', '/simulador3d'].includes(pathname);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-void/80 border-b border-inkline">
      <div className="max-w-[1200px] mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-pulse-violet to-aurora-purple flex items-center justify-center text-white font-figtree font-bold text-sm shadow-md group-hover:scale-105 transition-transform duration-200">
            M1
          </div>
          <div>
            <span className="font-figtree font-medium text-lg text-quartz tracking-tight group-hover:text-frosted-lilac transition-colors">
              MAT115<span className="text-ash text-sm font-normal ml-1">2016</span>
            </span>
          </div>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-ash font-medium">
          <Link
            href="/unidades"
            className={`transition-all duration-200 flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${
              pathname === '/unidades'
                ? 'text-quartz bg-cobalt-panel/70 border border-sapphire-hairline'
                : 'hover:text-quartz hover:bg-deep-sea/50'
            }`}
          >
            <BookOpen className={`w-4 h-4 ${pathname === '/unidades' ? 'text-frosted-lilac' : 'text-signal-blue'}`} />
            Unidades
          </Link>

          {/* Radix UI Dropdown for Interactive Tools */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`transition-all duration-200 flex items-center gap-1.5 px-3 py-1.5 rounded-lg focus:outline-none cursor-pointer ${
                isToolsActive
                  ? 'text-quartz bg-cobalt-panel/70 border border-sapphire-hairline'
                  : 'hover:text-quartz hover:bg-deep-sea/50'
              }`}
            >
              <Sparkles className="w-4 h-4 text-plasma-pink" />
              Herramientas
              <ChevronDown className="w-3.5 h-3.5 text-ash" />
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
              <DropdownMenuContent
                className="z-50 min-w-[200px] bg-deep-sea border border-obsidian-edge rounded-cards p-2 shadow-xl animate-in fade-in-80 slide-in-from-top-2 duration-200"
                sideOffset={8}
              >
                <DropdownMenuItem className="focus:outline-none">
                  <Link
                    href="/calculadora"
                    className={`flex items-center gap-2.5 px-3 py-2 text-sm rounded-lg transition-colors ${
                      pathname === '/calculadora'
                        ? 'text-quartz bg-cobalt-panel font-semibold'
                        : 'text-mist hover:text-quartz hover:bg-cobalt-panel/60'
                    }`}
                  >
                    <Calculator className="w-4 h-4 text-signal-blue" />
                    Calculadora Simbólica
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:outline-none">
                  <Link
                    href="/graficador2d"
                    className={`flex items-center gap-2.5 px-3 py-2 text-sm rounded-lg transition-colors ${
                      pathname === '/graficador2d'
                        ? 'text-quartz bg-cobalt-panel font-semibold'
                        : 'text-mist hover:text-quartz hover:bg-cobalt-panel/60'
                    }`}
                  >
                    <LineChart className="w-4 h-4 text-frosted-lilac" />
                    Graficador 2D
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:outline-none">
                  <Link
                    href="/simulador3d"
                    className={`flex items-center gap-2.5 px-3 py-2 text-sm rounded-lg transition-colors ${
                      pathname === '/simulador3d'
                        ? 'text-quartz bg-cobalt-panel font-semibold'
                        : 'text-mist hover:text-quartz hover:bg-cobalt-panel/60'
                    }`}
                  >
                    <Box className="w-4 h-4 text-plasma-pink" />
                    Simulación 3D (R³)
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenu>

          <Link
            href="/recursos"
            className={`transition-all duration-200 flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${
              pathname === '/recursos'
                ? 'text-quartz bg-cobalt-panel/70 border border-sapphire-hairline'
                : 'hover:text-quartz hover:bg-deep-sea/50'
            }`}
          >
            Recursos & Fórmulas
          </Link>
        </nav>

        {/* CTA Button & GitHub link */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/UES-Community/mat115-2016"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-ash hover:text-quartz hover:bg-deep-sea transition-colors"
            title="Ver repositorio en GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <Link href="/unidades" className="btn-primary text-sm px-4 py-2 hover:scale-105 transition-transform duration-200">
            Explorar Programa
          </Link>
        </div>
      </div>
    </header>
  );
}

