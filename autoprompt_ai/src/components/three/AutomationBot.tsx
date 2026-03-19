import { useRef, useMemo, Component, ReactNode } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Stars, Float } from "@react-three/drei";
import * as THREE from "three";

/* ─── WebGL Support Check ─────────────────────────────────────── */

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const ctx =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return !!ctx;
  } catch {
    return false;
  }
}

/* ─── 3D Scene ────────────────────────────────────────────────── */

function CoreBrain() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.25;
  });
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.2, 2]} />
        <MeshDistortMaterial
          color="#00d4ff"
          emissive="#003a6b"
          emissiveIntensity={0.8}
          metalness={0.9}
          roughness={0.1}
          distort={0.35}
          speed={2}
        />
      </mesh>
      <Sphere args={[0.9, 32, 32]}>
        <meshBasicMaterial color="#00aaff" transparent opacity={0.06} />
      </Sphere>
    </Float>
  );
}

function OrbitRing({ radius, speed, tilt, color }: { radius: number; speed: number; tilt: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => { if (ref.current) ref.current.rotation.z = state.clock.elapsedTime * speed; });
  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.015, 12, 80]} />
      <meshBasicMaterial color={color} transparent opacity={0.55} />
    </mesh>
  );
}

function OrbitingNode({ radius, speed, offset, color }: { radius: number; speed: number; offset: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  const angle = useRef(offset);
  useFrame((_, delta) => {
    if (!ref.current) return;
    angle.current += delta * speed;
    ref.current.position.x = Math.cos(angle.current) * radius;
    ref.current.position.z = Math.sin(angle.current) * radius;
    ref.current.rotation.y += delta * 2;
  });
  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[0.12]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.5} />
    </mesh>
  );
}

function DataParticles() {
  const count = 120;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.2 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);
  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.04;
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#22d3ee" size={0.045} transparent opacity={0.75} sizeAttenuation />
    </points>
  );
}

function OuterShell() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = -state.clock.elapsedTime * 0.08;
      ref.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[2.6, 1]} />
      <meshBasicMaterial color="#0077cc" wireframe transparent opacity={0.07} />
    </mesh>
  );
}

