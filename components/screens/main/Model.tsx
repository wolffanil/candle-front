"use client";

import { ErrorBoundary } from "react-error-boundary";
import { Canvas } from "@react-three/fiber";
import CandleModel from "./CandleModel";

function Model() {
  return (
    <ErrorBoundary fallback={<></>}>
      <Canvas className="absolute max-w-[464px] max-h-[708px] bg-white/0 z-20 top-[105px] -left-[180px]">
        <CandleModel />
      </Canvas>
    </ErrorBoundary>
  );
}

export default Model;
