import React from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './style.css';

const CardLivros = ({ img, nomeLivro, chavePrimaria }) => {
    return (
        <div className="card-livro">
            <img src={img} alt={nomeLivro} />
            <p>{nomeLivro}</p>
            <Link className="button" to={`/info-livro/${chavePrimaria}`}>Ver</Link>
        </div>
    );
}

export default CardLivros;
