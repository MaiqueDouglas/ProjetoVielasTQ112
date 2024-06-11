// src/contexts/PurchaseContext.js

import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const PurchaseContext = createContext();

export const PurchaseProvider = ({ children }) => {
  const [purchaseData, setPurchaseData] = useState({
    photoDetails: {
      uuid: '',
      title: '',
      description: '',
      resolution: '',
      usage: '',
      mediaType: '',
      licenseType: ''
    },
    selectedPlan: ''
  });

  return (
    <PurchaseContext.Provider value={{ purchaseData, setPurchaseData }}>
      {children}
    </PurchaseContext.Provider>
  );
};

PurchaseProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const usePurchase = () => useContext(PurchaseContext);
