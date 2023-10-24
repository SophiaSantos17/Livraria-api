import React, { useState, useEffect } from 'react';
import { getCategorias } from '../../api/api';
import logo from "../../assets/imgs/logo/logo.png";
import iconMenu from "../../assets/imgs/icones/icon-menu.png";
import iconClose from "../../assets/imgs/icones/icon-close.png";
import "./style.css";
import { Link } from 'react-router-dom';

const Header = () => {
  const [categorias, setCategorias] = useState([]);
  const [menuVisivel, setMenuVisivel] = useState(false);

  const toggleMenu = () => {
    setMenuVisivel(!menuVisivel);
  };

  useEffect(() => {
    getCategorias() 
      .then(response => {
        setCategorias(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <header className="header">
      <nav className="nav">
        <div className="box-logo">
        <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="box-slogan">
          <h1>"Onde cada livro é uma chave para a imaginação"</h1>
        </div>
        <div className="box-menu">
          <button onClick={toggleMenu}>
            {menuVisivel ? <img src={iconClose} alt="Fechar" /> : <img src={iconMenu} alt="Menu" />}
          </button>
        </div>
      </nav>

      <div className={`menu-categorias ${menuVisivel ? 'menu-visivel' : ''}`}>
        <div className="options">
            <h3>Categorias</h3>
            <button onClick={toggleMenu}><img src={iconClose} alt="Menu" /></button>
        </div>

        <div className="categorias">
        {categorias.map(categoria => (
          <Link
            to={`/categoria/${categoria.nomeCategoria}`}
            key={categoria.idCategoria}
            className="categoria-card"
          >{categoria.nomeCategoria}</Link>
))}
        </div>
      </div>
    </header>
  );
}

export default Header;
