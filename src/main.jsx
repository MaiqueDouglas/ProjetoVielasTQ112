import React from 'react';
import ReactDom from 'react-dom';
import AppRoutes from './componentes/Router/Routes';
import { BrowserRouter } from 'react-router-dom';

ReactDom.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
  document.getElementById('root')
);
