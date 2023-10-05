import React from "react";
// import imgLivro from "../../assets/imgs/livros/a-revolucao-dos-bichos.jpg";
import './style.css';

const CardCategoria = ({categoria, imgLivro}) => {
    return (
        <div className="box-categoraia">
            <img src={imgLivro} alt="Capa do Livro da Coolen Hover" />
            <div className="overlay">
                <p>{categoria}</p>
            </div>
        </div>
    );
}

export default CardCategoria;

