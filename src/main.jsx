// src/index.js (ou App.js se este for o arquivo principal)

import { createRoot } from 'react-dom/client';
import AppRoutes from './componentes/Router/Routes';
import { BrowserRouter } from 'react-router-dom';
import { PurchaseProvider } from './contexts/PurchaseContext'; // Certifique-se de ajustar o caminho conforme necessário

createRoot(document.getElementById('root')).render(
  <PurchaseProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </PurchaseProvider>
);
