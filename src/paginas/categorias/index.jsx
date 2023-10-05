import { useState, useEffect } from "react";
import { getLivros } from "../../api/api";
import "./style.css";
import Header from "../../componentes/header";
import CardLivros from "../../componentes/cardLivro";

const PagCategoria = ({categoria}) => {
    const [livros, setLivros] = useState([]);
  
    useEffect(() => {
        getLivros()
        .then(response => {
            setLivros(response.data);
        })
        .catch(error => console.error(error));
    }, []);
  
    return(
        <div className="pagCategoria">
            <Header />
            <div className="box-categ">
                <p>Romance</p>
            </div>
            <div className="box-livros">
                <div className="box-infos-livros">
                    {livros.map(livro => (
                    <CardLivros key={livro.id} imgLivro={livro.imagem} nome={livro.nome}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PagCategoria;