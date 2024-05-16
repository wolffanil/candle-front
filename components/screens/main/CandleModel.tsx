import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function CandleModel() {
  const candleModel = useGLTF("/models/candle.glb");
  const candleRef = useRef(null);

  useFrame((state, delta) => {
    //@ts-ignore
    candleRef.current.rotation.y += delta * 0.4;
  });

  console.log(candleModel, "model");
  return (
    <>
      <directionalLight
        position={[1, 2, 3]}
        intensity={1.9}
        color={"#E5DBD0"}
      />
      <ambientLight intensity={2.5} />
      <primitive
        object={candleModel.scene}
        ref={candleRef}
        position-z={-23}
        position-y={-12}
      />
    </>
  );
}

useGLTF.preload("/models/candle.glb");

export default CandleModel;
