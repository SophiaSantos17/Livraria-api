import React, { useState, useEffect } from 'react';
import { getCategorias, getLivros } from '../../api/api';
import Header from '../../componentes/header';
import Banner from '../../componentes/banner';
import CardCategoria from '../../componentes/cardCategoria';
import CardLivros from '../../componentes/cardLivro';

import './style.css';

const Home = () => {
  const [categorias, setCategorias] = useState([]);
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    getCategorias()
      .then(response => {
        setCategorias(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    getLivros()
      .then(response => {
        setLivros(response.data);
      })
      .catch(error => console.error(error));
  }, []);
  
  
  return (
    <div className="home">
      <Header/>
      <Banner/>
      <div className="box-categorias">
        <h1>Categorias:</h1>
        <div className="categories">
          {categorias.map(categoria => (
            <CardCategoria key={categoria.id} categoria={categoria.name} imgLivro={categoria.imagem} />
          ))}
        </div>
      </div>
      <div className="box-livros">
        <h1>Todos os livros</h1>
        <div className="box-infos-livros">
          {livros.map(livro => (
            <CardLivros key={livro.id} imgLivro={livro.imagem} nome={livro.nome}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
