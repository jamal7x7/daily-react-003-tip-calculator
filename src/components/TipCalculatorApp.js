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
    <svg width="352" height="660" viewBox="0 0 352 660" xmlns="http://www.w3.org/2000/svg">
      <defs>
          <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="linearGradient-1">
              <stop stopColor="#DD8EDA" offset="0%" />
              <stop stopColor="#42A3F9" offset="100%" />
          </linearGradient>
      </defs>
      <g id="dot" fill="none" fillRule="evenodd">
          <g id="tic" transform="translate(-544 -219)">
              <g id="cal" transform="translate(544 219)">
                  <path d="M0,238.004454 L0,0 L352,0 L352,238.004454 C337.042868,238.271138 325,250.479188 325,265.5 C325,280.520812 337.042868,292.728862 352,292.995546 L352,660 L0,660 L0,292.995546 C0.166310543,292.998511 0.332981393,293 0.5,293 C15.6878306,293 28,280.687831 28,265.5 C28,250.312169 15.6878306,238 0.5,238 C0.332981393,238 0.166310543,238.001489 -4.33119374e-11,238.004454 Z"
                  id="calc" fill="url(#linearGradient-1)" />
                  <path d="M34.3057837,266.723897 L317.761123,266.723897" id="Path-2" stroke="#062659"
                  strokeDasharray="12,9" />
              </g>
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
        {'$' + props.billAmount * props.tipPercent /100 }
      </div>
      <div className="perPersonLabel">per person</div>
      <div className="perPerson">
        {props.peopleNumber > 0 ? '$' + props.billAmount * props.tipPercent / (100 * props.peopleNumber) : 0}
      </div>
    </div>

    <form className="form" >
      <div className="label">Bill ($)</div>
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
    
    perPerson: 0,
    billAmount: 0,
    tipPercent: 15,
    peopleNumber: 1

  }


  billHandler = (e) => {
    e.preventDefault()
    const b = e.target.value
    this.setState( () => ({
      billAmount: b
    }))
  }
  tipHandler = (e) => {
    e.preventDefault()
    const t = e.target.value
    this.setState( () => ({
      tipPercent: t
    }))
  }
  peopleHandler = (e) => {
    e.preventDefault()
    const p = e.target.value
    this.setState( () => ({
      peopleNumber: p
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
         />
      </div>
    );

  }
}

export default TipCalculatorApp;