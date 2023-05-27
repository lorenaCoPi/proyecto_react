import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
//importamos BrowserRouter, que permite gestionar rutas con React
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

//Tengo que indicar en index.js que mi componente principal es App.js
//Importo en index.js la función de mi libreria -> import { BrowserRouter } from 'react-router-dom'; -> para abreviarlo, añado as Router para no tener que estar escribiendo todo el rato BrowserRouter -> import { BrowserRouter as Router} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
);

//Tengo que envolver a <App/> entre las etiquetas <BrowserRouter> <App/> </BrowserRouter>
