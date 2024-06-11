import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './componentes/Router/Routes';
import { BrowserRouter } from 'react-router-dom';
import { PurchaseProvider } from './contexts/PurchaseContext';

createRoot(document.getElementById('root')).render(
  <PurchaseProvider>
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
 </PurchaseProvider>
);

