import React from "react";
import './style.css';

const CardLivros = ({imgLivro, nome}) => {
    return(
        <div className="card-livro">
            <img src={imgLivro} alt={nome} />
            <p>{nome}</p>
            <button>Ver</button>
        </div>

    );
}

export default CardLivros;