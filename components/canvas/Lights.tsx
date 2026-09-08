import { useRef } from "react";

export function Lights() {
  const mainLight = useRef<any>(null);

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        ref={mainLight}
        position={[5, 8, 5]}
        intensity={1.5}
        color="#ffffff"
      />
      <pointLight position={[-8, -5, -5]} intensity={0.6} color="#3b82f6" />
      <pointLight position={[8, 5, -2]} intensity={0.8} color="#ec4899" />
    </>
  );
}