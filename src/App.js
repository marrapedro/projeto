import React, { Component } from "react";
import './App.css';


class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      senha: "",
      mensagem: ""
    }
    
    this.mudar = this.mudar.bind(this);
    this.validacao = this.validacao.bind(this);
  }

  mudar(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  validacao() {
    if(this.state.email === "eduardo.lino@pucpr.br" && this.state.senha === "123456") {
      this.setState({mensagem:"Acessado com sucesso!"});
    } else {
      this.setState({mensagem:"Usuário ou senha incorretos!"});
    }
  }

  render() {
    return(
      <div>
        <h1 className="titulo">Login</h1>
        <input type="email" name="email" value={this.state.email} onChange={this.mudar} placeholder="E-mail" />
        <br/>
        <input type="password" name="senha" value={this.state.senha} onChange={this.mudar} placeholder="Senha"/>
        <br/>
        <button className="botaoLogin" onClick={this.validacao}>Acessar</button>
        <br/><br/>
        <label name="label">{this.state.mensagem}</label>
      </div>
    )
  }

}


export default Login;