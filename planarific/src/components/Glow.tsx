import { type ClickCoordsType } from '../types';

type GlowProps = {
  clickCoords: ClickCoordsType;
};

export function Glow({ clickCoords }: GlowProps) {
  return (
    <group>
      {clickCoords ? (
        <mesh position={clickCoords}>
          <sphereGeometry args={[0.5, 30, 30]} />
          <meshStandardMaterial wireframe color="#111155" />
        </mesh>
      ) : null}
    </group>
  );
}