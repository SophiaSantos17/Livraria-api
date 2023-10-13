import React from "react";
import "./style.css";
import Header from "../../componentes/header";
// import CardLivros from "../../componentes/cardLivro";

import livroImg from '../../assets/imgs/livros/a-mulher-na-janela.jpg';


const PagInfosLivro = () => {
    
  
    return(
        <div className="pagCategoria">
            <Header />
            <div className="box-livros">
                <div className="box-infos-livros">
                    <div className="box-img">
                            <img src={livroImg} alt="" />
                    </div>
                    
                    <div className="box-infos">
                        <h1 className="titulo">A Mulher na Janela</h1>
                        <p>Autor: <span>A.J. Finn</span></p>
                        <p>Gênero <span>Suspense</span></p>
                        <p>Lançamento: <span>2018</span></p>
                        <p>Sinópse: <span>A história segue Anna Fox, uma mulher agorafóbica que passa os dias observando a vida de seus vizinhos pela janela. Quando testemunha algo perturbador na casa dos novos vizinhos, ela se vê envolvida em um mistério envolvendo segredos obscuros e mentiras.</span></p>
                    </div>

                    
                </div>
            </div>
        </div>
    );
}

export default PagInfosLivro;