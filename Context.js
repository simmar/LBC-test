import React, {createContext, useState} from 'react';
export const CartContext = createContext();

const Context = (props) => {
  const [values, setValues] = useState('');

  return (
    <CartContext.Provider value={{values, setValues}}>
      {props.children}
    </CartContext.Provider>
  );
};

export default Context;
