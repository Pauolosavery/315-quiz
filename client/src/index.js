import React from 'react';
import './index.css';
import {App}  from './components/App/App';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(<Provider store={store}><App /></Provider>);
