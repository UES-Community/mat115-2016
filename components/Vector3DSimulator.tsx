'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import MathRender from './MathRender';
import { Box, Play, RotateCcw, Compass } from 'lucide-react';

export default function Vector3DSimulator() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [vectorX, setVectorX] = useState<number>(3);
  const [vectorY, setVectorY] = useState<number>(4);
  const [vectorZ, setVectorZ] = useState<number>(5);
  const [isRotating, setIsRotating] = useState<boolean>(true);

  // Calculate norm
  const magnitude = Math.sqrt(vectorX * vectorX + vectorY * vectorY + vectorZ * vectorZ).toFixed(2);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 360;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0d172b);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(10, 12, 16);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Grid & Axes Helper
    const gridHelper = new THREE.GridHelper(20, 20, 0x305fbd, 0x172540);
    scene.add(gridHelper);

    const axesHelper = new THREE.AxesHelper(8);
    scene.add(axesHelper);

    // Vector Arrow
    const origin = new THREE.Vector3(0, 0, 0);
    const target = new THREE.Vector3(vectorX, vectorZ, vectorY); // Note: Y in Three.js is UP
    const length = target.length();
    const direction = target.clone().normalize();

    const arrowHelper = new THREE.ArrowHelper(direction, origin, length, 0xff7dda, 0.8, 0.5);
    scene.add(arrowHelper);

    // Point sphere at vector tip
    const pointGeo = new THREE.SphereGeometry(0.25, 16, 16);
    const pointMat = new THREE.MeshBasicMaterial({ color: 0x85a6e9 });
    const pointMesh = new THREE.Mesh(pointGeo, pointMat);
    pointMesh.position.copy(target);
    scene.add(pointMesh);

    // Ambient & Directional Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    // Animation Loop
    let animationFrameId: number;
    let angle = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (isRotating) {
        angle += 0.008;
        camera.position.x = 18 * Math.cos(angle);
        camera.position.z = 18 * Math.sin(angle);
        camera.lookAt(0, 2, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 360;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [vectorX, vectorY, vectorZ, isRotating]);

  return (
    <section id="simulador3d" className="py-20 bg-void border-b border-inkline">
      <div className="max-w-[1200px] mx-auto px-4 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-ash">
            Geometría Analítica en R³ (Unidad 5)
          </span>
          <h2 className="font-figtree font-medium text-3xl sm:text-4xl text-quartz tracking-tight">
            Simulación 3D de Vectores en el Espacio
          </h2>
          <p className="font-sans font-light text-mist text-base">
            Lienzo WebGL interactivo en tiempo real renderizado con Three.js para la visualización de vectores posicionales y norma <MathRender math="||\vec{v}||" />.
          </p>
        </div>

        {/* 3D Canvas + Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-5 agentql-card space-y-6">
            <div className="flex items-center justify-between border-b border-inkline pb-3">
              <div className="flex items-center gap-2 text-xs font-medium text-frosted-lilac">
                <Compass className="w-4 h-4 text-plasma-pink" />
                <span>Componentes del Vector <MathRender math="\vec{v} = (v_x, v_y, v_z)" /></span>
              </div>
              <button
                onClick={() => setIsRotating(!isRotating)}
                className="p-1.5 rounded-lg bg-cobalt-panel hover:bg-inkline text-ash hover:text-quartz transition-colors text-xs flex items-center gap-1"
              >
                {isRotating ? <RotateCcw className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isRotating ? 'Pausar Órbita' : 'Rotar Órbita'}</span>
              </button>
            </div>

            {/* Slider inputs for X, Y, Z */}
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-red-400">Componente v_x (Eje X):</span>
                  <span className="text-quartz">{vectorX}</span>
                </div>
                <input
                  type="range"
                  min="-8"
                  max="8"
                  step="0.5"
                  value={vectorX}
                  onChange={(e) => setVectorX(parseFloat(e.target.value))}
                  className="w-full accent-signal-blue cursor-pointer"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-green-400">Componente v_y (Eje Y):</span>
                  <span className="text-quartz">{vectorY}</span>
                </div>
                <input
                  type="range"
                  min="-8"
                  max="8"
                  step="0.5"
                  value={vectorY}
                  onChange={(e) => setVectorY(parseFloat(e.target.value))}
                  className="w-full accent-signal-blue cursor-pointer"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-plasma-pink">Componente v_z (Eje Z):</span>
                  <span className="text-quartz">{vectorZ}</span>
                </div>
                <input
                  type="range"
                  min="-8"
                  max="8"
                  step="0.5"
                  value={vectorZ}
                  onChange={(e) => setVectorZ(parseFloat(e.target.value))}
                  className="w-full accent-signal-blue cursor-pointer"
                />
              </div>
            </div>

            {/* Calculated Norm Box */}
            <div className="bg-cobalt-panel border border-sapphire-hairline rounded-cards p-4 space-y-2">
              <span className="text-xs font-semibold text-ash uppercase tracking-wider block">
                Magnitud / Norma Euclidiana:
              </span>
              <div className="py-2 text-center text-lg text-quartz">
                <MathRender math={`||\\vec{v}|| = \\sqrt{${vectorX}^2 + ${vectorY}^2 + ${vectorZ}^2} = ${magnitude}`} block />
              </div>
            </div>
          </div>

          {/* WebGL Canvas Column */}
          <div className="lg:col-span-7 agentql-highlight-card p-4 space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-ash border-b border-sapphire-hairline/60 pb-2">
              <div className="flex items-center gap-2">
                <Box className="w-4 h-4 text-signal-blue" />
                <span className="font-medium text-quartz">Lienzo Tridimensional Three.js</span>
              </div>
              <span className="text-[11px] font-mono text-frosted-lilac">
                Vector Flecha Rosa: ({vectorX}, {vectorY}, {vectorZ})
              </span>
            </div>

            {/* Canvas Mount Container */}
            <div ref={mountRef} className="w-full h-[380px] rounded-lg overflow-hidden border border-inkline" />
          </div>

        </div>

      </div>
    </section>
  );
}
