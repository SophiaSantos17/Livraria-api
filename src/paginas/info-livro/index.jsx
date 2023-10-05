import { useState, useEffect } from "react";
import { getLivros } from "../../api/api";
import "./style.css";
import Header from "../../componentes/header";
import CardLivros from "../../componentes/cardLivro";

const PagInfosLivro = () => {
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
            <div className="box-livros">
                <div className="box-infos-livros">
                    <div className="box-img">

                    </div>
                    {/* {livros.map(livro => (
                        
                    ))} */}
                </div>
            </div>
        </div>
    );
}

export default PagInfosLivro;