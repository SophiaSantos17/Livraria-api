import React, { useState, useEffect } from 'react';
import { getLivros, getCategorias } from '../../api/api';
import { Link } from 'react-router-dom';
import Header from '../../componentes/header';
import Banner from '../../componentes/banner';
import CardLivros from '../../componentes/cardLivro';
import CardCategoria from '../../componentes/cardCategoria'
import './style.css';

const Home = () => {
  const [categorias, setCategorias] = useState([]);
  const [livros, setLivros] = useState([]);


  useEffect(() => {
    getLivros()
      .then(response => {
        console.log('Livros:', response.data);
        setLivros(response.data);
      })
      .catch(error => console.error(error));
  }, []);


  useEffect(() => {
    getCategorias()
    .then(response => {
      console.log('Categorias:', response.data);

      setCategorias(response.data);
    } )
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
            <Link
              to={`/categoria/${categoria.nomeCategoria}`}
              key={categoria.idCategoria}
              className="categoria-card"
            >
              <CardCategoria
                categoria={categoria.nomeCategoria}
                imgLivro={categoria.img}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="box-all-livros">
        <h1>Todos os livros</h1>
        <div className="box-witch-card-livros">
          {livros.map(livro => (
              <CardLivros key={livro.chavePrimaria} img={livro.img} nomeLivro={livro.nomeLivro} chavePrimaria={livro.chavePrimaria} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
