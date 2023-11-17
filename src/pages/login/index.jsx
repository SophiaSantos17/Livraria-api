import React from "react";
import "./login.css";
import UserImg from "../../assets/icones/user-preto.png";
import UserIcon from "../../assets/icones/user-vazado-preto.png";
import SenhaIcon from "../../assets/icones/cadeado-vazado-preto.png"

const Login = () => {

    return(
        <div className="container">
            <div className="box-size-banner">
                <img src="" alt="" />
            </div>
            <div className="box-size-login">
            
                <div className="box-login">
                    <img src={UserImg} alt="" />
                    <h2>LOGIN</h2>
                    <br/>
                    <div className="box-input">
                        <label htmlFor="user"><img src={UserIcon} alt="" /></label>
                        <input type="text" placeholder="Usuário" id="user" className="input-user"/>
                    </div>
                    
                    <br/>
                    <div className="box-input">
                        <label htmlFor="senha"><img src={SenhaIcon} alt="" /></label>
                        <input type="text" placeholder="Senha" id="enha" className="input-senha"/>
                    </div>
                    <br/>
                    <button>LOGIN</button>
                </div>
                <a href="">Crie sua conta</a>
            </div>


        </div>
    );
}


export default Login;