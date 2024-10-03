import { createContext } from 'react';
import { useState } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {   
    const [ordersSearch, setOrdersSearch] = useState('');
    const [openClosedOrders, setOpenClosedOrders]  = useState('open');

  return (
    <ProductContext.Provider value={{ ordersSearch, setOrdersSearch, openClosedOrders, setOpenClosedOrders}}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };