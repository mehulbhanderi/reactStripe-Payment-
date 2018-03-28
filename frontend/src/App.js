import React, { Component } from 'react';
import './App.css';
import Checkout from './Checkout'
import {FormControl} from 'react-bootstrap'

class App extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            amount:""
        }
    }
    onNameChange=(e)=>{
        this.setState({
            name:e.target.value
        })
    };
    onAmountChange=(e)=>{
        this.setState({
            amount:Number(e.target.value)
        })
    };
  render() {
    return (
      <div className="App">
          <div>
              <img src={require('./images/03-Good-payment-gateway.jpg')}
                   style={{width: 400}} alt=""/>
          </div>
            <div className="form-class">

                <FormControl type="text"  name="username" onChange={(e)=>{this.onNameChange(e)}} placeholder="Enter your Name"/><br/>
                <FormControl type="text" name="amount" onChange={(e)=>{this.onAmountChange(e)}} placeholder="Enter your Amount" /><br/>
            </div>
            <Checkout
                name={this.state.name}
                description={'Mehul'}
                amount={this.state.amount}/>

      </div>
    );
  }
}

export default App;
