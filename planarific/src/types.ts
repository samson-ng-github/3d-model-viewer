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

  type ClickCoordsType = [number, number, number];

export { type ModelListData, type ModelData, type ClickCoordsType };