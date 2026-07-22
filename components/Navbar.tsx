'use client';

import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { BookOpen, Calculator, LineChart, Box, Sparkles, ChevronDown, Github } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-void/80 border-b border-inkline">
      <div className="max-w-[1200px] mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-pulse-violet to-aurora-purple flex items-center justify-center text-white font-figtree font-bold text-sm shadow-md">
            M1
          </div>
          <div>
            <span className="font-figtree font-medium text-lg text-quartz tracking-tight group-hover:text-frosted-lilac transition-colors">
              MAT115<span className="text-ash text-sm font-normal ml-1">2016</span>
            </span>
          </div>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-ash font-medium">
          <a href="#unidades" className="hover:text-quartz transition-colors flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-signal-blue" />
            Unidades
          </a>

          {/* Radix UI Dropdown for Interactive Tools */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="hover:text-quartz transition-colors flex items-center gap-1 focus:outline-none cursor-pointer">
              <Sparkles className="w-4 h-4 text-plasma-pink" />
              Herramientas
              <ChevronDown className="w-3.5 h-3.5 text-ash" />
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="z-50 min-w-[200px] bg-deep-sea border border-obsidian-edge rounded-cards p-2 shadow-xl animate-in fade-in-80"
                sideOffset={8}
              >
                <DropdownMenu.Item className="focus:outline-none">
                  <a
                    href="#calculadora"
                    className="flex items-center gap-2.5 px-3 py-2 text-sm text-mist hover:text-quartz hover:bg-cobalt-panel rounded-lg transition-colors"
                  >
                    <Calculator className="w-4 h-4 text-signal-blue" />
                    Calculadora Simbólica
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="focus:outline-none">
                  <a
                    href="#graficador2d"
                    className="flex items-center gap-2.5 px-3 py-2 text-sm text-mist hover:text-quartz hover:bg-cobalt-panel rounded-lg transition-colors"
                  >
                    <LineChart className="w-4 h-4 text-frosted-lilac" />
                    Graficador 2D
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="focus:outline-none">
                  <a
                    href="#simulador3d"
                    className="flex items-center gap-2.5 px-3 py-2 text-sm text-mist hover:text-quartz hover:bg-cobalt-panel rounded-lg transition-colors"
                  >
                    <Box className="w-4 h-4 text-plasma-pink" />
                    Simulación 3D (R³)
                  </a>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          <a href="#recursos" className="hover:text-quartz transition-colors">
            Recursos & Fórmulas
          </a>
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
          <a href="#unidades" className="btn-primary text-sm px-4 py-2">
            Explorar Programa
          </a>
        </div>
      </div>
    </header>
  );
}
