import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TipCalculatorApp from './components/TipCalculatorApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TipCalculatorApp />, document.getElementById('root'));
registerServiceWorker();
