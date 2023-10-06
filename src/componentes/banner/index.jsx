import React from "react";

import imgBanner from "../../assets/imgs/banner/img-banner.png";
import "./style.css";

const Banner = () => {
    return(
        <div className="box-banner">
            <div className="box-size-text">
                <h1>Livraria 
                <br/> Entre Páginas</h1>
                <p>Bem-vindo à Livraria Online "Entre Páginas". Aqui, cada clique é uma porta para um universo de histórias. Explore nosso catálogo diversificado, que abraça desde os clássicos até as últimas novidades. Junte-se a uma comunidade de amantes da literatura e descubra mundos inexplorados. Entre Páginas, a aventura literária aguarda por você.</p>
            </div>
            <div className="box-size-img">
                <img src={imgBanner} alt="Imagem de Duas Pessoas pegando livros" />
            </div>
        </div>
    );
}

export default Banner;

