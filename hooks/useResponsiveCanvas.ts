import { useState, useEffect } from "react";

export function useResponsiveCanvas() {
  const [config, setConfig] = useState({
    particleCount: 500,
    distsortMultiplier: 1.0,
    isMobile: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isMobileDevice = width < 768;
      setConfig({
        particleCount: isMobileDevice ? 150 : 600,
        distsortMultiplier: isMobileDevice ? 0.2 : 1.0,
        isMobile: isMobileDevice,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return config;
}