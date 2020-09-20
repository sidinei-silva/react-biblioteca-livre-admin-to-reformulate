import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import LogoNavbar from "../../assets/img/logo_navbar.png";
import IconSend from "../../assets/svg/icon_send.js"

import {Page, Header, Navbar, HeaderContainerText} from "./styles";

class Home extends Component {
  render(){
    return(
      <Page>
        <Header>
          <Navbar>
            <img src={LogoNavbar} alt="Airbnb logo" />
            <ul>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#new">Novidades</a></li>
              <li><a href="#contact">Contato</a></li>
              <li><a className="active" href="#about">Entrar</a></li>
            </ul>
          </Navbar>
          <HeaderContainerText>
            
            <svg xmlns="http://www.w3.org/2000/svg" id='work_livre' width="311" height="156" viewBox="0 0 311 156">
              <text id="livre" transform="translate(1 124)" fill="none" stroke="#fff" strokeWidth="1" fontSize="118" fontFamily="Futura-Bold, Futura" fontWeight="700" opacity="0.3"><tspan x="0" y="0">Livre</tspan></text>
            </svg>
            <h1> Estamos prontos <br/>
             para a <span>liberdade</span> <br/>
            do conhecimento.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>
            <input
              type="text"
              placeholder="Buscar Livro"
              onChange={e => this.setState({ username: e.target.value })}
            />
            <button type="submit">
            {IconSend}
            </button>
            <small>faça seu registo!</small>
          </HeaderContainerText>
        </Header>
      </Page>
    )
  }
}

export default Home;