import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/mercado-pago.svg';
import MercadoToken from '../../assets/mercado-tokens-ok.png';

import { Container, Topo, Inputs } from './styles';
import axios from "axios";

class Primeira extends Component {
  constructor(props){
    super(props)
    this.state = {
      file: null,
      file2: null,
      erro: ''
    }
    this.handleChangeFile1 = this.handleChangeFile1.bind(this)
    this.handleChangeFile2 = this.handleChangeFile2.bind(this)
  }

  handleChangeFile1(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  handleChangeFile2(event) {
    this.setState({
      file2: URL.createObjectURL(event.target.files[0])
    })
  }
  // On file upload (click the upload button)
  onFileUpload = (e) => {
    e.preventDefault();
    // Create an object of formData
    const formData = new FormData();

    formData.append('selfie',this.state.file);
    formData.append('document',this.state.file2);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    axios.post("http://api.mercadotokens.com.br/api/customer-orders/first-facematch",formData,config)
      .then((response) => {
        this.setState({erro: '' });

        if (response.data.token_transaction !== "") {
          console.log("REDIRECT");
          this.props.history.push('/cvc')
        }
        console.log(response);
      }).catch((error) => {
      console.log("ACONTECEU UM ERRO");
      this.setState({erro: 'Aconteceu um erro' });
    });
  };

  render() {
    return (
      <Container>
        <Topo>
          <img src={Logo} alt=""/>
        </Topo>

        <h1>Tire uma foto sua e do seu RG ou CNH para validar sua compra.</h1>
        <p className="error">{this.state.erro}</p>

        <Inputs>
          <p>Foto sua</p>
          <img width={"150px"} src={this.state.file}/>
          <input type="file" accept="image/*" capture="camera" onChange={this.handleChangeFile1}/>

          <p>Foto do seu documento</p>
          <img width={"150px"} src={this.state.file2}/>
          <input type="file" accept="image/*" capture="camera"  onChange={this.handleChangeFile2}/>
          <button onClick={this.onFileUpload}>
            Enviar
          </button>

          <img className="mt" src={MercadoToken} alt=""/>

          {/*<Link to="/cvc">*/}
          {/*  <button>Enviar</button>*/}
          {/*</Link>*/}
        </Inputs>
      </Container>
    );
  }
}

export default Primeira;