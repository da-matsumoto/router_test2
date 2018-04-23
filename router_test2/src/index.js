import React from 'react';
import ReactDOM from 'react-dom';
import HelloApp2 from './HelloApp2'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HelloApp2 />, document.getElementById('root'));
registerServiceWorker();
