import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // URL base da sua API mock
});

export const getLivros = () => {
  return api.get('/livros');
};
export const getCategorias = () => {
  return api.get('/categorias');
};

export default api;
