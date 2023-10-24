import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Home from '../paginas/home';
import PagInfosLivro from '../paginas/info-livro';
import PagCategoria from '../paginas/categorias';

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info-livro/:chavePrimaria" element={<PagInfosLivro />} />
        <Route path="/categoria/:nomeCategoria" element={<PagCategoria />} />
      </Routes>
    </Router>
  );
};

export default Rotas;
