import { useEffect, useRef, Dispatch, SetStateAction } from 'react';
import { useGLTF } from '@react-three/drei/native';
import { useThree, ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';
import { type ClickCoordsType } from '../types';

type ModelProps = {
  model: string;
  wireframe: boolean;
  setClickCoords: Dispatch<SetStateAction<ClickCoordsType>>;
};

export const Model = ({ model, wireframe, setClickCoords }: ModelProps) => {
  const ref = useRef();
  const gltf = useGLTF(model);

  const { camera, gl, scene } = useThree();
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());

  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const materials = Array.isArray(child.material)
            ? child.material
            : [child.material];

          materials.forEach((material) => {
            if (
              'wireframe' in material &&
              typeof material.wireframe === 'boolean'
            ) {
              material.wireframe = wireframe;
            }
          });
        }
      });
    }
  }, [model, wireframe, gltf.scene]);

  if (!gltf.scene) {
    return null;
  }

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    const rect = gl.domElement.getBoundingClientRect();
    mouse.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.current.setFromCamera(mouse.current, camera);
    const intersects = raycaster.current.intersectObjects(scene.children, true);
    if (intersects.length)
      setClickCoords([
        intersects[0].point.x,
        intersects[0].point.y,
        intersects[0].point.z,
      ]);
  };

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      rotation={[0, 0, 0]}
      position={[0, 10, 0]}
      wireframe={true}
      onClick={handleClick}
    />
  );
};
