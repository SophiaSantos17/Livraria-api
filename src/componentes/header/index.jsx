import React from "react";
import logo from "../../assets/imgs/logo/logo.png";
import iconMenu from "../../assets/imgs/icones/icon-menu.png";

import "./style.css";

const Header = () => {
    return(
        <header>
            <nav>
                <div className="box-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="box-slogan">
                    <h1>"Onde cada livro é uma chave para a imaginação"</h1>
                </div>
                <div className="box-menu">
                    <button><img src={iconMenu} alt="" /></button>
                </div>
            </nav>
        </header>
    );
}


export default Header;