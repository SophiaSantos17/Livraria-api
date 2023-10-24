import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getInfoLivro } from "../../api/api";
import "./style.css";
import Header from "../../componentes/header";

const PagInfosLivro = () => {
  let { chavePrimaria } = useParams();
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    getInfoLivro(chavePrimaria)
      .then((response) => {
        setLivro(response.data);
      })
      .catch((error) => console.error(error));
  }, [chavePrimaria]);

  if (!livro) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pagCategoria">
      <Header />
      <div className="box-livros">
        <div className="box-infos-livros">
          <div className="box-img">
            <img src={livro.img} alt="" />
          </div>

          <div className="box-infos">
            <h1 className="titulo">{livro.nomeLivro}</h1>
            <p>Autor: <span>{livro.autor}</span></p>
            <p>Gênero <span>{livro.genero}</span></p>
            <p>Lançamento: <span>{livro.anoLancamento}</span></p>
            <p>Sinópse: <span>{livro.sinopse}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagInfosLivro;
