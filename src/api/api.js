import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
});

export const getCategorias = async () => {
    try {
      const response = await api.get("/categorias");
      return response.data;
    } catch (error) {
      console.error("Erro ao obter categorias:", error);
      throw error;
    }
  };


export default api;