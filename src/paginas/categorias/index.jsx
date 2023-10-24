import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { getLivros } from '../../api/api';
import './style.css';
import Header from '../../componentes/header';
import CardLivros from '../../componentes/cardLivro';

const PagCategoria = () => {
  const { nomeCategoria } = useParams();

  const [livros, setLivros] = useState([]);

  useEffect(() => {
    getLivros()
      .then(response => {
        const livrosDaCategoria = response.data.filter(livro => livro.genero === nomeCategoria);
        setLivros(livrosDaCategoria);
      })
      .catch(error => console.error(error));
  }, [nomeCategoria]);

  return (
    <div className="pagCategoria">
      <Header />
      <div className="box-categ">
        <p>{nomeCategoria}</p>
      </div>
      <div className="box-livros-categ">
        <div className="box-infos-livros-categ">
          {livros.map(livro => (
            <CardLivros key={livro.chavePrimaria} img={livro.img} nomeLivro={livro.nomeLivro} chavePrimaria={livro.chavePrimaria} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PagCategoria;
