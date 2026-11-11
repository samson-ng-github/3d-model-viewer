import { type OrbitControls } from 'three-stdlib';

type ModelListData = {
  id: number;
  description: string;
  thumbnail: string;
  blob: string;
};

type ModelData = {
  id: number;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postal_code: string;
  model: string;
  thumbnail: string;
};

type ClickCoordsType = [number, number, number] | null;

type OrbitControlsType = OrbitControls | null;

export { type ModelListData, type ModelData, type ClickCoordsType, type OrbitControlsType };