function MouseTracker() {
  const { camera } = useThree();
  useFrame((state) => {
    camera.position.x += (state.pointer.x * 0.4 - camera.position.x) * 0.04;
    camera.position.y += (state.pointer.y * 0.2 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#00d4ff" />
      <pointLight position={[-5, -3, -5]} intensity={1.2} color="#2563eb" />
      <pointLight position={[0, 0, 4]} intensity={0.8} color="#ffffff" />
      <MouseTracker />
      <CoreBrain />
      <OrbitRing radius={2.0} speed={0.4} tilt={Math.PI / 4} color="#00e5ff" />
      <OrbitRing radius={2.5} speed={-0.3} tilt={Math.PI / 2.5} color="#2563eb" />
      <OrbitRing radius={1.6} speed={0.6} tilt={Math.PI / 6} color="#0096c7" />
      <OrbitingNode radius={2.0} speed={0.7} offset={0} color="#00e5ff" />
      <OrbitingNode radius={2.0} speed={0.7} offset={Math.PI} color="#00aaff" />
      <OrbitingNode radius={2.5} speed={-0.5} offset={Math.PI / 2} color="#2563eb" />
      <OrbitingNode radius={2.5} speed={-0.5} offset={(3 * Math.PI) / 2} color="#7c3aed" />
      <OrbitingNode radius={1.6} speed={1.0} offset={Math.PI / 3} color="#00ffcc" />
      <DataParticles />
      <OuterShell />
      <Stars radius={30} depth={30} count={400} factor={2} fade speed={0.5} />
    </>
  );
}

/* ─── CSS-Only Orb (WebGL unavailable fallback) ───────────────── */

function CSSOrb() {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <style>{`
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        @keyframes spin-rev  { to { transform: rotate(-360deg); } }
        @keyframes pulse-orb { 0%,100%{opacity:.6;transform:scale(1)} 50%{opacity:.9;transform:scale(1.09)} }
        @keyframes float-nd  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes orbit-a   { from{transform:rotate(0deg) translateX(96px)} to{transform:rotate(360deg) translateX(96px)} }
        @keyframes orbit-b   { from{transform:rotate(120deg) translateX(80px)} to{transform:rotate(480deg) translateX(80px)} }
        @keyframes orbit-c   { from{transform:rotate(240deg) translateX(110px)} to{transform:rotate(600deg) translateX(110px)} }
        @keyframes orbit-d   { from{transform:rotate(60deg) translateX(70px)} to{transform:rotate(420deg) translateX(70px)} }
        .c-orb   { animation: pulse-orb 3s ease-in-out infinite; }
        .c-ring1 { animation: spin-slow 9s linear infinite; }
        .c-ring2 { animation: spin-rev 13s linear infinite; }
        .c-ring3 { animation: spin-slow 7s linear infinite; }
        .c-na { animation: orbit-a 4s linear infinite; }
        .c-nb { animation: orbit-b 5s linear infinite; }
        .c-nc { animation: orbit-c 6s linear infinite; }
        .c-nd { animation: orbit-d 3.5s linear infinite; }
      `}</style>
      <div className="relative w-72 h-72 flex items-center justify-center" style={{ perspective: "600px" }}>
        {/* Outer glow halo */}
        <div className="absolute inset-0 rounded-full bg-cyan-500/5 blur-3xl" />
        {/* Core orb */}
        <div className="c-orb absolute w-28 h-28 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-[0_0_80px_20px_rgba(0,229,255,0.45),0_0_30px_8px_rgba(37,99,235,0.3)] z-10" />
        <div className="absolute w-14 h-14 rounded-full bg-white/15 blur-md z-10" />
        {/* Rings */}
        <div className="c-ring1 absolute w-56 h-56 rounded-full border border-cyan-400/45" />
        <div className="c-ring2 absolute w-48 h-48 rounded-full border border-blue-500/35" style={{ transform: "rotateX(70deg)" }} />
        <div className="c-ring3 absolute w-64 h-64 rounded-full border border-indigo-500/25" style={{ transform: "rotateY(60deg)" }} />
        {/* Orbiting nodes */}
        {[
          { cls: "c-na", col: "bg-cyan-400", glow: "rgba(0,229,255,0.7)" },
          { cls: "c-nb", col: "bg-blue-500", glow: "rgba(37,99,235,0.7)" },
          { cls: "c-nc", col: "bg-indigo-400", glow: "rgba(99,102,241,0.6)" },
          { cls: "c-nd", col: "bg-teal-400", glow: "rgba(45,212,191,0.6)" },
        ].map(({ cls, col, glow }, i) => (
          <div key={i} className={`${cls} absolute`} style={{ transformOrigin: "center" }}>
            <div className={`w-3.5 h-3.5 rounded-full ${col}`} style={{ boxShadow: `0 0 14px 5px ${glow}` }} />
          </div>
        ))}
        {/* Floating data dots */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-300/60"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              animation: `float-nd ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.4 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Error Boundary ──────────────────────────────────────────── */

interface EBState { hasError: boolean }
class WebGLErrorBoundary extends Component<{ children: ReactNode }, EBState> {
  constructor(props: { children: ReactNode }) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() { return this.state.hasError ? <CSSOrb /> : this.props.children; }
}

/* ─── Main Export ─────────────────────────────────────────────── */

export function AutomationBot() {
  if (!isWebGLAvailable()) return <CSSOrb />;

  return (
    <WebGLErrorBoundary>
      <div className="w-full h-full">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <Scene />
        </Canvas>
      </div>
    </WebGLErrorBoundary>
  );
}
