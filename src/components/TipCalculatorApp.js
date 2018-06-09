import React, { Component } from 'react';
//import logo from './logo.svg';
import '../Styles/style.css';

const Header = () => (
  <header className="App-header">
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <h1 className="App-title">TiP Calculator</h1>
  </header>
)

const SVG = (props) => ( 
  <div className='svg'> 
    <svg width="352" height="660" viewBox="0 0 352 660" >
      <defs>
          <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="linearGradient-1">
              <stop stopColor="#DD8EDA" offset="0%" />
              <stop stopColor="#42A3F9" offset="100%" />
          </linearGradient>
      </defs>
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="Desktop-HD-Copy" transform="translate(-544 -219)" fill="url(#linearGradient-1)">
              <path d="M544,457.004454 L544,219 L896,219 L896,457.004454 C881.042868,457.271138 869,469.479188 869,484.5 C869,499.520812 881.042868,511.728862 896,511.995546 L896,879 L544,879 L544,511.995546 C544.166311,511.998511 544.332981,512 544.5,512 C559.687831,512 572,499.687831 572,484.5 C572,469.312169 559.687831,457 544.5,457 C544.332981,457 544.166311,457.001489 544,457.004454 Z"
              id="Combined-Shape-Copy" />
          </g>
      </g>
    </svg>      
  </div>
)


const Calculator = (props) => (
  <div className='display'>

    <div className="result">
      <div className="tipLabel">Tip</div>
      <div className="label">total</div>
      <div className="tip">
      {props.billAmount * props.tipPercent /100 }
      </div>
      <div className="perPersonLabel">per person</div>
      <div className="perPerson">
        {props.tip / props.peopleNumber}
      </div>
    </div>

    <form className="form" onChange={props.calculate}>
      <div className="label">Bill</div>
      <input 
        type="number" 
        name="bill" 
        defaultValue={props.billAmount} 
        onChange={props.billHandler}
      />
      <div className="label">Tip %</div>
      <input 
        type="number" 
        name="tip" 
        defaultValue={props.tipPercent} 
        onChange={props.tipHandler}
      />
      <div className="label">Poeple</div>
      <input 
        type="number" 
        name="people" 
        defaultValue={props.peopleNumber} 
        onChange={props.peopleHandler}
      />
    </form>
    
  </div>
)






class TipCalculatorApp extends Component {

  state = {
    tip: 15,
    perPerson: 0,
    billAmount: 100,
    tipPercent: 15,
    peopleNumber: 1

  }


  billHandler = (e) => {
    e.preventDefault()
    const b = e.target.value
    this.calculate()
    this.setState( () => ({
      billAmount: b
    }))
  }
  tipHandler = (e) => {
    e.preventDefault()
    const t = e.target.value
    this.calculate()
    this.setState( () => ({
      tipPercent: t
    }))
  }
  peopleHandler = (e) => {
    e.preventDefault()
    const p = e.target.value
    this.calculate()
    this.setState( () => ({
      peopleNumber: p
    }))
  }

  calculate = () => {
    this.setState( (prevState) => ({
      tip: this.state.billAmount * this.state.tipPercent /100,
      perPerson: this.state.tip/this.state.peopleNumber
    }))
    
  }

  render() {
    return (
      <div className="App">
         <Header />
         <SVG /> 
         <Calculator 
         billHandler={this.billHandler}
         tipHandler={this.tipHandler}
         peopleHandler={this.peopleHandler}
         billAmount={this.state.billAmount}
         tipPercent={this.state.tipPercent}
         peopleNumber={this.state.peopleNumber}
         tip={this.state.tip}
         perPerson={this.state.perPerson}
         />
      </div>
    );

  }
}

export default TipCalculatorApp;