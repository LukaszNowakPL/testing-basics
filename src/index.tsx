import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App/App';
import makeServer from './server/server';

makeServer();

ReactDOM.render(<App />, document.getElementById('root'));
