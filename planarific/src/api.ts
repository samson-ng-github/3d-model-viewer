import axios from 'axios';
import { type ModelListData, type ModelData } from './types';

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

const getModels = (): Promise<ModelListData[]> => {
  return api.get<ModelListData[]>('/v1/models', config).then((res) => {
    return res.data;
  });
};

const getModel = (url = '/v1/models/1'): Promise<ModelData> => {
  return api.get<ModelData>(url, config).then((res) => {
    return res.data;
  });
};

const getThumb = (url = '/thumbs/1.png') => {
  return api.get(url, { ...config, responseType: 'blob' }).then((res) => {
    return URL.createObjectURL(res.data);
  });
};

export { getLogo, getModels, getModel, getThumb };
