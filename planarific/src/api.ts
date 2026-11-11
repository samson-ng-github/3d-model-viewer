import axios from 'axios';

interface ModelListItem {
  id: number;
  description: string;
  thumbnail: string;
  blob: string;
}

interface Model {
  id: number;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postal_code: string;
  model: string;
  thumbnail: string;
}

const api = axios.create({
  baseURL: '/api',
});

const config = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_API_TOKEN}`,
  },
};

const getLogo = () => {
  return api
    .get('/planarific.webp', { ...config, responseType: 'blob' })
    .then((res) => {
      return URL.createObjectURL(res.data);
    });
};

const getModels = (): Promise<ModelListItem[]> => {
  return api.get<ModelListItem[]>('/v1/models', config).then((res) => {
    return res.data;
  });
};

const getModel = (url = '/v1/models/1'): Promise<Model> => {
  return api.get<Model>(url, config).then((res) => {
    return res.data;
  });
};

const getThumb = (url = '/thumbs/1.png') => {
  return api.get(url, { ...config, responseType: 'blob' }).then((res) => {
    return URL.createObjectURL(res.data);
  });
};

export { getLogo, getModels, getModel, getThumb, type ModelListItem, type Model };
