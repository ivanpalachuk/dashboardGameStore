import React from "react";
import logo from "../assets/images/favicon-96x96.png"

function Header() {
    return (
        <>
            <header className="header">
                <div className="img-logo-header">
                    <a href="/home"><img id="logo-header" src={logo} alt="GameStore"/></a>
                </div>
                <nav className="main-navbar">
                    <ul>
                        <li className="primer-color">Plataforma <i id='fas' className="fas fa-caret-down"></i></li>
                        <li className="segundo-color">Edades <i id='fas' className="fas fa-caret-down"></i></li>
                        <li className="tercer-color">Dificultad <i id='fas' className="fas fa-caret-down"></i></li>
                        <li className="cuarto-color">Categorías <i id='fas' className="fas fa-caret-down"></i></li>
                    </ul>
                </nav>
                <div className="barra-busqueda">
                    <div>
                        <input type="search" id="search"/>
                            <i id="find" className="fas fa-search"></i><br/>
                            </div>
                            {/*<% if (locals.isLogged) { %>
            <div className="logged">
            <a href="/user/profile"><div className="userLogged"><%= locals.userLogged.usuario %><img className= "imgAvatarHeader" src="/images/avatars/<%=locals.userLogged.avatar.ruta %> "></a> / <a href= "/user/log-out">Log out  </a><i  id='fas' className="fas fa-gamepad"></i></div>
            </div>
            <% } else { %> 
                <div className="log-sign">
                <a href="/user/log-in">Log in</a> / <a href="/user/sign-up">Sign up</a> <i  id='fas' className="fas fa-gamepad"></i>
                </div>
            <% } %>*/}
                </div>

                            <div className="menu-desplegable">
                                <i className="fas fa-caret-square-down"></i>
                            </div>
                        </header>
                        <div id="relleno"></div>
           </> 
     )

}

export default Header